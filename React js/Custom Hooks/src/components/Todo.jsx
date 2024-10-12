import React from 'react'

const Todo = ({text}) => {
  return (
    <>
          <div className="w-1/2 h-10 mx-auto flex items-center justify-center bg-white rounded-lg">
              <h1>{text}</h1>
          </div> 
    </>
  )
}

export default Todo
