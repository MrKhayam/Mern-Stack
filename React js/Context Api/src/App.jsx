import React from 'react'
import CountContextProvider from './context/countContextProvider'
import Counter from './components/Counter'

const App = () => {
  return (
    <>
      <CountContextProvider>
        <div className="w-full min-h-screen flex items-center justify-center bg-zinc-900">
          <Counter />
        </div>
      </CountContextProvider> 
    </>
  )
}

export default App
