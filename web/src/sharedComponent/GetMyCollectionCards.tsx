import axios from "axios";
import { useEffect, useState } from "react";
import GetPerenualApiKey from "./GetPerenualApiKey";
import GetCard from "./GetCard";

function GetMyCollectionCards({id}: {id: string}){
    const [responseData, setResponseData] = useState<any | null>(null);
    const [requestDone, setRequestDone] = useState(false);
    const [commonName, setCommonName] = useState('')
    const [plantId, setPlantId] = useState('')
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchData = async () =>{
            if(!requestDone){
                try {
                    const request = 'https://perenual.com/api/species/details/' + id + '?key=' + GetPerenualApiKey({ num: 2 });
                    console.log(request);
                    const response = await axios.get(request);
                    setResponseData(response.data);
                    setRequestDone(true);
                    
              } catch (error) {
                  console.error("Erreur lors de la récupération des données:", error);
              }
            }
        }
    
        fetchData();
    })

    useEffect(() => {
        if (responseData !== null && responseData.common_name !== null && responseData.id !== null) {
            setCommonName(responseData.common_name);
            setPlantId(responseData.id);
            if(responseData.default_image.regular_url !== null){
                setUrl(responseData.default_image.regular_url);
                console.log(responseData.default_image.regular_url)
            }
            console.log(responseData)
        } else {
            console.error("responseData is null or undefined");
        }
    }, [responseData])
    

    return(
        <GetCard name={commonName} image={url} id={plantId}/>
    );
}

export default GetMyCollectionCards