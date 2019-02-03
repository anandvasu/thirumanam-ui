import React from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

function maritalStatusSelect(props) {     
        
        return(
            <div>
                <select  onChange={props.maritalStatusChange} value={props.mStatus}>
                                <option value="">--Select--</option>
                                <option value="NM">Never Married</option>
                                <option value="WD">Widowed</option>
                                <option value="DI">Divorced</option> 
                                <option value="AD">Awaiting Divorce</option>                            
                </select>
            </div>
        ) ;
}

export default maritalStatusSelect;