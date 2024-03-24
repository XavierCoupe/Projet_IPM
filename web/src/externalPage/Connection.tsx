//import modules
import { useNavigate } from 'react-router-dom';
import Auth from '../sharedComponent/Auth';
import logo from '../assets/logo-web.png'
import Scroller from '../sharedComponent/Scroller';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

//import css
import '../style/connection.css'

// Configuration firebase
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
  

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);

/**
 * @author Wandrille BALLEREAU
 * @description Permet la gestion du système de connexion utilisateur et la génération du code HTML associé
 * @returns Retourne le code HTML de la page de connexion
 */
function Connection(){
    const navigate = useNavigate();

    //redirection vers la page principale si l'utilisateur n'est pas connecté
    useEffect(() => {
        if(Auth()){
            navigate('/')
        }
    })
    
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //constante pour mettre à jour le mail entré par l'utilisateur
    const handleInputMail = () => {
        const mailInput = document.getElementById("mailInput") as HTMLInputElement;
        setMail(mailInput.value);
    }

    //constante pour mettre à jour le mot de passe entré par l'utilisateur
    const handleInputPassword = () => {
        const passwordInput = document.getElementById("passwordInput") as HTMLInputElement;
        setPassword(passwordInput.value);
    }

    //système de connexion
    //affiche un message si problème lors de la connexion
    const handleConnect = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(mail, password);
            localStorage.setItem('isConnected', 'true');
            navigate('/');
        } catch (error) {
            setErrorMessage("Erreur de connexion: " + error)
        } 
    }

    //système de redirection vers la page de création de compte
    const handleCreateAccount = () => {
        navigate('/singup');
    }

     //Si la touche entrer est pressé on active l'étape suivante
     const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleConnect();
        }
    };

    return (
        <>
            <Scroller/>
            <div className='mainContainer'>
                <h1>Se connecter</h1>
                <img src={logo} alt="logo" />
                <div className='inputContainer'>
                    <input type="email" id="mailInput" placeholder='votre@email.domaine' onKeyDown={handleKeyDown} onChange={handleInputMail} style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                    <input type="password" id="passwordInput" placeholder='mot de passe' onKeyDown={handleKeyDown} onChange={handleInputPassword} style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                </div>
                    <h4 id='errorBox'>
                        {errorMessage}
                    </h4>
                <div className='connectContainer'>
                    <button onClick={handleConnect} className='connectButton'><h4>Se connecter</h4></button>
                    <button onClick={handleCreateAccount} className='noAccountButton'><h4>Pas encore de compte?</h4></button>
                </div>
                
            </div>
        
       
        </>
    )
}

export default Connection;