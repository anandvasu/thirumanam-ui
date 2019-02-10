import React, {Component} from 'react';
import './Preference.css';
import TopBar from '../../components/menu/TopBar';
import Footer from '../../components/footer/Footer';
import Age from '../../components/utils/Age';
import Height from '../../components/utils/Height';
import MaritalStatus from '../../components/utils/MaritalStatus';
import FoodHabit from '../../components/utils/FoodHabit';
import ReligionMultiSelect from '../../components/utils/ReligionMultiSelect';
import ApiConstant from '../../components/utils/ApiConstant';
import axios from 'axios';
import {toast} from 'react-toastify';
import CountryMultiSelect from '../../components/utils/CountryMultiSelect';
import IndiaStateMultiSelect from '../../components/utils/IndiaStateMultiSelect';
import CasteMultiSelect from '../../components/utils/CasteMultiSelect';
import {getValueArrFromReactSelect, convertReactSelectValues} from '../../components/utils/Util';
import DropDownConstant from '../../components/utils/DropDownConstant';


class Preference extends Component {

    constructor(props) {
        super(props);

        this.cityChange = this.cityChange.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.minHeightChange = this.minHeightChange.bind(this);
        this.maxHeightChange = this.maxHeightChange.bind(this);
        this.updatePartnerPref = this.updatePartnerPref.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.handleReligionChange = this.handleReligionChange.bind(this);
        this.handleCasteChange = this.handleCasteChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);

        this.state = {
            ageFrom:18,
            ageTo:40,           
            minHeight:0,
            maxHeight:0,
            mStatus:[],
            foodHabits:[],
            countries:[],
            states:[],
            religions:[],
            castes:[]
        }
    }

    handleReligionChange(option) {
        console.log(option);
        this.setState({
            religions: option
        });
    }

    handleCasteChange(option) {
        console.log(option);
        this.setState({
            castes: option
        });
    }

    handleCountryChange(option) {
        console.log(option);
        this.setState({
            countries: option
        });
    }

    handleStateChange(option) {
        console.log(option);
        this.setState({
            states: option
        });
    }

    componentDidMount() {
        console.log("this.props.location.state.mStatus:"+ this.props.location.state.mStatus);       
        
        this.setState({
            ageFrom:this.props.location.state.preference.ageFrom,
            ageTo:this.props.location.state.preference.ageTo,
            minHeight:this.props.location.state.preference.minHeight,
            maxHeight:this.props.location.state.preference.maxHeight,
            mStatus:this.props.location.state.preference.mStatus,
            foodHabits:this.props.location.state.preference.foodHabits,
            countries:convertReactSelectValues(this.props.location.state.preference.countries, DropDownConstant.countries),
            states:convertReactSelectValues(this.props.location.state.preference.states, DropDownConstant.indiaStates),
            religions:convertReactSelectValues(this.props.location.state.preference.religions, DropDownConstant.regilionValues)            
        });
    }

    maritalStatusChange(maritalStatus) {                
        this.setState({
            mStatus:maritalStatus
        });        
    }

    ageFromChange(event) {
        console.log("Age from change called");
        this.setState({
            ageFrom:event.target.value
        });
    }

    ageToChange(event) {
        this.setState({
            ageTo:event.target.value
        });
    }

    cityChange(event) {
        this.setState({
            city:event.target.value
        });
    }

    minHeightChange(event) {
        this.setState({
            minHeight:event.target.value
        });
    }

    maxHeightChange(event) {
        this.setState({
            maxHeight:event.target.value
        });
    }

    foodHabitChange(inputFoodHabits) {               
        this.setState({
            foodHabits:inputFoodHabits
        });
    }

     updatePartnerPref(event) {
        event.preventDefault();
        const profileId = sessionStorage.getItem("profileId");  
        console.log(profileId);
        axios.put(ApiConstant.PREFERENCE_API, 
            { 
                id:profileId,
                ageFrom:this.state.ageFrom,
                ageTo:this.state.ageTo,
                mStatus:this.state.mStatus,
                city:this.state.city,
                minHeight:this.state.minHeight,
                maxHeight:this.state.maxHeight,
                foodHabits:this.state.foodHabits,  
                religions:getValueArrFromReactSelect(this.state.religions),
                castes:getValueArrFromReactSelect(this.state.castes),
                countries:getValueArrFromReactSelect(this.state.countries),              
                states:getValueArrFromReactSelect(this.state.states)      
            })
            .then((res) => {
                console.log(res);                
                toast.success("Preferences Saved Successfully", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });
            }) .catch((error) => {
                console.log(error);
                toast.error("Server Error Occurred. Please try again", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });
            
            });
       
    }
     
    render() {
        console.log("preference render");
        return(
            <div>
                <TopBar />
               <div className='hs50' />   
               <div className="prefSectionContainer">
                    <div className="prefHeader">
                        <b>Basic Preferences</b>
                    </div>
                    <div className='hs20' />
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Age
                        </div>
                        <div className="prefDataDiv">
                            <Age
                                ageFrom = {this.state.ageFrom}
                                ageTo = {this.state.ageTo}
                                ageFromChange={this.ageFromChange}
                                ageToChange={this.ageToChange}
                            />
                        </div>
                    </div>
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Height
                        </div>
                        <div className="prefDataDiv">
                        <Height 
                                minHeight = {this.state.minHeight}
                                maxHeight = {this.state.maxHeight}
                                minHeightChange={this.minHeightChange}
                                maxHeightChange={this.maxHeightChange}
                        />
                        </div>
                    </div>   
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Marital Status
                        </div>
                        <div className="prefDataDiv">
                        <MaritalStatus 
                            mStatus = {this.state.mStatus}
                            maritalStatusChange={this.maritalStatusChange}
                        />
                        </div>
                    </div>      
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Food Habits
                        </div>
                        <div className="prefDataDiv">
                        <FoodHabit 
                            foodHabits = {this.state.foodHabits}
                            foodHabitChange = {this.foodHabitChange}
                        />
                        </div>
                    </div>  
                </div>    
                <div className='hs30' />
                <div className="prefSectionContainer">
                    <div className="prefHeader">
                        <b>Religion Preferences</b>
                    </div>
                    <div className='hs20' />
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Religion
                        </div>
                        <div className="prefDataDiv">
                            <ReligionMultiSelect
                                handleReligionChange = {this.handleReligionChange}
                                religions = {this.state.religions}
                            />
                        </div>
                    </div>
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Caste
                        </div>
                        <div className="prefDataDiv">
                            <CasteMultiSelect 
                                 handleCasteChange = {this.handleCasteChange}
                                 castes = {this.state.castes}
                            />
                        </div>
                    </div>                      
                </div>  

                <div className='hs30' />
                <div className="prefSectionContainer">
                    <div className="prefHeader">
                        <b>Location Preferences</b>
                    </div>
                    <div className='hs20' />
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            Country Living In
                        </div>
                        <div className="prefDataDiv">
                           <CountryMultiSelect 
                                 handleCountryChange = {this.handleCountryChange}
                                 countries = {this.state.countries}
                           />
                        </div>
                    </div>
                    <div className="prefDataRow">
                        <div className="prefLableDiv">
                            State
                        </div>
                        <div className="prefDataDiv">
                           <IndiaStateMultiSelect
                                handleStateChange = {this.handleStateChange}
                                states = {this.state.states}
                           />
                        </div>
                    </div>                                        
                </div>   
                <div className="hs10" />
                <div>
                    <button onClick={this.updatePartnerPref}>Submit</button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Preference;