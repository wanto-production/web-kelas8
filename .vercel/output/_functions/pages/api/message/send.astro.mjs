import { d as db, m as message } from '../../../chunks/db_IDFZ7Ff9.mjs';
import { randomUUID } from 'node:crypto';
export { r as renderers } from '../../../chunks/_@astro-renderers_XaomTNl8.mjs';

const POST = async ({ request, locals }) => {
  const body = await request.json();
  if (!locals.user) return Response.json({ message: "Ooops anda harus login dulu!" });
  try {
    await db.insert(message).values({
      id: randomUUID(),
      content: body.text,
      // pastikan field ini sesuai schema
      userId: locals.user?.id
      // BUKAN userId jika schema pakai 'user_id' 
    });
    return Response.json({
      message: "pesan berhasil di kirim!"
    });
  } catch (err) {
    return Response.json({
      message: `ada yang error: ${err.message}`
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
