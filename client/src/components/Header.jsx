import React, { useState } from 'react'
import { Link } from 'react-router'
import { FiLogOut, FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

function Header() {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className='bg-gray-800 p-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                    <Link to="/" className='text-white text-2xl font-extrabold'>
                        SWIFTBUY
                    </Link>

                    <input type="text"
                        placeholder='Search'
                        className='ml-40 p-2 rounded-md rounded-r-none bg-gray-700 text-white hidden sm:block' />

                    <button className=' bg-blue-500 text-white py-3 px-4 rounded-md rounded-l-none hidden sm:block'>
                        <FiSearch />
                    </button>
                </div>

                <div className='hidden sm:flex items-center space-x-4 text-xl'>
                    <Link to="/cart" className='text-white flex items-center'>
                        <FiShoppingCart className='mr-2' />
                        Cart
                    </Link>

                    <div className='relative group'>
                        <button onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} className='text-white flex items-center'>
                            <FiUser className='mr-2' />
                            Profile
                        </button>
                        <ul className={`absolute ${isProfileMenuOpen ? 'block' : 'hidden'} bg-gray-800 mt-2 p-2 space-y-2 text-white`} >
                            <li>
                                <Link to="/profile">
                                    <FiUser className='mr-2' />
                                    Profile
                                </Link>
                            </li>

                            <li>
                                <Link to="/logout">
                                    <FiLogOut className='mr-2' />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button className='text-white'>Sign In</button>
                </div>
                <div className='sm:hidden'>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className='text-white text-xl focus:outline-none'>
                        <FiMenu />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className=' mt-4 sm:hidden'>
                    <input type="text" placeholder='search' 
                    className='p-2 rounded-md  bg-gray-700 text-white w-full mb-2'/>
                    <button> <FiSearch /></button>
                </div>
            )}
        </nav>
    )
}

export default Header