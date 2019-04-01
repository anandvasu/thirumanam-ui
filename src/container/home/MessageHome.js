import React,{Component} from 'react';
import Footer from '../../components/footer/Footer';
import TopBar from '../../components/menu/TopBar';
import './LoggedInHome.css';
import Constant from '../../components/utils/Constant';
import Inbox from '../../components/message/Inbox';
import Sentitems from '../../components/message/Sentitem';
import MessageMenu from '../../components/message/MessageMenu';

class MessageHome extends Component {

        constructor(props) {
            super(props);

            this.displayInbox = this.displayInbox.bind(this);
            this.displaySentitems = this.displaySentitems.bind(this);
            this.displayMessageContent = this.displayMessageContent.bind(this);

            this.state = {
                messageContent:null
            }
        }

        displayInbox(status) {           
            return(
            <div>
                <Inbox 
                    status = {status}
                />
            </div>);      
        }

        displaySentitems(status) {
          
            return(<div>
                <Sentitems 
                        status = {status}
                />
            </div>);
            
        }

        displayMessageContent(status) {

            if(status === "I") {
                const content = this.displayInbox(status);
                this.setState({
                    messageContent:content
                });
            } else {
                const content = this.displaySentitems(status);
                this.setState({
                    messageContent:content
                });
            }

        }

        componentDidMount() {
            const status = this.props.location.state.status;
            if(status === Constant.MESSAGE_STATUS_ACCEPTED 
                || status === Constant.MESSAGE_STATUS_PENDING) {
                const content = this.displayInbox(status);
                this.setState({
                    messageContent:content
                });
            } else {
                const content = this.displaySentitems(status);
                this.setState({
                    messageContent:content
                });
            }
        }
       
        render () {
                return (
                <div>
                        <TopBar />
                        <div className='hs10' />
                        <div style={{textAlign:'left',width:'1100px',display:'inline-block'}}>
                                <b>Hello! {sessionStorage.getItem(Constant.USER_FIRST_NAME)},{sessionStorage.getItem(Constant.USER_LAST_NAME)} 
                                        ({sessionStorage.getItem(Constant.USER_PROFILE_ID)})</b>
                        </div>
                        <div className='hs10' />
                        <div className="homeLeftSection">
                           <MessageMenu
                                displayMessageContent = {this.displayMessageContent}
                            />
                        </div>
                        <div className='vs15' />
                        <div className="homeRightSection">
                              {this.state.messageContent}
                        </div>
                        <div className='vs15' />                      
                        <Footer />                       
                </div>                        
                );
        };
}

export default MessageHome;