import React from 'react'
import notTick from "../assets/notTick.svg"
import tick from "../assets/tick.svg"
import trash from "../assets/trash-solid.svg"

const ItemList = ({task, id, isComplete, deleteTodo, checkTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer' onClick={()=> {checkTodo(id)}}>
            <img src={isComplete ? tick : notTick} className='w-7'/>
            <p className={`text-stone-600 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{task}</p>
        </div>

        <img src={trash} className='w-4 cursor-pointer' onClick={()=> {deleteTodo(id)}}/>
    </div>
  )
}

export default ItemList