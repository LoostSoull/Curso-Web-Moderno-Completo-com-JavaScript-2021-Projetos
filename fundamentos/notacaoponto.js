console.log(Math.ceil(6.1)) //arredondamento para cima com o notação .floor, ele arredonda pra baixo usando o object Math

const obj1 = {}
obj1.nome = 'lucas'
console.log(obj1.nome)// com a notação ponto, criei dinâmicamente a chave "nome" dentro do objeto e ja inclui o seu valor "lucas" , tambem pude acessar o valor diretamente no console.log

function Obj(nome){
    this.nome = nome
}
 const obj2 = new Obj('luiz')
 console.log(obj2)

 //estudar mais sobre o this..