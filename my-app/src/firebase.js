import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCugtZbldSHEtiBaYO2jG5ePg3A_9fzBTM",
    authDomain: "marathontraining-102b4.firebaseapp.com",
    databaseURL: "https://marathontraining-102b4.firebaseio.com",
    projectId: "marathontraining-102b4",
    storageBucket: "marathontraining-102b4.appspot.com",
    messagingSenderId: "439689161193",
    appId: "1:439689161193:web:aa3c571f5d339a8026c378"
};

firebase.initializeApp(firebaseConfig);
export default firebase;