import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client";
import { schema } from "./schema"

const dialect = createClient({
  url: process.env.SECRET_DATABASE_URL!,
  authToken: process.env.SECRET_DATABASE_TOKEN!,
})

export const db = drizzle(dialect, { schema }) 
