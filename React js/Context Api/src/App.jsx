import React from 'react'
import TodoContextProvider from './context/TodoContextProvider'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


const App = () => {
  return (
    <TodoContextProvider>
      <div className="w-full min-h-screen bg-zinc-900 border-t border-zinc-900">
        <AddTodo />
        <Todos />
      </div> 
    </TodoContextProvider>
  )
}

export default App
