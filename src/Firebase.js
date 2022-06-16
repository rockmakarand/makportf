import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAdJ7yQQIpnwuIdgeBNKJ1WeWcCNQjNTBY",
    authDomain: "resume-33820.firebaseapp.com",
    projectId: "resume-33820",
    storageBucket: "resume-33820.appspot.com",
    messagingSenderId: "659284996258",
    appId: "1:659284996258:web:2a63e5406918d6652da7fb",
    measurementId: "G-N11BVLE8ZN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);