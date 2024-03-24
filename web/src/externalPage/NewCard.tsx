//import modules
import GetCard from "../sharedComponent/GetCard";
import testImg from "../assets/clematis.jpeg"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//import css
import '../style/newCard.css'

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
var db = firebase.firestore();

/**
 * La fonction permet de faire la gestion de la capture d'une plante. Elle permet aussi de génerer le code HTML de la page.
 * @returns HTML de la page d'une carte capturé
 */
function NewCard(){
    const navigate = useNavigate();//module de navigation
    const [uid, setUid] = useState('');//hook pour stocker le uid user
    const backHome = () => {
        navigate('/');
    }

    //la fonction permet de stocker dans firebase realtime la nouvelle carte collectionnée
    function stockerInformationsUtilisateur(identifiant: string, listePlantes: number[]) {
        try{
            console.log("Lancement de la requete")
            db.collection("Utilisateurs").doc(identifiant).set({
                listePlantes: listePlantes
            })
            .then(function() {
                console.log("Informations utilisateur stockées avec succès !");
            })
            .catch(function(error: any) {
                console.error("Erreur lors du stockage des informations utilisateur : ", error);
            });
        }catch(error){
            console.log("une erreur s'est produite: " + error)
        }
        
    }

    //La fonction permet de récupérer les informations utilisateurs
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            setUid(user.uid);
            console.log("UID de l'utilisateur actuel (" + user + ") :", uid);
        } else {
            console.log("Aucun utilisateur connecté.");
        }
    });

    //la liste des plantes utilisateur
    var listePlantes = [13];
    //requete pour stocker les informations quans uid est mis à jour
    useEffect(() => {
        if(uid.length > 0){
            stockerInformationsUtilisateur(uid, listePlantes);
        }
    }, [uid])
    
    return(
        <div className="mainContainer">
            <div className="itemContainer">
                <h2>Félicitations, vous avez capturé une Clematis !</h2>
            </div>
            <div className="itemContainer">
                <GetCard key={0} name={"Clematis"} image={testImg} id={"newClematis"}/>
            </div>
            <div className="itemContainer">
                <button className="homeButton" onClick={backHome}>Voir ma collection</button>
            </div>
        </div>
    )
}

export default NewCard