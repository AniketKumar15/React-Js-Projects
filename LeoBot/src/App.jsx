import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import ChatAera from './Components/ChatAera'
import About from './Components/About'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Update the URL when the currentPage changes
    window.history.pushState({}, '', currentPage === 'home' ? '/' : '/about');
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <ChatAera />;
      case 'about':
        return <About />;
      default:
        return <ChatAera />;
    }
  };
  return (
    <div className='h-screen w-full'>
      <NavBar onNavigate={setCurrentPage}/>
      {/* <ChatAera /> */}
      {/* <About /> */}
      {renderPage()}
    </div>
  )
}

export default App