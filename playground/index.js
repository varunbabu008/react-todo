import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA4DlS4LH51FLWXlZ6z0WPgp5ujiAxTOKE",
    authDomain: "varun-todo-app.firebaseapp.com",
    databaseURL: "https://varun-todo-app.firebaseio.com",
    storageBucket: "varun-todo-app.appspot.com",
    messagingSenderId: "268323150651"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    app:{
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user:{
      name: 'Varun',
      age: 24
    }
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
  console.log('new todo added', snapshot.key, snapshot.val());
});

todosRef.push({
  text:'Todo 1'
});
todosRef.push({
  text:'Todo 2'
});