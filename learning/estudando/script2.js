var SimpleCalculator = /** @class */ (function () {
    function SimpleCalculator(operator) {
        this.operator = operator;
    }
    SimpleCalculator.prototype.sum = function (n1, n2) {
        return n1 + n2;
    };
    SimpleCalculator.prototype.division = function (n1, n2) {
        return n1 / n2;
    };
    SimpleCalculator.prototype.subtracion = function (n1, n2) {
        return n1 - n2;
    };
    SimpleCalculator.prototype.multiplication = function (n1, n2) {
        return n1 * n2;
    };
    return SimpleCalculator;
}());
var calculator = new SimpleCalculator('');
var calculate = 1;
while (calculate === 1) {
    var operator = prompt('Insira a operação: ');
    try {
        var n1 = Number(prompt(('Insira o 1° numero')));
        var n2 = Number(prompt('Insira o 2° numero'));
        if (operator === 'x' || operator == '*') {
            console.log(calculator.multiplication(n1, n2));
        }
        else if (operator === '/') {
            console.log(calculator.division(n1, n2));
        }
        else if (operator === '-') {
            console.log(calculator.subtracion(n1, n2));
        }
        else if (operator === '+') {
            console.log(calculator.sum(n1, n2));
        }
        else {
            console.log('Operador inválido');
        }
        calculate = Number(prompt('Quer continuar (sim 1, Não 0)?'));
        if (calculate === 0) {
            break;
        }
    }
    catch (error) {
        console.log("Você digitou algo invalido");
        console.log(error);
    }
}
