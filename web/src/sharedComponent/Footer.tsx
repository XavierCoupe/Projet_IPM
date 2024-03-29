import { useState } from 'react';
import Toaster from "./Toaster";
import ButtonComponent from "./ToasterButton";

/**
 * @author Wandrille BALLEREAU
 * @description Génère le footer des pages du site web
 * @returns Le code HTML du footer de chaque page
 */
function Footer(){
    //notification pour représenter les clauses RGPD
    const [showToast, setShowToast] = useState(false);
    const toggleToast = () => setShowToast(!showToast);

    return(
        <>
            <div className='HerbadexFooter'>
                <ul className='HerbadexFooterList'>
                    <li>Informations</li>
                    <li>A propos</li>
                    <li>Qui sommes nous</li>
                </ul>
                <ul className='HerbadexFooterList'>
                    <li>Nous contacter</li>
                    <li>Newsletter</li>
                    <li>Téléphone</li>
                </ul>
                <ul className='HerbadexFooterList'>
                    <li>Condition d'utilisation</li>
                    <li>
                        <ButtonComponent onClick={toggleToast} />
                        <Toaster show={showToast} onClose={toggleToast} /></li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>
            <div className='HerbadexCredit'>
                <p className='HerbadexCreditText'>Copyright © 2024 Herbadex Inc. All rights reserved.</p>
            </div>
        </>
    );
}

export default Footer