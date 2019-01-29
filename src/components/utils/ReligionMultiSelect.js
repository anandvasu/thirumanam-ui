import React, {Component} from 'react';
import Select from "react-select";

class ReligionMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "H", label: "Hindu" },
              { value: "M", label: "Muslim" }
            ]
          };

    }

    handleMultiChange(option) {
        console.log(option);
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

export default ReligionMultiSelect;