import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Footer from '../../components/footer/Footer';
import GlobalMenu from '../menu/GlobalMenu';
import TopBar from '../menu/TopBar';
import ProfileSelfSummary from '../results/profile/ProfileSelfSummary'
import './LoggedInHome.css';
import PercentageCompleted from '../profile/PercentageCompleted';
import MyMatches from '../results/MyMatches';
import adImage from '../../assets/images/ad.jpg';
import DashboardSearch from '../../components/search/DashboardSearch';

class LoggedInHome extends Component {
       
        render () {
                return (
                <Aux>
                <div>
                        <TopBar />
                        <div className='hs10' />
                        <div style={{textAlign:'left',paddingLeft:'5%'}}><b>Hello! {sessionStorage.getItem("name")}</b></div>
                        <div className='hs10' />
                        <div className="topLeftSection">
                                <ProfileSelfSummary />
                        </div>
                        <div className='vs15' />
                        <div className="topMiddleSection">
                                <PercentageCompleted 
                                        profileCompPercent= {sessionStorage.getItem("percentageCompleted")}
                                />
                                <div className='hs10' />
                                <MyMatches />
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
                </Aux>
                );
        };
}

export default LoggedInHome;