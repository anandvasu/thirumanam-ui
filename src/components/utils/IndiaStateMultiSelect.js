import React, {Component} from 'react';
import Select from "react-select";
import Animated from 'react-select/lib/animated';

class IndiaStateMultiSelect extends Component {

    constructor(props) {
        super(props);

        this.handleMultiChange = this.handleMultiChange.bind(this);

        this.state = {
            multiValue: [],
            filterOptions: [
              { value: "AR", label: "Arunachal Pradesh" },
              { value: "AS", label: "Assam" },
              { value: "BR", label: "Bihar" },
              { value: "CH", label: "Chandigarh" },
              { value: "CG", label: "Chhattisgarh" },
              { value: "DN", label: "Dadra and Nagar Haveli" },
              { value: "DD", label: "Daman and Diu" },
              { value: "DL", label: "Delhi" },
              { value: "GA", label: "Goa" },
              { value: "GJ", label: "Gujarat" },
              { value: "HR", label: "Haryana" },
              { value: "HP", label: "Himachal Pradesh" },
              { value: "JK", label: "Jammu and Kashmir" },
              { value: "JH", label: "Jharkhand" },
              { value: "KA", label: "Karnataka" },
              { value: "KL", label: "Kerala" },
              { value: "LD", label: "Lakshadweep" },
              { value: "MP", label: "Madhya Pradesh" },
              { value: "MH", label: "Maharashtra" },
              { value: "MN", label: "Manipur" },
              { value: "ML", label: "Meghalaya" },
              { value: "MZ", label: "Mizoram" },
              { value: "NL", label: "Nagaland" },
              { value: "OD", label: "Odisha" },
              { value: "PY", label: "Puducherry" },
              { value: "PB", label: "Punjab" },
              { value: "RJ", label: "Rajasthan" },
              { value: "SK", label: "Sikkim" },
              { value: "TN", label: "Tamil Nadu" },
              { value: "TS", label: "Telangana" },
              { value: "TR", label: "Tripura" },
              { value: "UP", label: "Uttar Pradesh" },
              { value: "UK", label: "Uttarakhand" },
              { value: "WB", label: "West Bengal" }
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

export default IndiaStateMultiSelect;