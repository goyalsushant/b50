const fsExtra = require('fs-extra')
const axios = require('axios')
require('dotenv').config()

const embed = async (text) => {

    try {
        const res = await axios.post(`${process.env.url}/api/embeddings`, {
            model: 'nomic-embed-text',
            prompt: text
        })

        const data = res.data
        return data.embedding
    }
    catch (err) {
        console.log(err)
    }

}

async function extractText() {
    try {
        const text = await fsExtra.readFile('./docs/test.txt', 'utf-8')
        // console.log(text)
        const chunks = text.split('\n').filter(Boolean)

        const vectors = []

        for (const chunk of chunks) {
            const embedding = await embed(chunk)
            vectors.push({
                text: chunk,
                embedding
            })
        }

        // console.log(vectors)

        await fsExtra.writeJSON('./vectorStorage.json', vectors, { space: 2 })
        console.log('Index successful')
    }
    catch (err) { 
        console.log(err.messsage)
    }

}

extractText()