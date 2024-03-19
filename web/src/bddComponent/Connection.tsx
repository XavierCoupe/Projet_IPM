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
firebase.initializeApp(firebaseConfig);

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Mot de passe:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Se connecter</button>
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default LoginPage;
