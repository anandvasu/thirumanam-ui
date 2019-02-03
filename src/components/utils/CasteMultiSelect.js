import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';
import DropDownConstant from './DropDownConstant';

class CasteMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "VAN", label: "Vanniyar" },
              { value: "MUL", label: "Mudaliyar" }  
            ]
          };
    }

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