$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

    setInterval(function(){
        $('.carousel').carousel('next'); //va a pasar a la siguiente imágen
    }, 10000); //tiempo en milisegundos
});

function mostrarAlerta(producto) {
  alert("Gracias por comprar: " + producto);
}

