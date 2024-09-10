import React from 'react'
import person from '../assets/person.png'

const HeroSection = ({mode}) => {
  return (
    <section className={`h-[91.6vh] w-full max-w-7xl my-0 mx-auto overflow-hidden relative ${mode ? 'text-white' : 'text-black'}`}>
      <div className='h-screen w-screen p-8 text-[3rem] font-bold flex flex-col justify-center'>
        <span className='text-[1.75rem] font-[100]'>Hello,</span>
        <span>I'm <span className='text-orange-500'>XYZ</span><br />Web Devloper</span>
        <p className='text-base font-normal'>I'm a skilled web devloper with experience in creating websites.</p>
        
        <a href="/contact" className={`text-lg ${mode ? 'text-black bg-white' : 'text-white bg-black'} w-32 py-2 px-3 rounded-lg mt-5 hover:bg-orange-500 hover:text-white`}><i className="fa-solid fa-briefcase"></i> Hire Me</a>
      </div>
      <img src={person} alt="Profile Photo" className="absolute z-[-1] top-0 right-0 object-cover h-[100vh]"/>
    </section>
  )
}

export default HeroSection