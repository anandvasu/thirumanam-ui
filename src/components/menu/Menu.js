import React,{Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Menu.css';

class Menu extends Component {

    render() {
        return(
            <div className="topmenuinnercontainer">
                <div className="logo">
                    <img src={logo} alt="Not Available" style={{width:'80px'}} /> 
                </div>
                <div className="topnav">
                    <a href="/home">Home</a>
                    <a href="/contact">Contact Us</a>
                    <a href="#">Logout</a>
                </div>
            </div>
        );
    }
}

export default Menu;