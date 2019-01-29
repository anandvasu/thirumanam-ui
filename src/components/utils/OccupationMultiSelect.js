import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

class OccupationMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "P", label: "Private" },
              { value: "G", label: "Goverment" },
              { value: "B", label: "Business" },
              { value: "D", label: "Defence" },
              { value: "S", label: "Self Employed" },
              { value: "N", label: "Not Working" }
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

export default OccupationMultiSelect;