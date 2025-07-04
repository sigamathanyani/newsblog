import React from 'react'
import aboutImg from "../assets/about.png"
import User1 from "../assets/user-01.png"
import User2 from "../assets/user-02.png"
import User3 from "../assets/user-03.png"

import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <div className='text-white'>
      <div className='py-40 bg-black text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>About Us Page</h1>
      </div>

      {/* about content */}
      <div className='max-w-7xl mx-auto px-4 my-20 text-black'>

        {/* top content */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          <div className='md:w-1/2'>
            <img src={aboutImg} alt="" className='w-full' />
          </div>
          <div className='md:w-1/2'>
            <h5 className='text-orange-500 text-xl font-medium mb-4'>Who we are</h5>
            <h2
              className="font-bold text-3xl sm:text-4xl md:text-[40px] text-darkmb-4 mb-8"
            >
              We deliver breaking news and trusted journalism

            </h2>
            <p className='text-lg text-gray-600'>Stay ahead of the curve with our comprehensive news coverage spanning politics, business, technology, and world events. Our experienced journalists and correspondents bring you real-time updates, in-depth analysis, and investigative reporting from every corner of the globe.
              <br /> <br />
              From local community stories to international headlines, we're committed to providing accurate, unbiased news that keeps you informed and engaged with the world around you.</p>
          </div>
        </div>

        {/* Author section */}
        <div className='mt-20'>
          <h2 className='text-5xl font-bold mb-8 '>Top Journalists</h2>
          <hr className='my-5' />

          <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-between items-center w-full mx-auto gap-12 mt-12'>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={User1} alt="" className='mb-4 mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Adrio Devid</h5>
                <p className='text-base mb-2'>Director of Established News Media</p>
                <div className='flex gap-2 items-center text-gray-600 justify-center'><HiOutlineDocumentText className='w-5 h-5' /> 12 Article Published </div>
              </div>
            </div>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={User2} alt="" className='mb-4 w-[100px] h-[100px] mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Rayna Mario</h5>
                <p className='text-base mb-2'>Content Writer @ World News Networks</p>
                <div className='flex gap-2 items-center text-gray-600 justify-center'><HiOutlineDocumentText className='w-5 h-5' />8 Article Published </div>
              </div>
            </div>
            <div className='bg-slate-50 w-72 py-8 text-center cursor-pointer hover:-translate-y-4 transition-all duration-300'>
              <div className='mx-auto'><img src={User3} alt="" className='mb-4 mx-auto' /></div>
              <div>
                <h5 className='text-lg font-medium mb-1'>Devid Tac</h5>
                <p className='text-base mb-2'>Head of Current Affairs</p>
                <div className='flex gap-2 items-center text-gray-600 justify-center'><HiOutlineDocumentText className='w-5 h-5' />5 Article Published </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default About