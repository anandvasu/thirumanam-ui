import React from 'react';
import LocationDropdownConsts from './LocationDropdownConsts';
import Select from "react-select";

function districtMultiSelect(props) {
    return(
        <div>            
            <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.districts}
                    options={LocationDropdownConsts.tamilnaduDistricts}
                    onChange={props.handleDistrictChange}
                    isMulti = {true}
                />
        </div>
    );
}

export default districtMultiSelect;