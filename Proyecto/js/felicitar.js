var div_feliz=document.getElementById("win");
var div_avatar=document.getElementById("avatar");
var felicitar=document.createElement("p");
var img=document.createElement("img");
//var objeto=localStorage.getItem("user");
var nombre,avatar;
var nom="Juan";
var ava="avatar.jpg";

function recuperar(){

    objeto=localStorage.getItem('user');
    objeto=JSON.parse(objeto);
    nombre=objeto.nombre;
    nombre=nombre.toUpperCase();
    avatar="imagenes/"+objeto.avatar;

    presentar();
}

function presentar(){
    felicitar.setAttribute('id','parraf');
    felicitar.innerHTML=`¡FELICIDADES ${nombre}!`;
    div_feliz.appendChild(felicitar);
}

window.onload=recuperar;