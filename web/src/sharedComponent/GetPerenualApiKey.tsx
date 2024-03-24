/**
 * @author Wandrille BALLEREAU
 * @description Fonction permettant de retourner une clé d'API Perenual contenu dans un tableau à l'indice demandé en paramètre
 * @param param0 L'indice représentant le numéro de clé voulus
 * @returns une clé d'API
 */
function GetPerenualApiKey({ num }: { num: number }) {
    //wbal***.com, wint***.com, xavi***.fr
    var apiKeys = ['sk-XbtH65cc82432447c4151', 'sk-mdL665b3c49354b4f3903', 'sk-PLbx65cc83f1f38ca3905', 'sk-wrMA65b3c7e65da6a3904', 'sk-NcqD65f2cdfb97fff4575'];
    return apiKeys[num];
}

export default GetPerenualApiKey