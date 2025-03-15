class SimpleCalculator{
    operator: string;

    constructor(operator: string){
        this.operator = operator;
    }
    sum(n1: number, n2: number): number{//soma
        return n1 + n2;
    }
    division(n1: number, n2: number):number {//soma
        return n1 / n2;
    }
    subtracion(n1: number, n2: number): number{//soma
        return n1 - n2;
    }
    multiplication(n1: number, n2: number): number{//soma
        return n1 * n2;
    }
}

const calculator: SimpleCalculator = new SimpleCalculator('');

let calculate: number = 1;

while(calculate === 1){
    const operator: string = prompt('Insira a operação: ')

    try{
        let n1: number = Number(prompt(('Insira o 1° numero')));
        let n2: number = Number(prompt('Insira o 2° numero'));

        if(operator === 'x' || operator == '*'){
            console.log(calculator.multiplication(n1,n2));
        }
        else if (operator === '/'){
            console.log(calculator.division(n1,n2));
            
        }
        else if (operator === '-'){
            console.log(calculator.subtracion(n1,n2));
        }
        else if (operator === '+'){
            console.log(calculator.sum(n1,n2));
            
        }
        else{
            console.log('Operador inválido')        
        }
        
        calculate = Number(prompt('Quer continuar (sim 1, Não 0)?'));

        if(calculate === 0){ 
            break 
        }
    }
    catch(error){
        console.log("Você digitou algo invalido")
        console.log(error)
    }
    
    
}   
    