import React, {Component} from 'react';
import './Filter.css';
import Height from '../utils/Height';
import MaritalStatus from '../utils/MaritalStatus';
import Education from '../utils/Education';
import Occupation from '../utils/Occupation';
import BodyType from '../utils/BodyType';
import FoodHabit from '../utils/FoodHabit';
import Age from '../utils/Age';

class Filter extends Component {

    constructor() {
        super();

        this.genderChange = this.genderChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.clearFilters = this.clearFilters.bind(this);
    }

    clearFilters() {
        alert("test");
    }

    ageFromChange(event) {       
        this.props.ageFromChange(event.target.value);       
    }

    ageToChange(event) {
        this.props.ageToChange(event.target.value);
    }

    genderChange(event) {
        this.setState({gender:event.target.value});
    }

    maritalStatusChange(mStatusValue) {
        this.props.maritalStatusChange(mStatusValue);
    }

    searchClicked() {
        this.setState({searchClicked:true});
    }    

    render () {

        return (
            <div className="filterParent">
                <div className="header2">
                    <div className="inlineLeft50Per"><label>Filter Profiles</label></div>
                    <div className="clearAllFilter">
                       <a href="#" onClick={this.clearFilters}>[Clear Filters]</a>&nbsp;&nbsp;
                    </div>
                </div>
                 <div className="header3Parent">
                                <div className="header3"><label>Age</label></div>
                                <div className="filterContent">
                                    <Age 
                                        ageFrom = {this.props.ageFrom}
                                        ageTo = {this.props.ageTo}
                                        ageFromChange={this.ageFromChange}
                                        ageToChange={this.ageToChange}
                                    />
                                </div>                             
                            </div>
                            <div className="header3Parent">
                                    <div className="header3">
                                        <label>Height</label>
                                    </div>
                                    <div className="filterContent"> 
                                        <Height />
                                    </div>                                
                            </div>
                            <div className="header3Parent">
                                <Education />
                            </div>
                            <div className="header3Parent">
                                <div className="header3"><label>Marital Status</label></div>
                                <div className="filterContent">   
                                    <MaritalStatus 
                                        maritalStatusChange = {this.maritalStatusChange}
                                    />
                                </div>
                            </div>
                            <div className="header3Parent">
                                <Occupation />
                            </div>   
                            <div className="header3Parent">
                                <BodyType />
                            </div>   
                            <div>
                                <div className="header3"><label>Food Habit</label></div>
                                <div className="filterContent">   
                                    <FoodHabit />
                                </div>        
                            </div>               
            </div>
        );
    }
}

export default Filter;