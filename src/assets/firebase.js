import { initializeApp } from "firebase/app";
import {  
    // GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
} from "firebase/firestore";
import { useDebugValue } from "react";


const firebaseConfig = {
    apiKey: "AIzaSyCGXR_riK7JCLkpKFeX5dV0zw3_ukGxLt8",
    authDomain: "ret-ui.firebaseapp.com",
    projectId: "ret-ui",
    storageBucket: "ret-ui.appspot.com",
    messagingSenderId: "488752189210",
    appId: "1:488752189210:web:b0e6da4475f6e5ff2666a3",
    measurementId: "G-YV3MFZ9TYP"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logInWithEmailPassword = async (email, password) => {
    
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        //console.log(res.user);
    } catch (error) {
        console.log(error.message);
    }
}

export const registerWithEmailAndPassword = async (userData,email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.dateOfBirth,
        sex: userData.sex,
        type: userData.type
      });
      alert("User Added")
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export const logOut = () => {
    signOut(auth)
  }