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
    var n1 = Number(prompt(('Insira o 1° numero')));
    var n2 = Number(prompt('Insira o 2° numero'));
    if (operator === 'x' || operator == '*') {
        calculator.multiplication(n1, n2);
    }
    else if (operator === '/') {
        calculator.division(n1, n2);
    }
    else if (operator === '-') {
        calculator.subtracion(n1, n2);
    }
    else if (operator === '+') {
        calculator.sum(n1, n2);
    }
    calculate = Number(prompt('Quer continuar (sim 1, Não 0)?'));
    if (calculate === 1) {
        break;
    }
}
