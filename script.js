console.log('Hello World!!');

// Variaveis

let nula = null;

let booleano = true;

var variavelAntiga = "Não vale a pena usar";

const meuNome = "Julia Labre";

console.log(meuNome, typeof meuNome); //typeof mostra o tipo string,bool...

// Operadores

let number = 1;

console.log(number);
/*
Multiplicação *
divisão /
resto da divisão %
Exponenciação **
soma +
subtração -


Precedência de operadores(ordem de execução, multiplicação antes de soma, essas coisas)


*/
number++;

/*
Biblioteca Math
já vem no VS
*/

let math = Math.PI ;//valor de PI

console.log(math);
math = Math.sqrt(9); // calcula raiz quadrada

console.log(math);


// operadores booleanos- condicionais
let primeiro = 10;
let segundo = 20;
const idade = 25;
console.clear()
console.log('Igual',primeiro == segundo);
console.log('Maior',primeiro > segundo);
console.log('Menor',primeiro < segundo);
console.log('Igual',primeiro == "10");
console.log('Identico',primeiro ==="10");
console.log('Identico',primeiro === segundo);
console.log('diferente',primeiro != segundo);
console.log('Diferente',primeiro !== segundo);


/*
&& e
|| or
! not
*/

//Coercão de tipos
console.log(idade, typeof idade)
const numeroEmString = String(idade);

console.log(numeroEmString, typeof numeroEmString)

console.clear()
console.log(Number('123'));
console.log(Number('123.12'));
console.log(parseFloat('123.3'));
console.log(parseInt('123.2'));
console.log(Boolean(0));

console.clear()

console.log("10" + 1 );
console.log("10" - 1 );
console.log("10" * 3);

console.log(10 - "as" );

console.clear()
let n =1 + "1";
console.log(n);
n = n-1;

console.log(n);

console.log(2+3+4+"5");
console.log("95");
console.log("5" + 2 + 3 + 4)
console.log("59") // errei, junta tudo como texto
console.log("10" - "4" - "3" - 2 + "5")
console.log("15")

console.clear();








