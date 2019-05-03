import React, {Component} from 'react';

class EmploymentCheckbox extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let employment = [];

        if(document.getElementById("empG").checked) {
            employment.push(document.getElementById("empG").value)
        }

        if(document.getElementById("empP").checked) {
            employment.push(document.getElementById("empP").value)
        }

        if(document.getElementById("empB").checked) {
            employment.push(document.getElementById("empB").value)
        }

        if(document.getElementById("empD").checked) {
            employment.push(document.getElementById("empD").value)
        }

        if(document.getElementById("empS").checked) {
            employment.push(document.getElementById("empS").value)
        }

        if(document.getElementById("empN").checked) {
            employment.push(document.getElementById("empN").value)
        }

        this.props.handleEmploymentChange(employment);
    }

    render () {

        let employment = this.props.employments;
        if(employment === null || employment === undefined) {
            employment = "";
        }
        return (
            <div> 
                    <div>
                <div>                     
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="empG" checked={employment.includes("G")} value="G" onChange={this.handleInputChange}/>Government
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="empP" checked={employment.includes("P")} value="P" onChange={this.handleInputChange}/>Private
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="empB" checked={employment.includes("B")} value="B" onChange={this.handleInputChange}/>Business
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="empD" checked={employment.includes("D")} value="D" onChange={this.handleInputChange}/>Defence
                        </label>
                    </div>
                </div> 
                <div> 
                    <div className="filterLeft">
                        <label>
                            <input type="checkbox" id="empS" checked={employment.includes("S")} value="S" onChange={this.handleInputChange}/>Self Employed
                        </label>
                    </div>
                    <div className="filterRight">
                        <label>
                            <input type="checkbox" id="empN" checked={employment.includes("N")} value="N" onChange={this.handleInputChange}/>Not Working
                        </label>
                    </div>
                </div> 
            </div>
            </div>
        );
    }
}

export default EmploymentCheckbox;