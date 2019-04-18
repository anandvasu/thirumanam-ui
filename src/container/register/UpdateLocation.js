import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import Location from '../../components/register/Location';
import Footer from '../../components/footer/Footer';
import {toast} from 'react-toastify';
import axios from 'axios';

class UpdateLocation extends Component {

    constructor(props) {
        super(props);

        this.countryChange = this.countryChange.bind(this);
        this.profileStateChange = this.profileStateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);
        this.redirectToProfDetail = this.redirectToProfDetail.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updateLocationDetail = this.updateLocationDetail.bind(this);
        this.otherStateChange = this.otherStateChange.bind(this);

        this.state = {
            country: "IN",
            pstate:58,
            otherState:"",
            otherDistrict:"",
            district:"",
            city:"",
            profileId:"",
            email:"",
            religion:0
        }        
    }

    componentDidMount() {
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            religion:this.props.location.state.religion
        });       
        this.handleLocationFields(this.state.country, this.state.pstate);
    }

    handleLocationFields(country, pstate) {
        if(country === "IN" || country === "US") {            
            document.getElementById("stateText").style.display = "none";
            document.getElementById("stateDropDown").style.display = "block";
        } else {
            document.getElementById("stateDropDown").style.display = "none";
            document.getElementById("stateText").style.display = "block";
        }

        if(pstate == 58) {
            document.getElementById("districtText").style.display = "none";
            document.getElementById("districtDropDown").style.display = "block";
        } else {
            document.getElementById("districtText").style.display = "block";
            document.getElementById("districtDropDown").style.display = "none";
        }
    }

    countryChange(event) {
        const country = event.target.value;
        let state = 0;
        if(country === "IN") {
            this.setState({
                country:country,
                pstate:58
            });
            state = 58;
        } else {
            this.setState({
                country:country,
                pstate:0
            });
        }
        
        this.handleLocationFields(country, state);
    }

    profileStateChange(event) {
        this.setState({pstate:event.target.value});
    }

    otherStateChange(event) {
        this.setState({otherState:event.target.value});
    }

    districtChange(event) {
        this.setState({district:event.target.value});
    }

    cityChange(event) {
        this.setState({city:event.target.value});
    }

    doThisLater() {
       this.redirectToProfDetail();
    }

    redirectToProfDetail() {
        this.props.history.push(
            {
                pathname:'/updateProfessional' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email,
                    religion:this.state.religion
                }                                   
            }
        );
    }

    updateLocationDetail() {
        var errorMessage = null;

        if (this.state.country === "") {
            errorMessage = "Please select Country."; 
        } else if ((this.state.pstate ==="") && (this.state.otherState ==="")) {
            errorMessage = "Please enter State."; 
        } else if ((this.state.district === "")  && (this.state.otherDistrict ==="")) {
            errorMessage = "Please enter District."; 
        } else if (this.state.city === "") {
            errorMessage = "Please enter City."; 
        } 

        if(errorMessage === null) {
            axios.put(ApiConstant.USER_LOCATION_API, 
                    {
                        country:this.state.country,
                        pstate:this.state.pstate,
                        district:this.state.district,
                        otherDistrict:this.state.otherDistrict,
                        city:this.state.city,
                        otherState:this.state.otherState,
                        id:this.state.profileId
                    },
                    {                                            
                    })
            .then((res) => {                
                this.redirectToProfDetail();
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message, 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });
            
            });
        } else {
            toast.error(errorMessage, 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        }
    }

    render () {
        return (
            <div>
               <TopBar />
               <div className='hs30' />  
               <div className="prefSectionContainer"> 
                    <Location 
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        otherStateChange = {this.otherStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
                        pstate = {this.state.pstate}
                        country = {this.state.country}
                    /> 
                    <div className="hs30" />
                    <div style={{width:'100%'}}>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                        </div>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <button onClick={this.updateLocationDetail}>Save</button>
                        </div>                    
                    </div>
               </div> 
               <Footer />
            </div>
        );
    }
}

export default UpdateLocation;