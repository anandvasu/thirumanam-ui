import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import ProfileSelfSummary from '../../components/results/profile/ProfileSelfSummary';
import './LoggedInHome.css';
import PercentageCompleted from '../../components/profile/PercentageCompleted';
import MyMatches from '../../components/results/MyMatches';
import adImage from '../../assets/images/ad.jpg';
import DashboardSearch from '../../components/search/DashboardSearch';
import VistedProfilesMini from '../../components/results/VistedProfilesMini';
import Explore from './Explore';
import Constant from '../../components/utils/Constant';

class LoggedInHome extends Component {
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs10' />
                        <div style={{textAlign:'left',paddingLeft:'5%'}}><b>Hello! {sessionStorage.getItem("name")}</b></div>
                        <div className='hs10' />
                        <div className="topLeftSection">
                                <ProfileSelfSummary />
                                <div className='hs20' />
                                <Explore />
                        </div>
                        <div className='vs15' />
                        <div className="topMiddleSection">
                                <PercentageCompleted 
                                        profileCompPercent= {sessionStorage.getItem(Constant.PROFILE_PERCENT_COMP)}
                                />
                                <div className='hs10' />
                                <MyMatches />
                                <div className='hs10' />
                                <VistedProfilesMini />
                                <div className='hs50' />
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

export default LoggedInHome;