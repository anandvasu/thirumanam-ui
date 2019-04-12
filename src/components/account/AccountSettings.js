import React, {Component} from 'react';
import './Identity.css';
import Constant from '../utils/Constant';

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
                    <a href="#" onClick={() => this.props.loadAcountContent(5)}>Change Password</a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(10)}>Update E-Mail</a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(15)}>Update Phone number</a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(20)}>Manage Notifications</a>                    
                </div>
                {(this.props.status === Constant.USER_STATUS_ACTIVE) && 
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(25)}>Inactivate Profile</a>                        
                </div>
                }
                {(this.props.status === Constant.USER_STATUS_INACTIVE) && 
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(26)}>Activate Profile</a>                        
                </div>
                }
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={() => this.props.loadAcountContent(30)}>Delete Profile</a>  
                </div>
            </div>
        </div>
        );
    }
}
 
export default AccountSettings;