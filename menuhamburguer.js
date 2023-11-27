const menuHamburguer = document.querySelector('.menu__hamburguer');
const navegadorHamburguer = document.querySelector('.navegador-hamburguer')

menuHamburguer.addEventListener('click', clicar);

// Ao clicar no menu hamburguer
function clicar() {
   //  Verificar se o navegadorHamburguer está atualmente visível
   const navegadorVisivel = navegadorHamburguer.style.display === 'block';

   // Alterna entre exibição e ocultação, se ele esta visivel ao clicar, ficara invisvel, e se estiver visivel ficara invisivel
   navegadorHamburguer.style.display = navegadorVisivel ? 'none' : 'block';
}
