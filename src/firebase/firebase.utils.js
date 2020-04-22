import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDug5crgitLQswy2MxzRxblS8T_9g2CdYU",
    authDomain: "store-db-fe22d.firebaseapp.com",
    databaseURL: "https://store-db-fe22d.firebaseio.com",
    projectId: "store-db-fe22d",
    storageBucket: "store-db-fe22d.appspot.com",
    messagingSenderId: "450273728191",
    appId: "1:450273728191:web:ef86e3d2a3ec1a6d51980a"
  };
  
 // Initialize Firebase
 firebase.initializeApp(config);
 export const auth = firebase.auth()
 export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    'login_hint': 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`)
   const snapshot = userRef.get();

   if (!snapshot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
       } catch (error) {
            console.log('error creating user', error.message)
       }
   }
   return userRef
   
}

export default firebase;