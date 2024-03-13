import { FaPizzaSlice, FaCar, FaBullhorn } from "react-icons/fa";

const Benefits: React.FC = () => {
  return (
    
    <div id="benefits" className="pt-8 bg-slate-300">    
        <div className="flex justify-center ">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-16 md:gap-8 mx-auto">
                <div className="flex flex-col items-center p-4 my-1 ">
                    {/* Benefit 1 */}
                    <FaPizzaSlice className="text-5xl pb-4" style={{color: 'DarkSeaGreen'}} />
                    <h3 className="text-xl font-semibold">Try new pizzas!</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        Right now you have great opportunity to try our new tastes 
                        pizzas! Pizzas with pineappels and ketchup! Best choice for italians!
                        
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 my-1">
                    {/* Benefit 2 */}
                    <FaCar className="text-5xl pb-4" style={{color: 'DarkSeaGreen'}} />
                    <h3 className="text-xl font-semibold">Free parking!</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        We have secured parking for cars and bikes.
                        Security cameras always working 7/11!
                    </p>
                </div>

                <div className="flex flex-col items-center p-4 my-1 ">
                    {/* Benefit 3 */}
                    <FaBullhorn className="text-5xl pb-4" style={{color: 'DarkSeaGreen'}} />
                    <h3 className="text-xl font-semibold">DJ month!</h3>
                    <p className="p-4 text-gray-500 font-mono">
                        For whole next month we will have live with 
                        top DJ&apos;s who will make our cafe rave 24/7! 
                    </p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Benefits