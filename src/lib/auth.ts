import { betterAuth } from "better-auth";
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/lib/data/db/index';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL!
});

export const { api } = auth;

export type Session = typeof auth.$Infer.Session
export type User = typeof auth.$Infer.Session.user