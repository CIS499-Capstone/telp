import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  session: {
    maxAge: 18*60*60, // cookie is expiring 23hrs later
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isNotAdmin = false // Check if user.role === 'teacher';
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAdminLevelPage = (
        nextUrl.pathname.startsWith('/dashboard/teachers') || 
        nextUrl.pathname.startsWith('/dashboard/admins')
      );
      if (isOnDashboard) {
        if (isLoggedIn) {
          if (isOnAdminLevelPage && isNotAdmin) return Response.redirect(new URL('/dashboard', nextUrl)); // Redirect teachers to dashboard
          return true;
        }
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;