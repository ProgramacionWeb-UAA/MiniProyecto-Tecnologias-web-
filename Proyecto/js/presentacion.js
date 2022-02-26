

function drawCanvas(){
    /* Canvas */
    var canvas = document.getElementById("lienzo");
    var lienzo = canvas.getContext("2d");
    /* fondo */
    /*var fondo = new Image();
    fondo.src = "imagenes/canvas.jpg";
    fondo.onload = function(){
        lienzo.drawImage(fondo,0,0,850,550);
    }*/

    lienzo.fillStyle = '#001a41';
    lienzo.font = 'bold 30px Lucida Console';
    lienzo.fillText("TITULO DEL GAME", 300,35);
    lienzo.font = 'bold 13px Consolas';
    lienzo.fillText("JucA", 820,200);

    /* Bordes*/


}

window.onload=drawCanvas;