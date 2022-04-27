import React from 'react'
import {Link} from "react-router-dom"

function Register() {
  return (
    <form className='form justify-content-md-center'>
    <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 m-3 p-3 bg-info'>
    <div className='form-group m-2'>
    <label htmlFor="email">email</label>
    <input type="text" className='form-control' placeholder='Enter email'/>
    </div>
    <div className='form-group m-2'>
    <label htmlFor="username">email</label>
    <input type="text" className='form-control' placeholder='Enter username'/>
    </div>

    <div className='form-group m-2'>
    <label htmlFor="password">password</label>
    <input type="text" className='form-control' placeholder='Enter password'/>
    </div>
    <button type="submit" className='btn btn-primary m-2'>
    create account
    </button>
    <div>
        I already have an account
        <Link to="/register" className="nav-link">Login</Link>

    </div>
    </div>
    </form>
  )
}

export default Register