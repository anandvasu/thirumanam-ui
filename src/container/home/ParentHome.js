import React, {Component} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Constant from '../../components/utils/Constant';
import ApiConstant from '../../components/utils/ApiConstant';

class ParentHome extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(sessionStorage.getItem(Constant.USER_ACCESS_TOKEN) != null &&
            sessionStorage.getItem(Constant.USER_ACCESS_TOKEN) != "undefined") {
                this.props.history.push('/signedIn');   
        } else if(localStorage.getItem(Constant.USER_REFERESH_TOKEN) != null &&
            localStorage.getItem(Constant.USER_REFERESH_TOKEN) != "undefined") {
            axios.post(ApiConstant.IDENTITY_REFRESH_TOKEN_LOGIN, {
                refreshToken:localStorage.getItem(Constant.USER_REFERESH_TOKEN)
            })
            .then((response) => {
                console.log(response)      
                if (response.data.success === true) {
                    sessionStorage.setItem(Constant.USER_FIRST_NAME, response.data.firstName);  
                    sessionStorage.setItem(Constant.USER_LAST_NAME, response.data.lastName); 
                    sessionStorage.setItem(Constant.USER_GENDER, response.data.gender);
                    sessionStorage.setItem(Constant.USER_ID_TOKEN, response.data.idToken);
                    sessionStorage.setItem(Constant.USER_REFERESH_TOKEN, response.data.refreshToken);
                    sessionStorage.setItem(Constant.USER_PROFILE_ID, response.data.profileId);
                    sessionStorage.setItem(Constant.PROFILE_PERCENT_COMP, response.data.profilePerCompleted);  
                    sessionStorage.setItem(Constant.USER_NAME, response.data.username);  
                    sessionStorage.setItem(Constant.USER_ACCESS_TOKEN, response.data.accessToken);        
                    sessionStorage.setItem(Constant.USER_STATUS, response.data.status);      
                    
                    this.props.history.push('/signedIn');   
                } else if (response.data.userConfirmed === Constant.NO){
                    this.props.history.push(
                        {
                            pathname:'/confirmSignUp' ,
                            state:{
                                profileId:response.data.profileId,
                                username:response.data.username
                            }                                   
                        }
                    );
                }                             
            }).catch((err) => {
                
            });        
        } else {
            this.props.history.push('/home');  
        }
    }

    render() {
        return(<div></div>);
    }

}

export default ParentHome;