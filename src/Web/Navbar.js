import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
// Navbar
const Navbar = () => {
    // Hooks used to handle current navbar state
    const [showNavbar, setShowNavbar] = useState(true);
    
    // Sticky Navbar
    window.onscroll = () =>{
        stickyNavbar();
    };

    const stickyNavbar = () => {
        const navbarSection = document.getElementById('navbar');
        if(window.pageYOffset > navbarSection.offsetTop){
            navbarSection.classList.add("sticky");
        }
        else{
            navbarSection.classList.remove("sticky");
        }
    };

    // Function to show and hide navbar
    // and control Hide and Show Button
    const show = () =>{
        const removeMiddleLine = document.getElementById('middle');
        const hmbtn = document.getElementById('hmb-btn');
        const navList = document.getElementById('navbar-list');
        if(showNavbar){
            removeMiddleLine.style.display = "none";
            hmbtn.classList.add("cross");
            navList.classList.add( "show");
            setShowNavbar(false);
        }
        else{
            removeMiddleLine.style.display = "block";
            hmbtn.classList.remove("cross");
            navList.classList.remove("show");
            setShowNavbar(true);
        }
    };
    return (
        <>
        <section className="navbar-section"  id="navbar">
            <div className="container-fluid navbar-container-fluid">
                <div className="container navbar-container pt-3">
                    <div className="nav-div d-flex w-100">
                        <div className="nav-logo d-flex justify-content-between">
                            <h1>Portfolio</h1>
                            <button className="humberburger-btn" id="hmb-btn" onClick={show}>
                                <span></span>
                                <span id="middle"></span>
                                <span></span>
                            </button>
                        </div>
                        <div className="navbar-list  hide-navbar" id="navbar-list">
                                <div className="navs" id="navs">
                                    <ul className="d-flex">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/services">Services</NavLink></li>
                                        <li><NavLink to="/help">Help</NavLink></li>
                                        <li><NavLink to="/Contact">Contact</NavLink></li>
                                        <li><NavLink to="/" activeClassName="btn-style signup-btn">Signup</NavLink></li>
                                        <li><NavLink to="/" activeClassName="btn-style signin-btn">Signin</NavLink></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        // Navbar Section
    )
}

export default Navbar;