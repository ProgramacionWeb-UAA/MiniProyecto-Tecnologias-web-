var pantalla = 1;
var intervalo;//para cuestiones del tiempo
var contador_s=0;
var contador_m=0;
var contador_h=0;
var band = false;
var k=0;//indice que controla el vector que maneja los objetos que se presentaran en pantalla, es decir los animalitos
//en la seccion de drop para asi poder extraer toda la informacion del objeto que se selecciona al arrastrar y soltar

var misAnimalitos = [
    {nombre:'Pingüino',imagen:'./imagenes/animalitos/pinguino.png',sonido:'../audios/pinguino.mp3',habitat:'./imagenes/habitats/Polo.jpg'},
    {nombre:'Pez',imagen:'./imagenes/animalitos/pez.png',sonido:'../audios/pez.mp3',habitat:'./imagenes/habitats/Mar.jpg'},
    {nombre:'Leon',imagen:'./imagenes/animalitos/leon.png',sonido:'../audios/leon.mp3',habitat:'./imagenes/habitats/Sabana.jpg'},
    {nombre:'Ornitorrinco',imagen:'./imagenes/animalitos/ornitorringo.png',sonido:'../audios/ornitorrinco.mp3',habitat:'./imagenes/habitats/Rios.jpg'},
    {nombre:'Conejo',imagen:'./imagenes/animalitos/conejito.png',sonido:'../audios/conejo.mp3',habitat:'./imagenes/habitats/Sabana.jpg'},
    {nombre:'Suricato',imagen:'./imagenes/animalitos/suricata.png',sonido:'../audios/suricata.mpeg',habitat:'./imagenes/habitats/Sabana.jpg'},
    {nombre:'Delfin',imagen:'./imagenes/animalitos/delfin.png',sonido:'../audios/delfin.mp3',habitat:'./imagenes/habitats/Mar.jpg'},
    {nombre:'Oso polar',imagen:'./imagenes/animalitos/oso_polar.png',sonido:'../audios/oso_polar.mp3',habitat:'./imagenes/habitats/Polo.jpg'},
    {nombre:'Tucan',imagen:'./imagenes/animalitos/tucan.png',sonido:'../audios/tucan.mp3',habitat:'./imagenes/habitats/Selva.jpg'}         

];
var vecJuego = [];
// funcion que se encarga de acomodar las habitat y los Animalitos
// es importante señalar que para identificar y validar los animalitos(img)
// con sus habitat(div) se añaden clases con un numero que coincide entre 
// animalitos(img) y su habitat correspondiente
function acomodaElementos(j){
    var image = new Image();
    
    var hab1 =  $("h-1");
    var hab2 =  $("h-2");
    var hab3 =  $("h-3");

    var ani1 = $('img');
    var ani2 = $('img2');
    var ani3 = $('img3');


    var array = [j,j+1,j+2];
    
    
    shuffle(array);
    num = array[0];
   
    
    image.src=vecJuego[num].habitat;
    
    hab1.style.backgroundImage='url('+image.src+')';
    hab1.style.backgroundRepeat='no-repeat';
    hab1.style.backgroundSize='100% 100%';
    hab1.classList.add(''+array[0]);
    num = array[1];
    image.src=vecJuego[num].habitat;
    

    hab2.style.backgroundImage='url('+image.src+')';
    hab2.style.backgroundRepeat='no-repeat';
    hab2.style.backgroundSize='100% 100%';
    hab2.classList.add(''+array[1]+'');
    num = array[2];
    image.src=vecJuego[num].habitat;
    hab3.style.backgroundImage='url('+image.src+')';
    hab3.style.backgroundRepeat='no-repeat';
    hab3.style.backgroundSize='100% 100%';
    hab3.classList.add(''+array[2]+'');
    
    ani1.src = vecJuego[0].imagen;
    ani1.classList.add(''+j+'');
    ani1.nextSibling.innerHTML = vecJuego[0].nombre;

    ani2.src = vecJuego[1].imagen;
    ani2.classList.add(''+(j+1)+'');
    ani2.nextSibling.innerHTML = vecJuego[1].nombre;


    ani3.src = vecJuego[2].imagen;
    ani3.classList.add(''+(j+2)+'');
    ani3.nextSibling.innerHTML = vecJuego[2].nombre;
 
   

    
}

