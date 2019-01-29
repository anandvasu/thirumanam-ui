import React, {Component} from 'react';
import Footer from '../footer/Footer';
import TopBar from '../menu/TopBar';
import GlobalMenu from '../menu/GlobalMenu';


class Payment extends Component {

    render() {
        return(
            <div>
                <TopBar />
               <div className='hs1'></div>
               <GlobalMenu />
               <div className='hs100'></div>      
                    Payment Information goes here1.
                <Footer />
            </div>
        );
    }
}

export default Payment;