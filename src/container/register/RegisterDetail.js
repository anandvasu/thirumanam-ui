import React, {Component} from 'react';
import Location from '../../components/register/Location';
import PersonalDetail from '../../components/register/PersonalDetail';
import ProfDetail from '../../components/register/ProfDetail';
import UploadImage from '../../components/register/UploadImage';
import './RegisterDetail.css';
import TopMenu from '../../components/menu/TopMenu';
import axios from 'axios';
import {toast} from 'react-toastify';

class RegisterDetail extends Component {

    constructor(props) {
        super(props);       

        this.imageHandler = this.imageHandler.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.stateChange = this.stateChange.bind(this);
        this.districtChange = this.districtChange.bind(this);
        this.cityChange = this.cityChange.bind(this);

        this.state = {
            image : null,
            country: "IND",
            stateValue:"TN",
            district:"",
            city:"",
            mStatus:"NM",
            height:0,
            weight:0,
            familyType:"",
            familyValue:"",
            disability:"",
            education:"",
            employment:"",
            income:0,
            regProfileId:""            
        }
    }

    countryChange(value) {
        this.setState({country:value});
    }

    stateChange(value) {
        this.setState({stateValue:value});
    }

    districtChange(value) {
        this.setState({district:value});
    }

    cityChange(value) {
        this.setState({city:value});
    }

    imageHandler(image) {
        this.setState({image:image});
    }

    componentDidMount() {
        console.log("this.props.location.state" + this.props.location.state.profileId);
        this.setState({
            regProfileId:this.props.location.state.profileId            
        });
    }


    updateProfile(event) {
        var errorMessage = "";

        if (this.state.district === "") {
            errorMessage = "Please select District."; 
        } else if (this.state.city === "") {
            errorMessage = "Please enter City.";      
        } else if (this.state.height === "") {
            errorMessage = "Please enter Weight."; 
        } else if (this.state.weight === "") {
            errorMessage = "Please enter Weight."; 
        } 

        if (errorMessage === "") {
            const formData = new FormData();
            formData.append("imageFile", this.state.image, this.state.profileId);
            axios.post('http://localhost:8080/thirumanam/user/image?profileId='+this.state.regProfileId, formData,
                    { 
                        country:this.state.country,                        
                    })
            .then((res) => {
                axios.put('http://localhost:8080/thirumanam/user/profile', 
                { 
                    country:this.state.country,
                    stateValue:this.state.stateValue,
                    district:this.state.district,
                    city:this.state.city,
                    mStatus: this.state.mStatus,
                    height: this.state.height,
                    weight: this.state.weight,
                    familyType: this.state.familyType,
                    familyValue: this.state.familyValue,
                    disabled: this.state.disability,
                    education: this.state.education,
                    employment: this.state.employment,
                    income: this.state.income
                })
                .then((res) => {
                    console.log(res);
                    this.setState({
                        registersuccess:true,
                        profileId:res.data.code
                    });
                    toast.success("Profile Saved Successfully", 
                        {
                            position:toast.POSITION.TOP_CENTER,
                            hideProgressBar:true,
                            autoClose:3000,
                            testId:20
                        });
                })
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
        return(
            <div className="rdcontaniner">
                <TopMenu />  
                <UploadImage imageHandler={this.imageHandler}/>                
                <Location 
                    countryChange = {this.countryChange}
                    stateChange = {this.stateChange}
                    districtChange = {this.districtChange}
                    cityChange = {this.cityChange}
                />
                <PersonalDetail 
                    mStatusChange = {this.mStatusChange}
                    heightChange = {this.heightChange}
                    weightChange = {this.weightChange}
                    familyTypeChange = {this.familyTypeChange}
                    familyValueChange = {this.familyValueChange}
                    disabilityChange = {this.disabilityChange}
                />
                <ProfDetail />
                <div className='rfield'>
                            <button onClick={this.updateProfile}>Submit</button>
                </div>
            </div>
        );
    }
}

export default RegisterDetail;