import axios from 'axios'
import type { IngestResponse, QueryResponse } from '../types/types'

const api =axios.create({
    baseURL: 'http://localhost:3000'
})

export const ingestFolder = async (): Promise<IngestResponse> => {
    const response = await api.post<IngestResponse>('/ingest-folder')
    return response.data
}

export const askQuery = async (question: string): Promise<QueryResponse> => {
    const response = await api.post<QueryResponse>('/query', {
        prompt: question
    })

    return response.data
}