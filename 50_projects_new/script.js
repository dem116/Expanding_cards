// script.js - Archivo principal de JavaScript

const cards = document.querySelectorAll('.card');

// Función principal
function expandCard() {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('cardExpanded');
        });
    });
}

// Ejecutar función principal
expandCard();