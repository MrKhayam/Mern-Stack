import { useState } from "react"

export const useTodo = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => {
        setTodos((prev) => [...prev, newTodo]);
    }

    return {todos, setTodos, addTodo}
}