let arr1 = [30,12,45,34,29];
let arr2 =[];
//fatiamento: slice

// ele não pega o segundo, seria tipo um entre
console.log(arr1.slice(0,1))

console.log(arr1.slice(0,2))

//ele pega até o item numero 2, ou seja tres elemenros
console.log(arr1.slice(2))

console.clear()

//Adicionando elementos: push | unshift

console.log('Antes de adicionar:', arr2);

arr2.push(100)

console.log('Depois de adicionar:', arr2);

arr2.push(10,20,30,'infinito')

console.log('Depois de adicionar varios:', arr2);

//push joga sempre os elementos ao final do array

//incluir no inicio do array usa-se unshifth

arr2.unshift(1);
console.log('Depois de adicionar com unshift:', arr2);

//remoção de elementos
arr2.pop()

//por padrao ele remove o ultimo elemento
console.log('Depois de remover com pop:', arr2);

//ele retorna um elemento, então pode ser adicionado a uma variavel para conseguir visualizar

const elementoRemovido = arr2.pop()

console.log('Depois de remover com pop:', arr2);
console.log('o elemento removido foi:', elementoRemovido);


//shift remove o primeiro

arr2.shift()

console.log('Depois de remover com shift:', arr2);


console.clear()

//Concatenar arrays : concat

arr1.concat(arr2)

console.log(arr1.concat(arr2))

console.log(arr1)

arr2.concat(arr1)

console.log(arr2.concat(arr1))
console.log(arr2)


//pelo visto ele não junta tudo ele não explicou



console.clear()

//Buscando um elemento: indexOf | lastIndexOf

console.log(arr1);

//indice do primeiro elemento que aparecer, mesm se for repetido
let indiceDeElemento34 = arr1.indexOf(34);

console.log(indiceDeElemento34)

//Se não tem: retorna -1
let indiceDeElemento = arr1.indexOf(35);
console.log(indiceDeElemento)


//ultimo elemento com esse valor

arr1.push(34);

console.log(arr1)

console.log(arr1.lastIndexOf(34))


//Descobrir a existencia de um elemento: includes

console.clear()

console.log(arr1);

console.log(arr1.includes(10));

//Invertenco arrays: reverse

const arr1Invertido = arr1.reverse();

console.log(arr1Invertido);

//Não funciona = precisa armazenar primeiro
console.log(arr1.reverse())

console.clear()

var array = [2, 5, 9];
console.log(array.indexOf(2));
console.log(array.indexOf(7));
console.log(array.indexOf(9, 2));

for (let i = 0; i <= 9; i+=2) {
    console.log(i);
}

console.clear()

function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));
















