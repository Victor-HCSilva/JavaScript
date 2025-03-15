const pessoa = [
    {'name':"Felipe","height":1.63, age: 40},
    {'name':"Marcelina","height":1.73, age: 16},
    {'name':"Marcia","height":1.67, age: 20},
]
//pessoa[0] = {}

//O céu também não é limite
result = pessoa.filter((p) => p.age >= 18 && p.height < 1.65)
console.log(result)
