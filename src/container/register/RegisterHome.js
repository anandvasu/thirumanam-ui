import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import Constant from '../../components/utils/Constant';
import TopBarGlobal from '../../components/menu/TopBarGlobal';
import Register from '../../components/register/Register';
import Aboutus from '../../components/home/Aboutus';

class RegisterHome extends Component {

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
                    <TopBarGlobal />                       
                    <div className='hs30' />                   
                    <div className="homeFullSection">       
                        <div> 
                            <div className='header2allborder'>
                                <label>Registration</label>
                            </div>                
                        </div>                
                        <div className="sectionDataDiv">
                                <div className="hs20" />
                                <Register 
                                        fromHome="false"
                                        labelClassName="glabel"
                                        fieldClassName="gfield"
                                        rowClassName="gFieldRow"
                                        refreshFooter={this.refreshFooter}
                                />
                        </div>
                    </div>          
                    <Aboutus /> 
                    <div className="hs20" />          
                    <Footer 
                        refreshFooter={this.state.refreshFooter}
                    />                       
            </div>                        
            );
        };
}

export default RegisterHome;