import React, {Component} from 'react';
import './Message.css';

class Message extends Component {

    
    hideMessage() {
        console.log("hide message:" + this.props.messageClassName);
        if (this.props.messageClassName === "messageDisplay") {
            document.getElementById("message").className = "messageDisplay";
            setTimeout(
                function() {
                    document.getElementById("message").className = "messageHide";                    
                },
                3000
            );
        } 
    }  
    
    render () {
        return (         
            <div id="message" className={this.props.messageClassName}>
                <div>{this.props.message}</div>
                {this.hideMessage()}
            </div>            
        );
    }
}

export default Message;