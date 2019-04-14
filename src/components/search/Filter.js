import React from 'react';
import Age from '../utils/Age';
import Height from '../utils/Height';
import MaritalStatus from '../utils/MaritalStatus';
import Occupation from '../utils/Occupation';
import BodyType from '../utils/BodyType';
import FoodHabit from '../utils/FoodHabit';
import './Filter.css';
import EducationMultiSelect from '../utils/EducationMultiSelect';

function filter (props) {

    return (
        <div className="filterParent">
            <div className="header2">
                <div className="inlineLeft50Per"><label>Filter Profiles</label></div>                    
            </div>
            <div style={{width:'100%',height:'50px'}}>
                <div className="clearAllFilter">
                    <a href="#" onClick={props.clearFilters}>[Clear Filters]</a>
                </div>
                <div className="inlineBlock" style={{width:'50%',paddingTop:'10px'}}>
                    <button className="filterButton" onClick={props.applyFilter}>Apply Filter</button>
                </div>
            </div>
                <div className="header3Parent">
                <div className="header3"><label>Age</label></div>
                    <div className="filterContent">
                        <Age 
                            ageFrom = {props.ageFrom}
                            ageTo = {props.ageTo}
                            ageFromChange={props.ageFromChange}
                            ageToChange={props.ageToChange}
                        />                                   
                    </div>                             
                </div>
                <div className="header3Parent">
                    <div className="header3">
                        <label>Height</label>
                    </div>
                    <div className="filterContent"> 
                        <Height 
                             minHeight = {props.minHeight}
                             maxHeight = {props.maxHeight}
                             minHeightChange={props.minHeightChange}
                             maxHeightChange={props.maxHeightChange}
                        />
                    </div>             
                </div>                
                <div className="header3Parent">
                    <div className="header3"><label>Marital Status</label></div>
                    <div className="filterContent">   
                        <MaritalStatus 
                            mStatus = {props.mStatus}
                            maritalStatusChange = {props.maritalStatusChange}
                        />
                    </div>
                </div>
                <div className="header3Parent">
                    <div className="header3"><label>Food Habit</label></div>
                    <div className="filterContent">   
                        <FoodHabit 
                            foodHabits = {props.foodHabits}
                            foodHabitChange = {props.foodHabitChange}
                        />
                    </div>        
                </div> 
                <div className="header3Parent">
                    <div className="header3"><label>Body Type</label></div>
                    <div className="filterContent">  
                        <BodyType
                            bodyTypes = {props.bodyTypes}
                            bodyTypesChange = {props.bodyTypesChange}    
                        />
                    </div>
                </div>                  
                <div className="header3Parent">
                    <div className="header3"><label>Education</label></div>
                    <div className="filterContentMSelect">  
                    <EducationMultiSelect 
                         education = {props.education}
                         educationChange = {props.educationChange}
                    />
                    </div>
                </div>                
                <div className="header3Parent">
                    <Occupation 
                        occupation = {props.occupation}
                        occupationChange = {props.occupationChange}
                    />
                </div>                    
                <div style={{width:'100%',height:'50px'}}>
                    <div className="clearAllFilter">
                        <a href="#" onClick={props.clearFilters}>[Clear Filters]</a>
                    </div>
                    <div className="inlineBlock" style={{width:'50%',paddingTop:'10px'}}>
                    <button className="filterButton" onClick={props.applyFilter}>Apply Filter</button>
                    </div>
                </div>          
        </div>
    );
}

export default filter;