import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900
    w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row
      justify-between items-start'>
      <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <img src={assets.logo} className="w-1/3 h-auto" alt="" />
        <p className='text-gray-400 mt-4'>
        Our waste data collection platform streamlines recycling management 
        by enabling users to report waste for collection with precise location tracking.
        </p>
      </div>
      <div className='w-full md:w-1/5 mb-8 md:mb-0'>
        <h3 className= "text-white text-lg font-bold mb-4">
          WasteWise Uganda
        </h3>
        <ul className='flex flex-col gap-2 text-gray-400'>
          <a href="#Header" className='hover:text-white'>Home</a>
           <a href="#About" className='hover:text-white'>About</a>
           <a href="#Discover" className='hover:text-white'>Discover</a>
           <a href="#" className='hover:text-white'>Privacy policy</a>
        </ul>
      </div>
      <div className='w-full md:w-1/3'>
        <h3 className= "text-white text-lg font-bold mb-4">
          Get Started
        </h3>
        <p className='text-gray-400 mb-4 max-w-80'>Begin your waste tracking journey today!</p>
      </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center
      text-gray-500'>
        Copyright 2025 @ WasteWise. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
