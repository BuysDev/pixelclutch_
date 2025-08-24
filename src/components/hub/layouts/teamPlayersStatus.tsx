import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import TeamPlayersStatusCarousel from './teamPlayersStatusCarousel'

export default function TeamPlayersStatus() {
    return (
        <div className="bg-gray-900">
            <div className="flex items-center mt-4 gap-4 p-6">
                <Avatar className="bg-electric-pink/10 rounded-full items-center flex justify-center p-8">
                    <AvatarFallback className="text-xl font-bold">
                        G
                    </AvatarFallback>
                </Avatar>
                <section>
                    <h1 className="text-2xl font-bold text-white">
                        G4RR4
                    </h1>
                </section>
            </div>
            <div className="p-6">
                <TeamPlayersStatusCarousel />
            </div>
        </div>
    )
}