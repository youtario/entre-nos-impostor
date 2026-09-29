# Entre Nós — Encontre o impostor

Jogo para passar o celular entre amigos e descobrir quem é o impostor.

## Como jogar

1. Adicione de 3 a 20 participantes e escolha um tema.
2. Escolha **Palavra diferente** (um participante recebe uma palavra relacionada) ou **Sem palavra** (escolha quantos impostores não recebem palavra).
3. Passe o celular para cada pessoa ver sua palavra ou papel em segredo. O botão de dica explica o significado da palavra.
4. Todos dão pistas e votam em quem parece estar improvisando.

O jogo inclui 17 temas, entre cotidiano, filmes, jogos, memes, animes, heróis, Clash Royale, Pokémon e Avatar.

## Executar

É um aplicativo web estático. Para servir os arquivos localmente:

```sh
python -m http.server 8000
```

Abra `http://localhost:8000`. Ao publicar em HTTPS, o manifesto e o service worker permitem instalar o jogo na tela inicial do celular e usá-lo offline após o primeiro acesso.
