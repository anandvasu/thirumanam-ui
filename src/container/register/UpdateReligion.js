import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import ApiConstant from '../../components/utils/ApiConstant';
import ReligionDetail from '../../components/register/ReligionDetail';
import {toast} from 'react-toastify';
import axios from 'axios';

class UpdateReligion extends Component {

    constructor(props) {
        super(props);

        this.casteChange = this.casteChange.bind(this);
        this.subCasteChange = this.subCasteChange.bind(this);
        this.gothramChange = this.gothramChange.bind(this);
        this.dhoshamChange = this.dhoshamChange.bind(this);

        this.redirectLocationDetail = this.redirectLocationDetail.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updateReligionDetail = this.updateReligionDetail.bind(this);

        this.state = {
            caste: "",
            subcaste:"TN",
            gothram:"",
            dhosham:"",
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

    casteChange(event) {
        this.setState({caste:event.target.value});
    }

    subCasteChange(event) {
        this.setState({subcaste:event.target.value});
    }

    gothramChange(event) {
        this.setState({gothram:event.target.value});
    }

    dhoshamChange(event) {
        this.setState({dhosham:event.target.value});
    }

    doThisLater() {
       this.redirectLocationDetail();
    }

    redirectLocationDetail() {
        this.props.history.push(
            {
                pathname:'/updateLocation' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email,
                }                                   
            }
        );
    }

    updateReligionDetail() {
        var errorMessage = null;

        if (this.state.caste === "") {
            errorMessage = "Please enter Caste."; 
        } else if (this.state.subcaste === "") {
            errorMessage = "Please enter Sub Caste."; 
        } else if (this.state.gothram === "") {
            errorMessage = "Please select Gothram."; 
        } else if (this.state.dhosham === "") {
            errorMessage = "Please select Dhosham."; 
        } 

        if(errorMessage !== null) {
            axios.post(ApiConstant.USER_RELIGION_API, 
                {
                    caste: this.state.caste,
                    subcaste:this.state.subcaste,
                    gothram:this.state.gothram,
                    dhosham:this.state.dhosham,
                    id:this.state.regProfileId
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
                    <ReligionDetail />
                    <div className="hs30" />
                    <div style={{width:'100%'}}>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                        </div>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <button onClick={this.updateReligionDetail}>Save</button>
                        </div>                    
                    </div>
               </div>  
               
            </div>
        );
    }
}

export default UpdateReligion;