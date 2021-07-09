for(var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i = ', i)
/**nesse exemplo criamos um laço de reptição simples, no qual a condição era que enquanto a variavel "i" fosse menor que 1p, a reptição iria ocorrer sempre incrementando em 1 , porem 
 * como var nao tem escopo de bloco, ela pode ser vizualizada tamnbem fora do bloco, como podemos ver na declaração seguinte, o valor de "i" se tornou 10 porque seria o resultado fora do laço e fora do bloco, o resultado que fez a condição chegar ao fim, foi impresso fora do bloco.
 */