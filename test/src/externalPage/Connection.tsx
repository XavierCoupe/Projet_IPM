import { useNavigate } from 'react-router-dom';
import Auth from '../sharedComponent/Auth';
import logo from '../assets/logo-web.png'

import '../style/connection.css'
import Scroller from '../sharedComponent/Scroller';

function Connection(){
    const navigate = useNavigate();

    const handleConnect = () => {
        localStorage.setItem('isConnected', 'true');
        navigate('/');
    }

    const handleCreateAccount = () => {
        navigate('/singup');
    }

    if(Auth()){
        navigate('/');
    }

    return (
        <>
            <Scroller/>
            <div className='mainContainer'>
                <h1>Se connecter</h1>
                <img src={logo} alt="logo" />
                <div className='inputContainer'>
                    <input type="email" name="" id="" placeholder='votre@email.domaine' style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                    <input type="password" name="" id="" placeholder='mot de passe' style={{borderRadius: "4px", marginTop: "2rem", width: '100%'}}/>
                </div>
                <div className='connectContainer'>
                    <button onClick={handleConnect} className='connectButton'><h4>Se connecter</h4></button>
                    <button onClick={handleCreateAccount} className='noAccountButton'><h4>Pas encore de compte?</h4></button>
                </div>
            </div>
        
       
        </>
    )
}

export default Connection;