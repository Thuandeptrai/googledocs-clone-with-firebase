import firebase from 'firebase'
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCQRbrK6ZVPJEG6s8xHiKZtUdfPio7xggw",
    authDomain: "docclone1.firebaseapp.com",
    projectId: "docclone1",
    storageBucket: "docclone1.appspot.com",
    messagingSenderId: "628713055888",
    appId: "1:628713055888:web:ccb92dedec2c6300b09a15",
    measurementId: "G-QXPZ843ZG7"
  };

  firebase.initializeApp(firebaseConfig);
  const { FieldValue } = firebase.firestore;
  firebase.analytics();
  export{firebase,FieldValue}