import React,{Component} from 'react';
import {
    withRouter
  } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './MessageSummary.css';
import axios from 'axios';
import ApiConstant from '../utils/ApiConstant';
import Constant from '../utils/Constant';

class MessageSummary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inboxCount:0,
            sentCount:0
        }
        this.goToMessageHome = this.goToMessageHome.bind(this);
    }

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
                inboxCount:res.data.inboxCount,
                sentCount:res.data.sentItemsCount,
            })
        });
    }

    render() {
        return(
            <div style={{border:"1px solid darkgrey"}}>
                <div className="header2" >
                    <div className="vs5px"/>
                    <b>Messages</b>
                </div>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab><b>Inbox</b></Tab>
                            <Tab><b>Sent</b></Tab>
                        </TabList>

                        <TabPanel>
                            <div style={{width:'100%'}}>
                                <div className="inboxLabel"><label> <a href="#" onClick={() => this.goToMessageHome("D")}>Accepted</a> </label></div>
                                <div className="inboxCount"><label> 0 </label></div>
                            </div>
                            <div style={{width:'100%',paddingTop:'5px',paddingBottom:'5px'}}>
                                <div className="inboxLabel"><label> <a href="#" onClick={() => this.goToMessageHome("P")}>Pending</a> </label> </div>
                                <div className="inboxCount"><label> {this.state.inboxCount}</label></div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div style={{width:'100%'}}>
                                <div className="inboxLabel"><label><a href="#" onClick={() => this.goToMessageHome("A")}>All</a></label></div>
                                <div className="inboxCount"><label> 0 </label></div>
                            </div>
                            <div style={{width:'100%',paddingTop:'5px',paddingBottom:'5px'}}>
                                <div className="inboxLabel"><label><a href="#" onClick={() => this.goToMessageHome("R")}>Awaiting Reply</a></label> </div>
                                <div className="inboxCount"><label> {this.state.sentCount} </label></div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>               
            </div>
        );
    }
}

export default withRouter(MessageSummary);