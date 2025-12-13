 interface Video {
  id: string
  likes: number
  comments: number
  shares: number
  watchTimeAvg: number // 0 a 1
  createdAt: Date
  tags: string[]
}

interface User {
  id: string
  interests: string[]
}

export function calculateScore(video: Video, user: User): number {
  const base = video.likes * 2 + video.comments * 3 + video.shares * 5
  const watchFactor = video.watchTimeAvg * 10

  const hoursSince = (Date.now() - video.createdAt.getTime()) / (1000 * 60 * 60)
  const recencyBoost = Math.exp(-hoursSince / 24)

  const matches = video.tags.filter(tag => user.interests.includes(tag)).length
  const personalizationBoost = 1 + matches * 0.2

  return (base + watchFactor) * recencyBoost * personalizationBoost
}

export function generateFeed(videos: Video[], user: User): Video[] {
  return videos.sort((a, b) => calculateScore(b, user) - calculateScore(a, user))
}
