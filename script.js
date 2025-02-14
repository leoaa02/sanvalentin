const contenedor = document.getElementById('contenedorCorazones');
const mensaje = document.getElementById('mensaje');

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDelay = Math.random() * 2 + 's';
    contenedor.appendChild(corazon);

    corazon.addEventListener('animationend', () => {
        corazon.remove();
        crearCorazon(); // Crea un nuevo corazón al final de la animación
    });
}

setInterval(crearCorazon, 300); // Crea corazones cada 300ms

document.addEventListener('click', () => {
    mensaje.style.display = 'block'; // Muestra el mensaje
});

