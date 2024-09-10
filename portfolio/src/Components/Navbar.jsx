import React, { useState } from 'react'
import whiteLogo from '../assets/Logo.jpg'
import blackLogo from '../assets/Logo.png'
import sunIcon from '../assets/sun-solid.svg'
import moonIcon from '../assets/moon-solid.svg'
import { Link } from 'react-router-dom'

const Navbar = ({toggleMode, mode}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`w-full py-2 px-5 flex justify-between items-center ${mode ? 'text-white' : 'text-black'}`}>
      <div className="w-full flex justify-between items-center">
        <img src={mode ? whiteLogo : blackLogo} alt="" className='w-16'/>
        <div className='hidden md:flex items-center'>
          <Link className='hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full transition-colors cursor-pointer focus:border-2' to='/'>Home</Link>
          <Link className='hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full transition-colors cursor-pointer focus:border-2' to='/about'>About</Link>
          <Link className='hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full transition-colors cursor-pointer focus:border-2' to='/skills'>Skills</Link>
          <Link className='hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full transition-colors cursor-pointer focus:border-2' to='/projects'>Projects</Link>
          <Link className='hover:bg-orange-500 hover:text-white py-1 px-3 rounded-full transition-colors cursor-pointer focus:border-2' to='/blog'>Blog</Link>
        </div>
        <div className='gap-5 hidden md:flex items-center'>
            <div className={`flex items-center justify-center gap-2 ${mode ? 'bg-white text-black' : 'bg-black text-white'}   py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-500 group transition-all`}>
            <i className="fa-regular fa-message group-hover:text-white"></i>
            <Link className='group-hover:text-white' to='/contact'>Contact Me</Link>
            </div>
            <img src={mode ? moonIcon : sunIcon} className='w-5 cursor-pointer' onClick={toggleMode}/>
        </div>
      </div> 

      <div className="md:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="(link unavailable)"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden absolute right-0 ${!mode ? 'bg-white text-black' : 'bg-black text-white'} w-[150px] top-0 h-screen flex flex-col z-10 py-4`}>
          <button
            className="outline-none mobile-menu-button absolute right-0 m-1.5"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="(link unavailable)"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}    
            </svg>
          </button>
          <Link className='active:underline py-1 px-3 rounded-full transition-colors cursor-pointer' to='/'>Home</Link>
          <Link className='active:underline py-1 px-3 rounded-full transition-colors cursor-pointer' to='/about'>About</Link>
          <Link className='active:underline py-1 px-3 rounded-full transition-colors cursor-pointer' to='/skills'>Skills</Link>
          <Link className='active:underline py-1 px-3 rounded-full transition-colors cursor-pointer' to='/projects'>Projects</Link>
          <Link className='active:underline py-1 px-3 rounded-full transition-colors cursor-pointer' to='/blog'>Blog</Link>
          <hr />     
          <img src={mode ? moonIcon : sunIcon} className='w-5 cursor-pointer ml-2 mt-4' onClick={toggleMode}/>
          <div className={`flex items-center justify-center gap-2 ${mode ? 'bg-white text-black' : 'bg-black text-white'} py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-500 group transition-all mx-2 my-3`}>
            <i className="fa-regular fa-message group-hover:text-white"></i>
            <Link className='group-hover:text-white' to='/'>Contact Me</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar