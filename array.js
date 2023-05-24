let arr = ["Julia", 1 , 1.77, false];

console.log(arr);

console.log("Primeiro elemento", arr[0]);
console.log("Segundo elemento", arr[1]);
console.log("Terceiro elemento", arr[2]);
console.log("Quarto elemento", arr[3]);

console.log("Tamanho do array", arr.length);

for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

console.clear()


for (let elemento of arr){
    console.log(elemento)
}

for(let indice in arr){
    console.log(indice)
}

for(let indice in arr){
    console.log(indice,arr[indice])
}


