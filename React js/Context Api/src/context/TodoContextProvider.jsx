import { useState } from "react";
import todoContext from "./todoContext"

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([
      
    ]);


    const addTodo = (newTodo) => {
      setTodo((prevTodos) => [...prevTodos, newTodo]);
  };
  
  const removeTodo = (todoTextId) => {
    const removedTodos = todo.filter((singleTodo) => {
      return todoTextId !== singleTodo;
    });
    setTodo(removedTodos);
  }
    return (
        <todoContext.Provider value={{todo, setTodo, addTodo, removeTodo}}>
            {children}
        </todoContext.Provider>
    );
};


export default TodoContextProvider;