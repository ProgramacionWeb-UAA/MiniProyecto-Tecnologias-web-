var pantalla = 1;
var intervalo;
var contador_s=0;
var contador_m=0;
var contador_h=0;
var band = false;
function acomodaElementos(vec){
    var image = new Image();
    image.src='./imagenes/prueba.jpg';
    var hab1 =  $("h-1");
    var hab2 =  $("h-2");
    var hab3 =  $("h-3");
    var array = [1,2,3];
    array=shuffle(array);
    hab1.style.backgroundImage='url('+"./imagenes/prueba.jpg"+')';
    hab1.style.backgroundRepeat='no-repeat';
    hab1.style.backgroundSize='100% 100%';
    hab2.style.backgroundImage='url('+"./imagenes/prueba.jpg"+')';
    hab2.style.backgroundRepeat='no-repeat';
    hab2.style.backgroundSize='100% 100%';
    hab3.style.backgroundImage='url('+"./imagenes/prueba.jpg"+')';
    hab3.style.backgroundRepeat='no-repeat';
    hab3.style.backgroundSize='100% 100%';
    
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
    e.dataTransfer.setData("text", e.target.id);
    e.dataTransfer.effecAllowed = 'move';
    e.target.style.opacity = '0'; 
    
    
    // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
	
}
function dragend(e){
    e.target.style.opacity = ''; 
    e.dataTransfer.clearData('Data');
}
function drop(e){
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    
    e.target.appendChild(document.getElementById(data));
    $(data).classList.add("animation");
    e.target.classList.add("brilla");    


}
function generaRnd(){

    var misAnimalitos = [
        {nombre:'Pingüino',imagen:'',sonido:'',habitat:''},
        {nombre:'Pez',imagen:'',sonido:'',habitat:''},
        {nombre:'Leon',imagen:'',sonido:'',habitat:''},
        {nombre:'Ornitorrinco',imagen:'',sonido:'',habitat:''},
        {nombre:'Conejo',imagen:'',sonido:'',habitat:''},
        {nombre:'Suricato',imagen:'',sonido:'',habitat:''},
        {nombre:'Tiburon',imagen:'',sonido:'',habitat:''},
        {nombre:'Oso polar',imagen:'',sonido:'',habitat:''},
        {nombre:'Tucan',imagen:'',sonido:'',habitat:''}         
    
    ];
    
    var vecJuego = [ ];
    var i=0;
    do{
        var obj = misAnimalitos[Math.floor(Math.random*10)];
        if(!(vecJuego.includes(obj))){
            vecJuego.push(obj);
            i++;
        }else{

        }


    }while(i<6);



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
    
    activa();
      acomodaElementos("hi");

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