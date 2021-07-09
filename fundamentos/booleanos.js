let isAtivo =  false
console.log(isAtivo)
isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
/*transformamos o numero 1 em um valor boleano, com o operador logico "!"(not), no caso o valor 1 por padrao vem com verdadeiro, utilizando uma vez o operador not, ele vira um valor nao verdadeiro, em poucas palavras nao verdadeiro = falso, so utilizarmor o operdor not duas vezes a segunda negação cancela a primeira, entao fica: !(nao)true = false !(nao)false = true (!! true), no caso ele passa de um nao verdadeiro para algo que seria nao falso, em poucas palavras nao falso = verdadeiro */

console.log('os verdadeiros')//resultados que sempre retornam verdadeiros em situações nas quais nao sao resultados de true or false

console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo=1))
console.log(!!(isAtivo = true))

console.log('os falsos')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


let nome = ''
console.log(nome || 'desconhecido')
/* nesse exemplo , foi apresentado como usar valores padroes utilziando de true ou false, uma string vazia como podemos ver, sem espaços ou textos ela retorna como falso, entao colocamos no console para apresentar a variavel nome ou a string "desconhecido, como a string permaneceu vazia, retornou falsa e o javascript por padrao retornou o segundo resultado, seguindo o operador logico "ou* (||) , SE VOCE QUISER TESTAR, PREENCHA A VARIAVEL NOME COM O SEU NOME!! */ 