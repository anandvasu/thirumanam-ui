import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import ApiConstant from '../../components/utils/ApiConstant';
import {toast} from 'react-toastify';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import Horoscope from '../../components/register/Horoscope';

class UploadHoroscope extends Component {

    constructor(props) {
        super(props);

        this.horoscopeImageHandler = this.horoscopeImageHandler.bind(this);
        this.uploadHoroscope = this.uploadHoroscope.bind(this);
        this.redirectToNextPage = this.redirectToNextPage.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.handleProtectChange = this.handleProtectChange.bind(this);

        this.state = {
            horoscope:null,
            email:null,
            fromPage:null,
            profileId:null,
            protectHScope:false
        }        
    }

    componentDidMount() {
        let protectHScope = false;
        if(this.props.location.state.fromPage === "E") {
            protectHScope = this.props.location.state.protectHScope;
        }
        this.setState({
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            fromPage:this.props.location.state.fromPage,
            protectHScope:protectHScope
        });       
    }

    handleProtectChange() {
        if(document.getElementById("protectImage").checked) {
           this.setState({
                protectImage:true
           });
        }
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
        this.redirectToNextPage();
    }

    redirectToNextPage() {
        this.props.history.push(
            {
                pathname:'/confirmSignUp' ,
                state:{
                    profileId : this.state.profileId,
                    username:this.state.email
                }                                   
            }
        );
    }

    uploadHoroscope() {
        if(this.state.horoscope !== null) {
            const formData = new FormData();
            formData.append("horoscopeImage", this.state.horoscope, sessionStorage.getItem("profileId"));
            axios.post(ApiConstant.USER_PROFILE_HOROSCOPE_API+'?profileId='+sessionStorage.getItem("profileId")+"&protectImage="+this.state.protectHScope, formData,
                    {                                            
                    })
            .then((res) => {
                if(this.state.fromPage === "E") {
                    toast.success("Your horoscope has been uploaded successfully.", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });
                } else {
                    this.redirectToNextPage();
                }
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
               <div className='hs100' />  
               <div className="prefSectionContainer"> 
                    <Horoscope 
                        horoscopeImageHandler={this.horoscopeImageHandler}
                        handleProtectChange={this.handleProtectChange}
                        protectHScope = {this.state.protectHScope}
                        />  
                 
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
                <Footer />
            </div>
        );
    }
}

export default UploadHoroscope;