import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import { cn } from "@/lib/utils";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight : ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'

});

export const metadata: Metadata = {
  title: "Imaginnify",
  description: "AI-Powered image generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{
      variables:{
        colorPrimary: '#624cf5',
      }
    }}>
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
      <header>
      {/* <SignedOut>
          <SignInButton />
        </SignedOut> */}
      </header>
        {children}        
      </body>
    </html>
    </ClerkProvider>
  );
}
