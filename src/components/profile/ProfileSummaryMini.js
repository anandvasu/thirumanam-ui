import React from 'react';

import defaultFImage from '../../assets/images/defalt_female.png';
import defaultMImage from '../../assets/images/default_male.jpg';
import addImage from '../../assets/images/add.png';
import viewImage from '../../assets/images/view.png';
import './ProfileSummaryMini.css';
import {getDropDownLabel} from '../utils/Util';
import DropDownConstant from '../utils/DropDownConstant';

function profileSummaryMini(props) {  
    let image;
    const preFix = (props.gender === "F") ? "Ms." : "Mr.";

    if (props.thumbImage !== null) {
        image = <img src={"data:image/jpeg;base64,"+props.thumbImage} alt="Not Available" width="80px" height="80px"></img>;            
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
                <div>
                    {image}
                </div> 
                <div>
                    <label className="profileIdLabel">ID: {props.id}</label>
                </div>
            </div>
            <div className="vs30" />
            <div className="profileSummary">       
                <div className="psBottom">
                    <div className="ps75Percent">
                        <label className="profileName"> 
                            <b>{preFix} {props.firstName}, {props.lastName} </b> 
                        </label>
                    </div>
                    <div className="viewProfileDiv">
                        <label className="dateText">{props.bDate}</label>
                    </div> 
                </div>
                <div className="summaryFullWidth">
                        <label className="otherText"> {props.age} years</label> 
                        <label className="otherText"> | {getDropDownLabel(props.education, DropDownConstant.educationValuesOptions)}</label> 
                        <label className="otherText"> | {props.city}</label>
                </div>
                <div className="hs25"/>
                <div className="psBottom">
                    <div style={{width:'80%'}}>                                       
                        <div className="inlineBlock" style={{width:'130px', height:'25px'}}>
                            <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                <img src={addImage} alt="Not Available" onClick={() => props.shortlistProfile(props.id)} style={{width:'25px',height:'25px'}}/>
                            </div>
                            <div className="inlineBlock" style={{height:'30px',width:'90px',float: 'left',paddingTop:'3px'}}>
                                <label className="hrefText"><b> <a href="#" onClick={() => props.shortlistProfile(props.id)}><b>Shortlist</b></a></b></label>                           
                            </div>
                        </div>                       
                        <div className="inlineBlock" style={{width:'80px', height:'25px'}}>
                            <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                <img src={viewImage} alt="Not Available" onClick={() => props.profileClick(props.id)} style={{width:'25px',height:'25px'}} />
                            </div>
                            <div className="inlineBlock" style={{height:'30px',width:'50px',float: 'left',paddingTop:'3px'}}>
                                <label className="hrefText"><b> <a href="#" onClick={() => props.profileClick(props.id)}><b>View</b></a></b></label>                            
                            </div>
                        </div> 
                    </div>
                </div>                                    
            </div>                
        </div>
    );
}

export default profileSummaryMini;