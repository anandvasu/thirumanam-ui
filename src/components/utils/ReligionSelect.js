import React from 'react';
import Select from "react-select";
import ReligionDropdownConsts from './ReligionDropdownConsts';
import DropDownConstant from './DropDownConstant';

function religionSelect(props) {
    return(
        <div>
             <Select
                    name="filters"
                    placeholder="--Select--"
                    value={props.religionObj}
                    options={ReligionDropdownConsts.regilionValues}
                    onChange={props.religionChangeHandler}
                    styles={DropDownConstant.customStyles}
                    />
        </div>
    );
}


export default religionSelect;