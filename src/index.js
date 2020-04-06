import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducers from './reducers';

// Step1: Setup the the Redux Store here
import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// Step 4: set up provider for the store data to be provided to the app
// react-redux is the package connecting react with redux seamlessly
import { Provider } from 'react-redux';

// Step 2: exec createStore() method and save it in a variable 
// Step 3: [Refer postReducer.js]  Setup Reducer for the store
const store = createStore( rootReducers, applyMiddleware(thunk, logger) );

// Step 5: Providing store to the entire app and refer PostForm.js for step 6
ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
