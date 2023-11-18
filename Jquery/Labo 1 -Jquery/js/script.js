$(document).ready(function() {
    $("#boutonPrefere").click(function() {
      var lien1 = "https://www.facebook.com";
  
      // Afficher l'alerte avec le lien
      alert("Mes liens préférés:\n1. Lien 1");
  
      // Ouvrir le premier lien dans une nouvelle fenêtre
      var nouvelleFenetre1 = window.open(lien1, "_blank"); 
      // Empêcher le comportement par défaut du bouton (éviter le rechargement de la page)
      return false;
    });
  });
  