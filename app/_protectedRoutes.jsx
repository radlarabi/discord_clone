import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

export default function ProtectedRoutes(){
    return (
        <div className="flex flex-col justify-center">
          <NavBar/>
          <HeroSection/>
        </div>
    )
}