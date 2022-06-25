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
  apiKey: "AIzaSyD4kXw0u9VS1Q8_7cSSMZ_LHNw1vAxhu40",
  authDomain: "retina-database.firebaseapp.com",
  projectId: "retina-database",
  storageBucket: "retina-database.appspot.com",
  messagingSenderId: "775180125520",
  appId: "1:775180125520:web:48862b9448c2206eed1855",
  measurementId: "G-79PMHGW695"
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