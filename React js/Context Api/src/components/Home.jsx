import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext/userContext'

const Home = () => {
  const {username} = useContext(userContext);
  return (
    <>
     <div className="w-full h-full bg-zinc-900">
        <h1 className="text-white text-2xl font-bold">Home</h1>
        <h1 className="text-white text-2xl font-bold">{username.toUpperCase()}</h1>
     </div>
    </>
  )
}

export default Home
