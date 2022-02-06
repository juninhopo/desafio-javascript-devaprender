// Criar um metodo para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto 

const filme = {
    titulo: 'Era do gelo',
    ano: 2015,
    diretor: 'Julian',
    personagem: 'Moly',
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj) {
        if (typeof obj[prop] === 'string') {
            console.log(prop,obj[prop]);
        }
    }
}