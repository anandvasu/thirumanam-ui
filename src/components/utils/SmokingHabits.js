import React, {Component} from 'react';

class SmokingHabits extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let smokinggHabits = [];

        if(document.getElementById("nonS").checked) {
            smokinggHabits.push(document.getElementById("nonS").value);
        }

        if(document.getElementById("lightS").checked) {
            smokinggHabits.push(document.getElementById("lightS").value);
        }

        if(document.getElementById("regS").checked) {
            smokinggHabits.push(document.getElementById("regS").value);
        }

        this.props.smokingHabitChange(smokinggHabits);
    }


    render() {

            let smokinggHabits = this.props.smokinggHabits;
            if(smokinggHabits === null || smokinggHabits === undefined) {
                smokinggHabits = "";
            }

            return (
                <div>                   
                    <div>                     
                        <div className="filterLeft">
                            <input type="checkbox" id="nonS" value="N"  checked={smokinggHabits.includes("N")} value="N" onChange={this.handleInputChange} />Non-smoker
                        </div>
                        <div className="filterRight">
                            <input type="checkbox" id="regS" value="R"  checked={smokinggHabits.includes("R")} value="R" onChange={this.handleInputChange}/>Regular Smoker
                        </div>                        
                    </div> 
                    <div>                            
                        <div>
                            <input type="checkbox" id="lightS" value="L"  checked={smokinggHabits.includes("L")} value="L" onChange={this.handleInputChange}/>Light/Social Smoker
                        </div>                      
                    </div>                    
                </div>
            );
    }
}

export default SmokingHabits;