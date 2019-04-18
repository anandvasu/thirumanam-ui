import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import DropDownConstant from './DropDownConstant';

function countrySelect(props) {     
        
    return(
        <div>           
            <select  onChange={props.countryChange} value={props.country}>  
                <option value="">{DropDownConstant.dropdownDefault}</option>             
                { LocationDropdownConsts.countries.map(data => <option value={data.value}>{data.label}</option>)}                     
            </select>
        </div>
    );
}

export default countrySelect;