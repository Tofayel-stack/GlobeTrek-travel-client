import React from 'react';
import SectionBanner from '../sectionBanner/SectionBanner';
import ImageGallery from './ImageGallery';
import CityMap from './CityMap';
import BookingForm from './BookingForm';
import DestinationInfo from './DestinationInfo';

const PlaceDetails = () => {
    return (
        <div>
            <SectionBanner></SectionBanner>

            <div className='container m-auto'>

                <div className='grid lg:grid-cols-3 gap-8 my-12'>
                    {/* image gallery */}
                    <div className='col-span-2'>
                        <ImageGallery/>


                        {/* Destination Details  */}
                        <DestinationInfo/>
                    </div>
                    {/* side info  */}
                    <div className='col-span-1'>
                        <CityMap/>
                        {/* booking form */}
                        <BookingForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;