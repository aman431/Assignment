import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch,withRouter} from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import firebase from './server/firebase';
import { Provider, connect} from "react-redux";
import { createStore } from "redux";
import "semantic-ui-css/semantic.min.css"
import { combinedReducers } from "./store/reducer";
import { setUser } from "./store/actioncreator";

const store = createStore(combinedReducers)

const Index = (props) => {
  useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      props.setUser(user);
      props.history.push('/')
    } else {
      props.setUser(null);
      props.history.push('/login')
    }
  })
},[]);

console.log("Debug",props.currentUser);

  return(
    <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/" component={App}/>
      </Switch>
  )
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
    // loading: state.channel.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => { dispatch(setUser(user)) }
  }
}

const IndexwithRouter = withRouter(connect(mapStateToProps,mapDispatchToProps)(Index));

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Provider store={store}>
      <BrowserRouter>
        <IndexwithRouter />
      </BrowserRouter>
    </Provider> */}
  </React.StrictMode> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
