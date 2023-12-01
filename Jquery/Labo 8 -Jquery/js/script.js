function loadPage(url2, targetId) {
    $.ajax({
        url: url2,
        type: "GET",
        success: function(response, textStatus, xhr) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(this);
                $("#" + targetId).append("Texte  : " + response + "<br>");
            } else {
                alert("Erreur : " + xhr.status);
            }
        },
        error: function() {
            alert("Erreur 404 :./");
        }
    });

}