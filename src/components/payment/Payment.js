import React, {Component} from 'react';
import Footer from '../footer/Footer';
import TopBar from '../menu/TopBar';

class Payment extends Component {

    render() {
        return(
            <div>
                <TopBar />
               <div className='hs1'></div>
               <div className='hs100'></div>      
                    Payment Information goes here! .
                <Footer />
            </div>
        );
    }
}

export default Payment;