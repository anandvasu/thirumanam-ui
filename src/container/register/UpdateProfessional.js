import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import ApiConstant from '../../components/utils/ApiConstant';
import ProfDetail from '../../components/register/ProfDetail';
import {toast} from 'react-toastify';
import axios from 'axios';

class UpdateProfessional extends Component {

    constructor(props) {
        super(props);

        this.educationChange = this.educationChange.bind(this);
        this.employmentChange = this.employmentChange.bind(this);
        this.incomeChange = this.incomeChange.bind(this);

        this.redirectToProfImage = this.redirectToProfImage.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updateProfDetail = this.updateProfDetail.bind(this);

        this.state = {
            education:"",
            employment:"",
            income:0,
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

    educationChange(event) {
        this.setState({education:event.target.value});
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
        } else if (this.state.income === 0) {
            errorMessage = "Please enter income."; 
        } 

        if(errorMessage !== null) {
            axios.put(ApiConstant.USER_PROF_API, 
                    {
                        education: this.state.education,
                        employment: this.state.employment,
                        income: this.state.income,
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
               <div className='hs1'></div>
               <GlobalMenu />
               <div className='hs30' />  
               <div className="prefSectionContainer"> 
                    <ProfDetail 
                        educationChange = {this.educationChange}
                        employmentChange = {this.employmentChange}
                        incomeChange = {this.incomeChange}
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
               
            </div>
        );
    }
}

export default UpdateProfessional;