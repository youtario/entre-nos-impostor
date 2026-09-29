// Explicações editoriais organizadas por categoria; não revelam a palavra do outro papel.
window.HINTS = {};
function addHints(category, rows) {
  window.HINTS[category] = Object.fromEntries(rows.trim().split('\n').map(row => {
    const split = row.indexOf('|');
    return [row.slice(0, split), row.slice(split + 1)];
  }));
}
addHints('cotidiano', `
Borracha|Objeto usado para apagar marcas de grafite no papel. É comum no material escolar.
Apontador|Peça com uma lâmina que retira madeira do lápis e deixa a ponta de grafite pronta para escrever.
Caneta|Instrumento que usa tinta para escrever ou desenhar, geralmente sobre papel.
Lápis|Instrumento com uma mina de grafite, normalmente envolvida em madeira, usado para escrever e desenhar.
Abajur|Lâmpada com uma cobertura que suaviza a luz, geralmente colocada sobre uma mesa ou ao lado da cama.
Luminária|Peça que abriga uma fonte de luz e ajuda a iluminar um ambiente ou direcionar a iluminação para uma tarefa.
Travesseiro|Peça macia usada principalmente para apoiar a cabeça e o pescoço durante o sono.
Almofada|Peça acolchoada usada para decorar ou dar apoio e conforto ao sentar ou se encostar.
Garfo|Talher com dentes que servem para espetar e segurar alimentos durante a refeição.
Colher|Talher com uma parte côncava, usado para levar alimentos líquidos ou pastosos à boca e para misturar ingredientes.
Prato|Recipiente relativamente raso usado para servir e consumir alimentos.
Tigela|Recipiente fundo e aberto, usado para servir alimentos, como sopa e cereal, ou misturar ingredientes.
Copo|Recipiente usado para beber líquidos, geralmente sem alça.
Caneca|Recipiente com alça, usado para beber, especialmente bebidas quentes como café e chá.
Sofá|Móvel estofado feito para acomodar várias pessoas sentadas.
Poltrona|Assento individual, geralmente estofado e com encosto e braços, usado para descansar.
Cama|Móvel destinado a dormir e descansar, normalmente formado por uma estrutura que sustenta o colchão.
Colchão|Peça acolchoada sobre a qual a pessoa se deita. Pode ter espuma, molas ou outros materiais de suporte.
Geladeira|Eletrodoméstico que mantém alimentos e bebidas refrigerados para ajudar na conservação.
Freezer|Equipamento ou compartimento que mantém temperaturas abaixo de zero para congelar e conservar alimentos.
Fogão|Aparelho com queimadores ou superfícies de aquecimento para cozinhar alimentos em panelas.
Forno|Compartimento fechado que aquece alimentos ao redor, usado para assar pães, carnes, bolos e outras receitas.
Vassoura|Utensílio com cabo e cerdas usado para varrer poeira e resíduos do chão.
Rodo|Utensílio com uma faixa de borracha usado para puxar água de pisos ou vidros.
Sabonete|Produto de higiene, sólido ou líquido, usado com água para limpar a pele.
Shampoo|Produto usado para lavar o cabelo e o couro cabeludo, removendo sujeira e excesso de oleosidade.
Toalha|Peça de tecido absorvente usada para secar o corpo, as mãos ou outras superfícies.
Roupão|Roupa ampla, normalmente com faixa na cintura, usada para conforto, sobretudo após o banho.
Caderno|Conjunto de folhas encadernadas usado para anotações, exercícios e desenhos.
Agenda|Caderno ou ferramenta organizada por datas para registrar compromissos e planejar tarefas.
Mochila|Bolsa com alças para ser carregada nas costas e transportar materiais ou objetos pessoais.
Bolsa|Acessório usado para transportar objetos pessoais, carregado na mão, no braço ou no ombro.
Relógio|Instrumento que indica as horas. Pode ser de pulso, de parede ou de mesa.
Despertador|Relógio ou função que emite um aviso no horário programado, frequentemente para acordar alguém.
Chave|Objeto que encaixa em uma fechadura e permite trancar ou destrancar seu mecanismo.
Cadeado|Dispositivo portátil de segurança com uma haste que fecha, aberto por chave, combinação ou outro mecanismo.
Chinelo|Calçado aberto e fácil de colocar, geralmente sem fixação atrás do calcanhar.
Sandália|Calçado aberto preso ao pé por tiras, podendo ter uma tira atrás do calcanhar.
Espelho|Superfície que reflete a luz e permite observar a própria imagem ou o que está à sua frente.
Janela|Abertura em uma parede, normalmente com uma estrutura móvel e vidro, que permite entrada de luz e ventilação.
`);
addHints('filmes', `
Titanic|Romance e drama em que Jack e Rose se conhecem durante a viagem do navio Titanic, que sofre um naufrágio.
Avatar|Ficção científica ambientada em Pandora, onde humanos entram em conflito com os Na’vi. Jake Sully usa um corpo avatar.
Shrek|Animação sobre um ogro que embarca numa aventura com um burro falante e conhece a princesa Fiona.
Monstros S.A.|Animação sobre uma fábrica que coleta energia dos gritos das crianças. Sulley e Mike conhecem a pequena Boo.
Procurando Nemo|Animação em que o peixe-palhaço Marlin atravessa o oceano para encontrar seu filho, levado por um mergulhador.
Procurando Dory|Animação em que Dory, uma peixe com dificuldades de memória recente, tenta reencontrar a família.
Toy Story|Série de animações sobre brinquedos que ganham vida quando os humanos não estão olhando, incluindo Woody e Buzz Lightyear.
Os Incríveis|Animação sobre uma família de super-heróis que tenta conciliar a vida cotidiana com o combate ao crime.
Frozen|Animação sobre as irmãs Anna e Elsa, princesa e rainha de Arendelle. Elsa tem poderes ligados ao gelo.
Moana|Animação sobre uma jovem navegadora que parte pelo oceano para salvar seu povo, acompanhada pelo semideus Maui.
O Rei Leão|Animação sobre Simba, um jovem leão que precisa descobrir seu lugar no ciclo da vida e enfrentar o passado.
Madagascar|Animação em que animais de um zoológico de Nova York vão parar numa ilha e precisam se adaptar à vida selvagem.
Harry Potter|Saga de fantasia sobre um jovem bruxo que estuda em Hogwarts e enfrenta o bruxo das trevas Voldemort.
Animais Fantásticos|Saga do universo bruxo centrada nas aventuras de Newt Scamander, estudioso de criaturas mágicas, e no conflito com Grindelwald.
Star Wars|Saga espacial sobre conflitos na galáxia, com Jedi, Sith, sabres de luz e uma energia chamada Força.
Star Trek|Franquia de ficção científica sobre exploração espacial, contato com civilizações e as missões de tripulações da Frota Estelar.
Matrix|Ficção científica em que Neo descobre que a realidade conhecida pelos humanos é uma simulação controlada por máquinas.
A Origem|Suspense de ficção científica sobre especialistas que entram nos sonhos para roubar informações ou implantar uma ideia.
Jurassic Park|Aventura sobre um parque que recria dinossauros por engenharia genética e perde o controle das criaturas.
King Kong|História de um gorila gigantesco, associado à Ilha da Caveira, que é levado ao encontro do mundo humano.
Velozes e Furiosos|Franquia de ação com corridas, carros, assaltos e missões perigosas, centrada no grupo de Dominic Toretto.
Need for Speed|Filme de ação inspirado nos jogos de corrida, sobre um piloto que participa de uma competição após sair da prisão.
Invocação do Mal|Série de terror que dramatiza casos de assombrações investigados pelo casal Ed e Lorraine Warren.
Atividade Paranormal|Franquia de terror que usa a aparência de gravações domésticas para mostrar fenômenos sobrenaturais dentro de casas.
It: A Coisa|Terror baseado na obra de Stephen King, sobre uma entidade que explora medos e costuma aparecer como o palhaço Pennywise.
O Exorcista|Filme de terror sobre uma menina possuída por uma entidade e a tentativa de expulsá-la por meio de um exorcismo.
Homem-Aranha|Filmes sobre o herói que usa teias, escala paredes e combate o crime. Peter Parker é sua identidade mais conhecida.
Batman|Filmes sobre o vigilante de Gotham City que usa investigação, treinamento e tecnologia para combater criminosos.
Vingadores|Filmes da Marvel que reúnem heróis como Homem de Ferro, Thor e Capitão América contra ameaças que exigem uma equipe.
Liga da Justiça|Filmes da DC sobre a união de heróis como Batman, Mulher-Maravilha e Superman para enfrentar grandes ameaças.
Rocky|Drama esportivo sobre Rocky Balboa, um boxeador da Filadélfia que recebe uma oportunidade de lutar pelo título mundial.
Creed|Saga de boxe sobre Adonis Creed, filho de Apollo Creed, que busca construir a própria trajetória no esporte.
Jogos Vorazes|Saga distópica sobre Katniss Everdeen, obrigada a participar de uma competição mortal televisionada pelo governo de Panem.
Divergente|Saga distópica em que a sociedade é dividida em facções. Tris não se encaixa em apenas uma delas.
O Senhor dos Anéis|Saga de fantasia em que uma comitiva parte numa missão para destruir um anel poderoso e impedir a vitória de Sauron.
O Hobbit|Aventura de fantasia em que Bilbo Bolseiro acompanha anões numa jornada para recuperar seu reino do dragão Smaug.
Piratas do Caribe|Saga de aventuras marítimas com o capitão Jack Sparrow, tesouros, maldições e criaturas sobrenaturais.
Peter Pan|História de um menino que não cresce e leva crianças para a Terra do Nunca, onde enfrenta o Capitão Gancho.
Ratatouille|Animação sobre Remy, um rato que sonha em cozinhar e encontra uma forma de trabalhar numa cozinha de Paris.
Kung Fu Panda|Animação sobre Po, um panda escolhido para se tornar o Dragão Guerreiro e aprender kung fu.
`);
addHints('naruto', `
Naruto|Naruto Uzumaki é um ninja de Konoha que sonha em ser Hokage. É conhecido por sua determinação e pelos clones das sombras.
Sasuke|Sasuke Uchiha é um ninja do Time 7, habilidoso em técnicas de fogo e no uso dos olhos de seu clã.
Sakura|Sakura Haruno é uma ninja do Time 7 que se especializa em medicina e em golpes fortalecidos pelo controle de energia.
Ino|Ino Yamanaka é uma ninja de Konoha especializada em técnicas mentais, incluindo transferir sua consciência para outra pessoa.
Kakashi|Kakashi Hatake é o professor do Time 7, conhecido pela máscara, pela leitura e por copiar técnicas de outros ninjas.
Might Guy|Professor de Konoha especializado em taijutsu, o combate corporal. Treina com extrema dedicação e domina os Oito Portões.
Hinata|Hinata Hyuga é uma ninja de Konoha cujo estilo usa visão especial e golpes precisos nos pontos de circulação de energia.
Neji|Neji Hyuga é um prodígio de seu clã, conhecido pelo Punho Gentil e por uma defesa giratória.
Itachi|Itachi Uchiha é o irmão mais velho de Sasuke, conhecido por ilusões poderosas e por integrar uma organização de ninjas renegados.
Shisui|Shisui Uchiha é um ninja célebre por sua velocidade e por uma técnica ocular capaz de influenciar a mente.
Gaara|Ninja da Vila da Areia que controla areia para atacar e se defender. Assume o cargo de Kazekage.
Kankuro|Ninja da Vila da Areia especializado em marionetes, controladas à distância por fios de energia.
Jiraiya|Um dos Três Sannin Lendários. É um mestre de Naruto e usa invocações de sapos em combate.
Orochimaru|Um dos Três Sannin Lendários, obcecado por descobrir técnicas e prolongar a vida. É associado a serpentes e experimentos.
Tsunade|Uma dos Três Sannin Lendários e Quinta Hokage. É uma ninja médica conhecida por sua força física extraordinária.
Shizune|Ninja médica e assistente da Quinta Hokage. Ajuda com cuidados médicos e tarefas administrativas.
Kunai|Ferramenta ninja semelhante a uma adaga curta, usada em combate próximo, arremessos e armadilhas.
Shuriken|Arma de arremesso com pontas, frequentemente em formato de estrela, usada para atingir ou distrair alvos.
Rasengan|Técnica que concentra energia numa esfera giratória na palma da mão, causando um forte impacto ao tocar o alvo.
Chidori|Técnica que concentra relâmpagos na mão para um golpe de perfuração em alta velocidade. Produz um som agudo característico.
Sharingan|Poder ocular do clã Uchiha que melhora a percepção de movimentos, permite copiar muitas técnicas e lançar ilusões.
Byakugan|Poder ocular associado ao clã Hyuga. Permite visão quase completa ao redor do usuário e enxergar a rede de energia corporal.
Konoha|A Vila Oculta da Folha, no País do Fogo. É a comunidade ninja onde o protagonista cresceu, governada pelo Hokage.
Vila da Areia|Sunagakure, a vila ninja do País do Vento. Fica numa região desértica e é liderada pelo Kazekage.
Chakra|Energia produzida pela combinação de componentes físicos e espirituais. Os ninjas a moldam para executar suas técnicas.
Energia natural|Energia presente no ambiente, absorvida e equilibrada com a do próprio corpo para usar técnicas de senjutsu.
Akatsuki|Organização de ninjas renegados, reconhecida pelos mantos escuros com nuvens vermelhas e pela perseguição às bestas com caudas.
ANBU|Unidades ninja de operações especiais que executam missões sigilosas. Seus membros costumam usar máscaras de animais.
Kurama|A Raposa de Nove Caudas, uma das bestas com caudas. É conhecida por sua enorme reserva de energia.
Shukaku|A besta com uma cauda, de aparência semelhante a um tanuki. É associada à areia e a técnicas de selamento.
Rock Lee|Ninja de Konoha que compensa a falta de talento para técnicas mágicas com treinamento intenso em combate corporal.
Tenten|Ninja de Konoha especialista em armas, que guarda e invoca equipamentos por meio de pergaminhos.
Shikamaru|Ninja do clã Nara, conhecido pela inteligência estratégica e por técnicas que controlam sombras.
Choji|Ninja do clã Akimichi que usa técnicas de expansão corporal para aumentar de tamanho e combater inimigos.
Minato|O Quarto Hokage, conhecido como Relâmpago Amarelo por sua velocidade e por uma técnica de teletransporte com marcações.
Tobirama|O Segundo Hokage, um grande usuário de técnicas de água e criador de diversos jutsus importantes.
Madara|Um dos fundadores de Konoha e poderoso guerreiro do clã Uchiha, conhecido por seus poderes oculares e ambição.
Obito|Ninja do clã Uchiha que integrou a equipe de Minato. Sua história tem grande importância nos conflitos da série.
Ninjutsu|Categoria ampla de técnicas ninja que usam energia moldada para gerar efeitos como elementos, clones ou invocações.
Genjutsu|Categoria de técnicas de ilusão que altera a percepção dos sentidos de um alvo, fazendo-o vivenciar algo que não é real.
`);
addHints('hxh', `
Gon|Gon Freecss é um jovem que se torna Hunter para procurar o pai. Luta com grande força física e uma técnica de pedra, papel e tesoura.
Killua|Killua Zoldyck é um jovem de uma família de assassinos. É muito ágil e desenvolve habilidades que imitam eletricidade.
Kurapika|Sobrevivente do clã Kurta, conhecido pelos olhos escarlates. Usa correntes e busca recuperar os olhos roubados de seu povo.
Leorio|Amigo dos protagonistas que deseja se tornar médico. Busca recursos para ajudar pessoas sem acesso a tratamento.
Hisoka|Lutador de aparência circense que procura adversários fortes. Sua aura pode adquirir propriedades de borracha e goma.
Illumi|Assassino da família Zoldyck que utiliza agulhas para alterar aparências e controlar pessoas.
Netero|Presidente da Associação Hunter durante parte da história. É um mestre de artes marciais com ataques ligados a uma grande figura de oração.
Zeno|Veterano assassino da família Zoldyck que molda sua aura em formas de dragão.
Chrollo|Líder da Trupe Fantasma. Usa um livro especial para roubar e empregar habilidades, sob condições específicas.
Feitan|Integrante da Trupe Fantasma que luta com uma espada e pode converter dano sofrido num contra-ataque extremamente poderoso.
Biscuit|Hunter e professora de combate, também chamada de Bisky. Sua aparência infantil esconde uma forma física muito mais forte.
Wing|Instrutor que ensina os fundamentos do controle de aura aos protagonistas na Torre Celestial.
Meruem|Rei das Formigas Quimera, dotado de força e inteligência extraordinárias. Desenvolve grande interesse por jogos de estratégia.
Neferpitou|Membro da Guarda Real das Formigas Quimera, de aparência felina, com habilidades de detecção e manipulação de corpos.
Shaiapouf|Membro da Guarda Real das Formigas Quimera, com traços de borboleta, dedicado a proteger os interesses do rei.
Menthuthuyoupi|Membro da Guarda Real das Formigas Quimera que transforma o próprio corpo e possui imensa força física.
Machi|Integrante da Trupe Fantasma que transforma aura em fios, usados para prender, rastrear e costurar ferimentos.
Shizuku|Integrante da Trupe Fantasma que materializa um aspirador capaz de sugar objetos e substâncias, com limitações específicas.
Phinks|Integrante da Trupe Fantasma que aumenta a potência de seu soco ao girar o braço.
Uvogin|Integrante da Trupe Fantasma especializado em força bruta e resistência física, com golpes devastadores.
Nen|Sistema de técnicas para perceber e controlar a aura, a energia vital do corpo. É a base das habilidades especiais da série.
Hatsu|Um dos princípios básicos do controle de aura: sua expressão pessoal em ações e habilidades ligadas às aptidões do usuário.
Ten|Princípio que mantém a aura envolvendo o corpo, reduzindo sua dispersão e oferecendo proteção básica.
Ren|Princípio que aumenta a quantidade e a intensidade da aura liberada, elevando o poder disponível para combate.
Zetsu|Princípio que fecha a saída de aura, ajudando a ocultar a presença, mas deixando o corpo mais vulnerável a ataques de aura.
In|Técnica avançada que oculta a aura da percepção sem necessariamente interromper o uso de uma habilidade.
Gyo|Técnica que concentra uma parcela maior de aura numa parte do corpo. Nos olhos, ajuda a perceber aura escondida.
En|Técnica que expande a aura ao redor do corpo para detectar formas e movimentos dentro de uma área.
Reforço|Categoria de aura voltada a fortalecer propriedades naturais do corpo ou de objetos, como força, resistência e recuperação.
Emissão|Categoria de aura que facilita separar energia do corpo e mantê-la ativa à distância, como em projéteis.
Transmutação|Categoria de aura que permite mudar suas propriedades para imitar substâncias ou fenômenos, como eletricidade.
Manipulação|Categoria de aura voltada a controlar seres vivos ou objetos, normalmente mediante condições impostas pela habilidade.
Materialização|Categoria de aura que permite criar objetos concretos, muitas vezes dotados de regras ou propriedades especiais.
Especialização|Categoria para habilidades de aura que não se encaixam nas outras cinco, apresentando efeitos muito particulares.
Exame Hunter|Processo de seleção perigoso e variado que candidatos enfrentam para conquistar uma licença profissional de Hunter.
Torre Celestial|Arena vertical em que lutadores sobem de andar ao vencer combates, encontrando adversários cada vez mais fortes.
Greed Island|Jogo especial criado com habilidades de aura, no qual participantes entram num ambiente real e coletam cartas.
Yorknew|Grande cidade que recebe um leilão importante e serve de cenário para conflitos envolvendo criminosos e colecionadores.
Trupe Fantasma|Grupo de ladrões e criminosos conhecido como Aranha, cujos membros possuem habilidades de combate muito perigosas.
Formigas Quimera|Espécie capaz de transmitir à prole características das criaturas que a rainha consome. Constitui uma ameaça central na história.
`);
addHints('bleach', `
Ichigo|Ichigo Kurosaki é um jovem que consegue ver espíritos e se torna um ceifador de almas substituto, protegendo pessoas e combatendo monstros espirituais.
Rukia|Rukia Kuchiki é uma ceifadora de almas que introduz o protagonista ao mundo espiritual. Sua espada possui habilidades ligadas ao frio.
Renji|Renji Abarai é um oficial da Sexta Divisão. Sua espada, Zabimaru, pode se estender em segmentos para atacar à distância.
Ikkaku|Ikkaku Madarame é um guerreiro da Décima Primeira Divisão, conhecido pela cabeça raspada e pelo gosto por combates diretos.
Byakuya|Byakuya Kuchiki é o capitão da Sexta Divisão. Sua espada pode se dividir em inúmeras lâminas semelhantes a pétalas.
Toshiro|Toshiro Hitsugaya é um jovem capitão da Décima Divisão, conhecido por seus cabelos brancos e pelo controle do gelo.
Aizen|Sosuke Aizen é um estrategista e antigo capitão, cuja espada pode submeter os sentidos de um alvo à hipnose completa.
Gin|Gin Ichimaru é um capitão de sorriso enigmático. Sua espada pode se alongar rapidamente para atingir inimigos.
Orihime|Orihime Inoue é amiga do protagonista. Seus poderes criam barreiras e podem rejeitar acontecimentos, permitindo reparar ferimentos.
Chad|Yasutora Sado, chamado Chad, é um amigo fisicamente poderoso do protagonista, com habilidades espirituais concentradas nos braços.
Uryu|Uryu Ishida é um arqueiro espiritual da linhagem Quincy. Usa partículas espirituais para formar armas e combater criaturas sobrenaturais.
Ryuken|Ryuken Ishida é o pai de Uryu, um médico e habilidoso arqueiro espiritual de linhagem Quincy.
Urahara|Kisuke Urahara é o dono de uma loja de artigos espirituais, um inventor habilidoso e antigo capitão da Décima Segunda Divisão.
Yoruichi|Yoruichi Shihoin é uma antiga comandante das forças especiais, famosa por sua velocidade e pela capacidade de assumir a forma de um gato.
Kenpachi|Kenpachi Zaraki é o capitão da Décima Primeira Divisão. Procura adversários fortes e se destaca pela força e resistência.
Unohana|Retsu Unohana é uma capitã conhecida pela medicina e pela calma, com profundo domínio de técnicas de cura e combate.
Yamamoto|Genryusai Yamamoto é o veterano comandante das treze divisões. Sua espada libera fogo de enorme poder destrutivo.
Shunsui|Shunsui Kyoraku é um capitão de aparência descontraída. As habilidades de suas espadas impõem regras inspiradas em jogos.
Ulquiorra|Ulquiorra Cifer é um dos Espada, reconhecido pela aparência pálida, postura fria e habilidades de regeneração.
Grimmjow|Grimmjow Jaegerjaquez é um dos Espada, com cabelo azul, personalidade agressiva e uma forma liberada associada a uma pantera.
Hollow|Espírito corrompido que costuma ter máscara e um buraco no corpo. Ataca almas e seres humanos espiritualmente sensíveis.
Arrancar|Criatura espiritual que removeu parte de sua máscara e ganhou características semelhantes às de um ceifador de almas, incluindo uma espada.
Shinigami|Ceifador de almas que guia espíritos ao além e combate criaturas corrompidas, ajudando a manter o equilíbrio entre os mundos.
Quincy|Integrante de uma linhagem humana que manipula partículas espirituais para formar armas e combater seres espirituais.
Shikai|Primeira liberação de uma espada espiritual, alcançada ao desenvolver a relação com seu espírito e conhecer seu nome.
Bankai|Liberação avançada de uma espada espiritual, que manifesta uma forma mais completa de seu poder e exige grande domínio.
Zanpakuto|Espada espiritual usada por ceifadores de almas, com um espírito próprio e habilidades que refletem seu portador.
Asauchi|Espada-base, inicialmente sem identidade individual, sobre a qual um ceifador de almas imprime sua essência ao conviver com ela.
Soul Society|Mundo espiritual para onde muitas almas humanas são encaminhadas após a morte e onde vivem os ceifadores de almas.
Hueco Mundo|Dimensão de paisagem desértica e noite constante, habitada principalmente por espíritos corrompidos e seus derivados.
Seireitei|Área fortificada onde ficam os quartéis e a administração dos ceifadores de almas, dentro do mundo espiritual.
Rukongai|Conjunto de distritos ao redor da área fortificada do mundo espiritual, onde vive a maior parte das almas comuns.
Getsuga Tensho|Ataque que concentra energia na lâmina e a libera como uma onda cortante, característico do protagonista.
Cero|Disparo concentrado de energia espiritual, geralmente usado por criaturas corrompidas e seus derivados.
Reiatsu|Pressão espiritual produzida quando um ser libera seu poder. Pode ser percebida por outros e até exercer força sobre o ambiente.
Reiryoku|Poder espiritual que um ser possui e utiliza para alimentar suas habilidades sobrenaturais.
Hogyoku|Artefato capaz de interferir nos limites entre diferentes tipos de seres espirituais, central nos planos de um dos antagonistas.
Sokyoku|Arma de execução do mundo espiritual, que assume uma forma flamejante semelhante a uma ave quando liberada.
Kon|Uma alma modificada que costuma habitar um leão de pelúcia e pode ocupar temporariamente um corpo humano.
Yachiru|Yachiru Kusajishi é uma pequena oficial de cabelos rosados da Décima Primeira Divisão, muito próxima de seu capitão.
`);
addHints('jjk', `
Yuji Itadori|Estudante de força física incomum que entra no mundo da feitiçaria após engolir um objeto amaldiçoado perigoso.
Yuta Okkotsu|Jovem feiticeiro de enorme poder, ligado à entidade Rika. É o protagonista de Jujutsu Kaisen 0.
Megumi Fushiguro|Estudante que usa a Técnica das Dez Sombras para invocar criaturas espirituais e auxiliar em combate.
Nobara Kugisaki|Estudante que combate maldições usando martelo, pregos e bonecos de palha para canalizar sua técnica.
Satoru Gojo|Professor e feiticeiro conhecido pela venda nos olhos. Combina os Seis Olhos com uma técnica de manipulação do espaço.
Suguru Geto|Feiticeiro capaz de absorver e controlar espíritos amaldiçoados. Sua relação com a sociedade jujutsu é central na história.
Sukuna|Figura lendária conhecida como Rei das Maldições, cujo poder persiste em objetos amaldiçoados extremamente perigosos.
Mahito|Espírito amaldiçoado ligado ao ódio entre humanos, capaz de tocar e alterar a forma das almas e dos corpos.
Maki Zenin|Estudante especializada no uso de armas amaldiçoadas e no combate físico, que desafia as expectativas de seu clã.
Mai Zenin|Estudante de Kyoto que utiliza um revólver e uma técnica capaz de criar matéria a partir de energia.
Toge Inumaki|Estudante cuja fala pode impor comandos aos alvos. Usa palavras de ingredientes de comida para evitar efeitos acidentais.
Panda|Cadáver amaldiçoado autônomo com consciência e aparência de panda, criado pelo diretor da escola de Tóquio.
Kento Nanami|Feiticeiro e ex-assalariado que usa uma técnica de proporção para criar pontos fracos nos alvos.
Aoi Todo|Estudante de Kyoto, forte no combate corporal. Sua técnica permite trocar posições de alvos que tenham energia amaldiçoada.
Jogo|Espírito amaldiçoado de aparência vulcânica, cujos ataques utilizam chamas e calor intenso.
Hanami|Espírito amaldiçoado ligado ao medo da natureza, que luta usando plantas e outras habilidades relacionadas à vegetação.
Choso|Encarnação de uma Pintura da Morte, profundamente ligado aos irmãos. Usa uma técnica de manipulação de sangue.
Eso|Uma das Pinturas da Morte encarnadas, que utiliza sangue numa técnica capaz de provocar decomposição.
Toji Fushiguro|Combatente sem energia amaldiçoada, mas com capacidades físicas excepcionais. É conhecido por caçar feiticeiros usando armas especiais.
Naobito Zenin|Chefe do clã Zenin durante parte da história, que utiliza a Feitiçaria de Projeção para executar movimentos extremamente rápidos.
Kasumi Miwa|Estudante de Kyoto que combate com uma espada e utiliza técnicas defensivas do Novo Estilo das Sombras.
Momo Nishimiya|Estudante de Kyoto que manipula uma vassoura para voar e desempenhar funções de reconhecimento e apoio.
Utahime|Utahime Iori é uma professora da escola de Kyoto, cuja técnica pode ampliar a energia de feiticeiros dentro de seu alcance.
Shoko Ieiri|Médica da escola de Tóquio, capaz de usar uma técnica de energia positiva para tratar ferimentos de outras pessoas.
Energia amaldiçoada|Energia originada das emoções negativas humanas. Alimenta técnicas de feiticeiros e está ligada à formação de maldições.
Energia reversa|Nome usado aqui para a energia positiva gerada pela técnica reversa. Pode regenerar tecidos e alimentar efeitos invertidos de certas técnicas.
Expansão de domínio|Técnica avançada que manifesta o domínio do usuário. Muitas formas criam uma barreira e concedem acerto garantido à técnica aplicada.
Domínio simples|Técnica que cria uma área defensiva e pode neutralizar o efeito de acerto garantido de um domínio enquanto se mantém ativa.
Cão Divino|Invocação canina da Técnica das Dez Sombras, usada para rastrear maldições e atacar inimigos.
Nue|Invocação alada da Técnica das Dez Sombras, capaz de voar e produzir descargas elétricas.
Roxo|Ataque de Gojo que combina atração e repulsão em um efeito de enorme poder destrutivo.
Vermelho|Aplicação invertida da técnica espacial de Gojo, alimentada por energia positiva, que produz uma forte repulsão.
Azul|Aplicação da técnica espacial de Gojo que produz atração, puxando alvos e matéria para um ponto.
Infinito|Efeito da técnica espacial de Gojo que faz objetos desacelerarem ao se aproximar, impedindo o contato normal com ele.
Dedo do Sukuna|Objeto amaldiçoado que preserva parte do poder de uma entidade lendária. É extremamente perigoso e atrai maldições.
Útero amaldiçoado|Estado de formação de uma maldição, que pode evoluir para um espírito mais poderoso. Algumas formas especiais são objetos amaldiçoados.
Escola de Tóquio|Instituição jujutsu que treina feiticeiros e organiza missões contra maldições. É a escola principal acompanhada pela série.
Escola de Kyoto|Instituição jujutsu de Kyoto que forma feiticeiros e participa de eventos de intercâmbio com a outra escola.
Kokushen|Fenômeno conhecido como Black Flash: energia aplicada quase simultaneamente ao impacto físico distorce o espaço e amplifica o golpe.
Punho divergente|Golpe em que o impacto físico é seguido por uma segunda descarga de energia, devido ao atraso entre os dois.
`);
addHints('db', `
Goku|Saiyajin criado na Terra que adora treinar e enfrentar adversários fortes. É o protagonista e um dos principais defensores do planeta.
Vegeta|Príncipe dos saiyajins, orgulhoso e dedicado ao combate. Sua rivalidade e evolução o tornam um dos guerreiros centrais da série.
Gohan|Filho mais velho do protagonista, um guerreiro com grande potencial que também valoriza os estudos e a família.
Trunks|Filho de Bulma, conhecido pelos cabelos claros. Sua versão do futuro viaja no tempo e utiliza uma espada.
Goten|Filho mais novo de Goku, com aparência semelhante à do pai quando criança e grande talento para lutar.
Pan|Filha de Gohan e Videl, neta do protagonista. Demonstra talento para artes marciais desde pequena.
Piccolo|Guerreiro namekuseijin de pele verde, antenas e grande capacidade de regeneração. Atua como aliado e mentor.
Kami|Guardião da Terra durante parte da história, um namekuseijin que vive num templo elevado e está ligado às esferas terrestres.
Kuririn|Guerreiro humano, amigo de infância do protagonista e praticante de artes marciais. Usa um ataque de disco cortante.
Tenshinhan|Artista marcial humano de três olhos, conhecido por técnicas como o Kikoho e pela disciplina nos treinos.
Bulma|Inventora e cientista da Corporação Cápsula. Desenvolve equipamentos fundamentais para as aventuras dos guerreiros.
Chi-Chi|Artista marcial, esposa do protagonista e mãe de dois filhos, conhecida por priorizar a educação e o bem-estar da família.
Freeza|Imperador espacial cruel, responsável por conquistar planetas. Possui várias formas de transformação e poder destrutivo imenso.
Cell|Bioandroide criado com células de diversos guerreiros. Busca atingir sua forma perfeita e organiza um torneio de combate.
Majin Boo|Ser mágico de aparência rosada, capaz de regenerar o corpo e transformar pessoas em doces. Possui diferentes formas.
Janemba|Vilão do filme Uma Nova Fusão, originado de energia maligna no outro mundo. Distorce o espaço e a realidade ao redor.
Beerus|Deus da Destruição do Universo 7, de aparência felina. Seu papel está ligado à destruição de mundos no equilíbrio cósmico.
Champa|Deus da Destruição do Universo 6, irmão de Beerus, conhecido por sua rivalidade e interesse por comida.
Whis|Anjo que acompanha e treina o Deus da Destruição do Universo 7. Possui habilidades extraordinárias de combate e deslocamento.
Vados|Anjo que acompanha o Deus da Destruição do Universo 6 e é irmã de Whis.
Broly|Saiyajin conhecido por um poder que cresce de forma extraordinária durante o combate. Suas histórias variam entre as versões dos filmes.
Kale|Saiyajin do Universo 6, amiga de Caulifla, capaz de assumir uma transformação de enorme poder e musculatura.
Gogeta|Guerreiro resultante da união dos dois principais saiyajins por meio da Dança da Fusão, combinando seus poderes.
Vegetto|Guerreiro resultante da união dos dois principais saiyajins pelo uso dos brincos Potara, combinando suas habilidades.
Kamehameha|Técnica de artes marciais que concentra energia nas mãos e a dispara em forma de uma poderosa rajada.
Galick Ho|Técnica de Vegeta que concentra energia e lança uma grande rajada, geralmente representada em tons de roxo.
Genki Dama|Técnica que reúne energia cedida por seres vivos e pela natureza para formar uma grande esfera de ataque.
Esfera da Morte|Ataque associado ao imperador espacial que forma uma bola de energia com enorme capacidade de destruição.
Super Saiyajin|Transformação que amplia o poder de um saiyajin. Sua forma clássica apresenta cabelos dourados e olhos claros.
Kaioken|Técnica que multiplica temporariamente o desempenho e a energia do corpo, mas exige muito esforço físico do usuário.
Shenlong|Dragão invocado quando as sete esferas mágicas da Terra são reunidas, capaz de conceder desejos dentro de limites.
Porunga|Dragão das esferas de Namekusei, conhecido pela aparência musculosa e por conceder desejos conforme as regras de seu conjunto.
Esferas do Dragão|Esferas mágicas que, quando reunidas num conjunto completo, permitem invocar um dragão capaz de realizar desejos.
Radar do Dragão|Dispositivo criado para detectar e localizar as esferas mágicas, mostrando suas posições numa tela.
Namekusei|Planeta de origem dos namekuseijins, associado a paisagens de céu esverdeado e a um conjunto próprio de esferas mágicas.
Planeta Vegeta|Mundo que servia de lar aos saiyajins e era governado por sua monarquia antes de ser destruído.
Nuvem Voadora|Nuvem mágica usada como transporte aéreo, que só permite que pessoas de coração puro a montem.
Bastão Mágico|Bastão vermelho capaz de aumentar e diminuir de comprimento, utilizado pelo protagonista em suas primeiras aventuras.
Semente dos Deuses|Alimento especial cultivado por Karin, capaz de restaurar energia e recuperar muitos ferimentos rapidamente.
Cápsula|Pequeno recipiente tecnológico da Corporação Cápsula que armazena objetos grandes, como veículos e casas, de forma portátil.
`);
addHints('herois', `
Homem de Ferro|Herói da Marvel: Tony Stark, inventor que utiliza armaduras tecnológicas para voar, se proteger e combater ameaças.
Batman|Herói da DC: Bruce Wayne, vigilante de Gotham que utiliza investigação, treinamento e equipamentos, sem superpoderes naturais.
Superman|Herói da DC, um kryptoniano criado na Terra como Clark Kent. Possui força, voo e visão de calor, entre outros poderes.
Capitã Marvel|Heroína da Marvel, conhecida principalmente como Carol Danvers. Possui força ampliada, voo e capacidade de absorver e projetar energia.
Thor|Herói da Marvel inspirado no deus nórdico do trovão. É um guerreiro asgardiano associado a tempestades e a um martelo encantado.
Shazam|Herói da DC: um jovem, normalmente Billy Batson, que assume uma forma adulta com poderes mágicos ao dizer uma palavra.
Flash|Título de heróis velocistas da DC, como Barry Allen e Wally West, capazes de se mover em velocidades extraordinárias.
Mercúrio|Herói da Marvel, Pietro Maximoff, conhecido por sua supervelocidade e por ser irmão de Wanda Maximoff.
Arqueiro Verde|Herói da DC, Oliver Queen, que usa arco, flechas especiais e habilidade de combate para enfrentar criminosos.
Gavião Arqueiro|Herói da Marvel, mais associado a Clint Barton, um arqueiro de precisão excepcional que usa flechas com funções especiais.
Aquaman|Herói da DC, Arthur Curry, ligado ao reino de Atlântida, capaz de viver debaixo d’água e se comunicar com a vida marinha.
Namor|Personagem da Marvel, governante submarino com força extraordinária e pequenas asas nos tornozelos que permitem voar.
Mulher-Maravilha|Heroína da DC, Diana, uma guerreira amazona de Themyscira. Utiliza um laço mágico e braceletes em sua defesa da humanidade.
Valquíria|Personagem da Marvel ligada às guerreiras de Asgard. É conhecida pela habilidade com espadas e por seu vínculo com a mitologia nórdica.
Doutor Estranho|Herói da Marvel, Stephen Strange, um ex-cirurgião que se torna mestre das artes místicas e protege o mundo de ameaças mágicas.
Doutor Destino (DC)|Herói místico da DC, chamado Doctor Fate no original. Usa um elmo ligado a Nabu e à magia da Ordem.
Homem-Aranha|Herói da Marvel, mais conhecido como Peter Parker. Escala paredes, usa teias e possui um sentido que alerta sobre perigos.
Asa Noturna|Herói da DC, Dick Grayson, antigo Robin. É um acrobata e vigilante que costuma combater com dois bastões.
Hulk|Personagem da Marvel ligado a Bruce Banner, transformado por radiação gama num ser de força e resistência extraordinárias.
Coisa|Herói da Marvel, Ben Grimm, integrante do Quarteto Fantástico. Seu corpo rochoso proporciona grande força e resistência.
Viúva Negra|Heroína da Marvel, mais conhecida como Natasha Romanoff, uma espiã especialista em infiltração, combate e uso de equipamentos.
Canário Negro|Heroína da DC, geralmente Dinah Lance, especialista em artes marciais e conhecida por emitir um poderoso grito sônico.
Wolverine|Herói mutante da Marvel, também chamado Logan. Possui sentidos aguçados, cura acelerada e garras, frequentemente revestidas de adamantium.
Pantera Negra|Herói da Marvel e título ligado à proteção de Wakanda, conhecido principalmente por T’Challa e pelo uso de tecnologia de vibranium.
Capitão América|Herói da Marvel, mais associado a Steve Rogers, fortalecido por um soro e conhecido por seu escudo circular.
Soldado Invernal|Personagem da Marvel, Bucky Barnes, um combatente treinado que possui um braço cibernético e uma história como agente controlado.
Lanterna Verde|Título de heróis da DC que usam anéis capazes de criar construções de energia alimentadas pela força de vontade.
Nova|Título de heróis cósmicos da Marvel, como Richard Rider e Sam Alexander, ligados a uma força que concede voo e poderes energéticos.
Feiticeira Escarlate|Personagem da Marvel, Wanda Maximoff, associada à magia do caos e a poderes capazes de alterar probabilidades e a realidade.
Zatanna|Heroína e maga da DC, conhecida por realizar feitiços pronunciando palavras e frases ao contrário.
Homem-Formiga|Título de heróis da Marvel, como Hank Pym e Scott Lang, que usam tecnologia para alterar de tamanho e se comunicar com formigas.
Átomo|Título de heróis da DC, como Ray Palmer, que usam tecnologia para encolher até escalas microscópicas ou subatômicas.
Ciborgue|Herói da DC, Victor Stone, cujo corpo foi integrado a tecnologia avançada, permitindo controlar sistemas e usar armamentos.
Visão|Herói sintético da Marvel, capaz de alterar a densidade do corpo para atravessar objetos ou aumentar sua resistência.
Ravena|Heroína da DC associada aos Titãs, filha do demônio Trigon. Usa poderes místicos e possui forte ligação com emoções.
Jean Grey|Heroína mutante da Marvel, integrante dos X-Men, com telepatia, telecinese e uma conhecida ligação com a Força Fênix.
Supergirl|Heroína da DC, conhecida principalmente como Kara Zor-El, uma kryptoniana com voo, força e outros poderes semelhantes aos do primo.
Mulher-Hulk|Heroína da Marvel, Jennifer Walters, uma advogada que adquire força e aparência transformada após receber sangue de seu primo.
Batgirl|Título de heroínas da DC que combatem o crime com treinamento e equipamentos. Barbara Gordon é uma de suas identidades mais conhecidas.
Mulher-Aranha|Título de heroínas da Marvel, conhecido principalmente por Jessica Drew, que possui força ampliada e descargas bioelétricas.
`);
addHints('memes', `
Amostradinho|Bordão e gíria para alguém que gosta de aparecer, se exibir ou fazer graça. Nos memes, é usado como uma provocação bem-humorada.
Lá ele|Expressão popular usada para se afastar de uma frase de duplo sentido, como quem diz que aquilo se refere a outra pessoa.
Bora Bill|Bordão que viralizou com um narrador chamando repetidamente um homem durante uma partida de futebol amador. Virou uma convocação brincalhona.
Receba|Bordão popularizado em vídeos de futebol para comemorar um chute ou uma jogada bem-sucedida, dito com muita energia.
Calma calabreso|Bordão associado ao humorista Toninho Tornado, usado para pedir calma de forma engraçada, com um apelido derivado de uma comida.
Casca de bala|Bordão para um companheiro muito próximo, que está sempre junto nas aventuras. Também ficou conhecido em música, vídeos de amizade e montagens.
Sigma|Nos memes, personagem que se apresenta como independente, frio e autoconfiante. É um estereótipo da internet, frequentemente usado com ironia.
Gigachad|Figura de aparência extremamente musculosa e traços marcantes, usada nos memes como uma versão exagerada de confiança, beleza ou perfeição.
Aura|Nos memes, é uma espécie de pontuação imaginária de presença e estilo: alguém ganha pontos ao impressionar e perde ao passar vergonha.
Farmar aura|Gíria para tentar acumular prestígio ou parecer impressionante com poses, atitudes e cenas dramáticas, muitas vezes de forma propositalmente exagerada.
Moggado|Gíria para alguém que foi ofuscado por outra pessoa numa comparação de aparência ou presença. Nos memes, a comparação costuma ser exagerada.
Mewing|Termo ligado ao posicionamento da língua no céu da boca, transformado em meme de pose séria e destaque ao maxilar. O gesto de silêncio também aparece nessas piadas.
Que viagem é essa véi|Frase de reação a algo absurdo, confuso ou sem sentido. É usada em vídeos e montagens para expressar espanto e incredulidade.
Absolute Cinema|Expressão usada para chamar uma cena de cinema absoluto, por admiração ou ironia. Costuma acompanhar uma imagem do diretor Martin Scorsese com as mãos levantadas.
Trollface|Rosto desenhado em preto e branco com um sorriso malicioso, usado para representar quem aprontou uma pegadinha ou provocou os outros.
Trollagem|Pegadinha ou provocação feita para causar surpresa ou obter uma reação. Na internet, pode aparecer em vídeos, comentários e montagens.
Skibidi Toilet|Série de animações da internet com cabeças saindo de vasos sanitários e batalhas absurdas contra personagens com equipamentos no lugar da cabeça.
Cameraman|Personagem do universo de Skibidi Toilet que tem uma câmera no lugar da cabeça e participa dos conflitos da série.
Tralalero Tralala|Personagem de memes de brainrot italiano: um tubarão com pernas e tênis, associado a narrações sonoras absurdas.
Bombardiro Crocodilo|Personagem de brainrot italiano que mistura um crocodilo com um avião militar. Aparece em imagens e vídeos propositalmente absurdos.
Tung Tung Tung Sahur|Personagem de brainrot com aparência de figura de madeira e um bastão, associado a uma narração que repete seu nome de forma rítmica.
Ballerina Cappuccina|Personagem de brainrot que combina uma bailarina com uma xícara de cappuccino no lugar da cabeça, geralmente usando roupa de balé.
Cappuccino Assassino|Personagem de brainrot representado como um copo de café com aparência de ninja ou assassino, frequentemente carregando espadas.
Chimpanzini Bananini|Personagem de brainrot que mistura um chimpanzé com uma banana. Aparece em imagens absurdas e narrações com nomes rimados.
Brr Brr Patapim|Personagem de brainrot que mistura traços de macaco e árvore, com pés grandes e aparência de criatura da floresta.
Lirili Larila|Personagem de brainrot que combina elefante e cacto, geralmente usando sandálias numa paisagem desértica.
Six seven|Bordão em inglês que significa seis e sete. É repetido como piada sem significado fixo, muitas vezes acompanhado por um gesto alternando as mãos.
Brainrot|Nome dado ao humor de repetição e absurdo da internet, com frases sem contexto, vozes artificiais e personagens estranhos que ficam na cabeça.
Chill Guy|Meme de um cachorro antropomórfico de suéter e jeans, com as mãos nos bolsos. Representa alguém tranquilo mesmo em situações complicadas.
Nonchalant|Palavra em inglês usada em memes para alguém que aparenta indiferença e calma, como se nada o impressionasse, às vezes de propósito.
Morango do amor|Doce de morango envolvido em brigadeiro branco e uma casca crocante de açúcar, que virou febre em vídeos, receitas e piadas sobre tendências.
Chocolate de Dubai|Barra de chocolate com recheio de pistache e massa crocante de kataifi, que viralizou em degustações e memes sobre produtos da moda.
Bobbie Goods|Marca conhecida por ilustrações fofas e livros de colorir. Virou tendência em vídeos de pintura com marcadores e em piadas sobre relaxamento e perfeccionismo.
Labubu|Personagem colecionável de orelhas pontudas e sorriso com dentes, criado por Kasing Lung. Seus bonecos viraram acessórios e assunto de memes sobre consumo.
Delulu|Gíria da internet derivada de uma palavra inglesa para ilusão. É usada de brincadeira para alguém que cria expectativas ou fantasias pouco realistas.
POV|Sigla inglesa para ponto de vista. Nos memes, apresenta uma cena como se você estivesse vivendo a situação descrita na legenda.
Bombombini Gusini|Personagem de brainrot que mistura um ganso com uma aeronave militar. Faz parte das montagens de animais e máquinas com nomes absurdos.
Trippi Troppi|Personagem de brainrot com versões diferentes, incluindo uma mistura de camarão e gato. O nome aparece em áudios e montagens de criaturas híbridas.
Eu sou o Steve|Bordão da apresentação de Jack Black como Steve no filme de Minecraft, repetido em montagens por sua entonação dramática.
Chicken Jockey|Bebê zumbi montado numa galinha em Minecraft. A fala que anuncia a criatura no filme virou meme e reação exagerada entre fãs.
`);
addHints('jogos', `
Minecraft|Jogo de construção e sobrevivência num mundo de blocos. Você coleta recursos, fabrica equipamentos, explora cavernas e constrói livremente.
Terraria|Jogo de exploração e construção em duas dimensões, com mineração, fabricação de itens e muitos chefes para enfrentar.
Skyrim|RPG de mundo aberto de fantasia em que você explora uma província com dragões, aprende magias e participa de missões e facções.
The Witcher 3|RPG de mundo aberto protagonizado por Geralt de Rívia, um caçador de monstros que usa espadas, alquimia e sinais mágicos.
Fallout 4|RPG ambientado numa região devastada por guerra nuclear, com exploração, escolhas, armas e construção de assentamentos.
Cyberpunk 2077|RPG de ação ambientado em Night City, uma metrópole futurista. Você joga como V, mercenário que usa armas e implantes cibernéticos.
Stardew Valley|Jogo de fazenda em que você planta, cria animais, pesca, explora minas e faz amizade com os moradores de uma pequena comunidade.
Animal Crossing|Série de simulação de vida com vizinhos animais, decoração, coleta de objetos e atividades tranquilas acompanhando o calendário.
League of Legends|Jogo de estratégia e combate em equipes, em que cada pessoa controla um campeão e busca destruir a base adversária.
Dota 2|Jogo de equipes em que heróis com habilidades diferentes disputam recursos e estruturas para destruir o Ancestral da equipe inimiga.
Valorant|Jogo de tiro tático por equipes com agentes de habilidades especiais. Um lado tenta instalar um dispositivo e o outro impedir sua detonação.
Counter-Strike 2|Jogo de tiro tático em equipes, com compra de armas e rodadas envolvendo ataque e defesa de pontos de bomba.
Fortnite|Jogo conhecido pelo modo battle royale, no qual jogadores disputam sobrevivência numa área que diminui. Também possui modos com construção e outras experiências.
Free Fire|Jogo de battle royale popular em celulares, em que jogadores coletam armas e tentam sobreviver até o final da partida.
GTA V|Jogo de ação em mundo aberto ambientado em Los Santos, com três protagonistas, veículos, missões e grandes assaltos.
Red Dead Redemption 2|Jogo de ação em mundo aberto no Velho Oeste, acompanhando Arthur Morgan e uma gangue de foras da lei.
Elden Ring|RPG de ação de mundo aberto com fantasia sombria, exploração, criação de personagens e combates exigentes contra chefes.
Dark Souls III|RPG de ação de fantasia sombria, conhecido por combates difíceis, gerenciamento de resistência e exploração de áreas interligadas.
God of War|Série de ação que acompanha Kratos enfrentando figuras mitológicas. Seus jogos exploram universos inspirados nas mitologias grega e nórdica.
Assassin’s Creed|Série de ação e aventura em cenários históricos, com exploração, escalada, furtividade e conflitos entre assassinos e templários.
Pokémon|Franquia em que treinadores capturam criaturas, montam equipes e participam de batalhas, frequentemente usando vantagens entre tipos.
Palworld|Jogo de sobrevivência e construção de bases com criaturas chamadas Pals, que podem lutar e ajudar em tarefas de produção.
Among Us|Jogo de dedução social em que tripulantes cumprem tarefas enquanto impostores sabotam e tentam eliminá-los sem serem descobertos.
Goose Goose Duck|Jogo de dedução social com gansos, patos e papéis especiais. O grupo realiza tarefas enquanto tenta identificar sabotadores.
Dead by Daylight|Jogo de terror assimétrico em que quatro sobreviventes tentam reparar geradores e escapar de um assassino controlado por outro jogador.
Friday the 13th: The Game|Jogo de terror baseado em Sexta-Feira 13, no qual monitores de acampamento tentam sobreviver a Jason Voorhees.
Resident Evil|Série de terror e sobrevivência sobre ameaças biológicas, com exploração, combate, recursos limitados e resolução de enigmas.
Silent Hill|Série de terror psicológico conhecida pela cidade envolta em névoa, ambientes perturbadores, monstros simbólicos e enigmas.
Roblox|Plataforma de experiências e jogos criados por usuários, com avatares e gêneros variados, de obstáculos a simulações e aventuras.
Garry’s Mod|Jogo sandbox baseado em física, no qual é possível manipular objetos, criar cenas e experimentar modos feitos pela comunidade.
Super Mario|Série de jogos de plataforma em que Mario atravessa fases, salta sobre obstáculos, coleta itens e enfrenta inimigos.
Sonic|Série de jogos centrada num ouriço azul veloz, com corrida por fases, coleta de anéis e confrontos com o Dr. Eggman.
EA Sports FC|Série de simulação de futebol da EA, com partidas, clubes e modos de gerenciamento ou montagem de equipes.
eFootball|Jogo de futebol da Konami, sucessor da série PES, com partidas e modos de formação de equipes.
Hollow Knight|Aventura de ação em duas dimensões num reino de insetos, com exploração, novas habilidades e combates contra chefes.
Ori and the Blind Forest|Jogo de plataforma e exploração que acompanha um pequeno espírito numa floresta, com saltos precisos e habilidades de movimentação.
Rocket League|Jogo que combina futebol com carros movidos a foguete. As equipes dirigem, saltam e voam para colocar a bola no gol.
Fall Guys|Jogo de competição com personagens coloridos em provas de obstáculos e minijogos eliminatórios até restar um vencedor ou uma equipe.
Lethal Company|Jogo cooperativo de terror em que uma equipe coleta sucata em instalações perigosas para cumprir uma cota de uma empresa.
R.E.P.O.|Jogo cooperativo de terror em que jogadores transportam objetos valiosos usando física, evitando quebrá-los e enfrentando ameaças durante a coleta.
`);

