import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB3Rqy9cMZ3pRC6GOeJXwJ7bcOZ-xcPbm4",
  authDomain: "house-marketplace-webapp-97a17.firebaseapp.com",
  projectId: "house-marketplace-webapp-97a17",
  storageBucket: "house-marketplace-webapp-97a17.appspot.com",
  messagingSenderId: "56328663466",
  appId: "1:56328663466:web:1406068753f12238477bd3",
  measurementId: "G-VZQZ5805W4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()