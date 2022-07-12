import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const Home = () => {

    return (
        <>
        <Navbar/>        
        <div className='container'>
            <div className="info">
                <h3>Please <Link className="btn btn-success mx-1" to="/login" role="button">Login</Link> / 
                      <Link className="btn btn-success mx-1" to="/signup" role="button"> Sign up</Link> to use features of this website. 🥰🥰</h3>
                <div className="buttons">

                </div>
            </div>
        </div>
        </>
    )
}

export default Home;