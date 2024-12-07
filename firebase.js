import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
 
import { getAuth,onAuthStateChanged
 ,signInWithEmailAndPassword,sendEmailVerification,GoogleAuthProvider,signInWithPopup,
 sendPasswordResetEmail,deleteUser, createUserWithEmailAndPassword,signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

import { getFirestore,collection, addDoc,getDocs,Timestamp,query,orderBy,limit,doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyC32tQS_NmstwbKrYjNFNKo5yK85L9-3ZE",
  authDomain: "my-app-adf26.firebaseapp.com",
  databaseURL: "https://my-app-adf26-default-rtdb.firebaseio.com",
  projectId: "my-app-adf26",
  storageBucket: "my-app-adf26.firebasestorage.app",
  messagingSenderId: "981133097165",
  appId: "1:981133097165:web:115436d6bc6053af095184"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);





export{ app,auth,
 onAuthStateChanged,signInWithEmailAndPassword,sendEmailVerification,
 GoogleAuthProvider,provider,signInWithPopup,sendPasswordResetEmail,deleteUser,createUserWithEmailAndPassword,signOut, db,
 getFirestore,
 collection, 
 addDoc,getDocs,
 Timestamp,
 query,
 orderBy, limit,doc, deleteDoc};
