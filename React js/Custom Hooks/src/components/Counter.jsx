import React from 'react'
import useCount from '../custom hooks/useCount'

const Counter = () => {
    const { count, increment, decrement } = useCount();
  return (
    <>
          <div className="w-[20%] h-[40%] bg-white flex flex-col items-center justify-center rounded-lg p-3">
              <h1 className="text-zinc-900 text-2xl font-bold">Counter</h1>
              <h1 className="text-zinc-900 text-2xl font-bold">{count}</h1>
              <div className="flex gap-3">
                <button className="bg-zinc-900 text-white px-5 py-3 rounded-md" onClick={increment}>Increment</button>
                <button className="bg-zinc-900 text-white px-5 py-3 rounded-md" onClick={decrement}>Decrement</button>
              </div>
      </div>
    </>
  )
}

export default Counter
