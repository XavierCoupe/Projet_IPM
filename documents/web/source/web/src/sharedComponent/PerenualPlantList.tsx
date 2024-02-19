import { useState, useEffect } from 'react';
import axios from 'axios';
import GetPerenualApiKey from './GetPerenualApiKey';
import GetCard from './GetCard';
import Loading from './Loading';

function PerenualPlantList({page} : {page : string}){
    const [responseData, setResponseData] = useState<any | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://perenual.com/api/species-list?key=' + GetPerenualApiKey({ num: 0 }) + '&q=' + page);
          setResponseData(response.data); // Mettre à jour l'état avec les données de la réponse
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
        }
      }
      fetchData();
    }, []);

    return (
        <>
            {responseData ? ([...Array(30).keys()].map(i => (
                <GetCard key={i} 
                name={responseData['data'][i]['common_name']} 
                description={responseData['data'][i]['other_name']} 
                image={responseData['data'][i]['default_image']['regular_url']}
                id={responseData['data'][i]['id']}/>
            ))) : (
                <>
                  <h2>Chargement des données</h2>
                  <Loading/>
                </>
              )}
        </>
      );
}

export default PerenualPlantList