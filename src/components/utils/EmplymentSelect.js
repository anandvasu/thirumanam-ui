import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function employmentSelect(props) {

    return(
        <div>
            <Select
                name="filters"
                placeholder={DropDownConstant.dropdownDefault}
                value={props.employment}
                options={DropDownConstant.employmentValues}
                onChange={props.handleEmploymentChange}
                />
        </div>
    ) ;

}

export default employmentSelect;