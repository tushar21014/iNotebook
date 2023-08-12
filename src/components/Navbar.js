import React, {useContext} from 'react'
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { AlertContext } from '../context/AlertContext';
import { success } from 'concurrently/src/defaults';

function Navbar() {
    
    const { showAlert } = useContext(AlertContext)
    const navigate = useNavigate()

    const handleLogout = (message) => {
        localStorage.removeItem('token')
        navigate('/login')
        showAlert(message, "error")
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <NavLink activeclassname="active" className="navbar-brand" to="/"><span style={{ color: "#9C27B0" }}>Note</span>Sync</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Button className="nav-link" aria-current="page" component={NavLink} to="/" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                                Home
                            </Button>
                        </li>
                        <li className="nav-item">
                            <Button className="nav-link" aria-current="page" component={NavLink} to="/about" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                                About us
                            </Button>
                        </li>
                        {
                            !localStorage.getItem('token') ?
                                <div className="d-flex">
                                    <li className="nav-item">
                                        <Button className="nav-link" aria-current="page" component={NavLink} to="/login" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                                            Login
                                        </Button>
                                    </li>
                                    <li>
                                        <Button className="nav-item ms-2" component={NavLink} to="/register" variant="outlined" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                                            Join us
                                        </Button>
                                    </li>
                                </div> :
                                <li>
                                    <Button onClick={() => handleLogout(success)} className="nav-item ms-2" variant="outlined" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                                        logout
                                    </Button>
                                </li>

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


