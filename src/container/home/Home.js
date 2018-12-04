import React, {Component} from 'react';
import QuickSearch from '../../components/search/QuickSearch';
import Register from '../../components/register/Register';
import Footer from '../../components/footer/Footer'
import mangalyam from '../../assets/images/mangalyam.png';
import pair from '../../assets/images/pair.png';
import mobile from '../../assets/images/mobile.png';
import TopMenu from '../../components/menu/TopMenu';
import './Home.css';

class Home extends Component {

    render () {
        return (
            <div>
                <TopMenu />  
                <QuickSearch />
                <div>
                    <div className="container">
                            <div className="contentLeft">
                                 <img src={pair} alt="Not Available"></img>
                            </div>
                            <div className="contentMiddle" style={{width:'100px'}}>
                                 
                            </div>
                            <div className="contentRight">
                                <img src={mangalyam} alt="Not Available"></img>
                            </div>
                    </div>   
                    <Register />
                </div>
                <div className="container"> 
                            <div className="contentLeft">
                                <img src={mobile} alt="Not Available" />    
                            </div>
                            <div className="contentLeft">
                             <label>100% Verified Mobile Numbers</label>       
                            </div>
                </div>
                
                <Footer />
            </div>          
        );
    }
}

export default Home;