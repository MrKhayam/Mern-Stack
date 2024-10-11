import React from 'react'
import Todo from './Todo'
import { useContext } from 'react'
import todoContext from '../context/todoContext'

const Todos = () => {
    const { todo } = useContext(todoContext);

  return (
    <>
          <div className="w-1/2 min-h-[500px] mx-auto mt-20 flex flex-col gap-3">
              <h1 className='text-white text-center text-3xl font-bold my-3'>Your Todos</h1>
              {
                  todo.map((singleTodo, index) => {
                       return <Todo key={index} todoText={singleTodo} />
                  })
              }
          </div>
    </>
  )
}

export default Todos
