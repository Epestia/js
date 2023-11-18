document.addEventListener("DOMContentLoaded", function () {
    // Attend que le contenu de la page soit chargé
  
    // Fonction pour afficher le temps restant en heures
    function afficherTempsRestantEnHeures() {
      // Date de Noël
      const noel = new Date("2023-12-25T00:00:00");
  
      // Date actuelle
      const maintenant = new Date();
  
      // Calcul du temps restant en heures
      const tempsRestantEnHeures = Math.floor((noel - maintenant) / 1000 / 60 / 60);
  
      // Affichage du temps restant en heures
      console.log("Temps restant en heures :", tempsRestantEnHeures);
    }
  
    // Ajout d'un écouteur d'événement au premier bouton
    document.getElementById("boutonHeures").addEventListener("click", afficherTempsRestantEnHeures);
  
    // Fonction pour afficher le temps restant en jours, heures et minutes
    function afficherTempsRestantEnJours() {
      // Date de Noël
      const noel = new Date("2023-12-25T00:00:00");
  
      // Date actuelle
      const maintenant = new Date();
  
      // Calcul du temps restant en millisecondes
      const tempsRestant = noel - maintenant;
  
      // Convertir le temps restant en jours, heures et minutes
      const jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
      const heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
  
      // Affichage du temps restant en jours, heures et minutes
      console.log("Il reste ${jours} jours, ${heures} heures et ${minutes} minutes jusqu'à Noël.");
    }
  
    // Ajout d'un écouteur d'événement au deuxième bouton
    document.getElementById("boutonJours").addEventListener("click", afficherTempsRestantEnJours);
  });