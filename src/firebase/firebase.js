import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFLV2BnxIifRucieALDpVOUWLTq7Ukzx8",
  authDomain: "ridewiseauth.firebaseapp.com",
  projectId: "ridewiseauth",
  storageBucket: "ridewiseauth.appspot.com",
  messagingSenderId: "336300968650",
  appId: "1:336300968650:web:6fc5b881b8e827ac76c233",
  measurementId: "G-77VS9GK69W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { app, auth }