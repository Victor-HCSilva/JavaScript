
let linha = 3;  
let coluna = 4; 
const matriz = []; 

for (let i = 0; i < linha; i++) { 
  matriz.push([]);
  for (let j = 0; j < coluna; j++) { 
    matriz[i].push(i * coluna + j +1); 
     
  }
}

console.log("Matriz:");
for (let i = 0; i < linha; i++) {
  let linhaString = "";
  for (let j = 0; j < coluna; j++) {
    linhaString += matriz[i][j] + " "; // Adiciona o valor da célula à string
  }
  console.log(linhaString); // Imprime a linha no console
}


console.log("\nMatriz como um objeto (para comparação):");
console.log(matriz);