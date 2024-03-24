//import modules
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Auth from "../sharedComponent/Auth";
import Scroller from '../sharedComponent/Scroller';
import Disconnect from '../sharedComponent/Disconnect';
import firebase from 'firebase/compat/app';
import picture from '../assets/homme.png'//image

//import css
import '../style/profile.css'

//configuration firebase
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

/**
 * @author Wandrille BALLEREAU
 * @description La fonction gère tous ce qui est mise à jour profile, récupération d'informations
 * @description Elle permet ensuite de les afficher correctement
 * @returns la page de profile
 */
function Profile(){
    const [email, setEmail] = useState<any>();
    const [name, setName] = useState<any>();
    const [checked, setChecked] = useState<any>();
    const [profilePicture, setProfilePicture] = useState<any>();

    const [newMail, setNewMail] = useState('');
    const [newName, setNewName] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [textError, setTextError] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const navigate = useNavigate();

    //on vérifie que l'utilisateur est bien connecté
    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    //handle permettant la déconnexion de l'utilisateur
    const handleDisconnect = () => {
        Disconnect();
        navigate('/connexion');
      }

    //fonction permettant de mettre à jour les hooks
    //pour récupérer les donneés utilisateur
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setEmail(user.email);
            setName(user.displayName);
            setChecked(user.emailVerified);
            setProfilePicture(user.photoURL);
        } else {
            console.log("Aucun utilisateur connecté.");
        }
    });

    //constante pour update le mail
    const handleNewMail = () => {
        const inputElement = document.getElementById("emailInput") as HTMLInputElement;
        setNewMail(inputElement.value)
    }

    //constante pour update le nom
    const handleNewName = () => {
        const inputElement = document.getElementById("nameInput") as HTMLInputElement;
        setNewName(inputElement.value)
    }

    //constante pour update le mot de passe
    const handleNewPassword = () => {
        const inputElement = document.getElementById("passwordInput") as HTMLInputElement;
        setNewPassword(inputElement.value)
    }

    //constante pour mettre à jour les informations modifiées sur le serveur
    const handleUpdateProfile = () => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if(emailRegex.test(newMail)){
                    user.updateEmail(newMail);
                }else if(newMail.length > 0){
                    setTextError("Erreur: Email au format aaa@bbb.ccc attendu.");
                }
                if(newName.length > 3){
                    user.updateProfile({
                        displayName: newName
                    })
                }else if(newName.length > 0){
                    setTextError("Erreur: Votre nom doit contenir au minimum 4 caractères.");
                }
                if(newPassword.length > 7){
                    user.updatePassword(newPassword)
                }else if(newPassword.length > 0){
                    setTextError("Erreur: Le mot de passe doit faire au minimum 7 caractères");
                }
                
            } else {
                console.log("Aucun utilisateur connecté.");
            }
        });
    }

    return(
        <>
            <Scroller/>
            <div className='mainContainer'>
                <h1>Bienvenue @{name}</h1>
                <div className='secondContainer'>
                    <div className='pictureSection'>
                        <input type="image" src={profilePicture || picture} alt="picture"/>
                    </div>
                    <h4 className='errorBox'>{textError}</h4>
                    <div className='section'>
                        <h2>Pseudo</h2>
                        <input type="email" id="nameInput" placeholder={name} onChange={handleNewName}/>
                    </div>
                    <div className='section'>
                        <h2>Email</h2>
                        <input type="email" name="" id="emailInput" placeholder={email} onChange={handleNewMail}/>
                        {checked && <h6 className='emailInfos'>Email vérifié</h6>}
                    </div>
                    <div className='section'>
                        <h2>Nouveau mot de passe</h2>
                        <input type="email" id="passwordInput" onChange={handleNewPassword}/>
                    </div>
                        <div className='buttonSection' id='first'>
                            <button type="submit" onClick={handleUpdateProfile}>Mettre à jour le profile</button>
                        </div>
                        <div className='buttonSection'>
                            <button type="submit" onClick={handleDisconnect}>Se déconnecter</button>
                        </div>                    
                </div>
            </div>
        </>
    );
}

export default Profile