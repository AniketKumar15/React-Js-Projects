import React from 'react'

const Accordion = ({title, desc, mode}) => {
  return (

    <details className='mb-2 max-w-2xl mx-auto'>
      <summary className={`px-4 py-2 ${mode ? 'bg-white text-black' : 'bg-black text-white'} rounded-md hover:bg-orange-500 cursor-pointer transition-colors`}>{title}</summary>
      <p className={`px-4 py-2 ${mode ? 'bg-white text-black' : 'bg-gray-500 text-white'} rounded-md my-1`}>{desc}</p>
    </details>

  )
}

export default Accordion