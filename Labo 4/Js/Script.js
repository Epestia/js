document.addEventListener("DOMContentLoaded", function(){
    var Texte = document.getElementById("Texte");
    var Bouton = document.getElementById("Bouton");
    var Image = document.getElementById("Image1");

    function changeColor(){
        Texte.style.color = "red";
    }
    Bouton.addEventListener("click", changeColor);

    function swapImage(){
        if (Image.src.endsWith("Img/Lambo.jpg")) {
            Image.src = "Img/Ferrari.jpg";
        } else {
            Image.src = "Img/Lambo.jpg";
        }
    }
    Image.addEventListener("click", swapImage);

   
    //alert ("Hello world!");
      
});