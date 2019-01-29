import React,{Component} from 'react';
import './TopBar.css';
import {
    withRouter
  } from 'react-router-dom';

class GlobalMenu extends Component {

    constructor(props) {
        super(props);
        this.contactClick = this.contactClick.bind(this);
        this.goToPayment = this.goToPayment.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        this.props.history.push('/LoggedInHome');
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
            <div className="globalBar"> 
                <div className="globalMenu">
                        <a href="#" onClick={this.goToHome}>Home</a>
                        <a href="#" onClick={this.goToHome}>Search</a>
                        <a href="#" onClick={this.goToPayment}>Payment</a>
                        <a href="#" onClick={this.contactClick}>Contact Us</a>
                </div>
            </div>
        );
    }
}

export default withRouter(GlobalMenu);