window.HINTS["ben10"] = {
  "Ben Tennyson": "Protagonista que encontra um dispositivo capaz de transformá-lo em diferentes espécies alienígenas e usa essas formas para salvar pessoas.",
  "Albedo": "Galvaniano que foi assistente de Azmuth e assume uma aparência semelhante à de Ben. Usa tecnologia de transformação e costuma agir como antagonista.",
  "Gwen Tennyson": "Prima de Ben, inteligente e habilidosa em magia e manipulação de mana, uma energia vital usada em seus poderes.",
  "Charmcaster": "Feiticeira rival da família Tennyson, conhecida por lançar encantamentos e controlar criaturas mágicas.",
  "Max Tennyson": "Avô de Ben e Gwen, veterano de uma organização que lida com ameaças alienígenas. Viaja com os netos num trailer.",
  "Rook Blonko": "Parceiro de Ben em Omniverse, um agente alienígena disciplinado que usa uma ferramenta versátil chamada Proto-Ferramenta.",
  "Vilgax": "Conquistador alienígena de aparência tentacular, um dos principais inimigos de Ben, que busca obter o poder de seu dispositivo de transformação.",
  "Aggregor": "Antagonista que captura alienígenas e absorve seus poderes para se tornar mais forte.",
  "Azmuth": "Cientista galvaniano de grande inteligência, criador do Omnitrix e responsável por muitas tecnologias importantes da série.",
  "Dr. Psychobos": "Cientista cerebrocrustáceo que constrói aparelhos perigosos, incluindo o Nemetrix, e se considera um rival intelectual de Azmuth.",
  "Omnitrix": "Aparelho que utiliza amostras de DNA para transformar seu usuário em diferentes espécies alienígenas.",
  "Ultimatrix": "Dispositivo de transformação que também pode simular a evolução de espécies e produzir formas supremas.",
  "Nemetrix": "Aparelho que transforma seu portador em predadores de espécies alienígenas presentes no Omnitrix. É associado a Khyber e seu animal.",
  "Antitrix": "Dispositivo usado por Kevin na série reboot, capaz de produzir transformações alienígenas modificadas.",
  "Chama": "Alienígena com corpo rochoso em chamas, capaz de gerar e controlar fogo e resistir a temperaturas muito altas.",
  "Fogo Fátuo": "Alienígena de aparência vegetal que lança fogo, controla plantas e regenera partes do próprio corpo.",
  "Diamante": "Transformação com corpo de cristal resistente, capaz de criar lâminas, barreiras e projéteis cristalinos.",
  "Cromático": "Alienígena cristalino que absorve energia e a libera em ataques poderosos.",
  "Quatro Braços": "Alienígena musculoso de pele vermelha e quatro braços, usado para levantar grandes pesos e enfrentar adversários no corpo a corpo.",
  "Enormossauro": "Alienígena com aparência de dinossauro, grande força física e capacidade de aumentar o tamanho do corpo em suas apresentações clássicas.",
  "XLR8": "Alienígena de corpo ágil e pés semelhantes a rodas, capaz de se mover e reagir em velocidade extraordinária.",
  "Acelerado": "Alienígena velocista, também conhecido como Fasttrack, com aparência felina e grande agilidade.",
  "Massa Cinzenta": "Pequeno alienígena galvaniano de enorme capacidade intelectual, útil para resolver problemas e entender máquinas.",
  "Artrópode": "Alienígena de aparência semelhante a um crustáceo, com grande inteligência e capacidade de produzir eletricidade.",
  "Fantasmático": "Alienígena fantasmagórico capaz de atravessar objetos, ficar invisível e possuir outros seres.",
  "Friagem": "Alienígena alado semelhante a uma mariposa, que pode atravessar matéria e congelar alvos com seu sopro.",
  "Besta": "Alienígena quadrúpede sem olhos, com sentidos aguçados, garras e capacidade de rastrear alvos pelo cheiro.",
  "Rath": "Alienígena semelhante a um tigre musculoso, conhecido por sua força, garras e temperamento explosivo.",
  "Aquático": "Alienígena semelhante a um peixe, com dentes afiados, grande velocidade de nado e capacidade de respirar debaixo d’água.",
  "Ameaça Aquática": "Alienígena com armadura que armazena e lança água em jatos pressurizados, usado em resgates e combate.",
  "Ultra T": "Alienígena de corpo tecnológico flexível que se funde a máquinas para controlá-las e aprimorá-las.",
  "Nanomech": "Pequena transformação híbrida com asas e componentes tecnológicos, útil para entrar em espaços minúsculos e interagir com sistemas.",
  "Eco Eco": "Pequeno alienígena capaz de se multiplicar e emitir ondas sonoras poderosas.",
  "Lobisben": "Transformação semelhante a um lobisomem, também chamada Blitzwolfer, que abre a boca em partes para lançar ondas sonoras.",
  "Insectóide": "Alienígena semelhante a um inseto voador que dispara uma substância pegajosa para prender inimigos.",
  "Arraia-à-Jato": "Alienígena com aparência de arraia e jato, capaz de voar em alta velocidade e lançar raios de energia.",
  "Feedback": "Alienígena com extensões semelhantes a cabos, capaz de absorver energia e devolvê-la em ataques.",
  "Shocksquatch": "Alienígena peludo de grande porte que produz descargas elétricas e combina esses ataques com força física.",
  "Encanadores": "Organização que investiga e combate ameaças extraterrestres, funcionando como uma força de proteção interplanetária.",
  "Cavaleiros Eternos": "Organização secreta de inspiração medieval que usa armaduras e tecnologia avançada, frequentemente perseguindo alienígenas."
};

