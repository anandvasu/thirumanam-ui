import React from 'react';
import ReligionDropdownConsts from './ReligionDropdownConsts';

function religionSelect(props) {
    return(
        <div>
            <select  onChange={props.religionChangeHandler} value={props.religion}>               
                {ReligionDropdownConsts.regilionValues.map(data => <option value={data.value}>{data.label}</option>)}                     
            </select>
        </div>
    );
}


export default religionSelect;