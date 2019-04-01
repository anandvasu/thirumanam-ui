import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Constant from "../utils/Constant";
import IconButton from '@material-ui/core/IconButton';
import AccountBox from '@material-ui/icons/AccountBox';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import {
    withRouter
  } from 'react-router-dom';
import { compose } from 'redux';
import logo from '../../assets/images/logo.png';

const styles = themeButton => ({
    button: {
      margin: themeButton.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class TopBar extends React.Component {

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.goToHome = this.goToHome.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.goToPayment = this.goToPayment.bind(this);
    this.contactClick = this.contactClick.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
    this.handleClose = this.handleClose.bind(this); 
    this.changePassword = this.changePassword.bind(this);
    this.updateContactDetail = this.updateContactDetail.bind(this);

    this.state = {
      auth: true,
      anchorEl: null,
    };
  }

  goToHome() {
    if (sessionStorage.getItem(Constant.USER_PROFILE_ID) !== null) {  
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
    } else {
        this.props.history.push('/home');
    }
}

    logoutClick(event) {
        sessionStorage.clear();
        this.props.history.push('/logout');
    }

    changePassword() {
        this.props.history.push({
          pathname:'/accountHome' ,
          state:{
             value:1
          }                                   
      });        
    }

    updateContactDetail() {
        this.props.history.push('/updateAcountDetail');
    }

    loginClick(event) {
        event.preventDefault();
        this.props.history.push('/ilogin');
    }

    goToPayment() {
        this.props.history.push('/payment');
    }

    contactClick(event) {
        event.preventDefault();
        this.props.history.push('/contact');
    }
  

  handleChange (event){
    this.setState({ auth: event.target.checked });
  };

  handleMenu (event){
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose () {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>     
        <AppBar position="static" color="secondary">
           
          <Toolbar>         
          <div className="logo">                                      
                    <div className="matrimonyName" style={{color:'#4A235A'}}>
                        <label><h2>Chandramathi Matrimony</h2></label> 
                    </div> 
          </div> 
          <div className="menuContainer">
            <Button color="primary" className={classes.button} onClick={this.goToHome}>
                    <b>Home</b>
                </Button>      
                <Button color="primary" className={classes.button}>
                    <b>Register</b>
                </Button>
                <Button color="primary" className={classes.button} onClick={this.goToPayment}>
                    <b>Payment</b>
                </Button>
                <Button color="primary" className={classes.button} onClick={this.contactClick}>
                    <b>Contact</b>
                </Button>
           
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                <AccountBox />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                   <MenuItem style={{backgroundColor: '#DDA0DD', color: 'purple',fontWeight:'bold'}} onClick={this.changePassword}>
                        Setting
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#DDA0DD', color: 'purple',fontWeight:'bold'}} onClick={this.changePassword}>
                        Change Password
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#DDA0DD', color: 'purple',fontWeight:'bold'}} onClick={this.updateContactDetail}>
                        Update Contact Detail
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#DDA0DD', color: 'purple',fontWeight:'bold'}} onClick={this.logoutClick}>
                        Logout
                    </MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const topBarComp = compose(
    withRouter,
    withStyles(styles)
);

export default topBarComp(TopBar);
