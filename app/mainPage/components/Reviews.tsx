import ReviewsPpl from "@/app/components/reviewsComp/ReviewsPpl"


const Reviews: React.FC = () => {
  return (
    <div id="benefits" className="pt-8 bg-slate-300">    

        <h3 className="text-xl text-center  font-bold mb-4 p-4 text-green-900">Our guests saying:</h3>
                {/* Green line */}
        <div className="flex justify-center my-8">
          <div className="w-36 h-1 bg-green-700  shadow-lg"></div>
        </div>

        <ReviewsPpl/>

    </div>
  )
}

export default Reviews