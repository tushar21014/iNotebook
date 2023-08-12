import React, { useEffect } from 'react'
import {
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/Login')
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">iNotebook</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className={`nav-item ${location.pathname === "/Home" ? "active" : ""}`}>
                            <Link className="nav-link" to="./Home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className={`nav-item ${location.pathname === "/About" ? "active" : ""}`}>
                            <a className="nav-link" href="./About">About</a>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')? <form className="form-inline my-2 my-lg-0 ">
                        <Link className="btn btn-primary mx-2" to="/Login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to='/Signup' role="button">Sign Up</Link>
                    </form>:<> <Link className="btn btn-primary mx-2" to='/UserDetails' role="button">User Details</Link> 
                    <button onClick={handleLogout} className='btn btn-primary'>Log Out</button> </>}
                </div>
            </nav>
        </div>
    )
}

export default Nav