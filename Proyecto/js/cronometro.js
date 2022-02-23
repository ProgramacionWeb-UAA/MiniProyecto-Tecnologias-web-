function inicia(){
    var contador_s=0;
    var contador_m=0;
    var contador_h=0;
    var hrs=document.getElementById("hrs");
    var min=document.getElementById("min");
    var seg=document.getElementById("seg");

    window.setInterval(function(){

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

}
window.onload=inicia;