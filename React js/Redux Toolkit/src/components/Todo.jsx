import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaEdit, FaSave } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { completeTodo, removeTodo, updateTodo } from "../features/todoSlice";

const Todo = ({ todoText, todoId, completed }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoText);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeTodo(todoId));
  };

  const handleCheck = () => {
    dispatch(completeTodo(todoId));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updateTodo({ id: todoId, text: editedText }));
    setIsEditing(false);
  };

  return (
    <>
      <div
        className={`md:w-1/2 w-[95%] bg-white rounded-md p-3 mx-auto h-10 flex transition-all duration-200 justify-between items-center ${
          completed ? "bg-green-300" : null
        }`}
      >
        <div className="flex items-center md:gap-5 gap-3 w-full">
          <input
            checked={completed}
            onChange={handleCheck}
            className="cursor-pointer"
            type="checkbox"
          />
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className={`border-b w-full border-gray-300 focus:outline-none focus:border-blue-500 ${completed ? 'bg-green-300' : 'bg-white'}`}
            />
          ) : (
            <p className={`${completed ? "line-through" : null}`}>{todoText}</p>
          )}
        </div>
        <div className="flex gap-3 items-center">
          {isEditing ? (
            <FaSave onClick={handleSave} cursor="pointer" size={17} />
          ) : (
            <FaEdit onClick={handleEdit} cursor="pointer" size={17} />
          )}
          <IoClose onClick={handleClick} cursor="pointer" size={23} />
        </div>
      </div>
    </>
  );
};

export default Todo;