window.HINTS["demon-slayer"] = {
  "Tanjiro Kamado": "Protagonista de grande empatia e olfato aguçado, que se torna caçador de demônios para ajudar sua irmã.",
  "Inosuke Hashibira": "Caçador que usa uma máscara de javali e duas espadas serrilhadas, conhecido por seu comportamento impulsivo e estilo próprio de combate.",
  "Zenitsu Agatsuma": "Caçador de audição aguçada e comportamento medroso, capaz de executar ataques extremamente rápidos com a Respiração do Trovão.",
  "Kanao Tsuyuri": "Jovem caçadora criada na Mansão Borboleta, com excelente visão e domínio da Respiração da Flor.",
  "Nezuko Kamado": "Irmã de Tanjiro, transformada em demônio, que luta para proteger humanos e acompanha o irmão.",
  "Tamayo": "Demônia e médica que pesquisa formas de enfrentar Muzan e auxiliar pessoas afetadas por demônios.",
  "Giyu Tomioka": "Hashira da Água, um espadachim reservado que tem papel importante no início da jornada do protagonista.",
  "Sakonji Urokodaki": "Antigo Hashira da Água e treinador de espadachins, reconhecido pela máscara de tengu vermelha.",
  "Kyojuro Rengoku": "Hashira das Chamas, conhecido por seu entusiasmo, senso de dever e estilo de espada inspirado em fogo.",
  "Tengen Uzui": "Hashira do Som, antigo ninja que luta com duas grandes lâminas ligadas por uma corrente e utiliza explosivos.",
  "Shinobu Kocho": "Hashira do Inseto, especialista em venenos e ataques de perfuração, ligada aos cuidados médicos da Mansão Borboleta.",
  "Mitsuri Kanroji": "Hashira do Amor, de força física excepcional, que utiliza uma espada muito flexível semelhante a um chicote.",
  "Muichiro Tokito": "Hashira da Névoa, um jovem prodígio conhecido por sua aparência distraída e movimentos difíceis de acompanhar.",
  "Obanai Iguro": "Hashira da Serpente, que usa uma lâmina ondulada e costuma estar acompanhado por uma cobra branca.",
  "Sanemi Shinazugawa": "Hashira do Vento, um guerreiro de aparência marcada por cicatrizes e temperamento agressivo contra demônios.",
  "Gyomei Himejima": "Hashira da Pedra, um guerreiro cego e muito forte que luta usando uma arma com machado, corrente e bola com espinhos.",
  "Muzan Kibutsuji": "Principal antagonista e origem de muitos demônios da história, capaz de alterar o corpo e controlar subordinados.",
  "Kokushibo": "Demônio que ocupa o posto de Lua Superior Um, reconhecido por seus seis olhos e por lutar com uma espada.",
  "Akaza": "Lua Superior Três, especializado em artes marciais e golpes de curta distância acompanhados de ondas de choque.",
  "Doma": "Lua Superior Dois, que utiliza leques e técnicas demoníacas ligadas ao gelo.",
  "Daki": "Demônia que luta usando faixas de tecido como armas no Distrito do Entretenimento.",
  "Gyutaro": "Demônio de corpo magro que utiliza foices e ataques de sangue venenoso, ligado à mesma missão de sua irmã.",
  "Rui": "Lua Inferior Cinco, um demônio de aparência infantil que usa fios cortantes e tenta formar uma família de aranhas.",
  "Enmu": "Lua Inferior Um, um demônio capaz de colocar pessoas para dormir e manipular sonhos.",
  "Respiração da Água": "Estilo de combate com espada inspirado na fluidez da água, com técnicas adaptáveis e movimentos contínuos.",
  "Respiração do Trovão": "Estilo de combate com espada que enfatiza aceleração e ataques rápidos, associado a golpes de desembainhar.",
  "Respiração das Chamas": "Estilo de combate com ataques firmes e poderosos, representados visualmente por motivos de fogo.",
  "Respiração do Vento": "Estilo de combate que utiliza cortes agressivos, amplos e velozes, representados por motivos de vento.",
  "Respiração da Névoa": "Estilo que emprega mudanças de ritmo e movimentos enganosos para dificultar a leitura do adversário.",
  "Respiração da Serpente": "Estilo que utiliza trajetórias sinuosas e cortes em ângulos incomuns, inspirados no movimento de serpentes.",
  "Respiração do Amor": "Estilo ágil e flexível, desenvolvido para aproveitar as características físicas de sua criadora e sua espada semelhante a um chicote.",
  "Respiração do Inseto": "Estilo que prioriza estocadas e venenos, adaptado para eliminar demônios sem depender da decapitação pela força.",
  "Espada Nichirin": "Lâmina forjada com materiais especiais que absorvem luz solar, usada pelos caçadores no combate aos demônios.",
  "Espada de treino": "Arma usada na prática de movimentos e combates, frequentemente feita de madeira para sessões de treinamento.",
  "Glicínia": "Planta cujas propriedades repelem demônios e podem ser utilizadas na preparação de venenos contra eles.",
  "Luz do sol": "Radiação solar que é fatal para a grande maioria dos demônios, obrigando-os a buscar abrigo durante o dia.",
  "Arco do Trem Infinito": "Parte da história em que caçadores investigam desaparecimentos num trem e enfrentam uma ameaça ligada a sonhos.",
  "Arco do Distrito do Entretenimento": "Parte da história em que caçadores investigam a presença de demônios em um distrito noturno, acompanhados pelo Hashira do Som.",
  "Arco do Treinamento dos Hashiras": "Parte da história dedicada a um programa de exercícios e treinamento conduzido pelos Hashiras para fortalecer os caçadores.",
  "Seleção Final": "Prova de ingresso na organização dos caçadores, na qual candidatos precisam sobreviver durante vários dias numa montanha com demônios."
};

