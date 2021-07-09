/*aqui foi criado um objeto vazio de forma literal e foi adicionado de forma dinamica os seus pares, sempre com chaves/identificadores e seus valores.
 as chaves nao podem se reptir jamais no codigo, elas devem ser unicas!*/
const prod1 = {};
prod1.nome = 'celular ultra mega';
prod1.valor = 1000.00
prod1['desconto legal'] = 0.40 //podemos colocar chaves com espaço, porem devemos evitar, não é legal... exemplo somente para aprendizado.
console.log(prod1)

const prod2 = {
    nome: 'camisa polo',    
    preço: 79.90
}
console.log(prod2)