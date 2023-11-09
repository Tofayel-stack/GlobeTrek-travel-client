import Destination from "./Destination/Destination";
import Banner from "./banner/Banner";
import OurService from "./ourService/OurService";
import Features from "./features/Features";
import Testimonials from "./Testimonial/Testimonials";

const Home = () => {


    return (
        <div className="overflow-hidden">

          <Banner></Banner>
          <OurService></OurService>
          <Destination></Destination>
          <Features></Features>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;