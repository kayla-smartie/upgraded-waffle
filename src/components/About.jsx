import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    transition={{duration: 1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once: true}}
    className='flex flex-col items-center justify-center container
    mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden'
    id='About'>
        <h1 className='text-2xl sm:text-4xl font-boldnmb-2'>About
            <span className='underline underline-offset-4 decoration-1 under font-light'>Waste Wise</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>The WasteWise platform is an innovative online solution designed to transform 
        waste management practices in Naguru 1 Parish, Kampala, Uganda. It provides a 
        centralized system for tracking waste generation, reuse, recycling, and disposal
        while offering educational resources on sustainable practices.
        </p>
        <div className='flex flex-col md:flex-row items-center md-items-start
        md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full md:w-400 md:h-auto sm:w-1/2 max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div className='text-2xl font-medium text-gray-800'>
                        <p>85%</p>
                        <p>Of the world population has been affected by climate change-induced weather events</p>
                    </div>
                    <div className='text-2xl font-medium text-gray-800'>
                        <p>13%</p>
                        <p>Maximum extent of global sea ice that declined since 1980 </p>
                    </div>
                    <div className='text-2xl font-medium text-gray-800'>
                        <p>69%</p>
                        <p>Decline in animal populations in the last fifty years</p>
                    </div>
                    <div className='text-2xl font-medium text-gray-800'>
                        <p>30%</p>
                        <p>Of food may be lost or wasted due to climate-related impacts</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg '>
                 WasteWise's mission in Naguru 1 Parish is to empower the community to transform waste
                 into a valuable resource through innovative technology, education, and collaboration,
                 creating a cleaner, healthier, and more sustainable environment for all.
                </p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded' ><a href="#Discover">
                   Learn More</a></button>
            </div>

        </div>
      
    </motion.div>
  )
}

export default About
