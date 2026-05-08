import type { TrainingModule } from '../training-content'

export const trainingModulesPT: TrainingModule[] = [
  {
    id: 1,
    slug: 'what-this-training-is-about',
    title: 'Sobre Esta Formação',
    subtitle: 'O que é isto. Porquê este formato. Quem pode beneficiar.',
    duration: '10 min leitura',
    sections: [
      {
        title: 'Objetivo',
        content: `Esta formação existe para ensinar as competências, princípios e hábitos que separam os apostadores recreativos daqueles que tratam as apostas como uma disciplina séria. Não promete riqueza. Não garante sucesso. O que oferece é um enquadramento—construído sobre as mesmas bases usadas por apostadores profissionais e sindicatos em todo o mundo—para pensar com clareza, agir com disciplina e medir o desempenho honestamente.`
      },
      {
        title: 'Para Quem É Isto',
        content: `Este material é para pessoas que querem apostar com intenção. Isso pode significar um estudante curioso sobre a estrutura de um mercado, um apostador recreativo que quer parar de adivinhar, ou alguém que considera perseguir apostas como um esforço a sério. Não é necessário conhecimento prévio. Não é necessária experiência matemática avançada. Apenas disposição para aprender.`
      },
      {
        title: 'O Que Isto Não É',
        content: `Isto não é um programa para enriquecer. Não há atalhos. Não há sistemas garantidos. Qualquer pessoa que prometa lucros consistentes e fáceis ou está a mentir ou não compreende os mercados. A realidade das apostas é a seguinte: a maioria perde. Aqueles que ganham fazem-no através de trabalho sustentado, análise disciplinada e aceitação da variância. Esta formação não ignora esse facto—ensina-o.`
      },
      {
        title: 'Porquê o Formato',
        content: `Este documento foi concebido para ser lido do início ao fim pelo menos uma vez. Mais tarde, pode ser revisitado por secção conforme necessário. O conhecimento é sequencial. Secções anteriores informam secções posteriores. Saltar à frente frequentemente significa perder contexto.`
      },
      {
        title: 'Os Princípios Fundamentais',
        content: `Há três ideias que sustentam tudo o resto. Primeira: valor é tudo. Se não encontrar apostas onde a sua estimativa de probabilidade excede a probabilidade implícita nas odds, não tem vantagem. Segunda: bankroll é sobrevivência. Sem uma reserva de capital separada e uma estratégia de staking, a variância irá destruí-lo antes que a competência importe. Terceira: registos revelam a verdade. A maioria dos apostadores lembra-se dos ganhos e esquece as perdas. Um diário de apostas força clareza.`
      },
      {
        title: 'O Que Vai Aprender',
        content: `Esta formação cobre como as casas de apostas operam, como as odds codificam probabilidade e margem, o que significa valor, como gerir bankroll, e como construir uma rotina de apostas repetível. Depois vai fundo em desportos específicos—futebol, corridas de cavalos, ténis, basquetebol, hóquei no gelo, basebol, futebol americano—e termina com tipos de apostas, registos, psicologia, e jogo responsável.`
      },
      {
        title: 'Antes de Começar',
        content: `Comprometa-se com isto. Dedique tempo todos os dias ou semanas para ler, rever e praticar. Mantenha um caderno ou documento aberto enquanto trabalha nisto. Tome notas. Escreva perguntas. As melhores perceções vêm frequentemente da reflexão, não apenas da leitura.`
      }
    ]
  },
  {
    id: 2,
    slug: 'how-bookmakers-work',
    title: 'Como Funcionam as Casas de Apostas, Exchanges e Mercados',
    subtitle: 'Compreender a contraparte. A estrutura dos mercados de apostas. O papel da margem e eficiência.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'O Papel da Casa de Apostas',
        content: `Uma casa de apostas é uma empresa que oferece odds sobre eventos e aceita apostas a essas odds. Em troca de aceitar risco, a casa de apostas constrói uma margem de lucro na estrutura de preços. Este é um negócio. O objetivo é lucrar independentemente dos resultados.`
      },
      {
        title: 'Como As Casas de Apostas Estabelecem Odds',
        content: `As casas de apostas começam com um modelo interno que estima a probabilidade real de cada resultado. Depois aplicam uma margem—também chamada overround, vigorish, ou juice—a cada lado. Isto garante que as probabilidades implícitas dos seus preços somam mais de 100 por cento. A diferença é o seu lucro teórico.`
      },
      {
        title: 'Margem Explicada',
        content: `Num mercado perfeitamente justo, as probabilidades implícitas somariam exatamente 100 por cento. Na realidade, as casas de apostas definem-nas para somar mais. Se um evento tem dois resultados igualmente prováveis, o preço justo seria 2.00 cada. Uma casa de apostas pode oferecer 1.91 cada. Isso é uma margem de aproximadamente 4.7 por cento. A margem é o seu custo por apostar. Quanto mais baixa, melhor para si.`
      },
      {
        title: 'O Mercado Como Máquina de Preços',
        content: `Pense nas casas de apostas como entidades de mercado. Quando dinheiro flui numa direção, o preço ajusta-se. Se muitas pessoas apoiam uma equipa, a odd para essa equipa encurta e a outra alonga. Isto acontece em tempo real. O mercado processa informação—lesões, notícias, sentimento público, atividade de apostas sharp—e responde com ajustes de preço.`
      },
      {
        title: 'Casas de Apostas Sharp vs Casas de Apostas Soft',
        content: `Algumas casas de apostas acolhem apostadores sharp. Outras não. Casas de apostas sharp—como Pinnacle—oferecem margens baixas e limites altos, confiando no volume em vez de restringir vencedores. Casas de apostas soft—tipicamente de retalho ou orientadas para recreativo—oferecem margens mais altas, promoções, e são rápidas a limitar ou banir apostadores vencedores. Conhecer a diferença ajuda-o a gerir onde coloca apostas e porquê.`
      },
      {
        title: 'Exchanges de Apostas',
        content: `Uma exchange opera diferentemente. Em vez de apostar contra uma casa de apostas, aposta contra outros utilizadores. A exchange cobra uma pequena comissão sobre os ganhos. Isto cria um ambiente peer-to-peer onde os preços de mercado podem ser mais próximos do justo—mas a liquidez varia.`
      },
      {
        title: 'A Linha de Fecho',
        content: `A linha de fecho é o preço final disponível antes de um evento começar. Como incorpora toda a informação e atividade de apostas, é frequentemente a representação mais eficiente da verdadeira probabilidade. Bater a linha de fecho de forma consistente é um indicador forte de vantagem a longo prazo.`
      },
      {
        title: 'Eficiência de Mercado',
        content: `Os mercados de apostas não são perfeitamente eficientes, mas estão próximos. Desportos populares, janelas de grandes jogos, e ligas convencionais tendem a ser altamente eficientes. Mercados mais pequenos, jogos de ligas inferiores, e eventos com menor liquidez são mais propensos a erros de preço. A sua vantagem tipicamente encontra-se nestas lacunas.`
      }
    ]
  },
  {
    id: 3,
    slug: 'odds-probability-pricing',
    title: 'Odds, Probabilidade Implícita e Precificação Justa',
    subtitle: 'A linguagem das odds. A matemática por detrás do preço. A ligação entre odds e probabilidade.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'Formatos de Odds',
        content: `As odds vêm em três formatos principais: decimal, fracionário e americano. Odds decimais são mais comuns na Europa e são as mais fáceis de usar. Multiplica a sua stake pela odd decimal para obter o retorno total. Uma aposta de 10€ a 2.50 retorna 25€.`
      },
      {
        title: 'Probabilidade Implícita',
        content: `Cada odd implica uma probabilidade. Para converter odds decimais em probabilidade implícita, divida 1 pela odd. Uma odd de 2.00 implica 50 por cento. Uma odd de 4.00 implica 25 por cento. Uma odd de 1.50 implica 66.7 por cento. Este número diz-lhe a frequência mínima com que o resultado deve ocorrer para break even a esse preço.`
      },
      {
        title: 'Preço Justo vs Preço de Mercado',
        content: `Preço justo é a odd que representa a verdadeira probabilidade de um resultado. Se realmente acredita que uma equipa ganha 50 por cento das vezes, a odd justa é 2.00. Se a casa de apostas oferece 2.10, está a oferecer valor. Se oferece 1.85, está a cobrar um prémio.`
      },
      {
        title: 'Calcular Margem',
        content: `Para calcular a margem de uma casa de apostas, some as probabilidades implícitas de todos os resultados. Se um mercado tem dois lados—casa e fora—e as probabilidades implícitas são 52 por cento e 53 por cento, o total é 105 por cento. A margem é 5 por cento.`
      },
      {
        title: 'Remover a Margem',
        content: `Se quiser estimar a verdadeira probabilidade por detrás das odds de uma casa de apostas, pode remover a margem. Divida cada probabilidade implícita pela soma de todas as probabilidades implícitas. Isto dá-lhe uma estimativa aproximada da probabilidade real. É útil ao comparar a sua avaliação com a avaliação derivada do mercado.`
      },
      {
        title: 'Porquê Isto Importa',
        content: `Cada aposta que faz é uma declaração sobre probabilidade. Se não consegue calcular probabilidade implícita e compará-la com a sua própria avaliação, está a apostar às cegas. Compreender esta camada de precificação é a base de tudo o que se segue.`
      }
    ]
  },
  {
    id: 4,
    slug: 'value-expected-value-clv',
    title: 'Valor, Valor Esperado, Line Shopping e Valor da Linha de Fecho',
    subtitle: 'O conceito que define o sucesso nas apostas. Como encontrar e medir valor.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'O Que É Valor',
        content: `Valor existe quando as odds oferecidas são mais altas do que a probabilidade real justifica. Se acredita que uma equipa ganha 50 por cento das vezes e pode apostar nela a 2.20, tem valor. O preço é melhor do que o resultado merece.`
      },
      {
        title: 'Valor Esperado Explicado',
        content: `Valor esperado, ou EV, é o lucro ou perda média que esperaria por unidade apostada ao longo do tempo. Calcula-se multiplicando cada resultado potencial pela sua probabilidade e somando-os. EV positivo significa que a aposta, repetida infinitamente, geraria lucro. EV negativo significa perda ao longo do tempo.`
      },
      {
        title: 'Fórmula de Valor Esperado',
        content: `EV = (Probabilidade de Ganhar × Lucro Potencial) − (Probabilidade de Perder × Stake). Se acha que tem 55 por cento de probabilidade de ganhar uma aposta que paga lucro de 1 unidade e 45 por cento de probabilidade de perder 1 unidade, o seu EV é (0.55 × 1) − (0.45 × 1) = 0.10 unidades por aposta.`
      },
      {
        title: 'Porquê Perseguir EV Positivo',
        content: `Apostas com EV positivo são a única forma de ganhar a longo prazo. Resultados a curto prazo variam. Terá sequências de perdas e sequências de ganhos. Mas se apostar consistentemente em EV positivo, a matemática funciona a seu favor ao longo de milhares de apostas.`
      },
      {
        title: 'Line Shopping',
        content: `Line shopping significa verificar odds em múltiplas casas de apostas para encontrar o melhor preço. O mesmo jogo pode ter preços diferentes em diferentes plataformas. Apostar consistentemente na melhor odd disponível pode ser a diferença entre perda e lucro ao longo de uma temporada.`
      },
      {
        title: 'Valor da Linha de Fecho',
        content: `Valor da linha de fecho, ou CLV, é a diferença entre a odd a que apostou e a linha de fecho. Se apostou a 2.10 e a odd fechou a 1.95, ganhou CLV. CLV positivo consistente é um dos poucos indicadores fiáveis de que está a encontrar valor real, mesmo que os resultados variem a curto prazo.`
      },
      {
        title: 'CLV Como Métrica de Processo',
        content: `CLV não garante lucro em qualquer aposta única. Mas ao longo do tempo, apostadores que consistentemente obtêm odds melhores que o fecho tendem a ganhar dinheiro. É uma forma de medir a qualidade do seu processo separada da aleatoriedade dos resultados.`
      }
    ]
  },
  {
    id: 5,
    slug: 'bankroll-management',
    title: 'Gestão de Bankroll, Staking e Sobrevivência Sob Variância',
    subtitle: 'Proteger capital. Dimensionar apostas. Sobreviver às oscilações.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'O Que É Bankroll',
        content: `Bankroll é a quantia de dinheiro dedicada exclusivamente a apostas. Deve ser dinheiro que pode perder—separado de despesas de vida, poupanças e reservas de emergência. Nunca aposte com dinheiro necessário para outra coisa.`
      },
      {
        title: 'Porquê a Bankroll Importa',
        content: `A variância é real. Mesmo apostadores com vantagem forte experienciam longas sequências de perdas. Se o tamanho da sua aposta for demasiado grande em relação à sua bankroll, uma sequência negativa pode eliminá-lo antes que a vantagem tenha tempo de materializar-se.`
      },
      {
        title: 'Staking Fixo',
        content: `A abordagem mais simples é apostar uma percentagem fixa da sua bankroll—tipicamente entre 1 e 3 por cento por aposta. Isto limita perdas durante maus momentos e permite que a sua bankroll cresça durante bons momentos sem sobreapostar.`
      },
      {
        title: 'Critério de Kelly',
        content: `O Critério de Kelly é uma fórmula para staking ótimo. Diz-lhe que fração da sua bankroll apostar com base na sua vantagem e nas odds oferecidas. Full Kelly é matematicamente ótimo mas agressivo. Muitos apostadores usam Half Kelly ou Quarter Kelly para reduzir variância.`
      },
      {
        title: 'Fórmula de Kelly',
        content: `Kelly % = (bp − q) / b, onde b = odds decimais − 1, p = sua probabilidade estimada de ganhar, q = 1 − p. Se a odd é 2.50 e acha que ganha 45 por cento das vezes: b = 1.5, p = 0.45, q = 0.55. Kelly = (1.5 × 0.45 − 0.55) / 1.5 = 0.117 / 1.5 = 7.8 por cento.`
      },
      {
        title: 'Alavancagem Excessiva e Ruína',
        content: `O maior erro que apostadores cometem é apostar demasiado do seu bankroll de uma vez. Mesmo com vantagem, sequências de perdas acontecem. Se apostar 20 por cento do seu bankroll por jogo, algumas perdas seguidas podem dizimá-lo.`
      },
      {
        title: 'Reconstruir Após Perdas',
        content: `Se a sua bankroll diminuir, reduza o tamanho das apostas proporcionalmente. Não persiga perdas com apostas maiores. A disciplina de reduzir é o que mantém apostadores no jogo tempo suficiente para a variância equilibrar.`
      },
      {
        title: 'Manter Bankroll Separado',
        content: `Use uma conta bancária ou carteira separada para a sua bankroll de apostas. Isto força disciplina. Torna mais fácil rastrear lucro e perda. Previne misturar fundos de apostas com gastos diários.`
      }
    ]
  },
  {
    id: 6,
    slug: 'bettor-workflow',
    title: 'O Fluxo de Trabalho Completo do Apostador',
    subtitle: 'Da lista de jogos à aposta colocada. Uma rotina estruturada para analisar, avaliar e executar apostas.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'A Necessidade de Processo',
        content: `Apostadores bem-sucedidos não apostam por impulso. Seguem uma rotina. Cada aposta passa por um processo de análise, avaliação e decisão. O objetivo é remover emoção, reduzir erros e garantir que cada aposta atende a um padrão claro.`
      },
      {
        title: 'Passo Um: Identificar Jogos',
        content: `Comece com uma lista de jogos próximos no seu desporto alvo. Use um calendário ou feed de jogos. Não tente analisar tudo—concentre-se em ligas ou eventos onde tem conhecimento, dados e capacidade de formar uma opinião.`
      },
      {
        title: 'Passo Dois: Recolher Informação',
        content: `Reúna estatísticas relevantes. Verifique notícias de equipas, atualizações de lesões, relatórios meteorológicos se aplicável, e tendências de forma recente. A qualidade da sua informação afeta diretamente a qualidade da sua avaliação.`
      },
      {
        title: 'Passo Três: Formar a Sua Avaliação',
        content: `Antes de olhar para as odds, escreva a sua avaliação de cada resultado. Qual a probabilidade de cada equipa ganhar? Qual a probabilidade de empate? Esta é a sua linha. É contra isto que vai comparar os preços de mercado.`
      },
      {
        title: 'Passo Quatro: Comparar Com o Mercado',
        content: `Agora olhe para as odds oferecidas. Converta-as em probabilidades implícitas. Compare-as com a sua avaliação. Se a sua probabilidade é maior que a implícita nas odds, há potencial valor.`
      },
      {
        title: 'Passo Cinco: Verificar Múltiplas Casas',
        content: `Nunca aposte na primeira casa de apostas que verificar. Olhe para várias plataformas. Encontre a melhor odd disponível para a aposta que quer fazer. Mesmo pequenas diferenças acumulam ao longo do tempo.`
      },
      {
        title: 'Passo Seis: Confirmar e Colocar',
        content: `Se a aposta atende aos seus critérios—valor por cima do seu limiar, tamanho de stake dentro das regras da sua bankroll—coloque-a. Se não, passe. Disciplina significa dizer não a mais apostas do que aquelas que aceita.`
      },
      {
        title: 'Passo Sete: Registar a Aposta',
        content: `Registe cada aposta imediatamente. Inclua data, evento, mercado, stake, odds tomadas, linha de fecho, e a sua avaliação. Mais tarde vai rever estes dados para avaliar o seu processo.`
      }
    ]
  },
  {
    id: 7,
    slug: 'football-class',
    title: 'Aula de Futebol',
    subtitle: 'Aplicando a estrutura de apostas ao futebol. Mercados, métricas, variância e padrões de preços.',
    duration: '30 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `O futebol é um desporto de baixa pontuação. Os jogos frequentemente terminam com um ou dois golos totais. Pequenos eventos—um penálti, um cartão vermelho—podem alterar dramaticamente os resultados. Esta variância inerente significa que os resultados de apostas a curto prazo são ruidosos.`
      },
      {
        title: 'Mercados de Resultado',
        content: `O mercado mais comum é 1X2: vitória da casa, empate, vitória fora. Devido à alta probabilidade de empates no futebol, este mercado de três vias adiciona complexidade. Handicaps asiáticos removem o empate dando a uma equipa uma vantagem inicial.`
      },
      {
        title: 'Mercados de Golos',
        content: `Over/under de golos é popular. Mercados como mais de 2.5 golos perguntam se haverá três ou mais golos. Linhas mais baixas como 1.5 são menos arriscadas mas pagam menos. Linhas mais altas como 3.5 pagam mais mas acontecem menos frequentemente.`
      },
      {
        title: 'Expected Goals (xG)',
        content: `xG é uma métrica que estima a qualidade das oportunidades de golo. Ajuda a ver além dos resultados. Uma equipa pode ganhar 1-0 enquanto cria menos chances perigosas do que o oponente. xG ajuda a identificar equipas que estão a ter sorte ou azar.`
      },
      {
        title: 'Lesões e Rotação',
        content: `Mudanças de plantel importam. Uma equipa sem o seu melhor avançado é diferente. Gestão de carga antes de jogos de taça ou fins de semana europeus afeta as escalações. Mantenha-se atualizado com notícias de equipas antes de formar a sua avaliação.`
      },
      {
        title: 'Variância de Liga',
        content: `Diferentes ligas comportam-se de forma diferente. Algumas têm muitos golos em média, outras menos. Algumas favorecem equipas da casa, outras são mais equilibradas. Entenda as características da liga onde está a apostar.`
      },
      {
        title: 'Mercados In-Play',
        content: `Apostas ao vivo no futebol são muito ativas. As odds mudam com cada golo, cartão, ou lesão. Se conseguir processar informação mais rápido que o mercado, existem oportunidades—mas os atrasos e a velocidade do mercado tornam isto desafiante.`
      }
    ]
  },
  {
    id: 8,
    slug: 'horse-racing-class',
    title: 'Aula de Corridas de Cavalos',
    subtitle: 'A estrutura de apostas em corridas. Pools, fixed odds, e complexidade de forma.',
    duration: '30 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Corridas de cavalos envolve múltiplos participantes. Ao contrário de desportos com duas equipas, está a avaliar campos de 6 a 20 ou mais corredores. Isto cria dinâmicas de preço diferentes e oportunidades de valor em longo prazo.`
      },
      {
        title: 'Tipos de Apostas',
        content: `Os tipos principais são apostas de vencedor e apostas each-way. Each-way divide a sua stake em duas: uma aposta para vencer, uma aposta para lugar (tipicamente top 2-4 dependendo do tamanho do campo). Apostas each-way podem oferecer valor em outsiders.`
      },
      {
        title: 'Fixed Odds vs Tote',
        content: `Fixed odds significa que o preço que aposta é o preço que recebe. Apostas tote ou pool significam que o payout depende do montante total apostado dividido entre os vencedores. Fixed odds dá-lhe certeza no momento da aposta.`
      },
      {
        title: 'Ler Forma',
        content: `Forma refere-se aos resultados anteriores de um cavalo. Números como 1-3-5-2 mostram posições de chegada recentes. Analisar forma significa considerar qualidade da oposição, condições da pista, distância, e terreno (firme vs pesado).`
      },
      {
        title: 'Terreno e Distância',
        content: `Os cavalos têm preferências. Alguns preferem terreno firme, outros lama. Alguns sobressaem em sprints, outros em resistência. Combine as condições com o perfil do cavalo antes de avaliar chances.`
      },
      {
        title: 'Jockeys e Treinadores',
        content: `A competência do jockey importa, especialmente em campos competitivos. Alguns treinadores sobressaem em certos tipos de corridas. Rastreie combinações de jockey-treinador e percentagens de vitória em condições específicas.`
      },
      {
        title: 'Flutuações de Mercado',
        content: `Os mercados de corridas movem-se significativamente antes de uma corrida. Acompanhar movimentos de preço pode sinalizar onde dinheiro informado está a fluir. Derivas súbitas podem indicar informação de estábulo.`
      }
    ]
  },
  {
    id: 9,
    slug: 'tennis-class',
    title: 'Aula de Ténis',
    subtitle: 'Aplicar a estrutura de apostas ao ténis. Dinâmica de matchup, variância de superfície, e mercados de sets.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Ténis é um contra um. Sem companheiros de equipa para mascarar fraquezas. Jogadores carregam a sua forma, condição física, e pressão mental diretamente para o court. Esta transparência torna o ténis atrativo para análise.`
      },
      {
        title: 'Superfície Importa',
        content: `Ténis é jogado em três superfícies principais: relva, terra batida, e hard court. Os jogadores têm preferências fortes. Alguns dominam na terra mas lutam na relva. Sempre ajuste a sua avaliação ao contexto da superfície.`
      },
      {
        title: 'Análise de Matchup',
        content: `Estilos de jogo colidem de forma diferente. Jogadores de serviço grande podem dominar returners fracos. Grinders de baseline podem frustrar jogadores agressivos. Confrontos diretos importam—alguns jogadores simplesmente vencem outros de forma consistente.`
      },
      {
        title: 'Mercados de Jogos e Sets',
        content: `Além do vencedor do jogo, mercados de handicap de jogos e totais de sets oferecem valor. Um favorito pode ganhar mas perder um set. Um outsider pode perder mas cobrir um spread de jogos. Estes mercados adicionam flexibilidade.`
      },
      {
        title: 'Fadiga e Calendário',
        content: `O calendário de ténis é brutal. Jogadores competem semana após semana. Fadiga acumula. Um jogador que acabou de jogar um jogo de cinco sets no dia anterior pode ter pernas cansadas. Verifique o calendário recente e a carga de jogos.`
      },
      {
        title: 'Apostas In-Play no Ténis',
        content: `Momentum no ténis oscila. Apostas ao vivo podem oferecer valor se compreender como os jogadores respondem a estar atrás ou como mantêm leads. Mas mercados ao vivo movem-se rápido—atrasos podem custar valor.`
      },
      {
        title: 'Desistências e Lesões',
        content: `Jogadores de ténis frequentemente jogam com lesões. Desistências podem anular apostas dependendo das regras da casa de apostas. Sempre verifique as regras de desistência antes de apostar, especialmente em jogadores com histórico de lesões.`
      }
    ]
  },
  {
    id: 10,
    slug: 'basketball-class',
    title: 'Aula de Basquetebol',
    subtitle: 'Aplicar a estrutura de apostas ao basquetebol. Ritmo, spreads, e variância de totais.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Basquetebol é de alta pontuação. Jogos terminam frequentemente nos 200+ pontos combinados. Isto significa que spreads e totais são os mercados dominantes. Moneylines importam menos porque os favoritos ganham mais vezes—a questão é por quanto.`
      },
      {
        title: 'Spreads Explicados',
        content: `Um spread é um handicap. Se uma equipa está favorecida por -5.5, precisa de ganhar por 6 ou mais para a aposta no spread vencer. Se o outsider é +5.5, pode perder por 5 ou menos e ainda cobrir. Spreads nivelam o campo.`
      },
      {
        title: 'Totais e Ritmo',
        content: `Totais perguntam se o jogo vai over ou under um número definido. Ritmo—o número de posses por jogo—influencia fortemente isto. Equipas de ritmo rápido empurram pontuações para cima. Equipas que abrandam e jogam meia-quadra empurram para baixo.`
      },
      {
        title: 'Back-to-Backs e Fadiga',
        content: `A NBA e outras ligas têm equipas a jogar em noites consecutivas. Equipas em back-to-backs muitas vezes desempenham pior, especialmente na estrada. O mercado sabe isto, mas você pode encontrar valor quando os ajustes estão errados.`
      },
      {
        title: 'Impacto de Lesões',
        content: `Basquetebol depende de estrelas. Perder um jogador chave pode mudar um spread por múltiplos pontos. Mantenha-se atualizado com relatórios de lesões perto da hora do jogo—odds ajustam rapidamente quando estrelas são confirmadas fora.`
      },
      {
        title: 'Variância de Quarter e Half',
        content: `Apostas em primeiro quarter ou primeira metade oferecem apostas de menor variância. Menos tempo significa menos oportunidade para voltas. Alguns apostadores especializam-se nestes mercados em vez de resultados de jogo completo.`
      },
      {
        title: 'Eficiência Playoff vs Regular Season',
        content: `Os mercados de playoff são mais eficientes—há mais atenção, mais análise, menos erros de preço. Regular season, especialmente início de temporada ou jogos fora de foco, pode ter mais valor.`
      }
    ]
  },
  {
    id: 11,
    slug: 'ice-hockey-class',
    title: 'Aula de Hóquei no Gelo',
    subtitle: 'Aplicar a estrutura de apostas ao hóquei. Goaltending, puck lines, e variância de baixa pontuação.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Hóquei é um desporto de baixa pontuação com alta variância. Jogos frequentemente são decididos por um golo. Isto significa que moneylines de outsiders são valiosas, e surpresas acontecem frequentemente. Favoritismo não garante vitória.`
      },
      {
        title: 'Puck Lines',
        content: `A puck line é o equivalente do hóquei ao spread. Está tipicamente definida em -1.5 ou +1.5. Uma aposta -1.5 significa que a equipa deve ganhar por dois ou mais golos. +1.5 significa que podem perder por um e ainda cobrir.`
      },
      {
        title: 'Impacto do Goaltending',
        content: `Guarda-redes dominam resultados de hóquei mais do que qualquer posição única na maioria dos desportos. Um guarda-redes quente pode levar uma equipa mais fraca a uma série de vitórias. Verifique sempre quem está na baliza antes de avaliar um jogo.`
      },
      {
        title: 'Situações de Back-to-Back',
        content: `Equipas de hóquei frequentemente jogam em noites consecutivas. Fadiga afeta patinadores e guarda-redes. Procure equipas em back-to-backs enfrentando oponentes descansados—isto pode criar desalinhamento.`
      },
      {
        title: 'Totais no Hóquei',
        content: `Over/under no hóquei frequentemente centra-se em torno de 5.5 ou 6 golos. Porque hóquei é de baixa pontuação, estes mercados são sensíveis a matchups de guarda-redes e intensidade defensiva.`
      },
      {
        title: 'Diferenças Regular Season vs Playoff',
        content: `Playoff de hóquei é um desporto diferente. Equipas jogam mais apertado, pontuações caem, e séries são longas. Unders frequentemente dominam em hóquei de playoff. Ajuste a sua modelagem de acordo.`
      },
      {
        title: 'Ajustes de Apostas Ao Vivo',
        content: `Hóquei ao vivo move-se rápido. Golos alteram dramaticamente os mercados. Se tiver uma vantagem informacional—como um guarda-redes a jogar lesionado ou uma unidade de powerplay a lutar—mercados ao vivo podem oferecer oportunidades.`
      }
    ]
  },
  {
    id: 12,
    slug: 'baseball-class',
    title: 'Aula de Basebol',
    subtitle: 'Aplicar a estrutura de apostas ao basebol. Matchups de lançadores, run lines, e variância de totais.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Basebol é uma série de duelos lançador-batedor. O resultado depende muito do lançador titular. Ao contrário de desportos de equipa onde a produção ofensiva é distribuída, basebol centra poder num único atleta para começar cada jogo.`
      },
      {
        title: 'Importância do Lançador Titular',
        content: `Quando avalia um jogo de basebol, comece com os titulares. Compare ERA, WHIP, strikeout rates, e desempenho recente. Um ás contra um lançador do fundo de rotação pode balançar uma linha de múltiplas corridas.`
      },
      {
        title: 'Run Lines',
        content: `A run line é o spread do basebol, tipicamente definida em -1.5 ou +1.5. Favoritos devem ganhar por duas ou mais corridas para cobrir -1.5. Outsiders podem perder por uma e ainda cobrir +1.5. Run lines oferecem pagamentos diferentes das moneylines.`
      },
      {
        title: 'Mercados de Totais',
        content: `Over/under no basebol centra-se frequentemente em torno de 8-9 corridas. Fatores incluem condições do parque, clima, qualidade do bullpen, e produção de lineup. Alguns parques favorecem rebatedores, outros lançadores.`
      },
      {
        title: 'Qualidade do Bullpen',
        content: `Jogos frequentemente são decididos por relevistas. Uma equipa com um bullpen cansado ou fraco pode ceder em innings tardios. Verifique uso recente do bullpen—se os arms-chave lançaram na noite anterior, podem estar indisponíveis.`
      },
      {
        title: 'Efeitos de Parque e Clima',
        content: `Parques de basebol variam. Coors Field inflaciona pontuações. Alguns parques favorecem canhotos. Vento a soprar para fora aumenta home runs. Sempre considere o contexto do local.`
      },
      {
        title: 'Splits de Platoon',
        content: `Batedor vs lançador mão importa. Batedor canhoto frequentemente lutam contra lançadores canhotos e vice-versa. Splits de platoon são dados básicos para avaliar matchups de lineup.`
      }
    ]
  },
  {
    id: 13,
    slug: 'american-football-class',
    title: 'Aula de Futebol Americano',
    subtitle: 'Aplicar a estrutura de apostas à NFL e college football. Spreads, totais, e variância de props.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Estrutura do Desporto',
        content: `Futebol americano é jogado em sprints curtos—temporadas de 17 jogos na NFL. Cada jogo importa mais. Lesões carregam através de semanas. A variância é alta porque os tamanhos de amostra são pequenos.`
      },
      {
        title: 'Spreads de Ponto',
        content: `O spread é o mercado dominante. NFL spreads tipicamente variam de pick'em a duplos dígitos. Porque futebol é de pontuação moderada com números chave (3, 7), meios pontos podem importar muito. -2.5 vs -3 é uma diferença grande.`
      },
      {
        title: 'Números Chave',
        content: `Jogos de futebol frequentemente são decididos por 3 ou 7 pontos—field goals e touchdowns. Linhas em torno destes números são sensíveis. Comprar meios pontos de 3 para 2.5 ou 7 para 7.5 pode mudar taxas de vitória.`
      },
      {
        title: 'Totais e Game Script',
        content: `Totais dependem de ritmo, eficiência, e game script. Uma equipa atrás vai passar mais, parando o relógio. Uma equipa à frente vai correr, acelerando-o. Totais altos frequentemente veem variância em jogos desequilibrados.`
      },
      {
        title: 'Relatórios de Lesões',
        content: `Lesões da NFL importam enormemente. Ausência de um quarterback pode mover linhas por mais de 7 pontos. Sempre verifique relatórios de lesões de quarta e sexta-feira para participação em prática e designações.`
      },
      {
        title: 'NFL vs College',
        content: `College football tem mais equipas, spreads mais amplos, e mais variância. Linhas acima de 20 pontos são comuns. Jogos entre conferências e early season são particularmente difíceis de precificar.`
      },
      {
        title: 'Mercados de Props',
        content: `Props de jogador—como passing yards ou anytime touchdowns—oferecem mercados alternativos. Estes podem ser menos eficientes que linhas de jogo. Mas também são mais pesados em vig. Escolha com cuidado.`
      }
    ]
  },
  {
    id: 14,
    slug: 'other-sports-niches',
    title: 'Outros Desportos e Nichos Especialistas',
    subtitle: 'Aplicar a estrutura de apostas a desportos além dos principais. Golf, MMA, esports, e eventos de nicho.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'Porquê Considerar Nichos',
        content: `Os mercados principais são eficientes. Milhares de pessoas analisam NFL e Premier League. Mercados mais pequenos—golf, dardos, snooker, esports—têm menos atenção. Menos olhos significa mais erros de preço potenciais.`
      },
      {
        title: 'Golf',
        content: `Apostas de golf envolvem grandes campos. Mercados de vencedor do torneio podem ter mais de 150 participantes. O valor existe frequentemente em jogadores de meio de tabela. Mercados de matchup—um jogador contra outro durante uma ronda—são populares e menos variáveis.`
      },
      {
        title: 'MMA e Boxe',
        content: `Desportos de combate têm alta variância. Uma luta pode terminar em segundos. Linhas frequentemente supervalorizam favoritos porque nocautes são imprevisíveis. Mercados de método de vitória e round betting oferecem ângulos alternativos.`
      },
      {
        title: 'Esports',
        content: `Esports cobre Counter-Strike, League of Legends, Dota 2, e outros. Mercados estão a crescer mas ainda são menos eficientes que desportos tradicionais. Mudanças de roster, atualizações de patch, e dinâmicas de mapa criam complexidade.`
      },
      {
        title: 'Ciclismo e Motorsport',
        content: `Desportos de resistência como ciclismo e F1 envolvem dinâmicas de equipa, estratégia, e variáveis ambientais. Lesões e mecânica podem mudar resultados instantaneamente. Mercados são mais finos mas ocasionalmente mal precificados.`
      },
      {
        title: 'Eventos de Entretenimento e Especiais',
        content: `Apostas em eleições, prémios de TV, ou concursos de música existem. Estes mercados são pouco líquidos e frequentemente ineficientes. Mas também são difíceis de modelar e propensos a manipulação. Aproxime-se com ceticismo.`
      },
      {
        title: 'Especialização vs Diversificação',
        content: `Alguns apostadores prosperam especializando-se num nicho, tornando-se especialistas onde outros são casual. Outros diversificam através de desportos. Ambas as abordagens podem funcionar. A chave é saber onde está a sua vantagem.`
      }
    ]
  },
  {
    id: 15,
    slug: 'bet-types-masterclass',
    title: 'Masterclass de Tipos de Apostas',
    subtitle: 'Um guia detalhado para cada tipo de aposta. Singles, multis, handicaps, totais, props, e mais.',
    duration: '25 min leitura',
    sections: [
      {
        title: 'Singles',
        content: `Uma aposta única é uma aposta num resultado. É a forma mais pura de aposta. A sua stake está ligada a uma previsão. Se ganhar, é pago. Se perder, perde a stake. A maioria dos apostadores profissionais aposta principalmente em singles.`
      },
      {
        title: 'Acumuladores (Multis)',
        content: `Um acumulador combina múltiplas seleções. Todas devem ganhar para a aposta ser paga. As odds multiplicam, criando payouts potencialmente altos. Mas a variância dispara. O valor é frequentemente fraco porque as margens compõem.`
      },
      {
        title: 'Handicaps',
        content: `Apostas de handicap dão a um lado uma vantagem ou desvantagem virtual. Se uma equipa é favorita por -1.5 golos, começa o jogo 1.5 golos atrás para propósitos de apostas. Handicaps nivelam mercados e criam preços mais próximos de paridade.`
      },
      {
        title: 'Handicaps Asiáticos',
        content: `Handicaps asiáticos removem o empate dividindo a sua stake através de duas linhas. Por exemplo, -0.25 divide a sua aposta igualmente entre 0 e -0.5. Se a equipa ganhar por exatamente um golo, ganha metade e empata metade. Isto reduz variância.`
      },
      {
        title: 'Totais (Over/Under)',
        content: `Mercados de totais perguntam se um número—golos, pontos, corridas—vai acima ou abaixo de uma linha. Você não se importa com quem ganha—apenas o total. Estes são populares em desportos de alta pontuação como basquetebol.`
      },
      {
        title: 'Props de Jogador',
        content: `Props de jogador focam-se no desempenho individual. Vai um jogador marcar? Terá mais de 25 pontos? Props adicionam outra camada de mercados e podem ser menos eficientes, particularmente para jogadores menos visados.`
      },
      {
        title: 'Futures e Outrights',
        content: `Mercados de futures apostam em resultados a longo prazo—vencedores de liga, vencedores de torneio, prémios de final de temporada. O seu dinheiro está bloqueado por longos períodos, mas ocasionalmente odds sobrevalorizam outsiders cedo na temporada.`
      },
      {
        title: 'Same-Game Parlays',
        content: `Same-game parlays combinam múltiplas seleções de um único evento. Casas de apostas amam-nas porque correlação é difícil de modelar. A margem nestas é tipicamente alta. Aproxime-se com cautela.`
      }
    ]
  },
  {
    id: 16,
    slug: 'betting-notebook',
    title: 'Caderno de Apostas Pessoal, Log de Decisões e Registo de Revisão',
    subtitle: 'Estruturar a sua documentação de apostas. Rastrear apostas, decisões, e lições.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'Porquê Manter um Caderno',
        content: `A memória é não confiável. Apostadores lembram-se de ganhos e esquecem perdas. Um caderno força honestidade. Regista exatamente o que apostou, porquê, e o que aconteceu. Isto é a base da melhoria.`
      },
      {
        title: 'O Que Registar',
        content: `No mínimo: data, evento, mercado, stake, odds tomadas, linha de fecho, resultado, lucro/perda. Idealmente também: a sua avaliação pré-aposta, o raciocínio por trás da aposta, e quaisquer notas sobre contexto.`
      },
      {
        title: 'Formato',
        content: `Use uma folha de cálculo, app dedicada, ou documento simples. O formato importa menos do que consistência. Certifique-se de que pode facilmente ordenar, filtrar, e analisar os seus registos. Um sistema que não pode consultar é inútil.`
      },
      {
        title: 'Rotina de Revisão',
        content: `Reserve tempo semanalmente para rever a sua atividade de apostas. Olhe não só para lucro/perda mas para qualidade de processo. Apostou nos mercados certos? Encontrou valor? Respeitou a sua disciplina de stake?`
      },
      {
        title: 'Aprender com Erros',
        content: `Os erros mais valiosos são aqueles que rastreia. Se uma aposta perdeu porque perdeu informação, registe isso. Se saiu do seu staking, anote. Padrões de erros tornam-se visíveis apenas através de revisão.`
      },
      {
        title: 'Rastrear CLV',
        content: `Sempre que possível, registe a linha de fecho. Compare as suas odds tomadas com o fecho. Ao longo do tempo, isto diz-lhe se está a conseguir valor. CLV positivo persistente sugere que está a fazer algo certo.`
      },
      {
        title: 'Ajustes Emocionais',
        content: `Registe como se sentiu quando apostou. Estava calmo? Em tilt? Perseguindo? Se as suas apostas com carga emocional têm desempenho inferior, os dados mostrar-lhe-ão. Isto é autoconsciência através de registo.`
      }
    ]
  },
  {
    id: 17,
    slug: 'reviewing-performance',
    title: 'Rever Desempenho, Manter Registos e Aprender com Resultados',
    subtitle: 'Transformar dados em perceção. Medir o que importa. Ajustar ao longo do tempo.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'A Necessidade de Revisão',
        content: `Apostas sem revisão é adivinhação. Pode sentir-se bem mas não ter ideia se está a melhorar. Revisão regular converte apostas de entretenimento em disciplina.`
      },
      {
        title: 'Métricas Chave',
        content: `Rastreie yield (lucro dividido por total apostado), ROI, win rate, CLV médio, e performance por desporto ou mercado. Estas métricas revelam onde está forte e onde está a sangrar.`
      },
      {
        title: 'Tamanho de Amostra',
        content: `Não tire conclusões cedo demais. 50 apostas não é suficiente para saber se está ganhando. Precisa de centenas, às vezes milhares de apostas antes que padrões se estabilizem. Seja paciente e mantenha-se orientado por processo.`
      },
      {
        title: 'Atribuição',
        content: `Quando ganha, foi competência ou sorte? Quando perde, foi má sorte ou má análise? Atribuição é difícil. CLV ajuda. Se obteve valor e perdeu de qualquer forma, isso sugere variância, não falha de competência.`
      },
      {
        title: 'Ajustes',
        content: `Use os seus dados para ajustar. Se está a perder numa liga particular, pare de apostar lá ou investigue porquê. Se um mercado é consistentemente valioso, incline mais para lá. Deixe que os dados guiem—não apenas intuição.`
      },
      {
        title: 'Verificações de Honestidade',
        content: `Revisão é um momento de honestidade. Não esconda apostas que regressa. Não ignore erros. Os dados são implacáveis. Use-os para se tornar implacável também.`
      }
    ]
  },
  {
    id: 18,
    slug: 'psychology-discipline',
    title: 'Psicologia, Disciplina, Controlo de Tilt e Rotinas Profissionais',
    subtitle: 'O jogo mental das apostas. Gerir emoções. Manter-se consistente.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'O Lado Emocional das Apostas',
        content: `Apostar aciona reações emocionais. Ganhos criam euforia. Perdas criam frustração. Se deixar que emoções conduzam decisões, sobrepostará após ganhos, perseguirá após perdas, e destruirá disciplina.`
      },
      {
        title: 'O Que É Tilt',
        content: `Tilt é tomada de decisão emocionalmente comprometida. Vem de perdas, ganhos, tédio, ou fatores externos. No tilt, os apostadores desviam-se da sua estratégia—apostam de mais, apostam em jogos que não analisaram, perseguem resultados.`
      },
      {
        title: 'Reconhecer Tilt',
        content: `Aprenda os seus sinais. Aumentar stakes após uma perda? Apostar em mercados aleatórios? Sentir urgência? Estes são sinais de alerta. Quando os notar, afaste-se. Não faça mais apostas.`
      },
      {
        title: 'Disciplina Como Sistema',
        content: `Disciplina não é força de vontade—é estrutura. Crie regras: tamanhos máximos de aposta, limiares mínimos de valor, horas específicas de apostas. Sistemas removem decisões do momento.`
      },
      {
        title: 'Rotinas',
        content: `Apostadores profissionais seguem rotinas. Analisam a determinadas horas, colocam apostas em janelas definidas, e reveem semanalmente. A rotina reduz fadiga de decisão e promove consistência.`
      },
      {
        title: 'Pausas e Recuperação',
        content: `Se estiver em tilt ou cansado, faça uma pausa. Afaste-se por um dia ou uma semana. Os mercados estarão lá quando voltar. Nenhuma aposta vale destruir clareza mental.`
      },
      {
        title: 'Mentalidade de Longo Prazo',
        content: `Sucesso em apostas é medido em milhares de apostas, não uma. Um dia ruim não significa nada se a sua vantagem é real. Foque-se no processo, não nos resultados. Os resultados seguirão.`
      }
    ]
  },
  {
    id: 19,
    slug: 'safer-gambling',
    title: 'Padrões de Jogo Mais Seguro, Consciência de Conformidade e Proteção Pessoal',
    subtitle: 'Mantendo-se seguro. Reconhecer sinais de problema. Usar ferramentas de forma responsável.',
    duration: '15 min leitura',
    sections: [
      {
        title: 'Porquê Jogo Mais Seguro Importa',
        content: `Apostar pode tornar-se problemático. Quando cruza de entretenimento ou disciplina para compulsão, causa danos—financeiros, emocionais, relacionais. Jogadores responsáveis reconhecem a linha e mantêm-se do lado certo.`
      },
      {
        title: 'Sinais de Alerta',
        content: `Sinais de problema incluem: perseguir perdas, esconder apostas de outros, pedir emprestado para apostar, pensar constantemente em apostas, negligenciar trabalho ou relacionamentos. Se experienciar estes, procure apoio.`
      },
      {
        title: 'Limites e Ferramentas',
        content: `A maioria das casas de apostas oferece limites de depósito, limites de perda, e ferramentas de autoexclusão. Use-as. Defina limites antes de precisar deles. É mais fácil prevenir escalada do que reverter.`
      },
      {
        title: 'Autoexclusão',
        content: `Se precisar de uma pausa, autoexclua-se. Isto bloqueia-o de fazer login ou apostar por um período definido. Não é admissão de fracasso—é uma ferramenta para proteção.`
      },
      {
        title: 'Recursos de Apoio',
        content: `Organizações como GamCare, Gamblers Anonymous, e linhas de ajuda locais oferecem suporte. Se achar que apostar está a prejudicá-lo, contacte-os. Procurar ajuda é um sinal de força, não fraqueza.`
      },
      {
        title: 'Jogador Responsável',
        content: `Um jogador responsável aposta com capital separado, nunca persegue, mantém equilíbrio na vida, e trata apostas como uma atividade—não uma identidade. Se se encontrar incapaz de manter esta perspetiva, reavalie.`
      }
    ]
  },
  {
    id: 20,
    slug: 'practical-exercises-and-appendix',
    title: 'Exercícios Práticos e Apêndice A',
    subtitle: 'Treino hands-on para reforçar conceitos. Referências e fórmulas chave.',
    duration: '20 min leitura',
    sections: [
      {
        title: 'Exercício 1: Estimar Probabilidades',
        content: `Selecione 10 jogos próximos. Antes de verificar qualquer odd, anote a sua estimativa de probabilidade para cada resultado. Depois compare com a probabilidade implícita das odds. Onde difere mais do mercado?`
      },
      {
        title: 'Exercício 2: Comparação de Odds',
        content: `Escolha 5 jogos e compare odds em pelo menos 4 casas de apostas. Registe a melhor odd disponível para cada resultado. Calcule o quanto perderia em yield apostando na primeira casa vs a melhor.`
      },
      {
        title: 'Exercício 3: Paper Trading',
        content: `Antes de apostar dinheiro real, pratique. Coloque apostas simuladas ao longo de uma semana ou mês. Rastreie-as como se fossem reais. Reveja o desempenho. Isto constrói hábitos sem risco financeiro.`
      },
      {
        title: 'Exercício 4: Análise de Diário',
        content: `Se já tem um histórico de apostas, reveja as suas últimas 100 apostas. Categorize por desporto, tipo de aposta, e mercado. Onde foi lucrativo? Onde em perda? Padrões emergem.`
      },
      {
        title: 'Apêndice: Fórmulas Chave',
        content: `Probabilidade Implícita = 1 / odds decimais
EV = (P × lucro) - ((1-P) × stake)
Kelly % = (bp - q) / b
Yield = Lucro Total / Total Apostado
ROI = (Lucro / Capital Inicial) × 100`
      }
    ]
  }
]
