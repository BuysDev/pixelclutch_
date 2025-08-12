import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.AUTH_SECRET as string,
}

export default NextAuth(authOptions)