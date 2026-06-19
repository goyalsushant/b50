import type { ChatMessage } from "../types/types"
import SourceList from "./SourceList"

interface Props {
    message: ChatMessage
}
function ChatMessage({ message }: Props) {
    return (
        <div className={`message ${message.role}`}>
            <div className="bubble">
                <div>
                    {message.content}
                </div>

                <small>{message.timestamp}</small>

                {
                    message.role === 'assistant' && message.sources && message.sources?.length > 0 && (
                        <SourceList sources={message.sources} />
                    )
                }
            </div>
        </div>
    )
}

export default ChatMessage