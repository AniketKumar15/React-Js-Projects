import React from 'react'
import { useState } from 'react';
import sunIcon from '../assets/sun-solid.svg'
import moonIcon from '../assets/moon-solid.svg'

const NavBar = ({ toggleMode, mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex justify-between ${mode === true ? 'bg-black text-white' : 'bg-gray-200 text-black'} p-4 md:p-4 lg:p-4 shadow-lg`}>
      <div className="flex items-center">
        <h1 className='text-xl px-2 cursor-pointer'>Text Editor</h1>
      </div>
      <div className='flex gap-3'>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-300 hover:underline">Home</a>
          <a href="/" className="hover:text-gray-300 hover:underline">About</a>

          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleMode} />
            <div className={`relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white`}></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{mode === true ? <img src={moonIcon} className='w-5' /> : <img src={sunIcon} className='w-5' />}</span>
          </label>
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
        <div className={`md:hidden absolute right-0 ${mode === true ? 'bg-black text-white' : 'bg-gray-200 text-black'} w-[150px] top-0 h-screen flex flex-col z-10`}>
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
          <a href="/" className="block hover:text-gray-800 ml-4 mt-3 hover:underline">Home</a>
          <a href="/" className="block hover:text-gray-800 ml-4 mt-3 hover:underline">About</a>

          <label className="inline-flex items-center cursor-pointer ml-4 mt-3">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleMode} />
            <div className={`relative w-11 h-6 bg-black peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-blue-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white`}></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{mode === true ? <img src={moonIcon} className='w-5' /> : <img src={sunIcon} className='w-5' />}</span>
          </label>
        </div>
      )}
    </nav>
  )
}

export default NavBar