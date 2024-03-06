const corazones = document.querySelectorAll(".corazon");
const gotas = document.querySelectorAll(".gota");

function animarCorazones() {
    corazones.forEach((corazon) => {
        corazon.style.animationDuration = `${Math.random() * 2 + 2}s`;
    });
}

function animarLluvia() {
    gotas.forEach((gota) => {
        gota.style.animationDuration = `${Math.random() * 2 + 2}s`;
    });
}

animarCorazones();
animarLluvia();

setInterval(animarCorazones, 5000);
setInterval(animarLluvia, 5000);
