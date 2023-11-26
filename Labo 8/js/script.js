function loadPage(url, targetId) {
    var xhr1 = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();
    var result = document.getElementById('result');

    xhr1.onreadystatechange = function() {
        console.log(this)
        if (xhr1.readyState == 4 && xhr1.status == 200) {
            result.innerHTML += "Texte Anglais : " + xhr1.response + "<br>";
        } else if (xhr1.readyState== 4 && xhr1.status == 404){
            alert("erreur 404 :./");
        }
    };
    xhr2.onreadystatechange = function() {
        console.log(this)
        if (xhr2.readyState == 4 && xhr2.status == 200) {
            result.innerHTML += "Texte Français : " + xhr2.response;
        } else if (xhr2.readyState== 4 && xhr2.status == 404){
            alert("erreur 404 :./");
        }
    };
    xhr1.open("GET", "./txt/textEN.txt", true);
    xhr1.responseType = "text";
    xhr1.send();

    xhr2.open("GET", "./txt/textFR.txt", true);
    xhr2.responseType = "text";
    xhr2.send();

}