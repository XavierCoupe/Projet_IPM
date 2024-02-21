import { useState, useEffect } from 'react';
import axios from 'axios';
import GetPerenualApiKey from './GetPerenualApiKey';
import GetCard from './GetCard';
import Loading from './Loading';
import onlysu from '../assets/onlysu.png'

async function ImgCorrector() {
  //var image = "https://img-3.journaldesfemmes.fr/55Pa2VVqjc0hXSevl8ddLxHV53Y=/1500x/smart/6f75f95c0d54470fa206aa78fe6ed3a8/ccmcms-jdf/39925288.jpg";
  var image = onlysu;

  setTimeout(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src === "https://perenual.com/storage/image/upgrade_access.jpg") {
        img.src = image;
      }
  }, 1000);

  });
  return(<p></p>);

}

function PerenualPlantList({page} : {page : string}){
    const [responseData, setResponseData] = useState<any | null>(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://perenual.com/api/species-list?key=' + GetPerenualApiKey({ num: 1 }) + '&q=' + page);
          setResponseData(response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
        }
      }
      fetchData();
    }, []);

    if(responseData){
      ImgCorrector();
    }

    return (
        <>
            {responseData ? ([...Array(30).keys()].map(i => (
              <>
                <GetCard key={i} 
                name={responseData['data'][i]['common_name']}
                image={responseData['data'][i]['default_image']['regular_url']}
                id={responseData['data'][i]['id']}/>
              </>
              
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