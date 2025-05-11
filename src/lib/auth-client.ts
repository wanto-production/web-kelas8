import { createAuthClient } from "better-auth/client";
import type { auth } from "./auth.ts";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { BETTER_AUTH_URL } from "astro:env/client";

export const authClient = createAuthClient({
    baseURL: BETTER_AUTH_URL,
    plugins: [inferAdditionalFields<typeof auth>()],
});
