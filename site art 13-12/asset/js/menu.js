// Sélection des éléments
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menuOverlay = document.getElementById('menu-overlay');

// Afficher le menu
menuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('hidden');
});

// Cacher le menu
closeBtn.addEventListener('click', () => {
    menuOverlay.classList.add('hidden');
});

