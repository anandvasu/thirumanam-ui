import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import ProfDetail from '../../components/register/ProfDetail';
import Footer from '../../components/footer/Footer';
import {toast} from 'react-toastify';
import axios from 'axios';
import {populateArray} from '../../components/utils/Util';

class UpdateProfessional extends Component {

    constructor(props) {
        super(props);

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);
        this.occupationChange = this.occupationChange.bind(this);

        this.redirectToProfImage = this.redirectToProfImage.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updateProfDetail = this.updateProfDetail.bind(this);
        

        this.state = {
            educationObj:[],
            education:"",
            employment:"",
            occupation:"",
            income:0,
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
    }

    occupationChange(event) {
        this.setState({occupation:event.target.value});
    }

    educationChange(valueObj) {
        this.setState({
            educationObj:populateArray(valueObj),
            education:valueObj.value
        });
    }

    employmentChange(event) {
        this.setState({employment:event.target.value});
    }

    incomeChange(event) {
        this.setState({income:event.target.value});
    }   

    doThisLater() {
       this.redirectToProfImage();
    }

    redirectToProfImage() {
        this.props.history.push(
            {
                pathname:'/uploadProfilePhoto' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email,
                    religion:this.state.religion,
                    fromPage : 'R'
                }                                   
            }
        );
    }

    updateProfDetail() {
        var errorMessage = null;

        if (this.state.education === "") {
            errorMessage = "Please select Education."; 
        } else if (this.state.employment === "") {
            errorMessage = "Please select Employment."; 
        } else if (this.state.occupation === "") {
            errorMessage = "Please enter Occupation."; 
        } else if (this.state.income === 0) {
            errorMessage = "Please enter income."; 
        } 

        if(errorMessage === null) {
            axios.put(ApiConstant.USER_PROF_API, 
                    {
                        occupation:this.state.occupation,
                        education: this.state.education,
                        employment: this.state.employment,
                        income: this.state.income,
                        id:this.state.profileId
                    },
                    {                                            
                    })
            .then((res) => {                
                this.redirectToProfImage();
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
                    <ProfDetail 
                        educationObj = {this.educationObj}
                        educationChange = {this.educationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
                        occupationChange = {this.occupationChange}
                        occupation = {this.state.occupation}
                        education = {this.state.education}
                        income = {this.state.income}
                        employment = {this.state.employment}
                    />
                    <div className="hs30" />
                    <div style={{width:'100%'}}>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                        </div>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <button onClick={this.updateProfDetail}>Save</button>
                        </div>                    
                    </div>
               </div>  
               <Footer />
            </div>
        );
    }
}

export default UpdateProfessional;