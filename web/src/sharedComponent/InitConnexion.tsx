import Auth from "./Auth";

/**
 * @author Wandrille BALLEREAU
 * @description Méthode permettant d'initialiser le système de connexion
 * @deprecated N'a plus d'utilité depuis la mise en place de firebase
 */
function InitConnexion(){
    if(Auth()){
        console.log('Connected !');
    }else{
        localStorage.setItem('isConnected', 'false');
        localStorage.setItem('pseudo', '');
        localStorage.setItem('password', '');
    }   
}

export default InitConnexion;