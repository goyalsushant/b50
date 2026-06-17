export interface SourceChunk {
    text: string
    file: string
    score: number
}

export interface QueryResponse {
    answer: string
    contextUsed: string
}