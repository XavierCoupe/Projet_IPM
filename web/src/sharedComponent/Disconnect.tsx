import firebase from "firebase/compat/app";

/**
 * @author Wandrille BALLEREAU
 * @description Fonction pour déconnecter l'utilisateur
 */
function Disconnect(){
    firebase.auth().signOut().then(() => {
        console.log("Utilisateur déconnecté avec succès !");
    }).catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
    });
}

export default Disconnect;