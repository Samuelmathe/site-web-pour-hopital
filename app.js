const ouvrirNav = document.getElementById('ouvrirNav');
const fermerNav = document.getElementById('fermerNav');
const navbar = document.getElementById('navbar');

ouvrirNav.addEventListener('click', function() {
  navbar.style.display = 'block';
});

fermerNav.addEventListener('click', function() {
  navbar.style.display = 'none';
});

// Animation du navbar lors du défilement de la page
window.addEventListener('scroll', function() {
  const scrollPos = window.scrollY;
  const header = document.querySelector('header');

  if (scrollPos > 100) {
    header.style.top = '-20px'; // Cache le header au défilement
    navbar.style.top = '0'; // Affiche le navbar fixe
    document.body.style.paddingTop = '120px'; // Ajuste le padding du body pour compenser la hauteur
  } else {
    header.style.top = '0'; // Affiche le header
    navbar.style.top = '20px'; // Cache le navbar
    document.body.style.paddingTop = '60px'; // Rétablit le padding du body
  }
});
