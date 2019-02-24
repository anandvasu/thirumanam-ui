import React,{Component} from 'react';
import {
    withRouter
  } from 'react-router-dom';


class Explore extends Component {

    constructor(props) {
        super(props);

        this.viewBlcokedProfiles = this.viewBlcokedProfiles.bind(this);
        this.viewShortListedProfiles = this.viewShortListedProfiles.bind(this);
    }

    viewBlcokedProfiles() {
        this.props.history.push({
            pathname:"/blockedProfilesHome"
        });
    }

    viewShortListedProfiles() {
        this.props.history.push({
            pathname:"/shortlistedProfilesHome"
        });
    }

    render() {
        return(
            <div style={{border:"1px solid darkgrey"}}>
                <div className="header2" >
                    <div className="vs5px"/>
                    <b>Explore</b></div>
                <div style={{textAlign:'left',paddingLeft:'10px'}}>
                    <a href="#" onClick={this.viewShortListedProfiles} >Shortlisted Profiles</a>
                </div>
                <div style={{textAlign:'left',paddingLeft:'10px'}}>
                    <a href="#" onClick={this.viewBlcokedProfiles} >Blocked Profiles</a>
                </div>
            </div>
        );
    }
}

export default withRouter(Explore);