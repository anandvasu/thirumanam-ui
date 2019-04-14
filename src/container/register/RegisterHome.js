import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import Constant from '../../components/utils/Constant';
import TopBarGlobal from '../../components/menu/TopBarGlobal';

class RegisterHome extends Component {

        constructor(props) {
                super(props);        
        }

       
        render () {
            return (
            <div>
                    <TopBarGlobal />                       
                    <div className='hs10' />
                    <div className="homeFullSection">
                            Register Goes Here!
                    </div>
                    
                    <Footer />                       
            </div>                        
            );
        };
}

export default RegisterHome;