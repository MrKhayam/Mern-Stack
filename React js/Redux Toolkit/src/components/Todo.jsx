import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaEdit } from "react-icons/fa";
import { useDispatch }  from 'react-redux';
import { completeTodo, removeTodo } from '../features/todoSlice';


const Todo = ({ todoText, todoId, completed }) => {
  
  const dispatch = useDispatch();


  const handleClick = () => {
    dispatch(removeTodo(todoId))
  }

  const handleCheck = () => {
    dispatch(completeTodo(todoId))
  }

  return (
    <>
      <div className={`w-1/2 bg-white rounded-md p-3 mx-auto h-10 flex transition-all duration-200 justify-between items-center ${completed ? "bg-green-300" : null}`}>
        <div className="flex items-center gap-5">
          <input checked={completed} onChange={handleCheck} className="cursor-pointer" type="checkbox" />
          <p className={`${completed ? "line-through" : null}`}>{todoText}</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaEdit cursor="pointer" size={17} />
          <IoClose onClick={handleClick} cursor="pointer" size={23} />
        </div>
      </div>
    </>
  );
}

export default Todo
