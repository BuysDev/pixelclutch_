import { NextResponse } from "next/server";

import { db } from "@/lib/data/db";

export default async function GET (request: Request) {
  const users = await db.query.users.findMany()

  if (!users) {
    return NextResponse.json({
      message: "The users' database is empty."
    }, {
      status: 400
    })
  }

  return NextResponse.json({
    users: users
  }, {
    status: 200
  })
}