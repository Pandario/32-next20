
import HeroSection from "@/app/mainPage/components/HeroSection";
import Navbar from "@/app/mainPage/components/Nav";

import MenuSection from "@/app/menu/components/MenuSection";
import MenuButton from "./components/MenuButton";
import Footer from "../mainPage/components/Footer";
export default function MenuPage() {
    return (
      <main>
        <Navbar/>
        <HeroSection title="Try our menu"/>
        <MenuSection/>
        <MenuButton/>
        <Footer/>
        <div className="text-center text-gray-600 bg-slate-400 py-4">
        © <a href="https://github.com/Pandario">Pandario</a> 2024
      </div>
      </main>
    );
  }