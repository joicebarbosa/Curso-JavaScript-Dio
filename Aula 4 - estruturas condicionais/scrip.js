/*var jogador1 = 0;
var jogador2 = 0;
var placar;

//if ternário de uma linha só
jogador1 != -1 && jogador2 != -1? console.log('Os jogadores são válidos') : console.log('Jogadores Invalidos');

//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('jogador1 marcou ponto');
    placar = jogador1 > jogador2;

//usando else if 
}else if (jogador2 > 0 && jogador1 == 0) {
    console.log('jogador2 marcou ponto');
    placar = jogador2 > jogador1

//usando else
  }else {
    console.log('Ninguem marcou ponto')
}

//Switch/case- funciona como estrutura condicional tambem
switch (placar){
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default: console.log('Ninguem ganhou')

}*/

//Laços de repetição - são estrutuas que repetem uma instrução até atingir determinada condição.
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

//for - executa uma instrução ate que ela seja falsa:
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)    
}*/

// for/in - executa uma repetição a apartir de uma propriedade 
// com array
/* for (let i in array) {
    console.log(i);
}

for (i in object) {
    console.log(i)
} */

//for of - funciona como uma repetição a partir de uma valor
/* for (i of array) {
    console.log(i); 
}

for (i of object.propriedade1) {
    console.log(i);

} */

//while - executa instrução "enquanto" determinada condição for verdadeira, a verificação é feita antes da execução ;

var a = 0;
while (a < 10){
    a++;
    console.log(a);
} do {
    a++;
    console.log(a);
    
}while(a < 10)












