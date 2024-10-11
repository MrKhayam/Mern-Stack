import React from 'react'
import { IoClose } from 'react-icons/io5';
import { useContext } from 'react';
import todoContext from '../context/todoContext';


const Todo = ({todoText}) => {
  const { removeTodo } = useContext(todoContext)
  return (
    <>
          <div className="w-full h-14 rounded-lg bg-white flex items-center justify-between p-3">
            <h1>{todoText}</h1>
            <IoClose onClick={() => removeTodo(todoText)} size={25} cursor="pointer" />
          </div> 
    </>
  )
}

export default Todo
