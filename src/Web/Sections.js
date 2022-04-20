import React from 'react'
import HelpItems from './HelpItems';
// Sections
const Sections = (props) => {
    let myclass;
    let image;
    let heading;
    if(props.name === "about" || props.name === "services" || props.name === "help"){
        myclass = props.name;
        image = props.image;
        heading = props.name;
    }
    return (
        <>
        <section className={myclass} id={myclass}>
            <div className={`container-fluid ${myclass}-section`}>
                <div className="row">
                    <div className={`col-sm-12 col-md-12 col-lg-7 ${myclass}-items`}>
                        <div className={`${myclass}-content`}>
                            <img src={image}  alt="sections"/>
                        </div>
                    </div> 
                    <div className={`col-sm-12 col-md-12 col-lg-5 ${myclass}-items`}>
                        <div className={`${myclass}-content`}>
                            <h1>{heading === "about" ? "about us" : heading }</h1>
                            {heading === "help" ? <h1>and</h1> : "" }
                            {heading === "help" ? <h1>support</h1> : "" }
                            {heading !== "help" ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p> : "" }
                            {heading !== "help" ? <a href="index.html">Read More</a> : ""}   
                        </div>
                    </div>    
                </div>
                {heading === "help" ? <HelpItems /> : ""}
            </div>
        </section>
        </>
    )
    // Sections 
}

export default Sections;
