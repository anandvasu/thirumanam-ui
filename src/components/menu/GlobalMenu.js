import React,{Component} from 'react';
import './TopBar.css';
import {
    withRouter
  } from 'react-router-dom';

class GlobalMenu extends Component {

    constructor(props) {
        super(props);
        this.contactClick = this.contactClick.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    goToHome() {
        event.preventDefault();
        this.props.history.push('/home');
    }

    contactClick(event) {
        event.preventDefault();
        this.props.history.push('/contact');
    }

    render() {
        return(
            <div className="globalBar"> 
                <div className="globalMenu">
                        <a href="#" onClick={this.goToHome}>Registration</a>
                        <a href="/contact">Search</a>
                        <a href="/contact">Payment</a>
                        <a href="/contact">Success Stories</a>
                        <a href="#" onClick={this.contactClick}>Contact Us</a>
                </div>
            </div>
        );
    }
}

export default withRouter(GlobalMenu);