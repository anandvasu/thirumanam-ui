import React,{Component} from 'react';
import './TopBar.css';

class GlobalMenu extends Component {

    render() {
        return(
            <div className="globalBar"> 
                <div className="globalMenu">
                        <a href="/account">Registration</a>
                        <a href="/contact">Search</a>
                        <a href="/contact">Payment</a>
                        <a href="/contact">Success Stories</a>
                        <a href="/contact">Contact Us</a>
                </div>
            </div>
        );
    }
}

export default GlobalMenu;