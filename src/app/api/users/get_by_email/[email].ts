import { NextResponse } from "next/server";

import { eq } from "drizzle-orm";
import { db } from "@/lib/data/db";
import { users } from "@/lib/data/db/schema";

export default async function GET(
  request: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email

  const user = await db.query.users.findFirst({
    where: eq(users.email, email)
  })

  if (!user) {
    return NextResponse.json({
      message: "User doesn´t exists.",
      userExists: false
    }, { status: 400 });
  }

  return NextResponse.json({
    message: {
      username: user.name,
      email: user.email
    },
    userExists: true
  }, { status: 200 })
}