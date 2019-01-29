import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

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
                    value={this.props.casteSelecteOption}
                    options={this.state.filterOptions}
                    onChange={this.props.handleCasteChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CasteMultiSelect;