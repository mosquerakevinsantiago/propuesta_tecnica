const texto = "Sistema Inteligente de Propuestas Técnicas y Licitaciones";
const subtitulo = document.getElementById("typing");

let i = 0;

function escribirTexto() {
    if (i < texto.length) {
        subtitulo.innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribirTexto, 60);
    }
}

window.onload = escribirTexto;

const cards = document.querySelectorAll(".card");

const mostrarCards = () => {
    cards.forEach(card => {
        const posicion = card.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            card.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", mostrarCards);
mostrarCards();

function actualizarHora() {
    const reloj = document.getElementById("reloj");

    if (reloj) {
        const fecha = new Date();
        const hora = fecha.toLocaleTimeString();

        reloj.innerHTML = `🕒 ${hora}`;
    }
}

setInterval(actualizarHora, 1000);

const titulo = document.querySelector("h1");

setInterval(() => {
    const colores = [
        "#00ffff",
        "#00ff99",
        "#ff00ff",
        "#00ccff"
    ];

    const color = colores[Math.floor(Math.random() * colores.length)];

    titulo.style.textShadow = `
        0 0 20px ${color},
        0 0 40px ${color},
        0 0 60px ${color}
    `;
}, 2000);

let visitas = localStorage.getItem("visitas") || 0;

visitas++;

localStorage.setItem("visitas", visitas);

const contador = document.getElementById("visitas");

if (contador) {
    contador.innerHTML = `👁 Visitantes: ${visitas}`;
}

document.querySelectorAll('a[href^="#"]').forEach(enlace => {
    enlace.addEventListener("click", function(e) {
        e.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({
            behavior: "smooth"
        });
    });
});

setTimeout(() => {
    alert("🚀 Bienvenido al Portal Futurista de Propuestas Técnicas y Licitaciones");
}, 1000);

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}