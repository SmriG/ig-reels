// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6nuVFBFtqyCwyQE5M6p_t9NJkms7D85c",
    authDomain: "ig-reels-clone-9867f.firebaseapp.com",
    projectId: "ig-reels-clone-9867f",
    storageBucket: "ig-reels-clone-9867f.appspot.com",
    messagingSenderId: "245663730126",
    appId: "1:245663730126:web:89bff6494563853d72c39f",
    measurementId: "G-1S4VW7SL0M"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;