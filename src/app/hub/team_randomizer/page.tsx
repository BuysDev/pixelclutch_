'use client'

import Header from "@/components/hub/navigation/header"
import { teamRandomizer } from "@/lib/scripts/teamRandomizer"
import { useState } from "react"

export default function TeamRandomizerPage() {
    const [members, setMembers] = useState('')
    const [teams, setTeams] = useState<{ teamA: string[]; teamB: string[] }>({ teamA: [], teamB: [] })

    const handleRandomize = () => {
        const players = members
            .split(",")
            .map(p => p.trim())
            .filter(p => p.length > 0)

        const result = teamRandomizer(players)
        setTeams(result)
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-8">Team Randomizer</h1>
                <div className="w-full max-w-md p-4 border rounded-lg shadow-lg">
                    <form className="mb-4" onSubmit={(e) => e.preventDefault()}>
                        <label className="block text-sm font-medium mb-2" htmlFor="players">
                            Enter player names (comma separated):
                        </label>
                        <input
                            type="text"
                            id="players"
                            value={members}
                            onChange={(e) => setMembers(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="e.g. Alice, Bob, Charlie, Dave, Eve, Frank, Grace, Heidi, Ivan, Judy"
                        />
                    </form>
                    <button
                        onClick={handleRandomize}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Randomize Teams
                    </button>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold mb-2">Team A</h2>
                        <ul className="list-disc list-inside mb-4">
                            {teams.teamA.map((player, index) => (
                                <li key={index}>{player}</li>
                            ))}
                        </ul>
                        <h2 className="text-2xl font-semibold mb-2">Team B</h2>
                        <ul className="list-disc list-inside">
                            {teams.teamB.map((player, index) => (
                                <li key={index}>{player}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
