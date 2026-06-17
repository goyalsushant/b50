import axios from 'axios'
// import {QueryResponse} from './types'

const api =axios.create({
    baseURL: 'http://localhost:3000'
})

export const ingestFolder = async (): Promise => {
    const response = await api.post('/ingest-folder')
    return response.data
}

export const askQuery = async (question: string): Promise => {
    const response = await api.post('/query', {
        prompt: question
    })

    return response.data
}