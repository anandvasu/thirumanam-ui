import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import {toast} from 'react-toastify';
import axios from 'axios';
import Horoscope from '../../components/register/Horoscope';

class UploadHoroscope extends Component {

    constructor(props) {
        super(props);

        this.horoscopeImageHandler = this.horoscopeImageHandler.bind(this);
        this.uploadHoroscope = this.uploadHoroscope.bind(this);
        this.redirectToUpdageGroomBride = this.redirectToUpdageGroomBride.bind(this);

        this.state = {
            horoscope:null,
            email:null,
            fromPage:null,
            profileId:null
        }        
    }

    componentDidMount() {
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            fromPage:this.props.location.state.fromPage
        });       
    }

    horoscopeImageHandler(event) {
        if (event.target.files[0].size > 1048576) {
            toast.error("Your Horoscope document size is greater than 1MB. Please reduce the size and upload.", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        } else {
            this.setState({horoscope:event.target.files[0]});
        }
        
    }

    doThisLater() {
        this.redirectToUpdageGroomBride();
    }

    redirectToUpdageGroomBride() {
        this.props.history.push(
            {
                pathname:'/updateGroomBride' ,
                state:{
                    profileId : this.state.profileId,
                    email : this.state.email
                }                                   
            }
        );
    }

    uploadHoroscope() {
        if(this.state.horoscope !== null) {
            const formData = new FormData();
            formData.append("horoscopeImage", this.state.horoscope, sessionStorage.getItem("profileId"));
            axios.post(ApiConstant.USER_PROFILE_HOROSCOPE_API+'?profileId='+sessionStorage.getItem("profileId"), formData,
                    {                                            
                    })
            .then((res) => {
                this.redirectToUpdageGroomBride();
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
            toast.error("Please your horoscope to upload.", 
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
               <div className='hs50' />  
               <div className="prefSectionContainer"> 
                    <Horoscope horoscopeImageHandler={this.horoscopeImageHandler}/>  
                 
                    <div className="hs30" />

                    { (this.state.fromPage === "E") &&
                        <div>
                            <button onClick={this.uploadHoroscope}>Upload</button>
                        </div>
                    }
                    { (this.state.fromPage === "R") &&
                        <div style={{width:'100%'}}>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                            </div>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <button onClick={this.uploadHoroscope}>Upload</button>
                            </div>                    
                        </div>
                    }                    
                </div>
            </div>
        );
    }
}

export default UploadHoroscope;