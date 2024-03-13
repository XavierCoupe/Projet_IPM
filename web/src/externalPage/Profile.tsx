import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from "../sharedComponent/Auth";

import picture from '../assets/laga.webp'

import '../style/profile.css'
import Scroller from '../sharedComponent/Scroller';

function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    return(
        <>
            <Scroller/>
            <div className='mainContainer'>
                <h1>Bienvenue @Japanga</h1>
                <div className='secondContainer'>
                    <div className='pictureSection'>
                        <img src={picture} alt="picture" />
                    </div>
                    <div className='section'>
                        <h2>Pseudo</h2>
                        <input type="email" name="" id="" placeholder='Japanga'/>
                    </div>
                    <div className='section'>
                        <h2>Email</h2>
                        <input type="email" name="" id="" placeholder='ceci@est.monmail'/>
                    </div>
                    <div className='section'>
                        <h2>Nouveau mot de passe</h2>
                        <input type="email" name="" id=""/>
                    </div>
                    <div className='buttonSection'>
                        <button type="submit">Enregistrer les informations</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile