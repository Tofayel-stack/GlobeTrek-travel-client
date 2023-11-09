import feedback from "../../assets/icon/feedback.png";
import research from "../../assets/icon/researchThinking.png";
import releaseProduct from "../../assets/icon/releaseProduct.png";
import updateSupport from "../../assets/icon/update.png";
import development from "../../assets/icon/development.png";
import happyUser from "../../assets/icon/happyUser.png";
const WhyUs = () => {
  return (
    <div className="font-semibold lg:mx-0 mx-10 bg-red-50 py-16">
      <div className="mb-44 lg:mb-0">
        {/* Top Part */}
        <div className="text-center ">
          <h2 className="text-2xl mb-4 title text-center text-gray-800 capitalize lg:text-4xl font-semibold">
            Why choose us 
          </h2>
        </div>

        {/* Bottom Part */}
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {/* Feedback Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={feedback} alt="" />
              <h3 className="text-xl mt-3 font-bold ">
              Explore Limitless Horizons 
              </h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              We value real user feedback, shaping our products for excellence.
            </p>
          </div>

          {/* Research Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500  ease-in-out transform hover:-translate-y-2  ">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={research} alt="" />
              <h3 className="text-xl font-bold   mt-3 ">
              Tailored Adventures
              </h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              Our thoughtful research drives innovative solutions and informed
              decisions.
            </p>
          </div>

          {/* Release Product Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2  ">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={releaseProduct} alt="" />
              <h3 className="text-xl font-bold mt-3 ">Destination Becomes Story</h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              We deliver products that meet and exceed expectations on time.
            </p>
          </div>

          {/* Update and Support Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2  ">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={updateSupport} alt="" />
              <h3 className="text-xl font-bold mt-3 ">Discover,Wander,Experience </h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              Our continuous support and updates ensure long-term satisfaction.
            </p>
          </div>

          {/* Development Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2  ">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={development} alt="" />
              <h3 className="text-xl font-bold mt-3 ">Crafting Extraordinary Journeys</h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              We excel in development, creating robust and scalable solutions.
            </p>
          </div>

          {/* Happy User Card */}
          <div className="p-4 bg-white   shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-2  ">
            <div className="flex gap-2">
              <img className="w-10 h-10" src={happyUser} alt="" />
              <h3 className="text-xl font-bold mt-3 ">Happy Clients</h3>
            </div>
            <p className="text-sm text-zinc-400 mt-2">
              Our ultimate goal is to create happy and satisfied users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
