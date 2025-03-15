function calculadora(operacao, n1, n2){
    if(operacao === 'x' ){
        return n1*n2
    } else if (operacao === '-'){
        return n1-n2
    } else if (operacao === '/'){
        return n1/n2
    } else if (operacao == '+'){
        return n1+n2
    }
}

let calcular = true
let result = 0

while(calcular){
    operacao = prompt('Qual operação deseja fazer ("x" - "-" - "/" - "+")?')

    let n1 = parseFloat(prompt('\nInsira o primeiro numero: '))
    let n2 = parseFloat(prompt('Insira o segundo numero: '))

    if(operacao){
        result = calculadora(operacao,n1,n2)        
        alert(result)
        let historico = result
    }
    
    calcular = parseInt(prompt('Deseja continuar (SIM - 1|NÃO - 0 )? '))

}
console.log('Fim do programa...')