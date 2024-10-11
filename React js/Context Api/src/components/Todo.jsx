import React from 'react'
import { IoClose } from 'react-icons/io5';


const Todo = ({todoText}) => {
    
  return (
    <>
          <div className="w-full h-14 rounded-lg bg-white flex items-center justify-between p-3">
            <h1>{todoText}</h1>
            <IoClose size={25} cursor="pointer" />
          </div> 
    </>
  )
}

export default Todo
