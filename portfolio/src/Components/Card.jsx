import React from 'react'

const Card = ({imgUrl, title, decs}) => {
  return (
    <div className='bg-black w-[225px] relative h-[250px] flex justify-center items-center cursor-pointer group rounded-t-xl'>
      <img src={imgUrl} className='rounded-t-xl w-[225px] h-[250px]'/>
      <div className='absolute -bottom-7 bg-orange-500 w-full text-center rounded-b-xl text-white font-bold text-lg'>
        <p>{title}</p>
      </div>

      <div className='text-white absolute w-full h-full flex flex-col justify-center 
      hover:bg-white hover:bg-opacity-80 rounded-t-xl px-3'>
        <span className='hidden group-hover:block'>
          <h1 className='text-center text-black text-xl font-bold'>{title}</h1>
          <p className='text-center text-black text-base font-normal'>{decs}</p>
        </span>
      </div>
    </div>
  )
}

export default Card