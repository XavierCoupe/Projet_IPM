import firebase from 'firebase/compat/app'; // Importez compat/app
import 'firebase/compat/firestore'; // Importez compat/firestore
// Fonction pour récupérer les données des plantes depuis Firestore
const fetchPlantsData = async () => {
    const db = firebase.firestore();
    const plantsCollection = db.collection('plants');
    
    try {
        const snapshot = await plantsCollection.get();
        const plantsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return plantsData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des plantes:', error);
        return [];
    }
};
    
// Appel de la fonction pour récupérer les données des plantes depuis Firestore
const plantsDataFromFirestore = await fetchPlantsData();
console.log(plantsDataFromFirestore);
    