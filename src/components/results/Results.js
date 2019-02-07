import React, {Component} from 'react';
import ProfileSummary from './profile/ProfileSummary';
import axios from 'axios';
import Filter from '../search/Filter';
import TopMenu from '../menu/TopMenu';
import Modal from '../modal/Modal';
import Profile from '../../components/results/profile/Profile';
import Footer from '../../components/footer/Footer';
import './Results.css';
import RegisterWithLogin from '../register/RegisterWithLogin';
import Aux from '../../hoc/Aux';
import ApiConstant from '../../components/utils/ApiConstant';
import Constant from '../utils/Constant';
import DropDownConstant from '../utils/DropDownConstant';

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
               
        this.state = {
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
            gender:((sessionStorage.getItem("gender")===Constant.genderM) ? Constant.genderF : Constant.genderM),
            maritalStatus:[]
        };
    }

    componentDidMount() {

        console.log("age from comp:" + this.props.location.state.ageFrom)
        this.setState({
            ageFrom:this.props.location.state.ageFrom, 
            ageTo:this.props.location.state.ageTo, 
            minHeight:this.props.location.state.minHeight, 
            maxHeight:this.props.location.state.maxHeight, 
            gender:this.props.location.state.gender,
            mStatus:this.props.location.state.mStatus,
        });
           
        this.searchProfile(
            this.props.location.state.ageFrom, 
            this.props.location.state.ageTo, 
            this.props.location.state.minHeight,
            this.props.location.state.maxHeight,
            this.props.location.state.gender,
            this.props.location.state.mStatus,
            1
        );      
    }

    profileClick(profileId) {

        if (sessionStorage.getItem("userSession") != null) {

            axios.get(ApiConstant.USER_API+profileId)
                .then(res => {
                    console.log(res);
                    this.setState(
                        {
                            profile:res.data,
                            profileClicked:true
                        }
                    );
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
        ageGrater,
        ageLess, 
        minHeight,
        maxHeight,
        aGender, 
        aMstatus, 
        pageNumber) {
        console.log("in searchProfile");    
        console.log(aMstatus);
        var totalDocs = 0;
        axios.post(ApiConstant.QUICK_SEARCH_API, { 
            ageGreater:ageGrater,
            ageLess:ageLess,
            minHeight:minHeight,
            maxHeight:maxHeight,
            gender:aGender,
            maritalStatus:aMstatus,
            totalDocs:this.state.totalDocs,
            pageNumber:pageNumber 
             })
         .then(function (res) {
             console.log(res);
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
             } else {
                 const content = <div> Sorry. No Profiles Found. </div>
                this.setState({pictures:content});
                this.setState({pages:""});
             }
         });
    }

    formatMonth(aMonth) {
        switch(aMonth) {
            case 1:
                return "Jan" ;
            case 2:
                return "Feb" ;
            case 3:
                return "Mar" ;
            case 4:
                return "Apr" ;
            case 5:
                return "May" ;
            case 6:
                return "Jun" ;
            case 7:
                return "July" ;
            case 8:
                return "Aug" ;
            case 9:
                return "Sep" ;
            case 11:
                return "Oct" ;
            case 12:
                return "Nov" ;
            case 13:
                return "Dec" ;
            default:
                return null;
        }
    }

    formatDate(aDay, aMonth, aYear) {
        return aDay.toString().padStart(2, '0') + "-" + this.formatMonth(aMonth) + "-" + aYear;
    }

    displayResults(pageNumber) {
        console.log(this.state.data);
        this.setState({pageNo:pageNumber});
        const startNumber = (pageNumber - 1) * this.state.docsPerPage;
        let maxDocs = startNumber + this.state.docsPerPage;
        if((startNumber + this.state.docsPerPage) > this.state.totalDocs) {
            maxDocs = this.state.totalDocs;
        }
        
        console.log("startNumber"+ startNumber);
        let picData = this.state.data;
     
        //for (let i= startNumber; i < maxDocs; i ++) {

           // console.log(this.state.data[i]);

            //let results = this.state.data[i];
           // console.log("results"+ results);
           // picData.push(results);
       // }

        console.log(picData);

        let pictures = picData.map((data) => {

            return (
                <div key="123">
                    <ProfileSummary 
                        id={data.id}
                        age={data.age}
                        firstName = {data.firstName}
                        lastName = {data.lastName}                        
                        email = {data.email}
                        thumbImage = {data.image}
                        profileClick = {this.profileClick}
                        gender = {data.gender}
                        bDate = {this.formatDate(data.bDay, data.bMonth, data.bYear)}
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
        console.log("pages" + pages);
        console.log("pageNumber" + pageNumber);
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
        console.log(event.target.value);
        let pageNumber = 1;
        if (event.target.value === "First") {
            pageNumber = 1;
        } else if (event.target.value === "Last") {
            const lastPage = this.state.totalDocs/this.state.docsPerPage;
            console.log("lastPage" + lastPage);
            pageNumber = Math.ceil(lastPage);
            console.log("pageNumber" + pageNumber);
        } else {
            pageNumber = event.target.value;
        }
        //this.displayResults(pageNumber);
        this.searchProfile(
            this.state.ageFrom,
            this.state.ageTo,
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender,
            this.state.maritalStatus,
            pageNumber
        );
    }

    getFormData() {
        
    }

    profileClosed(event) {

    }

    ageToChange (value){
        this.setState({
            ageTo:value
        });      
       
        this.searchProfile(
            this.state.ageFrom,
            value, 
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender, 
            this.state.maritalStatus,
            1 );
    }

    ageFromChange(value) {
        this.setState({
            ageFrom:value
        });      
       
        this.searchProfile(
            value,
            this.state.ageTo, 
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender, 
            this.state.maritalStatus,
            1 );
    }

    maritalStatusChange (value) {
        this.setState({
            maritalStatus:value
        });      
       
        this.searchProfile(
            this.state.ageFrom,
            this.state.ageTo, 
            this.state.minHeight,
            this.state.maxHeight,
            this.state.gender, 
            value,
            1);
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
            <Aux style={{textAlign:'center'}}>
             <div className="hs10" />
                 <TopMenu
                        resultsPage ={ true}
                  /> 
                 <div className="hs30" />
                 <Modal show={this.state.profileClicked} modalClosed={this.profileClosed} className="Modal">
                    <Profile
                        profile={this.state.profile}
                        closeProfile = {this.profileCloseHandler}
                    />
                 </Modal>       
                 <Modal show={this.state.registerDisplay} modalClosed={this.profileClosed} className="RegisterModal">   
                        <RegisterWithLogin 
                            loginClick = {this.loginClickHandler}
                        /> 
                 </Modal>    
               

                <div className="resultsContainer">                                       
                            <div className="filtersection">
                                <Filter 
                                    ageFrom = {this.state.ageFrom}
                                    ageTo = {this.state.ageTo}
                                    ageToChange = {this.ageToChange}
                                    ageFromChange = {this.ageFromChange}
                                    maritalStatusChange = {this.maritalStatusChange}
                                />
                            </div>

                            <div className="vs20" />

                            <div key="resultContent" className="resultsection">
                                
                                <div key="pageNagivationtop" className="pageNavContainer">
                                    <div className="searchResultsCount">
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
            </Aux>
            
        );
    }
}

export default Results;