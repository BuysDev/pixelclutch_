// create a feed like tiktok and youtube shorts vertical video feed
import React from 'react';
import { DropCard } from '@/components/hub/components/cards/DropCard';
const drops = [
    { id: 1, title: 'Drop 1', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', likes: 100, comments: 20 },
    { id: 2, title: 'Drop 2', videoUrl: 'https://www.w3schools.com/html/movie.mp4', likes: 200, comments: 40 },
    { id: 3, title: 'Drop 3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', likes: 150, comments: 30 },
];

const DropFeed: React.FC = () => {
    return (
        <div className="space-y-4">
            {drops.map(drop => (
                <DropCard key={drop.id} drop={drop} />
            ))}
        </div>
    );
}
export default DropFeed;