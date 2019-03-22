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

        displayInbox(itemName) {           
            return(<div>
                    <Inbox />
                    </div>);      
        }

        displaySentitems(itemName) {
          
            return(<div>
                        <Sentitems />
                    </div>);
            
        }

        displayMessageContent(itemName) {

            if(itemName === "I") {
                const content = this.displayInbox(itemName);
                this.setState({
                    messageContent:content
                });
            } else {
                const content = this.displaySentitems(itemName);
                this.setState({
                    messageContent:content
                });
            }

        }

        componentDidMount() {
            const itemName = this.props.location.state.itemName;
            if(itemName === "D" || itemName === "P") {
                const content = this.displayInbox(itemName);
                this.setState({
                    messageContent:content
                });
            } else {
                const content = this.displaySentitems(itemName);
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
                        <div className="topLeftSection">
                           <MessageMenu
                                displayMessageContent = {this.displayMessageContent}
                            />
                        </div>
                        <div className='vs15' />
                        <div style={{width:"800px",display:"inline-block"}}>
                              {this.state.messageContent}
                        </div>
                        <div className='vs15' />                      
                        <Footer />                       
                </div>                        
                );
        };
}

export default MessageHome;