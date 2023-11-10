import React from 'react';
import { TbCalendarDollar } from 'react-icons/tb';
import { FaUmbrellaBeach } from 'react-icons/fa';
import { SiYourtraveldottv } from 'react-icons/si';
import { MdOutlineSupportAgent } from 'react-icons/md';

const OurService = () => {
    return (
        <div>
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">

                <div className="container mx-auto grid justify-center gap-4 grid-cols-2 lg:grid-cols-4">

                    
                    <div data-aos="fade-left" data-aos-duration="200" data-aos-delay="50" className=" w-56 lg:w-80 text-start p-4">
                       <TbCalendarDollar className='text-red-700 text-5xl'></TbCalendarDollar>
                        <h3 className="my-3 text-xl lg:text-3xl font-semibold">Easy Booking</h3>
                        <div className="space-y-1 leadi text-zinc-400 text-sm" >
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline.</p>
                         
                        </div>
                    </div>
                    
                    <div data-aos="fade-left" data-aos-duration="400" data-aos-delay="50" className=" w-56 lg:w-80 text-start p-4">
                       <FaUmbrellaBeach className='text-red-700 text-5xl'></FaUmbrellaBeach>
                        <h3 className="my-3 text-xl lg:text-3xl font-semibold">Best Destinations</h3>
                        <div className="space-y-1 leadi text-zinc-400 text-sm" >
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline.</p>
                         
                        </div>
                    </div>
                    
                    <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="50" className=" w-56 lg:w-80 text-start p-4">
                       <SiYourtraveldottv className='text-red-700 text-5xl'></SiYourtraveldottv>
                        <h3 className="my-3 text-xl lg:text-3xl font-semibold">Travel Guides</h3>
                        <div className="space-y-1 leadi text-zinc-400 text-sm" >
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline.</p>
                         
                        </div>
                    </div>
                    
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="50" className=" w-56 lg:w-80 text-start p-4">
                       <MdOutlineSupportAgent className='text-red-700 text-5xl'></MdOutlineSupportAgent>
                        <h3 className="my-3 text-xl lg:text-3xl font-semibold">Friendly Support</h3>
                        <div className="space-y-1 leadi text-zinc-400 text-sm" >
                            <p>Cicero famously orated against his political opponent Lucius Sergius Catilina. Occasionally the first Oration against Catiline.</p>
                         
                        </div>
                    </div>

                    
        

                    
                    
          
                  
                
                
                
                </div>
            </section>
        </div>
    );
};

export default OurService;