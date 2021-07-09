console.log(typeof Object) //o tipo de um Object é uma função
console.log(typeof new Object()) /* instanciando a "função" object, com a palavra reservada new, ele se torna um objeto.
agora temos um objeto criado apartir de uma função, podemos tambem omitir os parenteses console.log(typeof new Object)*/

/**podemos tambem instanciar uma função */

const cliente = function() {}
console.log(typeof cliente) //ate aqui ela ainda é do tipo função
console.log(typeof new cliente)//apos ser instanciada ela se transformou em um objeto

//trabalhando com classes//

class produto {} //ES 2015 (ES6) *padrão EcmaScript
console.log(typeof produto)
console.log(typeof new produto)
/**um produto é uma sintaxe suggar, uma forma diferente para criar uma função , digamos que um atalho novo */

/**podemos criar multiplas intancias, apartir da API padrao do javascript,de funções que eu criei ou apartir de uma classe */