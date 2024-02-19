import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import GetPerenualApiKey from './GetPerenualApiKey';
import HerbadexCarousel from './HerbadexCarousel';

function ExtractCardFromPerenual({id} : {id : string}) {
    const [responseData, setResponseData] = useState<any | null>(null);
    const [responseDetailData, setResponseDetailData] = useState<any | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://perenual.com/api/species/details/' + id + '?key=' + GetPerenualApiKey({ num: 1 }));
          setResponseData(response.data);
          const resp = await axios.get('https://perenual.com/api/species-care-guide-list?key=' + GetPerenualApiKey({ num: 1 }) + '&species_id=' + id);
          setResponseDetailData(resp.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
        }
      }
      fetchData();
    }, []);

    if(responseDetailData){
      console.log(responseDetailData);
    }
  
    return (
      <div>
        {responseData ? (
          <>
            <HerbadexCarousel title={responseData['common_name']} 
            secondTitle={responseData['scientific_name']} 
            thirdTitle=""
            fImg={responseData['default_image']['regular_url']}
            sImg={responseData['default_image']['regular_url']}
            tImg={responseData['default_image']['regular_url']}/>   
            <div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Nom commun</h3>
                {responseData['common_name']}
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Nom scientifique</h3>
                {responseData['scientific_name']}
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Type</h3>
                {responseData['type']}
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Propriété médiacles</h3>
                {responseData['medicinal']? ('Oui'):('Non')}
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Cycle</h3>
                {responseData['cycle']}
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Zone d'habitation</h3>
                <img style={{width: '20rem'}} src={responseData['regular_url']}
                alt={responseData['common_name'] + " picture"} />
              </div>
              <div style={{paddingTop:'2rem'}}>
                <h3>Besoins en eau</h3>
                {responseData['volume_water_requirement']['value']}
                {responseData['unit']}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Chargement des données</h2>
            <Loading/>
          </>
        )}
        {responseDetailData ? (
          <div style={{paddingTop:'2rem'}}>
            <h3>Description</h3>
            {responseDetailData['section']}
          </div>
        ):(
          <>
            <h2>Chargement du détail</h2>
            <Loading/>
          </>
        )}
      </div>
    );
}

export default ExtractCardFromPerenual