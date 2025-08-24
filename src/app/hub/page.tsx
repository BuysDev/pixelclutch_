'use server'

import Header from "@/components/hub/navigation/header"
import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { getServerSession } from 'next-auth/next'
import { LiveInRegion } from '@/components/hub/layouts/liveInRegion'
import { redirect } from "next/navigation"

export default async function Hub() {
    const session = await getServerSession()

    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex">
                <main className="flex-1 p-6">
                    <div className="max-w-9xl mx-auto">
                        <div className="flex items-center gap-4">
                            <Avatar className="bg-electric-pink/10 rounded-full items-center flex justify-center p-8">
                                <AvatarFallback className="text-xl font-bold">
                                    MG
                                </AvatarFallback>
                            </Avatar>
                            <section>
                                <h1 className="text-2xl font-bold text-white">
                                    Mago GZR
                                </h1>
                                <p>Legacy GG</p>
                            </section>
                        </div>

                        {/* Content grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="w-screen">
                                <h1 className="text-3xl font-bold mt-4">Tournaments live in your region</h1>
                                <LiveInRegion />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}