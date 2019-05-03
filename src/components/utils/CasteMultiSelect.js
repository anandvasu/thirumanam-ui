import React from 'react';
import Select from "react-select";
import {dynamicCaste} from './DropdownUtil';
import DropDownConstant from './DropDownConstant';

function casteMultiSelect(props) {   
    
        return(
            <div>
                <Select
                    name="filters"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.castes}
                    options={dynamicCaste(props.religions)}
                    onChange={props.handleCasteChange}
                    isMulti = {true}
                    styles={DropDownConstant.customStyles}
                    />
            </div>
        ) ;

}

export default casteMultiSelect;