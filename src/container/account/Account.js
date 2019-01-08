import React, {Component} from 'react';
import Footer from '../../components/footer/Footer'
import TopMenu from '../../components/menu/TopMenu';
import RegisterDetail from '../register/RegisterDetail';

class Account extends Component {

    render () {
        return (
            <div>
                <div className="hs10" />
                <TopMenu />  
                <div className="hs10" />
                 <RegisterDetail />
                <div className="hs20" />
                <Footer />
            </div>          
        );
    }
}

export default Account;