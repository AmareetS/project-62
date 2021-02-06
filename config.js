import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyC4l8r07-_6T1sofih5WiWRNOyr0msFtgo",
    authDomain: "project-60-4ca34.firebaseapp.com",
    databaseURL: "https://project-60-4ca34-default-rtdb.firebaseio.com",
    projectId: "project-60-4ca34",
    storageBucket: "project-60-4ca34.appspot.com",
    messagingSenderId: "972286813604",
  };
 if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase.database()