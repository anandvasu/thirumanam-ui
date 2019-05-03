import React from 'react';
import {getSingleSelectCasteValues} from './DropdownUtil';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function casteSelect(props) {
    return(
        <div>           
            <Select
                name="hinduCastes"
                placeholder="--Select--"
                value={props.casteObj}
                options={getSingleSelectCasteValues(props.religion)}
                onChange={props.casteChange}
                styles={DropDownConstant.customStyles}
                />
        </div>
    );
}

export default casteSelect;