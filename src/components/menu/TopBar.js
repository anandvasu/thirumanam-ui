import React,{Component} from 'react';
import logo from '../../assets/images/logo.gif';
import thirukkuralImage from '../../assets/images/topbarright.jpg';
import './TopBar.css';

class TopBar extends Component {

    render() {
        return(
            <div className="topBar"> 
                    <div className="globalLogoOuter">
                        <div className="globalLogoLeft">
                            <img src={logo} alt="Not Available" style={{width:'80px'}}/> 
                        </div>
                        <div className="globalLogoRight">
                            <img src={thirukkuralImage} alt="Not Available" style={{width:'80px'}}/> 
                        </div>
                    </div>
            </div>
        );
    }
}

export default TopBar;