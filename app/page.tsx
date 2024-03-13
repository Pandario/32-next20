
import Navbar from "./mainPage/components/Nav";
import HeroSection from "./mainPage/components/HeroSection";
import Benefits from "./mainPage/components/Benefits";
import Reviews from "./mainPage/components/Reviews";
import Benefits2 from "./mainPage/components/Benifits2";
import News from "./mainPage/components/newsletter/News";
import Footer from "./mainPage/components/Footer";



const mainPage: React.FC = () => {
    return (
    <div className="flex flex-col">
      <Navbar/>
      <HeroSection title="Modern cuisine"/>
      <Benefits/>
      <Benefits2/>
      <Reviews/>
      <News/>
      <Footer/>

      <div className="text-center text-gray-600 bg-slate-400 py-4">
        © <a href="https://github.com/Pandario" className="hover:text-indigo-700">Pandario</a> 2024
      </div>
    </div>
  );
}

export default mainPage