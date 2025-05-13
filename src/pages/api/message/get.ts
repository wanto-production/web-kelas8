import { db } from "@/lib/server/db"
import { message, user } from "@/lib/server/schema"
import { eq } from "drizzle-orm";

export const GET = async () => {
  const messages = await db.select({
    message: message,
    user: user,
  })
    .from(message)
    .innerJoin(user, eq(user.id, message.userId));

  return Response.json({
    messages
  })
}
