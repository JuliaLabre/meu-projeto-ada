// Definindo funçoes
function saudacao(){
    console.log('Hi Lorena')
}

saudacao()

//Enviando parametros

console.clear()

function saudacao(nome,curso='Padrao'){
    console.log(`Hi ${nome}! Bem vinda a seu curso de ${curso}`)
}
saudacao();
saudacao('Julia');
saudacao('Julia','JavaScript');
saudacao('Lorena')


//retorno de função
function soma(numero1,numero2){
    return numero1+numero2
    //o return encerra a função
    // console.log('Soma =', numero1+numero2) aqui ele só imprime e não retorna nem salva
}

const resultado = soma(10,20)

console.log('Soma =', resultado)
console.log('Média =', resultado/2)

console.clear()

function maiorQue50(numero){
    if (numero > 50){
        return true
    }
    return false
}

//prcurar arrow function

