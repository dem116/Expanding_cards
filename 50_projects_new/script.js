// script.js - Archivo principal de JavaScript

const cards = document.querySelectorAll('.card');

// Función principal
function expandCard() {
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => {
                c.classList.remove('cardExpanded', 'cardReduced');
            });
            card.classList.add('cardExpanded');
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.add('cardReduced');
                }
            });
        });
    });
}

// Ejecutar función principal
expandCard();