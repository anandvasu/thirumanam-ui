import React from 'react';
import DistrictSelect from '../utils/DistrictSelect';
import CountrySelect from '../utils/CountrySelect';
import StateSelect from '../utils/StateSelect';

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
                        <CountrySelect
                            countryChange={props.countryChange}
                            country={props.country}
                        />
                    </div>
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>State</label>
                    </div>
                    
                    <div className='rdfield'>
                        <StateSelect 
                            profileStateChange = {props.profileStateChange}           
                            pstate = {props.pstate}    
                            country={props.country}            
                        />
                    </div>                        
                </div>

                <div>
                    <div className='rdlabel'>
                            <label>District</label>
                    </div>
                    
                    <div className='rdfield'>
                        <DistrictSelect 
                            districtChange = {props.districtChange}
                            district = {props.district}
                            pstate = {props.pstate} 
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