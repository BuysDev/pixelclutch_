import { NextRequest, NextResponse } from "next/server"
import { generateFeed } from "@/lib/utils/algorithms/videoFeed"

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId")
  const user = await getUserById(userId!)
  const videos = await getAllVideos()

  const feed = generateFeed(videos, user)
  return NextResponse.json(feed)
}

async function getUserById(id: string) {
  return { id, interests: ["LoL", "FIFA"] }
}
async function getAllVideos() {
  return [
    { id: "1", likes: 100, comments: 10, shares: 5, watchTimeAvg: 0.8, createdAt: new Date(), tags: ["LoL"] },
    { id: "2", likes: 50, comments: 5, shares: 2, watchTimeAvg: 0.5, createdAt: new Date(), tags: ["FIFA"] }
  ]
}
