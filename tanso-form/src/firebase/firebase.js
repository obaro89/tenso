// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCaDDk-oxH3YPDXcrePDo_mk_OwYA9AtQ",
  authDomain: "tanso-form.firebaseapp.com",
  projectId: "tanso-form",
  storageBucket: "tanso-form.appspot.com",
  messagingSenderId: "679486372102",
  appId: "1:679486372102:web:d5820594af8d7db42d4687",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
