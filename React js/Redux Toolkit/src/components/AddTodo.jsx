import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();


  const handleClick = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    } else {
      alert("Todo can't be Empty...");
    }
  }
  return (
    <>
      <div className="md:w-1/2 w-full h-10 mx-auto flex md:flex-row flex-col items-center gap-3 mt-8 md:mt-20">
        <input
          placeholder="Enter Your Todos Here..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="md:w-[80%] w-[95%] h-full bg-white rounded-md p-3 outline-none border-none"
          type="text"
        />
        <button
          onClick={handleClick}
          className="md:w-[20%] w-[95%] md:h-full py-2 rounded-md bg-white text-black transition-all duration-200 active:scale-[0.8]"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
