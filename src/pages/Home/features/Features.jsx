import { MdVerified } from "react-icons/md";
import { FaHandHoldingHeart, FaHandshakeSimple } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";

import couplePic from '../../../assets/featurePic.jpg'



const Features = () => {


  return (

    <section  className="container m-auto flex flex-col justify-center items-center py-12">
      <div className=" font-semibold">

       

        {/* <div className="flex justify-center items-center "> */}
        <div className="grid lg:grid-cols-2 mx-auto grid-cols-1 items-center">
          <div data-aos="fade-up"
               data-aos-duration="500" className="w-10/12 m-auto lg:ms-0 lg:mb-0 mb-4">
            <img className="w-full  rounded" src={couplePic} alt="couple pic" />
          </div>

          <div  data-aos="fade-down" data-aos-duration="500"   data-aos-delay="50" className="grid grid-cols-1 lg:h-[370px] lg:grid-cols-2 gap-6">
            <div className="">
              {/* Authenticity */}
              <div 
               
              className="p-4 lg:h-44  hover:text-white bg-blue-100 hover:bg-blue-800 shadow-md transition-all duration-700 ease-in-out transform hover:scale-105">
                <h4 className="text-lg flex font-bold ">
                Get Superb Deals <MdVerified className="mt-1 ml-2" />
                </h4>
                <p className="">
                  We firmly believe in being genuine; hence, it not only gets
                  easy for us to fulfill expectations but also fosters lasting
                  trust.
                </p>
              </div>
            </div>

            <div>
              {/* Commitment */}
              <div className="p-4 lg:h-44  flex-col justify-center item-center bg-green-100 hover:bg-green-800 hover:text-white shadow-md transition-all duration-700 ease-in-out transform hover:scale-105">
                <h4 className="text-lg flex font-bold ">
                100% Transparency Price
                  <FaHandshakeSimple className="mt-1 text-2xl ml-2" />
                </h4>
                <p className="">
                  Exclusively dedicated to our work, we are unwavering in our
                  commitment to fulfilling our client expectations with utmost
                  professionalism.
                </p>
              </div>
            </div>

            <div>
              {/* Outspoken */}
              <div className="p-4 lg:h-44  flex-col  justify-center item-center bg-yellow-100 hover:bg-yellow-800 shadow-md hover:text-white transition-all duration-700 ease-in-out transform hover:scale-105">
                <h4 className="text-lg flex font-bold ">
                Pure Trusted & Free
                  {/* <img className="w-5 h-5 mt-1 ml-2" src={outspoken} alt="" /> */}
                  <FaHandHoldingHeart className=" text-2xl ml-2" />
                </h4>
                <p className="">
                  Dedicated to working diligently, we consistently strive to
                  present the perfect solution to every problem that arises,
                  leaving no stone unturned.
                </p>
              </div>
            </div>

            <div>
              {/* team work  */}
              <div className="p-4 lg:h-44  flex-col justify-center item-center bg-violet-100 hover:bg-violet-800 hover:text-white shadow-md transition-all duration-700 ease-in-out transform hover:scale-105">
                <h4 className="text-lg flex font-bold ">
                Travel With Confidence
                  <RiTeamFill className="mt-1 ml-2" />
                </h4>
                <p className="">
                  Working together in unity is the cornerstone of our strength,
                  fostering collaboration and empowering us to achieve
                  remarkable goals.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>

  );
};

export default Features;
