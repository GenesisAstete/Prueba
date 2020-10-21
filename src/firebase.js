import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDTopX75xCD64aqgVwpHkgUJhX8gqbbF_Y",
    authDomain: "weather-31387.firebaseapp.com",
    databaseURL: "https://weather-31387.firebaseio.com",
    projectId: "weather-31387",
    storageBucket: "weather-31387.appspot.com",
    messagingSenderId: "251142715632",
    appId: "1:251142715632:web:b817130d61025ecbe26a35"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};
 