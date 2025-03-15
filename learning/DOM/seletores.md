# "Pegar" valores e tags da memoria do navegador

- Todas as tags `<p>`
```js
    console.log("*:",document.querySelectorAll("p"))
```


- tudo que esta contido dentro da tag `<p>`:
```js
    console.log("*:",document.querySelectorAll("p *"))
```
- Tudo:
```js
    console.log("*:",document.querySelectorAll("*"))
```
- Pelo id, necessario `#`:

```js
    console.log("*:",document.querySelector("#id_o"))
```
- pela class

```js
    console.log("*:",document.querySelector(".container"))
```

- Epecificando que deve ser uma tag `<a>` que possua `href`:
```js
    console.log("elementos a:",document.querySelectorAll("a[href]"))
```
- Especifincando ainda mais, deve ser uma tag `<a>` com `href` e deve ser exatamente LINK_DO_SEU_GITHUB:
```js
    console.log("elementos a:",document.querySelectorAll("a[href='LINK_DO_SEU_GITHUB']"))
```

- mais:

```js
    // Universal: *
    // Id: #el-id
    // Tag: <el>
    // Class: .el-class
    // Atributos: [attr=value] 
    // Grupos (vírgula): el,el 
    // Descendentes (espaço): el el
    // Childs (>): el › el
```


