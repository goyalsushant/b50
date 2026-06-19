import { useState } from 'react'
import './App.css'
import { ingestFolder, askQuery } from './api/api'
import type { SourceChunk } from './types/types'

function App() {

  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [ingesting, setIngesting] = useState<boolean>(false)
  const [sources, setSources] = useState<SourceChunk[]>([])

  const handleIngest = async () => {
    try {
      setIngesting(true)
      const result = await ingestFolder()
      alert('Ingestion of documents complete')
    }
    catch (err) {
      alert('Failed to ingest documents')
    }
    finally {
      setIngesting(false)
    }
  }

  const handleAsk = async () => {

    if (!question.trim()) return

    try {
      setLoading(true)

      const result = await askQuery(question)
      setAnswer(result.answer.response)
      setSources(result.sources || [])

    }
    catch (err) {
      alert('Failed to query')
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>RAG Assistant</h1>

      <button
        className="ingest-btn"
        disabled={ingesting}
        onClick={handleIngest}
      >Ingest Documents</button>

      <div className='chat-box'>
        <textarea
          placeholder='Type your query here...'
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          className="ask-btn"
          disabled={loading}
          onClick={handleAsk}
        >Ask Question</button>
      </div>

      {
        answer && (
          <div className='answer-section'>
            <h2>Answer</h2>
            <div className='answer-card'>
              {answer}
            </div>
          </div>
        )
      }
      {
        sources.length > 0 && (
          <div className='sources-section'>
            <h2>Sources</h2>
            {
              sources.map((src, index) => (
                <div key={index} className=' source-card'>
                  <div className='file'>
                    {src.file}
                  </div>
                  <div className='score'>
                    Similarity: {src.score.toFixed(3)}
                  </div>
                  <p>{src.text}</p>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default App
