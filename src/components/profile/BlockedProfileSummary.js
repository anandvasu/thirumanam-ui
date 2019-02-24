import React from 'react';

import defaultFImage from '../../assets/images/defalt_female.png';
import defaultMImage from '../../assets/images/default_male.jpg';
import unBlockImage from '../../assets/images/unblock.png';
import viewImage from '../../assets/images/view.png';
import './MyMatchProfileSummary.css';

function blockedProfileSummary(props) {  
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
                <div>
                    {image}
                </div> 
                <div>
                    <label><b>ID: {props.id}</b></label>
                </div>
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
                    <div style={{width:'100%'}}>                       
                        <div className="inlineBlock" style={{width:'150px', height:'25px'}}>
                            <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                <img src={unBlockImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                            </div>
                            <div className="inlineBlock" style={{height:'30px',width:'50px',float: 'left',paddingTop:'3px'}}>
                            <label><b> <a href="#" onClick={() => props.ubBlockProfile(props.id)}><b>Unblock</b></a></b></label>                            
                            </div>
                        </div>
                        <div className="inlineBlock" style={{width:'150px', height:'25px'}}>
                            <div className="inlineBlock" style={{width:'25px',height:'25px',float: 'left'}}>
                                <img src={viewImage} alt="Not Available" style={{width:'25px',height:'25px'}} />
                            </div>
                            <div className="inlineBlock" style={{height:'30px',width:'50px',float: 'left',paddingTop:'3px'}}>
                                <label><b> <a href="#" onClick={() => props.profileClick(props.id)}><b>View</b></a></b></label>                            
                            </div>
                        </div> 
                    </div>
                </div>                                    
            </div>                
        </div>
    );
}

export default blockedProfileSummary;