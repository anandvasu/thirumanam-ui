import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

class CasteMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "VAN", label: "Vanniyar" },
              { value: "MUL", label: "Mudaliyar" }  
            ]
          };
    }

    handleMultiChange(option) {
        this.setState({
            multiValue: option
        });
      }

    render() {       
        return(
            <div>
                <Select
                    name="filters"
                    placeholder="Filters"
                    value={this.state.multiValue}
                    options={this.state.filterOptions}
                    onChange={this.handleMultiChange}
                    isMulti = {true}
                    />
            </div>
        ) ;
    }

}

export default CasteMultiSelect;