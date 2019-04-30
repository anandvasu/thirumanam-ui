import React from 'react';
import Age from '../utils/Age';
import Height from '../utils/Height';
import MaritalStatus from '../utils/MaritalStatus';
import OccupationMultiSelect from '../utils/OccupationMultiSelect';
import BodyType from '../utils/BodyType';
import FoodHabit from '../utils/FoodHabit';
import ShowProfileSelect from '../utils/ShowProfileSelect';
import './Filter.css';
import EducationMultiSelect from '../utils/EducationMultiSelect';
import ReligionMultiSelect from '../utils/ReligionMultiSelect';
import CasteMultiSelect from '../utils/CasteMultiSelect';
import GothramMultiSelect from '../utils/GothramMultiSelect';
import DhoshamMultiSelect from '../utils/DhoshamMultiSelect';
import CountryMultiSelect from '../utils/CountryMultiSelect';
import StateMultiSelect from '../utils/StateMultiSelect';
import DistrictMultiSelect from '../utils/DistrictMultiSelect';
import IncomeSelect from '../utils/IncomeSelect';
import SmokingHabits from '../utils/SmokingHabits';
import DrinkingHabits from '../utils/DrinkingHabits';
import MotherTongueMultiSelect from '../utils/MotherTongueMultiSelect';

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
                    <div className="header3"><label>Show Profile</label></div>
                    <div className="filterContent">
                            <ShowProfileSelect 
                                showProfileChange={props.showProfileChange}
                                showProfile={props.showProfile}
                            />                                  
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
                    <div className="header3"><label>Mother Tongue</label></div>
                    <div className="filterContentMSelect">   
                            <MotherTongueMultiSelect
                                handleMTongueChange = {props.handleMTongueChange}
                                mtongues = {props.mtongues}
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
                    <div className="header3"><label>Religion</label></div>
                    <div className="filterContentMSelect">  
                    <ReligionMultiSelect 
                         religions = {props.religions}
                         handleReligionChange = {props.handleReligionChange}
                    />
                    </div>
                </div>                
                <div className="header3Parent">
                    <div className="header3"><label>Caste</label></div>
                    <div className="filterContentMSelect">
                    <CasteMultiSelect 
                        religions = {props.religions}
                        castes = {props.castes}
                        handleCasteChange = {props.handleCasteChange}
                    />
                    </div>
                </div>    
                <div className="header3Parent">
                    <div className="header3"><label>Gothram</label></div>
                    <div className="filterContentMSelect">
                    <GothramMultiSelect 
                        gothrams = {props.gothrams}
                        handleGothramChange = {props.handleGothramChange}
                    />
                    </div>
                </div>    
                <div className="header3Parent">
                    <div className="header3"><label>Dhosham</label></div>
                    <div className="filterContentMSelect">
                    <DhoshamMultiSelect 
                        dhoshams = {props.dhoshams}
                        handleDhoshamChange = {props.handleDhoshamChange}
                    />
                    </div>
                </div>    
                <div className="header3Parent">
                    <div className="header3"><label>Country</label></div>
                    <div className="filterContentMSelect">
                    <CountryMultiSelect 
                        countries = {props.countries}
                        handleCountryChange = {props.handleCountryChange}
                    />
                    </div>
                </div>  
                <div className="header3Parent">
                    <div className="header3"><label>State</label></div>
                    <div className="filterContentMSelect">
                    <StateMultiSelect 
                        countries = {props.countries}
                        states = {props.states}
                        handleStateChange = {props.handleStateChange}
                    />
                    </div>
                </div> 
                <div className="header3Parent">
                    <div className="header3"><label>District</label></div>
                    <div className="filterContentMSelect">
                    <DistrictMultiSelect 
                        states = {props.states}
                        districts = {props.districts}
                        handleDistrictChange = {props.handleDistrictChange}
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
                    <div className="header3"><label>Occupation</label></div>
                    <div className="filterContentMSelect">  
                        <OccupationMultiSelect 
                                 occupations = {props.occupations}
                                 handleOccupationChange = {props.handleOccupationChange}
                            />
                    </div>
                </div>   
                <div className="header3Parent">
                    <div className="header3"><label>Income</label></div>
                    <div className="filterContentMSelect">  
                        <IncomeSelect 
                            incomeObj = {props.incomeObj}
                            handleIncomeChange = {props.handleIncomeChange}
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
                    <div className="header3"><label>Smoking Habit</label></div>
                    <div className="filterContent">   
                        <SmokingHabits 
                           smokingHabits = {props.smokingHabits}
                           smokingHabitChange = {props.smokingHabitChange}
                        />
                    </div>        
                </div> 
                <div className="header3Parent">
                    <div className="header3"><label>Drinking Habit</label></div>
                    <div className="filterContent">   
                        <DrinkingHabits 
                            drinkingHabits = {props.drinkingHabits}
                            drinkingHabitChange = {props.drinkingHabitChange}
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