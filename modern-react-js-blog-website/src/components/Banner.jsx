import React from 'react'
import { Link } from 'react-router-dom'

import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=' bg-black px-4 py-32 mx-auto flex items-center justify-center'>
        <div className='text-white text-center'>
            <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Welcome to Our Blog</h1>
            <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Stay informed with the latest breaking news and in-depth analysis from around the world. Join our community of readers who rely on us for timely, accurate reporting on the stories that matter most. We deliver comprehensive coverage, expert insights, and real-time updates to keep you connected to what's happening now.</p>

            {/* btn here */}
            <div>
                <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn more <FaArrowRight className='mt-1 ml-2'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner