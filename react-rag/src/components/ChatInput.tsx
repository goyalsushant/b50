import { useState } from "react"

interface Props {
    onSend: (question: string) => void
    loading: boolean
}

function ChatInput({ onSend, loading }: Props) {

    const [question, setQuestion] = useState<string>('')

    const submit = () => {
        if (!question.trim()) return
        onSend(question)
        setQuestion('')
    }

    return (
        <div className="chat-input">
            <textarea
                placeholder='Type your query here...'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />

            <button
                className="ask-btn"
                disabled={loading}
                onClick={submit}
            >Send</button>
        </div>
    )
}

export default ChatInput