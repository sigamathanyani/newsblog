import React from 'react'

import { FaAutoprefixer, FaCss3, FaDiceD6, FaDisplay, FaInfo, FaRegObjectUngroup, FaRegThumbsUp } from "react-icons/fa6";

const Services = () => {
  return (
    <div className='text-white'>
      <div className='py-40 bg-black text-center px-4'>
        <h1 className='lg:text-7xl text-5xl leading-snug font-bold mb-5'>Services Page</h1>
      </div>

      <div>
        <section className="my-20 text-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-orange-600 mb-2 block">
                    Our Services
                  </span>
                  <h2
                    className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                    What We Offer
                  </h2>
                  <p className="text-base text-body-color">
                    We offer comprehensive news services including 24/7 breaking news coverage, in-depth investigative journalism, expert political analysis, business reporting, sports updates, and weather forecasts.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    <FaAutoprefixer className='w-44 h-44 text-blue-700' />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    24/7 News Cycle
                  </h4>
                  <p className="text-body-color">
                    Continuous updates with fresh content, breaking news alerts, and comprehensive coverage that never stops.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    <FaDiceD6 className='w-44 h-44 text-blue-700' />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    Personalized News Feed
                  </h4>
                  <p className="text-body-color">
                    Customize your news experience with preferred topics, regional coverage, and notification settings for the stories you care about.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    <FaDisplay className='w-44 h-44 text-blue-700' />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    Real-Time Updates
                  </h4>
                  <p className="text-body-color">

                    Optimized for speed to bring you breaking news alerts, live coverage, and developing stories as they happen.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    <FaRegObjectUngroup className='w-44 h-44 text-blue-700' />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    Comprehensive Coverage
                  </h4>
                  <p className="text-body-color">
                    Complete news ecosystem featuring politics, world events, business, sports, technology, health, and local community reporting.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
                >
                  <div
                    className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                  >
                    <FaRegThumbsUp className='w-44 h-44 text-blue-700' />
                  </div>
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    Fast Loading Platform
                  </h4>
                  <p className="text-body-color">
                    Built with modern technology to deliver news instantly - because every second counts when breaking stories unfold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services