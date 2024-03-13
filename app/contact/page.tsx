import HeroSection from "@/app/mainPage/components/HeroSection";
import Navbar from "@/app/mainPage/components/Nav";

import Footer from "@/app/mainPage/components/Footer";
import ContactUs from "@/app/contact/components/ContactUs";
export default function MenuPage() {
    return (
      <main>
        <Navbar/>
        <HeroSection title="Contact Us"/>
        <ContactUs/>
        <Footer/>
        <div className="text-center text-gray-600 bg-slate-400 py-4">
        © <a href="https://github.com/Pandario">Pandario</a> 2024
      </div>
      </main>
    );
  }