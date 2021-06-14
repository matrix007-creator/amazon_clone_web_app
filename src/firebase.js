// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDb6DjOK-sK3Z6ugnTDqVGik2SRtzJ3swM",
    authDomain: "clone-f3565.firebaseapp.com",
    projectId: "clone-f3565",
    storageBucket: "clone-f3565.appspot.com",
    messagingSenderId: "929683941183",
    appId: "1:929683941183:web:6b6a86330ae5d2c1de958a",
    measurementId: "G-1R0BFLPVFB"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
export {db,auth};  