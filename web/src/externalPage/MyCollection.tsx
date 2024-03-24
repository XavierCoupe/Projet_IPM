//import modules
import Auth from '../sharedComponent/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import empty from '../assets/empty.png'
import bravo from '../assets/bravo.png'
import Scroller from '../sharedComponent/Scroller';
import GetMyCollectionCards from '../sharedComponent/GetMyCollectionCards';

//import css
import '../style/collection.css'

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

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

/**
 * @author Wandrille BALLEREAU
 * @description Fonction permettant la gestion de la page principale et génération de son code HTML associé
 * @returns Retourne le code HTML de la page d'affichage de la collection de l'utilisateur
 */
function MyCollection() {
  const [uid, setUid] = useState('');
  const [species, setSpecies] = useState([]);

    const navigate = useNavigate();

    //vérification de la connexion de l'utilisateur
    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    /**
     * @description Fonction permettant
     * @param uid L'id de l'utilisateur connecté
     * @returns rien
     */
    function recupererListeEntiers(uid: string | undefined) {
      db.collection("Utilisateurs").doc(uid).get()
        .then(function(doc) {
          if (doc.exists) {
            // Récupérer la liste des entiers
            var listePlantes = doc.data()?.listePlantes;
            setSpecies(listePlantes)
          } else {
            console.log("Aucun document trouvé pour cet utilisateur.");
          }
        })
        .catch(function(error) {
          console.error("Erreur lors de la récupération des données :", error);
        });
    }

    //récupération de l'utilisateur connecté
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setUid(user.uid);
      }
  });
    
    // Utilisation de la fonction pour récupérer la liste des entiers pour un UID spécifique
    useEffect(() => {
        if(uid.length > 0){
          recupererListeEntiers(uid);
        }
    }, [uid])

    //on retourne le HTML avec la collection de l'utilisateur si elle existe
    if(species.length > 0){
      return(
        <>
          <Scroller />
          <div className='mainTitle'>
            <h1>Ma collection</h1>
          </div>
          <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {species.map((specie) => (
            <GetMyCollectionCards id={specie}/>
          ))}
          </div>
          <div className='text'>
            <h2>Vous avez une sacrée collection</h2>
            <img className='bravoImg' src={bravo} alt="Image de félicitation" />
          </div>
        </>
      );
    }else{
      return(
        <>
          <Scroller />
          <div className='noCardInCollection'>
            <img style={{width: '10rem'}} src={empty} alt="empty icon" />
            <h1>Vous n'avez aucune plante dans votre collection pour le moment</h1>
            <h3>Voyagez, découvrez et scanez votre environnement pour remplir votre collection!</h3>
          </div>
        </>
      );
    }
}

export default MyCollection