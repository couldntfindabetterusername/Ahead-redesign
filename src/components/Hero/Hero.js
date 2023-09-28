'use client'
import React, { useEffect } from 'react'
import { motion, useAnimation} from 'framer-motion';
import Rating from '../Rating/Rating';
import UI_Image from '../UI_Image/UI_Image';
import SwirlingPlanets from '../swirl_planets';


const Hero = () => {

    const circlePath = "M225,0 A225,225 0 1,0 0,-225 A225,225 0 0,0 225,0";

    const controls = useAnimation();
  
    const planetStyles = {
      width: '75px',
      height: '75px',
      backgroundImage: `url('/assets/planet.png')`,
      backgroundSize: 'cover',
      borderRadius: '50%',
    };

  return (
    <section className="md:px-40 px-4 flex justify-center items-center mt-10">
        <motion.div
            initial={{ y: 40, opacity: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#ECE8FB] w-[95%] md:h-[80vh] rounded-3xl flex flex-col md:flex-row p-6 gap-8 md:gap-0 "
        >

            {/* Left Part */}
            <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
                <motion.p
                    initial={{ x: -20, opacity: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl text-[#323232] font-semibold ml-1"
                >
                    Ahead app
                </motion.p>


                <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }} className="md:text-6xl text-3xl font-bold text-[#151515] mt-3"
                >
                    Master your life by mastering emotions
                </motion.h1>


                <div className='flex items-center mt-10'>

                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        transition={{
                            delay: 0.8,
                            duration: 0.8
                        }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className='flex flex-col justify-center items-start md:w-40 w-28 h-12 rounded-md ml-5 gap-1'
                    >
                        <Rating />
                        <p className='text-xs font-semibold text-black'>100+ App Store Reviews </p>
                    </motion.div>
                </div>
            </div>

            

            {/* Right Part */}
            <div className='flex flex-1 justify-center items-center relative px-4 py-2'>
                {/* dotted circle */}
                <div className='absolute hidden md:flex  h-[450px] w-[450px] rounded-full border-4 border-dashed border-[#f6f6fd] justify-center items-center z-0 '>
                    <div className='absolute h-72 w-72  rounded-full bg-[#DED6F8] '></div>
                </div>

                <SwirlingPlanets />
            
                {/* Phone */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{
                        delay: 0.8,
                        duration: 0.8
                    }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className='flex justify-center items-center z-10 '>
                    <UI_Image src='/assets/mobile.png' width={300} height={300} alt='mobile' className='md:scale-100 scale-75'/>
                </motion.div> 
            </div>
        </motion.div>

    </section>
  )
}

export default Hero;