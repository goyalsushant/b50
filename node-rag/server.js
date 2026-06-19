const express = require('express')
const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const cors = require('cors')
const { cosine } = require('./helper/cosine')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

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
                    embeddings: data.embedding,
                    // file: 'docs.txt'
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

app.post('/query', async (req, res) => {
    try {
        const response = await axios.post(`${process.env.URL}/api/embeddings`, {
            model: 'nomic-embed-text',
            prompt: req.body.prompt
        })
        const data = await response.data
        const queryEmbedding = data?.embedding

        // Retrieval
        const store = await fs.readJSON('vectorStorage.json').catch(() => [])
        const topKNeighbour = store.map(item => ({
            ...item,
            score: cosine(queryEmbedding, item.embedding)
        }))
            .sort((a, b) => b.score - a.score)
            .filter(item => item.score > 0.5)
        // .slice(0, 2)
        // Augmentation starts
        const context = topKNeighbour.map(item => `${item.text}`).join('\n')

        const prompt = `
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
            contextUsed: context,
            sources: topKNeighbour.map(item => ({
                file: item.file,
                text: item.text,
                score: item.score
            }))
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

app.post('/ingest-folder', async (req, res) => {
    try {
        const dir = './docs'
        const store = await fs.readJSON('./vectorStorage.json')
            .catch(() => [])

        const files = await fs.readdir(dir)

        for (const file of files) {
            const filePath = path.join(dir, file)
            const content = await fs.readFile(filePath, 'utf-8')

            const chunks = content.split('\n').filter(Boolean)

            for (const chunk of chunks) {
                const embedding = await axios.post(`${process.env.URL}/api/embeddings`, {
                    model: 'nomic-embed-text',
                    prompt: chunk
                })

                const embedData = embedding.data

                store.push({
                    text: chunk,
                    file,
                    embedding: embedData.embedding
                })
            }
        }
        await fs.writeJSON('./vectorStorage.json', store, { space: 2 })
        res.json({
            message: 'Folder ingested successfully',
            files: files.length,
            chunks: store.length
        })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    }
})

app.listen(3000, () => {
    console.log('App is running on PORT 3000')
})