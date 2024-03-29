import HeroSection from "@/app/mainPage/components/HeroSection";
import Navbar from "@/app/mainPage/components/Nav";

import AboutUs from "./components/AboutUs";
import Footer from "../mainPage/components/Footer";

import MapComponent from "./components/MapComponent";



export default function AboutUsPage() {
    return (
      <main className="bg-gray-100">
        <Navbar/>
        <HeroSection title="About Us"/>
        <AboutUs/>
        <Footer/>
        <div className="flex justify-center w-full bg-slate-400">
          <MapComponent/>
        </div>
        <div className="text-center text-gray-600 bg-slate-300 py-4">
          © <a href="https://github.com/Pandario">Pandario</a> 2024
        </div>


      </main>
    );
  }