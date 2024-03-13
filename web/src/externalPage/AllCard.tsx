import PerenualPlantList from '../sharedComponent/PerenualPlantList';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Auth from '../sharedComponent/Auth';

function AllCard(){

  const navigate = useNavigate();

    useEffect(() => {
      if(!Auth()){
        navigate('/connexion')
      }
    });

  return(
        <>
            <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <PerenualPlantList page='1'/>
            </div>
        </>
    );
}

export default AllCard