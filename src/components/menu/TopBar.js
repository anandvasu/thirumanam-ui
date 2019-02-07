import React,{Component} from 'react';
import logo from '../../assets/images/logo.png';
import thirukkuralImage from '../../assets/images/topbarright.jpg';
import './TopBar.css';

class TopBar extends Component {

    render() {
        return(
            <div className="topBarContainer"> 
                    <div className="globalLogoOuter">
                        <div className="globalLogoLeft">
                            <img src={logo} alt="Not Available"/> 
                        </div>
                        <div className="globalLogoRight">
                            <div className="globalMenu">
                                <a href="#" onClick={this.goToHome} className="menuItem">Home</a>
                                <a href="#" onClick={this.goToHome} className="menuItem">Search</a>
                                <a href="#" onClick={this.goToPayment} className="menuItem">Payment</a>
                                <a href="#" onClick={this.contactClick} className="menuItem">Contact Us</a>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default TopBar;