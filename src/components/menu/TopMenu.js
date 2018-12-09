import React, {Component} from 'react';
import './TopMenu.css';
import Login from '../login/Login';
import Menu from '../menu/Menu';

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
            content.push(<Menu />);
        } else {           
            content.push(<Login />);
        }
        this.setState({content:content});
    }

    render() {
        return(
                <div className="topmenucontainer"> 
                        {this.state.content}
                </div>                   
        );
    }
}

export default TopMenu;