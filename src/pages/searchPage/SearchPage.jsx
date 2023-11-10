import React from 'react';
import SectionBanner from '../../components/sectionBanner/SectionBanner';
import PlaceCard from '../../components/cards/PlaceCard';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

    const { state } = useLocation();

    // console.log(state?.searchResult?.data);

    const searchData = state?.searchResult?.data


    return (
        <div>
            <SectionBanner sectionName={'Choose your Destination'}></SectionBanner>

            <div className='w-7/12 m-auto grid lg:grid-cols-3 grid-cols-1 gap-y-24 my-12'>
    
                   
                {
                    searchData?.map(data => 
                        <PlaceCard 
                            key={data._id}
                            placeInfo={data}
                        
                        ></PlaceCard>
                    )
                }

            </div>
        </div>
    );
};

export default SearchPage;