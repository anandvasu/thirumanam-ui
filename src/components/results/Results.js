import React, {Component} from 'react';
import ProfileSummary from './profile/ProfileSummary';
import axios from 'axios';
import Filter from '../search/Filter';
import TopMenu from '../menu/TopMenu';
import Modal from '../modal/Modal';
import Profile from '../../components/results/profile/Profile';
import './Results.css';


class Results extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.profileClick = this.profileClick.bind(this);
        this.profileCloseHandler = this.profileCloseHandler.bind(this);
               
        //this.pageDisplay = this.pageDisplay.bind(this);
        this.state = {
            ageFrom:18,
            ageTo:35,
            data: null,
            pictures: [],
            pages: [],
            totalDocs: 0,
            pageNo: 1,
            docsPerPage: 5,
            profile:'',
            profileClicked:false
        };
    }

    componentDidMount() {
       /* axios.get ('https://randomuser.me/api/?results=500')
        .then(function (res) {
            console.log(res.data.results);
            return res.data;
        })
        .then((data) => {
            
            this.setState({data:data});
            this.setState({totalDocs:data.results.length});
            this.displayResults(1);
        });*/
        this.setState({
            ageGreater:this.props.location.state.ageFrom,
            ageLess:this.props.location.state.ageTo
        });
        this.searchProfile(this.props.location.state.ageFrom, this.props.location.state.ageTo);      
    }

    profileClick(profileId) {
        axios.get('http://localhost:8080/thirumanam/user/'+profileId)
            .then(res => {
                console.log(res);
                this.setState(
                    {
                        profile:res.data,
                        profileClicked:true
                    }
                );
        })
    }

    searchProfile(ageGrater,ageLess) {
        console.log("this.state.ageFrom" + this.state.ageFrom);
        axios.post('http://localhost:8080/thirumanam/user/list', { 
            ageGreater:ageGrater,
               ageLess:ageLess })
         .then(function (res) {
             console.log(res);
             return res.data;
         })
         .then((data) => {             
             this.setState({data:data});
             this.setState({totalDocs:data.length});
             if (data.length > 0) {
                this.displayResults(1);
             } else {
                 const content = <div> Sorry. No Profiles Found. </div>
                this.setState({pictures:content});
                this.setState({pages:""});
             }
         });
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
        let picData = [];
     
        for (let i= startNumber; i < maxDocs; i ++) {

           // console.log(this.state.data[i]);

            let results = this.state.data[i];
            console.log("results"+ results);
            picData.push(results);
        }

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
                    />
                    <span>&nbsp;&nbsp;</span>
                </div>
            );
        });

        this.setState({pictures:pictures});
        this.displayPageNumbers(pageNumber);
    }

    displayPageNumbers(pageNumber) {
        const pages = this.state.totalDocs/this.state.docsPerPage;
        let pageStart = 1;
        //console.log("pages" + pages);
       // console.log("pageNumber" + pageNumber);
        if (pages > 10 ) {
           // console.log("pages more than 10" + (pageNumber + 10));
            if ((parseInt(pageNumber) + 10) < pages) {
              // console.log("inside if");
                pageStart = pageNumber;
            } else {
                pageStart = pages - 10;
            }
        }
        let pageContents = [];
        let counter = 1;
        pageContents.push(<button onClick={this.handleClick} key="firstPage" value="Last" className="firstButton">First</button>);
        pageContents.push(<span key='firstPageSpan'>&nbsp;&nbsp;</span>);
        for (let i= pageStart; i < (pages + 1); i ++ ) {
            pageContents.push(<button onClick={this.handleClick} key={'page'+i} value={i} className="pageButton">{i}</button>);
            pageContents.push(<span key={'spanpage'+i}>&nbsp;&nbsp;</span>);
            counter++;
            if(counter == 11) {
                break;
            }
        }
        pageContents.push(<button onClick={this.handleClick} key="lastPage" value="Last" className="lastButton">Last</button>);
        this.setState({pages:pageContents});
    }

    handleClick(event) {
        event.preventDefault();
        console.log(event.target.value);
        let pageNumber = 1;
        if (event.target.value === "First") {
            pageNumber = 1;
        } else if (event.target.value === "Last") {
            pageNumber = Math.ceil(this.state.totalDocs/this.state.docsPerPage);
        } else {
            pageNumber = event.target.value;
        }
        this.displayResults(pageNumber);
    }

    getFormData() {
        
    }

    profileClosed(event) {

    }

    ageToChange = ( value ) => {
        this.setState({
            ageTo:value
        });      
       
        this.searchProfile(this.state.ageFrom, value);
    }

    ageFromChange = ( value ) => {
        this.setState({
            ageFrom:value
        });      
       
        this.searchProfile(value, this.state.ageTo);
    }

    profileCloseHandler() {
        this.setState({
            profileClicked:false
        });
    }

    render () {
        return (
            <div style={{backgroundColor:'red',textAlign:'center'}}>
                 <TopMenu /> 
                 <Modal show={this.state.profileClicked} modalClosed={this.profileClosed}>
                    <Profile
                        profile={this.state.profile}
                        closeProfile = {this.profileCloseHandler}
                    />
                 </Modal>
                <div className="resultsContainer">                                       
                            <div className="filtersection">
                                <Filter 
                                    ageToChange = {this.ageToChange}
                                    ageFromChange = {this.ageFromChange}
                                />
                            </div>
                            <div className="verticalSeparator">

                            </div>

                            <div key="resultContent" className="resultsection">
                                <div key="pageNagivationtop" className="pageNavigation">
                                        {this.state.pages}
                                </div>
                                <div key="profileResults" className="profileResults">
                                    {this.state.pictures}
                                </div>
                                <div key="pageNagivationbottom" className="pageNavigation">
                                    <div style={{float:'right'}}>
                                        {this.state.pages}
                                    </div>
                                </div>    
                            </div>                    
                 </div>
            </div>
            
        );
    }
}

export default Results;