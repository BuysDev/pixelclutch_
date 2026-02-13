// create a beatiful gaming website profile page that shows the avatar, videos, username, followers and follow button from the url using useParams
'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VideoCard } from '@/components/hub/components/cards/VideoCard';

export default function ProfilePage() {
    const { profile_id } = useParams();

    // Mock data
    const user = {
        username: profile_id,
        followers: 1200,
        following: 300,
        videos: [
            { id: 1, title: 'Gameplay 1', thumbnail: 'https://via.placeholder.com/150', views: 1000 },
            { id: 2, title: 'Gameplay 2', thumbnail: 'https://via.placeholder.com/150', views: 2000 },
            { id: 3, title: 'Gameplay 3', thumbnail: 'https://via.placeholder.com/150', views: 1500 },
        ],
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-4 mb-6">
                    <Avatar className="w-24 h-24 bg-electric-pink/10 border-2 border-electric-pink">
                        <AvatarFallback>G</AvatarFallback>
                    </Avatar>
                    <div>
                        <h1 className="text-3xl font-bold">{user.username}</h1>
                        <p className="text-gray-400">{user.followers} followers</p>
                        <Button className="mt-2 bg-electric-pink text-black hover:bg-pink-600 cursor-pointer">
                            Follow
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="videos" className="w-full">
                    <TabsList className="border-b border-gray-700 mb-4">
                        <TabsTrigger value="videos" className="text-white">Drops</TabsTrigger>
                        <TabsTrigger value="about" className="text-white">About</TabsTrigger>
                    </TabsList>

                    <TabsContent value="videos">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {user.videos.map(video => (
                                <VideoCard key={video.id} video={video} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="about">
                        <Card className="bg-zinc-900/80 border border-gray-700">
                            <CardHeader>
                                <CardTitle>Sobre {user.username}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400">
                                    This is {user.username}'s profile. Here you can find their favorite gameplay videos and much more!
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}