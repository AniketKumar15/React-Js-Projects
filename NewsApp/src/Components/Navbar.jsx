import React, { useState } from 'react'
import Option from './Option';

const Navbar = ({ setCategory, setCountry}) => {

  const [isOpen, setIsOpen] = useState(false);
  const option = Option();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between bg-black text-white p-4 md:p-6 lg:p-8">
      <div className="flex items-center">
        <h1 className='text-xl border px-2 hover:bg-orange-400 transition duration-500 ease-in-out cursor-pointer'>News Savage</h1>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="hover:text-gray-300 hover:underline">Home</a>
        <select className='bg-transparent' onChange={handleCategoryChange}>
          <option value="general" className='text-black'>Latest News</option>
          <option value="entertainment" className='text-black' >Entertainment</option>
          <option value="business" className='text-black'>Business</option>
          <option value="health" className='text-black'>Health</option>
          <option value="science" className='text-black'>Science</option>
          <option value="sports" className='text-black'>Sports</option>
          <option value="technology" className='text-black'>Technology</option>
        </select>

        <select className='bg-transparent'  onChange={handleCountryChange} defaultValue="in">
          {option.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

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
        <div className="md:hidden absolute right-0 bg-gray-800 w-[150px] top-0 h-screen flex flex-col">
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
          <a href="#" className="block hover:text-gray-300 ml-4 mt-3 hover:underline">Home</a>
          <select className='bg-transparent block hover:text-gray-300 ml-3 mt-3 hover:underline' onChange={handleCategoryChange}>
            <option value="general" className='text-black'>Latest News</option>
            <option value="entertainment" className='text-black' >Entertainment</option>
            <option value="business" className='text-black'>Business</option>
            <option value="health" className='text-black'>Health</option>
            <option value="science" className='text-black'>Science</option>
            <option value="sports" className='text-black'>Sports</option>
            <option value="technology" className='text-black'>Technology</option>
          </select>

          <select className='bg-transparen' onChange={handleCountryChange}>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </nav>
  )
}

export default Navbar
