import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import ApiConstant from '../../components/utils/ApiConstant';
import PersonalDetail from '../../components/register/PersonalDetail';
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
            profileId:"",
            email:""
        }        
    }

    componentDidMount() {
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
        });       
    }

    maritalStatusChange(value) {
        this.setState({mStatus:value});
    }

    heightCmChange(value) {
        this.setState({heightCm:value});
    }

    heightInchChange(value) {
        this.setState({heightInch:value});
    }

    weightChange(value) {
        this.setState({weight:value});
    }

    familyTypeChange(value) {
        this.setState({familyType:value});
    }

    familyValueChange(value) {
        this.setState({familyValue:value});
    }

    foodHabitChange(value) {
        this.setState({foodHabit:value});
    }

    bodyTypeChange(value) {
        this.setState({bodyType:value});
    }

    disablityChange(value) {
        this.setState({disability:value});
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
                }                                   
            }
        );
    }

    updatePersonalDetail() {
        var errorMessage = null;

        if (this.state.mStatus === "") {
            errorMessage = "Please select Marital Status."; 
        } else if (this.state.heightCm === 0 || this.state.heightInch === 0) {
            errorMessage = "Please enter Height."; 
        } else if (this.state.familyType === "") {
            errorMessage = "Please select Family Type."; 
        } else if (this.state.foodHabit === "") {
            errorMessage = "Please select Food Habit."; 
        } 

        if(errorMessage !== null) {
            axios.post(ApiConstant.USER_PERSONAL_PROFILE_API, 
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
                        id:this.state.regProfileId
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
               <div className='hs1'></div>
               <GlobalMenu />
               <div className='hs30' />  
               <div className="prefSectionContainer"> 
                    <PersonalDetail 
                        maritalStatusChange = {this.maritalStatusChange}
                        heightInchChange = {this.heightInchChange}
                        heightCmChange = {this.heightCmChange}
                        weightChange = {this.weightChange}
                        familyTypeChange = {this.familyTypeChange}
                        familyValueChange = {this.familyValueChange}
                        foodHabitChange = {this.foodHabitChange}
                        bodyTypeChange = {this.bodyTypeChange}
                        disabilityChange = {this.disabilityChange}
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
        );
    }
}

export default UpdatePersonal;