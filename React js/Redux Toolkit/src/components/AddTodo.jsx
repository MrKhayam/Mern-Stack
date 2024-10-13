import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");


  const handleClick = () => {
    
  }
  return (
    <>
      <div className="w-1/2 h-10 mx-auto flex gap-3 mt-20">
        <input
          placeholder="Enter Your Todos Here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-[80%] h-full bg-white rounded-md p-3 outline-none border-none"
          type="text"
        />
        <button
          onClick={handleClick}
          className="w-[20%] h-full rounded-md bg-white text-black transition-all duration-200 active:scale-[0.8]"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
