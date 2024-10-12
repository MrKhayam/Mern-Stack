import React from "react";
import { IoClose } from "react-icons/io5";

const TodoItem = ({ todoText, todoId, completed }) => {
  const deleteTodo = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const filteredTodos = storedTodos.filter((todo) => todo.id !== todoId);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    window.location.reload();
  }
  const completeTodo = () => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    const updatedTodos = storedTodos.map((todo) => todo.id === todoId ? { ...todo, completed: !completed } : todo);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    window.location.reload();
  }
  return (
    <>
      <div className={`w-1/2 h-10 bg-white rounded-md mx-auto flex justify-between items-center p-3 ${completed ? "line-through bg-green-400" : ""}`}>
        <div className="left flex gap-3">
          <input checked={completed} onChange={() => completeTodo(todoId)} className="cursor-pointer" type="checkbox" name="" id="" />
          <p>{todoText}</p>
        </div>
        <div className="right">
          <IoClose onClick={() => deleteTodo(todoId)} cursor="pointer" size={20} />
        </div>
      </div>
    </>
  );
};

export default TodoItem;
