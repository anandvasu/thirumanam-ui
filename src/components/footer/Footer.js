import React,{Component} from 'react';
import './Footer.css';
import linkedin from '../../assets/images/linkedin.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.socialMediaClick = this.socialMediaClick.bind(this); 
    }

    socialMediaClick(newURLPage) {
        window.open("http://"+newURLPage, "_blank");
     }

    render () {

        const backgroundColor = this.props.backgroundColor;

        return(
           <div className="fcontainer" style={{backgroundColor:backgroundColor}}>
               <div className="copyRight">
                    <label>Copyright © 2019. All rights reserved</label>
                </div>
               <div className="socialMedia">
                    <img src={facebook} onClick={() => this.socialMediaClick("www.facebook.com")}/>
                    <img src={twitter} onClick={() => this.socialMediaClick("www.twitter.com")} />
                    <img src={linkedin} onClick={() => this.socialMediaClick("www.linkedin.com")} />
               </div>
           </div>     
        );
    }
}

export default Footer;