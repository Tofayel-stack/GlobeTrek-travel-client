import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = ({placeInfo}) => {

    // console.log('card console' , placeInfo.place);




    return (
        <div data-aos="zoom-in" data-aos-duration="400"  data-aos-delay="50" className="flex flex-col shadow-xl w-80 m-auto">
        <img
            alt=""
            className="object-cover w-full h-60"
            src={placeInfo.image_link}
           
        />

        <div className="flex flex-col flex-1 p-6">
            
            <h3 className="flex-1 py-2 text-lg font-semibold leading">
            {placeInfo.name}
            </h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
            <span className="text-amber-600">10 Destinations  {placeInfo.hotel_numbers} Hotels </span>

            <button>
                <Link to={`/destination-details/${placeInfo._id}`} className="ml-auto text-white bg-red-500 py-1 px-3 font-semibold hover:bg-slate-600">See More</Link>
            </button>
            
            </div>
        </div>
        </div>
    );
};

export default PlaceCard;