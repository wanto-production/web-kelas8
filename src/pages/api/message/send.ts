import { db } from "@/lib/server/db";
import { message } from "@/lib/server/schema";
import type { APIRoute } from "astro";
import { randomUUID } from "node:crypto";

export const POST: APIRoute = async ({ request, locals }) => {
  const body = await request.json()

  if (!locals.user) return Response.json({ message: "Ooops anda harus login dulu!" });

  try {
    await db.insert(message).values({
      id: randomUUID(),
      content: body.text as string, // pastikan field ini sesuai schema
      userId: locals.user?.id as string, // BUKAN userId jika schema pakai 'user_id' 
    });

    return Response.json({
      message: "pesan berhasil di kirim!"
    })

  } catch (err) {

    return Response.json({
      message: `ada yang error: ${(err as Error).message}`
    })
  }
}
