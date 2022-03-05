

function drawCanvas(){
    /* Canvas */
    var canvas = document.getElementById("lienzo");
    var lienzo = canvas.getContext("2d");

    /* logo */
    var creditos = new Image();
    creditos.src = "imagenes/Creditos.jpg";
    creditos.onload = function(){
        lienzo.drawImage(creditos,0,0,980,570);
    }

    

}
function openInstrucciones(){

}

function openJugar(){

}

function openCreitos(){

}

window.onload=drawCanvas;