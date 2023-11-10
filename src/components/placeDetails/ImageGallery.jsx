import React from 'react';
import smPic1 from '../../assets/galleryPic/smPic1.png'
import smPic2 from '../../assets/galleryPic/smPic2.png'
import smPic3 from '../../assets/galleryPic/smPic3.png'
import smPic4 from '../../assets/galleryPic/smPic4.png'


import demoPic from '../../assets/galleryPic/big.png'
import TourVideoModal from '../modal/TourVideoModal';

const ImageGallery = ({destinationInfo}) => {
    return (
        <div className=''>
            <div>
                 {/* profile modal button */}
                        <label htmlFor="video-modal">
                        <img className='w-full' src={destinationInfo?.image_link} alt="galleryPhoto" />
                        </label>
                
            </div>
            <div className='lg:grid hidden gap-2 grid-cols-4 my-4'>
                <img className='w-72 h-44 mr-4' src={smPic1} alt="galleryPhoto" />
                <img className='w-72 h-44 mr-4' src={smPic2} alt="galleryPhoto" />
                <img className='w-72 h-44 mr-4' src={smPic3} alt="galleryPhoto" />
                <img className='w-72 h-44 mr-4' src={smPic4} alt="galleryPhoto" />

            </div>

                <TourVideoModal></TourVideoModal>
        </div>
    );
};

export default ImageGallery;