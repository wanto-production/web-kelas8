import { Hono } from "hono"
import { cors } from "hono/cors"
import { auth } from "./auth";
import type { Session, User } from "better-auth";
import { db } from "./server/db";
import { message, user } from "./server/schema";
import { eq } from "drizzle-orm";
import { randomUUID } from "node:crypto"

const router = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null
  }
}>().use(cors())

router.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});


router.on(["POST", "GET"], "/auth/*", async (c) => {
  return auth.handler(c.req.raw);
});


router.get("/hello", async (c) => c.text("wassup!"))

router.get("/getsession", async (c) => {
  return c.json<{ user: User | null, session: Session | null }>({
    user: c.get('user'),
    session: c.get('session')
  })
})

router.get("/message/get", async (c) => {
  const messages = await db.select({
    message: message,
    user: user,
  })
    .from(message)
    .innerJoin(user, eq(user.id, message.userId));

  return c.json({
    messages
  })
})

router.delete("/message/delete/:id", async (c) => {
  try {
    await db.delete(message).where(eq(message.id, c.req.param("id") as string))

    return c.json({
      message: "pesan berhasil di hapus"
    })
  } catch (err) {
    return c.json({
      message: `ada yang error: ${(err as Error).message}`
    })
  }
})

router.post("/message/send", async (c) => {
  const body = await c.req.json()

  if (!c.get('user')) return c.json({ message: "Ooops anda harus login dulu!" });

  try {
    await db.insert(message).values({
      id: randomUUID(),
      content: body.text as string, // pastikan field ini sesuai schema
      userId: c.get("user")?.id as string, // BUKAN userId jika schema pakai 'user_id' 
    });

    return c.json({
      message: "pesan berhasil di kirim!"
    })

  } catch (err) {

    return c.json({
      message: `ada yang error: ${(err as Error).message}`
    })
  }
})

export const handler = new Hono().route("/api", router)
export type Router = typeof router
