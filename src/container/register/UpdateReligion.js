import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import ReligionDetail from '../../components/register/ReligionDetail';
import {populateArray} from '../../components/utils/Util';
import Footer from '../../components/footer/Footer';
import {getValueFromReactSelect} from '../../components/utils/Util';
import {toast} from 'react-toastify';
import axios from 'axios';

class UpdateReligion extends Component {

    constructor(props) {
        super(props);

        this.otherCasteChange = this.otherCasteChange.bind(this);
        this.casteChange = this.casteChange.bind(this);
        this.subCasteChange = this.subCasteChange.bind(this);        
        this.otherGothramChange = this.otherGothramChange.bind(this);
        this.gothramChange = this.gothramChange.bind(this);
        this.otherDhoshamChange = this.otherDhoshamChange.bind(this);
        this.hinduDhoshamChange = this.hinduDhoshamChange.bind(this);
        
        this.redirectLocationDetail = this.redirectLocationDetail.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.updateReligionDetail = this.updateReligionDetail.bind(this);

        this.state = {
            casteObj:[],
            caste:0,
            otherCaste:"",
            subcaste:"",
            gothramObj:[],
            gothram:"",
            dhoshamObj:[],
            dhosham:"",
            profileId:"",
            religion:0,
            email:""
        }        
    }

    componentDidMount() {
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            religion:this.props.location.state.religion
        });       
        const religionValue = this.props.location.state.religion;
        if(parseInt(religionValue) === 1) {
            document.getElementById("otherCaste").style.display = "none";
            document.getElementById("otherGothram").style.display = "none";
            document.getElementById("otherDhosham").style.display = "none";
        } else if ((religionValue === 4) || (religionValue === 5) || (religionValue === 6)) { 
            document.getElementById("otherCaste").style.display = "none";  
            document.getElementById("gothram").style.display = "none";
            document.getElementById("hinduDhosham").style.display = "none";
        } else {
            document.getElementById("caste").style.display = "none";
        }
    }

    casteChange(valueObj) {
        this.setState(
            {
                casteObj:populateArray(valueObj),
                caste:valueObj.value
            }
        );
    }

    otherCasteChange(event) {
        this.setState({otherCaste:event.target.value});
    }

    subCasteChange(event) {
        this.setState({subcaste:event.target.value});
    }

    gothramChange(valueObj) {
        this.setState(
            {
                gothramObj:populateArray(valueObj),
                gothram:valueObj.value
            }
        );
    }

    otherGothramChange(event) {
        this.setState({gothram:event.target.value});
    }

    hinduDhoshamChange(valueObj) {
        this.setState(
            {
                dhoshamObj:populateArray(valueObj),
                dhosham:valueObj.value
            }
        );
    }
    otherDhoshamChange(event) {
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
                    religion:this.state.religion
                }                                   
            }
        );
    }

    updateReligionDetail() {
        var errorMessage = null;

        if ((this.state.caste === 0) && (this.state.otherCaste ==="")) {
            errorMessage = "Please enter Caste."; 
        } 
        if(errorMessage === null) {
            axios.put(ApiConstant.USER_RELIGION_API, 
                {
                    caste: this.state.caste,
                    otherCaste: this.state.otherCaste,
                    subcaste:this.state.subcaste,
                    gothram:this.state.gothram,
                    dhosham:this.state.dhosham,
                    id:this.state.profileId
                },
                {                                            
                })
            .then((res) => {                
                this.redirectLocationDetail();
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
            console.log("Error:" + errorMessage)
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
                    <ReligionDetail 
                        casteObj = {this.state.casteObj}
                        caste = {this.state.caste}
                        religion = {this.state.religion}
                        casteChange = {this.casteChange}
                        otherCasteChange = {this.otherCasteChange}  
                        
                        subcaste = {this.state.subcaste}
                        subCasteChange = {this.subCasteChange}
                       
                        gothramObj = {this.state.gothramObj}
                        gothram = {this.state.gothram}
                        gothramChange = {this.gothramChange}
                        otherGothramChange = {this.otherGothramChange}
                        
                        dhoshamObj = {this.state.dhoshamObj}
                        dhosham = {this.state.dhosham}
                        hinduDhoshamChange = {this.hinduDhoshamChange}
                        otherDhoshamChange = {this.otherDhoshamChange}
                    />
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
               <Footer />
            </div>
        );
    }
}

export default UpdateReligion;