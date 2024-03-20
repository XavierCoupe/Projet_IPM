import Auth from "./Auth";

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