import PlantNetDetection from "../sharedComponent/PlantNetDetection";
import Scroller from "../sharedComponent/Scroller";

/**
 * @author Wandrille BALLEREAU
 * @description Permet de retoruner les composants générant la page de capture d'une espèce
 * @returns La page de capture
 */
function Capture(){
    return(
        <>
            <Scroller/>
            <PlantNetDetection/>
        </>   
    );
}

export default Capture