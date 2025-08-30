export function teamRandomizer(players: string[]): { teamA: string[]; teamB: string[] } {
    const shuffledPlayers = [...players]

    // Embaralha (Fisher–Yates shuffle)
    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }

    // Divide pela metade, independente da quantidade
    const mid = Math.ceil(shuffledPlayers.length / 2)
    const teamA = shuffledPlayers.slice(0, mid)
    const teamB = shuffledPlayers.slice(mid)

    return { teamA, teamB }
}
