import firebase from "firebase/compat/app";
import 'firebase/firestore'
import "firebase/compat/auth";
import '@firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAdJ7yQQIpnwuIdgeBNKJ1WeWcCNQjNTBY",
    authDomain: "resume-33820.firebaseapp.com",
    projectId: "resume-33820",
    storageBucket: "resume-33820.appspot.com",
    messagingSenderId: "659284996258",
    appId: "1:659284996258:web:2a63e5406918d6652da7fb",
    measurementId: "G-N11BVLE8ZN"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()
export const auth = firebase.auth();
export const storage = firebase.storage();

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}