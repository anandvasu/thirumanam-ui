import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Footer from '../../components/footer/Footer';
import GlobalMenu from '../menu/GlobalMenu';
import TopBar from '../menu/TopBar';
import ProfileSelfSummary from '../results/profile/ProfileSelfSummary'
import './LoggedInHome.css';

class LoggedInHome extends Component {
       
        render () {
                return (
                <Aux>
                <div>
                        <TopBar />
                        <div className='hs1'></div>
                        <GlobalMenu />
                        <div className='hs10' />
                        <div>               
                                <div className="topLeftSection">
                                        <ProfileSelfSummary />
                                </div>
                                <div className="topMiddleSection">
                                        Top Column2
                                </div>
                                <div className="topRightSection">
                                        Top Column3
                                </div>
                        </div>
                </div>
                        <Footer />
                </Aux>
                );
        };
}

export default LoggedInHome;