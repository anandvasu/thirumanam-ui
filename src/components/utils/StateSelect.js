import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import DropDownConstant from './DropDownConstant';

function stateSelect(props) {

    return(
        <div>
            <select  onChange={props.profileStateChange} value={props.pstate}>   
                <option value="0">{DropDownConstant.dropdownDefault}</option>      
                { (props.country === "IN") &&  LocationDropdownConsts.indiaStates.map(data => <option value={data.value}>{data.label}</option>)}  
                { (props.country === "US") &&  LocationDropdownConsts.usaStates.map(data => <option value={data.value}>{data.label}</option>)}  
            </select>
        </div>
    ) ;
}

export default stateSelect;