import React, {Component} from 'react';
import Footer from '../footer/Footer';
import TopMenu from '../menu/TopMenu';

class Payment extends Component {

    render() {
        return(
            <div>
               <TopMenu />
               <div className='hs1'></div>
               <div className='hs100'></div>      
                    Payment Information goes here! .
                <Footer />
            </div>
        );
    }
}

export default Payment;