import React from 'react';
import TamilnaduDistrict from '../utils/TamilnaduDistrict';
import IndiaState from '../utils/IndiaState';

function location(props) {     
        
    return(
        <div className="sectionParentDiv">
            <div> 
                <div className='header2allborder'>
                        <label>Current Location</label>
                </div>
            </div>

            <div className="sectionDataDiv">
                <div>                         
                    <div className='rdlabel'>
                            <label>Country</label>
                    </div>
                    
                    <div className='rdfield'>
                        <select  onChange={props.countryChange} value={props.country}>
                            <option value="IND">India</option>
                            <option value="USA">United States of America</option>
                            <option value="GBR">United Kingdom</option>                            
                        </select>
                    </div>
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>State</label>
                    </div>
                    
                    <div className='rdfield'>
                        <IndiaState 
                            profileStateChange = {props.profileStateChange}           
                            pstate = {props.pstate}                
                        />
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>District</label>
                    </div>
                    
                    <div className='rdfield'>
                        <TamilnaduDistrict 
                            districtChange = {props.districtChange}
                            district = {props.district}
                        />
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>City</label>
                    </div>
                    
                    <div className='rdfield'>
                        <div className="fieldLen200"> 
                            <input type="text" onBlur={props.cityChange} defaultValue={props.city}/> 
                        </div>                            
                    </div>                        
                </div>
                <div className="hs10" />
            </div>
        </div>
        ) ;
}

export default location;