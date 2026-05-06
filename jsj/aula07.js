const divListaFilmes = document.querySelector("#lista_filmes")
const btnTerror = document.querySelector("#btn_terror")
const btnAção = document.querySelector("#btn_ação")

const filmes = [
  // --- TERROR ---
{ titulo: "O Sussurro da Meia-Noite", genero: "Terror", sinopse: "Um investigador paranormal fica preso em um asilo abandonado onde o silêncio é mortal." },
{ titulo: "Herança Maldita", genero: "Terror", sinopse: "Uma família descobre que sua nova mansão foi construída sobre um antigo cemitério ocultista." },
{ titulo: "Reflexos do Medo", genero: "Terror", sinopse: "Espelhos em uma cidade pequena começam a mostrar versões distorcidas e violentas da realidade." },
{ titulo: "A Colheita Escura", genero: "Terror", sinopse: "Durante um eclipse, os espantalhos de uma fazenda ganham vida com uma fome insaciável." },
{ titulo: "O Quarto 404", genero: "Terror", sinopse: "Um hotel digital hospeda almas perdidas que tentam escapar através de falhas no sistema." },
{ titulo: "Sob a Pele", genero: "Terror", sinopse: "Uma criatura metamorfa assume a identidade de moradores de uma vila isolada na neve." },
{ titulo: "O Ritual da Floresta", genero: "Terror", sinopse: "Amigos em acampamento despertam uma entidade milenar ao quebrar um totem sagrado." },
{ titulo: "Boneca de Porcelana", genero: "Terror", sinopse: "Um brinquedo antigo passa de geração em geração, trazendo tragédia para quem o possui." },
{ titulo: "Sinfonia Fúnebre", genero: "Terror", sinopse: "Um maestro compõe uma música que, ao ser ouvida, induz paralisia e visões aterrorizantes." },
{ titulo: "O Poço Profundo", genero: "Terror", sinopse: "Mineradores encontram uma porta de ferro a quilômetros de profundidade que nunca deveria ser aberta." },

// --- Comedia ---
{ titulo: "Estagiários por Acaso", genero: "Comédia", sinopse: "Dois aposentados decidem trabalhar em uma startup de tecnologia dominada pela Geração Z." },
{ titulo: "Casamento nas Nuvens", genero: "Comédia", sinopse: "Uma cerimônia em um avião sai do controle quando o piloto decide fazer paraquedismo." },
{ titulo: "Meu Vizinho é um Alien", genero: "Comédia", sinopse: "Um homem tenta provar que seu vizinho estranho é um extraterrestre, mas ele é apenas excêntrico." },
{ titulo: "A Dieta Mágica", genero: "Comédia", sinopse: "Uma pílula faz com que uma mulher entenda o que os animais pensam sobre seus hábitos alimentares." },
{ titulo: "Férias em Marte", genero: "Comédia", sinopse: "A primeira excursão turística ao espaço vira uma bagunça quando esquecem o guia turístico." },
{ titulo: "Cupido Desastrado", genero: "Comédia", sinopse: "Um anjo atrapalhado tenta unir casais, mas acaba criando rivalidades hilárias." },
{ titulo: "O Golpe do Buffet", genero: "Comédia", sinopse: "Três amigos tentam comer de graça em todos os casamentos da cidade em um único fim de semana." },
{ titulo: "Detetive de Pets", genero: "Comédia", sinopse: "Um investigador especializado em hamsters desaparecidos se envolve em uma conspiração internacional." },
{ titulo: "Troca de Corpos no Tinder", genero: "Comédia", sinopse: "Dois desconhecidos trocam de corpo após um 'match' e precisam viver a vida um do outro." },
{ titulo: "Vovó Ninja", genero: "Comédia", sinopse: "Uma senhora de 80 anos revela ser uma espiã aposentada quando sua família é sequestrada." },

// --- Ação ---
{ titulo: "Protocolo de Resgate", genero: "Ação", sinopse: "Um ex-agente de elite invade uma fortaleza tecnológica para recuperar um HD vital." },
{ titulo: "Velocidade Terminal", genero: "Ação", sinopse: "Corredores de rua ilegais são forçados a transportar cargas perigosas para o governo." },
{ titulo: "Cercado", genero: "Ação", sinopse: "Um xerife de cidade pequena defende sua delegacia contra um exército de mercenários." },
{ titulo: "Impacto Iminente", genero: "Ação", sinopse: "Uma equipe de demolição precisa desativar uma bomba em um arranha-céu em chamas." },
{ titulo: "Vingança de Sangue", genero: "Ação", sinopse: "Após anos escondido, um mestre de artes marciais volta para desmantelar um cartel." },
{ titulo: "O Último Guarda", genero: "Ação", sinopse: "Um soldado protege a última reserva de água potável em um futuro pós-apocalíptico." },
{ titulo: "Fuga de Tóquio", genero: "Ação", sinopse: "Um piloto de fuga precisa atravessar a cidade durante um blackout total causado por hackers." },
{ titulo: "Linha de Frente", genero: "Ação", sinopse: "Policiais disfarçados tentam interceptar uma venda de armas de destruição em massa." },
{ titulo: "Justiça Cega", genero: "Ação", sinopse: "Um vigilante noturno usa tecnologia de sonar para combater o crime organizado." },
{ titulo: "Alvo Móvel", genero: "Ação", sinopse: "Um assassino profissional se torna a caça após se recusar a completar um serviço antiético." },

// --- ANIMAÇÃO ---
{ titulo: "O Reino dos Sonhos", genero: "Animação", sinopse: "Uma garotinha viaja para o lugar onde os sonhos são fabricados para salvar seu sono." },
{ titulo: "Robô com Sentimentos", genero: "Animação", sinopse: "Um pequeno drone de entrega decide que quer ser um artista em um mundo de máquinas." },
{ titulo: "A Cidade dos Insetos", genero: "Animação", sinopse: "Uma formiga rebelde lidera uma revolução contra o regime opressor dos gafanhotos." },
{ titulo: "Nuvens de Algodão", genero: "Animação", sinopse: "Criaturas mágicas que vivem no céu precisam impedir que uma tempestade eterna cubra o mundo." },
{ titulo: "Dragões de Papel", genero: "Animação", sinopse: "Origamis ganham vida e precisam proteger sua biblioteca de um incêndio iminente." },
{ titulo: "Escola de Monstros", genero: "Animação", sinopse: "Um monstro que não assusta ninguém tenta encontrar seu talento secreto na música." },
{ titulo: "O Gato Astronauta", genero: "Animação", sinopse: "Um felino curioso acidentalmente decola em uma nave e explora o sistema solar." },
{ titulo: "A Floresta Colorida", genero: "Animação", sinopse: "Quando as cores do mundo começam a sumir, um esquilo precisa encontrar o prisma místico." },
{ titulo: "Brinquedos em Fuga", genero: "Animação", sinopse: "Brinquedos esquecidos em um sótão partem em uma jornada para encontrar seus donos." },
{ titulo: "Lendas do Oceano", genero: "Animação", sinopse: "Um peixe pequeno faz amizade com uma baleia gigante para encontrar uma cidade perdida." },

// --- AVENTURA ---
{ titulo: "O Tesouro Perdido de Incas", genero: "Aventura", sinopse: "Arqueólogos seguem pistas em templos escondidos para encontrar uma mítica cidade de ouro." },
{ titulo: "Viagem ao Centro da Ilha", genero: "Aventura", sinopse: "Exploradores descobrem um ecossistema pré-histórico no interior de uma ilha vulcânica." },
{ titulo: "A Bússola de Ouro", genero: "Aventura", sinopse: "Um jovem recebe um artefato que aponta para o que o coração mais deseja, mas atrai perigos." },
{ titulo: "Navegantes do Deserto", genero: "Aventura", sinopse: "Um grupo de nômades atravessa um mar de areia infinito em busca de um oásis lendário." },
{ titulo: "O Mistério da Montanha", genero: "Aventura", sinopse: "Alpinistas encontram ruínas de uma civilização avançada no topo do Himalaia." },
{ titulo: "Portal das Estrelas", genero: "Aventura", sinopse: "Um portal antigo é ativado em uma caverna, levando aventureiros para outro planeta." },
{ titulo: "Crônicas da Espada", genero: "Aventura", sinopse: "Um jovem camponês deve levar uma espada sagrada até o vulcão onde foi forjada." },
{ titulo: "O Segredo do Galeão", genero: "Aventura", sinopse: "Mergulhadores encontram um navio pirata que guarda não ouro, mas um mapa para a imortalidade." },
{ titulo: "Exploradores do Tempo", genero: "Aventura", sinopse: "Cientistas viajam para o passado para observar a construção das pirâmides e ficam presos." },
{ titulo: "A Travessia Selvagem", genero: "Aventura", sinopse: "Dois irmãos precisam cruzar uma floresta mágica para encontrar a cura para seu pai." }
]
function filtrarFilmesTerror() {
    const filmesTerror = filmes.filter((filme) => {
        return filme.genero === "Terror"
    })
    filmesTerror.forEach((filme) => {
        divListaFilmes.innerHTML += `<li><b>${filme.titulo}</b> <b> ${filme.sinopse} <br> <i> 
        ${filme.genero} </i></li>`
    })
    
}

function filtrarFilmesaAção() {
    const filmesAção = filmes.filter((filme) => {
        return filme.genero === "Ação"
    })
    filmesAção.forEach((filme) => {
        divListaFilmes.innerHTML += `<li><b>${filme.titulo}</b> <b> ${filme.sinopse} <br> <i> 
        ${filme.genero} </i></li>`
    })
    
}



btnAção.addEventListener("click",filtrarFilmesaAção)
btnTerror.addEventListener("click", filtrarFilmesTerror)







