//ES2015
const pessoa = {
    nome: 'ana',
    idade: 15,
    endereço: {
        rua: 'rua abc',
        numero: 1000
    }
}

const {idade, nome} = pessoa /*foi criado o operador de destructuring, nesse caso antes de mais nada, abrimos as chaves e dentro dela passamos os valores/identifcadores que seriam desestruturados, e a const pessoa nao recebe eles como parece, essa sintaxe representa: "tire nome e idade da const pessoa"*/

console.log(nome,idade) //essa é uma forma de extrair varios atributos de dentro de um objeto em uma unica linha e atribuir as suas respectivas variaveis.//

//podemos alterar o nome das variáveis

//const{} assim é aberto o operador distructuring

const {nome: n, idade: i} = pessoa /**nessa linha informamos que vamos extrair de pessoa nome e idade igual no exemplo acima, porem a diferença é que com os dois pontos e o n , como por exemplo em nome, informamos que vamos extrair a variavel nome com seu valor e em seguida colocar esse valor em uma variavel chamada n e o mesmo foi feito com idade, podemos utilizar qualquer nome para a variavel, usei n e i por ser um exercicio. */
console.log(n,i)
 
//acessando um dado aninhado

const{endereço: {rua , numero} } = pessoa //precisamos declarar o objeto e depois os atributos que queremos, ele nao vai criar uma variavel por conta dos dois pontos.
console.log(rua , numero)

/*const {endereço} = pessoa
console.log(endereço) pegando so objeto endereço, o resultado vai ser o objeto completo: { rua: 'rua abc', numero: 1000 }
*/