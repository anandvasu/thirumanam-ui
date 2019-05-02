import React from 'react';
import {getSingleSelectCasteValues} from './DropdownUtil';
import Select from "react-select";

function casteSelect(props) {
    return(
        <div>           
            <Select
                name="hinduCastes"
                placeholder="--Select--"
                value={props.casteObj}
                options={getSingleSelectCasteValues(props.religion)}
                onChange={props.casteChange}
                />
        </div>
    );
}

export default casteSelect;