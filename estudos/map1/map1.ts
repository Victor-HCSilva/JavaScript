const label = document.querySelector("p")

class Aluno {
    nome: string;
    nota: Array<number>;
    status: string;

    constructor(nome:string, nota: Array<number>, status: string){
        this.nome = nome
        this.nota = nota
        this.status = status
    }
}


//inserir notas e depoi usar o map para uma çlisatr de alunos e depois so ver o resulktado dos status
function creat(quantidadeAlunos: number): Array<Aluno>{
    let alunos: Array<Aluno> = [];
    let aluno: Aluno;
    let nome: string;
    let notas: Array<number> = [];
    
    for(let i = 0; i < quantidadeAlunos; i++ ){
        nome = prompt("Insira o nome do aluno(a):")

        for(let j = 0; j < 4; j++){
            notas[i] = parseFloat(prompt(`Insira a ${j+1} nota`))
        }
        aluno = new Aluno(nome, notas, "")
        alunos.push(aluno)
    }
    
    return alunos
}

function result(aluno: Aluno): void{
    let soma: number = 0;
    let media: number;
    let status: string;

    for(let i: number = 0; i < aluno.nota.length; i++){
        soma+= aluno.nota[i];
    }

    media = soma/aluno.nota.length

    if(media < 3){
       status = "Reprovação" ;
    } else if(media >=3 && media < 4){
        status = "Recuperação";
    } else if(media >=4){
        status = "Aprovação"
    }
    aluno.status = status
}

let a: Array<Aluno> = creat(2)

let alunos: Array<void> = a.map((aluno) => result(aluno))

for(let i = 0; i < a.length; i++){
    label.innerHTML = `
    ${a[i].nome} - ${a[i].status}
    `
}












