//desestruturação

let v = [2,5,5,9]

//util 
let [n1, n2, n3] = v;

console.log(n1)

//Sua utilidade é o retorno de mais um dado na função
let bugaCoodernada = (x, y) => [x+2, y-2]

let [q1,q2] = bugaCoodernada(2,5)

console.log('q1:',q1)
console.log('q2:',q2)