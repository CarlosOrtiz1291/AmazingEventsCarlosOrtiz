$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true, // Iniciar la reproducción automática
        autoplaySpeed: 3000, // Cambiar de imagen cada 3 segundos
        dots: true, // Mostrar indicadores de puntos
        arrows: true, // Mostrar botones de navegación
        infinite: true, // Habilitar bucle infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Mostrar una imagen a la vez
        slidesToScroll: 1 // Desplazarse una imagen a la vez
    });
});
