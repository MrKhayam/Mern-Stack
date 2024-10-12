import React, { useState } from 'react'
import { useTodo } from '../hooks/useTodo';

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState("");
    const { addTodo } = useTodo();



  return (
    <>
          <div className="w-1/2 h-12 mx-auto flex gap-3 mt-20">
              <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className='w-[80%] bg-white rounded-lg p-3 border-none outline-none' />
          <button onClick={() => addTodo(newTodo)} className='w-[20%] bg-white rounded-lg py-3'>Add Todo</button>
          </div> 
    </>
  )
}

export default AddTodo
