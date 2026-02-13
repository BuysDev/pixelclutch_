import { text, uuid, boolean, timestamp, pgTable } from 'drizzle-orm/pg-core'

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash"),
  name: text("name"),
  emailVerified: boolean("email_verified").default(false),
  createdAt: timestamp("created_at").defaultNow()
})