import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
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
      const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      localStorage.setItem("todos", JSON.stringify([...localTodos, ...state.todos]));
      window.location.reload();
    },
    removeTodo: (state, action) => {
      const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      localStorage.setItem("todos", JSON.stringify(localTodos.filter((todo) => todo.id !== action.payload)));
      window.location.reload();
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((singleTodo) =>
        singleTodo.id === action.payload
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((singleTodo) => {
        if (singleTodo.id === action.payload.id) {
          singleTodo.text = action.payload.text;
          singleTodo.update = false;
        }
        return singleTodo;
      });
    },
  },
});
export const { addTodo, removeTodo, completeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
