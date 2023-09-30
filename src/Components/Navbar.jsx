import React from 'react'

export default function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
            <div className="left flex items-center space-x-3 justify-center">
                <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="image" />
                <h2 className='font-bold text-white text-2xl'>Movie Masala</h2>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact </li>
                    <li>Services</li>
                </ul>
            </div>
        </div>
    )
}
