import type { APIRoute } from "astro";


export const GET: APIRoute = async ({ locals }) => {
  return Response.json({
    user: locals.user,
    session: locals.session
  })
}
