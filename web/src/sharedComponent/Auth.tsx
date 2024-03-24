//import modules
import firebase from "firebase/compat/app";

/**
 * @author Wandrille BALLEREAU
 * @description Fonction permettant de vérifier la connexion d'un utilisateur au logiciel
 * @returns true ou false selon si l'utilisateur est connecté
 */
function Auth(){
    const user = firebase.auth().currentUser;//récupération du user connecté s'il existe

    if(user){
        return true;
    }else{
        return false;
    }
}

export default Auth;