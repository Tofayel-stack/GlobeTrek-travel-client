import React from 'react';

const Counter = () => {
    return (
        <div className='flex w-full py-12 justify-evenly container m-auto'>

            <div className='flex gap-2'>
                <span className='text-5xl text-red-700'>25K</span>
                <span className='text-zinc-500 '>years <br />
                    Successfully</span>
            </div>
            <div className='flex gap-2'>
                <span className='text-5xl text-red-700'>45+</span>
                <span className='text-zinc-500 '>Overall <br />
                    Booking</span>
            </div>
            <div className='flex gap-2'>
                <span className='text-5xl text-red-700'>22</span>
                <span className='text-zinc-500 '>Countries<br />
                    We work</span>
            </div>
            <div className='flex gap-2'>
                <span className='text-5xl text-red-700'>25K</span>
                <span className='text-zinc-500 '>Happly <br />
                    Users</span>
            </div>



        </div>
    );
};

export default Counter;