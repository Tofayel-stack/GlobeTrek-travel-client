import React from 'react';

const DestinationInfo = ({destinationInfo}) => {
    return (
        <div>
            <div>
                <h1 className='text-2xl font-bold mt-12'>About {destinationInfo?.name} </h1>

                <p>
                {destinationInfo?.about_info}
                </p>

                {/* list of info about this  */}

                <div className="max-w-md mt-8 bg-white shadow-md rounded-md p-6">
                <h2 className="text-2xl font-bold mb-4">Destination info</h2>
                <ul>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Country:</span>
                    <span>{destinationInfo?.basic_info?.country}</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Language:</span>
                    <span>{destinationInfo?.basic_info?.language}</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Area:</span>
                    <span>{destinationInfo?.basic_info?.area} km²</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Currency:</span>
                    <span>{destinationInfo?.basic_info?.currency}</span>
                    </li>
                    <li className="flex items-center justify-between py-2 border-b">
                    <span className="font-semibold">Time Zone:</span>
                    <span>{destinationInfo?.basic_info?.time_zone}</span>
                    </li>
                    <li className="flex items-center justify-between py-2">
                    <span className="font-semibold">Best Time to Travel:</span>
                    <span>{destinationInfo?.basic_info?.best_time_to_travel}</span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default DestinationInfo;