function activa(){
    
    var hrs=document.getElementById("hrs");
    var min=document.getElementById("min");
    var seg=document.getElementById("seg");
    intervalo= window.setInterval(function(){

        if(contador_s==60){
            contador_m++;
            contador_s=0;
            min.innerHTML=contador_m+":";
            if(contador_m==60){
                contador_h++;
                contador_m=0;
                hrs.innerHTML=contador_h+":";
            }

        }
        contador_s++;
        seg.innerHTML=contador_s+"";


    },1000);
    
}

function dragover(e){
    e.preventDefault();
}
function dragstart(e){

    // var img = document.createElement('img');
    // img.src = './imagenes/animalitos/linux.gif';
    // img.width = '50px';
    // x = e.layerX;
	// y = e.layerY;
    
    
    // e.dataTransfer.setDragImage($(e.target.id),x,y);

    e.dataTransfer.setData("text", e.target.id);
    e.target.style.opacity = '0'; 
    p=e.target.nextSibling;
    p.style.opacity='0';
   
    // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
	
}
function dragend(e){
    e.target.style.opacity = ''; 
    e.dataTransfer.clearData('Data');
    p=e.target.nextSibling;
    p.style.opacity='';
}
function drop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
   
    $(data).style.background = 'transparent';
    e.target.appendChild(document.getElementById(data));
    $(data).classList.add("animation");
    e.target.classList.add("brilla");    
    pos=0;
    if($(data).id=='img'){

    }else if($(data).id=='img2'){
        pos=1;
    }else{
        pos=2;
    }
    e.target.nextSibling.innerHTML = vecJuego[pos].nombre;

}
function generaRnd(){
    
    
    
    var i=0;
    do{
        let obj = misAnimalitos[Math.floor(Math.random() * 9)];
        if(!(vecJuego.includes(obj))){
            vecJuego.push(obj);
            i++;
            
        }else{

        }
        
       
    }while(i<6);
   
    
     acomodaElementos(0);

    
}

function informacion(){
    var band2;
    var ins="Arrastra a los animalitos hacia las habitat que le corresponden.";
    var alert = alertify.alert("Instrucciones",ins,function(){
        
        alertify.success('A jugar amig@'); 
        if(band2){
            reinicia();
        }else{
            
        }
    }).set('label', 'Aceptar');     	 
    alert.set({transition:'flipx'}); //slide, zoom, flipx, flipy, fade, pulse (default)
    alert.set('modal', false);  //al pulsar fuera del dialog se cierra o no
    // si ya se habia presionado el boton de pausar ya no se activara la funcion pausa
    // y con ayuda de band2 indicaremos si cuando la alerta se cierra se tiene que reiniciar el
    // cronometro. Logica usada:
    // -->si ya se presiono el boton pausa no se reinicia al cerrar la alerta
    // -->si no se ha presionado el boton de pausa se pausa el cronometro y al cerrar la
    //    alerta se reinicia en automatico....
    if(!band){
        pausa();
        band2=true;

    }else{
        band2=false;
    }
    


}
function inicia(){
    generaRnd();
    activa();
    
}

function $(elemento){
    return document.getElementById(elemento);
}
function pausa(){
    if(band==false){
        clearInterval(intervalo);
        $('img').setAttribute('draggable','false');
        $('img2').setAttribute('draggable','false');
        $('img3').setAttribute('draggable','false');
        band=true;
    }
}


function reinicia(){
    var hrs=document.getElementById("hrs");
    var min=document.getElementById("min");
    var seg=document.getElementById("seg");
    
    if(band){
        $('img').setAttribute('draggable','true');
        $('img2').setAttribute('draggable','true');
        $('img3').setAttribute('draggable','true');
        intervalo= window.setInterval(function(){

            if(contador_s==60){
                contador_m++;
                contador_s=0;
                min.innerHTML=contador_m+":";
                if(contador_m==60){
                    contador_h++;
                    contador_m=0;
                    hrs.innerHTML=contador_h+":";
                }

            }
            contador_s++;
            seg.innerHTML=contador_s;


        },1000);
        band=false;
    }
}



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // índice aleatorio entre 0 e i
  
      // intercambia elementos array[i] y array[j]
      // usamos la sintáxis "asignación de desestructuración" para lograr eso
      // encontrarás más información acerca de esa sintaxis en los capítulos siguientes
      // lo mismo puede ser escrito como:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
window.onload=inicia;