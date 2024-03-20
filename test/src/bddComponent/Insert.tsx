import firebase from 'firebase/compat/app'; // Importez compat/app
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

// Fonction pour stocker les données des plantes dans Firestore
const storePlantsData = async (plantsData: any[]) => {
    const db = firebase.firestore();
    const plantsCollection = db.collection('plants');

    plantsData.forEach(async (plant) => {
        try {
            await plantsCollection.add(plant);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la plante:', error);
        }
    });
};

// Données des plantes à stocker dans Firestore
const plantsData = {
    "data": [    ]
};

// Appel de la fonction pour stocker les données des plantes dans Firestore
storePlantsData(plantsData.data);
