import React from 'react';
import Select from "react-select";
import {dynamicStates} from './DropdownUtil';

function stateMultiSelect(props) {

    return(
        <div>       
            <Select
                name="filters"
                placeholder="--Select--"
                value={props.pstateObj}
                options={dynamicStates(props.countries)}
                onChange={props.profileStateChange}
            />
        </div>
    ) ;
}

export default stateMultiSelect;