import React, {Component} from 'react';

class SmokingHabits extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let smokingHabits = [];

        if(document.getElementById("nonS").checked) {
            smokingHabits.push(document.getElementById("nonS").value);
        }

        if(document.getElementById("lightS").checked) {
            smokingHabits.push(document.getElementById("lightS").value);
        }

        if(document.getElementById("regS").checked) {
            smokingHabits.push(document.getElementById("regS").value);
        }

        this.props.smokingHabitChange(smokingHabits);
    }


    render() {

            let smokingHabits = this.props.smokingHabits;
            if(smokingHabits === null || smokingHabits === undefined) {
                smokingHabits = "";
            }

            return (
                <div>                   
                    <div>                     
                        <div className="filterLeft">
                            <input type="checkbox" id="nonS" value="N"  checked={smokingHabits.includes("N")} value="N" onChange={this.handleInputChange} />Non-smoker
                        </div>
                        <div className="filterRight">
                            <input type="checkbox" id="regS" value="R"  checked={smokingHabits.includes("R")} value="R" onChange={this.handleInputChange}/>Regular Smoker
                        </div>                        
                    </div> 
                    <div>                            
                        <div>
                            <input type="checkbox" id="lightS" value="L"  checked={smokingHabits.includes("L")} value="L" onChange={this.handleInputChange}/>Light/Social Smoker
                        </div>                      
                    </div>                    
                </div>
            );
    }
}

export default SmokingHabits;