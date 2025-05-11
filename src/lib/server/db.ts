import { drizzle } from "drizzle-orm/libsql"
import { createClient } from "@libsql/client";
import { schema } from "./schema"
import { SECRET_DATABASE_TOKEN, SECRET_DATABASE_URL } from "astro:env/server";

const dialect = createClient({
  url: process.env.SECRET_DATABASE_URL! || SECRET_DATABASE_URL,
  authToken: process.env.SECRET_DATABASE_TOKEN! || SECRET_DATABASE_TOKEN,
})

export const db = drizzle(dialect, { schema }) 
