import React from 'react';
import { Link } from 'react-router-dom';

const PlaceCard = () => {
    return (
        <div className="flex flex-col shadow-xl">
        <img
            alt=""
            className="object-cover w-full h-60"
            src='https://www.segs.com.br/media/k2/items/cache/49c88786eedd03259eea60b033d244cb_XL.jpg'
           
        />

        <div className="flex flex-col flex-1 p-6">
            
            <h3 className="flex-1 py-2 text-lg font-semibold leading">
            New York
            </h3>
            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs">
            <span className="text-amber-600">10 Destinations  5 Hotels </span>

            <button>
                <Link className="ml-auto text-white bg-red-500 py-1 px-3 font-semibold hover:bg-slate-600">See More</Link>
            </button>
            
            </div>
        </div>
        </div>
    );
};

export default PlaceCard;