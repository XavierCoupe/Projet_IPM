import PerenualPlantList from '../sharedComponent/PerenualPlantList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from '../sharedComponent/Auth';
import Scroller from '../sharedComponent/Scroller';

function AllCard(){

  const navigate = useNavigate();

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

  return(
        <>
            <Scroller/>
            <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <PerenualPlantList/>
            </div>
        </>
    );
}

export default AllCard