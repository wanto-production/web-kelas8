import { d as db, u as user, m as message } from '../../../chunks/db_IDFZ7Ff9.mjs';
import { eq } from 'drizzle-orm';
export { r as renderers } from '../../../chunks/_@astro-renderers_XaomTNl8.mjs';

const GET = async () => {
  const messages = await db.select({
    message,
    user
  }).from(message).innerJoin(user, eq(user.id, message.userId));
  return Response.json({
    messages
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
