'use client'
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import UI_Image from '../UI_Image/UI_Image';

const NavBar = () => {
  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        transition={{
            delay: 0.05,
            duration: 0.2
        }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className='md:px-56 px-6 flex justify-between items-center w-full pt-4 py-3'
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '100', 
          backgroundColor: 'white', 
        }}
      >


        {/* Navbar Links */}
        <UI_Image src="/assets/logo.png" width={55} height={55} alt='logo' style={{ cursor: 'pointer'}}/>
        <div className='md:flex justify-center items-center hidden'>
          <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Emotions</Link>
          <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Manifesto</Link>
          <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Self-Awareness Test</Link>
          <Link className='mr-10 font-semibold text-[#5e5e5e]' href="./">Work With Us</Link>
        </div>



        {/* Download button */}
        <motion.button
          initial={{ scale: 0.1, opacity: 0.1 }}
          transition={{
              delay: 0.1,
              duration: 0.3
          }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className='flex justify-center items-center bg-[#212020] duration-300 rounded-[50px] text-[#e6e4e4] px-5 py-3 font-medium cursor-pointer shadow-md hover:shadow-lg transition duration-300 ease-in-out'>
          Download app
        </motion.button>
      </motion.nav>
    </>
  )
}

export default NavBar;