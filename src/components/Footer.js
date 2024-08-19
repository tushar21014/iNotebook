import React from "react"
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="top"
                    data-aos="fade-right"
                    data-aos-duration="600"
                    data-aos-delay="100"
                
                >
                    <div className="logo-details"
                    >
                        <span className="logo_name"><span style={{ color: "#9C27B0" }}>Note</span>Sync</span>
                    </div>
                    <div className="media-icons"
                    data-aos-delay="300"
                    >
                        <a href="https://www.linkedin.com/in/rahul-sahani-472201237/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/PoetOfHerAlgos" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/shemademeapoetry/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        {/* <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a> */}
                        {/* <a href="#" target="_blank"  rel="noreferrer"><i className="fab fa-youtube"></i></a> */}
                    </div>
                </div>
                <div className="link-boxes" 
                data-aos="fade-right"
                data-aos-duration="600"
                data-aos-delay="300"
                >
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new">New Notes</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/">Get started</Link></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><Link to="/">Your Notes</Link></li>
                        <li><Link to="/new">New Note</Link></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Account</li>
                        <li><Link to="/login">Sign-in</Link></li>
                        <li><Link to="/register">Join Free</Link></li>
                    </ul>
                    {/* <ul className="box">
                        <li className="link_name">Top Categories</li>
                        <li><Link to="/c/61554bfe801949ad7b9be4ff">Tent Notes</Link></li>
                        <li><Link to="/c/61554c2753bcf306407cb1bd">RV and Van Notes</Link></li>
                        <li><Link to="/c/61554c43d2a6b15f764aff36">Canoe Notes</Link></li>
                        <li><Link to="c/61554c63dfd6a37d71449b5c">Survivalist Notes</Link></li>
                    </ul> */}
                    <ul className="box input-box" style={{ marginLeft: 'auto' }}
                                        // data-aos="zoom-in-left"
                                        // data-aos-duration="600"
                                        // data-aos-delay="300"
                    >
                        <li className="link_name">About <span style={{ color: "#9C27B0", fontWeight: "600" }}>Note</span>Sync</li>
                        <li style={{ color: "#F7FFFF" }}>
                            An online web platform where you can create, edit, upload, delete your notes/information privately and securely without any disturbancee
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2023 <Link to="/">NoteSync</Link>All rights reserved</span>
                    <span className="policy_terms">
                        <Link to="/">Privacy policy</Link>
                        <Link to="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer;
