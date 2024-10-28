import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
      <div className='main-container center'>
        <h1>Welcome to the best phonebook ever!</h1>
        <div className='container-center btn-container'>
          <Link to='/login' className='link'><button className='btn'>Login</button></Link>
          <Link to='/register' className='link'><button className='btn'>Register</button></Link>
        </div>
      </div>
    </>
  )
}
