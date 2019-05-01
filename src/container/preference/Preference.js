import React, {Component} from 'react';
import './Preference.css';
import TopBar from '../../components/menu/TopBar';
import Footer from '../../components/footer/Footer';
import AdvancedSearch from '../../components/search/AdvancedSearch';
import Aboutus from '../../components/home/Aboutus';

class Preference extends Component {

    render() {
        return(
            <div>
                <TopBar />
               <div className='hs50' />
               <div className="homeFullSection">
               <div className='header2allborder'>
                    <label>Partner Preference</label>
                </div>   
                <AdvancedSearch 
                    fromPage = "P"
                    preference = {this.props.location.state.preference}
                    prefClassName = "sectionDataDiv"
                />
                </div>
                <div className='hs30' />
                <Aboutus /> 
                <div className="hs100" />
                <Footer />
            </div>
        );
    }
}

export default Preference;