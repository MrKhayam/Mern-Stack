import { useState } from "react"

export const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos((prev) => [...prev, newTodo]);
          console.log(todos);
    }

    return {todos, setTodos, addTodo}
}