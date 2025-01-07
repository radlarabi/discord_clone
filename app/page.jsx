import Image from "next/image";
import NavBar from '@/app/components/NavBar'
import HeroSection from '@/app/components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <NavBar/>
      <HeroSection/>
    </div>
  );
}
