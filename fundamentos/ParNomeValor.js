const saudacao = 'ola' // contexto léxico 1

function  exec(){
    const saudacao = 'oba' //contexto léxico 2
    return saudacao
}

console.log(exec())
console.log(saudacao)

//ojetos sao grupos aninhados de chaves/valores

const cliente = {
    nome: 'lucas',
    idade: 24,
    endereço: {
        rua: 'rua 2',
        numero: 3,
        casa: 'amarela'}
    }

    console.log(cliente)