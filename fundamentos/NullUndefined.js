let valor // não incializada,foi criado porem nunca foi iniciada
console.log(valor)

valor = null //ausência de valor
console.log(valor)
/* a ausência de valor indica que a variavel foi iniciada, porém nao esta apontando nenhum caminha na memoria , nenhum objeto, ela esta vazia em outras palavras.  Serve tambem quando voce desejar zerar uma variavel , fazer com que ela nao aponte mais para nenhum endereço de referencia, objeto,função e etc */

//console.log(valor.toSring()) , essa sentença vai gerar o erro "Cannot read property 'toSring' of null" , pois é impossivel ler algo que esta vazio, uma dica é sempre deixar um valor padrao para a variavel e evitar esse tipo de erro.

const produto = {}
console.log(produto.preco) /*nesse caso o resultado é Undefined pelo seguinte motivo, a constante produto foi criada e incializada, porem esta vazia, nao Null, porem o precço nao foi definido */

//atribuição dinamica
produto.preco = 3.50
console.log(produto)

produto.preco = undefined//evitar atribuir undefined
//delete.produto.preco prefirivel
console.log(!!produto.preco)// transformando em boolean

