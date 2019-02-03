import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import UploadImage from '../../components/register/UploadImage';
import ApiConstant from '../../components/utils/ApiConstant';
import {toast} from 'react-toastify';
import axios from 'axios';

class UploadProfilePhoto extends Component {

    constructor(props) {
        super(props);

        this.imageHandler = this.imageHandler.bind(this);
        this.uploadProfilePhoto = this.uploadProfilePhoto.bind(this);

        this.state = {
            image:null
        }
        
    }

    imageHandler(image) {
        this.setState({image:image});
    }

    uploadProfilePhoto() {
        if(this.state.image !== null) {
            const formData = new FormData();
            formData.append("imageFile", this.state.image, sessionStorage.getItem("profileId"));
            axios.post(ApiConstant.USER_PROFILE_IMAGE_API+'?profileId='+sessionStorage.getItem("profileId"), formData,
                    {                                            
                    })
            .then((res) => {
                toast.success("Your Photo Image Uploaded Successfully", 
                    {
                        position:toast.POSITION.TOP_CENTER,
                        hideProgressBar:true,
                        autoClose:3000,
                        testId:20
                    });
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
            toast.error("Please your photo image to upload.", 
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
               <div className='hs50' />  
               <div className="prefSectionContainer"> 
                    <UploadImage imageHandler={this.imageHandler}/>  
               </div>  
               <div className="hs10" />
                <div>
                    <button onClick={this.uploadProfilePhoto}>Upload</button>
                </div>
            </div>
        );
    }
}

export default UploadProfilePhoto;