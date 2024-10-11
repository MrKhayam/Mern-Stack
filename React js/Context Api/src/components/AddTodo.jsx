import React, { useState } from "react";
import { useContext } from "react";
import todoContext from "../context/todoContext";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useContext(todoContext);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <>
      <div className="w-1/2 mx-auto h-12 flex gap-3 items-center mt-20">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-[80%] h-full outline-none border-none p-3 rounded-lg"
          type="text"
        />
        <button
          onClick={handleAddTodo}
          className="bg-white rounded-lg px-5 py-3 active:scale-[0.8] transition-all duration-100 w-[20%]"
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
