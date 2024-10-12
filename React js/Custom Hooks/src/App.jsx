import React from 'react'
import AddTodo from './components/AddTodo'
import { useTodo } from './hooks/useTodo'
import Todo from './components/Todo';

const App = () => {
  const { todos } = useTodo();
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 border-t border-zinc-900">
        <AddTodo />
        <div className="flex flex-col gap-3 mt-20">
          {todos.map((singleTodo) => {
            <Todo text={singleTodo} />
          })}
        </div>
      </div> 
    </>
  )
}

export default App
