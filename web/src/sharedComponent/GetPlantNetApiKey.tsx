/**
 * @author Wandrille BALLEREAU
 * @description Fonction permettant de retourner une clé d'API Plantnet contenu dans un tableau à l'indice demandé en paramètre
 * @param param0 L'indice représentant le numéro de clé voulus
 * @returns une clé d'API
 */
function GetPlantNetApiKey({ num }: { num: number }) {
    //wbal***.com, wint***.com, xavi***.fr
    var apiKeys = ['2b10QLbiB1ARdDqPHrwcuOb9u', '', ''];
    return apiKeys[num];
}

export default GetPlantNetApiKey