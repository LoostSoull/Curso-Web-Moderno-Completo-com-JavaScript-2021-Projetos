function rand({mim= 100,max= 1000}){
    const num = Math.random() * (max-mim) - mim
    return Math.floor(num)

}

/**poderiamos tambem criar um objeto
 * const obj = { mim: 0 ,  max: 100}
 */

console.log(rand({mim: 0 , max: 100})) /**essa foi uma forma reduzida de utilizar no parametro um operador destructuring como paramentro e no momento de chamar a função , utilizar um objeto, o operador destructuring foi atribuido com valores padroes, porem ele sempre representa o objeto, nesse caso so utiliza seus valores padroes caso o objeto nao seja declarado */

/**poderiamos declarar somente o mim ou somente o max, o parametro que nao foi indicado seria utilizado sua forma padrao, que ja foi definida  */

/**podemos tambem passar um objeto vazio:
 * console.log(rand({}))
 * nesse caso ele assumiria o valor padrao dos dois paramentros
 */

