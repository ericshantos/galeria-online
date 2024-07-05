/**
 * @module ScrollBehavior
 * 
 * Este módulo lida com a adição e remoção de classes CSS em resposta aos eventos de rolagem
 * e ao carregamento do documento. Ele fornece funcionalidades para alterar a aparência do
 * cabeçalho e mostrar um botão de "voltar ao topo" baseado na posição de rolagem da página.
 * 
 * Funcionalidades:
 * 1. Adiciona a classe 'scrolled' ao cabeçalho quando a página é rolada.
 * 2. Adiciona a classe 'show' ao botão de "voltar ao topo" quando a rolagem vertical excede 100 pixels.
 * 3. Remove as classes 'scrolled' e 'show' quando a rolagem vertical é menor ou igual a 100 pixels.
 */

window.addEventListener('scroll', function() {
    /**
     * Adiciona ou remove a classe 'scrolled' do cabeçalho baseado na posição de rolagem da página.
     * 
     * O evento 'scroll' é ativado quando o usuário rola a página.
     * Se a posição da rolagem vertical (window.scrollY) for maior que 0,
     * a classe 'scrolled' é adicionada ao elemento com id 'header'.
     * Caso contrário, a classe 'scrolled' é removida.
     */
    const header = document.getElementById('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Executa funções quando o conteúdo do documento foi completamente carregado e analisado.
     * 
     * O evento 'DOMContentLoaded' é ativado quando o HTML foi completamente carregado e analisado,
     * sem esperar pelo CSS, imagens e subframes para terminarem de carregar.
     */
    window.addEventListener('scroll', function() {
        /**
         * Adiciona ou remove classes baseadas na posição de rolagem da página.
         * 
         * O evento 'scroll' é ativado quando o usuário rola a página.
         * Se a posição da rolagem vertical (window.scrollY) for maior que 100,
         * as classes 'scrolled' e 'show' são adicionadas aos elementos com id 'header' e 'subir-topo', respectivamente.
         * Caso contrário, as classes 'scrolled' e 'show' são removidas.
         */
        const header = document.getElementById('header');
        const subirTopo = document.getElementById('subir-topo');

        if (window.scrollY > 100) {
            header.classList.add('scrolled');
            subirTopo.classList.add('show');
        } else {
            header.classList.remove('scrolled');
            subirTopo.classList.remove('show');
        }
    });
});

/**
 * Script para desativar o menu de contexto em todos os elementos da página.
 * Ele seleciona todos os elementos da página e define o atributo 'oncontextmenu="return false;"'
 * em cada um deles para prevenir a exibição do menu de contexto padrão.
 */

// Seleciona todos os elementos da página
const allElements = document.querySelectorAll('*');

// Itera sobre cada elemento e define oncontextmenu="return false;"
allElements.forEach(element => {
  // Define o atributo 'oncontextmenu' como 'return false;' para desabilitar o menu de contexto
  element.setAttribute('oncontextmenu', 'return false;');
});

/**
 * Aguarda o carregamento completo do DOM antes de executar o código.
 * Quando o DOM estiver carregado, procura por um link que leva ao conteúdo principal
 * e adiciona um evento de clique para rolar suavemente até esse conteúdo.
 */
document.addEventListener("DOMContentLoaded", function() {
    // Encontra o elemento âncora que aponta para o conteúdo principal
    const linkScroll = document.querySelector('a[href="#conteudo"]');

    // Verifica se o link de scroll foi encontrado no documento
    if (linkScroll) {
        // Adiciona um ouvinte de evento para o clique no link de scroll
        linkScroll.addEventListener('click', function(event) {
            // Impede o comportamento padrão de seguir o link
            event.preventDefault();

            // Obtém o ID do elemento alvo removendo o primeiro caractere (#)
            const targetId = this.getAttribute('href').substring(1);

            // Encontra o elemento alvo no DOM com base no ID obtido
            const targetElement = document.getElementById(targetId);

            // Verifica se o elemento alvo foi encontrado no documento
            if (targetElement) {
                // Define um valor de deslocamento (offset) para ajuste fino do scroll
                const offset = 80; // Ajuste conforme necessário

                // Calcula a posição final de scroll para o elemento alvo
                const targetPosition = targetElement.offsetTop - offset;

                // Realiza um scroll suave até a posição calculada do elemento alvo
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth' // Define o comportamento de scroll como suave
                });
            }
        });
    }
});

/**
 * Função principal que adiciona comportamentos dinâmicos ao ícone do menu hambúrguer.
 * Utiliza eventos como clique no checkbox e interações do mouse para alterar classes CSS.
 * 
 * @event DOMContentLoaded - Disparado quando o documento HTML foi completamente carregado e analisado.
 */
