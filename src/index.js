import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// import 'semantic-ui-css/semantic.css';
// import 'semantic-ui-css/semantic.js'
import "semantic-ui-css/semantic.min.css"

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={App}/>
      </Switch>
    </BrowserRouter> */}
    <App />
  </React.StrictMode> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
