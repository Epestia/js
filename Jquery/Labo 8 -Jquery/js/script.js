function loadPage(url, targetId) {
    $.ajax({
        url: "./txt/textEN.txt",
        type: "GET",
        success: function(response, textStatus, xhr) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this);
                $("#" + targetId).append("Texte Anglais : " + response + "<br>");
            } else {
                alert("Erreur : " + xhr.status);
            }
        },
        error: function() {
            alert("Erreur 404 :./");
        }
    });

    $.ajax({
        url: "./txt/textFR.txt",
        type: "GET",
        success: function(response, textStatus, xhr) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this);
                $("#" + targetId).append("Texte Français : " + response);
            } else {
                alert("Erreur : " + xhr.status);
            }
        },
        error: function() {
            alert("Erreur 404 :./");
        }
    });
}