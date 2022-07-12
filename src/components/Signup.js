import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <div className='container'>
      <div className="form">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">First name</label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Last name</label>
            <input type="text" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputAddress" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Confirm password</label>
            <input type="text" className="form-control" id="inputAddress" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">Sign up</button>
          </div>
        </form>
        <p>If you have an account ,<Link className="mx-1" to="/login" role="button">login</Link></p>
      </div>
    </div>
  )
}

export default Signup