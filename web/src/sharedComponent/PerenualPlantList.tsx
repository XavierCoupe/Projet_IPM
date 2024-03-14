import { useState, useEffect } from 'react';
import axios from 'axios';
import GetPerenualApiKey from './GetPerenualApiKey';
import GetCard from './GetCard';
import Loading from './Loading';
import onlysu from '../assets/onlysu.png'

import '../style/collection.css'

async function ImgCorrector() {
    //var image = "https://img-3.journaldesfemmes.fr/55Pa2VVqjc0hXSevl8ddLxHV53Y=/1500x/smart/6f75f95c0d54470fa206aa78fe6ed3a8/ccmcms-jdf/39925288.jpg";
    var image = onlysu;
  
    setTimeout(() => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.src === "https://perenual.com/storage/image/upgrade_access.jpg") {
          img.src = image;
        }
      });
    }, 1000);
  
    return(<p></p>);
}
  
function PerenualPlantList(){
    const [responseData, setResponseData] = useState<any | null>(null);
    const [perPage, setPerPage] = useState<number>(20);
    const [page, setPage] = useState('1');
    const [isCall, setIsCall] = useState(false);
  
    useEffect(() => {
        async function fetchData() {
            try {
                if(!isCall){
                    setIsCall(true);
                    console.warn("fetch data with state: "+isCall)
                    const response = await axios.get('https://perenual.com/api/species-list?key=' + GetPerenualApiKey({ num: 3 }) + '&page=' + page);
                    setResponseData(response.data);
                    setPerPage(response.data?.to - response.data?.from - 1 || 20);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }
      
        fetchData();
      
        if(responseData){
            ImgCorrector();
        }
    }, [responseData]); 

    const loadMore = () => {
        console.warn("Loading more data (num page: " + page + ")")
        const result: string = (parseInt(page) + 1).toString();
        console.warn("num page:" +page)
        setPage(result);
    }

    try{
        return (
            <>
                {responseData ? (
                    <>
                    {[...Array(perPage).keys()].map(i => (
                      <GetCard 
                        key={i} 
                        name={responseData.data[i].common_name}
                        image={responseData.data[i].default_image.regular_url}
                        id={responseData.data[i].id}
                      />
                    ))}
                    <button onClick={loadMore}>Voir plus</button>
                  </>
                ) : (
                    <>
                      <div className='loadingBox'>
                        <div>
                          <h2>Chargement des données</h2>
                          <Loading/>
                        </div>
                      </div>
                      
                    </>
                  )}
            </>
          );
    }catch{
        return(
            <h1 style={{color: "red"}}>Erreur de chargement: limitation API</h1>
        )
    }
    
}

export default PerenualPlantList