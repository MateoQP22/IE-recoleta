/*
// USUARIO : mateo@gmail.com
// Contraseña : Mateo12345

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8vioH5Nv4BB9C8ii0uSmYOE_SuUFLNg",
  authDomain: "recoleta-acceso.firebaseapp.com",
  databaseURL: "https://recoleta-acceso-default-rtdb.firebaseio.com",
  projectId: "recoleta-acceso",
  storageBucket: "recoleta-acceso.appspot.com",
  messagingSenderId: "428991546423",
  appId: "1:428991546423:web:e10e6c7876bec713262bb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

*/