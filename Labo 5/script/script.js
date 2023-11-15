document.addEventListener("DOMContentLoaded", function(){
    function convert() {
        let nom = document.getElementById("nom").value;
        let email = document.getElementById("email").value;
        let myobj = { name: nom, email: email };
        alert(JSON.stringify(myobj));
    }



   let convertToJsonButton = document.getElementById("convertToJsonButton");
   convertToJsonButton.addEventListener("click", convert);


});
