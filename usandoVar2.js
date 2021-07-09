var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora =' , numero)
/**como o VAR é uma variavel com escopo global, ela ignora os blocos que nao são uma função, entao
 * como vemos nesse exemplo, a primeira var "numero" que recebeu o valor 1, foi sob escrita pela segunda, ignorando
 *as chaves
 ** os parametros dentro do console sao separados por virgula**
 */