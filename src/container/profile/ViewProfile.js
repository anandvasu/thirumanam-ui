import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import Profile from '../../components/results/profile/Profile';

class ViewProfile extends Component {

    constructor (props) {
        super(props);
    }
       
    render () {
            return (
            <div>
                <TopBar />     
                <div className='hs20' /> 
                <div style={{width:'1110px',display:'inline-block',paddingBottom:'10px'}}>
                    <div className="profileHeading">
                        <label> 
                            {this.props.location.state.profile.firstName}, {this.props.location.state.profile.lastName}
                        </label>
                    </div>
                    <div style={{textAlign:'left'}}>
                        <label>
                            {this.props.location.state.profile.id} 
                        </label>
                    </div>
                </div>   
                <Profile 
                    profile={this.props.location.state.profile}
                />
                <div className='vs15' />                        
                <Footer />                       
            </div>                        
            );
    };
}

export default ViewProfile;