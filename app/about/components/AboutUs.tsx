import Image from "next/image"
export default function AboutUs() {
    return (
        <div className="pt-10 m-4">

            <div className="flex justify-center ">
            
                <div className="grid grid-cols-1 lg:grid-cols-2   mx-auto">
                <div className="items-center order-first lg:order-none justify-center flex flex-col">
                    <Image
                        src="/img/aboutUs.jpg"
                        width={350}
                        height={350}
                        alt="Picture of the author"
                        className="rounded-lg"
                        priority={true}
                    />
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