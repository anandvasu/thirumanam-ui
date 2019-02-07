import React,{Component} from 'react';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import {
    withRouter
  } from 'react-router-dom';

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.goToPayment = this.goToPayment.bind(this);
        this.contactClick = this.contactClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
    }

    goToHome() {
        if (sessionStorage.getItem("userSession") !== null) {  
            this.props.history.push(
                {
                    pathname:'/loggedInHome' ,
                    state:{
                        profileId:"CM999685",
                        email:"anandakumarv@gmail.com",
                        religion:1,
                    }                                   
                }
            );    
        } else {
            this.props.history.push('/home');
        }
    }

    logoutClick(event) {
        sessionStorage.clear();
        this.props.history.push('/home');
    }
  
    loginClick(event) {
        event.preventDefault();
        this.props.history.push('/ilogin');
    }

    goToPayment() {
        this.props.history.push('/payment');
    }

    contactClick(event) {
        event.preventDefault();
        this.props.history.push('/contact');
    }

    render() {
        return(
            <div className="topBarContainer">
                <div className="logo">
                    <div style={{display:'inline-block'}}>
                        <img src={logo} alt="Not Available" onClick={this.goToHome} /> 
                    </div>                    
                    <div className="matrimonyName" style={{color:'#4A235A'}}>
                        <label><h2>Chandramathi Matrimony</h2></label> 
                    </div> 
                </div>

                <div className="menuContainer">
                    <div className="hs20" />
                    <div className="globalMenu">
                        <a href="#" onClick={this.goToHome}><b>Home</b></a>
                        <a href="/"><b>Register</b></a>
                        <a href="#" onClick={this.goToPayment}><b>Payment</b></a>
                        <a href="#" onClick={this.contactClick}> <b>Contact Us</b></a>
                        { (sessionStorage.getItem("userSession") === null) && <button onClick={this.loginClick}>Login</button> }
                        { (sessionStorage.getItem("userSession") !== null) && <button onClick={this.logoutClick}>Logout</button> }
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TopBar);