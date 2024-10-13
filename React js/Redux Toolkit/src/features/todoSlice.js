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
      localStorage.setItem(
        "todos",
        JSON.stringify([...localTodos, ...state.todos])
      );
      window.location.reload();
    },
    removeTodo: (state, action) => {
      const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      localStorage.setItem(
        "todos",
        JSON.stringify(localTodos.filter((todo) => todo.id !== action.payload))
      );
      window.location.reload();
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((singleTodo) =>
        singleTodo.id === action.payload
          ? { ...singleTodo, completed: !singleTodo.completed }
          : singleTodo
      );
      const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const completedTodos = localTodos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
      localStorage.setItem("todos", JSON.stringify(completedTodos))
      window.location.reload();
    },
    updateTodo: (state, action) => {
      // state.todos = state.todos.map((singleTodo) => {
      //   if (singleTodo.id === action.payload.id) {
      //     singleTodo.text = action.payload.text;
      //     singleTodo.update = false;
      //   }
      //   return singleTodo;
      // });

      const localTodos = JSON.parse(localStorage.getItem("todos")) || [];
      const updatedTodos = localTodos.map((singleTodo) => {
        if (singleTodo.id === action.payload.id) {
          singleTodo.text = action.payload.text;
        }
        return singleTodo;
      })
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      window.location.reload();


    },
  },
});
export const { addTodo, removeTodo, completeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
