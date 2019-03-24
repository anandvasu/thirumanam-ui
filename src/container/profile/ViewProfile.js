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