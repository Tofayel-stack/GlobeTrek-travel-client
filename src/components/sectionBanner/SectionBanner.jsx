import React from 'react';
// import aboutBanner from '../../../assets/aboutbanner.jpg'
import aboutBanner from '../../assets/aboutbanner.jpg'
import './sectionbanner.css'

const SectionBanner = ({sectionName}) => {
    return (
        <div className="z-0 bg-cover bg-center imageOverlay" style={{ backgroundImage: `url(${aboutBanner})` }}>
          
              <h1 data-aos="fade-down" className='text-5xl text-white text-center relative z-30 py-24'> {sectionName} </h1>
            
        </div>
    );
};

export default SectionBanner;