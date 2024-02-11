import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { Users, AuthInfo } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
 
async function getUser(email: string): Promise<Users | undefined> {
  try {
    const user = await sql<Users>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

async function getAuthInfo(email: string): Promise<AuthInfo | undefined> {
  try {
    const authInfo = await sql<AuthInfo>`SELECT * FROM authInfo WHERE email=${email}`;
    return authInfo.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
          
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          const authInfo = await getAuthInfo(email);
          if (!authInfo) return null;
          const passwordsMatch = await bcrypt.compare(password, authInfo.password);
 
          if (passwordsMatch) {
            console.log("AuthInfo Returned");
            return authInfo
          };
        }
        
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});