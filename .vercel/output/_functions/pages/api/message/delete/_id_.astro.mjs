import { d as db, m as message } from '../../../../chunks/db_IDFZ7Ff9.mjs';
import { eq } from 'drizzle-orm';
export { r as renderers } from '../../../../chunks/_@astro-renderers_XaomTNl8.mjs';

const DELETE = async ({ params }) => {
  try {
    await db.delete(message).where(eq(message.id, params.id));
    return Response.json({
      message: "pesan berhasil di hapus"
    });
  } catch (err) {
    return Response.json({
      message: `ada yang error: ${err.message}`
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
