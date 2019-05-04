import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import UploadImage from '../../components/register/UploadImage';
import ApiConstant from '../../components/utils/ApiConstant';
import Footer from '../../components/footer/Footer';
import {toast} from 'react-toastify';
import axios from 'axios';

class UploadProfilePhoto extends Component {

    constructor(props) {
        super(props);

        this.imageHandler = this.imageHandler.bind(this);
        this.redirectToNextPage = this.redirectToNextPage.bind(this);
        this.doThisLater = this.doThisLater.bind(this);
        this.uploadProfilePhoto = this.uploadProfilePhoto.bind(this);
        this.handleProtectChange = this.handleProtectChange.bind(this);

        this.state = {
            image:null,
            email:null,
            religion:0,
            fromPage:null,
            profileId:null,
            protectImage:false
        }
        
    }

    componentDidMount() {
        let protectImage = false;
        if(this.props.location.state.fromPage === "E") {
            protectImage = this.props.location.state.protectImage;
        }
        this.setState({
            fromPage:this.props.location.state.fromPage,
            profileId : this.props.location.state.profileId,
            email : this.props.location.state.email,
            religion:this.props.location.state.religion,  
            protectImage:protectImage,            
        });       
    }

    doThisLater() {
        this.redirectToNextPage();
    }

    handleProtectChange() {
        if(document.getElementById("protectImage").checked) {
           this.setState({
                protectImage:true
           });
        }
    }

    redirectToNextPage() {
        if(this.state.religion === 1) {
            this.props.history.push(
                {
                    pathname:'/uploadHoroscope' ,
                    state:{
                        profileId : this.state.profileId,
                        email : this.state.email,
                        fromPage : 'R'
                    }                                   
                }
            );
        } else {
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
    }

    imageHandler(event) {
        if (event.target.files[0].size > 1048576) {
            toast.error("Your profile image is greater than 1MB. Please reduce the size and upload.", 
                {
                    position:toast.POSITION.TOP_CENTER,
                    hideProgressBar:true,
                    autoClose:3000,
                    testId:20
                });
        } else {
            this.setState({image:event.target.files[0]});
        }
    }

    uploadProfilePhoto() {
        if(this.state.image !== null) {
            const formData = new FormData();
            formData.append("imageFile", this.state.image, this.state.profileId, this.state.protectImage);
            axios.post(ApiConstant.USER_PROFILE_IMAGE_API+'?profileId='+this.state.profileId+"&protectImage="+this.state.protectImage, formData,
                    {                                            
                    })
            .then((res) => {
                if(this.state.fromPage === "E") {
                    toast.success("Your Photo has been uploaded successfully.", 
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
            toast.error("Please select your photo image to upload.", 
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
                    <UploadImage 
                        imageHandler={this.imageHandler}
                        handleProtectChange = {this.handleProtectChange}
                        protectImage = {this.state.protectImage}
                    />  
                    <div className="hs30" />
                    { (this.state.fromPage === "E") &&
                        <div>
                            <button onClick={this.uploadProfilePhoto}>Upload</button>
                        </div>
                    }
                    { (this.state.fromPage === "R") &&
                        <div style={{width:'100%'}}>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                            </div>
                            <div className="inlineBlock" style={{width:'50%'}}>
                                <button onClick={this.uploadProfilePhoto}>Upload</button>
                            </div>                    
                        </div>
                    }
                    <div style={{paddingTop:'20px',textAlign:'left'}}>
                        <label><b>Recommended Dimensions and Size:</b></label>
                        <div style={{paddingTop:'10px'}}>                            
                            <label>Size:</label>
                            <label><b>1MB (Max)</b></label>
                        </div>
                        <div style={{paddingTop:'10px'}}>
                            <label>Pixels:</label>
                            <label><b>300 X 200</b></label>
                        </div>
                    </div>
               </div> 
               <Footer />
            </div>
        );
    }
}

export default UploadProfilePhoto;