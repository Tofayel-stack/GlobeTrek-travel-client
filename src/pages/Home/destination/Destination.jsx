import React from 'react';
import PlaceCard from '../../../components/cards/PlaceCard';

const Destination = () => {
    return (
        <div className='container mx-auto py-28'>

            {/* title */}

            <div className=''>
                    <h1 className='text-3xl font-bold text-center'>Explore Popular Destination</h1>
                    <span className='block text-zinc-400 text-center'>Cicero famously orated against his political opponent Lucius Sergius Catilina.</span>
            </div>

            {/* card  */}

            <div className='grid w-full grid-cols-1 gap-x-2 gap-y-20 lg:grid-cols-4 mt-8'>


                <PlaceCard></PlaceCard>
                <PlaceCard></PlaceCard>
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