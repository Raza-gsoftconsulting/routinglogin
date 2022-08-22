import React from 'react'
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
    <img className='image1' src='http://nccpindia.org/assets/image/error-404.png' alt=''></img>
    <h3 className='error-text'>You've to Login First to access this Page</h3>
    <Link to='/' className= 'btn1'>Home</Link>
    <Link to='/LoginPage' className= 'btn1'>Login</Link>
    </div>
  )
}

export default Error;
