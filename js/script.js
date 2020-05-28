/* Eventos de teclado:
/ keypress --> no momento da tecla pressionada
keyup --> no momento da tecla ser liberada
keydown --> no momemnto da tecla afundada*/

//Keypress - invocada para cada caractere inseredo:
$("#campo").keypress(function () {
    //alert('Pressinou alguma tecla.');
});

var marginLeft = 100;
var marginTop = 400;


//Keydown - invocado para cada tecla pressionada:
$("#campo").keydown(evento => {
    //Seta para direita
    if (evento.which == 39) {
        //alert("Pressionou a letra seta direita!")
        marginLeft = marginLeft + 10;
        $("#cachorro").css('margin-left', marginLeft),
            validaPosicao(marginTop, marginLeft);
    }
    //Seta para cima
    if (evento.which == 38) {
        //alert("Pressionou a letra seta cima!")
        marginTop = marginTop - 10;
        $("#cachorro").css('margin-top', marginTop);
        validaPosicao(marginTop, marginLeft);
    }
    //Seta para esquerda
    if (evento.which == 37) {
        //alert("Pressionou a letra seta cima!")
        marginLeft = marginLeft - 10;
        $("#cachorro").css('margin-left', marginLeft);
        validaPosicao(marginTop, marginLeft);
    }
    //Seta para baixa
    if (evento.which == 40) {
        //alert("Pressionou a letra seta baixo!")
        marginTop = marginTop + 10;
        $("#cachorro").css('margin-top', marginTop);
        validaPosicao(marginTop, marginLeft);
    }

})

function validaPosicao(top, left) {
    if (top == 240 && left == 900) {
        alert("Chegou em casa!")
        marginLeft = 100;
        marginTop = 400;
        $("#cachorro").css("margin-left", marginLeft);
        $("#cachorro").css("margin-top", marginTop);
    }
}

//Keyup - invocado para quando solta-se a tecla:
$("#campo").keyup(function () {
    //alert("Soltou a tecla.");
});
