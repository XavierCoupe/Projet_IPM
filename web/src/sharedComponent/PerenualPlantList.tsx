import { useState, useEffect } from 'react';
import axios from 'axios';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
        });
    }, 1000);
}

function PerenualPlantList({ page }: { page: string }) {
    const [responseData, setResponseData] = useState<any | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://perenual.com/api/species-list?key=' + GetPerenualApiKey({ num: 1 }) + '&q=' + page);
                setResponseData(response.data);

                // Initialiser Firebase
                const firebaseConfig = {
                    // Votre configuration Firebase
                    apiKey: "AIzaSyBUeKhmFj2oiA_x2P44mCKW3vo7SgW2064",
                    authDomain: "herbadex-4b81c.firebaseapp.com",
                    databaseURL: "https://herbadex-4b81c-default-rtdb.europe-west1.firebasedatabase.app",
                    projectId: "herbadex-4b81c",
                    storageBucket: "herbadex-4b81c.appspot.com",
                    messagingSenderId: "622092788203",
                    appId: "1:622092788203:web:97d2767d88cec703f2b9ae",
                    measurementId: "G-CDQH82R6KR"
                };
                const app = initializeApp(firebaseConfig);
                const analytics = getAnalytics(app);
                const db = getFirestore(app);

                // Enregistrer les données dans Firebase Firestore
                response.data.data.forEach(async (plant: any) => {
                    try {
                        await addDoc(collection(db, "plants"), plant);
                    } catch (error) {
                        console.error("Error adding plant to Firestore: ", error);
                    }
                });

            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
            }
        }
        fetchData();
    }, [page]);

    useEffect(() => {
        if (responseData) {
            ImgCorrector();
        }
    }, [responseData]);

    return (
        <>
            {responseData ? ([...Array(30).keys()].map(i => (
                <>
                    <GetCard key={i}
                        name={responseData['data'][i]['common_name']}
                        image={responseData['data'][i]['default_image']['regular_url']}
                        id={responseData['data'][i]['id']} />
                </>

            ))) : (
                <>
                    <h2>Chargement des données</h2>
                    <Loading />
                </>
            )}
        </>
    );
}

export default PerenualPlantList;

