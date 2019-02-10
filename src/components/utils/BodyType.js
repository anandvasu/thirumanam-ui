import React, {Component} from 'react';

class BodyType extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let bodyTypes = [];

        if(document.getElementById("bodyTypeAG").checked) {
            bodyTypes.push(document.getElementById("bodyTypeAG").value);
        }

        if(document.getElementById("bodyTypeAT").checked) {
            bodyTypes.push(document.getElementById("bodyTypeAT").value);
        }

        if(document.getElementById("bodyTypeHY").checked) {
            bodyTypes.push(document.getElementById("bodyTypeHY").value);
        }

        if(document.getElementById("bodyTypeSM").checked) {
            bodyTypes.push(document.getElementById("bodyTypeSM").value);
        }

        this.props.bodyTypesChange(bodyTypes);
    }

    render () {

        let bodyTypes = this.props.bodyTypes;
        if(bodyTypes === null || bodyTypes === undefined) {
            bodyTypes = "";
        }

        return (
            <div>               
                <div>                     
                    <div className="filterLeft">
                        <input id="bodyTypeAG" type="checkbox" value="AG" checked={bodyTypes.includes("AG")} onChange={this.handleInputChange} />Average
                    </div>
                    <div className="filterRight">
                        <input id="bodyTypeAT" type="checkbox" value="AT" checked={bodyTypes.includes("AT")} onChange={this.handleInputChange} />Athletic
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <input id="bodyTypeHY" type="checkbox" value="HY" checked={bodyTypes.includes("HY")} onChange={this.handleInputChange} />Heavy
                    </div>
                    <div className="filterRight">
                        <input id="bodyTypeSM" type="checkbox" value="SM" checked={bodyTypes.includes("SM")} onChange={this.handleInputChange} />Slim
                    </div>
                </div>                
            </div>
        );
    }
}

export default BodyType;