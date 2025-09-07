//create a beautiful page card for a vertical video feed
import React from 'react';
export function DropCard({ drop }: { drop: { id: number; title: string; videoUrl: string; likes: number; comments: number } }) {
    return (
        <div className="bg-zinc-900/80 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <video
                src={drop.videoUrl}
                controls
                className="w-full h-auto max-h-[500px] bg-black"
            />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{drop.title}</h2>
                <div className="flex items-center space-x-4 text-gray-400">
                    <span>{drop.likes} Likes</span>
                    <span>{drop.comments} Comments</span>
                </div>
            </div>
        </div>
    );
}