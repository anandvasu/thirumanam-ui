import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import ProfileSelfSummary from '../../components/results/profile/ProfileSelfSummary';
import './LoggedInHome.css';
import adImage from '../../assets/images/ad.jpg';
import DashboardSearch from '../../components/search/DashboardSearch';
import Explore from './Explore';
import VisitedProfiles from '../../components/profile/VisitedProfiles';

class VisitedProfilesHome extends Component {
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs100' />
                        <div style={{textAlign:'left',paddingLeft:'5%'}}><b>Hello! {sessionStorage.getItem("name")}</b></div>
                        <div className='hs10' />
                        <div className="topLeftSection">
                                <ProfileSelfSummary />
                                <div className='hs20' />
                                <Explore />
                        </div>
                        <div className='vs15' />
                        <div className="topMiddleSection">                                
                                <div className='hs10' />
                                <VisitedProfiles />
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
                        <Footer />                       
                </div>                        
                );
        };
}

export default VisitedProfilesHome;