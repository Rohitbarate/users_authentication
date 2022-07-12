import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='container'>
            <div className="form">
                <form>
                    <div className="mb-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                 
                    <button type="submit" className="btn btn-success">login</button>
                </form>

                <p>If you don't have an account ,<Link className="mx-1" to="/signup" role="button">sign up</Link></p>
            </div>
        </div>
    )
}

export default Login;