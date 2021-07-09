let numero =  1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora = ', numero)

/**a var LET tem um escopo diferente, mesmo dentro de blocos que nao sao funções, ela só fica visivel no bloco em questao
 * nesse exemplo, podemos perceber que mesmo declarando o mesmo nome para as duas variaveis, elas nao se sobreescrevem, pois
 * o escopo nao permite
*/

/**
 * 
let numero =  1
{
    let numero2 = 2
    console.log('dentro =', numero)
}
console.log('fora = ', numero)

nesse exemplo acima,como a variavel "numero2" nao existe, seria impresso na tela dentro dos dois consoles o valor da variavel "numero" que esta fora do bloco, pois o escopo de let sempre busca a variavel mais proxima para a leitura, caso ele nao encontre, como nesse exemplo, ele pulou para O GLOBAL.

Variaveis com a palavra reservada LET possui escopo global,de função e de bloco

 */