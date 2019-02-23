import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import Profile from '../../components/results/profile/Profile';
import ProfileSelfSummary from '../../components/results/profile/ProfileSelfSummary'

class ViewProfile extends Component {

    constructor (props) {
        super(props);
    }
       
    render () {
            return (
            <div>
                <TopBar />                
                <div className="topMiddleSection">
                    <Profile 
                        profile={this.props.location.state.profile}
                    />
                </div>
                <div className='vs15' />                        
                <Footer />                       
            </div>                        
            );
    };
}

export default ViewProfile;