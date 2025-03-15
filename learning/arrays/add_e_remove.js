let pessoas = [
    'Victor',
    'José',
    'Mariana',
    'Isabel',
    'Augusto',
]

// um intervalo do array:
console.log(pessoas.slice(1,3))

// ultimo elemento
console.log(pessoas[pessoas.length - 1]) 

//Adicionar na ultima posicao
pessoas.push('Miguel')
//Adiciona na posicao 0
pessoas.unshift('Roberta')

console.log(pessoas)

//Retirando o ultimo elemento
pessoas.pop()

//Retira primeiro elemento
pessoas.shift()

//apagar um intervalo, comeca da posicao 1 e apaga ele mesmo mais 1.
pessoas.splice(1,2)

//localicar elementos
let index = pessoas.indexOf('Victor')
pessoas.splice(index, 1)//indicie e a quantidade que vai remover
console.log(index)
