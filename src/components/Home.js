import React from 'react'
import noteImg from '../images/Home.svg'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import "../styles/home.css"
import Notes from './Notes';
import Navbar from "./Navbar";
import Alertss from "./Alertss";

function Home() {

    return (
        <>
            <Navbar />
            <Alertss />
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-md-5">
                        <h1 
                        data-aos="flip-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>Note</span>Sync</h1>
                        <p 
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
                        {/* <p className="ps-5 mt-3 respo" style={{ fontSize: "1rem" }}>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee. For more info you can checkout our <Link to="/about">About Page</Link>  </p> */}
                        <div className="d-flex justify-content-start" style={{marginLeft: "45px", marginTop: "50px"}}>
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex flex-column align-items-center">
                        <img
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="100"
                        className="img-fluid" style={{width: "60%"}} src={noteImg} alt="NoteSync" />
                    </div>
                </div>

                <Notes />
            </div>
        </>
    )
}

export default Home
