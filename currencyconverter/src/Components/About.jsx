import React from 'react'

const About = () => {
  return (
    <div className='px-3'>

      <div className='container mx-auto bg-[#e6e9f3] text-black py-4 px-7 rounded-xl shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)] my-10'>
        <h1 className='text-center px-5 py-3 shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] rounded-lg flex flex-wrap justify-center gap-5 [&>*]:w-[8rem] [&>*]:h-[8rem] [&>*]:rounded-md [&>*]:bg-purple-7 [&>*:hover]:shadow-[0.625rem_0.625rem_0.875rem_0_rgb(225,226,228),-0.5rem_-0.5rem_1.125rem_0_rgb(255,255,255)] font-medium my-3 w-[150px] mx-auto'>ABOUT ME</h1>

        <p className='text-justify'>A sleek and user-friendly currency converter web application that provides real-time exchange rate calculations. Built with modern web technologies, it supports multiple currencies and features a clean, responsive design for seamless conversions. Ideal for travel, finance, and everyday use.</p>
      </div>
    </div>
  )
}

export default About