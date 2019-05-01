import React, {Component} from 'react';
import './Preference.css';
import TopBar from '../../components/menu/TopBar';
import Footer from '../../components/footer/Footer';
import AdvancedSearch from '../../components/search/AdvancedSearch';

class Preference extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preference:null
        }
    }
  
    componentDidMount() {
        console.log("this.props.location.state.mStatus:"+ this.props.location.state.mStatus);       
        
        this.setState({
            preference:this.props.location.state.preference                      
        });
    }
    
    render() {
        console.log("preference render");
        return(
            <div>
                <TopBar />
               <div className='hs50' />   
                <AdvancedSearch 
                    fromPage = "P"
                    preference = {this.state.preference}
                />
                <Footer />
            </div>
        );
    }
}

export default Preference;