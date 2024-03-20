import { useNavigate } from 'react-router-dom';

import singin from '../assets/singin.png'
import send from '../assets/send.png'

import '../style/singup.css'

import { useEffect, useState } from 'react';
import Scroller from '../sharedComponent/Scroller';
import Auth from '../sharedComponent/Auth';

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

function SingUp(){
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState(false);

    const [step, setStep] = useState(0);
    
    const [informations, setInformations] = useState<string[]>();
    const [textInformation, setTextInformation] = useState("Pour commencer, comment veux tu que je t'appelle ?");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameMinLength = 3;
    const mailMinLength = 4;
    const passwordMinLength = 7;

    const navigate = useNavigate();

    useEffect(() => {
        const handleSignUp = async () => {
            if(confirmation){
                console.log("wow");
                try {
                    const userCredential = await firebase.auth().createUserWithEmailAndPassword(mail, password);
                    if (userCredential.user) {
                    // Une fois l'utilisateur inscrit, vous pouvez stocker des informations supplémentaires dans Firestore
                    await firebase.firestore().collection('users').doc(userCredential.user.uid).set({
                        name: name,
                        email: mail
                    });
                    alert('Inscription réussie!');
                    }
                } catch (error) {
                    console.log("Failure to connect with status: " + error);
                }
            }
        }

        handleSignUp();
    }, [confirmation])
    
      
    useEffect(() => {
        if(Auth()){
          navigate('/')
        }
    });

    useEffect(() => {
        if(informations && informations.length > 0){
            console.log(informations)
        }
    }, [informations])

    useEffect(() => {
        if(name.length > nameMinLength){
            setInformations([name]);
            setTextInformation("Super, bienvenue à toi @" + name + " ! Quel est ton e-mail ?");
        }
    }, [name])

    useEffect(() => {
        if(mail && mail.length > mailMinLength){
            setInformations(informations?.concat(mail));
            setTextInformation("C'est noté! Pour sécuriser tes données j'ai besoin d'un mot de passe.");
        }
    }, [mail])

    useEffect(() => {
        if(password && password.length > passwordMinLength  && step == 3){
            setInformations(informations?.concat(password));
            setTextInformation("Peut tu me confirmer ton mot de passe ?");
        }
    }, [password])

    useEffect(() => {
        if(confirmation){
            setInformations(informations?.concat(''+confirmation));
            setTextInformation("C'est tous bon pour moi @" + name + " !");
        }
    }, [confirmation])

    const handleNext = () => {
        var inputElement = document.getElementById("informationButton") as HTMLInputElement;
        var messageZone = document.getElementById("messageZone") as HTMLInputElement;

        messageZone.style.display = 'none';

        if(step == 0){
            if (inputElement !== null && inputElement.value.length > nameMinLength) {
                var valeurInput: string = inputElement.value;
                setName(valeurInput);
                inputElement.value = "";
                inputElement.type = "email";
                inputElement.placeholder = "email@domaine.exemple";
                setStep(1);
            }
                messageZone.value = "Erreur: minimum 4 caractères attendus."
                messageZone.style.display = 'initial';
                console.log("test");
                console.log(messageZone.value)
            
        }else if(step == 1){
            if (inputElement !== null && emailRegex.test(inputElement.value)) {
                var valeurInput: string = inputElement.value;
                setMail(valeurInput);
                inputElement.value = "";
                inputElement.type = "password";
                inputElement.placeholder = "mot de passe";
                setStep(2);
            }
        }else if(step == 2){
            if (inputElement !== null && inputElement.value.length > passwordMinLength) {
                var valeurInput: string = inputElement.value;
                setPassword(valeurInput);
                inputElement.value = "";
                setStep(3);
            }
        }else if(step == 3){
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
                }
            }
        }
        
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleNext();
        }
    };

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
                        dfdf
                    </h3>
                </div>
            </div>
        </>
    );
}

export default SingUp