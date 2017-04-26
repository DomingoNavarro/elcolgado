$(document).ready(function () {
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = abecedario.split("");
    for (var i = 0; i < res.length; i++) {
        var $botones = $("<button type=\"button\" class=\"btn btn-default\">");
        $botones.text(res[i]);
        $(".col-md-1").append($botones);
    }
    var frase = "El señor de los anillos";
    for (var i = 0; i < frase.length; i++) {
        var $oculto = $("<ul><li>");
        if (frase[i] == " ") {
            $oculto.text("*");
        } else {
            $oculto.text("_");
        }
        $(".col-md-2").append($oculto);

    }
    $("button").on('click', function (e) {
        $(e.target).attr("disabled", true);
    });
    //Guarda la letra en un array listSelect
    var pulsados = document.querySelectorAll("button");
    for (var i = 0; i < pulsados.length; i++) {
        pulsados[i].addEventListener("click", function (event) {
            seleccionados = event.target.innerHTML;
            console.log(listSelect);
        });
    }
    /*
            function comprobar(x) {
    var frase = "El tio de los sellos";
    for (i = 0; i < frase.length; i++) {
        if (x == frase[i]) {
            console.log("SI");
        } else {
            
            console.log("no");
            break;
        }
    }
}
            */


    //Remplazar los caracteres por signos



});

/*
 $("button").on('click', function(e) {
      $(e.target).css("background-color","red");
    });
*/
