import React, {Component} from 'react';
import './TopMenu.css';
import Login from '../login/Login';
import TopBarGlobal from './TopBarGlobal';
import Constant from "../utils/Constant";
import TopBar from './TopBar';

class TopMenu extends Component {

    constructor() {
        super();
        this.state={
            content:[]
        }
    }

    componentDidMount () {
        let content = [];
        if(this.props.homePage === "true") {
            content.push(<Login key="menuLogin" />);
        } else if (sessionStorage.getItem(Constant.USER_PROFILE_ID) !== null) {   
            content.push(<TopBar key="menuResultsmenu" />)
        } else {
            content.push(<TopBarGlobal key="menuTopmenu"/>);
        }
        this.setState({content:content});
    }

    render() {
        return(
                <div key="TopMenu"> 
                        {this.state.content}
                </div>                   
        );
    }
}

export default TopMenu;