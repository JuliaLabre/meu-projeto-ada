const input = require("readline-sync");

const numeroSorteado = 5;

let numero = Number(input.question("Qual numero voce escolhe ?"));

console.log(numero, typeof numero);


while(numero !== numeroSorteado) {
    console.log("voce errou, tente de novo!")
    numero = Number(input.question("Qual numero voce escolhe ?"));
}
console.log("Voce acertou!")

let number = 1;

while (number < 10){
    console.log(number)
    number++
}