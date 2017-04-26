$(document).ready(function () {
    var abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = abecedario.split("");
    for (var i = 0; i < res.length; i++) {
        var $botones = $("<button type=\"button\" class=\"btn btn-default\">");
        $botones.text(res[i]);
        $("#primero").append($botones);
    }
    var frase = "El señor de los anillos";
    frase = frase.toUpperCase();
    for (var i = 0; i < frase.length; i++) {
        var $oculto = $("<p>");
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
            console.log(seleccionados);
            if (seleccionados == "I") {
                alert("Seleccionas la letra i");
            }
        });
    }
    /*
funcion que comprueba si la letra que introducimos esta ne la frase y nos dice la posicion de dicha letra
function comprobar(x) {
    var frase = "El tio de los sellos";
    frase = frase.toUpperCase();
    x = x.toUpperCase();
    for (i = 0; i < frase.length; i++) {
       var contador = 0;
        
        if (x == frase[i]) {
            var encontrada = frase[i];
            ++contador;
            console.log("Posicion en Array", i);
            //console.log(contador);
            console.log(encontrada);
            
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
