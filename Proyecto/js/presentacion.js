

function drawCanvas(){
    /* Canvas */
    var canvas = document.getElementById("lienzo");
    var lienzo = canvas.getContext("2d");
    lienzo.textBaseline = 'middle';
    lienzo.textAling = 'center';
    /* Bordes*/
    lienzo.fillStyle='#a00606';
    lienzo.fillRect(0,0,30,570);
    lienzo.fillRect(870,0,30,570);
    lienzo.fillRect(0,0,900,30);
    lienzo.fillRect(0,540,900,30);

    /* logo */
    var logo1 = new Image();
    logo1.src = "imagenes/tucanlogo.png";
    logo1.onload = function(){
        lienzo.drawImage(logo1,250,100,200,200);
    }

    var logo2 = new Image();
    logo2.src = "imagenes/logo2.png";
    logo2.onload = function(){
        lienzo.drawImage(logo2,340,100,405,165);
    }

    lienzo.fillStyle = '#a10aa7';
    lienzo.font = '48px Jokerman';
    lienzo.fillText("ANIMALITOS A CASA", 180,78);
    lienzo.fillStyle = '#ececec ';
    lienzo.font = '38px Forte';
    lienzo.fillText("Animales y Hábitat",290,350);
    lienzo.font = 'bold 20px Century Schoolbook';
    lienzo.fillText("Relaciona y aprende sobre los animales y el lugar donde viven",120,460);
    lienzo.font = '34px Snap ITC';
    lienzo.fillText("Juega y diviértete", 260,395);
    lienzo.font = '18px Impact';
    lienzo.fillText('Derechos de autor - ISC 6° "B" UAA 2022', 315,515);
    lienzo.stroke();


    var lenguaje = new Image();
    lenguaje.src = "imagenes/lenguajes.png";
    lenguaje.onload = function(){
        lienzo.drawImage(lenguaje,740,30,130,50);
    }
}

window.onload=drawCanvas;