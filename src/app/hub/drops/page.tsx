//create a page like tiktok feed page
import React from 'react';
import DropFeed from '@/components/hub/layouts/DropFeed';
import Header from '@/components/hub/navigation/header';

const DropsPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen">
                <main className="p-4">
                    <DropFeed />
                </main>
            </div>
        </>
    );
}
export default DropsPage;