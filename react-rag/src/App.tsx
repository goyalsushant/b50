import { useEffect, useState } from 'react'
import './style.css'
import { ingestFolder, askQuery } from './api/api'
import type { ChatMessage, SourceChunk } from './types/types'
import ChatWindow from './components/ChatWIndow'
import ChatInput from './components/ChatInput'

function App() {

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [ingesting, setIngesting] = useState<boolean>(false)

  useEffect(() => {
    localStorage.setItem('chat-history', JSON.stringify(messages))
  }, [messages])

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

  const handleAsk = async (question: string) => {

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [
      ...prev,
      userMessage
    ])

    if (!question.trim()) return

    try {
      setLoading(true)

      const result = await askQuery(question)
      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: result.answer.response,
        timestamp: new Date().toLocaleTimeString(),
        sources: result.sources
      }

      setMessages(prev => [
        ...prev,
        assistantMessage
      ])
    }
    catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: 'Something Went Wrong',
          timestamp: new Date().toLocaleTimeString(),
        }
      ])
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header>
        <h1>RAG Assistant</h1>

        <button onClick={handleIngest} disabled={ingesting}>{ingesting ? 'Ingesting Documents' : 'Ingest Documents'}</button>
      </header>

      <ChatWindow messages={messages} />

      <ChatInput loading={loading} onSend={handleAsk} />
    </div>
  )
}

export default App
