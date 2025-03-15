
//Number and String
console.log(typeof String(1)) //output -> String
console.log(typeof Number('a')) // output -> NaN
console.log(NUmber(true)) //output -> 1

//Boolean

console.log(Boolean('abc')) //output -> true
console.log(Boolean('')) //output -> false
console.log(String(false)) //output -> "false"
console.log(String(true)) //output -> "true"

//String -> data

console.log(new Date('01/29/2025')) //output Wed Jan 29 2025 00:00:00 GMT-0300 (Horário Padrão de Brasília)
console.log(new Date('2025-01-29'))//correto
console.log(new Date('2025 01 29'))//correto

//Date -> String
console.log(new Date().toISOString())
console.log(new Date().toString())
