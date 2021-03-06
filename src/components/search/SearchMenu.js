import React,{Component} from 'react';
import {toast} from 'react-toastify';
import {
    withRouter
  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import BasicSearch from './BasicSearch';
import AdvancedSearch from './AdvancedSearch';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

class SearchMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            acceptedCount:0,
            pendingCount:0,
            awitingReplyCount:0,
            sentItemsCount:0,
            selectedTab:"1"
        }
        this.goToMessageHome = this.goToMessageHome.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.viewProfile = this.viewProfile.bind(this);
        
    }

    handleChange(event, value) {
        this.setState({ selectedTab:value });
        this.props.refreshFooter();
      };

    goToMessageHome(status) {
        this.props.history.push({
            pathname:"/messageHome",
            state:{
                status : status              
            }  
        });
    }

    componentDidMount() {
        axios.get(ApiConstant.MESSAGE_API+sessionStorage.getItem(Constant.USER_PROFILE_ID)+"/summary")
        .then(res => {
            console.log(res);
            this.setState({
                acceptedCount:res.data.acceptedCount,
                pendingCount:res.data.pendingCount,
                awitingReplyCount:res.data.awitingReplyCount,
                sentItemsCount:res.data.sentItemsCount,
            });
            
        });
        this.props.refreshFooter();
    }

    viewProfile(event) {

        event.preventDefault();

        const profileId = document.getElementById("profileId").value;

        if (String.prototype.trim.call(profileId) !== "") {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                .then((response) => {
                    if(response.status === 200) {
                        this.props.history.push({
                            pathname: '/viewProfile',
                            state: {
                                profile:response.data
                            }
                        });
                    }
                }).catch(function (error) {
                    if (error.response.status === 400) {
                        toast.error("Invalid Profile ID. Profile ID doesn't exist.", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            toastId:Constant.toastIdErr
                        });
                    }
                  });
        } else {
            toast.error("Please enter Profile ID", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    toastId:Constant.toastIdErr
                });
        } 
    }

    render() {
        const { classes } = this.props;
        return(
            <div className="homeFullSection" style={{backgroundColor:"#FFFFFF"}}>
               <div>
                <Paper square className={classes.root}>
                    <Tabs value={this.state.selectedTab} 
                        onChange={this.handleChange} 
                        indicatorColor="primary"  
                        textColor="primary"
                        variant="fullWidth" 
                    >
                        <Tab value="1" label="Basic Search"/>
                        <Tab value="2" label="Advanced Search" />
                        <Tab value="3" label="Search By ID" />
                    </Tabs>
                </Paper>
                {this.state.selectedTab === '1' && 
                    <TabContainer>
                       <BasicSearch />
                    </TabContainer>
                }
                {this.state.selectedTab === '2' && 
                <TabContainer>
                    <AdvancedSearch />
                </TabContainer>
                }     
                 {this.state.selectedTab === '3' && 
                <TabContainer>
                     <div style={{width:'100%',paddingBottom:'5px'}}> 
                        <div className="rdlabel">
                            <label>Profile ID</label>
                        </div>
                        <div className="rdfield">
                           <input type="text" id="profileId"/>
                        </div>  
                    </div> 
                    <div style={{paddingTop:'10px'}}>                               
                        <button onClick={this.viewProfile}>Search</button>  
                    </div>
                </TabContainer>
                }               
                </div>               
            </div>
        );
    }
}

SearchMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const searchMenuComp = compose(
    withRouter,
    withStyles(styles)
);

export default searchMenuComp(SearchMenu);