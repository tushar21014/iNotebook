import React from 'react'
import Navbar from "./Navbar";
import '../styles/about.css';
import awesome from '../images/about - awesome.jpeg'
import awesome2 from '../images/image3.jpeg'
import login from '../images/about - awesome.svg'
import { Button } from '@mui/material';
import Alertss from "./Alertss";
import { Link } from "react-router-dom";
import Footer from './Footer';

function About() {
    return (
        <div>
            <Navbar />
            <Alertss />
            <div className="text-white aboutImg text-center">
                <div className="note-img">
                    <h1 className="display-4">Elevate Your <span style={{ color: "#9C27B0" }}> Note</span>Sync</h1>
                    <p>An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee</p>
                </div>
            </div>

            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Write something <span style={{ color: "#9C27B0" }}>Awesome</span> </h2>
                        <p>
                            Have you ever felt the frustration of scribbling down endless notes in a physical notebook? The struggle is real, and we get it. That's why we birthed NoteSync - an ingenious online platform designed to liberate you from the shackles of traditional note-taking.
                            Imagine saying goodbye to the days of battling cramped handwriting, lost pages, and the unending quest to find that one vital piece of information.
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome} alt="about-awesome" style={{height: "80%", display: "block", margin: "0 auto", borderRadius: "10px", boxShadow: "0px 0px 50px 0px #350757"}}/>
                    </div>
                </div>

                <div className="row login mt-5 mb-5 p-5">
                    <div className="col-md-6">
                        <img className="img-fluid" src={login} alt="about-awesome" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Embrace Creation, Embrace  <span style={{ color: "#9C27B0" }}> Note</span>Sync </h2>
                        <p>
                            In a world where creativity reigns supreme, don't let the mundane bind you. Every note you craft, every idea you foster, it all starts with a spark. Let NoteSync be the canvas where your sparks evolve into brilliance.
                            Join us, and remember: The act of creation is always significant. Just like every note you craft. Let NoteSync be your partner in this remarkable journey.
                        </p>
                        <div className="d-flex justify-content-center mt-3">
                            <Button component={Link} to="/register" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Sign up now</Button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2 className="mb-3" style={{ fontWeight: "Bold" }}>Join the Revolution: <span style={{ color: "#9C27B0" }}> Elevate Your Education </span> </h2>
                        <p>
                        It's not just about notes; it's about inspiration that breeds innovation. It's about shaping a future where learning knows no bounds. Join us on this transformative journey, where brilliance is not just an outcome; it's a way of life. <br/>
                        Unleash the power of your ideas. Dive into a world where learning is an experience, where innovation thrives, and where you hold the pen to your destiny. Empower yourself, for you are the author of your academic narrative. Welcome to a future where education is not just learned; it's lived.
                        </p>
                        {/* <div className="d-flex justify-content-center mt-3">
                            <Button component={Link} to="/new" variant="contained" color="secondary" style={{ color: "White", textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem" }}>Create New Note</Button>
                        </div> */}
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid awesome" src={awesome2} alt="about-awesome"  style={{height: "80%", display: "block", margin: "0 auto", borderRadius: "10px", boxShadow: "0px 0px 50px 0px #350757"}}/>
                    </div>
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default About
