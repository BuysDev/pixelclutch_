'use client'

import Header from "@/components/hub/navigation/header"
import { Avatar } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { LiveInRegion } from '@/components/hub/layouts/liveInRegion'
import { useRouter } from "next/navigation"
import { TeamPlayersStatus } from '@/components/hub/layouts/teamPlayersStatus'
import { useSession } from "@/lib/auth-client"
import React from "react"

export default function Hub() {
    const session = useSession()
    const router = useRouter()

    React.useEffect(() => {
        if (!session) {
            router.push('/auth/signin')
        }
    }, [session.data, router])

    if (!session.data) {
        return null
    }

    return (
        <div className="min-h-screen">
            <Header />
            <div className="flex">
                <main className="flex-1">
                    <div className="p-6">
                        <div className="max-w-9xl mx-auto">
                            <div className="flex items-center gap-4">
                                <Avatar className="bg-electric-pink/10 rounded-full items-center flex justify-center p-8">
                                    <AvatarFallback className="text-xl font-bold">
                                        MG
                                    </AvatarFallback>
                                </Avatar>
                                <section>
                                    <h1 className="text-2xl font-bold text-white">
                                        {session.data?.user.name}
                                    </h1>
                                    <p>G4RR4</p>
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
                    </div>
                    <TeamPlayersStatus />
                </main>
            </div>
        </div>
    )
}