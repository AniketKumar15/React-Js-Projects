import React from 'react'
import Card from './Card'

const Projects = ({mode}) => {
  return (
    <div className='container mx-auto py-2 px-2'>
      <h1 className={`text-xl border-l-2 border-orange-500 pl-2 mb-5 font-bold ${mode ? 'text-white' : 'text-black'}`}>Projects</h1>
      <div className='flex justify-center items-center mx-auto flex-wrap gap-x-5 gap-y-10'>
        <Card imgUrl={"https://raw.githubusercontent.com/Va2/react-todo-list/master/screenshot.jpg"} title={"To Do List"} decs={"This is List app where you can add any task and mark is done and delete it."}/>

        <Card imgUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BKQlxeNfAV-_gzvm0saM2uWI2gT13mvSnw&s"} title={"News App"} decs={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>

        <Card imgUrl={"https://reactjsexample.com/content/images/2021/05/Ecommercereact.jpg"} title={"E commerce"} decs={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "}/>

        <Card imgUrl={"https://user-images.githubusercontent.com/40702669/145445286-584e0c26-6c8a-4c87-9ec7-8fa67f542465.png"} title={"Weather App"} decs={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "}/>
      </div>

      <div className="my-10 text-center">
        <p className={`${mode ? "text-white" : 'text-black'}`}>All the images use in this section are get from google. It is just for practicing my skills.</p>
      </div>
    </div>
  )
}

export default Projects