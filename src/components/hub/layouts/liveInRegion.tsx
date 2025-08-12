'use client'

import * as React from "react"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Trophy } from 'lucide-react'
import { TbBrandKickFilled } from "react-icons/tb"

interface Live {
    id: number
    name: string
    description: string
    organization: string
    prizePool: number
    game: string
}

const live: Live[] = [
    {
        id: 1,
        name: "São Paulo Major 2024",
        description: "Major Championship",
        organization: "ESL Gaming",
        game: "CS2",
        prizePool: 50000
    },
    {
        id: 2,
        name: "R6 Major Manchester 2024",
        description: "The biggest R6 Siege X Championship",
        game: "Rainbow Six Siege",
        prizePool: 400000,
        organization: "Ubisoft"
    }
]

export function LiveInRegion() {
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
                        {live.map((tournament) => (
                            <div key={tournament.id} className="flex-[0_0_100%] cursor-normal min-w-0 md:flex-[0_0_calc(100%/2.5)] lg:flex-[0_0_calc(100%/3)] px-3">
                                <article className="bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-xl p-6 space-y-4 h-full flex flex-col border border-gray-700 hover:border-neon-blue">
                                    <div className='flex-1'>
                                        <div className='flex gap-4 items-start'>
                                            <div className="p-3 bg-gray-900 rounded-lg">
                                                <Trophy className="w-6 h-6 text-electric-pink" />
                                            </div>
                                            <div>
                                                <h3 className='font-bold text-xl mb-2 text-white'>{tournament.name}</h3>
                                                <p className='text-gray-400 text-sm'>
                                                    {tournament.organization}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='border-t border-gray-700 pt-4 flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <span className='text-xs bg-gray-900 px-2 py-1 rounded'>{tournament.game}</span>
                                            <span className='text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded'>
                                                R$ {tournament.prizePool.toLocaleString()}
                                            </span>
                                        </div>

                                        <a
                                            href="#"
                                            className="flex items-center justify-center gap-2 px-3 py-1 rounded-md text-sm bg-green-400 cursor-pointer text-black font-bold hover:bg-green-800"
                                        >
                                            <TbBrandKickFilled className='w-4 h-4' />
                                            <span className="hidden sm:inline">Watch on Kick</span>
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