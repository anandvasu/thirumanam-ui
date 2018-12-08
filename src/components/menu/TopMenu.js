import React, {Component} from 'react';
import './TopMenu.css';
import Login from '../login/Login';
import Menu from '../menu/Menu';
import config from '../../config';

class TopMenu extends Component {

    constructor() {
        super();
        this.state={
            content:[]
        }
    }

    componentDidMount () {
        let content = [];
        if (sessionStorage.getItem("userSession") !== null) {           
            content.push(<div key="menuKey" className="topmenucontainer"> <Menu /></div>);
        } else {           
            content.push(<div key="loginKey" className="topmenucontainer"> <Login /> </div>);
        }
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