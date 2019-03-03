import React,{Component} from 'react';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import {Redirect} from "react-router-dom";
import Constant from "../utils/Constant";
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
        if (sessionStorage.getItem(Constant.USER_PROFILE_ID) !== null) {  
            this.props.history.push(
                {
                    pathname:'/loggedInHome' ,
                    state:{
                        profileId:"CM537845",
                        email:"anandakumarv@gmail.com",
                        religion:1,
                        fromPage : 'R'
                    }                                   
                }
            );    
        } else {
            this.props.history.push('/home');
        }      
        
    }

    goToContact() {
        this.props.history.push('/contact');
    }

    goToPayment() {
        this.props.history.push('/payment');
    }

    logout() {
       sessionStorage.clear();
       this.props.history.push('/logout');
    }

    render() {
        
        return(
            <div>
                <div className="logo">
                    <img src={logo} alt="Not Available"  onClick={this.goToHome} /> 
                </div>
                <div className="menuContainer">
                    <div className="hs20" />
                    <div className="menufield">
                        <a href="#" onClick={this.goToHome}>Home</a>
                        <a href="#" onClick={this.goToHome}>Payment</a>
                        <a href="#" onClick={this.goToHome}>Account</a>
                        <a href="#" onClick={this.goToHome}>Contact Us</a>
                        <a href="#" onClick={this.logout}>Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Menu);