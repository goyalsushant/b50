import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {ingestFolder, askQuery} from './api'

function App() {
  
  const [question, setQuestion] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [ingesting, setIngesting] = useState<boolean>(false)

  const handleIngest = async () => {
    try {
      setIngesting(true)
      const result = await ingestFolder()
      alert('Ingestion of documents complete')
    }
    catch(err) {
      alert('Failed to ingest documents')
    }
    finally {
      setIngesting(false)
    }
  }

  const handleAsk = async () => {

    if(!question.trim()) return

    try {
      setLoading(true)

      const result = await askQuery(question)
      setAnswer(result.answer)

    }
    catch(err) {
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
        disabled = {ingesting}
        onClick = {handleIngest}
      >Ingest Documents</button>

      <div className='chat-box'>
        <textarea
          placeholder= 'Type your query here...'
          value= {question}
          onChange = {(e) => setQuestion(e.target.value)}
        />

        <button 
        className="ask-btn"
        disabled = {loading}
        onClick = {handleAsk}
      >Ask Question</button>
        </div>

        {
          answer && (
            <div className='answer-section'>
              <h2>Answer</h2>
              <div className='answer-card'>
                {answer.response}
                </div>
              </div>
          )
        }
    </div>
  )
}

export default App
