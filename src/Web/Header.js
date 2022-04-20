import React from 'react'

// Header
const Header = () => {
    return (
        <>
        <section className="header" id="home">
            <div className="container-fluid header-section">
                <div className="container header-container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 header-items">
                            <div className="header-content">
                                <h2>make your</h2>
                                <h1> portfolio</h1>
                                <h3>modern web templates</h3>
                                <div className="header-btns">
                                    <a href="index.html" >Try Free!</a>
                                    <a href="index.html" >Premium!</a>
                                </div>
                            </div>
                        </div> 
                        <div className="col-sm-12 col-md-12 col-lg-6 header-items">
                        <div className="header-content">
                            <img src={process.env.PUBLIC_URL+'/images/banner.svg'}  alt="banner"/>
                        </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        </>
        // Header Section
    )
}

export default Header;
