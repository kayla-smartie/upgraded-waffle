import React from 'react'
import Navbar from './navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover flex
    items-center w-full overflow-hidden' style=
    {{backgroundImage: "url('/header_img.jpg')"}} id='Header'>
      <Navbar/>
      <motion.div
      initial={{opacity: 0, y:100}}
      transition={{duration: 1.5}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      className='container text-center mx-auto py-4
      px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block
        max-w-3xl font-semibold pt-20 text-blue-950'>A new outlook at Waste Management</h2>
        <div className='space-x-6 mt-16'> 
            <a href="#Discover" className='border border-white px-8
            py-3 rounded'>Discover</a>
            <a href="#Discover" className='bg-blue-500 border-white px-8
            py-3 rounded'>Resources</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
