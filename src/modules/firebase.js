// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// My web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLZh-Oee3mkiDCJe6f5PuWeBJjshHBg8A",
    authDomain: "aaronclemensprojectfive.firebaseapp.com",
    databaseURL: "https://aaronclemensprojectfive.firebaseio.com",
    projectId: "aaronclemensprojectfive",
    storageBucket: "aaronclemensprojectfive.appspot.com",
    messagingSenderId: "680980271864",
    appId: "1:680980271864:web:34a33bf3a0935d2e3de10d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;