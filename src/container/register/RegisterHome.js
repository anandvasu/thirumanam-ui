import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import Constant from '../../components/utils/Constant';
import TopBarGlobal from '../../components/menu/TopBarGlobal';
import Register from '../../components/register/Register';

class RegisterHome extends Component {

        constructor(props) {
                super(props);        
        }

       
        render () {
            return (
            <div>
                    <TopBarGlobal />                       
                    <div className='hs30' />                   
                    <div className="homeFullSection">                       
                        <div className="sectionDataDiv">
                                <Register 
                                        fromHome="false"
                                />
                        </div>
                    </div>                    
                    <Footer />                       
            </div>                        
            );
        };
}

export default RegisterHome;