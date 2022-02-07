import responsiveMedia from "./objeto_responsive.js";
import scrollTopButton from "./secciones/boton_scroll.js";
import slider from "./secciones/carousel.js";
import countdown from "./secciones/cuenta_regresiva.js";
import networkStatus from "./secciones/deteccion_conexion.js";
import userDeviceInfo from "./secciones/deteccion_dispositivos.js";
import webCam from "./secciones/deteccion_webcam.js";
import searchFilters from "./secciones/filtro_busquedas.js";
import getGeolocation from "./secciones/geolocalizacion.js";
import hamburguerMenu from "./secciones/menu_hamburguesa.js";
import speechReader from "./secciones/narrador.js";
import responsiveTester from "./secciones/prueba_responsive.js";
import { digitalClock, alarm } from "./secciones/reloj.js";
import scrollSpy from "./secciones/scroll_espia.js";
import draw from "./secciones/sorteo.js";
import { shortcuts, moveBall } from "./secciones/teclado.js";
import darkTheme from "./secciones/tema_oscuro.js";
import contactFormValidations from "./secciones/validaciones_formulario.js";
import smartVideo from "./secciones/video_inteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3","#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "May 23, 2024 03:23:19", "Feliz Cumpleaños");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube", 
        "(min-width: 1024px)", 
        `<a href= "https://www.youtube.com/watch?v=2SetvwBV-SU" target="_blank" rel="noopener">Ver Video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps", 
        "(min-width: 1024px)", 
        `<a href= "https://goo.gl/maps/Yxmhp3Vs1nfg9j9C6" target="_blank" rel="noopener">Ver Mapa</a>`, 
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13145.305930359487!2d-58.45850821525534!3d-34.5452882148179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43ae6018ddf%3A0x3d7f60a75bfa308a!2sEstadio%20Monumental%20Antonio%20Vespucio%20Liberti!5e0!3m2!1ses!2sar!4v1643316413514!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    searchFilters(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();