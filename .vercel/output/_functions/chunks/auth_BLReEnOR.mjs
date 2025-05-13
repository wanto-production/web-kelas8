import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { d as db } from './db_IDFZ7Ff9.mjs';

const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite"
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true
  }
});

export { auth as a };
