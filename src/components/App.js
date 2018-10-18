import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomePage from './home/HomePage';
import './App.css';
import TopBar from './common/TopBar';
import LogInPage from './logIn/LogInPage';
import Footer from './common/Footer';
import Grid from '@material-ui/core/Grid';


class App extends Component {
  constructor(){
    super();

    this.state = {
      IS_LOGGED_IN: false
    }
  }

  showOrHideTopBar = (activity) => {
    if(this.state.IS_LOGGED_IN===false){
      this.setState({IS_LOGGED_IN: true});
    }
    else{
      this.setState({IS_LOGGED_IN: false});
    }
  } 

  render() {
    return (
      <Router >
        <Grid container className={'App'} direction='column' spacing={40}>
          {/* <TopBar isLoggedIn={this.props.result}/> */}
          { this.state.IS_LOGGED_IN ? <TopBar logOutClicked={this.showOrHideTopBar}/> : null }
          {/* { this.state.IS_LOGGED_IN ? 'Logged in': 'Not logged in' } */}
          <main>
            <Route exact path='/' render={(props) => <LogInPage {...props} logInClicked={this.showOrHideTopBar} />}></Route>
            {/* I need to get callback from LogInPage if authentication pass */}
            <Route exact path='/login' render={(props) => <LogInPage {...props} logInClicked={this.showOrHideTopBar} />} ></Route>
            <Route exact path='/home' component={HomePage} ></Route>
          </main>
          <Footer/>
        </Grid>
      </Router>
    );
  }
}

// App.propTypes = {
//   result: PropTypes.bool.isRequired
// };

// const mapStateToProps = (state, ownProps) => ({
//   ...state
// });

// const mapDispatchToProps = dispatch => ({
// });


export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
