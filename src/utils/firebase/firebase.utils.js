
import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHL1KWZ2lpLredD2xUnlCfeWkhxiOUhc4",
    authDomain: "crown-clothing-973d9.firebaseapp.com",
    projectId: "crown-clothing-973d9",
    storageBucket: "crown-clothing-973d9.appspot.com",
    messagingSenderId: "19720530775",
    appId: "1:19720530775:web:5765719d1a9f686aad6c12"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

//Creating The signIn Authenthication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
 export const auth = getAuth();
 export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Creating the Firestore Database
export const db = getFirestore();

export const creatUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const craetedAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        craetedAt
      })
    }catch(error) {
      console.log('error creating the user', error)
    }
  }

  return userDocRef;

}

 
