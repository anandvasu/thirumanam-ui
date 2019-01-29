import React, {Component} from 'react';
import TamilnaduDistrict from '../utils/TamilnaduDistrict';
import IndiaState from '../utils/IndiaState';

class Location extends Component {

    constructor(props) {
        super(props);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
    }

    countryChange(event) {
        this.props.countryChange(event.target.value);
    }

    profileStateChange(event) {
        this.props.profileStateChange(event.target.value);
    }

    districtChange(event) {
        this.props.districtChange(event.target.value);
    }

    cityChange(event) {
        this.props.cityChange(event.target.value);
    }

    render () {
        return (
            <div className="rdlcontaniner">

                         <div> 
                            <div className='header2allborder'>
                                    <label>Current Location</label>
                            </div>
                            <div className='rdfield'>
                            </div>
                        </div>

                   
                 <div>                         
                        <div className='rdlabel'>
                             <label>Country</label>
                        </div>
                        
                        <div className='rdfield'>
                            <select  onChange={this.countryChange}>
                                <option value="IND" selected>India</option>
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
                                profileStateChange = {this.profileStateChange}
                            />
                        </div>                        
                    </div>

                    <div>
                        <div className='rdlabel'>
                             <label>District</label>
                        </div>
                        
                        <div className='rdfield'>
                           <TamilnaduDistrict 
                                districtChange = {this.districtChange}
                           />
                        </div>                        
                    </div>

                     <div>
                        <div className='rdlabel'>
                             <label>City</label>
                        </div>
                        
                        <div className='rdfield'>
                            <div className="fieldLen200"> <input type="text" onBlur={this.cityChange}/> </div>                            
                        </div>                        
                    </div>
                    <div className="hs10" />
            </div>
        );
    }
}

export default Location;