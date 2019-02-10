import React, {Component} from 'react';

class Occupation extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let occupation = [];

        if(document.getElementById("occupG").checked) {
            occupation.push(document.getElementById("occupG").value);
        }

        if(document.getElementById("occupP").checked) {
            occupation.push(document.getElementById("occupP").value);
        }

        if(document.getElementById("occupB").checked) {
            occupation.push(document.getElementById("occupB").value);
        }

        if(document.getElementById("occupD").checked) {
            occupation.push(document.getElementById("occupD").value);
        }

        if(document.getElementById("occupS").checked) {
            occupation.push(document.getElementById("occupS").value);
        }

        if(document.getElementById("occupN").checked) {
            occupation.push(document.getElementById("occupN").value);
        }
        this.props.occupationChange(occupation);
    }

    render () {

        let occupation = this.props.occupation;
        if(occupation === null || occupation === undefined) {
            occupation = "";
        }

        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Occupation</label></div>
                <div className="filterContent">    
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" id="occupG" checked={occupation.includes("G")} value="G" onChange={this.handleInputChange}/>Government
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" id="occupP" checked={occupation.includes("P")} value="P" onChange={this.handleInputChange}/>Private
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" id="occupB" checked={occupation.includes("B")} value="B" onChange={this.handleInputChange}/>Business
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" id="occupD" checked={occupation.includes("D")} value="D" onChange={this.handleInputChange}/>Defence
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" id="occupS" checked={occupation.includes("S")} value="S" onChange={this.handleInputChange}/>Self Employed
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" id="occupN" checked={occupation.includes("N")} value="N" onChange={this.handleInputChange}/>Not Working
                            </div>
                        </div> 
                </div>
            </div>
        );
    }
}

export default Occupation;