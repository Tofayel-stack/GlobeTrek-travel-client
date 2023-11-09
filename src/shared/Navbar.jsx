import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContextElements';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { RiMenuUnfoldFill } from 'react-icons/ri';



const Navbar = () => {

    const {user,userSignOUt} = useContext(AuthContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const handleSignOut =()=>{
      userSignOUt()
      navigate('/')
      localStorage.removeItem("products");
    }

    // custom hook



    
    return (
  
    <div className="bg-white sticky top-0 z-30">
      <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          
          {/* side nav button  */}
      
         <label title='dashboard nav' htmlFor="dashSideNav" className="text-white drawer-button lg:hidden"><RiMenuUnfoldFill></RiMenuUnfoldFill></label>


        <Link
          className="inline-flex items-center"
          to='/'
        >
          <span className="ml-2 text-xl font-bold tracking-wide text-red-800 uppercase">
          GlobeTrek
          </span>
        </Link>
     
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
               to='/'
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-800"
              >
                Home
              </Link>
            </li>
          
            <li>
              <Link
                to='/about'
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-800"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to='/destination'
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-800"
              >
                Destination
              </Link>
            </li>
            
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              {
                user? 

                <button onClick={handleSignOut} className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white
                transition hover:-rotate-2 hover:scale-110 outline  bg-red-800">signOut</button>
                :

                <Link
                to='/signIn'
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white
                transition hover:-rotate-2 hover:scale-110 outline bg-red-800"
                
              >
                Sign up
              </Link>

              }
            </li>
          </ul>





          {/* dropdown function is here */}
          <div className="lg:hidden z-20">
            <button
              
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <BsFillMenuButtonWideFill className='text-red-800'></BsFillMenuButtonWideFill>
            </button>



{/* dropdown menu is there */}

            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    
                    <Link
                          className="inline-flex items-center"
                          to='/'
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          GlobeTrek
                          </span>
                        </Link>
                    </div>
                    <div>
                      <button
                       
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <MdOutlineClose className='text-red-800 text-xl'></MdOutlineClose>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                     
                    
                      <li>
                        <Link
                          to='/about'
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-800"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/destination'
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-red-800"
                        >
                          Destination
                        </Link>
                      </li>
                   
                     
                    
                      <li>
                          {
                            user? 

                            <button onClick={handleSignOut} className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-amber-600 focus:shadow-outline focus:outline-none">signOut</button>
                            :

                            <Link
                            to='/signIn'
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-amber-600 focus:shadow-outline focus:outline-none"
                            
                          >
                            Sign up
                          </Link>

                          }
                        </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

       
    );
};

export default Navbar;