window.HINTS["desenhos"] = {
  "Finn": "Herói humano de Hora de Aventura, que usa um gorro branco e se aventura pela Terra de Ooo com sua espada.",
  "Jake": "Cachorro mágico de Hora de Aventura, capaz de esticar e mudar o tamanho do corpo, companheiro do herói humano.",
  "Princesa Jujuba": "Governante do Reino Doce em Hora de Aventura, uma cientista com corpo feito de goma de mascar.",
  "Marceline": "Rainha dos Vampiros de Hora de Aventura, conhecida pelo baixo em forma de machado e por suas músicas.",
  "Rei Gelado": "Personagem de Hora de Aventura que usa uma coroa mágica, controla gelo e vive num reino congelado.",
  "Princesa de Fogo": "Personagem de Hora de Aventura com corpo e poderes ligados ao fogo, associada ao Reino de Fogo.",
  "BMO": "Pequeno aparelho vivo de Hora de Aventura, com aparência de videogame portátil, que participa da rotina da casa da árvore.",
  "NEPTR": "Robô de Hora de Aventura com partes de micro-ondas, criado para arremessar tortas e participar de brincadeiras.",
  "Lemongrab": "Personagem de Hora de Aventura com cabeça de limão, conhecido por sua rigidez e pelos gritos de desaprovação.",
  "Princesa Caroço": "Personagem roxa e flutuante de Hora de Aventura, com corpo de nuvem irregular e comportamento dramático.",
  "Rei de Ooo": "Personagem de Hora de Aventura que se apresenta como uma figura real, usando discurso persuasivo e oportunismo.",
  "Ricardio": "Personagem de Hora de Aventura com forma de coração e rosto humano, que aparenta elegância, mas age como vilão.",
  "Fionna": "Aventureira humana de gorro com orelhas de coelho, apresentada em Hora de Aventura e protagonista de uma série derivada.",
  "Cake": "Gata mágica que acompanha Fionna, capaz de esticar o corpo e mudar de forma.",
  "Gumball": "Gato azul da família Watterson, protagonista de O Incrível Mundo de Gumball, conhecido por se envolver em confusões.",
  "Darwin": "Peixe laranja com pernas, integrante da família Watterson e melhor amigo do protagonista.",
  "Nicole Watterson": "Mãe da família de O Incrível Mundo de Gumball, uma gata azul muito responsável, competitiva e habilidosa.",
  "Richard Watterson": "Pai da família de O Incrível Mundo de Gumball, um coelho rosa conhecido pela preguiça e por suas ideias atrapalhadas.",
  "Anais Watterson": "Irmã mais nova da família Watterson, uma coelha rosa muito inteligente para sua idade.",
  "Penny Fitzgerald": "Colega de escola e interesse amoroso de Gumball, uma criatura mágica capaz de mudar de forma de acordo com suas emoções.",
  "Carrie Krueger": "Fantasma de estilo gótico de O Incrível Mundo de Gumball, capaz de atravessar objetos e possuir pessoas.",
  "Tina Rex": "Tiranossauro que estuda em Elmore, de grande força física e comportamento intimidador.",
  "Tobias Wilson": "Colega de Gumball com corpo colorido, que gosta de se exibir e de se apresentar como esportista.",
  "Banana Joe": "Colega de escola em forma de banana, conhecido por fazer piadas e brincadeiras.",
  "Rob": "Personagem de O Incrível Mundo de Gumball que se torna um antagonista importante e tem ligação com o Vazio.",
  "Diretor Brown": "Diretor da escola de Elmore, uma criatura peluda que lida com as confusões dos estudantes.",
  "Sarah G. Lato": "Colega de Gumball em forma de sorvete, fã de histórias e desenhos que costuma criar narrativas sobre os amigos.",
  "Alan Keane": "Colega de Elmore em forma de balão, conhecido por sua gentileza e atitude otimista.",
  "Mordecai": "Gaio azul de Apenas um Show que trabalha num parque e costuma se envolver em aventuras absurdas com seu melhor amigo.",
  "Rigby": "Guaxinim de Apenas um Show, funcionário do parque, impulsivo e pouco interessado em trabalhar.",
  "Benson": "Máquina de chicletes viva de Apenas um Show, gerente do parque, conhecida por cobrar trabalho dos funcionários.",
  "Pairulito": "Personagem de cabeça redonda de Apenas um Show, de comportamento gentil e inocente, ligado à família proprietária do parque.",
  "Musculoso": "Funcionário verde do parque em Apenas um Show, conhecido pelas provocações e piadas sobre sua mãe.",
  "Fantasmão": "Pequeno fantasma branco com uma mão sobre a cabeça, amigo próximo de Musculoso e funcionário do parque.",
  "Margaret": "Personagem de Apenas um Show, uma ave vermelha que trabalha numa cafeteria e tem uma relação importante com Mordecai.",
  "Eileen": "Personagem de Apenas um Show, uma toupeira de óculos que trabalha na cafeteria e se aproxima de Rigby.",
  "Skips": "Yeti imortal de Apenas um Show, funcionário do parque com grande experiência e conhecimento de fenômenos sobrenaturais.",
  "Saltitão": "Primo de Skips em Apenas um Show, conhecido por contar piadas e por sua ligação com aventuras sobrenaturais.",
  "CJ": "Personagem de Apenas um Show com aparência de nuvem, que pode se tornar tempestuosa quando fica irritada.",
  "Starla": "Personagem de Apenas um Show, companheira de Musculoso, conhecida por sua personalidade intensa."
};
Object.assign(window.HINTS.cotidiano, {
  'Pente': 'Objeto com dentes usado para desembaraçar e organizar os fios de cabelo.',
  'Porta': 'Estrutura que abre e fecha uma passagem, permitindo controlar o acesso entre ambientes.'
});
Object.assign(window.HINTS.filmes, {
  'Romeu e Julieta': 'História adaptada para o cinema sobre dois jovens apaixonados de famílias rivais, baseada na peça de William Shakespeare.',
  'Duna': 'Ficção científica sobre disputas políticas e religiosas em torno de Arrakis, planeta desértico onde se encontra uma substância extremamente valiosa.'
});
Object.assign(window.HINTS.bleach, {
  'Mayuri': 'Mayuri Kurotsuchi é o capitão da Décima Segunda Divisão, um cientista que utiliza pesquisas, modificações corporais e invenções em combate.',
  'Soi Fon': 'Capitã da Segunda Divisão e comandante das forças especiais, especializada em movimentação rápida e ataques de precisão.'
});
Object.assign(window.HINTS.db, {
  'Nave espacial': 'Veículo tecnológico usado para viajar entre planetas, transportar guerreiros e realizar jornadas fora da Terra.',
  'Espada Z': 'Espada muito pesada ligada ao mundo dos Kaioshins, utilizada por Gohan em seu treinamento.',
  'Câmara de recuperação': 'Equipamento médico que envolve o paciente em um tanque para tratar ferimentos e ajudar na recuperação física.',
  'Máquina do tempo': 'Veículo desenvolvido por Bulma que permite viajar entre épocas e tem papel central nas aventuras de Trunks do futuro.'
});
delete window.HINTS.desenhos.Skips;
window.HINTS.desenhos['Saltitão'] = 'Yeti imortal de Apenas um Show, chamado Skips em inglês. Trabalha no parque e tem grande experiência com fenômenos sobrenaturais.';
window.HINTS.desenhos['Zoa'] = 'Primo de Saltitão em Apenas um Show, chamado Quips em inglês. É um yeti conhecido por insistir em contar piadas ruins.';

