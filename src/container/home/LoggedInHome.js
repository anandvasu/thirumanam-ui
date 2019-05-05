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
import MessageSummary from '../../components/message/MessageSummary';
import axios from 'axios';
import ApiConstant from '../../components/utils/ApiConstant';
import ProfileIdSearch from '../../components/search/ProfileIdSearch';
import Aboutus from '../../components/home/Aboutus';

class LoggedInHome extends Component {

        constructor(props) {
                super(props);        
                this.profileClick = this.profileClick.bind(this);
        }


        profileClick(profileId) {

                axios.get(ApiConstant.USER_API+profileId+"?userId="+sessionStorage.getItem(Constant.USER_PROFILE_ID))
                        .then(res => {
                                console.log(res);
                                this.props.history.push({
                                pathname: '/viewProfile',
                                state: {
                                        profile:res.data
                                }
                                });
                        });
        }
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs100' />
                        <div style={{textAlign:'left',width:'1100px',display:'inline-block'}}>
                                <b>Hello! {sessionStorage.getItem(Constant.USER_FIRST_NAME)},{sessionStorage.getItem(Constant.USER_LAST_NAME)} 
                                        ({sessionStorage.getItem(Constant.USER_PROFILE_ID)})</b>
                        </div>
                        <div className='hs10' />
                        <div className="topLeftSection">
                                <ProfileSelfSummary />
                                <div className='hs20' />
                                <Explore />
                                <div className='hs20' />
                                <MessageSummary />
                        </div>
                        <div className='vs15' />
                        <div className="topMiddleSection">
                                <PercentageCompleted 
                                        profileCompPercent= {sessionStorage.getItem(Constant.PROFILE_PERCENT_COMP)}
                                />
                                <div className='hs10' />
                                <MyMatches />
                                <div className='hs10' />
                                <VistedProfilesMini
                                        profileClick = {this.profileClick}
                                />
                                <div className='hs50' />
                        </div>
                        <div className='vs15' />
                        <div className="topRightSection">     
                                <div style={{paddingBottom:'20px'}}>
                                        <ProfileIdSearch />
                                </div>                          
                                <div style={{paddingBottom:'20px'}}>
                                        <DashboardSearch />
                                </div>
                        <div>
                                <img src={adImage} alt="Not Available" style={{height:'300px'}}/>
                        </div>

                        </div>
                        <div className='hs30' />
                                <Aboutus /> 
                        <div className="hs100" />
                        <Footer />                       
                </div>                        
                );
        };
}

export default LoggedInHome;