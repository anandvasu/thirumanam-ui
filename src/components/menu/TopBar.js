import React,{Component} from 'react';
import logo from '../../assets/images/logo.png';
import './Menu.css';
import Constant from "../utils/Constant";
import {
    withRouter
  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing.unit * 2,
    },        
  });

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.goToPayment = this.goToPayment.bind(this);
        this.contactClick = this.contactClick.bind(this);
        this.logoutClick = this.logoutClick.bind(this);
        this.handleClose = this.handleClose.bind(this); 
        this.handleToggle = this.handleToggle.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.updateContactDetail = this.updateContactDetail.bind(this);

        this.state = {
            open: false,
        };
    }
    
    handleToggle() {
        this.setState({
                open: !this.state.open 
            });
      };
    
    handleClose(event) {       
        this.setState({ open: false });
    };

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
        this.props.history.push('/changePassword');        
    }

    updateContactDetail() {
        this.props.history.push('/updateContactDetail');
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

    render() {

        const  classes  = this.props;
        const  open  = this.state.open;

        return(
            <div className="topBarContainer">
                <div className="logo">
                    <div style={{display:'inline-block'}}>
                        <img src={logo} alt="Not Available" onClick={this.goToHome} /> 
                    </div>                    
                    <div className="matrimonyName" style={{color:'#4A235A'}}>
                        <label><h2>Chandramathi Matrimony</h2></label> 
                    </div> 
                </div>

                <div className="menuContainer">
                    <div className="hs20" />
                    <div className="globalMenu">
                        <div className="inlineBlock">
                            <a href="#" onClick={this.goToHome}><b>Home</b></a>
                        </div>
                        <div className="inlineBlock">
                            <a href="/"><b>Register</b></a>
                        </div>                       
                        <div className="inlineBlock">
                            <a href="#" onClick={this.goToPayment}><b>Payment</b></a>
                        </div>
                        <div className="inlineBlock">
                            <a href="#" onClick={this.contactClick}> <b>Contact Us</b></a>
                        </div>
                        <div className="inlineBlock">
                            { (sessionStorage.getItem(Constant.USER_PROFILE_ID) === null) && <button onClick={this.loginClick}>Login</button> }
                        </div>
                        {   (sessionStorage.getItem(Constant.USER_PROFILE_ID) !== null) &&
                            <div className="inlineBlock">
                                <div className={classes.root}>    
                                    <a href="#" onClick={this.handleToggle}><b>Account</b></a>                       
                                    
                                    <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
                                        {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            id="menu-list-grow"
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper>
                                            <ClickAwayListener onClickAway={this.handleClose}>
                                                <MenuList>
                                                    <MenuItem className="mui-menu-item" onClick={this.changePassword}>Change Password</MenuItem>
                                                    <MenuItem onClick={this.updateContactDetail}>Update Contact Detail</MenuItem>
                                                    <MenuItem onClick={this.logoutClick}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                        )}
                                    </Popper>
                                </div>
                            </div>
                        }
                    </div>
                </div>
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