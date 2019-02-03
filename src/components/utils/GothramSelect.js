import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function gothramSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.gothramObj}
                    options={DropDownConstant.gothramValues}
                    onChange={props.hinduGothramChange}                  
                    />
            </div>
        ) ;
}

export default gothramSelect;