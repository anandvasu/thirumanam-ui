import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import PersonalDetail from '../../components/register/PersonalDetail';
import Footer from '../../components/footer/Footer';
import {toast} from 'react-toastify';
import axios from 'axios';

class UpdatePersonal extends Component {

    constructor(props) {
        super(props);

        this.maritalStatusChange = this.maritalStatusChange.bind(this);
        this.heightCmChange = this.heightCmChange.bind(this);
        this.heightInchChange = this.heightInchChange.bind(this);
        this.weightChange = this.weightChange.bind(this);
        this.familyTypeChange = this.familyTypeChange.bind(this);
        this.familyValueChange = this.familyValueChange.bind(this);
        this.foodHabitChange = this.foodHabitChange.bind(this);
        this.bodyTypeChange = this.bodyTypeChange.bind(this);         
        this.disablityChange = this.disablityChange.bind(this);       
        this.disablityReasonChange = this.disablityReasonChange.bind(this);          

        this.redirectToReligionDetail = this.redirectToReligionDetail.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updatePersonalDetail = this.updatePersonalDetail.bind(this);

        this.state = {
            mStatus:"",
            heightInch:0,
            heightCm:0,
            weight:0,
            familyType:"",
            familyValue:"",
            bodyType:"",
            foodHabit:"",
            disability:"",
            disablityInfo:null,
            profileId:"",
            religion:0,
            email:""
        }        
    }

    componentDidMount() {
        document.getElementById("disablityReason").style.display = "none";
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            religion:this.props.location.state.religion
        });       
    }

    maritalStatusChange(event) {
        this.setState({mStatus:event.target.value});
    }

    heightCmChange(event) {
        this.setState({heightCm:event.target.value});
    }

    heightInchChange(event) {
        this.setState({heightInch:event.target.value});
    }

    weightChange(event) {
        this.setState({weight:event.target.value});
    }

    familyTypeChange(event) {
        this.setState({familyType:event.target.value});
    }

    familyValueChange(event) {
        this.setState({familyValue:event.target.value});
    }

    foodHabitChange(event) {
        this.setState({foodHabit:event.target.value});
    }

    bodyTypeChange(event) {
        this.setState({bodyType:event.target.value});
    }

    disablityChange(event) {
        this.setState({disability:event.target.value});       
        if(event.target.value === 'Y') {
            document.getElementById("disablityReason").style.display = "block";
        } else {
            document.getElementById("disablityReason").style.display = "none";
        }
    }    

    disablityReasonChange(event) {
        console.log(event.target.value);
        this.setState({disablityInfo:event.target.value});
    }

    doThisLater() {
       this.redirectToReligionDetail();
    }   

    redirectToReligionDetail() {
        this.props.history.push(
            {
                pathname:'/updateReligion' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email,
                    religion:this.state.religion
                }                                   
            }
        );
    }

    updatePersonalDetail() {
        var errorMessage = null;

        if (this.state.mStatus === "") {
            errorMessage = "Please select Marital Status."; 
        } else if (this.state.heightCm === 0 && this.state.heightInch === 0) {
            errorMessage = "Please enter Height."; 
        } else if (this.state.familyType === "") {
            errorMessage = "Please select Family Type."; 
        } else if (this.state.foodHabit === "") {
            errorMessage = "Please select Food Habit."; 
        } 

        if(errorMessage === null) {
            axios.put(ApiConstant.USER_PERSONAL_PROFILE_API, 
                    {
                        mStatus: this.state.mStatus,
                        heightCm: this.state.heightCm,
                        heightInch: this.state.heightInch,
                        weight: this.state.weight,
                        familyType: this.state.familyType,
                        familyValue: this.state.familyValue,
                        foodHabit:this.state.foodHabit,
                        bodyType:this.state.bodyType,
                        disabled: this.state.disability,
                        disablityInfo:this.state.disablityInfo,
                        id:this.state.profileId
                    },
                    {                                            
                    })
            .then((res) => {               
                this.redirectToReligionDetail();
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
                    <div className="inlineBlock" style={{width:'10%'}} >                      
                    </div>
                    <div className="inlineBlock" style={{width:'90%'}}>
                        <PersonalDetail 
                            maritalStatusChange = {this.maritalStatusChange}
                            heightInchChange = {this.heightInchChange}
                            heightCmChange = {this.heightCmChange}
                            weightChange = {this.weightChange}
                            familyTypeChange = {this.familyTypeChange}
                            familyValueChange = {this.familyValueChange}
                            foodHabitChange = {this.foodHabitChange}
                            bodyTypeChange = {this.bodyTypeChange}
                            disablityChange = {this.disablityChange}
                            disablityReasonChange = {this.disablityReasonChange}
                        /> 
                        <div className="hs30" />
                        <div style={{width:'100%'}}>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <a href="#" onClick={this.doThisLater}>I will do this later</a>
                            </div>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <button onClick={this.updatePersonalDetail}>Save</button>
                            </div>                    
                        </div>
                    </div>
                </div>   
               <Footer />              
            </div>
        );
    }
}

export default UpdatePersonal;