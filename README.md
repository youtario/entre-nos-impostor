# Entre Nós — Encontre o impostor

Jogo para passar o celular entre amigos e descobrir os impostores.

## Como jogar

1. Adicione de 3 a 20 participantes, escolha um tema e a quantidade de impostores. Pelo menos duas pessoas recebem a palavra do grupo.
2. Escolha **Palavra diferente** ou **Sem palavra**. Os dois modos aceitam vários impostores.
   - **Palavra diferente:** todos os impostores recebem a mesma palavra relacionada à do grupo. Ninguém é avisado de seu papel.
   - **Sem palavra:** os impostores veem apenas seu papel e precisam improvisar.
3. Passe o celular para cada pessoa ver sua palavra ou papel em segredo. O botão de dica explica o significado da palavra.
4. Todos dão pistas sem falar a palavra. Na tela de votação, pegue cartas de perguntas e faça-as a outros participantes.
5. Selecione tantos suspeitos quanto houver impostores. O grupo vence se identificar todos; caso contrário, os impostores vencem.

## Conteúdo

São **18 temas**, com **1.094 palavras distribuídas entre eles**, **567 pares relacionados** e uma dica explicativa para cada termo. Cada tema tem pelo menos 60 palavras.

Cotidiano, Filmes, Naruto, Hunter × Hunter, Bleach, Jujutsu Kaisen, Dragon Ball, Heróis, Memes, Jogos, Ben 10, Demon Slayer, Desenhos Animados, Clash Royale, Pokémon, Animes, Avatar: Aang e Korra e Séries.

O baralho tem **48 perguntas**. Há três cartas por vez; toque em uma para revelar a pergunta ou peça novas cartas. As cartas não se repetem até o baralho acabar e continuam abertas ao selecionar votos.

## Executar

É um aplicativo web estático. Para servir os arquivos localmente:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. Ao publicar em HTTPS, o manifesto e o service worker permitem instalar o jogo na tela inicial do celular e usá-lo offline após o primeiro acesso.
