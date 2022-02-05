//Escreva uma funcao que usa dois numeros e retorna o maior deles. 

let valorMaior = max(25,25)
console.log(valorMaior);

// //resolucao mais longa
// function max(numero1, numero2){
//     if (numero1 > numero2) {
//         return numero1;
//     } else {
//         return numero2;
//     }
// }

//resolucao mais curta
function max(numero1,numero2){
    return numero1 > numero2 ? numero1 : numero2;
}