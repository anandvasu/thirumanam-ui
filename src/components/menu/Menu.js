import React,{Component} from 'react';
import logo from '../../assets/images/logo.gif';
import './Menu.css';
import {Redirect} from "react-router-dom";
import {
    withRouter
  } from 'react-router-dom';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            logout : false
        }
    }

    goToHome() {
        //this.props.history.push('/loggedInHome');
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
        
    }

    goToContact() {
        this.props.history.push('/contact');
    }

    goToPayment() {
        this.props.history.push('/payment');
    }

    logout() {
       sessionStorage.clear();
       this.setState({
            logout:true
       });
    }

    render() {

        if (this.state.logout === true) {
            return <Redirect to= {{
                        pathname:'/home' ,
                        state:{
                            logout:this.state.logout
                        }                                   
                    }}/>
        }
        return(
            <div>
                <div className="logo">
                    <img src={logo} alt="Not Available" style={{width:'80px'}} onClick={this.goToHome} /> 
                </div>
                <div className="menuContainer">
                    <div className="hs20" />
                    <div className="menufield">
                        <a href="#" onClick={this.goToHome}>Home</a>
                        <a href="#" onClick={this.goToHome}>Payment</a>
                        <a href="#" onClick={this.goToHome}>Contact Us</a>
                        <a href="#" onClick={this.logout}>Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Menu);