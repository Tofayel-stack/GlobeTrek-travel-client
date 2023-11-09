import React from 'react';
import bannerVideo from "./../../../assets/bannerVideo.mp4"

const Banner = () => {
    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="lg:text-6xl text-3xl text-center font-extrabold mb-3">Starts Your Trip with GlobeTrek</h1>
              <p className="text-center">Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.</p>

                  {/* search form  */}

            <div>
                <div className="max-w-4xl mx-auto flex items-center justify-center">
                    <form className="w-full bg-white text-red-900 p-4 rounded-lg shadow-md">
                        <div className="flex lg:flex-nowrap flex-wrap mb-4">
                            <div className="w-1/2 px-3 mb-6 md:mb-0">
                                <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
                                <input id="destination" type="text" placeholder="Enter your destination" className="w-full p-3 rounded border border-gray-300"/>
                            </div>
                            <div className="w-1/2  px-3">
                                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
                                <input id="date" type="date" className="w-full p-3 rounded border border-gray-300"/>
                            </div>
                            <div className="w-1/2 px-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Type</label>
                                <input  type="text" className="w-full p-3 rounded border border-gray-300"/>
                            </div>
                            <div className="w-1/2 px-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">People</label>
                                <input type="number" className="w-full p-3 rounded border border-gray-300"/>
                            </div>

                            <button type="submit" className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded h-12 mt-7">Search</button>
                        </div>
                      
                    </form>
                </div>
            </div>


            </div>


          

    </div>
    );
};

export default Banner;