O **DOM (Document Object Model)** é uma representação em forma de árvore da estrutura de um documento HTML ou XML. Imagine que o seu navegador, ao ler um código HTML, transforma aquele código em um objeto que pode ser manipulado via JavaScript. Esse objeto é o DOM.

**Principais características do DOM:**

*   **Estrutura em Árvore:** O DOM representa a hierarquia dos elementos HTML (tags) como uma árvore, onde o elemento `<html>` é a raiz, e os demais elementos são seus nós (filhos, netos, etc.).
*   **Objetos:** Cada elemento HTML (como `<h1>`, `<p>`, `<div>`, etc.) é representado como um objeto no DOM. Esses objetos possuem propriedades e métodos que permitem acessá-los e manipulá-los.
*   **Acessível via JavaScript:** O DOM permite que scripts JavaScript interajam com a estrutura e o conteúdo de uma página web. É através do DOM que o JavaScript consegue:
    *   **Acessar e modificar** elementos HTML.
    *   **Alterar** estilos CSS.
    *   **Adicionar, remover e manipular** nós da árvore DOM.
    *   **Responder a eventos** do usuário (cliques, movimentos do mouse, etc.).

**Em resumo:**

O DOM é a ponte que permite que o JavaScript entenda a estrutura de uma página web e a manipule de forma dinâmica. Ele é essencial para criar páginas interativas e responsivas. Pense nele como a "representação viva" da sua página HTML dentro do navegador.
