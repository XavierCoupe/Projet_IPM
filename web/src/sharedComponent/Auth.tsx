import firebase from "firebase/compat/app";


function Auth(){
    const user = firebase.auth().currentUser;
    if(user){
        return true;
    }else{
        return false;
    }
}

export default Auth;