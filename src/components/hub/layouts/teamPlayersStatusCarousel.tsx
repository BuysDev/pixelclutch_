'use client'

import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Trophy, PlusCircle } from 'lucide-react'
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Member {
    id: number
    name: string
    game: string
    initialLetter: string
    online: boolean
}

const members: Member[] = [
    {
        id: 1,
        name: "Mago GZR",
        game: "CS2",
        initialLetter: "MG",
        online: true
    },
    {
        id: 2,
        name: "Guguis",
        game: "Rainbow Six Siege",
        initialLetter: "G",
        online: false
    }
]

export function TeamPlayersStatusCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    const scrollPrev = () => emblaApi?.scrollPrev()
    const scrollNext = () => emblaApi?.scrollNext()

    return (
        <div className="w-[85%] mt-5 space-y-4">
            <div className="relative">
                <div className='overflow-hidden' ref={emblaRef}>
                    <div className='flex'>
                        {members.map((member) => (
                            <div key={member.id} className="flex-[0_0_100%] cursor-normal min-w-0 md:flex-[0_0_calc(100%/2.5)] lg:flex-[0_0_calc(100%/3)] px-3">
                                <article className="bg-gray-800 transition-all duration-300 rounded-xl p-6 space-y-4 h-full flex flex-col border border-gray-700 hover:border-cobalt-blue">
                                    <div className='flex-1'>
                                        <div className='flex gap-4 items-center'>
                                            <div className="p-3 bg-electric-pink/10 rounded-full">
                                                <Avatar>
                                                    <AvatarFallback className="text-xl font-bold">{member.initialLetter}</AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-xl mb-2 text-white'>{member.name} {member.online === true ? "(Online)" : "(Offline)"}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-xs bg-gray-900 px-2 py-1 rounded'>{member.game}</span>
                                        </div>

                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-2 px-3 py-1 rounded-md text-sm bg-blue-400 cursor-pointer text-black font-bold hover:bg-blue-800"
                                        >
                                            <PlusCircle className='w-4 h-4' />
                                            <span className="hidden sm:inline">Invite</span>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className='bg-gray-800 hover:bg-neon-blue transition-all flex items-center justify-center rounded-full w-10 h-10 absolute left-0 -translate-y-1/2 top-1/2 z-1 border border-gray-700 shadow-lg cursor-pointer'
                    onClick={scrollPrev}
                    aria-label="Previous tournament"
                >
                    <ChevronLeft className='w-6 h-6 text-white' />
                </button>

                <button
                    className='bg-gray-800 hover:bg-neon-blue transition-all flex items-center justify-center rounded-full w-10 h-10 absolute right-0 -translate-y-1/2 top-1/2 z-1 border border-gray-700 shadow-lg cursor-pointer'
                    onClick={scrollNext}
                    aria-label="Next tournament"
                >
                    <ChevronRight className='w-6 h-6 text-white' />
                </button>
            </div>
        </div>
    )
}