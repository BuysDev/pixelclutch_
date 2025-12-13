'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'bot';
}

const ChatWindow: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const sendMessage = () => {
        if (input.trim() === '') return;
        const newMessage: Message = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, newMessage]);
        setInput('');
        setTimeout(() => {
            const botMessage: Message = { id: Date.now() + 1, text: 'This is a bot response.', sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 1000);
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-[80%] bg-zinc-900/80 border border-gray-700 rounded-lg shadow-lg">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map(msg => (
                    <div key={msg.id} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="p-4 border-t border-gray-700">
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendMessage()}
                        className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-gray-700 focus:outline-none"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ChatWindow;