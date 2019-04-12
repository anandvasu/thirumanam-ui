import React, {Component} from 'react';
import Footer from '../../components/footer/Footer'
import TopBar from '../../components/menu/TopBar';
import AccountSettings from '../../components/account/AccountSettings';
import UpdateEmail from '../../components/account/UpdateEmail';
import ChangePassword from '../../components/account/ChangePassword';
import '../../App.css';
import UpdateMobileNumber from '../../components/account/UpdateMobileNumber';
import InactivateProfile from '../../components/account/InactivateProfile';
import ActivateProfile from '../../components/account/ActivateProfile';
import DeleteProfile from '../../components/account/DeleteProfile';
import Constant from '../../components/utils/Constant';

class AccountHome extends Component {

    constructor(props) {
        super(props);

        this.loadAcountContent = this.loadAcountContent.bind(this);
        this.displayChangePassword = this.displayChangePassword.bind(this);      
        this.updateStatus = this.updateStatus.bind(this);       

        this.state = {
            content:[],
            status:""
        }
    }

    updateStatus(inputStatus) {
        this.setState({
            status:inputStatus
        })
        if(inputStatus === Constant.USER_STATUS_ACTIVE) {
            this.loadAcountContent(25);
        }
        if(inputStatus === Constant.USER_STATUS_INACTIVE) {
            this.loadAcountContent(26);
        }
        sessionStorage.setItem(Constant.USER_STATUS, inputStatus); 
    }

    componentDidMount() {
        const pageValue = this.props.location.state.value;
        this.loadAcountContent(pageValue);     
        this.setState({
            status:sessionStorage.getItem(Constant.USER_STATUS)
        });
    }

    loadAcountContent(value) {

        let content;

        if(value === 5) {
            content = this.displayChangePassword();
        } else if(value === 10) {
            content = this.displayEmail();
        } else if(value === 15) {
            content = this.displayMobileNumber();
        } else if(value === 25) {
            content = this.displayInactivateProfile();
        } else if(value === 26) {
            content = this.displayActivateProfile();
        } else if(value === 30) {
            content = this.displayDeleteProfile();
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

    displayInactivateProfile() {
        return(
            <InactivateProfile 
                updateStatus={this.updateStatus}
            />
            );
    }

    displayActivateProfile() {
        return(
            <ActivateProfile 
                updateStatus={this.updateStatus}
            />
            );
    }

    displayDeleteProfile() {
        return(
            <DeleteProfile />
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
                        loadAcountContent={this.loadAcountContent} 
                        status={this.state.status}/>
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