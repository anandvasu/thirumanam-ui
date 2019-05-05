import React, {Component} from 'react';
import ProfileSummary from '../profile/ProfileSummary';
import axios from 'axios';
import Filter from '../search/Filter';
import Modal from '../modal/Modal';
import Footer from '../../components/footer/Footer';
import './Results.css';
import RegisterWithLogin from '../register/RegisterWithLogin';
import ApiConstant from '../../components/utils/ApiConstant';
import Constant from '../utils/Constant';
import TopMenu from '../menu/TopMenu';
import {getValueArrFromReactSelect,formatDate, getValueFromReactSelect} from '../../components/utils/Util';

class Results extends Component {

    constructor(props) {
        super(props);

        this.handlePageClick = this.handlePageClick.bind(this);
        this.profileClick = this.profileClick.bind(this);
        this.profileCloseHandler = this.profileCloseHandler.bind(this);
        this.ageToChange = this.ageToChange.bind(this);
        this.ageFromChange = this.ageFromChange.bind(this);
        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.loginClickHandler = this.loginClickHandler.bind(this);
        this.applyFilter = this.applyFilter.bind(this);       
        this.bodyTypesChange = this.bodyTypesChange.bind(this);       
        this.showProfileChange = this.showProfileChange.bind(this);          
        this.handleMTongueChange = this.handleMTongueChange.bind(this);     
        this.minHeightChange = this.minHeightChange.bind(this); 
        this.maxHeightChange = this.maxHeightChange.bind(this); 

        this.handleReligionChange = this.handleReligionChange.bind(this);        
        this.handleCasteChange = this.handleCasteChange.bind(this);        
        this.handleGothramChange = this.handleGothramChange.bind(this);        
        this.handleDhoshamChange = this.handleDhoshamChange.bind(this);  
        
        this.handleCountryChange = this.handleCountryChange.bind(this);  
        this.handleStateChange = this.handleStateChange.bind(this);  
        this.handleDistrictChange = this.handleDistrictChange.bind(this);  

        this.handleEducationChange = this.handleEducationChange.bind(this);      
        this.handleOccupationChange = this.handleOccupationChange.bind(this);
        this.handleIncomeChange = this.handleIncomeChange.bind(this);   
        this.handleEmploymentChange = this.handleEmploymentChange.bind(this); 

        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.smokingHabitChange = this.smokingHabitChange.bind(this);    
        this.drinkingHabitChange = this.drinkingHabitChange.bind(this);

        this.state = {
            showProfile:[],
            ageFrom:Constant.ageFrom,
            ageTo:Constant.ageTo,
            minHeight:Constant.minHeight,
            maxHeight:Constant.maxHeight,
            data: null,
            pictures: [],
            pages: [],
            totalDocs: 0,
            pageNo: 1,
            docsPerPage: 10,
            profile:'',
            profileClicked:false,
            registerDisplay:false,
            gender:((sessionStorage.getItem(Constant.USER_GENDER)===Constant.genderM) ? Constant.genderF : Constant.genderM),
            mStatus:[],
            religions:[],            
            bodyTypes:[],
            religions:[],
            castes:[],
            gothrams:[],
            dhoshams:[],
            countries:[],
            states:[],
            districts:[],
            educations:[],
            occupations:[],
            employments:[],
            incomeObj:"",
            foodHabits:[],
            drinkingHabits:[],
            smokingHabits:[],
            mtongues:[]            
        };
    }

