import React, {Component} from 'react';
import Footer from '../../components/footer/Footer'
import TopBar from '../../components/menu/TopBar';
import AccountSettings from '../../components/login/AccountSettings';
import ChangePassword from '../../components/login/ChangePassword';
import '../../App.css';

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

        if(value == 1) {
            content = this.displayChangePassword();
        } else if(value == 2) {

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

    render () {
        return (
            <div>
                <TopBar />
                <div className="hs10" />
                <div className="homeLeftSection">
                    <AccountSettings />
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