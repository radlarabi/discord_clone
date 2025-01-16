'use client'
import Image from "next/image";
import NavBar from '@/app/components/NavBar'
import HeroSection from '@/app/components/HeroSection'
import Features from "./components/Features";
import Footer from "./components/Footer"

import { useSession, signIn, signOut } from 'next-auth/react';
import ProtectedRoutes from './_protectedRoutes'

export default function Home() {
  const { data: session, status } = useSession();

  // if (status === 'loading') return <div>Loading ....</div>;

  return (
    <>
      <div className="flex flex-col justify-center md:px-8 xsm:px-4 max-w-[1260px] mx-auto px-[24px]">
        <NavBar/>
        <HeroSection/>
        <Features/>
      </div>
      <Footer/>
    </>
  );
}
// {
//   session ? (
//     <>
//       <ProtectedRoutes/>
//       Signed in as {session.user.email} <br />
//       <button onClick={() => signOut()}>Log Out</button>
//     </>
//   )
//   :
//   (
//     <>
//       Not Signed <br />
//       <button
//         onClick={() => {
//           signIn('google');
//         }}
//       >
//         Continue With Google
//       </button>
//       <button
//         onClick={() => {
//           signIn('github');
//         }}
//       >
//         Continue With Github
//       </button>
//       <button
//         onClick={() => {
//           signIn('42-school');
//         }}
//       >
//         Continue With 42
//       </button>
//     </>
//   )
// }