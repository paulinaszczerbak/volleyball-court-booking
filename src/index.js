import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import initialState from './reducers/initialState';
import { createStore } from 'redux';


const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, counter: state.counter + 1 };
      case 'DECREMENT':
        return { ...state, counter: state.counter - 1 };
      default:
        return state;
      }
  };

// const store = configureStore(initialState);
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />    
    </Provider>, 
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
