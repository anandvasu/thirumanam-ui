import React,{Component} from 'react';
import {
    withRouter
  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './MessageSummary.css';
import axios from 'axios';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';
import { compose } from 'redux';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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

class MessageSummary extends Component {

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
    }

    handleChange(event, value) {
        this.setState({ selectedTab:value });
      };

    goToMessageHome(itemName) {
        this.props.history.push({
            pathname:"/messageHome",
            state:{
                itemName : itemName              
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
    }

    render() {
        const { classes } = this.props;
        return(
            <div style={{border:"1px solid darkgrey"}}>
                <div className="header2" >
                    <div className="vs5px"/>
                    <b>Messages</b>
                </div>
                <div style={{backgroundColor:"#FFFFFF"}}>
                <Paper square className={classes.root}>
                    <Tabs value={this.state.selectedTab} 
                        onChange={this.handleChange} 
                        indicatorColor="primary"  
                        textColor="primary"
                        variant="fullWidth" 
                    >

                            <Tab value="1" label="Inbox"/>
                            <Tab value="2" label="Sentitems" />
                    </Tabs>
                </Paper>
                {this.state.selectedTab === '1' && 
                    <TabContainer>
                        <div style={{width:'100%'}}>
                                <div className="inboxLabel"><label> <a href="#" onClick={() => this.goToMessageHome("D")}>Accepted</a> </label></div>
                                <div className="inboxCount"><label> {this.state.acceptedCount} </label></div>
                        </div>
                        <div style={{width:'100%',paddingTop:'10px',paddingBottom:'5px'}}>
                            <div className="inboxLabel"><label> <a href="#" onClick={() => this.goToMessageHome("P")}>Pending</a> </label> </div>
                            <div className="inboxCount"><label> {this.state.pendingCount} </label></div>
                        </div>
                    </TabContainer>
                }
                {this.state.selectedTab === '2' && 
                <TabContainer>
                     <div style={{width:'100%'}}>
                        <div className="inboxLabel"><label><a href="#" onClick={() => this.goToMessageHome("A")}>All</a></label></div>
                        <div className="inboxCount"><label> {this.state.sentItemsCount} </label></div>
                    </div>
                    <div style={{width:'100%',paddingTop:'10px',paddingBottom:'5px'}}>
                        <div className="inboxLabel"><label><a href="#" onClick={() => this.goToMessageHome("R")}>Awaiting Reply</a></label> </div>
                        <div className="inboxCount"><label> {this.state.awitingReplyCount} </label></div>
                    </div>
                </TabContainer>
                }                   
                </div>               
            </div>
        );
    }
}

MessageSummary.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const messageSummaryComp = compose(
    withRouter,
    withStyles(styles)
);

export default messageSummaryComp(MessageSummary);