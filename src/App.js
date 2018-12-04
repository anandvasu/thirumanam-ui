import React, { Component } from 'react';
import './App.css';
import TopMenu from './components/menu/TopMenu';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './container/home/Home';
import Contact from './components/contact/Contact';
import Results from './components/results/Results';
import RegisterDetail from './container/register/RegisterDetail';
import Message from './components/message/Message';
import {ToastContainer} from 'react-toastify';
import Register from './components/register/Register'

class App extends Component {

  constructor() {
    super();
    this.state = {     
      messageClassName:"messageHide",
      message:""
    }
  }

  render() {
    return (
      <Router>
        <div className="app">
        <ToastContainer />          
          <Message id="message" message={this.state.message} messageClassName={this.state.messageClassName} />                  
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/quickRegister" component={Register} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/register" component={RegisterDetail} />        
        </div>
      </Router>
    );
  }
}

export default App;
