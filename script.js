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

let numeDeUsuario = "admin";
let senha = 1234;

let insiraNome = prompt('Insira o nome de usuário.');
let insiraSenha = prompt('Insira a senha.');

if (senha == insiraSenha && numeDeUsuario == insiraNome) {
    console.log('Login efetuado com êxito.');
} else {
    console.log('Falha de autentificação.');
}