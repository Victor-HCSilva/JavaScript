var label = document.querySelector("p");
var Aluno = /** @class */ (function () {
    function Aluno(nome, nota, status) {
        this.nome = nome;
        this.nota = nota;
        this.status = status;
    }
    return Aluno;
}());
//inserir notas e depoi usar o map para uma çlisatr de alunos e depois so ver o resulktado dos status
function creat(quantidadeAlunos) {
    var alunos = [];
    var aluno;
    var nome;
    var notas = [];
    for (var i = 0; i < quantidadeAlunos; i++) {
        nome = prompt("Insira o nome do aluno(a):");
        for (var j = 0; j < 4; j++) {
            notas[i] = parseFloat(prompt("Insira a ".concat(j + 1, " nota")));
        }
        aluno = new Aluno(nome, notas, "");
        alunos.push(aluno);
    }
    return alunos;
}
function result(aluno) {
    var soma = 0;
    var media;
    var status;
    for (var i = 0; i < aluno.nota.length; i++) {
        soma += aluno.nota[i];
    }
    media = soma / aluno.nota.length;
    if (media < 3) {
        status = "Reprovação";
    }
    else if (media >= 3 && media < 4) {
        status = "Recuperação";
    }
    else if (media >= 4) {
        status = "Aprovação";
    }
    aluno.status = status;
}
var a = creat(2);
var alunos = a.map(function (aluno) { return result(aluno); });
for (var i = 0; i < a.length; i++) {
    label.innerHTML = "\n    ".concat(a[i].nome, " - ").concat(a[i].status, "\n    ");
}
