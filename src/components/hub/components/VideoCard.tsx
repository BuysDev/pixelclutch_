export function VideoCard({ video }: { video: { id: number; title: string; thumbnail: string; views: number } }) {
    return (
        <div className="bg-zinc-900/80 border border-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{video.title}</h2>
                <p className="text-gray-400">{video.views} views</p>
            </div>
        </div>
    );
}