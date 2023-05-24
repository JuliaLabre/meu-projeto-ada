// Cdo objetoscm JavaScript

let pessoa = {
    nome: 'Julia',
    idade: 25,
    'precisa-de-aspas': 1
}

console.log(pessoa)

console.log(pessoa.nome)
console.log(pessoa['idade'])
console.log(pessoa['precisa-de-aspas'])

//adicionar / alterar / remover

pessoa.altura = 1.64

pessoa['precisa-de-aspas'] = 2

console.log(pessoa)

delete pessoa.altura

console.log(pessoa)

//como percorrer?

for (let chave in pessoa){
    console.log(chave)
}
