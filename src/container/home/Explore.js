import React,{Component} from 'react';

class Explore extends Component {

    constructor() {
        super();

        this.viewBlcokedProfiles = this.viewBlcokedProfiles.bind();
        this.viewShortListedProfiles = this.viewShortListedProfiles.bind();
    }

    viewBlcokedProfiles() {

    }

    viewShortListedProfiles() {
        
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

export default Explore;