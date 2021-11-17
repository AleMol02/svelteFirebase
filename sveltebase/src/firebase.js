// Aqui va el driver de conexión de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyCvPFYTImmq8YP4XWdvLStU4yoQKRCrkcA",

    authDomain: "svelte-3feaf.firebaseapp.com",

    projectId: "svelte-3feaf",

    storageBucket: "svelte-3feaf.appspot.com",

    messagingSenderId: "682697744806",

    appId: "1:682697744806:web:f28343f0952f94e4d26f67"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
