import firebase from 'firebase';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyChFYC5Y-NTyXDSBtI6B85jE_N1wBCbQ54",
  authDomain: "nodejs-firebase-bot.firebaseapp.com",
  databaseURL: "https://nodejs-firebase-bot.firebaseio.com",
  storageBucket: "nodejs-firebase-bot.appspot.com",
  messagingSenderId: "746078854272"
};
var fire = firebase.initializeApp(config);
export default fire;