import React, { useContext } from 'react'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { TodoContext } from './context/TodoContext'

const App = () => {
  const storedTodos = JSON.parse(localStorage.getItem("todos"));
  const { todos } = useContext(TodoContext);
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-12 border-t border-zinc-900">
        <AddTodo />
        <div className="todos min-h-96 flex flex-col gap-5">
          <h1 className='text-center text-4xl font-bold text-white my-4'>Your Todos</h1>
          {
            storedTodos ? storedTodos.map((todo) => {
              return (
                <TodoItem key={todo.id} todoText={todo.todoText} todoId={todo.id} completed={todo.completed} />
              )
            }) :
              null
          }
        </div>
      </div> 
    </>
  )
}

export default App
