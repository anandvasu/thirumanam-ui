import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Identity.css';
import {
    withRouter
  } from 'react-router-dom';
import { compose } from 'redux';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = themeButton => ({
    button: {
      margin: themeButton.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class AccountSettings extends Component {

    constructor() {
        super();
    }
   
    render() {
        const { classes } = this.props;
        return(
        <div>
            <div className="hs100" />
            <div className="filterParent">
                <div className="header2">
                    <div><label>Account Settings</label></div>                    
                </div>
                <div style={{paddingBottom:'15px',paddingTop:'15px'}}> 
                    <a href="#" onClick={this.changePassword}> Change Password </a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={this.changePassword}>Update E-Mail </a>
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={this.changePassword}>Manage Notifications </a>                    
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={this.changePassword}>Inactivate Profile </a>                        
                </div>
                <div style={{paddingBottom:'15px'}}>
                    <a href="#" onClick={this.changePassword}> Delete Profile</a>  
                </div>
            </div>
        </div>
        );
    }
}


AccountSettings.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  const accountSettingsComp = compose(
      withRouter,
      withStyles(styles)
  );
  
  export default accountSettingsComp(AccountSettings);