Object.assign(window.HINTS,{
  "clash-royale": {
    "Cavaleiro": "Carta de tropa terrestre resistente, armada com espada, que ataca um inimigo por vez.",
    "Valquíria": "Carta de tropa terrestre com machado que gira para atingir vários inimigos ao redor.",
    "Mini P.E.K.K.A": "Tropa robótica compacta com espada, conhecida pelo alto dano contra uma única unidade.",
    "P.E.K.K.A": "Tropa pesada de armadura roxa e espada, com ataques lentos e muito fortes.",
    "Príncipe": "Cavaleiro montado que ganha velocidade e causa dano extra ao atingir o alvo após correr.",
    "Príncipe das Trevas": "Cavaleiro montado com escudo e maça, capaz de atingir uma área ao investir.",
    "Mega Cavaleiro": "Tropa de armadura pesada que entra pulando na arena e pode saltar em direção aos inimigos.",
    "Esqueleto Gigante": "Esqueleto enorme que carrega uma bomba, a qual explode depois que ele é derrotado.",
    "Mago": "Tropa que lança bolas de fogo e atinge grupos de inimigos à distância.",
    "Mago de Gelo": "Tropa que lança ataques gelados e desacelera os inimigos atingidos.",
    "Mago Elétrico": "Tropa que aparece com um choque e dispara raios capazes de interromper ataques.",
    "Dragão Elétrico": "Tropa voadora que lança relâmpagos que saltam entre inimigos próximos.",
    "Bebê Dragão": "Dragão pequeno que voa e cospe fogo em área, sendo útil contra grupos.",
    "Dragão Infernal": "Dragão voador cujo raio de fogo fica mais forte quanto mais tempo permanece no mesmo alvo.",
    "Golem": "Tropa de pedra muito resistente que explode em pequenas unidades ao ser destruída.",
    "Golem de Gelo": "Tropa barata de gelo que atrai inimigos e desacelera os próximos ao ser derrotada.",
    "Gigante": "Tropa pesada que ignora outras tropas e avança para atacar estruturas.",
    "Gigante Real": "Tropa pesada com canhão que dispara em construções a certa distância.",
    "Gigante Elétrico": "Tropa grande que devolve choques a inimigos que a atacam de perto.",
    "Gigante Goblin": "Tropa grande que carrega dois goblins lanceiros, que atacam enquanto ele avança.",
    "Corredor": "Guerreiro montado num porco que corre para causar dano às estruturas inimigas.",
    "Porcos Reais": "Grupo de porcos que corre em direção às construções e pode ser dividido entre as duas rotas.",
    "Balão": "Unidade voadora que carrega uma bomba e ataca construções por cima.",
    "Barril de Esqueletos": "Barril suspenso por balões que se rompe e solta esqueletos perto do alvo.",
    "Barril de Goblins": "Feitiço que lança um barril até um ponto da arena, onde saem três goblins.",
    "Barril de Bárbaro": "Feitiço que faz um barril rolar pelo chão e liberar um bárbaro ao final.",
    "Goblins": "Pequenos combatentes de ataque corpo a corpo que aparecem em grupo.",
    "Goblins Lanceiros": "Pequenos combatentes que lançam lanças e podem atingir alvos aéreos.",
    "Exército de Esqueletos": "Grande grupo de esqueletos frágeis que vence tropas isoladas pela quantidade.",
    "Guardas": "Grupo pequeno de esqueletos com escudos que os protegem do primeiro dano.",
    "Mosqueteira": "Tropa com arma de fogo que ataca inimigos terrestres e aéreos à distância.",
    "Três Mosqueteiras": "Carta que coloca três combatentes iguais à Mosqueteira na arena.",
    "Arqueiras": "Dupla de tropas com arcos capaz de atacar alvos terrestres e aéreos.",
    "Arqueiro Mágico": "Tropa que dispara uma flecha perfurante em linha reta, acertando vários alvos.",
    "Tesla": "Construção que se esconde no chão quando não há inimigos e ataca com eletricidade.",
    "Torre Bomba": "Construção que lança bombas em inimigos terrestres e explode ao ser destruída.",
    "Bola de Fogo": "Feitiço de impacto que causa dano instantâneo e empurra tropas próximas.",
    "Veneno": "Feitiço que cria uma área tóxica e causa dano durante alguns segundos.",
    "Flechas": "Feitiço que lança várias flechas sobre uma região e acerta também unidades aéreas.",
    "O Tronco": "Feitiço que rola um tronco pelo chão, atingindo e empurrando tropas terrestres."
  },
  "pokemon": {
    "Pikachu": "Pequeno Pokémon elétrico de bochechas vermelhas, conhecido por armazenar e lançar eletricidade.",
    "Raichu": "Evolução de Pikachu, um Pokémon elétrico maior com cauda longa e corpo alaranjado.",
    "Charmander": "Inicial de Kanto com corpo de lagarto e uma chama na ponta da cauda.",
    "Cyndaquil": "Inicial de Johto semelhante a um pequeno mamífero, com chamas que saem das costas.",
    "Squirtle": "Inicial de Kanto semelhante a uma tartaruga azul, que usa água e seu casco para se defender.",
    "Totodile": "Inicial de Johto parecido com um pequeno crocodilo azul, de mandíbulas fortes.",
    "Bulbasaur": "Inicial de Kanto com um bulbo nas costas, que cresce enquanto ele se desenvolve.",
    "Chikorita": "Inicial de Johto verde e quadrúpede, com uma grande folha sobre a cabeça.",
    "Charizard": "Evolução final de Charmander, que voa e usa ataques de fogo.",
    "Dragonite": "Pokémon do tipo Dragão e Voador que evolui de Dragonair e pode voar longas distâncias.",
    "Gengar": "Pokémon fantasma roxo que se esconde nas sombras e tem um sorriso largo.",
    "Mimikyu": "Pokémon fantasma que se esconde sob uma fantasia parecida com Pikachu.",
    "Lucario": "Pokémon Lutador e Aço que percebe a aura dos seres vivos.",
    "Zoroark": "Pokémon Sombrio semelhante a uma raposa, capaz de criar ilusões para enganar outros.",
    "Garchomp": "Pokémon Dragão e Terrestre com aparência de tubarão, conhecido por sua velocidade.",
    "Salamence": "Pokémon Dragão e Voador com grandes asas vermelhas, evolução de Shelgon.",
    "Metagross": "Pokémon Aço e Psíquico de quatro pernas, formado pela união de outros Pokémon metálicos.",
    "Aggron": "Pokémon Aço e Pedra com armadura robusta, evolução de Lairon.",
    "Greninja": "Pokémon Água e Sombrio de aparência ninja, evolução final de Froakie.",
    "Inteleon": "Pokémon Água de aparência elegante, evolução final de Sobble, que ataca como um agente secreto.",
    "Incineroar": "Pokémon Fogo e Sombrio que usa golpes inspirados em luta livre.",
    "Cinderace": "Pokémon Fogo que usa chutes e movimentos inspirados em futebol.",
    "Gardevoir": "Pokémon Psíquico e Fada que protege seu treinador e evolui de Kirlia.",
    "Gallade": "Pokémon Psíquico e Lutador que evolui de Kirlia macho com uma Pedra do Amanhecer.",
    "Snorlax": "Pokémon Normal corpulento que dorme por longos períodos e come grandes quantidades.",
    "Slaking": "Pokémon Normal muito forte que passa bastante tempo deitado sem fazer nada.",
    "Magikarp": "Peixe do tipo Água conhecido por saltar e evoluir para Gyarados.",
    "Feebas": "Peixe raro do tipo Água que pode evoluir para Milotic.",
    "Gyarados": "Pokémon Água e Voador que evolui de Magikarp, conhecido por sua agressividade.",
    "Milotic": "Pokémon Água que evolui de Feebas e é lembrado por sua aparência elegante.",
    "Ninetales": "Raposa de nove caudas que evolui de Vulpix com uma Pedra de Fogo.",
    "Arcanine": "Pokémon semelhante a um grande cão, que evolui de Growlithe com uma Pedra de Fogo.",
    "Lapras": "Pokémon Água e Gelo de aparência semelhante a um plesiossauro, usado para transportar pessoas pelo mar.",
    "Aurorus": "Pokémon Rocha e Gelo com pescoço longo, revivido de um fóssil da região de Kalos.",
    "Umbreon": "Pokémon Sombrio de anéis amarelos, ligado à evolução de Eevee durante a noite.",
    "Espeon": "Pokémon Psíquico lilás que evolui de Eevee durante o dia.",
    "Zacian": "Pokémon lendário que porta uma espada em sua forma coroada.",
    "Zamazenta": "Pokémon lendário que porta um escudo em sua forma coroada.",
    "Mew": "Pokémon mítico raro e pequeno, associado ao material genético de muitas espécies.",
    "Mewtwo": "Pokémon criado por experimentos genéticos com o DNA de Mew, de enorme poder psíquico."
  },
  "animes": {
    "Monkey D. Luffy": "Protagonista de One Piece, capitão dos Chapéus de Palha, cujo corpo elástico e vontade de liberdade marcam sua jornada.",
    "Roronoa Zoro": "Espadachim de One Piece que luta com três espadas e busca se tornar o melhor do mundo.",
    "Sanji": "Cozinheiro de One Piece especializado em chutes, que sonha em encontrar o All Blue.",
    "Nami": "Navegadora de One Piece que conhece mapas e meteorologia e guia o navio do bando.",
    "Eren Yeager": "Personagem central de Attack on Titan cuja relação com os Titãs muda o rumo da história.",
    "Mikasa Ackerman": "Soldado extremamente habilidosa que protege pessoas próximas e utiliza equipamento de manobra tridimensional.",
    "Levi Ackerman": "Capitão de Attack on Titan conhecido pelo combate preciso e grande habilidade contra Titãs.",
    "Erwin Smith": "Comandante da Tropa de Exploração que conduz expedições e toma decisões estratégicas difíceis.",
    "Light Yagami": "Estudante que encontra um caderno capaz de matar quem tem o nome escrito nele.",
    "L": "Detetive brilhante e excêntrico que tenta descobrir a identidade do assassino conhecido como Kira.",
    "Ryuk": "Deus da morte que deixa um caderno no mundo humano e se diverte observando suas consequências.",
    "Rem": "Deusa da morte que se envolve com Misa Amane e tenta protegê-la.",
    "Edward Elric": "Protagonista de Fullmetal Alchemist que usa alquimia e próteses mecânicas depois de uma tentativa proibida de transmutação.",
    "Alphonse Elric": "Irmão de Edward em Fullmetal Alchemist, cuja alma está presa a uma armadura.",
    "Roy Mustang": "Coronel conhecido como Alquimista das Chamas, que produz ataques de fogo por alquimia.",
    "Riza Hawkeye": "Oficial e atiradora de precisão que trabalha ao lado de Roy Mustang.",
    "Saitama": "Herói que costuma derrotar inimigos com um soco e sente falta de desafios.",
    "Genos": "Ciborgue que busca ficar mais forte e escolhe Saitama como mestre.",
    "Garou": "Artista marcial chamado de Caçador de Heróis, que desafia os membros da associação.",
    "King": "Homem celebrado como um herói invencível apesar de não ter os poderes que as pessoas imaginam.",
    "Denji": "Jovem que se funde ao demônio motosserra e combate demônios com lâminas que saem do corpo.",
    "Power": "Possessa de sangue que trabalha como caçadora e é conhecida pela impulsividade.",
    "Makima": "Figura de autoridade que dirige caçadores de demônios e exerce grande influência sobre Denji.",
    "Aki Hayakawa": "Caçador de demônios disciplinado que utiliza contratos sobrenaturais e divide a casa com Denji e Power.",
    "Izuku Midoriya": "Jovem chamado Deku que herda um poder especial e deseja se tornar um grande herói.",
    "Katsuki Bakugo": "Colega de Deku com uma individualidade que produz explosões a partir das mãos.",
    "All Might": "Símbolo da Paz que foi o principal herói do Japão e se torna mentor de Deku.",
    "Endeavor": "Herói de fogo que busca superar All Might e assume a posição de herói número um.",
    "Loid Forger": "Espião que assume a identidade de pai e psiquiatra numa missão de infiltração.",
    "Yor Forger": "Assassina profissional que mantém uma identidade civil enquanto finge ser esposa de Loid.",
    "Anya Forger": "Criança capaz de ler pensamentos, adotada por Loid para ajudar numa missão.",
    "Bond Forger": "Cão branco da família Forger que consegue ter visões do futuro.",
    "Spike Spiegel": "Protagonista de Cowboy Bebop, ex-integrante de uma organização criminosa e habilidoso lutador.",
    "Jet Black": "Ex-policial que comanda a nave Bebop e caça recompensas ao lado de Spike.",
    "Faye Valentine": "Caçadora de recompensas de passado misterioso e grande habilidade para escapar de enrascadas.",
    "Edward Wong": "Jovem hacker de Cowboy Bebop conhecida como Ed, que ajuda a equipe com tecnologia.",
    "Jotaro Kujo": "Protagonista de Stardust Crusaders que controla Star Platinum, um Stand de combate poderoso.",
    "DIO": "Vilão vampiro de JoJo que controla The World e pode parar o tempo.",
    "Joseph Joestar": "Personagem de JoJo conhecido pela astúcia e pela técnica de Hamon, pai de Josuke.",
    "Josuke Higashikata": "Protagonista de Diamond is Unbreakable cujo Stand Crazy Diamond pode consertar objetos e curar outras pessoas."
  },
  "avatar": {
    "Aang": "Último dominador de ar de sua época, protagonista de A Lenda de Aang, que precisa aprender os quatro elementos.",
    "Korra": "Avatar da geração seguinte, protagonista de A Lenda de Korra, criada na Tribo da Água do Sul.",
    "Katara": "Dominadora de água do grupo de Aang, que aprende técnicas de cura e participa da Guerra dos Cem Anos.",
    "Kya": "Filha de Aang e Katara em A Lenda de Korra, dominadora de água e curandeira.",
    "Sokka": "Irmão de Katara e estrategista do grupo de Aang, que luta com um bumerangue e uma espada.",
    "Asami Sato": "Engenheira e empresária de A Lenda de Korra que luta sem dobra e utiliza tecnologia.",
    "Zuko": "Príncipe banido da Nação do Fogo que aprende a dominar fogo e procura seu próprio caminho.",
    "Tio Iroh": "General aposentado e mestre da dobra de fogo, que aconselha o sobrinho Zuko.",
    "Azula": "Princesa habilidosa que produz chamas azuis e persegue Aang e seus aliados.",
    "Senhor do Fogo Ozai": "Governante autoritário da Nação do Fogo durante grande parte de A Lenda de Aang.",
    "Toph Beifong": "Domina terra sem enxergar e inventa a dobra de metal em A Lenda de Aang.",
    "Lin Beifong": "Filha de Toph e chefe da polícia da Cidade República, especialista em dobra de metal.",
    "Suyin Beifong": "Filha de Toph que funda Zaofu, cidade famosa por seus dominadores de metal.",
    "Kuvira": "Antiga integrante da guarda de Zaofu que lidera um movimento de unificação do Reino da Terra.",
    "Mako": "Dominador de fogo e relâmpago que luta no esporte pró-dobra e atua ao lado de Korra.",
    "Bolin": "Dominador de terra que aprende dobra de lava e é irmão de Mako.",
    "Tenzin": "Filho de Aang e Katara que ensina dobra de ar à Avatar Korra.",
    "Jinora": "Filha mais velha de Tenzin, dominadora de ar de grande sensibilidade espiritual.",
    "Appa": "Bisão voador de seis pernas que transporta Aang e seus amigos.",
    "Naga": "Cão-urso-polar que acompanha e transporta Korra em suas aventuras.",
    "Momo": "Lêmure alado que vive com Aang e seus amigos.",
    "Pabu": "Furão-de-fogo que acompanha Bolin e os integrantes da equipe de Korra.",
    "Avatar Roku": "Avatar anterior a Aang, originário da Nação do Fogo e ligado ao passado de Sozin.",
    "Avatar Kyoshi": "Avatar originária do Reino da Terra, conhecida por sua longa vida e por formar a Ilha Kyoshi.",
    "Avatar Wan": "Primeiro Avatar, que aprende a usar os elementos e se une a um espírito da luz.",
    "Raava": "Espírito da luz que se funde a Wan e passa a fazer parte do ciclo de reencarnação dos Avatares.",
    "Vaatu": "Espírito das trevas e do caos que se opõe a Raava em A Lenda de Korra.",
    "Koh": "Espírito que rouba o rosto de quem demonstra emoções diante dele no Mundo Espiritual.",
    "Zaheer": "Líder da Lótus Vermelha que recebe a capacidade de dominar ar.",
    "Ghazan": "Dominador de terra da Lótus Vermelha capaz de transformar rocha em lava.",
    "Ming-Hua": "Dominadora de água que cria braços com água para lutar.",
    "P'Li": "Dominadora de fogo que usa combustão para produzir explosões à distância.",
    "Amon": "Líder mascarado dos Igualitários que afirma conseguir retirar a dobra das pessoas.",
    "Tarrlok": "Político da Cidade República que usa dobra de sangue e é irmão de Amon.",
    "Unalaq": "Tio de Korra, chefe da Tribo da Água do Norte e importante antagonista espiritual.",
    "Tonraq": "Pai de Korra, originário da Tribo da Água do Norte e líder no Sul.",
    "Sozin": "Senhor do Fogo que dá início à Guerra dos Cem Anos ao tentar expandir a Nação do Fogo.",
    "Azulon": "Filho de Sozin e pai de Ozai, que governa a Nação do Fogo durante parte da Guerra dos Cem Anos.",
    "Lótus Branco": "Sociedade que reúne membros de várias nações para preservar conhecimento e equilíbrio.",
    "Lótus Vermelha": "Grupo que rompe com a Lótus Branco e busca derrubar estruturas de poder."
  }
});
