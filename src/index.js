import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme,MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main:'#DF744A'
      },
      secondary: {
        main: '#00AA66'
      }
    },
    status: {
      danger: 'orange',
    },
  });

ReactDOM.render(
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>,         
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();