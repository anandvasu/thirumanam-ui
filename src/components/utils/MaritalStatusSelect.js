import React from 'react';
import Select from "react-select";
import Constant from '../../Constant';

function maritalStatusSelect(props) {     
        
        return(
            <div>
                <Select
                    name="maritalStatusSelect"
                    placeholder={Constant.dropdownDefault}
                    value={props.mStatus}
                    options={Constant.maritalStatusValues}
                    onChange={props.maritalStatusChange}                  
                    />
            </div>
        ) ;
}

export default maritalStatusSelect;