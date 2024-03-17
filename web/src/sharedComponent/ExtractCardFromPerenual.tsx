import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import GetPerenualApiKey from './GetPerenualApiKey';
import HerbadexCarousel from './HerbadexCarousel';
import hardinessMap from '../assets/hardiness_map.png';

import '../style/global.css'

import comingSoon from '../assets/comingSoon.png'

function ExtractCardFromPerenual({id} : {id : string}) {
    const [responseData, setResponseData] = useState<any | null>(null);
    const [overTime, setOverTime] = useState(false);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://perenual.com/api/species/details/' + id + '?key=' + GetPerenualApiKey({ num: 4 }));
          setResponseData(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
          setOverTime(true);
        }
      }
      fetchData();
    }, []);
  
    return (
      <div>
        {responseData ? (
          <>
            {responseData['default_image'] == null? (
              <HerbadexCarousel title={responseData['common_name']} 
              secondTitle={responseData['scientific_name']} 
              thirdTitle=""
              fImg={comingSoon}
              sImg={comingSoon}
              tImg={comingSoon}/>):(
              <HerbadexCarousel title={responseData['common_name']} 
              secondTitle={responseData['scientific_name']} 
              thirdTitle=""
              fImg={responseData['default_image']['regular_url']}
              sImg={responseData['default_image']['regular_url']}
              tImg={responseData['default_image']['regular_url']}/>)}
             
            <div>
              <div className='HerbadexDisplayZone'>
                <h3>Nom commun</h3>
                {responseData['common_name']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Nom scientifique</h3>
                {responseData['scientific_name']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Description</h3>
                {responseData['description']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Type</h3>
                {responseData['type']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Propriété médiacles</h3>
                {responseData['medicinal']? ('Oui'):('Non')}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Cycle</h3>
                {responseData['cycle']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Rusticité</h3>
                <p>Minimale {responseData['hardiness']['min']}</p>
                <p>Maximale {responseData['hardiness']['max']}</p>
                <img style={{width: '20rem'}} src={hardinessMap}
                alt="Carte du monde rustisité des plantes" />
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Besoins en eau</h3>
                {responseData['watering']},
                {responseData['depth_water_requirement']['value']}{responseData['depth_water_requirement']['unit']}
              </div>
              <div className='HerbadexDisplayZone'>
                <h3>Rareté</h3>
                Rareté de niveau: {responseData['rare']}
              </div>
            </div>
          </>
        ) : (
          <>
            {overTime? (
            <h1>
              Les données liées à cette espèces sont réservée aux utilisateurs VIP.
            </h1>
            ):(
            <>
              <h2>Chargement des données</h2>
              <Loading/>
            </>)}
          </>
        )}
      </div>
    );
}

export default ExtractCardFromPerenual