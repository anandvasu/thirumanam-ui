import React from 'react';
import Select from "react-select";
import Constant from '../../Constant';

function gothramSelect(props) {     
        
        return(
            <div>
                <Select
                    name="gothramSelect"
                    placeholder={Constant.dropdownDefault}
                    value={props.gothram}
                    options={Constant.gothramValues}
                    onChange={props.gothramChangeHandler}                  
                    />
            </div>
        ) ;
}

export default gothramSelect;