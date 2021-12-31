var jogador1 = 1;
var jogador2 = 1;
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

//paramos em 7:42min - USANDO SWITCH/CASE - switch case
