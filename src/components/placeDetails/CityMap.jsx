import React from 'react';

const CityMap = () => {
    return (
        <div>
            <h1>City Map</h1>

            <div className='w-full'>
                <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
                    <iframe width="100%" height="100%" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="yes" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    );
};

export default CityMap;