import { db } from "@/lib/server/db";
import { message } from "@/lib/server/schema";
import type { APIRoute } from "astro";
import { eq } from "drizzle-orm";


export const DELETE: APIRoute = async ({ params }) => {
  try {
    await db.delete(message).where(eq(message.id, params.id as string))

    return Response.json({
      message: "pesan berhasil di hapus"
    })
  } catch (err) {
    return Response.json({
      message: `ada yang error: ${(err as Error).message}`
    })
  }
}



