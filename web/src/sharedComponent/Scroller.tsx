import React, { useEffect } from 'react';

/**
 * @author Wandrille BALLEREAU
 * @description Permet de faire remonter en haut de la page automatiquement
 * @returns null
 */
const Scroller: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Déplace la fenêtre en haut de la page
  }, []); // Utilise un tableau vide pour s'assurer que l'effet est exécuté une seule fois lors du montage du composant

  return null; // Ce composant ne rend rien
};

export default Scroller;
