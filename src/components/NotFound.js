import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div className='div'>
        <h1>Sorry...</h1>
        <h2 className="not-found">
           This page can Not be found
        </h2>
        <Link to="/"><button className='button'>Back</button></Link>
    </div>
  )
}

export default NotFound