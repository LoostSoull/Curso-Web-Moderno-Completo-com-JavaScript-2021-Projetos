/**em outras linguagens , a variavel var so pode ser vizualizada dentro do mesmo bloco, isso é uma questao de escopo.Em javascript ela pode ser visualizada por todos, desde que ela nao faça parte de um bloco de uma função */

{
     {
          {
               {
                    var sera = 'sera?'
                    console.log(sera)//exemplo de leitura em outras linguagens, onde so pode ser vizualizada no mesmo bloco
                } 
            } 
        } 
    }
    console.log(sera) // exemplo em javascrip, pois ela pode ser vizualizada fora do bloco.


//variavel com var, criada dentro de uma função, so pode ser acessada dentro da função, não mais de forma global como o exemplo acima.
    function teste(){
        var local = 123
        console.log(local)
    }
    
    teste()