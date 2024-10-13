import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaEdit } from "react-icons/fa";


const Todo = ({todoText}) => {
  return (
    <>
      <div className="w-1/2 bg-white rounded-md p-3 mx-auto h-10 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <input className="cursor-pointer" type="checkbox" />
          <p>{todoText}</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaEdit cursor="pointer" size={17} />
          <IoClose cursor="pointer" size={23} />
        </div>
      </div>
    </>
  );
}

export default Todo