    componentDidMount() {

        const ageFrom = this.props.location.state.ageFrom;
        const ageTo = this.props.location.state.ageTo;        
        const minHeight = this.props.location.state.minHeight;
        const maxHeight = this.props.location.state.maxHeight;
        const gender = this.props.location.state.gender;
        const mStatus = this.props.location.state.mStatus;
        let showProfile = [];  
        let bodyTypes = [];
        let mtongues = [];       

        let religions = [];
        let castes = [];
        let gothrams = [];
        let dhoshams = [];

        let countries = [];
        let states = [];
        let districts = [];

        let educations = [];   
        let occupations = [];
        let employments = [];
        let incomeObj = [];

        let foodHabits = [];
        let smokingHabits = [];
        let drinkingHabits = [];


        if(this.props.location.state.fromPage === "MyMatch" || this.props.location.state.fromPage === "D") {
            religions = this.props.location.state.religions;                
        } 

        if(this.props.location.state.fromPage === "B" ||
            this.props.location.state.fromPage === "A"
            ) {            
            religions = this.props.location.state.religions;   
            educations = this.props.location.state.educations;    
            showProfile = this.props.location.state.showProfile;   
            mtongues = this.props.location.state.mtongues;        
            countries = this.props.location.state.countries;    
            states = this.props.location.state.states;    
            districts = this.props.location.state.districts;   
            castes = this.props.location.state.castes;    
        }

        if(this.props.location.state.fromPage === "A") {   
            gothrams = this.props.location.state.gothrams;    
            dhoshams = this.props.location.state.dhoshams;     
            occupations = this.props.location.state.occupations;
            employments = this.props.location.state.employments;
            incomeObj = this.props.location.state.incomeObj;
            foodHabits = this.props.location.state.foodHabits;
            smokingHabits = this.props.location.state.smokingHabits;
            drinkingHabits = this.props.location.state.drinkingHabits;
        }

        this.setState({
            showProfile:showProfile,
            ageFrom:ageFrom, 
            ageTo:ageTo, 
            minHeight:minHeight, 
            maxHeight:maxHeight, 
            gender:gender,
            mStatus:mStatus,
            religions:religions,           
            castes:castes,
            gothrams:gothrams,
            dhoshams:dhoshams,
            countries:countries,
            states:states,
            districts:districts,
            educations:educations,
            occupations:occupations,
            employments:employments,
            incomeObj:incomeObj,
            mtongues:mtongues,
            foodHabits:foodHabits,
            smokingHabits:smokingHabits,
            drinkingHabits:drinkingHabits,
        });
        
        this.searchProfile(
            showProfile,
            ageFrom, 
            ageTo, 
            minHeight,
            maxHeight,
            gender,
            mStatus,
            religions,
            foodHabits,
            bodyTypes,
            occupations,
            educations,
            castes,
            gothrams,
            dhoshams,
            countries,
            states,
            districts,
            incomeObj,
            mtongues,
            smokingHabits,
            drinkingHabits,
            employments,
            1,
            false
        );    
    }

    applyFilter() {
        this.searchProfile(
            this.state.showProfile,
            this.state.ageFrom, 
            this.state.ageTo, 
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender,
            this.state.mStatus,
            this.state.religions,
            this.state.foodHabits,
            this.state.bodyTypes,
            this.state.occupations,
            this.state.educations,
            this.state.castes,
            this.state.gothrams,
            this.state.dhoshams,
            this.state.countries,
            this.state.states,
            this.state.districts,
            this.state.incomeObj,
            this.state.mtongues,
            this.state.smokingHabits,
            this.state.drinkingHabits,
            this.state.employments,
            1,
            false
        ); 
    }

    clearFilters() {

    }

    profileClick(profileId) {

        if (sessionStorage.getItem(Constant.USER_PROFILE_ID) != null) {

            axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                .then(res => {
                    this.props.history.push({
                        pathname: '/viewProfile',
                        state: {
                            profile:res.data 
                        }
                    });
            });
        } else {
            this.setState(
                {
                    registerDisplay:true
                }
            );
        }
    }

    searchProfile(
        aShowProfile,
        ageGrater,
        ageLess, 
        minHeight,
        maxHeight,
        aGender, 
        aMstatus, 
        aReligions,
        aFoodHabits,
        abodyTypes,
        aOccupation,
        aEducation,
        aCastes,
        aGothrams,
        aDhoshams,
        aCountries,
        aStates,
        aDistricts,
        aIncomeObj,
        aMtongues,
        aSmokingHabits,
        aDrinkingHabits,
        aEmployments,
        pageNumber,
        pageClick) {
        var totalDocs = 0;
        axios.post(ApiConstant.USER_SEARCH_API, { 
            loggedInUserId:sessionStorage.getItem(Constant.USER_PROFILE_ID),
            showProfile:aShowProfile,
            ageGreater:ageGrater,
            ageLess:ageLess,
            minHeight:minHeight,
            maxHeight:maxHeight,
            gender:aGender,
            maritalStatus:aMstatus,
            totalDocs:this.state.totalDocs,
            foodHabits:aFoodHabits,
            bodyTypes:abodyTypes,
            religions:getValueArrFromReactSelect(aReligions),      
            castes:getValueArrFromReactSelect(aCastes),       
            gothrams:getValueArrFromReactSelect(aGothrams),   
            dhoshams:getValueArrFromReactSelect(aDhoshams),   
            countries:getValueArrFromReactSelect(aCountries), 
            states:getValueArrFromReactSelect(aStates), 
            districts:getValueArrFromReactSelect(aDistricts), 
            educations: getValueArrFromReactSelect(aEducation),
            occupations: getValueArrFromReactSelect(aOccupation),
            income: getValueFromReactSelect(aIncomeObj),
            mtongues:getValueArrFromReactSelect(aMtongues),
            smokingHabits:aSmokingHabits,
            drinkingHabits:aDrinkingHabits,
            employments:aEmployments,
            pageNumber:pageNumber,
            pageClick:pageClick
         })
         .then(function (res) {
             totalDocs = res.headers["x-total-docs"]; 
             return res.data;
         })
         .then((data) => {             
             this.setState({
                 data:data,
                 totalDocs:totalDocs
             });             
             if (data.length > 0) {
                this.displayResults(pageNumber);
                document.getElementById("searchResultCount").style.display = "block";
             } else {
                const content = <div> Sorry. No Profiles Found. </div>
                document.getElementById("searchResultCount").style.display = "none";
                this.setState({pictures:content});
                this.setState({pages:""});
             }
         });
    }

