import React from 'react';
import Select from "react-select";
import {dynamicStates} from './DropdownUtil';
import DropDownConstant from './DropDownConstant';

function stateMultiSelect(props) {

    return(
        <div>       
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.states}
                options={dynamicStates(props.countries)}
                onChange={props.handleStateChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
            />
        </div>
    ) ;
}

export default stateMultiSelect;