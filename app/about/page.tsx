import HeroSection from "@/app/mainPage/components/HeroSection";
import Navbar from "@/app/mainPage/components/Nav";
import Image from "next/image";
import AboutUs from "./components/AboutUs";
import Footer from "../mainPage/components/Footer";


export default function AboutUsPage() {
    return (
      <main className="bg-gray-100">
        <Navbar/>
        <HeroSection title="About Us"/>
        <AboutUs/>
        <Footer/>
        <div className="text-center text-gray-600 bg-slate-400 py-4">
        © <a href="https://github.com/Pandario">Pandario</a> 2024
      </div>
      </main>
    );
  }