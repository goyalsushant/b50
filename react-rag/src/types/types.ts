export interface SourceChunk {
    text: string
    file: string
    score: number
}

export interface QueryResponse {
    answer: string
    contextUsed: string
    sources: SourceChunk[]
}

export interface ChatMessage {
    id: string
    role: 'user' | 'assistant'
    content: string
    timestamp: string
    sources?: SourceChunk[]
}

export interface IngestResponse {
    message: string
    chunks: number
}