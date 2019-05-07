import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Constant from "../utils/Constant";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import {
    withRouter
  } from 'react-router-dom';
import { compose } from 'redux';
import logo from '../../assets/images/logo.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

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
    this.goToAccountHome = this.goToAccountHome.bind(this); 
    this.goToMessages = this.goToMessages.bind(this);
    this.goToSearch = this.goToSearch.bind(this);

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

  goToMessages() {
    this.props.history.push({
          pathname:'/messageHome',
          state:{
            status:Constant.MESSAGE_STATUS_PENDING
          }  
    });
  }

    goToSearch() {
      this.props.history.push('/searchHome');
    }

    goToAccountHome(value) {
      this.props.history.push({
          pathname:'/accountHome' ,
          state:{
             value:value
          }                                   
      });    
      try {
        this.props.loadAcountContent(value);    
      } catch(error) {

      }
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
        <AppBar position="fixed" color="secondary">           
          <Toolbar>                 
          <div className="menuContainerFull">
                <Button onClick={this.goToHome} style={{width:'100px',color:'#DCB239',fontSize:'15px'}}>
                    <b>Home</b>
                </Button>                     
                <Button onClick={this.goToSearch} style={{width:'100px',color:'#DCB239',fontSize:'15px'}}>
                    <b>Search</b>
                </Button>
                { (sessionStorage.getItem(Constant.USER_PROFILE_ID)  !== null) && 
                <Button onClick={this.goToMessages} style={{width:'100px',color:'#DCB239',fontSize:'15px'}}>
                    <b>Messages</b>
                </Button>
                }
                <Button onClick={this.goToPayment} style={{width:'100px',color:'#DCB239',fontSize:'15px'}}>
                    <b>Payment</b>
                </Button>
                <Button onClick={this.contactClick} style={{width:'100px',color:'#DCB239',fontSize:'15px'}}>
                    <b>Contact</b>
                </Button>
                { (sessionStorage.getItem(Constant.USER_PROFILE_ID)  !== null) && 
                <div style={{display:'inline-block'}}>
                <IconButton
                  aria-owns={open ? 'material-appbar' : undefined} 
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  vertical="top"
                 >                  
                    <AccountCircle />                    
                </IconButton>
                <Menu
                  id="material-appbar"
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
                    <MenuItem style={{backgroundColor: '#8FD8D2', color: '#DCB239',fontWeight:'bold'}} onClick={() => this.goToAccountHome(20)}>
                        Settings
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#8FD8D2', color: '#DCB239',fontWeight:'bold'}} onClick={() => this.goToAccountHome(5)}>
                        Change Password
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#8FD8D2', color: '#DCB239',fontWeight:'bold'}} onClick={() => this.goToAccountHome(10)}>
                        Update Email
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#8FD8D2', color: '#DCB239',fontWeight:'bold'}} onClick={() => this.goToAccountHome(15)}>
                        Update Mobile Number
                    </MenuItem>
                    <MenuItem style={{backgroundColor: '#8FD8D2', color: 'red',fontWeight:'bold'}} onClick={this.logoutClick}>
                        Logout
                    </MenuItem>
                </Menu>
                </div>
                }
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

