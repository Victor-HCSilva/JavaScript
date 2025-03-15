let array = [1,2,3,4,5]
let array2 = [2,3,4,9]

console.log('Modo errado:',array+array2) //  Transforma em String, ação não recomendada
console.log(array.concat(array2))///-> cria um novo array concatenado
