import React from 'react';

import './ProfileSummary.css';
import defaultFImage from '../../../assets/images/defalt_female.png';
import defaultMImage from '../../../assets/images/default_male.jpg';
import {getDropDownLabel} from '../../utils/Util';
import DropDownConstant from '../../utils/DropDownConstant';

function visitedProfileSummary (props) {

    let image;
    const preFix = (props.gender === "F") ? "Ms." : "Mr.";

    if (props.thumbImage !== null) {
        image = <img src={"data:image/jpeg;base64,"+props.thumbImage} alt="Not Available" width="100px" height="100px"></img>;            
    } else {
        if(props.gender === "F") {
            image = <img src={defaultFImage} alt="Not Available" style={{width:'80px'}} /> 
        } else {
            image = <img src={defaultMImage} alt="Not Available" style={{width:'80px'}} />
        }
    }

    return (
        <div className="myMatchProSummaryContainer">
        <div className="profileSummarImage">
            {image}
        </div> 
        <div className="vs30" />
        <div className="profileSummary">       

            <div className="psBottom">
                <div className="profileId">
                    <label className="profileName"> 
                        <b>{preFix} {props.firstName}, {props.lastName} </b>
                    </label>
                </div>
                <div className="viewProfileDiv">
                    <label>{props.bDate}</label>
                </div> 
            </div>

            <div className="psBottom">
                <div className="profileId">
                    <label> {props.age} years</label> 
                    <label> | {props.education}</label> 
                    <label> | {props.city}</label>
                </div>
                <div className="viewProfileDiv">
                    
                </div>                         
            </div>
            <div className="hs40"/>
            <div className="psBottom">
                <div className="profileId">
                    <label><b>ID: {props.id}</b></label>
                </div>
                <div className="viewProfileDiv">
                    <a href="#" onClick={() => props.profileClick(props.id)}><b>View this profile</b></a>
                </div> 
            </div>
                                
        </div>                
    </div>
    );
}

export default visitedProfileSummary;