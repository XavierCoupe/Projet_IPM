import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from "../sharedComponent/Auth";
import { Carousel, CarouselItem } from 'react-bootstrap';

import picture from '../assets/laga.webp'

import '../style/profile.css'
import Scroller from '../sharedComponent/Scroller';
import Disconnect from '../sharedComponent/Disconnect';

function Profile(){

    const navigate = useNavigate();

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    const handleDisconnect = () => {
        Disconnect();
        navigate('/connexion');
      }

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
                    <Carousel slide={false} interval={null} style={{width: "20rem"}}>
                        <CarouselItem>
                        <div className='buttonSection'>
                            <button type="submit">Enregistrer les informations</button>
                        </div>
                        </CarouselItem>
                        <CarouselItem>
                        <div className='buttonSection'>
                            <button type="submit">Passer à la vitesse supérieur</button>
                        </div>
                        </CarouselItem>
                        <CarouselItem>
                        <div className='buttonSection'>
                            <button type="submit" onClick={handleDisconnect}>Se déconnecter</button>
                        </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </>
    );
}

export default Profile