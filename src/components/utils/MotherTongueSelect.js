import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function motherTongueSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                value={props.mTongueObj}
                options={DropDownConstant.motherTongueSValues}
                onChange={props.handleMTongueChange}
                styles={DropDownConstant.customStyles}
                />
        </div>
    ) ;

}

export default motherTongueSelect;