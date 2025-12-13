import React from 'react';
import ChatSidebar from '@/components/hub/layouts/ChatSidebar';
import ChatWindow from '@/components/hub/layouts/ChatWindow';
import Header from '@/components/hub/navigation/header';

const ChatPage: React.FC = () => {
    return (
        <div className=''>
            <div className="flex h-screen">
                <aside className="w-1/4">
                    <ChatSidebar />
                </aside>
                <main className="w-3/4 p-4">
                    <ChatWindow />
                </main>
            </div>
        </div>
    );
}
export default ChatPage;