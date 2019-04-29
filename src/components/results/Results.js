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
import {getValueArrFromReactSelect,formatDate} from '../../components/utils/Util';

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
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.bodyTypesChange = this.bodyTypesChange.bind(this);
        this.occupationChange = this.occupationChange.bind(this);        
        this.educationChange = this.educationChange.bind(this);   
        this.showProfileChange = this.showProfileChange.bind(this);          

        this.state = {
            showProfile:"A",
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
            foodHabits:[],
            bodyTypes:[],
            religions:[],
            castes:[],
            gothrams:[],
            dhoshams:[],
            countries:[],
            states:[],
            districts:[],
            education:[],
            occupation:[]
            
        };
    }

    componentDidMount() {

        const ageFrom = this.props.location.state.ageFrom;
        const ageTo = this.props.location.state.ageTo;        
        const minHeight = this.props.location.state.minHeight;
        const maxHeight = this.props.location.state.maxHeight;
        const gender = this.props.location.state.gender;
        const mStatus = this.props.location.state.mStatus;
        let showProfile = "A";        
        let education = [];
        let foodHabits = [];
        let bodyTypes = [];
        let occupation = [];

        let religions = [];
        let castes = [];
        let gothrams = [];
        let dhoshams = [];

        let countries = [];
        let states = [];
        let districts = [];


        if(this.props.location.state.fromPage === "MyMatch") {
            religions = this.props.location.state.religions;                
        } 

        if(this.props.location.state.fromPage === "B" ||
            this.props.location.state.fromPage === "A"
            ) {            
            religions = this.props.location.state.religions;   
            education = this.props.location.state.education;    
            showProfile = this.props.location.state.showProfile;            
        }

        if(this.props.location.state.fromPage === "A") {            
            castes = this.props.location.state.castes;   
            gothrams = this.props.location.state.gothrams;    
            dhoshams = this.props.location.state.dhoshams;            
            countries = this.props.location.state.countries;    
            states = this.props.location.state.states;    
            districts = this.props.location.state.districts;    
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
            education:education,
            castes:castes,
            gothrams:gothrams,
            dhoshams:dhoshams,
            countries:countries,
            states:states,
            districts:districts
        });
        console.log("states");
        console.log(states);
        
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
            occupation,
            education,
            castes,
            gothrams,
            dhoshams,
            countries,
            states,
            districts,
            1
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
            this.state.occupation,
            this.state.education,
            this.state.castes,
            this.state.gothrams,
            this.state.dhoshams,
            this.state.countries,
            this.state.states,
            this.state.districts,
            1
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
        pageNumber) {
        var totalDocs = 0;
        axios.post(ApiConstant.USER_SEARCH_API, { 
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
            employments:aOccupation,
            educations: getValueArrFromReactSelect(aEducation),
            pageNumber:pageNumber 
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
            pageNumber
        );
    }

    getFormData() {
        
    }

    showProfileChange(event) {
        this.setState({showProfile:event.target.value});
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

    occupationChange(inputOccupation) {
        this.setState({
            occupation:inputOccupation
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
                <div className="hs30" />                       
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
                                    maritalStatusChange = {this.maritalStatusChange}
                                    applyFilter = {this.applyFilter}
                                    clearFilters = {this.clearFilters}
                                    foodHabits = {this.state.foodHabits}
                                    foodHabitChange = {this.foodHabitChange}
                                    bodyTypes = {this.state.bodyTypes}
                                    bodyTypesChange = {this.bodyTypesChange}
                                    occupation = {this.state.occupation}
                                    occupationChange = {this.occupationChange}
                                    education = {this.state.education}
                                    educationChange = {this.educationChange}
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