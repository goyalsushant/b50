const fsExtra = require('fs-extra')
const axios = require('axios')
require('dotenv').config()

// Generation
const llm = async (prompt) => {
    try {
        // const { data } = await axios.post(`${process.env.URL}/api/generate`, {
        //     model: 'llama3.2:1b',
        //     prompt,
        //     stream: false
        // })

        // return data.response

        const res = await fetch(`${process.env.URL}/api/generate`, {
            method: 'POST',
            headers: {
                'COntent-Type': 'application/json',

            },
            body: JSON.stringify({
                model: 'llama3.2:1b',
                prompt,
                stream: true
            })
        })

        const reader = res.body.getReader()
        const decoder = new TextDecoder()

        while (true) {
            const { value, done } = await reader.read()
            if (done) break;

            const chunk = decoder.decode(value)
            console.log(chunk)
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

// Creation of vector embeddings
async function embed(text) {
    try {
        const res = await axios.post(`http://localhost:11434/api/embed`, {
            model: 'nomic-embed-text',
            prompt: text
        })

        const data = res.data
        return data?.embedding[0]
    }
    catch (err) {
        console.log(err.message)
    }
}

// Similarity Search Algorithm
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

async function main() {
    const question = 'What is the refund policy?'

    const queryEmbedding = await embed(question)
    console.log(queryEmbedding)

    // Retrieval
    const store = await fsExtra.readJSON('./vectorStorage.json')

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
        
        Question: ${question}
    `
    // Augmentation ends

    // Generation
    const answer = await llm(prompt)

    console.log(answer)
}

main().catch(console.error)