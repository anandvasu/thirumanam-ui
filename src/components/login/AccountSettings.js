import React, {Component} from 'react';
import './Identity.css';

class AccountSettings extends Component {

    constructor(props) {
        super(props);
    }
   
    render() {
        return(
        <div>
            <div className="hs100" />
            <div className="filterParent">
                <div className="header2">
                    <div><label>Account Settings</label></div>                    
                </div>
                <div style={{paddingBottom:'15px',paddingTop:'15px'}}> 
                    <a href="#" onClick={() => this.props.loadAcountContent(1)}>Change Password</a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(2)}>Update E-Mail</a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(3)}>Manage Notifications</a>                    
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(4)}>Inactivate Profile</a>                        
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(5)}>Delete Profile</a>  
                </div>
            </div>
        </div>
        );
    }
}
 
export default AccountSettings;