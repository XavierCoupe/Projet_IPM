import { useState } from 'react';
import Toaster from "./Toaster";
import ButtonComponent from "./ToasterButton";

function Footer(){

    const [showToast, setShowToast] = useState(false);

    const toggleToast = () => setShowToast(!showToast);

    return(
        <>
            <div style={{color: '#FFF', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <ul style={{listStyle: 'none', display: 'flex', alignItems: 'flex-start', flexDirection:'column'}}>
                    <li>Informations</li>
                    <li>A propos</li>
                    <li>Qui sommes nous</li>
                </ul>
                <ul style={{listStyle: 'none', display: 'flex', alignItems: 'flex-start', flexDirection:'column'}}>
                    <li>Nous contacter</li>
                    <li>Newsletter</li>
                    <li>Téléphone</li>
                </ul>
                <ul style={{listStyle: 'none', display: 'flex', alignItems: 'flex-start', flexDirection:'column'}}>
                    <li>Condition d'utilisation</li>
                    <li>
                        <ButtonComponent onClick={toggleToast} />
                        <Toaster show={showToast} onClose={toggleToast} /></li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
            <div style={{display: 'flex', flexDirection: 'row',}}>
                <p style={{color: '#FFF'}}>Copyright © 2024 Herbadex Inc. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer