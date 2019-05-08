import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import ProfileSelfSummary from '../../components/results/profile/ProfileSelfSummary';
import './LoggedInHome.css';
import adImage from '../../assets/images/ad.jpg';
import DashboardSearch from '../../components/search/DashboardSearch';
import Explore from './Explore';
import ShortListedProfiles from '../../components/profile/ShortListedProfiles';

class ShortListedProfilesHome extends Component {
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs100' />    
                        <div className="homeFullSection">                  
                                <div className="profileParentLeft">                                
                                        <ShortListedProfiles />
                                        <div className='hs10' />
                                </div>
                                <div className='vs15' />
                                <div className="topRightSection">                               
                                <div style={{paddingBottom:'20px'}}>
                                        <DashboardSearch />
                                </div>
                                <div>
                                                <img src={adImage} alt="Not Available" style={{height:'300px'}}/>
                                </div>
                                </div>
                        </div>  
                        <Footer />                       
                </div>                        
                );
        };
}

export default ShortListedProfilesHome;