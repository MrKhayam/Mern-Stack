import React from 'react'

const AddTodo = () => {
  return (
    <>
          <div className="w-1/2 h-10 mx-auto flex gap-3 mt-20">
            <input className='w-[80%] h-full bg-white rounded-md p-3 outline-none border-none' type="text" />
            <button className='w-[20%] h-full rounded-md bg-white text-black transition-all duration-200 active:scale-[0.8]'>Add Todo</button>
          </div> 
    </>
  )
}

export default AddTodo
