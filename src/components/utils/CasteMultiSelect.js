import React, {Component} from 'react';
import Select from "react-select";
import DropDownConstant from './DropDownConstant';

class CasteMultiSelect extends Component {
   
    render() {       
        return(
            <div>
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={this.props.castes}
                    options={DropDownConstant.casteValues}
                    onChange={this.props.handleCasteChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CasteMultiSelect;