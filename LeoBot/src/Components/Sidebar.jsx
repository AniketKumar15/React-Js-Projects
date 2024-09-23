import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-800 text-white h-screen p-5 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:w-64`}>
        {/* Top Part */}
        <div className="flex items-center justify-between mb-5">
          <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>Sidebar</h1>
          <button onClick={toggleSidebar} className="md:block">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Middle Part */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 12h18m-7 6h7" />
            </svg>
            {isOpen && <span className="ml-2">Home</span>}
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            {isOpen && <span className="ml-2">About</span>}
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            {isOpen && <span className="ml-2">History</span>}
          </div>
        </div>

        {/* Bottom Part */}
        <div className="mt-auto flex flex-col space-y-4">
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18v18H3V3z" />
            </svg>
            {isOpen && <span className="ml-2">Settings</span>}
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 2" />
            </svg>
            {isOpen && <span className="ml-2">Help</span>}
          </div>
          <div className="flex items-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            {isOpen && <span className="ml-2">Login</span>}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        <h2 className="text-2xl font-bold">Main Content Area</h2>
      </div>
    </div>
  );
};

export default Sidebar;
