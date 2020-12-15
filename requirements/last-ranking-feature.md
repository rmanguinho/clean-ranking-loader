Vamos desenvolver uma nova rota na API do jogo Realm Defense.
É um jogo de Tower Defense com heróis.
Todos os jogadores podem participar de um torneio diário que acontece de 00:00 às 21:59 (UTC-0).
De 00:00 às 22:00 os jogadores podem conferir o resultado do último torneio.
De 22:00 às 23:59 essa API não deve retornar nenhum dado (período de suspense antes de anunciar os vencedores).
Temos duas telas onde essa API pode ser usada: uma é uma tela com um resumo rápidodo ranking onde apenas exibimos o nome dos jogadores, os nomes dos heróis que eles usaram no torneio e sua pontuação final.
A outra tela é um pouco mais detalhada onde mostramos o nome do usuário e sua nacionalidade, os nomes dos heróis e seus níveis, a pontuação final e a data/hora que o jogador atingiu aquela pontuação.