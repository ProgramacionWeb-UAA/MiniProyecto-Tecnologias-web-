var div_feliz=document.getElementById("win");
var div_avatar=document.getElementById("avatar");
var felicitar=document.createElement("p");
var img=document.createElement("img");
var objeto=localStorage.getItem("user");
var nombre,avatar;
const sonido = document.createElement("audio");


function presentar(){
    felicitar.setAttribute('id','parraf');
    felicitar.innerHTML=`¡FELICIDADES ${nombre}!`;
    div_feliz.appendChild(felicitar);

    img.src=avatar;
    div_avatar.appendChild(img);
    sonarWin();
}

function musica(direccion){
    sonido.src = direccion;
    sonido.setAttribute("preload", "none");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- ocultar el elemento en pantalla
    document.body.appendChild(sonido);
    return sonido;
}

function recuperar(){

    objeto=localStorage.getItem('user');
    objeto=JSON.parse(objeto);
    nombre=objeto.nombre;
    nombre=nombre.toUpperCase();
    
    avatar="imagenes/"+objeto.avatar;

    presentar();
}

function sonarWin(){
    let boton=document.createElement("button");
    const cancion=musica('audios/win1.mp3');
    boton.click();
    cancion.play();
    setTimeout(sonarwin2,900);
}

function sonarwin2(){
    let boton=document.createElement("button");
    const cancion2=musica('audios/win2.mp3');
    boton.click();
    cancion2.play();
}

function openPortada(){

}

function openJugar(){

}

function openCreditos(){

}

window.onload=recuperar;