import React from 'react';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { useSelector } from 'react-redux'

const App = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 border border-zinc-900">
        <AddTodo />
        <div className="w-full min-h-96 flex flex-col gap-3 mt-20">
        <h1 className='text-center text-white text-4xl font-bold mb-5'>Your Todos Goes Here</h1>
          {
            todos.map((singleTodo) => {
              return <Todo key={singleTodo.id} todoId={singleTodo.id} completed={singleTodo.completed} todoText={singleTodo.text} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App
