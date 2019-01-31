import React from 'react';
import Select from "react-select";
import Constant from '../../Constant';

function religionSelect(props) {     
        
        return(
            <div>
                <Select
                    name="religionSelect"
                    placeholder={Constant.dropdownDefault}
                    value={props.religions}
                    options={Constant.regilionValues}
                    onChange={props.religionChangeHandler}                  
                    />
            </div>
        ) ;
}

export default religionSelect;