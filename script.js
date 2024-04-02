//EXERCÍCIO 1

//VARIÁVEL COM VALOR UNDEFINED
//let var1 = undefined;
//console.log(var1);

//VARIÁVEL COM VALOR VAZIO
//let var2 = null;
//console.log(var2);

//VARIÁVEL COM VALOR
//let var3 = 100;
//console.log(var3);

//EXERCÍCIO 2

//let num1 = 100;
//let num2 = 5;

//USANDO O OPERADOR !=
//console.log(num1 != num2);

//USANDO O OPERADOR ==
//console.log(num1 == num2);

//USANDO O OPERADOR >=
//console.log(num1 >= num2);

//EXERCÍCIO 3
 
//let peso = parseFloat(prompt('Digite seu peso em quilogramas.'));
//let altura = parseFloat(prompt('Digite sua altura em metros.'));

//let IMC = peso / (altura * altura);
   
//if (IMC < 18.5) {
    //console.log('Você está abaixo do peso.');
//} else if (IMC >= 18.5 && IMC <= 24.9) {
    //console.log('Você está no peso ideal.');
//} else {
    //console.log('Você está acima do peso.');
//}

//EXERCÍCIO 4

//let idade = parseInt(prompt("Qual a sua idade? "));

//if (idade <= 12) {
    //console.log("Você é uma criança.");
//} else if (idade >= 13 && idade <= 18) {
    //console.log("Você é um adolescente.");
//} else if (idade >= 19 && idade <= 60) {
    //console.log("Você é um adulto.");
//} else {
    //console.log("Você é um idoso.");
//}

//EXERCÍCIO 5

//let numeDeUsuario = "admin";
//let senha = 1234;

//let insiraNome = prompt('Insira o nome de usuário.');
//let insiraSenha = prompt('Insira a senha.');

//if (senha == insiraSenha && numeDeUsuario == insiraNome) {
    //console.log('Login efetuado com êxito.');
//} else {
    //console.log('Falha de autentificação.');
//}

//EXERCÍCIO 6

//let nota1 = parseFloat(prompt("Insira sua primeira nota."));
//let nota2 = parseFloat(prompt("Insira sua segunda nota."));
//let nota3 = parseFloat(prompt("Insira sua terceira nota."));
//let nota4 = parseFloat(prompt("Insira sua quarta nota."));
//let nota5 = parseFloat(prompt("Insira sua quinta nota."));
//let nota6 = parseFloat(prompt("Insira sua sexta nota."));
//let nota7 = parseFloat(prompt("Insira sua sétima nota."));
//let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7) / 7;

//if (media >= 6) {
    //console.log("Você foi aprovado.");
//} else {
    //console.log("Você foi reprovado.");
//}

//EXERCÍCIO 7

//document.addEventListener('DOMContentLoaded', function() {
    //var perfil = document.getElementById('perfil');
    //var nome = 'Nicolle';
    //var idade = '21';
    //var curso = 'Engenharia de Software';
    //var ano = '1º Ano';

    //perfil.innerHTML = '<p>Nome: ' + nome + '</p>';
    //perfil.innerHTML += '<p>Idade: ' + idade + '</p>';
    //perfil.innerHTML += '<p>Curso: ' + curso + '</p>';
    //perfil.innerHTML += '<p>Ano: ' + ano + '</p>';
//});

//EXERCÍCIO 8

//let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";
    
//Buscando a primeira posição de “em”
//let posicaoEm = texto.indexOf('em');
//console.log('A primeira posição de "em" é: ' + posicaoEm);
    
//Buscando a última posição de “ia”
//let posicaoIa = texto.lastIndexOf('ia');
//console.log('A última posição de "ia" é: ' + posicaoIa);
    
//Buscando a palavra “ciência”
//let posicaoCiencia = texto.indexOf('ciência');
//console.log('A posição da palavra "ciência" é: ' + posicaoCiencia);
    
//Buscando a palavra “métodos”
//let posicaoMetodos = texto.indexOf('métodos');
//console.log('A posição da palavra "métodos" é: ' + posicaoMetodos);

//EXERCÍCIO 9

    var valorString = '123.45';
    var valorFloat = parseFloat(valorString);
    
    console.log('O tipo da variável agora é: ' + typeof valorFloat);