document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona o elemento do ícone do menu hambúrguer
    const hamburguer = document.querySelector('.hamburguer');
    
    // Seleciona o elemento checkbox responsável pelo menu hambúrguer
    const checkbox = document.getElementById('menu-hamburguer');

    /**
     * Adiciona um listener para o evento de mudança (change) no checkbox.
     * Atualiza dinamicamente as classes CSS do ícone do menu hambúrguer dependendo do estado do checkbox.
     * 
     * @event change
     */
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            hamburguer.classList.add('hamburguer-open');   // Adiciona classe para ícone aberto
            hamburguer.classList.remove('hamburguer-closed'); // Remove classe para ícone fechado
        } else {
            hamburguer.classList.add('hamburguer-closed'); // Adiciona classe para ícone fechado
            hamburguer.classList.remove('hamburguer-open'); // Remove classe para ícone aberto
        }
    });

    /**
     * Adiciona um listener para o evento de passagem do mouse sobre o ícone do menu hambúrguer.
     * Altera dinamicamente as classes CSS do ícone do menu hambúrguer com base no estado do checkbox.
     * 
     * @event mouseover
     */
    hamburguer.addEventListener('mouseover', () => {
        if (checkbox.checked) {
            hamburguer.classList.add('hamburguer-hover-open');   // Adiciona classe para ícone aberto com mouseover
            hamburguer.classList.remove('hamburguer-hover-closed'); // Remove classe para ícone fechado com mouseover
        } else {
            hamburguer.classList.add('hamburguer-hover-closed'); // Adiciona classe para ícone fechado com mouseover
            hamburguer.classList.remove('hamburguer-hover-open'); // Remove classe para ícone aberto com mouseover
        }
    });

    /**
     * Adiciona um listener para o evento de remoção do mouse de cima do ícone do menu hambúrguer.
     * Remove as classes CSS adicionadas durante o hover do mouse.
     * 
     * @event mouseout
     */
    hamburguer.addEventListener('mouseout', () => {
        hamburguer.classList.remove('hamburguer-hover-open');    // Remove classe para ícone aberto com mouseout
        hamburguer.classList.remove('hamburguer-hover-closed');  // Remove classe para ícone fechado com mouseout
    });
});

/**
 * Função para expandir ou reduzir a altura da vitrine de imagens.
 * Quando o botão é clicado, a altura da vitrine aumenta em 10vh. 
 * Se todas as imagens já estiverem visíveis, a altura é resetada para o valor inicial e o texto do botão muda para "Ver menos".
 */
function expandirVitrine() {
    // Seleciona a div com a classe 'ver-mais'
    var verMaisDiv = document.querySelector('.ver-mais');

    // Seleciona o botão 'ver mais'
    var verMaisBtn = document.querySelector('.ver-mais-btn');

    // Seleciona o span dentro do botão 'ver mais'
    var verMaisSpan = document.querySelector('.ver-mais-btn span');

    // Obtém a altura atual da div 'ver-mais' em pixels
    var currentHeight = parseFloat(getComputedStyle(verMaisDiv).height);

    // Calcula a altura inicial da div 'ver-mais' em pixels (90vh)
    var initialHeight = window.innerHeight * 0.9;

    // Converte 1vh para pixels
    var vhToPixels = window.innerHeight / 100;

    // Calcula a nova altura adicionando 30vh à altura atual
    var newHeight = currentHeight + (30 * vhToPixels);

    // Obtém a altura total do conteúdo da vitrine
    var vitrineHeight = verMaisDiv.scrollHeight;

    // Verifica se a altura atual é menor que a altura total do conteúdo
    if (currentHeight < vitrineHeight) {
        // Define a nova altura da div 'ver-mais'
        verMaisDiv.style.height = `${newHeight}px`;

        // Verifica se a nova altura é maior ou igual à altura total do conteúdo
        if (newHeight >= vitrineHeight) {
            // Altera o texto do botão para "Ver menos" e adiciona a classe 'less'
            verMaisSpan.textContent = "Ver menos";
            verMaisBtn.classList.add('less');
        }
    } else {
        // Reseta a altura da div 'ver-mais' para a altura inicial
        verMaisDiv.style.height = `${initialHeight}px`;

        // Altera o texto do botão de volta para "Ver mais" e remove a classe 'less'
        verMaisSpan.textContent = "Ver mais";
        verMaisBtn.classList.remove('less');
    }
}

