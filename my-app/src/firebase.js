import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCugtZbldSHEtiBaYO2jG5ePg3A_9fzBTM",
    authDomain: "marathontraining-102b4.firebaseapp.com",
    databaseURL: "https://marathontraining-102b4.firebaseio.com",
    projectId: "marathontraining-102b4",
    storageBucket: "marathontraining-102b4.appspot.com",
    messagingSenderId: "439689161193",
    appId: "1:439689161193:web:31d2ca7398ca2dac26c378"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebaseConfig;