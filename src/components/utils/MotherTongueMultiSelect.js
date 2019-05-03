import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function motherTongueMultiSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                value={props.mtongues}
                options={DropDownConstant.motherTongueValues}
                onChange={props.handleMTongueChange}
                isMulti = {true}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ;

}

export default motherTongueMultiSelect;