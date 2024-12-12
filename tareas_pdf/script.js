// JavaScript para hacer que el carrusel funcione
let currentIndex = 0;
const cuadros = document.querySelectorAll('.cuadro');
const totalCuadros = cuadros.length;

function showCuadro(index) {
    // Elimina la clase 'active' de todos los cuadros
    cuadros.forEach(cuadro => cuadro.classList.remove('active'));
    
    // Muestra el cuadro en el índice actual
    cuadros[index].classList.add('active');
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalCuadros - 1 : currentIndex - 1;
    showCuadro(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalCuadros - 1) ? 0 : currentIndex + 1;
    showCuadro(currentIndex);
});

// Inicia el carrusel mostrando el primer cuadro
showCuadro(currentIndex);
