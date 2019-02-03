import React, {Component} from 'react';
import axios from 'axios';

class UploadImage extends Component {

    constructor() {
        super();

        this.uploadImage = this.uploadImage.bind(this);
        this.imageHandler = this.imageHandler.bind(this);

        this.state = {
            selectedFile:""
        }
    }

    uploadImage() {
        const formData = new FormData();
        formData.append("imageFile", this.state.selectedFile, this.state.selectedFile.name);
        axios.post('http://localhost:8080/thirumanam/user/image', formData, 
        { 
            onUploadProgress: progressEvent => {
                console.log(progressEvent.loaded/progressEvent.total);
            }
            
        })
        .then((res) => {
        console.log(res);
        this.setState({registersuccess:true});
        return res;
        })
        .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
        });
    }

    imageHandler(event) {
        //this.setState({selectedFile:event.target.files[0]});
        this.props.imageHandler(event.target.files[0]);
    }

    render () {
        return(
            <div style={{backgroundColor:'#FFFFFF'}}>
                <div className='header2allborder'>
                    <label>Profile Photo</label>
                </div>  
                <div className="sectionDataDiv"> 
                    <div className="hs10" />
                    <div>
                        We recommend to upload your photo. Profile with photo receives higher response.
                    </div>                        
                    <div className="hs20" />
                        <input type="file" onChange={this.imageHandler} />
                    <div className="hs10" />
                </div>
            </div>
        );
    }
}

export default UploadImage;