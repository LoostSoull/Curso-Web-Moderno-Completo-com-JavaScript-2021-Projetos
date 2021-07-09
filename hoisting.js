console.log('a =' , a)
var a = 2
console.log('a =', a)


/**conceito de hoisting funciona da seguinte forma, a variavel foi declarada na linha 2, porem ela foi içada para a linha 1, sendo assim, validando a primeira informação que a variavel existe, porem a atribuição de valor veio na declaração da mesma na linha 2 e o valor so foi passado para a linha 3, por isso a linha 1 a variavel existe , porem seu valor é indefinido e a linha 3 ja consta o valor, trazendo o resultado:
 * a = undefined
   a = 2
  */