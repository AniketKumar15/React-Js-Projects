import React, { useEffect, useRef, useState } from "react"
import todo_icon from "../assets/iconTodo.png"
import './todo.css'
import ItemList from "./ItemList"

function Todo() {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const addTask = () => {
    const inputText = inputRef.current.value.trim();
    
    if(inputText === ''){
      return null;
    }

    const newTodo = {
      id: Date.now(),
      task: inputText,
      isComplete: false,
    }
    setTodoList((prev)=>[...prev, newTodo]);
    inputRef.current.value = '';
    console.log(inputText);
  }

  const removeTodo = (id) => {
    setTodoList((prevToDo) => {
      return prevToDo.filter((todo)=> todo.id !== id);
    })
  }

  const checkTodo = (id) => {
    setTodoList((prevToDo) => {
      return prevToDo.map((todo)=> {
        if(todo.id === id){
          return {...todo, isComplete: !todo.isComplete};
        }
        return todo;
      });
    })
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

        {/*---------------- Title--------------- */}
        <div className='flex items-center mt-7 gap-2'>
            
          <img src={todo_icon} className='w-8'/>
          <h1 className='text-3xl font-semibold'>To-Do List</h1>

        </div>

         {/*----------------Input Box--------------- */}
         <div className='flex items-center my-7 bg-gray-200 rounded-full shadow-inner'>

          <input type="text" placeholder="Add Task" className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder: text-orange-500' ref={inputRef}/>

          <button className='bg-orange-400 border-none rounded-full w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-500 transition-colors' 
          onClick={addTask}>ADD</button>

         </div>

         {/*----------------To Do list--------------- */}
         <div>
          {todoList.map((item, index)=> {
            return <ItemList key={index} task={item.task} id={item.id} isComplete={item.isComplete} deleteTodo={removeTodo} checkTodo = {checkTodo}/>
          })}
         </div>
    </div>
  )
}

export default Todo