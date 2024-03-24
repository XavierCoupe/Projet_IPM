//import modules
import PerenualPlantList from '../sharedComponent/PerenualPlantList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from '../sharedComponent/Auth';
import Scroller from '../sharedComponent/Scroller';

/**
 * @author Wandrille BALLEREAU
 * @description Permet de générer et gérer tous le code de la page affichant les cartes disponibles
 * @returns le code HTML de la page affichant la totalité des cartes disponibles sur Herbadex
 */
function AllCard(){
  const navigate = useNavigate();

  //vérification de la connexion de l'utilisateur
    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

  return(
        <>
            <Scroller/>
            <PerenualPlantList/>
        </>
    );
}

export default AllCard