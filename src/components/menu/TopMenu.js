import React, {Component} from 'react';
import './TopMenu.css';
import Login from '../login/Login';
import Menu from '../menu/Menu';

class TopMenu extends Component {

    constructor() {
        super();
        this.state={
            login:false,
            content:[]
        }
    }

    componentDidMount () {
        let content = [];
        if (this.state.login) {           
            content.push(<div className="topmenucontainer"> <Menu /></div>);
        } else {           
            content.push(<div className="topmenucontainer"> <Login /> </div>);
        }
        console.log(content);
        this.setState({content:content});
    }

    render() {
        return(
                <div className="topmenucontainer"> 
                    <div>
                        {this.state.content}
                    </div>            
                </div>                   
        );
    }
}

export default TopMenu;