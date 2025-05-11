import type { Config } from "drizzle-kit"

export default {
  dialect: "turso",
  schema: "src/lib/server/schema.ts",
  dbCredentials: {
    url: process.env.SECRET_DATABASE_URL!,
    authToken: process.env.SECRET_DATABASE_TOKEN!
  }
} satisfies Config
