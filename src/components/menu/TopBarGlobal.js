import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Constant from "../utils/Constant";
import Button from '@material-ui/core/Button';
import {
    withRouter
  } from 'react-router-dom';
import { compose } from 'redux';
import logo from '../../assets/images/logo.png';
import './Menu.css';

const styles = themeButton => ({
    button: {
      margin: themeButton.spacing.unit,
    },
    input: {
      display: 'none',
    }    
  });

class TopBarGlobal extends React.Component {

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
    this.goToSearch = this.goToSearch.bind(this);
    this.goToRegister = this.goToRegister.bind(this);

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

  goToSearch() {
    this.props.history.push('/searchHome');
  }

  goToRegister() {
    this.props.history.push('/registerHome');
  }

  render() {
    const { classes } = this.props;

    return (
      <div>     
        <AppBar position="static" color="secondary">           
          <Toolbar>  
            <div className="menuContainerFull">
                <Button color="primary" className={classes.button} onClick={this.goToHome}>
                    <b>Home</b>
                </Button>      
                <Button color="primary" className={classes.button} onClick={this.goToRegister}>
                    <b>Register</b>
                </Button>
                <Button color="primary" className={classes.button} onClick={this.goToSearch}>
                    <b>Search</b>
                </Button>               
                <Button color="primary" className={classes.button} onClick={this.goToPayment}>
                    <b>Payment</b>
                </Button>
                <Button color="primary" className={classes.button} onClick={this.contactClick}>
                    <b>Contact</b>
                </Button>   
                <Button color="primary" className={classes.button} onClick={this.loginClick}>
                    <b>Login</b>
                </Button>              
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
} 
 
TopBarGlobal.propTypes = {
  classes: PropTypes.object.isRequired,
};

const menuComp = compose(
    withRouter,
    withStyles(styles)
);

export default menuComp(TopBarGlobal);
