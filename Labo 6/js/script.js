document.addEventListener("DOMContentLoaded", function() {
    var images = ["img/image1.jpeg", "img/image2.jpeg", "img/image3.png"];
    var index = 0;

    function changerImageDiapo() {
        var image = document.getElementById("imageDiapo");
        image.src = images[index];

        index++;
        if (index === images.length) {
            index = 0;
        }
    }

    // Change l'image toutes les 3 secondes (3000 millisecondes)
    setInterval(changerImageDiapo, 3000);
});