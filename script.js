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
 
let peso = parseFloat(prompt('Digite seu peso em quilogramas.'));
let altura = parseFloat(prompt('Digite sua altura em metros.'));

let IMC = peso / (altura * altura);
   
if (IMC < 18.5) {
    console.log('Você está abaixo do peso.');
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log('Você está no peso ideal.');
} else {
    console.log('Você está acima do peso.');
}