import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function districtSelect(props) {
    return(
        <div>            
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.districtObj}
                    options={LocationDropdownConsts.tamilnaduDistricts}
                    onChange={props.districtChange}
                    styles={DropDownConstant.customStyles}
                    />
        </div>
    );
}

export default districtSelect;