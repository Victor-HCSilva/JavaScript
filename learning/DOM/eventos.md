# Eventos
- `addEventListener("Nomeevento", funcao)`
- vide documentação 'mozila'


Você tem toda a razão em questionar! Minha resposta anterior focou em corrigir a forma como a função `main` era chamada no `addEventListener`, mas **não abordou o problema principal** que impede o programa de funcionar como esperado.

**O Problema Real: `document.querySelector("#nome")` Retorna `null`**

O principal problema é que a função `f2` tenta acessar um elemento com o ID `nome` usando `document.querySelector("#nome")`. Se esse elemento **não existir no HTML** no momento em que `f2` é executada, a variável `t` receberá o valor `null`, e o código não irá encontrar o elemento.

**A Solução Completa (e Mais Correta):**

1. **Garantir que o Elemento Existe no HTML:**
   - O primeiro passo é ter certeza de que **existe um elemento no seu HTML com o `id="nome"`**. Se não existir, o código sempre retornará `null`.
   - Exemplo de HTML:
     ```html
     <!DOCTYPE html>
     <html>
     <head>
       <title>Exemplo</title>
     </head>
     <body>
       <input type="text" id="nome" value="Nome do usuário">
       <script src="seu_script.js"></script>
     </body>
     </html>
     ```

2. **Corrigir a Chamada `main` no `addEventListener`:**
   - Como expliquei antes, você precisa de uma função de callback para ser executada quando o evento `DOMContentLoaded` for disparado.

**Código Corrigido:**

```javascript
const f1 = () => {
    console.log("Função 1")
}

const f2 = () => {
    const t = document.querySelector("#nome");
    console.log("Funcao 2:", t)
}

const main = (f1, f2) => {
   f1();
    f2();
    return [f1,f2]
}

document.addEventListener("DOMContentLoaded", () => {
    main(f1, f2);
});
```

**Explicação Detalhada da Correção:**

1.  **Elemento HTML:** A principal correção é a presença do elemento com `id="nome"` no seu HTML. Sem ele, o `document.querySelector("#nome")` retornará `null`.
2.  **Callback do Evento `DOMContentLoaded`:**
    -   Utilizamos `() => { main(f1, f2); }` para garantir que a função `main` seja chamada apenas depois que a página (o DOM) estiver totalmente carregada.

**Por que minha primeira resposta foi incompleta?**

Foquei em corrigir o `addEventListener` porque geralmente é o erro mais comum em códigos como o seu. No entanto, eu deveria ter investigado mais a fundo o comportamento de `f2` que tinha uma dependencia do HTML, que estava faltando.

**Resumo da Solução:**

1. **Verifique seu HTML:** Certifique-se de que o elemento com `id="nome"` existe.
2. **Use um Callback:** Corrija o uso do `addEventListener` para usar uma função de callback (função anônima ou arrow function) que chamará `main` após o carregamento do DOM.

**Peço desculpas pelo erro na minha resposta anterior.** É muito importante ter certeza de que estamos abordando o problema correto. O seu questionamento me ajudou a dar uma resposta mais completa e correta.
