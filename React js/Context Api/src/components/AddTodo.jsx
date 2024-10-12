import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const { todos, setTodos } = useContext(TodoContext);
  const addTodo = () => {
    if (newTodo) {
      setTodos((prev) => [...prev, { id: Date.now(), todoText: newTodo, completed: false }]);
      const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
      localStorage.setItem("todos", JSON.stringify([...storedTodos, { id: Date.now(), todoText: newTodo, completed: false }]));
      setNewTodo("");
      
    }
  }
  return (
    <>
      <div className="w-1/2 h-10 flex gap-3 mx-auto mt-32">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter Your Todo..."
          type="text"
          className="w-[80%] h-full bg-white rounded-md border-none outline-none p-3 text-md"
        />
        <button onClick={addTodo} className="bg-white rounded-md active:scale-[0.9] transition-all w-[20%] px-6 py-2 h-full">
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;
