export function teamRandomizer(players: string[]): { teamA: string[]; teamB: string[] } {
    const shuffledPlayers = [...players]

    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }

    const teamA = shuffledPlayers.splice(0, 5)
    const teamB = shuffledPlayers.splice(5)

    return {
        teamA,
        teamB
    }
}