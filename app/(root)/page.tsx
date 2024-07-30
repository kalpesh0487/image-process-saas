import React from 'react'
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      <p>Home</p>
         {/* <SignedIn>
          <UserButton />
        </SignedIn> */}
    </div>
  )
}

export default Home