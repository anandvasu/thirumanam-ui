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

class MessageHome extends Component {

        constructor(props) {
            super(props);
        }

        componentDidMount() {
            alert(this.props.location.state.itemName)
        }
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs10' />
                        <div style={{textAlign:'left',width:'1100px',display:'inline-block'}}>
                                <b>Hello! {sessionStorage.getItem(Constant.USER_FIRST_NAME)},{sessionStorage.getItem(Constant.USER_LAST_NAME)} 
                                        ({sessionStorage.getItem(Constant.USER_PROFILE_ID)})</b>
                        </div>
                        <div className='hs10' />
                        <div className="topLeftSection">
                            <div>
                                Inbox
                            </div>
                            <div>
                                Sentitems
                            </div>
                        </div>
                        <div className='vs15' />
                        <div className="topMiddleSection">
                               Message Section
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

export default MessageHome;