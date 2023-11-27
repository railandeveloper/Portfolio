// Seleciona todos os links dentro do elemento com a classe 'container__navegador'
const linksDoMenu = document.querySelectorAll('.container__navegador a[href^="#"]');

// Função para obter a distância do topo de uma seção específica
function obterDistanciaDoTopo(elemento) {
   // Obtém o atributo 'href' do elemento, que contém o identificador da seção desejada
   const idDaSecao = elemento.getAttribute('href');
   // Retorna a distância do topo da seção em relação ao documento
   return document.querySelector(idDaSecao).offsetTop;
}

// Função para rolar suavemente até uma determinada distância do topo
function rolarSuavemente(distanciaDoTopo) {
    // Utiliza a função de rolar da janela do navegador
    window.scroll({
        top: distanciaDoTopo,
        behavior: 'smooth' // Adiciona um efeito de rolagem suave
    });
}

// Função para lidar com o clique nos links do menu
function rolarParaSecao(evento) {
    // Impede o comportamento padrão do clique, que seria o de navegar para a âncora
    evento.preventDefault();
    // Calcula a distância do topo da seção desejada, ajustada por um valor específico
    const distanciaDoTopo = obterDistanciaDoTopo(evento.target) - 90;
    // Chama a função para rolar suavemente até a seção desejada
    rolarSuavemente(distanciaDoTopo);
}

// Adiciona um ouvinte de evento de clique a cada link do menu
linksDoMenu.forEach((link) => {
    link.addEventListener('click', rolarParaSecao);
});

