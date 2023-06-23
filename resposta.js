var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual a sua Idade?");
var estudando = prompt("Qual linguagem de programação você está estudando?");


alert("Ola "+ nome +",você tem " + idade + " anos e já está aprendendo " + estudando);


var resposta = prompt("Você gosta de estudar " + estudando + "?   " +  " (Coloque 1 para sim e 2 para não)");


if(resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}