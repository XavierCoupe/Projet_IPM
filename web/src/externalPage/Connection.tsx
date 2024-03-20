import { useNavigate } from 'react-router-dom';
import Auth from '../sharedComponent/Auth';
import logo from '../assets/logo-web.png'

import '../style/connection.css'
import Scroller from '../sharedComponent/Scroller';
import { useState } from 'react';

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

function Connection(){
    const navigate = useNavigate();

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputMail = () => {
        const mailInput = document.getElementById("mailInput") as HTMLInputElement;
        setMail(mailInput.value);
    }

    const handleInputPassword = () => {
        const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
        setPassword(passwordInput.value);
    }

    const handleConnect = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(mail, password);
            localStorage.setItem('isConnected', 'true');
            navigate('/');
        } catch (error) {
            console.log("Failure to connect " + error);
        } 
    }

    const handleCreateAccount = () => {
        navigate('/singup');
    }

    if(Auth()){
        navigate('/');
    }

    return (
        <>
            <Scroller/>
            <div className='mainContainer'>
                <h1>Se connecter</h1>
                <img src={logo} alt="logo" />
                <div className='inputContainer'>
                    <input type="email" id="mailInput" placeholder='votre@email.domaine' onChange={handleInputMail} style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                    <input type="password" id="passwordInput" placeholder='mot de passe' onChange={handleInputPassword} style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                </div>
                <div className='connectContainer'>
                    <button onClick={handleConnect} className='connectButton'><h4>Se connecter</h4></button>
                    <button onClick={handleCreateAccount} className='noAccountButton'><h4>Pas encore de compte?</h4></button>
                </div>
            </div>
        
       
        </>
    )
}

export default Connection;