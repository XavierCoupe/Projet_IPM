function Auth(){
    if(localStorage.getItem('isConnected') === "true"){
        return true;
    }else{
        return false;
    }
}

export default Auth;