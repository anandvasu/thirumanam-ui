import React, {Component} from 'react';
import './TopMenu.css';
import Login from '../login/Login';
import Menu from '../menu/Menu';
import ResultsMenu from '../menu/ResultsMenu';

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
            content.push(<Menu key="menuTopmenu"/>);
        } else if (this.props.resultsPage === true) {
            content.push(<ResultsMenu key="menuResultsmenu" />)
        } else {           
            content.push(<Login key="menuLogin" />);
        }
        this.setState({content:content});
    }

    render() {
        return(
                <div className="topBarContainer" key="TopMenu"> 
                        {this.state.content}
                </div>                   
        );
    }
}

export default TopMenu;