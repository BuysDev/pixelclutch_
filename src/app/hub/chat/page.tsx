//create a real time chat page with a sidebar like web instagram
import React from 'react';
import ChatSidebar from '@/components/hub/layouts/ChatSidebar';
import ChatWindow from '@/components/hub/layouts/ChatWindow';
import Header from '@/components/hub/navigation/header';

const ChatPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="flex min-h-screen">
                <aside className="w-1/4 border-r">
                    <ChatSidebar />
                </aside>
                <main className="w-3/4 p-4">
                    <ChatWindow />
                </main>
            </div>
        </>
    );
}
export default ChatPage;