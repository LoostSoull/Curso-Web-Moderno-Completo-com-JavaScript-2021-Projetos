//armazenando funções em uma variavel

const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenando uma função arrow em uma variavel

const soma = (a ,b) =>  {
    return a + b
}
console.log(soma(2,3))

//recurso do arrow function, retorno implicito

const subtracao = (a , b) => a - b //dessa forma nao se faz necessario o vloco de codigo, pois temos uma função de uma unica linha, entao a arrow ja faz seu retorno.
console.log(subtracao(5,5))

//resumindo ainda mais

const imprimir2 = a => console.log(a)
imprimir2('legal!')