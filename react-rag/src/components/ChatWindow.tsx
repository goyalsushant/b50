import { useEffect, useRef } from "react"
import type { ChatMessage as ChatMessageType } from "../types/types"
import ChatMessage from "./ChatMessage"

interface Props {
    messages: ChatMessageType[]
}
function ChatWindow({
    messages
}: Props) {

    const bottomRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])

    return (
        <div className="chat-window">
            {
                messages.map((message) => (
                    <ChatMessage
                        key={message.id}
                        message={message}
                    />
                ))
            }

            <div ref={bottomRef}></div>
        </div>
    )
}

export default ChatWindow