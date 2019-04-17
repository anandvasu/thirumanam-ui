import React from 'react';
import CountryDropdownConsts from './CountryDropdownConsts';

function district(props) {
    return(
        <div>
            <select  onChange={props.districtChange} value={props.district}>               
                { (props.pstate === 58) &&  CountryDropdownConsts.tamilnaduDistricts.map(data => <option value={data.value}>{data.label}</option>)}                     
            </select>
        </div>
    );
}

export default district;