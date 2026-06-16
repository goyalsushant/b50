const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
require('dotenv').config()

const app = express()
app.use(express.json())

app.post('/generate-embeddings', async (req, res) => {
    const { text } = req.body
    try {
        const response = await axios.post(`${process.env.URL}/api/embeddings`, {
            model: 'nomic-embed-text',
            prompt: text
        })

        const data = response.data
        res.json({
            embedding: data.embedding
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.post('/ingest-source-data', async (req, res) => {
    const { text } = req.body
    try {
        // const text = await fsExtra.readFile('./docs/test.txt', 'utf-8')
        // console.log(text)
        const chunks = text.split('\n').filter(Boolean)
        const store = await fs.readJSON('./vectorStorage.json').catch(() => [])

        for (const chunk of chunks) {
            try {
                const res = await axios.post(`${process.env.url}/api/embeddings`, {
                    model: 'nomic-embed-text',
                    prompt: text
                })

                const data = res.data
                store.push({
                    text: chunk,
                    embeddings: data.embedding
                })
            }
            catch (err) {
                console.log(err)
            }
        }

        // console.log(vectors)

        await fs.writeJSON('./vectorStorage.json', store, { space: 2 })
        // console.log('Index successful')
        res.json({
            message: 'Data ingested successfully',
            chunks: chunks.length
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

function cosine(a, b) {
    let dot = 0
    let magnitudeA = 0
    let magnitudeB = 0

    for (let i = 0; i < a?.length; i++) {
        dot += a[i] * b[i]
        magnitudeA += a[i] * a[i]
        magnitudeB += b[i] * b[i]
    }

    return dot / (Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB))
}

app.post('/query', async (req, res) => {
    try {
        const response = await axios.post(`http://localhost:11434/api/embeddings`, {
            model: 'nomic-embed-text',
            prompt: req.body.prompt
        })
        const data = await response.data
        const queryEmbedding = data?.embedding[0]

        // Retrieval
        const store = await fs.readJSON('./vectorStorage.json')

        const topKNeighbour = store.map(item => ({
            ...item,
            score: cosine(queryEmbedding, item.embedding)
        }))
            .sort((a, b) => b.score - a.score)
            .slice(0, 2)

        // Augmentation starts
        const context = topKNeighbour.map(item => item.text).join('\n')

        const prompt = `
        You are a support assistant.
        Answer only using the following context.
        
        Context: ${context}
        
        Question: ${req.body.prompt}
    `
        // Augmentation ends

        const { data: responseData } = await axios.post(`${process.env.URL}/api/generate`, {
            model: 'llama3.2:1b',
            prompt,
            stream: false
        })

        res.json({
            answer: responseData,
            contextUsed: topKNeighbour
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.listen(3000, () => {
    console.log('App is running on PORT 3000')
})