/* =========================================================
   ELEMENTOS
========================================================= */

const portada =
    document.getElementById("portada");

const invitacion =
    document.getElementById("invitacion");

const botonAbrir =
    document.getElementById("botonAbrir");

const nombreInvitado =
    document.getElementById("nombreInvitado");

const musica =
    document.getElementById("musicaFondo");

const controlMusica =
    document.getElementById("controlMusica");

const botonWhatsapp =
    document.getElementById("botonWhatsapp");


let abierta = false;
let observer;


/* =========================================================
   INVITADO DESDE URL
========================================================= */

function cargarInvitado() {

    const parametros =
        new URLSearchParams(
            window.location.search
        );

    const codigo =
        parametros.get("name");


    if (
        codigo &&
        typeof invitados !== "undefined" &&
        invitados[codigo]
    ) {

        const invitado =
            invitados[codigo];


        if (
            typeof invitado === "string"
        ) {

            nombreInvitado.textContent =
                invitado;

        } else {

            nombreInvitado.textContent =
                invitado.nombre ||
                "Invitado especial";

        }

    } else {

        nombreInvitado.textContent =
            "Invitado especial";

    }
}


/* =========================================================
   ABRIR INVITACIÓN
========================================================= */

function abrirInvitacion() {

    if (abierta) {
        return;
    }


    abierta = true;


    portada.classList.add(
        "abriendo"
    );


    /* =====================================================
       MÚSICA
    ===================================================== */

    if (musica) {

        musica.volume = 0.50;


        musica.play()

            .then(() => {

                if (controlMusica) {

                    controlMusica.textContent =
                        "♫";
                }

            })

            .catch(() => {

                if (controlMusica) {

                    controlMusica.textContent =
                        "♪";
                }

            });

    }


    /* =====================================================
       MOSTRAR INVITACIÓN
    ===================================================== */

    setTimeout(() => {

        invitacion.classList.add(
            "visible"
        );


        portada.style.display =
            "none";


        document.body.style.overflowY =
            "auto";


        if (controlMusica) {

            controlMusica.classList.add(
                "visible"
            );
        }


        window.scrollTo({
            top: 0,
            behavior: "auto"
        });


        activarAnimaciones();


    }, 1750);
}


/* =========================================================
   BOTÓN ABRIR
========================================================= */

if (botonAbrir) {

    botonAbrir.addEventListener(
        "click",
        abrirInvitacion
    );
}


/* =========================================================
   CONTROL MÚSICA
========================================================= */

if (
    controlMusica &&
    musica
) {

    controlMusica.addEventListener(
        "click",
        async () => {

            try {

                if (musica.paused) {

                    await musica.play();

                    controlMusica.textContent =
                        "♫";

                } else {

                    musica.pause();

                    controlMusica.textContent =
                        "♪";

                }

            } catch (error) {

                console.log(
                    "No fue posible reproducir la música:",
                    error
                );

            }
        }
    );
}


/* =========================================================
   ANIMACIONES SCROLL
========================================================= */

function activarAnimaciones() {

    const elementos =
        document.querySelectorAll(
            ".revelar"
        );


    if (observer) {

        observer.disconnect();
    }


    observer =
        new IntersectionObserver(

            (entradas) => {

                entradas.forEach(
                    (entrada) => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target
                                .classList
                                .add("visible");


                            observer.unobserve(
                                entrada.target
                            );
                        }

                    }
                );

            },

            {
                threshold: 0.15,

                rootMargin:
                    "0px 0px -40px 0px"
            }

        );


    elementos.forEach(
        (elemento) => {

            observer.observe(
                elemento
            );

        }
    );
}


/* =========================================================
   CONTADOR
========================================================= */

const fechaEvento =
    new Date(
        "2026-10-24T19:00:00"
    );


function actualizarContador() {

    const ahora =
        new Date();


    let diferencia =
        fechaEvento.getTime() -
        ahora.getTime();


    if (diferencia <= 0) {

        diferencia = 0;
    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (
                diferencia %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutos =
        Math.floor(
            (
                diferencia %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const segundos =
        Math.floor(
            (
                diferencia %
                (1000 * 60)
            ) /
            1000
        );


    const elementoDias =
        document.getElementById(
            "dias"
        );

    const elementoHoras =
        document.getElementById(
            "horas"
        );

    const elementoMinutos =
        document.getElementById(
            "minutos"
        );

    const elementoSegundos =
        document.getElementById(
            "segundos"
        );


    if (elementoDias) {

        elementoDias.textContent =
            String(dias)
                .padStart(2, "0");
    }


    if (elementoHoras) {

        elementoHoras.textContent =
            String(horas)
                .padStart(2, "0");
    }


    if (elementoMinutos) {

        elementoMinutos.textContent =
            String(minutos)
                .padStart(2, "0");
    }


    if (elementoSegundos) {

        elementoSegundos.textContent =
            String(segundos)
                .padStart(2, "0");
    }
}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* =========================================================
   WHATSAPP
========================================================= */

function configurarWhatsapp() {

    if (!botonWhatsapp) {
        return;
    }


    const invitado =
        nombreInvitado
            ? nombreInvitado.textContent
            : "Invitado";


    const mensaje =
`Hola, confirmo mi asistencia a los XV de Ana Sofía Mondragón Valencia.

Invitación para: ${invitado}

Fecha: 24 de octubre de 2026
Hora: 7:00 p. m.

¡Muchas gracias!`;


    /*
       IMPORTANTE:
       Este es el número que actualmente
       está configurado.

       Si necesitas cambiarlo,
       solo reemplaza este número.
    */

    const numero =
        "573025438454";


    botonWhatsapp.href =
        "https://wa.me/" +
        numero +
        "?text=" +
        encodeURIComponent(
            mensaje
        );
}


/* =========================================================
   INICIALIZACIÓN
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarInvitado();

        configurarWhatsapp();

    }
);