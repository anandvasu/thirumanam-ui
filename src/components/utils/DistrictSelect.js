import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import DropDownConstant from './DropDownConstant';

function districtSelect(props) {
    return(
        <div>
            <select  onChange={props.districtChange} value={props.district}>     
                <option value="0">{DropDownConstant.dropdownDefault}</option>          
                { (props.pstate === 58) &&  LocationDropdownConsts.tamilnaduDistricts.map(data => <option value={data.value}>{data.label}</option>)}                     
            </select>
        </div>
    );
}

export default districtSelect;