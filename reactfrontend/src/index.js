import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/globals.css';
import reportWebVitals from './reportWebVitals';
import Search from './Components/Search';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <CssBaseline />
      <Search />
    </Container>    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
