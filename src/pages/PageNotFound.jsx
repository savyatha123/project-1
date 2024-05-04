import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className="catFact">
      <p>PageNotFound</p>
      <Link to = "/" className='button'>Home</Link>
    </div>
  )
}




