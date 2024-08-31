import React from 'react'

const TooltipBtn = ({toolTip, btnName, workGiven, text}) => {
  return (
    <span className="group relative" id="buttons">
      <button className={`rounded bg-amber-500 px-4 py-2 text-sm text-white shadow-sm ${text.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={workGiven} disabled={text.length === 0}>{btnName}</button>
      <div className="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-10">{toolTip}</div>
    </span>
  )
}

export default TooltipBtn