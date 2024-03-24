import { useNavigate } from 'react-router-dom';
import singin from '../assets/singin.png'
import send from '../assets/send.png'
import { useEffect, useState } from 'react';
import Scroller from '../sharedComponent/Scroller';
import Auth from '../sharedComponent/Auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import '../style/singup.css'

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

/**
 * @author Wandrille BALLEREAU
 * @description Permet la gestion de la page de connexion et la génération de son code HTML associé
 * @returns Le code HTML de la page de connexion
 */
function SingUp(){
    //Hooks pour stocker les informations entrée par l'utilisateur
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState(false);

    //Hook pour savoir où on en est dans les étapes de création du compte
    const [step, setStep] = useState(0);
    
    //Hook pour gérer les affichages à l'écran
    const [informations, setInformations] = useState<string[]>();
    const [textInformation, setTextInformation] = useState("Pour commencer, comment veux tu que je t'appelle ?");
    const [textError, setTextError] = useState('');

    //constante de vérification de la validité des informations rentrée par l'utilisateur
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameMinLength = 3;
    const mailMinLength = 4;
    const passwordMinLength = 7;

    const navigate = useNavigate();

    //vérification de la non-connexion de l'utilisateur
    useEffect(() => {
        if(Auth()){
          navigate('/')
        }
    });

    //crée le compte de l'utilisateur si la dernière étape a bien été effetuée
    useEffect(() => {
        const handleSignUp = async () => {
            if(confirmation){
                try {
                    firebase.auth().createUserWithEmailAndPassword(mail, password)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        user?.updateProfile({
                            displayName: name
                        });
                        user?.sendEmailVerification()
                    })
                } catch (error) {
                    console.log("Failure to connect with status: " + error);
                }
            }
        }

        handleSignUp();
    }, [confirmation])
    
    //Affiche les informations de l'utilisateur dans la console pour débuguer
    /*
    useEffect(() => {
        if(informations && informations.length > 0){
            console.log(informations)
        }
    }, [informations])*/

    //si le nom est mis à jour et valable -> on met à jour les informations
    useEffect(() => {
        if(name.length > nameMinLength){
            setInformations([name]);
            setTextInformation("Super, bienvenue à toi @" + name + " ! Quel est ton e-mail ?");
        }
    }, [name])

    //si le mail est mis à jour et valable -> on met à jour les informations
    useEffect(() => {
        if(mail && mail.length > mailMinLength){
            setInformations(informations?.concat(mail));
            setTextInformation("C'est noté! Pour sécuriser tes données j'ai besoin d'un mot de passe.");
        }
    }, [mail])

    //si le mot de passe est mis à jour et valable -> on met à jour les informations
    useEffect(() => {
        if(password && password.length > passwordMinLength  && step == 3){
            setInformations(informations?.concat(password));
            setTextInformation("Peut tu me confirmer ton mot de passe ?");
        }
    }, [password])

    //si le mot de passe est confirmé et est mis à jour -> on met à jour les informations
    useEffect(() => {
        if(confirmation){
            setInformations(informations?.concat(''+confirmation));
            setTextInformation("C'est tous bon pour moi @" + name + " !");
        }
    }, [confirmation])

    //Gestion des étapes dans le système de connexion
    const handleNext = () => {
        //récupération des éléments présent sur la page
        var inputElement = document.getElementById("informationButton") as HTMLInputElement;

        //Affichage de la page et mise à jour des informations utilisateurs
        //en fonction de l'étape dans le processus d'inscription
        if(step == 0){//step 0 -> gestion du nom + affichage de la section email 
            if (inputElement !== null && inputElement.value.length > nameMinLength) {
                var valeurInput: string = inputElement.value;
                setName(valeurInput);
                inputElement.value = "";
                inputElement.type = "email";
                inputElement.placeholder = "email@domaine.exemple";
                setStep(1);
            }else{
                setTextError("Erreur: minimum 4 caractères attendus.")
            }
            
        }else if(step == 1){//step 1 -> gestion de l'email + affichage de la section password
            if (inputElement !== null && emailRegex.test(inputElement.value)) {
                var valeurInput: string = inputElement.value;
                setMail(valeurInput);
                inputElement.value = "";
                inputElement.type = "password";
                inputElement.placeholder = "mot de passe";
                setStep(2);
            }else{
                setTextError("Erreur: Email au format exemple@domaine.extension attendu.")
            }
        }else if(step == 2){//step 2 -> gestion du password + affichage de la section check password
            if (inputElement !== null && inputElement.value.length > passwordMinLength) {
                var valeurInput: string = inputElement.value;
                setPassword(valeurInput);
                inputElement.value = "";
                setStep(3);
            }else{
                setTextError("Erreur: minimum 8 caractères attendus.")
            }
        }else if(step == 3){//step 3 -> gestion de la confirmation du mot de passe + affichage du retour au menu
            if (inputElement !== null && inputElement.value.length > passwordMinLength) {
                var valeurInput: string = inputElement.value;
                if(valeurInput == password){
                    setConfirmation(true);
                    inputElement.style.display = 'none';
                    inputElement = document.getElementById("nextButton") as HTMLInputElement;
                    inputElement.style.display = 'none';
                    inputElement = document.getElementById("backHome") as HTMLInputElement;
                    inputElement.style.display = 'initial';
                    setStep(4);
                }else{
                    setTextError("Erreur: Les mots de passes doivent être identique.")
                }
            }else{
                setTextError("Erreur: minimum 8 caractères attendus.")
            }
        }
        
    }

    //Si la touche entrer est pressé on active l'étape suivante
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleNext();
        }
    };

    //handle pour revenir à la page principale
    const handleComeBack = () => {
        navigate('/');
    }

    return(
        <>
            <Scroller/>
            <div className="mainContainer">
                <div>
                    <h1>Apprenons à te connaître</h1>
                </div>
                <div>
                    <img className='singInImg' src={singin} alt="image creation compte" />
                </div>
                <div className='secondContainer'>
                    <div>
                        <h4 id='textInformation'>{textInformation}</h4>
                    </div>
                    <div>
                        <input className='nameInput' type="text" placeholder='Jean' id="informationButton" onKeyDown={handleKeyDown}/>
                        <button className='sendButton' type="submit" onClick={handleNext} id='nextButton'><img src={send} alt="suivant" /></button>
                        <button className='backHome' id='backHome' onClick={handleComeBack}>Revenir à la page de connexion</button>
                    </div>
                </div>
                <div>
                    <h3 id='messageZone' className='messageZone'>
                        {textError}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default SingUp