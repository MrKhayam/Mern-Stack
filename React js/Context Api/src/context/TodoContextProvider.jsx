import { useState } from "react";
import todoContext from "./todoContext"

const TodoContextProvider = ({ children }) => {
    const [todo, setTodo] = useState([
      "Hello World", "I am Khayam"
    ]);


    const addTodo = (newTodo) => {
      setTodo((prevTodos) => [...prevTodos, newTodo]);
    };
    return (
        <todoContext.Provider value={{todo, setTodo, addTodo}}>
            {children}
        </todoContext.Provider>
    );
};


export default TodoContextProvider;