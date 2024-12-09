export default function Hero(){
    return(
        <div>
        <div className="bg-gray-100 font-[sans-serif] relative max-w-4xl mx-auto rounded overflow-hidden">
      <div className="grid sm:grid-cols-2 gap-6 max-sm:gap-12 py-12 px-6">
        <div >
          <h6 className="text-grey-850 text-balance">welcome to chairy</h6>
          <h2 className="text-blue-950 text-5xl font-bold mt-0.5">Best furniture</h2>
          <h2 className="text-blue-950 text-5xl font-bold mt-0.5">collection for you</h2>
          <h2 className="text-blue-950 text-5xl font-bold mt-0.5">Interior</h2>
          <button type="button" className="bg-gradient-to-r hover:bg-gradient-to-l from-blue-400 to-blue-600 hover:bg-blue-500 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-lg w-max mt-8">
            Shop Now
          </button>
          <p className="text-blue-950 text-base mt-2"></p>

        </div>

        <div className="text-center ">
            <img src=" my-app/public/image.png"alt="grey chair"></img>
          
        </div>
      </div>
    </div>    
        </div>
    )
}