- Adicionar tags html

```js
    const list = document.createElement("ul")

    //inserção do conteudo
    const subTitulo = document.createElement("h2")
    subTitulo.innerHTML = "projetos"

    const item1 = document.createElement("li")
    item1.innerHTML = "TODO MVC?"

    const item2 = document.createElement("li")
    item2.innerHTML = "git?"

    const item3 = document.createElement("li")
    item3.innerHTML = "mhRt?"

    //adiciona à tag ul as tags li
    list.append(item1)
    list.append(item2)
    list.append(item3)

    //Para que aparecam se deve adicionar ao html pelo document.body
    document.body.append(subTitulo)
    document.body.append(list)
```