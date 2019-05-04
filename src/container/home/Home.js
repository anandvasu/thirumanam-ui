import React, {Component} from 'react';
import QuickSearch from '../../components/search/QuickSearch';
import Register from '../../components/register/Register';
import Footer from '../../components/footer/Footer'
import mobile from '../../assets/images/mobile.png';
import TopMenu from '../../components/menu/TopMenu';
import './Home.css';
import ImageGalleryAnimation from '../../components/featuredprofile/ImageGalleryAnimation';
import Aboutus from '../../components/home/Aboutus';

class Home extends Component {

    constructor(props) {
        super(props);
        this.refreshFooter = this.refreshFooter.bind(this);
        this.state = {
            refreshFooter:false
        }
    }

    refreshFooter() {
        this.setState({
            refreshFooter:true
        })
    }
 
    render () {
        return (
            <div>                 
                <div className="hs10" />
                <TopMenu 
                    homePage="true"
                />          
                <div className="middlecontainer">                     
                    <div className="qsearchContainer">
                            <QuickSearch />
                    </div>                    
                    <div className="qregister">                    
                         <div className="rcontainer">
                            <Register
                                fromHome="true"
                                labelClassName="rlabel"
                                fieldClassName="rfield"
                                rowClassName="rrow"
                                refreshFooter = {this.refreshFooter}
                             />
                         </div>
                    </div>                
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
                
                <div className="hs20" />
                <Aboutus /> 
                <div className="hs20" />
                <Footer 
                    backgroundColor="#D6DBDF"
                    refreshFooter = {this.state.refreshFooter}
                />
            </div>          
        );
    }
}

export default Home;