import React from 'react'
import useUser from '../hooks/useUser'

const Home = () => {
  const { username } = useUser();
  return (
    <>
      <h1 className='text-white font-bold text-4xl'>Hello {username}</h1>
    </>
  )
}

export default Home
