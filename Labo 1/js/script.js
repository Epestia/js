// script.js
window.addEventListener("load", function () {
    document.getElementById("afficherSitesBtn").addEventListener("click", function () {
        var listeSites = document.getElementById("listeSites");
        var liens = listeSites.querySelectorAll("a");
        var liensTexte = Array.from(liens).map(function (lien) {
            return lien.href;
        });

        alert("Liens des sites préférés :\n" + liensTexte.join("\n"));

        // Ouvrir chaque lien dans une nouvelle fenêtre
        liens.forEach(function (lien) {
            window.open(lien.href, "_blank");
        });
    });
});

