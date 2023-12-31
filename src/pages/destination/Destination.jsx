import React from 'react';
import SectionBanner from '../../components/sectionBanner/SectionBanner';
import PlaceCard from '../../components/cards/PlaceCard';
import { useQuery } from 'react-query';
import BigSpinner from '../../components/BigSpinner';

const Destination = () => {

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
            <div>
                <SectionBanner sectionName={'Choose your Destination'}></SectionBanner>
                <div className='w-7/12 m-auto grid lg:grid-cols-3 grid-cols-1 gap-y-24 my-12'>
    
                   
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

export default Destination;