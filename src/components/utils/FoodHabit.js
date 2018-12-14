import React, {Component} from 'react';

class FoodHabit extends Component {

    render () {
        return (
            <div className="heightParentDiv">
                <div className="header3"><label>Food Habit</label></div>
                <div className="filterContent">    
                        <div>                     
                            <div className="filterLeft">
                                <input type="checkbox" value="V"/>Vegetarian
                            </div>
                            <div className="filterRight">
                                <input type="checkbox" value="N"/>Non-Vegetarian
                            </div>
                        </div> 
                        <div> 
                            <div className="filterLeft">
                                <input type="checkbox" value="E"/>Eggetarian
                            </div>                          
                        </div> 
                </div>
            </div>
        );
    }
}

export default FoodHabit;