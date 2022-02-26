var div_feliz=document.getElementById("win");
var div_avatar=document.getElementById("avatar");
var felicitar=document.createElement("p");
var img=document.createElement("img");
var objeto=localStorage.getItem("user");
var nombre,avatar;
const sonido = document.createElement("audio");
document.body.addEventListener('click', sonarWin);
/*var nom="Juan";
var ava="avatar.jpg";*/

function presentar(){
    felicitar.setAttribute('id','parraf');
    felicitar.innerHTML=`¡FELICIDADES ${nombre}!`;
    div_feliz.appendChild(felicitar);

    img.src=avatar;
    div_avatar.appendChild(img);
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
    const cancion=musica('audios/win1.mp3');
    cancion.play();

    setTimeout(sonarwin2,1500);
}

function sonarwin2(){
    const cancion2=musica('audios/win2.mp3');
    cancion2.play();
}

function openPortada(){

}

function openMenu(){

}

function openCreditos(){

}

window.onload=recuperar;