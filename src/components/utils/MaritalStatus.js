import React, {Component} from 'react';

class MaritalStatus extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let maritalStatus = [];

        if(document.getElementById("fmsNM").checked) {
            maritalStatus.push(document.getElementById("fmsNM").value)
        }

        if(document.getElementById("fmsWD").checked) {
            maritalStatus.push(document.getElementById("fmsWD").value)
        }

        if(document.getElementById("fmsDD").checked) {
            maritalStatus.push(document.getElementById("fmsDD").value)
        }

        if(document.getElementById("fmsAD").checked) {
            maritalStatus.push(document.getElementById("fmsAD").value)
        }

        this.props.maritalStatusChange(maritalStatus);
    }

    render () {

        let mStatus = this.props.mStatus;
        if(mStatus === null || mStatus === undefined) {
            mStatus = "";
        }
        console.log("m Status Value:" + mStatus);
        return (
            <div> 
                    <div>                     
                        <div className="filterLeft">
                            <label> <input id="fmsNM" type="checkbox" checked={mStatus.includes("NM")} value="NM" onChange={this.handleInputChange}/>Never Married</label> 
                        </div>
                        <div className="filterRight">
                            <label> <input id="fmsWD" type="checkbox" checked={mStatus.includes("WD")} value="WD" onChange={this.handleInputChange}/>Widowed</label>
                        </div>
                    </div> 
                    <div> 
                        <div className="filterLeft">
                            <label> <input id="fmsDD" type="checkbox" checked={mStatus.includes("DD")} value="DD" onChange={this.handleInputChange}/>Divorced</label>
                        </div>
                        <div className="filterRight">
                            <label> <input id="fmsAD" type="checkbox" checked={mStatus.includes("AD")} value="AD" onChange={this.handleInputChange}/>Awaiting Divorce</label>
                        </div>
                    </div> 
            </div>
        );
    }
}

export default MaritalStatus;