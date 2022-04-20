import React from 'react'

const Footer = () => {
    return (
        <>
        <section className="footer" id="footer">
            <div className="container-fluid footer-section">
                <div className="container footer-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 footer-items p-0">
                           <div className="footer-content">
                               <h1>information</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                           </div> 
                        </div>
                        <div className="col-12 col-lg-3 footer-items">
                           <div className="footer-content">
                               <h1>Quick Link</h1>
                               <div className="quick-link">
                                   <a href="#home">Home</a>
                                   <a href="#about">About</a>
                                   <a href="#service">Services</a>
                                   <a href="#help">Help</a>
                                   <a href="#contact">Contact</a>
                               </div>
                           </div> 
                        </div>
                        <div className="col-12 col-lg-3 footer-items">
                            <div className="footer-content">
                                <h1>Categories</h1>
                                <div className="categories">
                                   <a href="#home">Web Designing</a>
                                   <a href="#about">Web Development</a>
                                   <a href="#services">Software Development</a>
                                   <a href="#help">Andriod Development</a>
                                   <a href="#contact">UX Designer</a>
                               </div>
                            </div> 
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <p className="text-center m-4">&copy; Copyright 2021 - Dtecho Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default Footer; 
