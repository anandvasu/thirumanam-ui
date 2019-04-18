import React from 'react';
import ReligionDropdownConsts from './ReligionDropdownConsts';

function casteSelect(props) {
    return(
        <div>
            <select  onChange={props.casteChange} value={props.caste}>               
                { (props.religion === 1) && ReligionDropdownConsts.hinduCasteValues.map(data => <option value={data.value}>{data.label}</option>)}    
                { ((props.religion === 4) || (props.religion === 5) || (props.religion === 6)) && ReligionDropdownConsts.muslimCasteValues.map(data => <option value={data.value}>{data.label}</option>)}                   
            </select>
        </div>
    );
}

export default casteSelect;