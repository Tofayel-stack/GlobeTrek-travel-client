import React from 'react';
import SectionBanner from '../../components/sectionBanner/SectionBanner';
import PlaceCard from '../../components/cards/PlaceCard';

const Destination = () => {
    return (
        <div>
            <SectionBanner sectionName={'Choose your Destination'}></SectionBanner>
            <div className='w-7/12 m-auto grid lg:grid-cols-3 grid-cols-1 gap-y-24 my-12'>

                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>

            </div>
        </div>
    );
};

export default Destination;