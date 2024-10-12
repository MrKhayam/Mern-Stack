import React from "react";
import { IoClose } from "react-icons/io5";

const TodoItem = ({ todoText }) => {
  return (
    <>
      <div className="w-1/2 h-10 bg-white rounded-md mx-auto flex justify-between items-center p-3">
        <div className="left flex gap-3">
          <input className="cursor-pointer" type="checkbox" name="" id="" />
          <p>{todoText}</p>
        </div>
        <div className="right">
          <IoClose cursor="pointer" size={20} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
