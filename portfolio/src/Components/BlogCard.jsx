import React from 'react'

const BlogCard = ({blogLink, imgLink, blogTitle, blogDesc, mode}) => {
  return (
    <a href={blogLink} target='_blank' className={`flex flex-col items-center ${mode ? 'bg-white text-black' : 'bg-black text-white'} border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-orange-300  dark:border-gray-700 dark:bg-gray-800 md:h-[220px]`}>
      <img className="w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={imgLink} alt="News" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight  dark:text-white">{blogTitle}</h5>
          <p className="mb-3 font-normal dark:text-gray-400">{blogDesc}</p>
        </div>
    </a>
  )
}

export default BlogCard