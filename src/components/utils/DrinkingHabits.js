import React, {Component} from 'react';

class DrinkingHabits extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let drinkingHabits = [];

        if(document.getElementById("nonD").checked) {
            drinkingHabits.push(document.getElementById("nonD").value);
        }

        if(document.getElementById("lightD").checked) {
            drinkingHabits.push(document.getElementById("lightD").value);
        }

        if(document.getElementById("regD").checked) {
            drinkingHabits.push(document.getElementById("regD").value);
        }

        this.props.drinkingHabitChange(drinkingHabits);
    }


    render() {

            let drinkingHabits = this.props.drinkingHabits;
            if(drinkingHabits === null || drinkingHabits === undefined) {
                drinkingHabits = "";
            }

            return (
                <div>                   
                    <div>                     
                        <div className="filterLeft">
                            <input type="checkbox" id="nonD" value="N"  checked={drinkingHabits.includes("N")} value="N" onChange={this.handleInputChange} />Non-Drinker
                        </div>
                        <div className="filterRight">
                            <input type="checkbox" id="regD" value="V"  checked={drinkingHabits.includes("R")} value="R" onChange={this.handleInputChange}/>Regular Drinker
                        </div> 
                    </div> 
                    <div> 
                        <div>
                            <input type="checkbox" id="lightD" value="L"  checked={drinkingHabits.includes("L")} value="L" onChange={this.handleInputChange}/>Light/Social Drinker
                        </div>                                                 
                    </div>                    
                </div>
            );
    }
}

export default DrinkingHabits;