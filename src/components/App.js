import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './home/HomePage';
import './App.css';
import AuthHeader from './common/Header';
import LogInPage from './logIn/LogInPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <AuthHeader isLoggedIn={false}/>
          <Route exact path='/' component={LogInPage}></Route>
          <Route exact path='/login' component={LogInPage}></Route>
          <Route exact path='/home' component={HomePage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
