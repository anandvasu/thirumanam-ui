import React from 'react';
import Select from "react-select";
import ReligionDropdownConsts from './ReligionDropdownConsts';
import DropDownConstant from './DropDownConstant';

function religionMultiSelect(props) {
        
    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.religions}
                options={ReligionDropdownConsts.regilionValues}
                onChange={props.handleReligionChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
            />
        </div>
    ) ;
}

export default religionMultiSelect;