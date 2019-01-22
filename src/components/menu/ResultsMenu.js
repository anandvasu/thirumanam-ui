import React,{Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Menu.css';
import {
    withRouter
  } from 'react-router-dom';

class ResultsMenu extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.contactClick = this.contactClick.bind(this);
    }

    goToHome() {
        this.props.history.push('/home');
    }
  
    loginClick(event) {
        event.preventDefault();
        this.props.history.push('/ilogin');
    }

    contactClick(event) {
        event.preventDefault();
        this.props.history.push('/contact');
    }

    render() {
        return(
            <div>
                <div className="logo">
                    <img src={logo} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
                </div>
                <div className="menuContainer">
                    <div className="hs20" />
                    <div className="menufield">
                        <a href="#" onClick={this.goToHome}><b>Home</b></a>
                        <a href="/"><b>Register</b></a>
                        <a href="/payment"><b>Payment</b></a>
                        <a href="#" onClick={this.contactClick}><b>Contact Us</b></a>
                        <button onClick={this.loginClick}>Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ResultsMenu);