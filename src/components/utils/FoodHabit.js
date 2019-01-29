import React, {Component} from 'react';

class FoodHabit extends Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);        
    }

    handleInputChange(event) {

        let foodHabit = "";

        foodHabit = (document.getElementById("veg").checked) ? document.getElementById("veg").value :  foodHabit;
        foodHabit = (document.getElementById("nonVeg").checked) ? foodHabit + "," + document.getElementById("nonVeg").value :  foodHabit;
        foodHabit = (document.getElementById("egg").checked) ? foodHabit + "," + document.getElementById("egg").value :  foodHabit;

        this.props.foodHabitChange(foodHabit);
    }


    render() {

            let foodHabits = this.props.foodHabits;
            if(foodHabits === null || foodHabits === undefined) {
                foodHabits = "";
            }
            console.log("foodHabits Value:" + foodHabits);

            return (
                <div>
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" id="veg" value="V"  checked={foodHabits.includes("V")} value="V" onChange={this.handleInputChange} />Vegetarian
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" id="nonVeg" value="N"  checked={foodHabits.includes("N")} value="N" onChange={this.handleInputChange}/>Non-Vegetarian
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" id="egg" value="E"  checked={foodHabits.includes("E")} value="E" onChange={this.handleInputChange}/>Eggetarian
                            </div>                          
                        </div> 
                </div>
            );
    }
}

export default FoodHabit;