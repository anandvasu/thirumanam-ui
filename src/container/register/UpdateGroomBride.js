import React, {Component} from 'react';
import TopBar from '../../components/menu/TopBar';
import GlobalMenu from '../../components/menu/GlobalMenu';
import ApiConstant from '../../components/utils/ApiConstant';
import {Redirect} from "react-router-dom";
import {toast} from 'react-toastify';
import axios from 'axios';
import AboutGroomBride from '../../components/register/AboutGroomBride';

class UpdateGroomBride extends Component {

    constructor(props) {
        super(props);

        this.aboutGroomBrideChange = this.aboutGroomBrideChange.bind(this);

        this.doThisLater = this.doThisLater.bind(this);
        this.updateAbout = this.updateAbout.bind(this);

        this.state = {
            about:"",
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

    aboutGroomBrideChange(event) {
        this.setState({about:event.target.value});
    }

   
    doThisLater() {
       this.setState({updateSuccess:true});
    }

    updateAbout() {
        var errorMessage = null;

        if (this.state.education === "") {
            errorMessage = "Please select Education."; 
        } else if (this.state.employment === "") {
            errorMessage = "Please select Employment."; 
        } else if (this.state.income === 0) {
            errorMessage = "Please enter income."; 
        } 

        if(errorMessage === null) {
            axios.put(ApiConstant.USER_PROF_API, 
                    {
                        education: this.state.education,
                        employment: this.state.employment,
                        income: this.state.income,
                        id:this.state.profileId
                    },
                    {                                            
                    })
            .then((res) => {                
                this.setState({
                    updateSuccess:true
                })
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

        if (this.state.updateSuccess === true) {
            return <Redirect to= {{
                    pathname:'/confirmSignUp' ,
                        state:{
                            username:this.state.email
                        }                                   
                    }}/>
        }
        return (
            <div>
                <TopBar />
               <div className='hs1'></div>
               <GlobalMenu />
               <div className='hs30' />  
               <div className="prefSectionContainer"> 
                    <AboutGroomBride 
                        aboutGroomBrideChange = {this.aboutGroomBrideChange}                       
                    />
                    <div className="hs30" />
                    <div style={{width:'100%'}}>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <a href="#" onClick={this.doThisLater}><b>I will do this later</b></a>
                        </div>
                        <div className="inlineBlock" style={{width:'50%'}}>
                            <button onClick={this.updateAbout}>Save</button>
                        </div>                    
                    </div>
               </div>  
               
            </div>
        );
    }
}

export default UpdateGroomBride;