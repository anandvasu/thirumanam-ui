import React, {Component} from 'react';
import Footer from '../../components/footer/Footer'
import TopBar from '../../components/menu/TopBar';
import AccountSettings from '../../components/login/AccountSettings';
import UpdateEmail from '../../components/login/UpdateEmail';
import ChangePassword from '../../components/login/ChangePassword';
import '../../App.css';
import UpdateMobileNumber from '../../components/login/UpdateMobileNumber';

class AccountHome extends Component {

    constructor(props) {
        super(props);

        this.loadAcountContent = this.loadAcountContent.bind(this);
        this.displayChangePassword = this.displayChangePassword.bind(this);        

        this.state = {
            content:[]
        }
    }

    componentDidMount() {
        const pageValue = this.props.location.state.value;
        this.loadAcountContent(pageValue);
    }

    loadAcountContent(value) {

        let content;

        if(value === 5) {
            content = this.displayChangePassword();
        } else if(value === 10) {
            content = this.displayEmail();
        } else if(value === 15) {
            content = this.displayMobileNumber();
        }
        this.setState({
            content:content
        })
    }

    displayChangePassword() {           
        return(
           <ChangePassword />
           );      
    }

    displayEmail() {        
        return(
            <UpdateEmail />
            ); 
    }

    displayMobileNumber() {
        return(
            <UpdateMobileNumber />
            );
    }

    render () {
        return (
            <div>
                <TopBar 
                    loadAcountContent={this.loadAcountContent}
                />
                <div className="hs10" />
                <div className="homeLeftSection">
                    <AccountSettings 
                        loadAcountContent={this.loadAcountContent} />
                </div>
                <div className="homeRightSection">
                    {this.state.content}
                </div>    
                <Footer />
            </div>          
        );
    }
}

export default AccountHome;