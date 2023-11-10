import React from 'react';
import SectionBanner from '../sectionBanner/SectionBanner';
import ImageGallery from './ImageGallery';
import CityMap from './CityMap';
import BookingForm from './BookingForm';
import DestinationInfo from './DestinationInfo';
import { useLoaderData } from 'react-router-dom';

const PlaceDetails = () => {

    const data = useLoaderData()

    // console.log( "single details ", data?.data?.place);

    const destinationInfo = data?.data;



    return (
        <div>
            <SectionBanner sectionName={destinationInfo.name} ></SectionBanner>

            <div className='container m-auto'>

                <div className='grid lg:grid-cols-3 gap-8 my-12'>
                    {/* image gallery */}
                    <div className='col-span-2'>
                        <ImageGallery destinationInfo={destinationInfo} />


                        {/* Destination Details  */}
                        <DestinationInfo destinationInfo={destinationInfo} />
                    </div>
                    {/* side info  */}
                    <div className='col-span-1'>
                        <CityMap/>
                        {/* booking form */}
                        <BookingForm destinationInfo={destinationInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;