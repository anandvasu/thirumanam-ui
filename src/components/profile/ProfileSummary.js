import React, {Component} from 'react';

import './ProfileSummary.css';
import defaultFImage from '../../assets/images/defalt_female.png';
import defaultMImage from '../../assets/images/default_male.jpg';
import protectImage from '../../assets/images/protect_thumb.png';
import {getDropDownLabel} from '../utils/Util';
import DropDownConstant from '../utils/DropDownConstant';
import heartImage from '../../assets/images/heart.png';
import addImage from '../../assets/images/add.png';
import blockImage from '../../assets/images/block.png';
import viewImage from '../../assets/images/view.png';

class ProfileSummary extends Component {

     render () {

        let image;
        const preFix = (this.props.gender === "F") ? "Ms." : "Mr.";

        if (this.props.thumbImage !== null && (this.props.protectImage === false)) {
            image = <img src={"data:image/jpeg;base64,"+this.props.thumbImage} alt="Not Available" width="100px" height="100px"></img>;            
        } else if (this.props.protectImage){
            image = <img src={protectImage} alt="Not Available" style={{width:'80px'}} /> 
        } else {
            if(this.props.gender === "F") {
                image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} /> 
            } else {
                image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} />
            }
        }

        return (
            <div className="profileContainer">
                <div className="profileSummarImage">
                    <div>
                        {image}
                    </div> 
                    <div>
                        <label><b>ID: {this.props.id}</b></label>
                    </div>
                </div> 
                <div className="vs20" />
                <div className="profileSummary">       
                    <div className="psBottom">
                        <div className="ps75Percent">
                            <label className="profileName"> 
                                <b>{preFix} {this.props.firstName}, {this.props.lastName} </b>
                            </label>
                        </div>
                        <div className="viewProfileDiv">
                            <label style={{paddingRight:'10px'}}>{this.props.bDate}</label>
                        </div> 
                    </div>

                    <div className="summaryFullWidth">
                        <label> {this.props.age} years</label> 
                        <label> | {getDropDownLabel(this.props.education, DropDownConstant.educationValues)}</label> 
                        <label> | {this.props.city}</label>
                    </div>                                              
                    <div className="hs40"/>
                    <div className="psBottom">                       
                        <div style={{width:'100%'}}>
                           { (sessionStorage.getItem("profileId") != null) && <div className="inlineBlock" style={{width:'150px', height:'25px'}} >                   
                                <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                    <img src={heartImage} alt="Not Available"  style={{width:'25px',height:'25px'}}/>
                                </div>                       
                                <div className="inlineBlock" style={{height:'30px',width:'110px',float: 'left',paddingTop:'3px'}}>
                                    <label><b>Send Interest</b></label>                            
                                </div>
                            </div> }                  
                           { (sessionStorage.getItem("profileId") != null) && <div className="inlineBlock" style={{width:'130px', height:'25px'}}>
                                <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                    <img src={addImage} alt="Not Available"  style={{width:'25px',height:'25px'}}/>
                                </div>
                                <div className="inlineBlock" style={{height:'30px',width:'90px',float: 'left',paddingTop:'3px'}}>
                                    <label><b>Shortlisted</b></label>                            
                                </div>
                            </div> }
                            { (sessionStorage.getItem("profileId") != null) && <div className="inlineBlock" style={{width:'90px', height:'25px'}}>
                                <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                    <img src={blockImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                                </div>
                                <div className="inlineBlock" style={{height:'30px',width:'50px',float: 'left',paddingTop:'3px'}}>
                                    <label><b>Block</b></label>                            
                                </div>
                            </div> }
                            <div className="inlineBlock" style={{width:'80px', height:'25px'}}>
                                <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                    <img src={viewImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                                </div>
                                <div className="inlineBlock" style={{height:'30px',width:'50px',float: 'left',paddingTop:'3px'}}>
                                    <label><b> <a href="#" onClick={() => this.props.profileClick(this.props.id)}><b>View</b></a></b></label>                            
                                </div>
                            </div> 
                        </div>
                    </div>                                      
                </div>
                <div className="profileButton">
                   
                </div> 
            </div>
        );
    }
}

export default ProfileSummary;