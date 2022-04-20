import React, {Component} from 'react'


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            phone:"",
            message:"",
            success: "",
        };
    }


    inputEvent = (e) => {
        const name = e.target.name;
        const value  = e.target.value;
        this.setState({[name] : value});
    }    
    
    onSubmits = (e) => {
        e.preventDefault();
        this.setState({success: "Message send successfully!"});
        for(let  i = 0; i < e.target.length - 1; i++){
            const name = e.target[i].name; 
            this.setState({[name] : ""});
        }
        setTimeout(this.hideMessage, 2000);
    };

    hideMessage = () => {
        const mess = document.getElementById('success');
        mess.style.display = "none";
    };

    render(){
        return (
            <>
            <section className="contact" id="contact">
                <div className="container-fluid contact-section">
                    <div className="container contact-container">
                        <div className="row">
                            <div className="col-12 col-lg-5 contact-items contact-item-left">
                                <div className="contact-content">
                                    <h1>how you can find us?</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </p>
                                    <h1>HeadQuaters</h1>
                                    <address>
                                        <span><i className="fa fa-map-marker"></i>Pakistan, Punjab</span>
                                    </address>
                                    <h1>Contact</h1>
                                    <p>
                                        <span><i className="fa fa-phone"></i> +92 3075313442</span><br/>
                                        <span><i className="fa fa-envelope"></i> example@gmail.com</span>
                                    </p>
                                    <h1>Follow US</h1>
                                    <div className="socials">
                                        <span><i className="fab fa-facebook"></i></span>
                                        <span><i className="fab fa-twitter"></i></span>
                                        <span><i className="fab fa-instagram"></i></span>
                                        <span><i className="fab fa-youtube"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-7 contact-items">
                                <div className="contact-content">
                                    <h1>get in touch</h1>
                                    {this.state.success ? <h3 id="success">{this.state.success}</h3> : ""}
                                    <form method="post" className="contact-form" id="form" onSubmit={this.onSubmits}>
                                        <div className="row">
                                        <div className="col-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Name" className="form-control" onChange={this.inputEvent} value={this.state.name}  required/>
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="email" name="email" placeholder="Email" className="form-control" onChange={this.inputEvent} value={this.state.email}  required/>
                                            </div>
                                        </div> 
                                        <div className="w-100"></div>
                                        <div className="col-12 col-lg-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" placeholder="Phone # e:g 0300-xx" className="form-control" onChange={this.inputEvent} value={this.state.phone}  required/>
                                            </div>
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col-12 col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" placeholder="Message" rows="5"  required onChange={this.inputEvent} value={this.state.message}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <div className="form-group">
                                                <button type="submit" className="form-btn">Send</button>
                                            </div>
                                        </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
            </>
        );
    }
}

export default Contact;
