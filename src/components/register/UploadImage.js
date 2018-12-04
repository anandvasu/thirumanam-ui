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
            <div>
                <input type="file" onChange={this.imageHandler} />
                <hr />
            </div>
        );
    }
}

export default UploadImage;