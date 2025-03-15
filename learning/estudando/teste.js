var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, comida) {
        this.nome = nome;
        this.idade = idade;
        this.comida = comida;
    }
    Pessoa.prototype.comer = function () {
        console.log("Eu ".concat(this.nome, " adoro comer ").concat(this.comida));
    };
    return Pessoa;
}());
var carla = new Pessoa('Carla', 10, 'sorvete');
carla.comer();
console.log(typeof carla);
/*
my_array.forEach(element => {
    console.log(`Eu tenho o sentido do(a) ${element}`);
});

//console.log(prompt("Min dê um valor"));
//window.alert("Ola, mundo")
//window.confirm("Confirme o OLA, MUNDO");


*/ 
