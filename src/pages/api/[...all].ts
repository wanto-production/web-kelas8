export const prerender = false

import { handler } from "@/lib/hono";
import type { APIRoute } from "astro";
import { handle } from "hono/vercel"

export const ALL: APIRoute = ({ request }) => handle(handler)(request)
