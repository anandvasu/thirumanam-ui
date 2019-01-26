import React,{Component} from 'react';
import closeImage from '../../assets/images/close.png';

class FeaturedProfile extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="featureProfileCloseDiv" style={{width:'98%', textAlign:'right',paddingTop:'20px'}}>
                    <img src={closeImage} alt="Not Available" width="300px" height="400px" onClick={this.props.closeProfile} width="20px" height="20px"></img>
                </div>
                <div className="hs10" /> 
                <div style={{height:'450px'}}>
                    <div><h3>Profile Summary2</h3></div>
                    <div>
                        <div className="inlineBlock" style={{width:'300px'}}>
                            <img src={"data:image/jpeg;base64,"+this.props.image} alt="Not Available" width="300px" height="400px"></img>
                        </div>
                        <div className="vs50" />
                        <div className="inlineBlock" style={{width:'350px',verticalAlign:'top'}}>                   
                            <div style={{border: '2px solid #ccc', borderRadius:'10px'}}>
                                <div style={{paddingTop:'20px'}}>
                                    <div className="inlineBlock" style={{width:'100px',textAlign:'left'}}>
                                        <label><b>First Name</b></label>
                                    </div>                        
                                    <div className="inlineBlock" style={{width:'200px',textAlign:'left'}}> 
                                        <label>{this.props.firstName}</label>
                                    </div>
                                </div>
                                <div style={{paddingTop:'20px'}}>
                                    <div className="inlineBlock" style={{width:'100px',textAlign:'left'}}>
                                        <label><b>Last Name</b></label>
                                    </div>
                                    <div className="inlineBlock" style={{width:'200px',textAlign:'left'}}>
                                        <label>{this.props.lastName}</label>
                                    </div>
                                </div>
                                <div style={{paddingTop:'20px'}}> 
                                    <div className="inlineBlock" style={{width:'100px',textAlign:'left'}}>
                                        <label><b>Birth Date</b></label>
                                    </div>
                                    <div className="inlineBlock" style={{width:'200px',textAlign:'left'}}>
                                        <label>{this.props.bDate}</label>
                                    </div>
                                </div>
                                <div style={{paddingTop:'20px'}}>
                                        <div className="inlineBlock" style={{width:'100px',textAlign:'left'}}>
                                            <label><b>Age</b></label>
                                        </div>
                                        <div className="inlineBlock" style={{width:'200px',textAlign:'left'}}>
                                            <label>{this.props.age}</label>
                                        </div>
                                </div>
                                <div style={{paddingTop:'20px', paddingBottom:'20px'}}>
                                        <div className="inlineBlock" style={{width:'100px',textAlign:'left'}}>
                                            <label><b>Education</b></label>
                                        </div>
                                        <div className="inlineBlock" style={{width:'200px',textAlign:'left'}}>
                                            <label>{this.props.education}</label>
                                        </div>
                                </div> 
                        </div>  
                        <div style={{paddingTop:'20px',paddingTop:'20px'}}>
                                <div style={{paddingBottom:'20px'}}> 
                                    <b>To view complete profile, Please </b>
                                </div>
                                <div>
                                    <div className="inlineBlock" >
                                        <button>Login</button>
                                    </div>
                                    <div className="inlineBlock" style={{width:'50px'}}>
                                        <b>or</b>
                                    </div>
                                    <div className="inlineBlock" >
                                        <button>Register</button>
                                    </div>
                                </div>
                        </div>   
                    </div>  
                    <div className="hs10" />  
                </div>
               </div>
               <div style={{paddingTop:'10px'}}>
                   <button onClick={this.props.closeProfile}>Close</button>
                </div>              
            </div>
        );
    }
}

export default FeaturedProfile;