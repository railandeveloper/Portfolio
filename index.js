// Módulo para a lógica do carrossel de imagens
// Seleciona o primeiro botão de rádio com a classe 'manual__btn'
let radio = document.querySelector('.manual__btn');

// Inicializa um contador com o valor 1
let contador = 1;

// Marca o radio1 como verdadeiro (selecionado) por padrão
document.getElementById('radio1').checked = true;

// Define um intervalo para chamar a função 'proximaImg' a cada 5000 milissegundos (5 segundos)
setInterval(() => {
    proximaImg();
}, 5000);

// Função para avançar para a próxima imagem
function proximaImg() {
    // Incrementa o contador
    contador++;

    // Se o contador for maior que 4, redefine para 1
    if (contador > 4) {
        contador = 1;
    }

    // Marca o botão de rádio correspondente ao contador como verdadeiro
    document.getElementById('radio' + contador).checked = true;
}




// Módulo para a lógica do botão de rolar para o topo

// Obtém o elemento do botão com o ID 'botao-topo'
const botao = document.getElementById('botao-topo');

// Adiciona um ouvinte de eventos ao botão para rolar a página para o topo quando clicado
botao.addEventListener('click', function(){
    window.scrollTo(0, 0);
});

// Adiciona um ouvinte de eventos para o evento de rolagem (scroll) da página, chamando a função 'ocultar'
document.addEventListener('scroll', ocultar);

// Função para ocultar ou exibir o botão no topo, dependendo da posição de rolagem
function ocultar() {
    // Verifica se a posição de rolagem vertical (scrollY) é maior que 10 pixels a partir do topo
    if (window.scrollY > 10) {
        // Se a condição for verdadeira, exibe o botão
        botao.style.display = 'flex';
    } else {
        // Se a condição for falsa, oculta o botão
        botao.style.display = 'none';
    }
}

// Chama a função 'ocultar' inicialmente para configurar o estado do botão com base na posição de rolagem inicial
ocultar();




// Módulo para a animação interativa do texto

// Obtém o elemento HTML com o ID 'texto-interativo'
const efeitoTexto = document.getElementById('texto-interativo');

// Define uma nova string HTML contendo um parágrafo com um nome em negrito
const novoTexto = 'Meu nome é Railan e eu sou Desenvovedor web;';


// Define um intervalo de tempo (em milissegundos) para a animação de exibição do texto
const intervalo = 100;

// Função que anima a exibição do texto de forma interativa
function showTexto(efeitoTexto, novoTexto, intervalo) {
    // Converte a nova string de texto em um array de caracteres e inverte a ordem
    const caracter = novoTexto.split('').reverse();

    // Configura um intervalo para adicionar cada caractere ao elemento HTML
    const tipo = setInterval(() => {
        // Se não houver mais caracteres, interrompe o intervalo
        if (!caracter.length) {
            return clearInterval(tipo);
        }

        // Remove o próximo caractere do final do array e adiciona ao HTML
        const proxima = caracter.pop();
        efeitoTexto.innerHTML += proxima;

    }, intervalo);
}

// Chama a função para iniciar a animação do texto
showTexto(efeitoTexto, novoTexto, intervalo);




// Módulo para a lógica de mudança de tema

// Variável para rastrear o estado do tema (claro ou escuro)
let temaClaro = true;

// Função que muda as cores e a imagem ao clicar no botão
function mudarCores() {
    // Seleciona o corpo do documento
    let corpo = document.body;
    let borda1 = document.querySelector('.container__sobre');
    let borda2 = document.querySelector('.container__habilidades');
    let botaoFlecha =document.querySelector('#botao-topo')
    
   

    // Seleciona a imagem com a classe 'imagem__note'
    let imagemDoNote = document.querySelector('.imagem__note');

    // Verifica se o tema atual é claro
    if (temaClaro) {
        // Mudar para o tema escuro
        corpo.style.backgroundColor = 'var(--cor-de-fundo)';
        corpo.style.color = 'var(--branco-principal)';
        imagemDoNote.src = '/imagens/hacker.jpg';
        // Atualiza o estado do tema para escuro
        temaClaro = false;
    } else {
        // Mudar para o tema claro
        corpo.style.backgroundColor = 'white';
        corpo.style.color = 'black';
        imagemDoNote.src = '/imagens/computador-com-codigo.png'; // Substitua pelo caminho da imagem desejada para o tema claro
        borda1.style.border ='4px solid #303030'
        borda2.style.border ='4px solid #303030'
        botaoFlecha.style.backgroundColor = 'black'
        
        // Atualiza o estado do tema para claro
        temaClaro = true;
    }
}