    displayResults(pageNumber) {
        this.setState({pageNo:pageNumber});
        const startNumber = (pageNumber - 1) * this.state.docsPerPage;
        let maxDocs = startNumber + this.state.docsPerPage;
        if((startNumber + this.state.docsPerPage) > this.state.totalDocs) {
            maxDocs = this.state.totalDocs;
        }
        
        let picData = this.state.data;
     
        //for (let i= startNumber; i < maxDocs; i ++) {

           // console.log(this.state.data[i]);

            //let results = this.state.data[i];
           // console.log("results"+ results);
           // picData.push(results);
       // }

        let pictures = picData.map((data) => {

            return (
                <div key={data.id}>
                    <ProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.thumbImage}
                        profileClick = {this.profileClick}
                        gender = {data.gender}
                        education = {data.education}
                        city = {data.city}
                        bDate = {formatDate(data.bDay, data.bMonth, data.bYear)}
                        protectImage = {data.protectImage}
                    />
                    <span>&nbsp;&nbsp;</span>
                </div>
            );
        });

        this.setState({pictures:pictures});
        this.displayPageNumbers(pageNumber);
    }

    displayPageNumbers(pageNumber) {
        const pages = Math.ceil(this.state.totalDocs/this.state.docsPerPage);
        let pageStart = 1;
        if (pages > 5 ) {
            if ((parseInt(pageNumber) + 4) < pages) {
                pageStart = pageNumber;                              
            } else {
                pageStart = pages - 4;
            }
        }
        let pageContents = [];
        let counter = 1;
        pageContents.push(<button onClick={this.handlePageClick} key="firstPage" value="First" className="pageButton">First</button>);
        pageContents.push(<span key='firstPageSpan'>&nbsp;</span>);
        for (let i= pageStart; i < (pages + 1); i ++ ) {
            pageContents.push(<button onClick={this.handlePageClick} key={'page'+i} value={i} className="pageButton">{i}</button>);
            pageContents.push(<span key={'spanpage'+i}>&nbsp;</span>);
            counter++;
            if(counter === 6) {
                break;
            }
        }
        pageContents.push(<button onClick={this.handlePageClick} key="lastPage" value="Last" className="pageButton">Last</button>);
        this.setState({pages:pageContents});
    }

    handlePageClick(event) {
        event.preventDefault();
        let pageNumber = 1;
        if (event.target.value === "First") {
            pageNumber = 1;
        } else if (event.target.value === "Last") {
            const lastPage = this.state.totalDocs/this.state.docsPerPage;
            pageNumber = Math.ceil(lastPage);
        } else {
            pageNumber = event.target.value;
        }
        //this.displayResults(pageNumber);
        this.searchProfile(
            this.state.showProfile,
            this.state.ageFrom,
            this.state.ageTo,
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender,
            this.state.mStatus,
            this.state.religions,
            this.state.foodHabits,
            this.state.bodyTypes,
            this.state.occupation,
            this.state.education,
            this.state.castes,
            this.state.gothrams,
            this.state.dhoshams,
            this.state.countries,
            this.state.states,
            this.state.districts,
            this.state.incomeObj,
            this.state.mtongues,
            this.state.smokingHabits,
            this.state.drinkingHabits,
            this.state.employments,
            pageNumber,
            true
        );
    }

    getFormData() {
        
    }

    showProfileChange(value) {
        this.setState({showProfile:value});
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

    ageToChange (event){
        this.setState({
            ageTo:event.target.value
        });            
    }

    ageFromChange(event) {
        this.setState({
            ageFrom:event.target.value
        });         
    }

    maritalStatusChange (value) {
        this.setState({
            mStatus:value
        });   
    }     

    educationChange(inputEducation) {
        this.setState({
            education:inputEducation
        }); 
    }

    handleMTongueChange(option) {
        this.setState({
            mtongues: option
        });
    }


    bodyTypesChange(inputBodyTypes) {
        this.setState({
            bodyTypes:inputBodyTypes
        });
    }

    foodHabitChange(inputFoodHabits) {
        this.setState({
            foodHabits:inputFoodHabits
        });
    }

    smokingHabitChange(inputHabits) {
        this.setState({
            smokingHabits:inputHabits
        });
    }

    drinkingHabitChange(inputHabits) {
        this.setState({
            drinkingHabits:inputHabits
        });
    }

    handleEducationChange(inputEducation) {
        this.setState({
            educations:inputEducation
        }); 
    }

    handleOccupationChange(option) {
        this.setState({
            occupations:option
        }); 
    }

    handleIncomeChange(option) {
        this.setState({
            incomeObj:option
        });
    }

    handleEmploymentChange(value) {
        this.setState({
            employments:value
        });
    }

    handleReligionChange(option) {
        this.setState({
            religions: option
        });
    }

    handleCasteChange(option) {
        this.setState({
            castes: option
        });
    }

    handleGothramChange(option) {
        this.setState({
            gothrams: option
        });
    }

    handleDhoshamChange(option) {
        this.setState({
            dhoshams: option
        });
    }

    handleCountryChange(option) {
        this.setState({
            countries: option
        });
    }

    handleStateChange(option) {
        this.setState({
            states: option
        });
    }

    handleDistrictChange(option) {
        this.setState({
            districts: option
        });
    }

    profileCloseHandler() {
        this.setState({
            profileClicked:false
        });
    }

    loginClickHandler() {
        this.props.history.push('/ilogin');
    }
    
    render () {
        return (
            <div>
                <TopMenu 
                    homePage="false"
                /> 
                <div className="hs100" />                       
                <Modal show={this.state.registerDisplay}
                        className="RegisterModal">   
                        <RegisterWithLogin 
                            loginClick = {this.loginClickHandler}
                        /> 
                 </Modal>                                     
                <div className="resultsContainer">                                       
                            <div className="filtersection">
                                <Filter 
                                    showProfile = {this.state.showProfile}
                                    showProfileChange = {this.showProfileChange}
                                    ageFrom = {this.state.ageFrom}
                                    ageTo = {this.state.ageTo}
                                    ageToChange = {this.ageToChange}
                                    ageFromChange = {this.ageFromChange}
                                    minHeight = {this.state.minHeight}
                                    maxHeight = {this.state.maxHeight}
                                    mStatus = {this.state.mStatus}
                                    minHeightChange = {this.minHeightChange}
                                    maxHeightChange = {this.maxHeighthange}
                                    handleMTongueChange = {this.handleMTongueChange}
                                    mtongues = {this.state.mtongues}
                                    maritalStatusChange = {this.maritalStatusChange}
                                    applyFilter = {this.applyFilter}
                                    clearFilters = {this.clearFilters}
                                    foodHabits = {this.state.foodHabits}
                                    foodHabitChange = {this.foodHabitChange}
                                    bodyTypes = {this.state.bodyTypes}
                                    bodyTypesChange = {this.bodyTypesChange}  
                                    religions = {this.state.religions}
                                    handleReligionChange = {this.handleReligionChange}
                                    castes = {this.state.castes}
                                    handleCasteChange = {this.handleCasteChange}
                                    gothrams = {this.state.gothrams}
                                    handleGothramChange = {this.handleGothramChange}
                                    dhoshams = {this.state.dhoshams}
                                    handleDhoshamChange = {this.handleDhoshamChange}
                                    countries = {this.state.countries}
                                    handleCountryChange = {this.handleCountryChange}
                                    states = {this.state.states}
                                    handleStateChange = {this.handleStateChange}
                                    districts = {this.state.districts}
                                    handleDistrictChange = {this.handleDistrictChange}
                                    educations = {this.state.educations}
                                    handleEducationChange = {this.handleEducationChange}
                                    employments = {this.state.employments}
                                    handleEmploymentChange = {this.handleEmploymentChange}
                                    occupations = {this.state.occupations}
                                    handleOccupationChange = {this.handleOccupationChange}
                                    incomeObj = {this.state.incomeObj}
                                    handleIncomeChange = {this.handleIncomeChange}
                                    smokingHabits = {this.state.smokingHabits}
                                    smokingHabitChange = {this.smokingHabitChange}
                                    drinkingHabits = {this.state.drinkingHabits}
                                    drinkingHabitChange = {this.drinkingHabitChange}
                                />
                            </div>

                            <div className="vs20" />

                            <div key="resultContent" className="resultsection">
                                
                                <div key="pageNagivationtop" className="pageNavContainer">
                                    <div className="searchResultsCount" id="searchResultCount">
                                        Search Results ({this.state.totalDocs}) 
                                    </div>
                                    <div  className="pageNavigation">
                                            {this.state.pages}
                                    </div>
                                </div>                                   

                                <div className="hs10" />

                                <div key="profileResults" className="profileResults">
                                    {this.state.pictures}
                                </div>                             

                                <div key="pageNagivationBottom" className="pageNavContainer">
                                    <div className="searchResultsCount">                                        
                                    </div>
                                    <div  className="pageNavigation" >
                                            {this.state.pages}
                                    </div>
                                </div>
                            </div>                    
                 </div>
                 <div className="hs30" />
                 <Footer />                 
            </div>
            
        );
    }
}

export default Results;