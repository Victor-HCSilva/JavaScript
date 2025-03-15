# CallBack

## Resumo: Uma função pode ser usada como parâmetro, e aplicada dentro do escopo de outra função.

- Definiçaõ da função:
    - A função (`multiplica_array`) recebe dois parâmetros, um array e uma função, que será usada no array dentro do laço
    ou seja a cada elemento presente no array.
```js
function multplica_array(array, func){
    let i;
    for( i = 0; i < array.length; i++){
        array[i] = func(array);
    }   
}
```

- criação da constante `func`; uma `funtion_array`:

```js
const func = (n) => n*n;
```
- Esta constante é equivalente a:

```js

function(n){
    return n*n
}
//ou mesmo

const func = function(n){
    return n*n
}
```
- Em seguida o array e a aplicação da função com o este `console.log(multplica_array(array,func))`.
Passado por referencia, o array terá seu conteudo alterado de acordo com a função `func`.

```js
console.log(multplica_array(array,func))
```
- Por ultimo o laço itera sobre todos o conteudo do array.
```js

for (const i in array){
	console.log(i)
}

```

- arquivo:

```js
function multplica_array(array, func){
    let i;
    for( i = 0; i < array.length; i++){
        array[i] = func(array);
    }   
}

const func = (n) => n*n;
array = [1,2,3,4,5,6,7]

console.log(multplica_array(array,func))

for (const i in array){
	console.log(i)
}
```