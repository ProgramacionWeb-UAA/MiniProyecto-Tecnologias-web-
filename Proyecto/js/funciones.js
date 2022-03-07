


var recognition

function reconocimientoVoz(){

    var boton = document.getElementById("voz");
    if(boton.className=="icon-microphone-slash"){
        // speechSynthesis.speak(new SpeechSynthesisUtterance("Dinos tu nombre amigo"));
        notie.alert({
            type: 'warning', // optional, default = 4, enum: [1, 2, 3, 4, 5, 'success', 'warning', 'error', 'info', 'neutral']
            text: 'DINOS TU NOMBRE',
            stay: false, // optional, default = false
            time: 6, // optional, default = 3, minimum = 1,
            position: 'top' // optional, default = 'top', enum: ['top', 'bottom']
          });
        boton.classList.remove("icon-microphone-slash");
        boton.classList.add("icon-microphone");
        
        if (!('webkitSpeechRecognition' in window)) {
            alert("Unable to use the Speech Recognition API");
        }else{

            recognition = new webkitSpeechRecognition();
            // Define whether continuous results are returned for each recognition
            // or only a single result. Defaults to false
            recognition.continuous = true;
            // Controls whether interim results should be returned 
            // Interim results are results that are not yet final 
            // (e.g. the SpeechRecognitionResult.isFinal property is false.)
            recognition.interimResults = true;
            // Returns and sets the language of the current SpeechRecognition. 
            // If not specified, this defaults to the HTML lang attribute value
            // or the user agent's language setting if that isn't set either.
            // There are a lot of supported languages (go to supported languages at the end of the article)
            recognition.lang = "es-MX";

            recognition.onresult = function(event) {
                console.log('Speech recognition service has started');
            };
            recognition.onresult = function(event) {
            var resultado;
            for (var i = event.resultIndex; i < event.results.length; ++i) {
            // Verify if the recognized text is the last with the isFinal property
       
                // resultado+=event.results[i][0].transcript;
                document.getElementById("captura").value=event.results[i][0].transcript;
            }
    
    
            // Choose which result may be useful for you

    
            };
            recognition.start();

        }
    }else{
        boton.classList.remove("icon-microphone");
        boton.classList.add("icon-microphone-slash");
        recognition.stop();
    }
    
    

}
function limpiar(){

    document.getElementById("captura").value="";

}
function guarda(){
    var nombre=document.getElementById("captura").value;
    
    var avatares=document.querySelectorAll('.radio');
    var avatar;
    for(var i=0;i<avatares.length;i++){

        if(avatares[i].checked){
            avatar=avatares[i];
        }
    }
    if(avatar==null || nombre==''){
        var alert = alertify.alert("ATENCION",'Ingresa tu nombre y tu avatar para poder continuar...',function(){
        
           
        }).set('label', 'Aceptar');     	 
        alert.set({transition:'flipx'}); //slide, zoom, flipx, flipy, fade, pulse (default)
        alert.set('modal', false);  //al pulsar fuera del dialog se cierra o no
        return;
    }
    var obj=JSON.stringify({
        nombre:nombre,
        avatar:avatar.value


    });
    localStorage.setItem("user",obj);
    var ventana = window.self;
    ventana.opener = window.self;
    ventana.close();
    window.open('./pantalla.html','self');
}

function tecla(ev){

    if(ev.keyCode==13){
        guarda();

    }




}