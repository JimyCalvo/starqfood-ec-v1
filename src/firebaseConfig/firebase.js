import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDNM7sHdYqSUcd0nFjacyJaCFio6WIxtT0",
  authDomain: "crud-sqf.firebaseapp.com",
  databaseURL: "https://crud-sqf-default-rtdb.firebaseio.com",
  projectId: "crud-sqf",
  storageBucket: "crud-sqf.appspot.com",
  messagingSenderId: "835990127870",
  appId: "1:835990127870:web:b16f8b2e33c55cdad491af"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)



