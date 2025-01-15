'use client'
import Image from "next/image";
import NavBar from '@/app/components/NavBar'
import HeroSection from '@/app/components/HeroSection'
import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedRoutes from './_protectedRoutes'

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading ....</div>;

  return (
    <div className="flex flex-col justify-center">

      {
        session ? (
          <>
            <ProtectedRoutes/>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Log Out</button>
          </>
        )
        :
        (
          <>
            Not Signed <br />
            <button
              onClick={() => {
                signIn('google');
              }}
            >
              Continue With Google
            </button>
            <button
              onClick={() => {
                signIn('github');
              }}
            >
              Continue With Github
            </button>
            <button
              onClick={() => {
                signIn('42-school');
              }}
            >
              Continue With 42
            </button>
          </>
        )
      }

    </div>
  );
}
