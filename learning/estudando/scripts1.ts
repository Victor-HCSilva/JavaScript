class Pessoa {
    nome:string;
    idade:number
    comida: string

    constructor(nome: string, idade: number, comida: string){
        this.nome = nome;
        this.idade = idade;
        this.comida = comida;
    }
    comer(){
        console.log(`Eu ${this.nome} adoro comer ${this.comida}`)
    }   
}


const carla = new Pessoa('Carla',10,'sorvete');
carla.comer()

console.log(typeof carla)
/*
my_array.forEach(element => {
    console.log(`Eu tenho o sentido do(a) ${element}`);
});

//console.log(prompt("Min dê um valor"));
//window.alert("Ola, mundo")
//window.confirm("Confirme o OLA, MUNDO");


*/