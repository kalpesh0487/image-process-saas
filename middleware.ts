// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


// import { NextRequest, NextResponse } from 'next/server';
// import { clerkMiddleware, ClerkMiddlewareOptions } from '@clerk/nextjs/server';

// const publicRoutes = ['/','/api/webhooks/clerk', '/api/webhooks/stripe'];

// const clerkOptions: ClerkMiddlewareOptions = {
//   // Include any other options you need for clerkMiddleware here
// };

// // Create a custom middleware to handle public routes
// const customMiddleware = (req: NextRequest) => {
//   const url = req.nextUrl.pathname;

//   // If the route is public, bypass Clerk middleware
//   if (publicRoutes.some(route => url.startsWith(route))) {
//     return NextResponse.next();
//   }

//   // Otherwise, apply Clerk middleware
//   return clerkMiddleware(clerkOptions)(req, {} as any); // Pass empty object as a placeholder for `event`
// };

// export default customMiddleware;

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };

import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';


const isProtectedRoute = createRouteMatcher([
  '/',                  
  '/api/webhooks/clerk', 
  '/api/webhooks/stripe'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};