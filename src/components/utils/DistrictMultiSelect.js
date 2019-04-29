import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";

function districtMultiSelect(props) {
    return(
        <div>            
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.districtObj}
                    options={LocationDropdownConsts.tamilnaduDistricts}
                    onChange={props.districtChange}
                    isMulti = {true}
                />
        </div>
    );
}

export default districtMultiSelect;