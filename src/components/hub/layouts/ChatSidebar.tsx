import React from 'react';

const chats = [
    { id: 1, name: 'Alice', lastMessage: 'Hey, how are you?', time: '2m ago' },
    { id: 2, name: 'Bob', lastMessage: 'Did you see the game last night?', time: '10m ago' },
    { id: 3, name: 'Charlie', lastMessage: 'Let\'s catch up soon!', time: '1h ago' },
];

const ChatSidebar: React.FC = () => {
    return (
        <div className="w-full h-full bg-zinc-900/80 border-r border-gray-700 overflow-y-auto">
            <div className="p-4">
                <h2 className="text-xl font-bold text-white">Chats</h2>
            </div>
            <ul>
                {chats.map(chat => (
                    <li key={chat.id} className="p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-white">{chat.name}</h3>
                                <p className="text-sm text-gray-400">{chat.lastMessage}</p>
                            </div>
                            <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ChatSidebar;