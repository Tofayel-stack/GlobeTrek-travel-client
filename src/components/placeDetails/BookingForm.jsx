import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/AuthContextElements';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const BookingForm = ({destinationInfo}) => {

    // get user data form context and database .
    const {user} = useContext(AuthContext)
    const { isLoading, error, data } = useQuery({
        queryKey:[user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/user?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })


    // booking data function 

    const submitBookingData = (event) => {
        event.preventDefault()
        toast.success("Your Booking Confirmed :) ")

        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const date = event.target.date.value;
        const time = event.target.time.value;
        const place = event.target.place.value;
        const message = event.target.message.value;

        const bookingData = {
            name,
            email,
            phone,
            date,
            time,
            place,
            message
        }
        console.log(bookingData);


        // here can we pass this data in database ...


    }





    return (


        <div>
            <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="text-2xl py-4 px-6 bg-gray-400 text-white text-center font-semibold uppercase">
                    Confirm your travel
                </div>
                <form className="py-4 px-6" onSubmit={submitBookingData} >
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name" type="text" name='name' defaultValue={data?.data?.userName} readOnly/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" name='email' placeholder="Enter your email" defaultValue={data?.data?.email} readOnly/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone" type="tel" name='phone' placeholder="Enter your phone number" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="date" type="date" name='date' placeholder="Select a date"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                            Time
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time" type="time" name='time' placeholder="Select a time"/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                            Place
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time" type="text" name='place' defaultValue={destinationInfo?.name} readOnly/>
                        
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message" rows="4" name='message' placeholder="Enter any additional information"></textarea>
                    </div>

                    <div className="flex items-center justify-center mb-4">
                       
                            <button
                            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                            type="submit"  disabled={!user}>
                            Confirm
                        </button>

                  
                    </div>
                    
                    {
                            !user && <p className='text-red-500 text-center'>please <Link className='font-bold underline' to='/signIn'>Sign In</Link> first </p>
                        }

                </form>
            </div>
        </div>
    );
};

export default BookingForm;