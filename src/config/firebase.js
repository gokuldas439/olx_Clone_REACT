import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//     apiKey: "AIzaSyDhK-_SbdErwbUvrltVQ_9Xsejgin1O4-c",
//     authDomain: "olx-clone-8fcbf.firebaseapp.com",
//     projectId: "olx-clone-8fcbf",
//     storageBucket: "olx-clone-8fcbf.appspot.com",
//     messagingSenderId: "241573065831",
//     appId: "1:241573065831:web:d0a26d08fe9e4156c2d0c2",
//     measurementId: "G-HV4Z26XN9J"
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeNEJtarHNhV_eZxxuVXuD04dHVKpW7Zs",
    authDomain: "olxclone-6de3a.firebaseapp.com",
    projectId: "olxclone-6de3a",
    storageBucket: "olxclone-6de3a.appspot.com",
    messagingSenderId: "879970733276",
    appId: "1:879970733276:web:6e3f6085902a4811997819",
    measurementId: "G-033CD0TCMS"
  };



  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);