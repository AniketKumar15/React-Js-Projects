import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div className='absolute p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 right-0 m-5' role="alert">
      <span className="font-medium">Success</span> {props.alert}
    </div>
  )
}

export default Alert