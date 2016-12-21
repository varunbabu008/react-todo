import firebase from 'firebase';

try{

  var config = {
    apiKey: "AIzaSyA4DlS4LH51FLWXlZ6z0WPgp5ujiAxTOKE",
    authDomain: "varun-todo-app.firebaseapp.com",
    databaseURL: "https://varun-todo-app.firebaseio.com",
    storageBucket: "varun-todo-app.appspot.com",
    messagingSenderId: "268323150651"
  };
  firebase.initializeApp(config);

}
catch(e){

}

export var firebaseRef = firebase.database().ref();

export default firebase;