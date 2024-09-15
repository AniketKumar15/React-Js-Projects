import React from 'react'
import { useState } from 'react';

const NavBar = ({ toggleMode, mode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`flex justify-between bg-transparent text-black p-4 md:p-4 lg:p-4`}>
      <div className="flex items-center">
        <h1 className='text-2xl px-2 cursor-pointer'>Currency Converter</h1>
      </div>
      <div className='flex gap-3'>
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <a href="/" className="hover:text-gray-300 hover:underline">Home</a>
          <a href="/about" className="hover:text-gray-300 hover:underline">About</a>
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
        <div className={`md:hidden absolute right-0 bg-[#e6e9f3] shadow text-black w-[150px] top-0 h-screen flex flex-col z-10`}>
          <button
            className="outline-none mobile-menu-button absolute right-0 m-1.5"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-500 mt-5"
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
          <a href="/" className="block hover:text-gray-800 ml-4 mt-10 hover:underline">Home</a>
          <a href="/about" className="block hover:text-gray-800 ml-4 mt-3 hover:underline">About</a>
        </div>
      )}
    </nav>
  )
}

export default NavBar