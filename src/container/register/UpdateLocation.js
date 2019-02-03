import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import ApiConstant from '../../components/utils/ApiConstant';
import Location from '../../components/register/Location';
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

        this.state = {
            country: "IND",
            pstate:"TN",
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
    }

    countryChange(event) {
        this.setState({country:event.target.value});
    }

    profileStateChange(event) {
        this.setState({pstate:event.target.value});
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
                }                                   
            }
        );
    }

    updateLocationDetail() {
        var errorMessage = null;

        if (this.state.country === "") {
            errorMessage = "Please select Country."; 
        } else if (this.state.pstate ==="") {
            errorMessage = "Please enter State."; 
        } else if (this.state.district === "") {
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
                        city:this.state.city,
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
                    <Location 
                        countryChange = {this.countryChange}
                        profileStateChange = {this.profileStateChange}
                        districtChange = {this.districtChange}
                        cityChange = {this.cityChange}
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
            </div>
        );
    }
}

export default UpdateLocation;