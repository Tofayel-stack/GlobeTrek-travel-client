import React from 'react';
import bannerVideo from "./../../../assets/bannerVideo.mp4"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Banner = () => {


    const navigate = useNavigate()

    const handleSearch = (event) =>{
            event.preventDefault();

            const destination = event.target.destinationName.value;

            fetch(`http://localhost:5000/availableDestination?search=${destination}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if(data.data.length > 0){
                    navigate('/searchPage',{
                        state: { searchResult : data }})
                }else{
                    event.target.reset()
                    toast.success("no data found ")
                }
               

               
               
            })
    }


    return (
        <div className="relative h-screen">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 data-aos="fade-down" className="lg:text-6xl text-3xl text-center font-extrabold mb-3">Starts Your Trip with GlobeTrek</h1>
              <p className="text-center">Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.</p>

                  {/* search form  */}

            <>
                <div  data-aos="flip-up" className=" lg:w-[40rem] mx-auto flex items-center justify-center">
                    <form onSubmit={handleSearch} className="w-full bg-white text-red-900 p-4 rounded-lg shadow-md">
                        <div className="flex lg:flex-nowrap flex-wrap mb-4">
                            {/* <div className="w-1/2 px-3 mb-6 md:mb-0"> need to active later . insted of just bellow line */}
                            <div className="w-full px-3 mb-6 md:mb-0">
                                <label htmlFor="destination" className="block text-gray-700 text-sm font-bold mb-2">Destination</label>
                                <input name='destinationName' id="destination" type="text" placeholder="Search destination by name E.g: Rome " required className="w-full p-3 rounded border border-gray-300"/>
                            </div>


                            {/* need to active for deep search  */}

                            {/* <div className="w-1/2  px-3">
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
                            </div> */}

                            {/* deep search */}

                            <button type="submit" className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded h-12 mt-7">Search</button>
                        </div>
                      
                    </form>
                </div>
            </>


            </div>


          

    </div>
    );
};

export default Banner;