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
                 <div className="hs10" />
                <TopMenu />  
                <QuickSearch />
                <div className="middlecontainer">  
                    <div className="qregister">
                         <Register />
                    </div> 
                    <div className="vs200" />
                </div>
                <div className="hs10" />
                <div className="container"> 
                            <div className="contentLeft">
                                <img src={mobile} alt="Not Available" />    
                            </div>
                            <div className="contentLeft">
                                <label>100% Verified Mobile Numbers</label>       
                            </div>
                </div>
                <div className="hs20" />
                <Footer />
                <div className="hs10" />
            </div>          
        );
    }
}

export default Home;