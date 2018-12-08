import React,{Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Menu.css';
import {
    withRouter
  } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.logout = this.logout.bind(this);
    }

    goToHome() {
        this.props.history.push('/home');
    }

    logout() {
       sessionStorage.clear();
       this.props.history.push('/home');
    }

    render() {
        return(
            <div className="topmenuinnercontainer">
                <div className="logo">
                    <img src={logo} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
                </div>
                <div className="topnav">
                    <a href="#" onClick={this.goToHome}>Home</a>
                    <a href="/contact">Payment</a>
                    <a href="/contact">Contact Us</a>
                    <a href="#" onClick={this.logout}>Logout</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Menu);