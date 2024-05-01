import firebase from "firebase/compat/app"
import "firebase/compat/database"   // new way to import from firebase
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
 

const firebaseConfig = {
    apiKey: "AIzaSyAFpfHp-Pj1y3mvrOSBmxAVWEQkhH10aHs",
    authDomain: "disney-clone-29deb.firebaseapp.com",
    projectId: "disney-clone-29deb",
    storageBucket: "disney-clone-29deb.appspot.com",
    messagingSenderId: "519678953798",
    appId: "1:519678953798:web:fba121a9412eea41e37d47"
};
  


// Access Firebase services
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage };
export default db;