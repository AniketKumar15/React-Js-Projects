import React, { useState } from 'react'
import logo from '../assets/lion.jfif'

const NavBar = ({ onNavigate }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='fixed'>
      <button className='left-5 relative top-5 text-2xl hover:text-slate-700'><i className="fa-solid fa-bars" onClick={toggleSidebar}></i></button>
    
      <div className={`bg-[#e6e9f3] w-[200px]  absolute h-screen top-0 shadow-lg flex flex-col transition-all duration-300 ease-cubic-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100 py-5 px-5' : 'max-h-0 opacity-0 p-0'}`}>
        <button className='absolute right-0 mx-3 top-0 text-lg my-2'><i className="fa-solid fa-xmark" onClick={toggleSidebar}></i></button>
        <h1 className='flex justify-center items-center gap-2 font-semibold mb-5 mt-5'><img src={logo} className='w-9 rounded-full'/>Leo-Chatbot</h1>
        <hr className='border-black'/>
        <div id='top'>
          <ul className='my-5'>
            <li  onClick={() => {onNavigate('home'); toggleSidebar()}}  className='bg-gray-200 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><button><i className="fa-solid fa-house"></i> Home</button></li>
            <li onClick={() =>{ onNavigate('about'); toggleSidebar()}} className='bg-gray-200 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><button><i className="fa-solid fa-user"></i> About</button></li>
            {/* <li className='bg-gray-200 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><a href="/"><i className="fa-solid fa-clock-rotate-left "></i> History</a></li> */}
          </ul>
        </div>

        {/* <div id="bottom" className="mt-auto">
          <ul className='my-5'>
            <li className='bg-blue-300 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><a href="/">Log In</a></li>
            <li className='bg-gray-200 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><a href="/">Sign Up</a></li>
            <li className='bg-gray-200 py-2 px-5 rounded-3xl flex justify-center items-center mb-3 hover:bg-gray-100 shadow-[inset_0rem_0.2rem_0.4rem_0_rgb(0,0,0,0.1)]'><a href="/"><i className="fa-solid fa-circle-info"></i> Help</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  )
}

export default NavBar