import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function incomeSelect(props) {     
        
        return(
            <div>
                <Select
                    name="incomeSelect"
                    placeholder={DropDownConstant.dropdownDefault}
                    value={props.incomeObj}
                    options={DropDownConstant.incomeValues}
                    onChange={props.handleIncomeChange}            
                    styles={DropDownConstant.customStyles}      
                    />
            </div>
        ) ;
}

export default incomeSelect;