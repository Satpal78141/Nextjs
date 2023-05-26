// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";
import {getDatabase} from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0ko-MGaXIuAGbEwcxt8xDD344Aj6KVA",
  authDomain: "nextjs-75fcb.firebaseapp.com",
  projectId: "nextjs-75fcb",
  storageBucket: "nextjs-75fcb.appspot.com",
  messagingSenderId: "552901706156",
  appId: "1:552901706156:web:f533f7384e27cb514e3a09",
  measurementId: "G-ZXVT2BSSLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const storage = getStorage(app)
 const database = getDatabase(app)
 const db = getFirestore(app);
 const Auth = getAuth();

 export {storage,db,Auth,database}

