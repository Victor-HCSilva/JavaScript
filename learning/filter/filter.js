//filter
const vetor = [30, 98, 8, -2,10];

//cria uma função que vai verificar se o numero é maior que 10
let myFilter = (item) => item > 10;

/*
//modo 1:

let numeros_maiores_que_10 = vetor.filter(myFilter)

//Modo 2:
let numeros_maiores_que_10 = vetor.filter(function(item){
    return item > 10
})
*/
//modo 4, mais conciso
let numeros_maiores_que_10 = vetor.filter((item) => item > 10)
console.log(numeros_maiores_que_10)//output -> 30,98