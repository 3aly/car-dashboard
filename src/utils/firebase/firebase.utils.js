import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4eE_MUEgXt-ygZns7vuozUabEeuRd50E",
  authDomain: "car-dashboard-bc813.firebaseapp.com",
  projectId: "car-dashboard-bc813",
  storageBucket: "car-dashboard-bc813.appspot.com",
  messagingSenderId: "645337738957",
  appId: "1:645337738957:web:f3767fda4119988202c384",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) {
    return;
  }

  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const createUserDocumnetFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef, "userDocRef");
  const userSnapShopt = await getDoc(userDocRef);
  console.log(userSnapShopt, "userSnapShopt");

  if (!userSnapShopt.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    console.log(userAuth, "userAuth");
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error");
    }
  }
  console.log(userDocRef, "secind userSnapShopt");

  return userDocRef;
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);
