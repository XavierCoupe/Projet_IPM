import com.google.gson.Gson;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;

import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


public class Dico{
    public static void main(String[] arg){
        String token = "sk-wrMA65b3c7e65da6a3904";

        // Créer un dictionnaire pour stocker le nom scientifique et l'identifiant
        Map<String, Integer> dictionary = new HashMap<>();
        for(int i = 0 ; i <= 100 ; i++){
            Unirest.setTimeouts(0, 0);
            HttpResponse<String> response = Unirest.get("https://perenual.com/api/species/details/"+i+"?key="+token).asString();
            // Convertir la réponse JSON en un objet Java
            Species species = new Gson().fromJson(response.getBody(), Species.class);
            //Stocker dans le dictionnaire
            dictionary.put(species.getScientific_name()[0], species.getId());
        }
        // Enregistrer le dictionnaire dans un fichier
        saveDictionaryToFile(dictionary, "./dictionary.json");
    }

    static void saveDictionaryToFile(Map<String, Integer> dictionary, String filename) {
        try (FileWriter fileWriter = new FileWriter(filename)) {
            // Utiliser Gson pour convertir le dictionnaire en JSON et l'écrire dans le fichier
            Gson gson = new Gson();
            gson.toJson(dictionary, fileWriter);
            System.out.println("Dictionnaire enregistré avec succès dans le fichier : " + filename);
        } catch (IOException e) {
            System.err.println("Une erreur s'est produite lors de l'enregistrement du dictionnaire : " + e.getMessage());
        }
    }

    static class Species {
        private int id;
        private String[] scientific_name;

        public int getId() {
            return id;
        }

        public String[] getScientific_name() {
            return scientific_name;
        }
    }
}