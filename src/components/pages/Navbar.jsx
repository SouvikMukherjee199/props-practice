import React from 'react'

const Navbar = ({data}) => {
  return (
    <div>
      <h1 className='text-green-400 bg-amber-200 p-8 w-screen '>{data}</h1>
    </div>
  )
}

export default Navbar
