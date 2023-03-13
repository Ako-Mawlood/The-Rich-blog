import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>


        <h1 className=''>The Rich Blog</h1>

        <div className='links'>
         <Link to="/">Home</Link>
         <Link to="/create">Create</Link>
        </div>
    
    </div>
  )

}

export default Navbar