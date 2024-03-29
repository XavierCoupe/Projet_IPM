import '../style/plantDetection.css'
import TakePicture from './TakePicture';
import scan from '../assets/scan.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Auth from './Auth';

const PROJECT = 'all';
const API_URL = 'https://my-api.plantnet.org/v2/identify/' + PROJECT;

const API_KEY = '2b10QLbiB1ARdDqPHrwcuOb9u';

/**
 * @author Wandrille BALLEREAU
 * @description Permet la gestion, l'affichage et l'utilisation de la page de scan d'une espèce.
 * @returns Le code HTML permettant de générer la page de scan d'une espèce
 */
function PlantNetDetection(){
    const navigate = useNavigate();

    const formRef = useRef(null);

    //vérification de la connexion de l'utilisateur
    useEffect(() => {
        if(!Auth()){
          navigate('/connexion')
        }
      });

    //handle d'envoie du formulaire
    const handleSubmit = async () => {
        if(!formRef){
            return;
        }

        //récupération de l'image
        const fileInput = document.getElementById('image') as HTMLInputElement;
        const images = fileInput?.files;

        //gestion et formatage du formulaire
        if (images && images.length > 0) {
            const form = new FormData();
            form.append('organs', 'auto');
        
            // Append each file individually
            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                form.append('images', image);
            }

            // 3. Add GET URL parameters
            const url = new URL(API_URL);
            url.searchParams.append('include-related-images', 'true'); // try false
            url.searchParams.append('api-key', API_KEY);

           // 4. Send request
            fetch(url.toString(), {
                method: 'POST',
                mode: "cors",
                body: form,
            })
            .then((response) => {
                if (response.ok) {
                    response.json()
                    .then((r) => {
                        console.log(JSON.stringify(r));
                            
                    })
                    .catch(console.error);
                } else {
                    const resp = `status: ${response.status} (${response.statusText})`;
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        }
    };

    //redirection vers la page de capture réussite d'une espèce
    const handleCapture = () => {
        navigate("/newCard");
    }

    return (
        <div className='mainContainer'>
            <h1>Scanez une espèce</h1>
            <img className='scanImg' src={scan} alt="scan icon" />
            <form className="formContainer">
                <input className='inputFile' type="file" name="image" accept="image/*" id='image' onChange={handleSubmit} />
                <button className="inputSub" type="submit" onClick={handleCapture}>Choisir cette image</button>
            </form>
            {false && <TakePicture/>}
        </div>
        
    );
}

export default PlantNetDetection 