import Pagination from 'react-bootstrap/Pagination';
import GetCard from '../sharedComponent/GetCard';
import medos from '../assets/medos.jpg'
import Auth from '../sharedComponent/Auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import StockageTaille from '../../private/Connexion'

import empty from '../assets/empty.png'

import '../style/collection.css'
import Scroller from '../sharedComponent/Scroller';

function GetPagination() {
    return (
      <div style={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center'}}>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }

function MyCollection() {

    const navigate = useNavigate();
    const test = false;

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

    var plantes = [{name: 'None', description: 'None'}];

    if(test){
      plantes = [
        { name: 'Sapin', description: 'C\'est un connifere.' },
        { name: 'Plantes', description: 'c une plantes logique' },
        { name: 'Fleur', description: 'c une plante aussi' },
        { name: 'Pissenlit', description: 'je crois aussi' },
        { name: 'Rose', description: 'aussi' },
        { name: 'Mohamded', description: 'c pas une plantes ca par contre' },
        { name: 'Xav', description: 'non plus' },
        { name: 'Le w', description: 'on sais jamais' },
        { name: 'Test', description: 'big test ca' },
      ];
    }

    var image = medos;
    if(plantes.length > 1){
      return(
        <>
          <Scroller />
          <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            {plantes.map((name, index) => (
              <GetCard key={index} name={name.name} image={image} id='1'/>
            ))}
          </div>
          <GetPagination/>
        </>
      );
    }else{
      return(
        <>
          <Scroller />
          <div className='noCardInCollection'>
            <img style={{width: '10rem'}} src={empty} alt="empty icon" />
            <h1>Vous n'avez aucune plante dans votre collection pour le moment</h1>
            <h3>Voyagez, découvrez et scanez votre environnement pour remplir votre collection!</h3>
          </div>
          <StockageTaille/>
        </>
      );
    }
}

export default MyCollection