import React from "react"
const ReviewsPpl: React.FC = () => {
    return (

    
    <div className="flex justify-center mb-12 mx-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 md:gap-8 mx-auto ">
    {/* Project 1 */}
    <div className="flex flex-col w-64  my-1 shadow-xl rounded-lg">

        <h3 className="text-xl font-semibold text-center pt-1">Alex</h3>

        <p className="p-4 text-gray-500 font-mono text-start">
              Have never been in this restaurant, actually! But think its 5 stars restaurant! 
        </p>

    </div>

    {/* Project 2 */}
    <div className="flex flex-col w-64  my-1 shadow-xl rounded-lg">

        <h3 className="text-xl font-semibold text-center pt-1">Paddington</h3>

        <p className="p-4 text-gray-500 font-mono text-start">
              Yep. This is a fake review for a not real restaurant website! Best quality!
        </p>

    </div>
  
    {/* Project 3 */}
    <div className="flex flex-col w-64  my-1 shadow-xl rounded-lg">

        <h3 className="text-xl font-semibold text-center pt-1">Pandario</h3>

        <p className="p-4 text-gray-500 font-mono text-start">
              Good website with grid and typescript! Btw! have you tried menu page? It&apos;s made with .map()
        </p>

    </div>        
    {/* Project 4 */}
    <div className="flex flex-col w-64  my-1 shadow-xl rounded-lg">

        <h3 className="text-xl font-semibold text-center pt-1">Portfolio</h3>

        <p className="p-4 text-gray-500 font-mono text-start">
              Yep. This project. Responsive, made with grid and tailwind. 
              Forms separately connected to two separate MongoDB. 
        </p>

    </div>
  </div>
  </div>
    )
}

export default ReviewsPpl