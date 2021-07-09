//criei uma constante com um array
const valores = [7.7, 8.1, 9.0]
console.log(valores)

//inclui o valor 10 na posição 3 do array
valores[3] = 10
console.log(valores)

//com a função push, conseguimos tambem incluir coisas no array, porem não posso escolher , vai direto para a ultima posiçao do indice.
valores.push('lucas')
console.log(valores)


//com o comando length eu posso ver o tamanho do array, no caso o numero de valores armazenados dentro do mesmo.
console.log(valores.length)

//a função pop serve para remover o ultimo item da lista do array e retorna seu valor.
console.log(valores.pop())

// o metedo delete, voce pode escolher qual indice deseja excluir 
delete valores[2]
console.log(valores)

//no javascript o array é considerado um objeto
console.log(typeof valores)