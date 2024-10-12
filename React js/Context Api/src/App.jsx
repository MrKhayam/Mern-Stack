import React, { useContext } from 'react'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './context/TodoProvider'
import { TodoContext } from './context/TodoContext'

const App = () => {
  const { todos, setTodos } = useContext(TodoContext);
  return (
    <TodoProvider>
      <div className="w-full h-screen bg-zinc-900 flex flex-col gap-12 border-t border-zinc-900">
        <AddTodo />
        <div className="todos min-h-96 flex flex-col gap-5">
          <h1 className='text-center text-4xl font-bold text-white my-4'>Your Todos</h1>

        </div>
      </div> 
    </TodoProvider>
  )
}

export default App
