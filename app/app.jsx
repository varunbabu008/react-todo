var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

import firebase from 'app/firebase/';

import router from 'app/router/'

// redirect for login and logout
firebase.auth().onAuthStateChanged((user) =>{
  if(user){
    hashHistory.push('/todos');
  }
  else{
    hashHistory.push('/');
  }
});


var actions = require('actions');
var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

//require the user to be logged in for the user to access the page
//We use this using the onEnter property in Routes(below)


ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
