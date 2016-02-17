$(function(){
  
  var contenido = $('#contenido');
  var loader = $('#loader');
  var suscribete = $('#btnSuscribete');
  contenido.css('display','none');

  var efecto = function(){
  	 setInterval(contenidoShow, 1500);
  }

  var contenidoShow = function(){
      contenido.css('display','block');
       hideLoader();
       transicitionSuscribete();
  }

  var hideLoader = function(){
     loader.css('display','none');
  }

  var transicitionSuscribete = function(){
     suscribete.animate(
     {
        right:'600px'
     },"slow");
                
  }

  efecto();
})


 //div.animate({height:'300px',opacity:'0.4'},"slow");