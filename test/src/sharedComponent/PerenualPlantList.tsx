import { useState, useEffect } from 'react';
import axios from 'axios';
import GetPerenualApiKey from './GetPerenualApiKey';
import GetCard from './GetCard';
import Loading from './Loading';
import onlysu from '../assets/onlysu.png'
import comingSoon from '../assets/comingSoon.png'

import '../style/collection.css'
import Scroller from './Scroller';

async function ImgCorrector() {
    var image = onlysu;
    
  
    setTimeout(() => {
      const images = document.querySelectorAll('img');

      const moreButton = document.getElementById("loadMoreButton") as HTMLInputElement;
      const lessButton = document.getElementById("loadLessButton") as HTMLInputElement;

      images.forEach(img => {
        if (img.src === "https://perenual.com/storage/image/upgrade_access.jpg") {
          img.src = image;
        }
      });

      moreButton.style.display = 'initial';
      lessButton.style.display = 'initial';

    }, 1000);
  
    return(<p></p>);
}
  
function PerenualPlantList(){
    const [responseData, setResponseData] = useState<any | null>(null);
    const [perPage, setPerPage] = useState<number>(20);
    const [page, setPage] = useState('1');
    const [isCall, setIsCall] = useState(false);
  
    useEffect(() => {
        fetchData();
        Scroller;
    }, [page]); 

    useEffect(() => {
      if(responseData) {
          ImgCorrector();
      }
  }, [responseData]);

    const fetchData = async () =>{
      try {
        if(!isCall){
            setIsCall(true);
            const request = 'https://perenual.com/api/species-list?key=' + GetPerenualApiKey({ num: 3 }) + '&page=' + page;
            console.log(request);
            const response = await axios.get(request);
            setResponseData(response.data);
            const resultPerPage = response.data?.to - response.data?.from - 1 || 20;
            setPerPage(resultPerPage);
        }
      } catch (error) {
          console.error("Erreur lors de la récupération des données:", error);
      }
    }

    const loadMore = () => {
        const result: string = (parseInt(page) + 1).toString();
        setIsCall(false);
        setPage(result);
        window.scrollTo(0, 0);
    }

    const loadLess = () => {
        if(parseInt(page) > 1){
          const result: string = (parseInt(page) - 1).toString();
          setIsCall(false);
          setPage(result);
          window.scrollTo(0, 0);
        }
    }

    try{
        return (
            <>   
              <div className='title'>
                <h1>Toutes les cartes disponibles</h1>
              </div>
              {false && <div className='searchBar'>
                <div className='searchBarElementsContainer'>
                  <h5 className='searchBarElement'>Rechercher: </h5>
                  <input className='searchBarElement' type="search" name="" id="" />
                </div>
              </div>}
                {responseData ? (
                    <>
                    <div className='cardContainer'>
                      {[...Array(perPage).keys()].map(i => (
                          responseData.data[i].default_image == null? (
                              <GetCard 
                                key={i} 
                                name={responseData.data[i].common_name}
                                image={comingSoon}
                                id={responseData.data[i].id}
                              />
                          ):(
                              <GetCard 
                                key={i} 
                                name={responseData.data[i].common_name}
                                image={responseData.data[i].default_image.regular_url}
                                id={responseData.data[i].id}
                              />
                          )
                          
                      ))}
                    </div>
                    
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
                  <div className='buttonContainer'>
                      <button className='buttonItem' id='loadMoreButton' onClick={loadLess}>Page précédente</button>
                      <button className='buttonItem' id='loadLessButton' onClick={loadMore}>Page suivante</button>
                  </div>
            </>
          );
    }catch{
        return(
            <h1 style={{color: "red"}}>Erreur de chargement: limitation API</h1>
        )
    }
    
}

export default PerenualPlantList