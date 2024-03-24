import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDM1wlafC_kJAy4zmb99thhHkuZ5LQxiDg",
    authDomain: "herbadex-c6d0c.firebaseapp.com",
    databaseURL: "https://herbadex-c6d0c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "herbadex-c6d0c",
    storageBucket: "herbadex-c6d0c.appspot.com",
    messagingSenderId: "381823071396",
    appId: "1:381823071396:web:d7dae728c11fdd08fc6231",
    measurementId: "G-4S98PKF5FL"
  };

const app = firebase.initializeApp(firebaseConfig);

//const db = firebase.firestore();
const db = getFirestore(app);
const tailles = collection(db, "utilisateurs");

const StockageTaille: React.FC = () => {
  const [taille, setTaille] = useState<number>(0);

  const handleTailleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nouvelleTaille = parseInt(event.target.value, 10);
    setTaille(nouvelleTaille);
  };

  const sauvegarderTaille = () => {
    console.log("test");
    addDoc(tailles, {taille})
    getTailles()
  };

  const getTailles = () => {
    console.log("test2");
    getDocs(tailles).then((snapshot) => {
        let sizes: any = [];
        snapshot.docs.forEach((doc) => {
            sizes.push({...doc.data(), id: doc.id});
        });
        console.log(sizes);
    })
  }

  return (
    <div>
      <h2>Stockage de Taille dans Firebase</h2>
      <input type="number" value={taille} onChange={handleTailleChange} />
      <button onClick={sauvegarderTaille}>Sauvegarder Taille</button>
    </div>
  );
};

export default StockageTaille;
