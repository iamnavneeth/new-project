import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBoz_kOZsaxUWfJdHPiHXVVNswTE1f-9tY",
    authDomain: "football-details.firebaseapp.com",
    projectId: "football-details",
    storageBucket: "football-details.appspot.com",
    messagingSenderId: "313639562774",
    appId: "1:313639562774:web:192e9f8a581c0e18f9cf37"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig)

    //initialize firestore
    const projectFirestore=firebase.firestore() 
    const timestamp=firebase.firestore.FieldValue.serverTimestamp

    export {projectFirestore,timestamp}