// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH8jIfv31M6fMS3oQyTSLJ5O0xz-WTJ-E",
  authDomain: "acciones-12a8d.firebaseapp.com",
  projectId: "acciones-12a8d",
  storageBucket: "acciones-12a8d.appspot.com",
  messagingSenderId: "229667755087",
  appId: "1:229667755087:web:9547ff95537decdbae463a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const getFirestoreApp = () =>{
    return app;
}