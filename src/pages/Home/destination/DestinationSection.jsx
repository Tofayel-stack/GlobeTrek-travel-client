import React, { useEffect } from 'react';
import PlaceCard from '../../../components/cards/PlaceCard';
import { useQuery } from 'react-query';
import BigSpinner from '../../../components/BigSpinner';
import toast from 'react-hot-toast';

const DestinationSection = () => {


    const { isLoading, error, data } = useQuery({
        queryKey:['destinations'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/destinations')
            const data = await res.json()
            return data
        }
    })



    // console.log("parent data ", data);
    const destinationData =  data?.data ;

    if(isLoading){
        return <BigSpinner/>
    }

    if(error){
        toast.error(error.message)
    }


    if(data.success == true){
        return (
            <div className='container mx-auto py-28'>
    
                {/* title */}
    
                <div className=''>
                        <h1 className='text-3xl font-bold text-center'>Explore Popular Destination</h1>
                        <span className='block text-zinc-400 text-center'>Cicero famously orated against his political opponent Lucius Sergius Catilina.</span>
                </div>
    
                {/* card  */}
    
                <div className='grid w-full grid-cols-1 gap-x-2 gap-y-20 lg:grid-cols-4 mt-8'>
    
    
                    {
                        destinationData.map(data => 
                            <PlaceCard 
                                key={data._id}
                                placeInfo={data}
                            
                            ></PlaceCard>
                        )
                    }
    
                </div>
    
    
    
    
            </div>
        );
    }

 
};

export default DestinationSection;