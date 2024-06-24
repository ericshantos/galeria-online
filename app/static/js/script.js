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
