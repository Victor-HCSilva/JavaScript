const pessoas = [
    {'nome':'Victor',idade:98, 'salario':2800 },
    {'nome':'Melissa',idade:18, 'salario':2900 },
    {'nome':'Antonio',idade:29, 'salario':3450 },
    {'nome':'Diogo',idade:45, 'salario':4020 },
    {'nome':'Soraia',idade:8, 'salario':3 },
]
/*
let result = pessoas.map((p) => p.salario < 4000 && p.idade > 10)

console.log(result)//output -> [true, true, true, false, false]

*/
const result = pessoas.map((p) => p.nome.toLowerCase())

console.log(result) //['victor', 'melissa', 'antonio', 'diogo', 'soraia']
