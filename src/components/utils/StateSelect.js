import React from 'react';
import CountryDropdownConsts from './CountryDropdownConsts';

function stateSelect(props) {

    return(
        <div>
            <select  onChange={props.profileStateChange} value={props.pstate}>         
                { (props.country === "IN") &&  CountryDropdownConsts.indiaStates.map(data => <option value={data.value}>{data.label}</option>)}  
                { (props.country === "US") &&  CountryDropdownConsts.usaStates.map(data => <option value={data.value}>{data.label}</option>)}  
            </select>
        </div>
    ) ;
}

export default stateSelect;