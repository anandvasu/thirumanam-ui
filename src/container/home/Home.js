import React, {Component} from 'react';
import QuickSearch from '../../components/search/QuickSearch';
import Register from '../../components/register/Register';
import Footer from '../../components/footer/Footer'
import mobile from '../../assets/images/mobile.png';
import TopMenu from '../../components/menu/TopMenu';
import './Home.css';
import Aux from '../../hoc/Aux';
import ImageGalleryAnimation from '../../components/featuredprofile/ImageGalleryAnimation';

class Home extends Component {
 
    render () {
        return (
            <Aux>                 
                <div className="hs10" />
                <TopMenu />  
                <div className="hs10" />
                <QuickSearch />
                <div className="middlecontainer">  
                    <div className="qregister">
                         <div className="rcontainer">
                            <Register />
                         </div>
                    </div> 
                    <div className="vs100" />
                </div>
                <div className="barContainer"> 
                    <div className="barIContainer">
                        <div className="barImage">
                            <img src={mobile} alt="Not Available" />    
                        </div>
                        <div className="barText">
                            <div className="hs20" />
                            <label>100% Verified Mobile Numbers</label>       
                        </div>
                    </div>
                    <div className="barIContainer">
                        <div className="barImage">
                            <img src={mobile} alt="Not Available" />    
                        </div>
                        <div className="barText">
                            <div className="hs20" />
                            <label>20 Years of Experience</label>       
                        </div>
                    </div>
                </div>                
                <div className="hs20" />
                <ImageGalleryAnimation />
                <div className="hs20" />
                <Footer />
            </Aux>          
        );
    }
}

export default Home;