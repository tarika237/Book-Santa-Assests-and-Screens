import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBopxWNg8f5Pbw9oezAE1zbq7xEDmHTQ_g",
    authDomain: "book-santa-bae4c.firebaseapp.com",
    databaseURL: "https://book-santa-bae4c.firebaseio.com",
    projectId: "book-santa-bae4c",
    storageBucket: "book-santa-bae4c.appspot.com",
    messagingSenderId: "416334157289",
    appId: "1:416334157289:web:181de281498d76f3cda778"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();