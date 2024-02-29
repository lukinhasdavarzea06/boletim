function mostrarAba(alunoNumero) {
    // Ocultar todas as abas
    var abas = document.getElementsByClassName("aba");
    for (var i = 0; i < abas.length; i++) {
        abas[i].style.display = "none";
    }

    // Exibir aba selecionada
    document.getElementById("aluno" + alunoNumero).style.display = "block";
}

function calcularBoletim() {
// Iniciar váriavel para depois calcular a média da turma
var mfTurma = 0;

for (var i = 1; i <= 5; i++) {
// Obter os inputs
var alunoNome = document.getElementById("alunoNome" + i).value;
var nota1 = parseFloat(document.getElementById("nota1" + i).value);
var nota2 = parseFloat(document.getElementById("nota2" + i).value);
var nota3 = parseFloat(document.getElementById("nota3" + i).value);
var nota4 = parseFloat(document.getElementById("nota4" + i).value);

// Calcular média final
var mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

// Atualizar a média da turma
mfTurma += mediaFinal;

// Exibir informação para cada aluno
var resultado = "Nome do aluno: " + alunoNome + "<br>" +
         "Notas:<br>1º Bimestre - " + nota1 + "<br>2º Bimestre - " + nota2 + "<br>3º Bimestre - " + nota3 + "<br>4º Bimestre - " + nota4 + "<br>" +
         "Média Final: " + mediaFinal.toFixed(2);

// Aplicar background color de acordo com a situação do aluno
var elementId = "resultado" + i;
if (mediaFinal >= 70) {
resultado += "<br>Situação: Aprovado";
document.getElementById(elementId).classList.add("aprovado");
} else if (mediaFinal >= 50 && mediaFinal < 70) {
resultado += "<br>Situação: Recuperação";
document.getElementById(elementId).classList.add("recuperacao");
} else {
resultado += "<br>Situação: Reprovado";
document.getElementById(elementId).classList.add("reprovado");
}

document.getElementById(elementId).innerHTML = resultado;
}

// Calcular média da turma
var mediaTurma = mfTurma / 5;

// Exibir média da turma
document.getElementById("mediaTurma").innerHTML = "Média da turma: " + mediaTurma.toFixed(2);


    // Exibir os nomes dos alunos abaixo da média da turma
    var alunosAbaixoMedia = [];
    for (var i = 1; i <= 5; i++) {
        var alunoNome = document.getElementById("alunoNome" + i).value;
        var mediaFinal = (parseFloat(document.getElementById("nota1" + i).value) +
                          parseFloat(document.getElementById("nota2" + i).value) +
                          parseFloat(document.getElementById("nota3" + i).value) +
                          parseFloat(document.getElementById("nota4" + i).value)) / 4;

        if (mediaFinal < mediaTurma) {
            alunosAbaixoMedia.push(alunoNome);
        }
    }

    document.getElementById("alunosAbaixoMedia").innerHTML = "Alunos abaixo da média: " + alunosAbaixoMedia.join(", ");
}

// Iniciar com a primeira aba aberta
mostrarAba(1);