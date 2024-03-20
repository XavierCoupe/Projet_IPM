import React, { useState } from 'react';
import firebase from 'firebase/compat/app'; // Importez compat/app
import 'firebase/compat/auth'; // Importez compat/auth
import 'firebase/compat/firestore'; // Importez compat/firestore

// Configurer Firebase avec vos propres clés d'API
const firebaseConfig = {

    apiKey: "AIzaSyBUeKhmFj2oiA_x2P44mCKW3vo7SgW2064",
    authDomain: "herbadex-4b81c.firebaseapp.com",
    databaseURL: "https://herbadex-4b81c-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "herbadex-4b81c",
    storageBucket: "herbadex-4b81c.appspot.com",
    messagingSenderId: "622092788203",
    appId: "1:622092788203:web:97d2767d88cec703f2b9ae",
    measurementId: "G-CDQH82R6KR"
  
};

// Initialiser Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // si Firebase est déjà initialisé, utilisez l'instance existante
}

const UserRegistration: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (userCredential.user) {
        // Une fois l'utilisateur inscrit, vous pouvez stocker des informations supplémentaires dans Firestore
        await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
          name: name,
          email: email
        });
        alert('Inscription réussie!');
      }
    } catch (error) {
      console.log("Failure to connect");
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>S'inscrire</button>
    </div>
  );
};

export default UserRegistration;
