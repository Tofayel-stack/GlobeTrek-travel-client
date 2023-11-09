import Destination from "./Destination/Destination";
import Banner from "./banner/Banner";
import OurService from "./banner/ourService/OurService";

const Home = () => {


    return (
        <div className="overflow-hidden">

          <Banner></Banner>
          <OurService></OurService>
          <Destination></Destination>
        </div>
    );
};

export default Home;