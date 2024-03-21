'use client'
import Image from "next/image"
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
export default function AboutUs() {
    const images: string[] = [
        '/img/about/aboutUs1.jpg',
        '/img/about/aboutUs2.jpg',
      ];

      const [currentIndex, setCurrentIndex] = useState<number>(0);

      const goPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
      };
    
      const goNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
      };

    return (
        <div className="pt-10 m-4">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">
                    <div className="items-center order-first lg:order-none justify-center flex relative ">

                        <div className="relative">
                            <Image
                                src={images[currentIndex]}
                                width={350}
                                height={350}
                                alt="Picture of the author"
                                className="rounded-lg "
                                priority={true}
                            />
                            <button
                                className="absolute top-1/2 left-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded"
                                onClick={goPrevious}
                            >
                                <IoIosArrowBack size="1.5em" />
                            </button>
                            <button
                                className="absolute top-1/2 right-1 transform -translate-y-1/2 z-10 bg-transparent hover:bg-gray-700 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-gray-800 hover:border-transparent rounded"
                                onClick={goNext}
                            >
                                <IoIosArrowForward size="1.5em" />
                            </button>        
                        </div>
                    </div>

                    <div className="flex flex-col  p-4 my-1 shadow-lg rounded-lg">

                        <h1 className="text-3xl font-bold mb-4 text-center">Our Amaizing restaurant {'!'}</h1>
                        <div className="flex justify-center my-8">
                            <div className="w-36 h-2 bg-green-700 rounded-full shadow-lg"></div>
                        </div>
                        <h3 className="text-xl mb-2">
                            Welcome to Café Restaurant, where we blend 
                            traditional flavors with a modern twist.
                        </h3>
                        <h5 className="text-xl mb-2">
                            Our mission is to offer a memorable dining experience 
                            with dishes crafted from locally sourced ingredients.
                        </h5>
                        <h5 className="text-xl mb-2">
                            Cozy ambiance, friendly staff, and innovative menu 
                            create the perfect setting for any occasion.
                        </h5>
                        <h5 className="text-xl mb-4"> 
                            Join us for a journey of culinary excellence, 
                            where every bite tells a story of passion and creativity.  
                        </h5>

                    </div>
                </div>
            </div>
</div>
    )
}