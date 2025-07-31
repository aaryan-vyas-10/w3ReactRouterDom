import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-cyan-600 flex items-center justify-around p-5'>
      <h1 className='text-5xl font-bold'>Navbar</h1>
        <ul className='flex gap-6'>
            <li className='text-2xl font-bold'><Link to="/">Home</Link></li>
            <li className='text-2xl font-bold'><Link to="/product">Product</Link></li>
            <li className='text-2xl font-bold'><Link to="/about">About</Link></li>
            <li className='text-2xl font-bold'><Link to="/contact">Contact</Link></li>
        </ul>
        <button className='bg-black text-white font-bold px-7 py-2 rounded text-2xl cursor-pointer'>Login</button>
    </div>
  )
}

export default Navbar
