import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";




const firebaseConfig = {
  
  apiKey: "AIzaSyCZHyqvNKz6Uup9bCJEscDZxU7P9WGgLV8",

  authDomain: "e-commerce-final-d350d.firebaseapp.com",

  projectId: "e-commerce-final-d350d",

  storageBucket: "e-commerce-final-d350d.appspot.com",

  messagingSenderId: "523624947226",

  appId: "1:523624947226:web:98774ad8127b32e20cfba3",

  measurementId: "G-H99PXJ0DZJ"

  
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();

export {db, auth};