import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Complete React Js in Next 15 Days...",
      completed: false,
      update: false,
    },
    {
      id: 2,
      text: "Then Complete Node and Express in 30 Days...",
      completed: false,
      update: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
        update: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((singleTodo) =>
        singleTodo.id === action.payload
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      );
    },
  },
});

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;
