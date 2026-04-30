// Portuguese translations for training modules - Correct content matching English
import { TrainingModule } from '../training-content'

export const trainingContentPT: { modules: Record<number, Omit<TrainingModule, 'id' | 'slug'>> } = {
  modules: {
    1: {
      title: '1. O Que os Apostadores Eficazes Realmente Fazem de Diferente',
      subtitle: 'A mentalidade do apostador disciplinado: pesquisa, probabilidade, participação no mercado e padrões profissionais',
      duration: '15 min de leitura',
      sections: [
        {
          title: 'A Mentalidade do Participante de Mercado',
          content: `Um apostador disciplinado não é simplesmente uma pessoa que gosta de desporto e ocasionalmente tem uma opinião. Um apostador disciplinado é um participante de mercado. Eles pesquisam eventos, estimam probabilidades, comparam essas estimativas com os preços disponíveis, escolhem o mercado que expressa a vantagem mais claramente, apostam dentro de limites rigorosos e reveem a decisão honestamente após o fim do evento. Não se definem por uma vitória, uma derrota ou um fim de semana de sorte. Definem-se por padrões.

Essa distinção importa porque a indústria das apostas está cheia de ruído. Há pessoas que vendem certeza, pessoas que anunciam taxas de acerto impossíveis, pessoas que se gabam de acumuladores de sorte e pessoas que confundem emoção com vantagem. Nada disso é comportamento profissional. Um apostador sério deve ser capaz de explicar não apenas o que apostou, mas porque o preço era jogável, porque esse mercado era melhor que as alternativas, como a aposta foi determinada e o que aprendeu depois, quer a aposta tenha ganho ou perdido.

A forma mais fácil de entender as apostas eficazes é pensá-las como uma mistura de analista, trader e gestor de risco. O analista recolhe e filtra informação. O trader pergunta se o preço de mercado está errado. O gestor de risco garante que um dia mau não possa destruir meses de bom trabalho. Os iniciantes geralmente focam-se apenas na análise e ignoram os outros dois trabalhos. Os apostadores experientes sabem que os outros dois trabalhos são o que mantém a boa análise viva.`
        },
        {
          title: 'Seletividade Sobre Ação',
          content: `As apostas eficazes também requerem seletividade. Os apostadores recreativos querem ação. Os apostadores sérios querem vantagens. Não são a mesma coisa. O amador pergunta: "Em que posso apostar hoje?" O profissional pergunta: "Onde está o preço suficientemente errado para justificar o risco hoje?" Essa mudança de pergunta transforma toda a atividade. Deixas de tratar as apostas como entretenimento primeiro e começas a tratá-las como um negócio de tomada de decisões com custos, incerteza, fricção e controlo de qualidade.

Outra diferença chave é como os profissionais falam consigo mesmos sobre confiança. Confiança não é evidência. Um apostador sério pode ter uma opinião forte, mas a opinião ainda tem de ser expressa através de probabilidade, preço, escolha de mercado e tamanho da aposta. Entendem que uma probabilidade de 58 por cento ainda perde frequentemente, que boas apostas podem perder, e que a auto-revisão honesta vale mais do que a certeza emocional.`
        },
        {
          title: 'A Verdadeira Descrição do Trabalho',
          content: `O trabalho diário de um apostador é mais próximo de operar uma pequena mesa de pesquisa do que de gritar opiniões. Um apostador forte analisa calendários, reduz a lista, identifica onde a informação mais importa, precifica resultados prováveis e só então decide se uma aposta deve existir. Mantêm registos porque a memória é tendenciosa. Escrevem claramente porque as apostas punem a vagueza. Reveem cuidadosamente porque o ego mente.

**Princípios chave:**
- Filtrar eventos em vez de tentar cobrir tudo
- Criar um preço justo pessoal antes de se ancorar nas odds do mercado
- Usar o mercado que melhor expressa a vantagem em vez de forçar cada opinião numa aposta de vencedor
- Apostar como proporção da banca em vez de acordo com a emoção
- Manter um rasto de auditoria: data, mercado, preço obtido, aposta, resultado e notas de processo
- Julgar a qualidade a longo prazo pelo processo e preço, não apenas pelos resultados a curto prazo`
        },
        {
          title: 'O Que Separa os Apostadores Disciplinados',
          content: `Um apostador disciplinado protege a sua própria tomada de decisões sendo honesto nos seus registos sobre odds obtidas, regras de classificação, perdas e variância. Não editam a história no seu caderno, não escondem períodos de perda de si mesmos, nem criam volume desnecessário só para se sentirem ativos. Usam linguagem medida nas suas próprias notas, porque certeza exagerada é geralmente um sinal de que a probabilidade está a ser ignorada.

**Marcas de apostas disciplinadas:**
- Manutenção de registos honesta
- Linguagem clara de mercado e liquidação
- Sem "locks" falsos, "garantias" ou mensagens imprudentes de all-in
- Linguagem de aposta consistente como unidades de 1-ponto, 1.5-pontos ou 2-pontos
- Vontade de passar em cartas de baixa qualidade e dias calmos
- Um estilo pessoal que é claro, preciso e não manipulativo consigo mesmo`
        },
        {
          title: 'Porque Este Manual É Deliberadamente Longo',
          content: `Guias de apostas curtos são frequentemente fáceis de ler e inúteis na prática. A melhoria profissional requer detalhe. Precisas de entender não apenas o que é um mercado, mas quando é atrativo, quando é perigoso, que informação o move, como funciona a liquidação e como se encaixa num fluxo de trabalho de apostador. Este curso é portanto propositadamente longo. O objetivo não é impressionar-te com a contagem de páginas. O objetivo é remover a compreensão superficial.

**Padrão profissional:** O primeiro dever de um apostador é a qualidade do processo, não a emoção. O segundo dever de um apostador é o controlo de risco, porque uma vantagem é inútil se más apostas te eliminarem. O terceiro dever de um apostador é a comunicação honesta, porque a confiança pública depende de precisão e consistência.`
        },
        {
          title: 'O Ciclo Operacional do Apostador',
          content: `| Etapa | Pergunta | Resultado | Erro Comum do Amador |
|-------|----------|-----------|----------------------|
| Triagem da carta | Este evento vale o meu tempo? | Lista curta ou passar | Tentar apostar em cada jogo do calendário |
| Pesquisa | O que é mais provável de decidir o evento? | Notas de contexto | Recolher estatísticas aleatórias sem ponderação |
| Precificação | Qual é a minha probabilidade justa? | Linha própria ou odds justas | Olhar para os preços das casas antes de formar opinião |
| Seleção de mercado | Qual mercado expressa melhor esta vantagem? | Mercado escolhido | Forçar cada vantagem num mercado de vencedor |
| Dimensionamento | Quanto devo arriscar? | Tamanho em pontos | Aumentar a aposta por emoção ou recência |
| Registo de decisão | Consigo explicar isto claramente a mim mesmo? | Nota de aposta | Usar linguagem vaga e omitir detalhes de liquidação |
| Revisão | O processo foi bom independentemente do resultado? | Notas pós-evento | Julgar qualidade apenas pelo facto de a aposta ter ganho |`
        }
      ]
    },
    2: {
      title: '2. Como as Casas de Apostas, Exchanges e Mercados Realmente Funcionam',
      subtitle: 'Compreender margem, mecânica de preços, casas sharp vs soft e lógica de exchange',
      duration: '12 min de leitura',
      sections: [
        {
          title: 'A Casa de Apostas Como Negócio de Preços',
          content: `Um iniciante frequentemente imagina que uma casa de apostas simplesmente prevê o futuro e escreve essas previsões como odds. Na realidade, a casa opera como um negócio de preços com margem, gestão de responsabilidade, segmentação de clientes e sistemas de controlo de risco. A primeira preocupação da casa não é a tua experiência do evento. É se os preços no seu quadro são suficientemente eficientes, protegidos e lucrativos para justificar manter o mercado aberto.

A ideia central a entender é a margem. Odds justas num evento verdadeiramente 50-50 seriam 2.00 e 2.00 em termos decimais. Uma casa de apostas não pode sobreviver oferecendo ambos os lados a preço justo porque precisa de uma vantagem incorporada. Portanto, encurta ambos os lados. Isso pode significar oferecer 1.91 e 1.91, ou 1.90 e 1.90, dependendo do mercado. A probabilidade implícita total sobe acima de 100 por cento. Esse excesso é o overround, também chamado margem, vig ou juice. É uma das principais razões pelas quais escolher vencedores sozinho não é suficiente. Tens de bater o preço, não apenas adivinhar resultados.

Em mercados modernos, as casas de apostas também reagem a informação e comportamento do cliente. Notícias de equipa, tempo, desistências, nomeações de árbitros, guarda-redes titulares, mudanças de pitcher e relatórios de lesões, todos movem números. Assim como o dinheiro, especialmente dinheiro de contas respeitadas. Algumas casas são mais sharp e movem primeiro. Outras copiam. Algumas são soft e lentas, o que as torna úteis para line shopping. Um apostador disciplinado presta atenção a estas diferenças, porque nem todos os preços são criados iguais e nem todas as casas são igualmente informativas.`
        },
        {
          title: 'Exchanges de Apostas',
          content: `As exchanges de apostas funcionam de forma diferente. Numa exchange, os utilizadores fazem back e lay de resultados uns contra os outros e a plataforma cobra comissão. Esta estrutura pode criar melhores preços, especialmente perto da hora de início quando a liquidez é saudável. As exchanges também ensinam uma lição importante sobre a verdade do mercado: se participantes informados suficientes discordam de ti a um certo número, precisas de perguntar se o teu modelo do evento está errado, se a tua informação está desatualizada, ou se realmente encontraste valor. A resposta nem sempre é a mesma.`
        },
        {
          title: 'Margem da Casa em Linguagem Prática',
          content: `Um exercício de treino útil é olhar para um mercado de duas opções e calcular a probabilidade implícita total tu mesmo. Se a Equipa A está a 1.91 e a Equipa B está a 1.91, cada lado implica aproximadamente 52.36 por cento. Juntos implicam 104.72 por cento. A diferença entre 104.72 e 100 é a margem. Pode parecer pequeno, mas repetido ao longo de centenas de apostas é enorme. A tarefa do apostador é portanto comprar melhores preços do que o mercado merece oferecer, não simplesmente identificar resultados que parecem prováveis.

**Pontos chave:**
- Mercados de margem mais alta são mais difíceis de bater
- Mercados recreativos populares frequentemente carregam mais imposto escondido do que lados sharp ou preços de exchange
- A mesma opinião pode ser lucrativa a um preço e não jogável a outro
- Parlays e construtores de apostas frequentemente compõem margem a menos que sejas muito seletivo`
        },
        {
          title: 'Casas Soft, Casas Sharp, e Porque a Distinção Importa',
          content: `Uma casa sharp é aquela cujos preços são respeitados porque se movem rapidamente com informação e dinheiro educado. Uma casa soft pode oferecer mais promoções e funcionalidades de entretenimento, mas pode ficar atrás de fontes mais sharp. Para um apostador sério, a casa sharp é frequentemente um ponto de referência e a casa soft é às vezes o lugar onde valor obsoleto ainda pode ser encontrado. Esta não é uma distinção moral. É prática.

- As casas sharp são úteis para ler a opinião do mercado
- As casas soft são úteis para capturar valor quando são lentas a ajustar
- Saber quem lidera e quem segue ajuda-te a ler o fluxo de informação
- Alguma gestão de conta pode ser necessária se apanhares demasiado valor em casas soft`
        }
      ]
    },
    3: {
      title: '3. Odds, Probabilidade Implícita e Preço Justo',
      subtitle: 'Como converter odds, calcular probabilidade implícita e criar as tuas próprias linhas',
      duration: '10 min de leitura',
      sections: [
        {
          title: 'Formatos de Odds',
          content: `Odds são simplesmente uma forma de expressar probabilidade e pagamento. Os três formatos principais são decimal, fracionário e americano.

**Odds Decimais** são as mais fáceis de usar. Se as odds são 2.50, recebes 2.50€ por cada 1€ apostado se ganhares. Isso inclui a tua stake original, então o lucro é 1.50€.

**Odds Fracionárias** mostram lucro relativo à stake. 3/2 significa que ganhas 3€ por cada 2€ apostados, mais a tua stake de volta. Isso é equivalente a 2.50 decimal.

**Odds Americanas** usam um sistema baseado em 100. Positivo mostra quanto ganhas numa stake de 100€ (+150 significa 150€ de lucro em 100€). Negativo mostra quanto precisas de apostar para ganhar 100€ (-200 significa apostar 200€ para ganhar 100€).

A conversão entre formatos é simples com prática. O ponto chave é que todos os formatos expressam a mesma informação subjacente: probabilidade implícita e potencial de pagamento.`
        },
        {
          title: 'Probabilidade Implícita',
          content: `A probabilidade implícita é o que as odds te dizem sobre quanto o mercado pensa que algo vai acontecer. Para converter odds decimais para probabilidade implícita: 1 ÷ odds decimais × 100.

Exemplos:
- 2.00 decimal = 50% probabilidade implícita
- 1.50 decimal = 66.7% probabilidade implícita
- 4.00 decimal = 25% probabilidade implícita
- 1.25 decimal = 80% probabilidade implícita

Este cálculo é fundamental porque te permite comparar o que o mercado pensa com o que tu pensas. Se acreditas que uma equipa tem 55% de hipóteses mas o mercado implica 50%, podes ter encontrado valor.

**Nota importante:** A probabilidade implícita de um mercado de duas opções vai somar mais de 100% devido à margem da casa. Para obter a verdadeira probabilidade de mercado, precisas de remover a margem.`
        },
        {
          title: 'Criar a Tua Própria Linha',
          content: `Apostadores profissionais não olham primeiro para os preços de mercado. Fazem a sua própria avaliação e depois comparam com o mercado.

**Processo:**
1. Avalia o evento independentemente
2. Atribui probabilidades a cada resultado
3. Converte essas probabilidades em odds justas
4. Compara as tuas odds justas com os preços de mercado
5. Se o mercado oferece melhores odds do que a tua avaliação justa, podes ter valor

**Exemplo:** Acreditas que a Equipa A tem 60% de hipóteses de ganhar. As tuas odds justas são 1.67 (1/0.60). Se o mercado oferece 1.80, isso é valor. Se o mercado oferece 1.55, não é valor.

**Armadilha a evitar:** Ver primeiro os preços de mercado ancora a tua avaliação. Forma sempre a tua própria opinião antes de verificar o mercado.`
        }
      ]
    },
    4: {
      title: '4. Valor, Valor Esperado, Line Shopping e Valor da Linha de Fecho',
      subtitle: 'Os conceitos de vantagem: o que é valor, como calculá-lo e porque bater a linha de fecho importa',
      duration: '14 min de leitura',
      sections: [
        {
          title: 'O Que É Valor?',
          content: `Valor existe quando as odds oferecidas implicam uma probabilidade menor do que a verdadeira probabilidade do resultado. Por outras palavras, estás a receber um preço melhor do que deverias.

**Exemplo:** Acreditas que um cavalo tem 25% de hipóteses de ganhar (odds justas 4.00). A casa oferece 5.00. Isso é valor porque estás a ser pago como se o cavalo tivesse apenas 20% de hipóteses quando acreditas que tem 25%.

**Ponto crucial:** Valor não significa que a aposta vai ganhar. Significa que a longo prazo, repetindo apostas semelhantes, acabarás com lucro. Uma aposta de valor de 25% ainda perde 75% das vezes.

**Mentalidade:** Apostadores profissionais não perguntam "Esta aposta vai ganhar?" Perguntam "Este preço está errado a meu favor?" Essa mudança de mentalidade é fundamental.`
        },
        {
          title: 'Valor Esperado (EV)',
          content: `Valor Esperado é o lucro ou perda médio por aposta a longo prazo. É calculado como:

EV = (Probabilidade de ganhar × Lucro) - (Probabilidade de perder × Stake)

**Exemplo:** Aposta de 100€ a 2.50 (probabilidade implícita 40%) onde acreditas que a verdadeira probabilidade é 45%:
- EV = (0.45 × 150€) - (0.55 × 100€)
- EV = 67.50€ - 55€
- EV = +12.50€

Um EV positivo significa que a aposta é lucrativa a longo prazo. Os apostadores profissionais só fazem apostas com EV positivo.

**Realidade:** Mesmo com EV positivo, vais ter sequências de perdas. A variância é real. A vantagem só se manifesta ao longo de muitas apostas.`
        },
        {
          title: 'Line Shopping',
          content: `Line shopping significa comparar preços em várias casas de apostas para encontrar as melhores odds. Parece simples mas é uma das formas mais fáceis de melhorar os teus resultados.

**Exemplo:** Queres apostar na Equipa A. As odds são:
- Casa 1: 1.85
- Casa 2: 1.90
- Casa 3: 1.87

A diferença de 1.85 para 1.90 parece pequena mas ao longo de 100 apostas de 100€ cada, essa diferença de 0.05 vale 500€ de retorno adicional nas apostas ganhas.

**Regras de line shopping:**
- Mantém contas em várias casas
- Verifica sempre pelo menos 3-4 preços antes de apostar
- O melhor preço nem sempre está na mesma casa
- Considera a liquidez e os limites, não apenas o preço`
        },
        {
          title: 'Valor da Linha de Fecho (CLV)',
          content: `A linha de fecho é o preço final antes do evento começar. É geralmente considerada o preço mais eficiente porque incorporou toda a informação disponível.

Se consistentemente consegues preços melhores do que a linha de fecho, provavelmente tens uma vantagem. Isto chama-se Valor da Linha de Fecho (CLV) positivo.

**Exemplo:** Apostas na Equipa A a 2.10. A linha de fecho é 1.95. Bateste a linha de fecho em cerca de 7.7%.

**Porque o CLV importa:**
- É um indicador objetivo de habilidade
- Funciona mesmo em amostras pequenas onde resultados podem ser enganadores
- Apostadores sharp que são limitados pelas casas geralmente têm CLV positivo forte

**Limitação:** CLV assume mercados eficientes. Em nichos ou mercados de baixa liquidez, a linha de fecho pode não ser tão informativa.`
        }
      ]
    },
    5: {
      title: '5. Gestão de Banca, Dimensionamento de Apostas e Sobreviver à Variância',
      subtitle: 'Como proteger o teu capital, dimensionar apostas proporcionalmente e sobreviver a sequências inevitáveis de perdas',
      duration: '16 min de leitura',
      sections: [
        {
          title: 'Princípios de Gestão de Banca',
          content: `A tua banca é o dinheiro dedicado às apostas. Deve ser dinheiro que podes perder sem afetar a tua vida. Nunca apostes com dinheiro da renda, poupanças de emergência ou fundos emprestados.

**Princípios fundamentais:**
1. Define uma banca separada da qual nunca sais para despesas pessoais
2. Dimensiona apostas como percentagem da banca, não valores fixos
3. Reavalia o tamanho da aposta quando a banca muda significativamente
4. Nunca persigas perdas aumentando stakes

**Porque isto importa:** Mesmo com uma vantagem, a variância pode eliminar-te se as tuas apostas forem demasiado grandes em relação à banca. A gestão de banca existe para garantir que sobrevives o suficiente para que a tua vantagem se manifeste.`
        },
        {
          title: 'Métodos de Dimensionamento de Apostas',
          content: `**Stake Fixa:** Todas as apostas são a mesma percentagem da banca (tipicamente 1-2%). Simples mas não otimiza para vantagens variáveis.

**Critério de Kelly:** Dimensiona apostas com base na vantagem e odds. A fórmula completa é: (bp - q) / b onde b = odds decimais - 1, p = probabilidade de ganhar, q = probabilidade de perder.

A maioria dos apostadores profissionais usa Kelly Fracionário (1/4 a 1/2 do Kelly completo) porque:
- Reduz a variância
- Protege contra erros na estimativa de probabilidade
- Ainda captura a maior parte do benefício de dimensionamento variável

**Escala de Pontos:** Uma abordagem comum é usar 1-3 pontos por aposta:
- 1 ponto: Aposta padrão
- 2 pontos: Vantagem mais forte
- 3 pontos: Vantagem excepcional (raro)

**Aviso:** Nunca uses mais de 5% da banca numa única aposta, independentemente da confiança.`
        },
        {
          title: 'Sobreviver à Variância',
          content: `Variância é a flutuação natural dos resultados em torno do valor esperado. Mesmo com uma vantagem de 5%, vais ter sequências de perdas.

**Realidades da variância:**
- Uma vantagem de 55% ainda perde 10 apostas seguidas às vezes
- Precisas de centenas de apostas para separar habilidade de sorte
- A banca deve ser grande o suficiente para absorver sequências negativas

**Sinais de alerta:**
- Aumentar stakes após perdas (perseguir)
- Apostas de "recuperação" para ficar neutro no dia
- Stress emocional afetando decisões
- Tentar "fazer acontecer" em dias calmos

**Regra de sobrevivência:** Se perderes 20% da banca, para. Reavalia. Não apostes emocionalmente. A banca pode ser reconstruída; a confiança destruída é mais difícil de reparar.`
        }
      ]
    },
    6: {
      title: '6. O Fluxo de Trabalho Completo do Apostador: Da Triagem à Aposta Colocada',
      subtitle: 'Um processo passo a passo da identificação de um evento até à execução e registo de uma aposta',
      duration: '18 min de leitura',
      sections: [
        {
          title: 'Visão Geral do Fluxo de Trabalho',
          content: `Um fluxo de trabalho de apostas disciplinado tem etapas distintas. Saltar etapas é como os amadores perdem dinheiro.

**As 7 Etapas:**
1. Triagem da Carta - Filtrar eventos que valem análise
2. Pesquisa - Recolher informação relevante
3. Precificação - Criar a tua própria linha
4. Comparação de Mercado - Verificar se há valor
5. Seleção de Mercado - Escolher o melhor mercado
6. Dimensionamento - Determinar a stake
7. Execução e Registo - Colocar e documentar

**Ponto crucial:** A maioria dos apostadores pula da triagem diretamente para a execução. Isso é jogo, não apostas.`
        },
        {
          title: 'Triagem e Pesquisa',
          content: `**Triagem:** Nem todos os eventos merecem a tua atenção. A triagem eficaz envolve:
- Identificar onde tens vantagem de conhecimento
- Filtrar eventos com informação insuficiente
- Evitar eventos com demasiada incerteza (lesões de última hora, etc.)
- Focar em ligas e mercados onde tens experiência

**Pesquisa:** Uma vez que um evento passa a triagem:
- Recolhe dados relevantes (forma, confrontos, condições)
- Identifica os fatores mais prováveis de decidir o resultado
- Nota incertezas e como afetam a tua estimativa
- Evita o viés de confirmação - procura razões contra a tua opinião inicial

**Armadilha:** Pesquisa sem foco. Recolher estatísticas aleatórias não é pesquisa. Identificar o que realmente importa para este evento específico é pesquisa.`
        },
        {
          title: 'Precificação e Comparação de Mercado',
          content: `**Precificação:** Antes de ver odds de mercado:
1. Estima probabilidades para cada resultado
2. Converte para odds justas
3. Adiciona margem de incerteza se necessário

**Comparação de Mercado:** Agora compara com o mercado:
- Se o mercado oferece preço melhor que o teu justo: potencial valor
- Se o mercado oferece preço pior: sem valor
- Verifica várias casas (line shopping)

**Seleção de Mercado:** Às vezes a tua opinião expressa-se melhor num mercado diferente:
- Opinião sobre uma equipa mas não sobre a outra: handicap asiático
- Opinião sobre estilo de jogo: over/under
- Opinião sobre um jogador específico: mercados de jogador

**Não forces:** Se não há valor em nenhum mercado, não aposta. Passar é uma decisão válida.`
        },
        {
          title: 'Dimensionamento, Execução e Registo',
          content: `**Dimensionamento:** Com base no valor encontrado e confiança:
- 1 ponto: Valor padrão
- 1.5-2 pontos: Valor forte com alta confiança
- Nunca mais de 3 pontos (e isso deve ser raro)

**Execução:**
1. Verifica que as odds não mudaram significativamente
2. Usa a casa com o melhor preço
3. Confirma os detalhes da aposta antes de submeter
4. Coloca a aposta

**Registo:** Imediatamente após colocar:
- Data e hora
- Evento e mercado
- Odds obtidas
- Stake
- Raciocínio (breve)
- Preço justo estimado

**Pós-evento:** Adiciona:
- Resultado
- Notas sobre o que aprendeste
- Se o processo foi sólido independentemente do resultado`
        }
      ]
    },
    7: {
      title: '7. Masterclass de Futebol',
      subtitle: 'Mercados de futebol, dinâmica de golos, handicaps asiáticos e como precificar jogos de futebol',
      duration: '22 min de leitura',
      sections: [
        {
          title: 'Mercados de Futebol',
          content: `O futebol oferece uma vasta gama de mercados. Os principais:

**1X2 (Resultado do Jogo):** Vitória casa (1), Empate (X), Vitória fora (2). O mercado mais básico mas inclui risco de empate.

**Handicap Asiático:** Remove o empate dividindo a aposta ou dando vantagem virtual. Exemplo: Equipa A -0.5 significa que precisam de ganhar. Equipa A -1.0 significa ganhar por 2+, devolução se ganhar por 1.

**Golos Over/Under:** Apostas no total de golos. O 2.5 é a linha mais comum. Over 2.5 precisa de 3+ golos.

**Ambas Marcam (BTTS):** Sim ou Não sobre se ambas as equipas marcam.

**Resultado Correto:** Precificar o resultado exato. Alta margem mas às vezes valor em eventos específicos.

**Double Chance:** Combina dois resultados (1X, 12, X2). Odds mais baixas mas menor risco.`
        },
        {
          title: 'Dinâmica de Golos e Over/Under',
          content: `Precificar mercados de golos requer entender:

**Fatores que aumentam golos:**
- Equipas ofensivas com defesas fracas
- Jogos abertos sem nada em jogo
- Condições de campo boas
- Rivalidades com jogos emocionais

**Fatores que diminuem golos:**
- Equipas defensivas ou que precisam de resultado
- Mau tempo (vento forte, chuva intensa)
- Alta altitude
- Primeiras mãos de eliminatórias

**xG (Golos Esperados):** Métrica útil mas cuidado:
- xG histórico não é preditivo por si só
- Qualidade de oportunidades varia
- Forma do guarda-redes importa
- Uma grande oportunidade falhada infla xG

**Dica:** Linha de golos em jogos de futebol europeu de topo normalmente 2.3-2.8 golos esperados. Ajusta com base em fatores específicos.`
        },
        {
          title: 'Handicap Asiático em Detalhe',
          content: `O handicap asiático é popular porque:
- Elimina o empate (reduz opções de 3 para 2)
- Oferece margens menores que 1X2
- Permite posições mais nuançadas

**Linhas comuns:**
- 0: Devolução se empate (pick'em)
- -0.25: Metade ganha se empate, metade devolvida (quarter ball)
- -0.5: Precisam de ganhar
- -0.75: Metade ganha se ganhar por 1, tudo ganha se ganhar por 2+
- -1.0: Precisam de ganhar por 2+, devolução se ganhar por 1

**Quando usar:**
- Preferes reduzir variância
- Queres eliminar o risco de empate
- A linha oferece melhor valor que 1X2

**Armadilha:** Não assumes que handicap asiático é sempre melhor. Compara sempre com 1X2 e outros mercados.`
        }
      ]
    },
    8: {
      title: '8. Masterclass de Corridas de Cavalos',
      subtitle: 'Tipos de corridas, forma, going, e como precificar corridas de cavalos',
      duration: '20 min de leitura',
      sections: [
        {
          title: 'Fundamentos das Corridas',
          content: `As corridas de cavalos oferecem mercados líquidos e oportunidades de valor devido à complexidade.

**Tipos de corridas:**
- Flat: Sem obstáculos, foco em velocidade
- National Hunt: Com obstáculos (hurdles, steeplechase)
- All-weather: Pistas sintéticas, menos afetadas pelo tempo

**Classificação:**
- Corridas de classe mais alta = cavalos melhores
- Handicaps: Cavalos carregam pesos diferentes para equalizar
- Stakes/Group: Corridas de elite sem handicap

**Distâncias:**
- Sprint: 5-7 furlongs (velocidade pura)
- Mile: 8 furlongs (velocidade + resistência)
- Middle distance: 9-11 furlongs
- Staying: 12+ furlongs (resistência dominante)

**Ponto crucial:** A forma de um cavalo varia enormemente com distância, going e tipo de corrida. Um bom cavalo de sprint pode ser medíocre em distância.`
        },
        {
          title: 'Going e Condições',
          content: `Going (condição do terreno) é crucial:

**Classificações (do mais firme ao mais mole):**
- Hard: Muito seco, raro no Reino Unido
- Firm: Terreno rápido
- Good to Firm: Ligeiramente suave
- Good: Condições padrão
- Good to Soft: Início de terreno mole
- Soft: Terreno pesado
- Heavy: Muito pesado, exige resistência

**Impacto:**
- Alguns cavalos preferem terreno firme (ação de galope eficiente)
- Outros preferem terreno mole (mais resistência)
- Going pode mudar durante o dia de corridas
- Verifica sempre o going antes de apostar

**Draw (posição de partida):** Em algumas pistas, certas posições têm vantagem. Pesquisa viés de draw para cada hipódromo.`
        },
        {
          title: 'Leitura de Forma',
          content: `A forma é o registo passado do cavalo. Ler forma requer prática.

**O que procurar:**
- Consistência: Resultados recentes estáveis vs. erráticos
- Classe: Performance em níveis semelhantes
- Going: Forma em condições similares às de hoje
- Distância: Forma à distância de hoje
- Jockey/Trainer: Combinações que funcionam

**Forma recente vs. antiga:**
- 6 corridas recentes mais relevantes
- Forma antiga pode ser enganadora
- Pausa longa pode esconder problemas ou recuperação

**Armadilhas:**
- Valorizar demasiado uma vitória chamativa
- Ignorar a classe da corrida
- Não ajustar para going diferente
- Seguir cegamente favoritos

**Dica:** Foca no "como" não apenas no "o quê". Um segundo lugar apertado a um cavalo forte é melhor que uma vitória fácil contra adversários fracos.`
        }
      ]
    },
    9: {
      title: '9. Masterclass de Ténis',
      subtitle: 'Pontuação de ténis, superfícies, momentum e mercados de ténis',
      duration: '18 min de leitura',
      sections: [
        {
          title: 'Fundamentos do Ténis',
          content: `O ténis oferece oportunidades únicas devido ao formato de pontuação e volatilidade in-play.

**Estrutura de pontuação:**
- Pontos: 15-30-40-game
- Games: Primeiro a 6 (com tie-break a 6-6 geralmente)
- Sets: Melhor de 3 (maioria) ou melhor de 5 (Grand Slams masculinos)

**Superfícies:**
- Hard: Velocidade média, favorece jogadores completos
- Clay: Lenta, favorece jogadores de fundo de court
- Grass: Rápida, favorece servidores e jogadores de rede
- Indoor: Varia mas geralmente favorece servidores

**Impacto da superfície:** Alguns jogadores são especialistas numa superfície. Verifica sempre o registo na superfície específica.`
        },
        {
          title: 'Mercados de Ténis',
          content: `**Match Winner:** O mercado mais básico. Atenção às diferenças entre melhor de 3 e melhor de 5.

**Handicap de Games:** +/- games para equalizar. Exemplo: Jogador A -5.5 games significa que precisa de ganhar por 6+ games de vantagem.

**Handicap de Sets:** +/- sets. Mais arriscado mas pode ter valor.

**Total de Games:** Over/under no total de games. Mais alto = jogo apertado esperado.

**Resultado Correto em Sets:** 2-0, 2-1, etc. Alta margem mas valor possível.

**Primeiro Set:** Apostar apenas no primeiro set reduz variância mas tem margem mais alta.

**In-play:** Ténis é popular in-play. Os preços movem dramaticamente com cada ponto. Cuidado com a volatilidade.`
        },
        {
          title: 'Fatores de Ténis',
          content: `**Forma:**
- Resultados recentes na mesma superfície
- Condição física (lesões, fadiga de torneio)
- Confiança (streak positivo ou negativo)

**Confrontos diretos:** Alguns jogadores têm estilos que não combinam bem contra adversários específicos.

**Condições:**
- Calor extremo favorece jogadores mais aptos
- Vento favorece jogadores adaptáveis
- Altitude favorece jogadores agressivos

**Motivação:**
- Rankings, pontos a defender
- Fadiga de temporada
- Tamanho do torneio

**Armadilhas:**
- Supervalorizar rankings (não refletem forma atual)
- Ignorar condições específicas
- Não considerar motivação
- Apostar em jogos femininos como se fossem masculinos (volatilidade diferente)

**Dica:** Ténis feminino é mais volátil. Sets mais curtos significam mais upsets.`
        }
      ]
    },
    10: {
      title: '10. Masterclass de Basquetebol',
      subtitle: 'Pontuação de basquetebol, ritmo, spreads e totais',
      duration: '18 min de leitura',
      sections: [
        {
          title: 'Fundamentos do Basquetebol',
          content: `O basquetebol tem pontuação alta e mercados líquidos, especialmente na NBA.

**Estrutura:**
- 4 quartos de 12 minutos (NBA) ou 10 minutos (Europa)
- Overtime de 5 minutos se empatado
- Pontuações típicas: 95-130 pontos por equipa (NBA)

**Posições:**
- Point Guard (PG): Organizador
- Shooting Guard (SG): Pontuador exterior
- Small Forward (SF): Versátil
- Power Forward (PF): Interior/exterior
- Center (C): Interior

**Ritmo:** Posses por jogo. Equipas de ritmo alto = mais pontos. Equipas de ritmo baixo = menos pontos. O confronto de ritmos é crucial para totais.`
        },
        {
          title: 'Mercados de Basquetebol',
          content: `**Money Line:** Vencedor do jogo. Favoritos NBA frequentemente -200 ou mais.

**Spread (Point Spread):** Handicap de pontos. Equipa A -6.5 significa ganhar por 7+. O spread NBA mais comum é em torno de -110/-110.

**Totals (Over/Under):** Total combinado de pontos. Linhas NBA tipicamente 210-240. Afetado por ritmo e defesa.

**Primeiro Quarto/Meio:** Apostas parciais. Variância alta mas pode ter valor.

**Props de Jogador:** Pontos, assistências, ressaltos de jogadores individuais. Margem alta mas mercado crescente.

**Alternativas:** Spreads e totais alternativos a preços diferentes. Útil para expressar opiniões específicas.`
        },
        {
          title: 'Fatores de Basquetebol',
          content: `**Descanso e viagens:**
- Back-to-back games (duas noites seguidas) afeta performance
- Viagens transcontinentais causam fadiga
- Equipas locais têm vantagem de descanso

**Lesões:**
- Ausências de estrelas movem linhas significativamente
- Verificar relatórios de lesões antes de apostar
- Uso de minutos de reservas afeta performance

**Motivação:**
- Corrida aos playoffs
- Equipas eliminadas podem descansar jogadores
- Rivalidades

**Matchups:**
- Como os estilos combinam
- Equipas defensivas baixam totais
- Equipas ofensivas aumentam totais

**Armadilhas:**
- Apostar em favoritos grandes (margem torna difícil)
- Ignorar back-to-backs
- Supervalorizar uma performance recente
- Não ajustar para rotação de jogadores`
        }
      ]
    },
    11: {
      title: '11. Masterclass de Hóquei no Gelo',
      subtitle: 'Pontuação de hóquei, goaltending, puck lines e totais',
      duration: '16 min de leitura',
      sections: [
        {
          title: 'Fundamentos do Hóquei',
          content: `O hóquei no gelo é um desporto de baixa pontuação com alta paridade.

**Estrutura:**
- 3 períodos de 20 minutos
- Overtime (5 minutos 3v3 na época regular)
- Shootout se necessário na época regular
- Playoffs: overtime contínuo 5v5

**Pontuação típica:** 2-4 golos por equipa. Resultados 3-2, 4-3 são comuns.

**Posições:**
- Center: Organizador
- Wingers (LW, RW): Atacantes exteriores
- Defensemen (D): Defensores
- Goalie: Guarda-redes

**Paridade:** O hóquei tem alta paridade. Underdogs ganham frequentemente. Isso afeta o valor em money lines.`
        },
        {
          title: 'Mercados de Hóquei',
          content: `**Money Line:** Vencedor do jogo (incluindo OT/shootout). Favoritos tipicamente -130 a -180.

**Puck Line:** Spread fixo de 1.5 golos. Favorito -1.5 (precisa ganhar por 2+), underdog +1.5 (perder por 1 ou ganhar).

**Totals:** Over/under golos. Linha mais comum 5.5 ou 6.0.

**3-Way Money Line:** Vencedor no tempo regulamentar (exclui OT). Preços mais altos, inclui empate.

**Períodos:** Apostas em períodos individuais. Atenção que linhas de período são independentes.

**Props:** Primeiro golo, goleador, props de guarda-redes. Margem alta.`
        },
        {
          title: 'Fatores de Hóquei',
          content: `**Goaltending:** O guarda-redes domina os resultados. Verificar:
- Quem está na baliza
- Forma recente do guarda-redes
- Save percentage
- Confrontos históricos

**Descanso e viagens:**
- Back-to-backs afetam equipas
- Viagens afetam mais que na NBA
- Equipas locais têm vantagem

**Power play e penalty kill:**
- Equipas fortes em power play podem dominar jogos com muitas penalidades
- Penalty kill forte protege em situações difíceis

**Playoffs vs. época regular:**
- Playoffs são mais defensivos
- Totais geralmente mais baixos
- Goaltending mais importante
- Menos upsets que época regular

**Armadilhas:**
- Ignorar o guarda-redes que começa
- Apostar em favoritos grandes (margem apertada)
- Não ajustar totais para playoff hockey
- Supervalorizar forma recente vs. season-long stats`
        }
      ]
    },
    12: {
      title: '12. Masterclass de Basebol',
      subtitle: 'Pitching, run lines, totais e fatores de basebol',
      duration: '18 min de leitura',
      sections: [
        {
          title: 'Fundamentos do Basebol',
          content: `O basebol é único com a sua dependência do pitching inicial.

**Estrutura:**
- 9 innings
- Extra innings se empatado
- Cada equipa bate uma vez por inning

**Pitching:**
- Starting pitcher: Lança primeiros 5-7 innings
- Bullpen: Relevos que completam o jogo
- Closer: Especialista em 9º inning

**Pontuação típica:** 3-6 runs por equipa é comum.

**Diferença chave:** O pitcher inicial domina o resultado. Verificar sempre quem está a lançar antes de apostar. Linhas movem significativamente com mudanças de pitcher.`
        },
        {
          title: 'Mercados de Basebol',
          content: `**Money Line:** Vencedor do jogo. Variação maior que outros desportos (-250 a +200 comum).

**Run Line:** Spread fixo de 1.5 runs. Favorito -1.5 (ganhar por 2+), underdog +1.5 (perder por 1 ou ganhar).

**Totals:** Over/under runs. Linhas típicas 7.5-9.5.

**First 5 Innings (F5):** Apostas apenas na primeira metade. Elimina bullpen uncertainty.

**Listed Pitcher:** Aposta válida apenas se o pitcher listado começar. Se houver mudança, aposta é cancelada.

**Action:** Aposta válida independentemente de mudança de pitcher. Linha pode ajustar.`
        },
        {
          title: 'Fatores de Basebol',
          content: `**Pitching:**
- ERA (Earned Run Average): Runs permitidos por 9 innings
- WHIP: Walks + Hits por inning
- Strikeout rate
- Handedness: Batters vs. LHP/RHP

**Batting:**
- Team OPS vs. LHP/RHP
- Home/away splits
- Recent form
- Lineup changes

**Park factors:**
- Coors Field (Colorado): Muito alto scoring
- Alguns parques favorecem power
- Outros favorecem pitching

**Weather:**
- Vento afeta home runs
- Calor = bola viaja mais
- Chuva pode cancelar/atrasar

**Armadilhas:**
- Apostar antes de confirmar pitcher
- Ignorar park factors
- Supervalorizar uma série recente
- Não verificar lineup (descanso de jogadores)`
        }
      ]
    },
    13: {
      title: '13. Masterclass de Futebol Americano',
      subtitle: 'Spreads, totais, props e fatores de NFL/College',
      duration: '20 min de leitura',
      sections: [
        {
          title: 'Fundamentos do Futebol Americano',
          content: `O futebol americano é o desporto mais apostado nos EUA.

**Estrutura:**
- 4 quartos de 15 minutos (NFL) ou 12 minutos (college)
- Overtime se empatado (regras diferentes NFL vs. college)
- Pontuação: Touchdowns (6), Extra points (1/2), Field goals (3), Safeties (2)

**Diferenças NFL vs. College:**
- NFL: Paridade maior, spreads menores
- College: Discrepância grande entre equipas, spreads enormes possíveis
- College tem mais variabilidade e potencial para upsets

**Key numbers:** 3 e 7 são números chave devido à pontuação. Jogos decididos por 3 ou 7 são muito comuns.`
        },
        {
          title: 'Mercados de Futebol Americano',
          content: `**Spread (Point Spread):** O mercado dominante. Favorito -3.5 precisa ganhar por 4+.

**Money Line:** Vencedor direto. Correlacionado com spread.

**Totals (Over/Under):** Pontos combinados. Linhas NFL típicas 40-55.

**First Half/Quarter:** Apostas parciais. Variância alta.

**Teasers:** Mover linhas a teu favor combinando jogos. Popular mas alta margem.

**Parlays:** Combinações de apostas. Alta margem mas popular.

**Props:** Props de jogador e jogo. Margem alta mas valor possível.`
        },
        {
          title: 'Fatores de Futebol Americano',
          content: `**Weather:**
- Vento afeta passing games e field goals
- Chuva/neve favorece running games
- Frio extremo é fator em certos estádios

**Injuries:**
- Quarterback é crucial
- Linha ofensiva afeta tudo
- Verificar relatórios de lesões

**Matchups:**
- Pass defense vs. pass offense
- Run defense vs. run offense
- Schematic advantages

**Motivation:**
- Playoff implications
- Divisional games (mais competitivos)
- Revenge games
- Coming off bye week (vantagem)

**Home field:** Menos importante que antes mas ainda existe, especialmente em certos estádios.

**Armadilhas:**
- Overreacting a uma semana
- Ignorar key numbers (3, 7)
- Apostar em teasers sem entender a matemática
- Não verificar weather antes de apostar`
        }
      ]
    },
    14: {
      title: '14. Outros Desportos e Mercados de Nicho',
      subtitle: 'MMA, Golf, Esports, Cricket e como abordar mercados menos líquidos',
      duration: '16 min de leitura',
      sections: [
        {
          title: 'MMA/UFC',
          content: `O MMA oferece mercados voláteis com potencial de valor.

**Mercados:**
- Money line (vencedor)
- Method of victory (KO/TKO, Submission, Decision)
- Round betting
- Over/under rounds

**Fatores:**
- Estilos: Striker vs. grappler
- Reach e physical advantages
- Cardio para lutas longas
- Weight cuts (afeta performance)
- Training camp reports

**Armadilhas:**
- Supervalorizar hype
- Ignorar matchup específico
- Não considerar layoff (tempo sem lutar)
- Apostar em favoritos extremos (-400+)

**Oportunidade:** Lines podem ser soft porque o público aposta emocionalmente em nomes conhecidos.`
        },
        {
          title: 'Golf',
          content: `Golf oferece mercados de longo prazo com alta variância.

**Mercados:**
- Outright winner (alta odds, alta variância)
- Top 5/10/20 finishes
- Head-to-head matchups
- First round leader
- Nationality specials

**Fatores:**
- Course fit (comprimento, grass type, greens)
- Recent form
- Course history
- Weather (vento especialmente)
- Putting stats vs. driving stats

**Armadilhas:**
- Apostar em outright winners sem entender variância
- Ignorar course fit
- Supervalorizar major winners em courses que não lhes convêm

**Dica:** Head-to-head matchups oferecem melhor valor que outrights porque reduzem campo a 2 jogadores.`
        },
        {
          title: 'Esports e Cricket',
          content: `**Esports:**
- Mercados crescentes mas liquidez variável
- CS2, LoL, Dota 2, Valorant são os principais
- Fatores: Meta changes, roster changes, map picks
- Oportunidade: Casas de apostas têm menos expertise
- Risco: Match fixing em ligas menores

**Cricket:**
- Muito popular na Ásia, Austrália, UK
- Formatos: Test, ODI, T20
- T20 é o mais popular para apostas
- Fatores: Pitch condition, toss, weather
- Mercados: Match winner, top batsman, top bowler, totals

**Mercados de Nicho em Geral:**
- Menor liquidez = spreads maiores
- Menos expertise das casas = potencial de valor
- Mas também menos informação disponível
- Especialização é chave

**Aviso:** Em mercados de baixa liquidez, vitória consistente pode resultar em limitação de conta mais rápida.`
        }
      ]
    },
    15: {
      title: '15. Masterclass de Tipos de Apostas',
      subtitle: 'Singles, accumulators, systems, props, specials e quando usar cada tipo',
      duration: '14 min de leitura',
      sections: [
        {
          title: 'Singles vs. Accumulators',
          content: `**Singles:** Uma seleção, uma aposta. A base das apostas profissionais.
- Vantagens: Controlo, transparência, fácil de rastrear
- Desvantagens: Returns mais modestos

**Accumulators (Parlays):** Múltiplas seleções combinadas. Todas devem ganhar.
- Vantagens: Retornos altos de stakes baixas
- Desvantagens: Margem composta, probabilidade baixa de sucesso

**Matemática dos accumulators:**
- 2 seleções a 2.00 cada: 4.00 justo mas tipicamente 3.90
- 5 seleções a 2.00 cada: 32.00 justo mas tipicamente 28-30
- A margem compõe com cada seleção

**Regra profissional:** Singles para apostas de valor. Accumulators apenas recreativos ou quando correlação é sub-precificada.`
        },
        {
          title: 'System Bets',
          content: `System bets cobrem múltiplas combinações de um grupo de seleções.

**Exemplos:**
- Trixie: 3 seleções, 4 apostas (3 doubles + 1 treble)
- Yankee: 4 seleções, 11 apostas (6 doubles + 4 trebles + 1 fourfold)
- Lucky 15: 4 seleções, 15 apostas (inclui singles)

**Vantagens:**
- Não precisas de 100% para retorno
- Reduz variância vs. accumulator puro

**Desvantagens:**
- Stake total alta
- Margem ainda compõe
- Complexo de rastrear

**Quando usar:** Raramente. A matemática geralmente não favorece o apostador.`
        },
        {
          title: 'Props e Specials',
          content: `**Props (Propositions):** Apostas em eventos específicos dentro de um jogo.
- Player props: Pontos, assistências, golos de jogador específico
- Game props: Primeiro a marcar, resultado ao intervalo, etc.
- Novelty props: Eventos não desportivos

**Vantagens:**
- Mercados menos eficientes
- Casas de apostas têm menos expertise
- Potencial de valor com pesquisa

**Desvantagens:**
- Margem geralmente alta
- Liquidez baixa
- Limites baixos

**Specials:** Apostas de longo prazo ou eventos especiais.
- Vencedor de campeonato
- Melhor marcador da temporada
- Apostas políticas ou de entretenimento

**Quando usar props:** Quando tens informação específica que o mercado não reflete. Não apostes em props por diversão - a margem é demasiado alta.`
        }
      ]
    },
    16: {
      title: '16. Caderno de Apostas, Registo de Decisões e Registos de Revisão',
      subtitle: 'Como documentar apostas, decisões e aprendizagens de forma sistemática',
      duration: '14 min de leitura',
      sections: [
        {
          title: 'Porque Manter Registos',
          content: `Registos são essenciais porque:

**Memória é pouco fiável:**
- Lembramos vitórias melhor que derrotas
- Reconstruímos raciocínio após o facto
- Esquecemos contexto de decisões

**Registos permitem:**
- Rastrear performance real (não percebida)
- Identificar padrões (bons e maus)
- Calcular ROI por desporto, mercado, stake
- Provar a ti mesmo que tens (ou não) vantagem

**Profissionalismo:** Nenhum trader profissional opera sem registos. Apostadores sérios fazem o mesmo.`
        },
        {
          title: 'O Que Registar',
          content: `**Para cada aposta:**
- Data e hora
- Evento (equipas/jogadores, competição)
- Mercado (tipo de aposta)
- Seleção
- Odds obtidas
- Stake (em unidades)
- Casa de apostas
- Odds de fecho (para calcular CLV)

**Notas de decisão:**
- Raciocínio breve
- Preço justo estimado
- Nível de confiança
- Fatores chave considerados

**Pós-evento:**
- Resultado
- P&L
- Notas de revisão
- O que aprendeste

**Formato:** Spreadsheet (Excel/Google Sheets) é suficiente. Apps específicas também existem mas spreadsheet personalizada é geralmente melhor.`
        },
        {
          title: 'Revisão e Análise',
          content: `**Revisão semanal:**
- P&L da semana
- Número de apostas
- Taxa de acerto vs. esperada
- CLV médio
- Erros identificados

**Revisão mensal:**
- P&L do mês
- ROI por desporto/mercado
- Análise de stakes (estás a dimensionar bem?)
- Padrões identificados

**Perguntas de revisão:**
- As odds de fecho confirmaram que tinha valor?
- O raciocínio era sólido independentemente do resultado?
- Houve erros de processo?
- Que decisões tomaria de forma diferente?

**Armadilha:** Julgar decisões apenas pelo resultado. Uma aposta de valor que perdeu ainda foi uma boa decisão. Uma aposta má que ganhou ainda foi uma má decisão.

**Regra:** Sê brutalmente honesto nos teus registos. Não edites história. Não escondas perdas de ti mesmo.`
        }
      ]
    },
    17: {
      title: '17. Revisão de Performance e Aprendizagem com Resultados',
      subtitle: 'Como analisar a tua performance de apostas e melhorar sistematicamente',
      duration: '12 min de leitura',
      sections: [
        {
          title: 'Métricas de Performance',
          content: `**Métricas primárias:**
- ROI (Return on Investment): Lucro ÷ Total apostado × 100
- Yield: Lucro ÷ Número de apostas
- CLV (Closing Line Value): Média de % batida na linha de fecho

**Métricas secundárias:**
- Strike rate (taxa de acerto)
- Average odds
- P&L por desporto/mercado
- P&L por stake size
- Drawdown máximo

**Interpretação:**
- ROI de 3-5% é muito bom para volume alto
- ROI de 10%+ em volume baixo pode ser variância
- CLV positivo consistente é o melhor indicador de skill
- Strike rate depende de odds médias

**Tamanho de amostra:** Precisas de 500+ apostas para tirar conclusões significativas. Amostras pequenas são dominadas por variância.`
        },
        {
          title: 'Separar Skill de Sorte',
          content: `**O problema:** A curto prazo, resultados são dominados por variância.

**Como identificar skill:**
- CLV positivo consistente
- Resultados próximos do esperado ao longo de grandes amostras
- Processo replicável documentado
- Performance consistente em diferentes períodos

**Sinais de sorte (não skill):**
- Resultados muito acima do esperado
- Sem CLV positivo
- Incapacidade de explicar vantagem
- Performance em amostra pequena

**O que fazer:**
- Confia no processo, não nos resultados a curto prazo
- Usa CLV como indicador precoce
- Revisa decisões, não apenas resultados
- Mantém registos detalhados para análise futura`
        },
        {
          title: 'Melhoria Contínua',
          content: `**Processo de melhoria:**
1. Identifica áreas fracas nos teus registos
2. Desenvolve hipótese sobre porque
3. Faz ajustes ao processo
4. Mede resultados
5. Repete

**Áreas comuns de melhoria:**
- Line shopping (muitos apostam na primeira casa)
- Timing (apostar muito cedo ou tarde)
- Seleção de mercado (usar mercado errado)
- Dimensionamento (stakes inconsistentes)
- Disciplina (apostas impulsivas)

**Perguntas para auto-análise:**
- Onde estou a deixar valor na mesa?
- Que erros repito?
- Que desportos/mercados são mais fortes?
- Onde devo focar ou abandonar?

**Mentalidade:** Melhoria é gradual. Não esperes transformações overnight. Pequeñas melhorias consistentes compõem ao longo do tempo.`
        }
      ]
    },
    18: {
      title: '18. Psicologia, Disciplina, Controlo de Tilt e Rotinas Profissionais',
      subtitle: 'Gerir emoções, manter disciplina e desenvolver hábitos profissionais',
      duration: '16 min de leitura',
      sections: [
        {
          title: 'Psicologia do Apostador',
          content: `**Vieses comuns:**
- Viés de confirmação: Procurar informação que confirma opinião
- Recência: Sobrevalorizar eventos recentes
- Falácia do jogador: Acreditar que "é devido" acontecer
- Overconfidence: Sobreestimar conhecimento próprio
- Loss aversion: Dor de perda maior que prazer de ganho

**Como combater:**
- Consciencialização: Saber que os vieses existem
- Processo: Seguir passos definidos independentemente de emoção
- Registos: Documentar para revisão objectiva posterior
- Pausa: Se sentir emocional, não apostar

**Realidade:** Todos somos suscetíveis a vieses. O profissional não é imune - apenas tem sistemas para minimizar impacto.`
        },
        {
          title: 'Tilt e Como Evitá-lo',
          content: `**O que é tilt:** Estado emocional que leva a decisões irracionais, geralmente após perdas.

**Sinais de tilt:**
- Aumentar stakes para recuperar perdas
- Fazer apostas não planeadas
- Ignorar processo de análise
- Sentir raiva ou frustração
- Pensamento de "preciso de ganhar esta"

**Prevenção:**
- Limites de perda diária/semanal
- Regras de pausa obrigatória após sequência negativa
- Nunca apostar sob influência (álcool, cansaço)
- Separar emocionalmente dos resultados

**Recuperação de tilt:**
- Para imediatamente
- Fecha as apps/sites
- Faz algo não relacionado com apostas
- Revê mais tarde com mente fresca
- Analisa o que causou o tilt

**Regra:** Se perderes X% da banca num dia, para. Volta amanhã.`
        },
        {
          title: 'Rotinas Profissionais',
          content: `**Rotina diária:**
- Hora definida para análise (não todo o dia)
- Verificar notícias relevantes
- Atualizar registos
- Identificar potenciais apostas
- Line shopping antes de colocar
- Documentar decisões

**Rotina semanal:**
- Revisão de performance
- Atualização de P&L
- Identificar padrões
- Ajustar plano se necessário

**Separação vida/apostas:**
- Não verificar constantemente resultados
- Ter hobbies não relacionados
- Manter relacionamentos saudáveis
- Exercício e sono adequados

**Sustentabilidade:**
- Apostas devem ser parte da vida, não a vida toda
- Burnout é real
- Pausas são saudáveis
- Se está a causar stress excessivo, reavalia

**Profissionalismo:** Trata apostas como um trabalho. Horários, processo, disciplina. Não como entretenimento constante.`
        }
      ]
    },
    19: {
      title: '19. Standards de Jogo Responsável e Proteção Pessoal',
      subtitle: 'Práticas de jogo responsável, limites, auto-exclusão e quando procurar ajuda',
      duration: '12 min de leitura',
      sections: [
        {
          title: 'Princípios de Jogo Responsável',
          content: `**Fundamentos:**
- Aposta apenas dinheiro que podes perder
- Nunca apostes com dinheiro emprestado
- Estabelece limites antes de começar
- Apostas são entretenimento, não rendimento garantido

**Limites recomendados:**
- Limite de banca: Dinheiro total dedicado a apostas
- Limite diário: Máximo a arriscar por dia
- Limite de perda: Stop-loss diário/semanal
- Limite de tempo: Horas por dia/semana

**Sinais de alerta:**
- Apostar mais do que planeado
- Perseguir perdas
- Esconder apostas de família
- Negligenciar responsabilidades
- Stress ou ansiedade relacionados com apostas
- Pedir dinheiro emprestado para apostar

**Auto-reflexão:** Sê honesto contigo mesmo. Se reconheces sinais de alerta, age.`
        },
        {
          title: 'Ferramentas de Proteção',
          content: `**Ferramentas das casas de apostas:**
- Limites de depósito
- Limites de perda
- Limites de tempo
- Cooling-off periods
- Auto-exclusão temporária
- Auto-exclusão permanente

**Como usar:**
- Define limites antes de precisar deles
- Usa cooling-off se sentires que estás a perder controlo
- Auto-exclusão é válida se necessário

**Sistemas nacionais:**
- Muitos países têm programas de auto-exclusão nacionais
- Verifica o que está disponível no teu país
- Usa se necessário - não há vergonha

**Realidade:** Jogos de azar podem ser viciantes. Profissionais reconhecem isto e tomam precauções.`
        },
        {
          title: 'Quando Procurar Ajuda',
          content: `**Procura ajuda se:**
- Apostas estão a afetar relacionamentos
- Apostas estão a afetar trabalho/estudos
- Estás a mentir sobre apostas
- Estás a apostar com dinheiro que não podes perder
- Sentes que perdeste o controlo
- Apostas estão a causar ansiedade/depressão

**Recursos:**
- Linhas de ajuda nacionais para jogo problemático
- Gamblers Anonymous
- Terapeutas especializados
- Programas de auto-exclusão

**Para amigos/família:**
- Se alguém que conheces mostra sinais de problema
- Aborda com compaixão, não julgamento
- Oferece apoio
- Sugere recursos profissionais

**Mensagem final:** Apostas devem ser uma atividade controlada e responsável. Se deixarem de ser, há ajuda disponível. Usar essa ajuda é sinal de força, não fraqueza.`
        }
      ]
    },
    20: {
      title: '20. Exercícios Práticos',
      subtitle: 'Exercícios hands-on para aplicar os conceitos aprendidos',
      duration: '25 min de leitura',
      sections: [
        {
          title: 'Exercícios de Probabilidade e Valor',
          content: `**Exercício 1: Conversão de Odds**
Converte as seguintes odds entre formatos:
a) 2.50 decimal → fracionário → americano
b) 5/2 fracionário → decimal → americano
c) +180 americano → decimal → fracionário

**Exercício 2: Probabilidade Implícita**
Calcula a probabilidade implícita:
a) Odds 1.80
b) Odds 3.50
c) Odds 1.25

**Exercício 3: Identificar Valor**
Acreditas que a Equipa A tem 55% de hipóteses. Há valor em:
a) Odds 1.75?
b) Odds 1.90?
c) Odds 2.00?

**Exercício 4: Cálculo de EV**
Aposta de 50€ a 2.20. Acreditas que tens 50% de hipóteses. Calcula o EV.

**Respostas no final do módulo.**`
        },
        {
          title: 'Exercícios de Gestão de Banca',
          content: `**Exercício 5: Dimensionamento de Banca**
Tens 1000€ de banca e usas stakes de 2%.
a) Qual é a tua stake padrão?
b) Após ganhar 100€, qual é a nova stake?
c) Após perder 100€, qual é a nova stake?

**Exercício 6: Kelly Criterion**
Acreditas que uma aposta tem 55% de hipóteses a odds 2.10.
a) Calcula o Kelly completo
b) Calcula meio-Kelly
c) Por que usarias fracionário?

**Exercício 7: Sequência de Perdas**
Com banca de 1000€ e stakes de 2%, quantas perdas seguidas precisas para perder 20% da banca?

**Exercício 8: Cenário de Tilt**
Perdeste 5 apostas seguidas, totalizando -8% da banca. Descreve:
a) Como te sentirias?
b) Que ações são apropriadas?
c) Que ações seriam tilt?`
        },
        {
          title: 'Exercícios de Análise e Registo',
          content: `**Exercício 9: Template de Registo**
Cria um template de registo com os campos necessários para documentar uma aposta completa.

**Exercício 10: Análise de Decisão**
Para um evento real próximo:
a) Faz a tua análise independente
b) Atribui probabilidades
c) Compara com o mercado
d) Decide se há valor
e) Documenta o teu raciocínio

**Exercício 11: Revisão Post-Evento**
Após o evento do exercício anterior:
a) Anota o resultado
b) Avalia se o processo foi bom
c) Identifica o que aprendeste
d) O que farias diferente?

**Exercício 12: Auto-Auditoria**
Responde honestamente:
a) Tenho registos completos das minhas apostas?
b) Sei o meu ROI real?
c) Sigo um processo consistente?
d) Que área precisa de mais trabalho?

**Nota:** Estes exercícios são para prática pessoal. Fazê-los seriamente melhorará significativamente as tuas apostas.`
        }
      ]
    },
    21: {
      title: '21. Glossário e Referência Rápida',
      subtitle: 'Definições de termos essenciais e referência para consulta rápida',
      duration: '10 min de leitura',
      sections: [
        {
          title: 'Termos de Apostas A-M',
          content: `**Accumulator (Acca):** Aposta combinada onde todas as seleções devem ganhar.

**Action:** Ter uma aposta num evento. "Tenho action nesse jogo."

**Asian Handicap:** Sistema de handicap que elimina o empate usando linhas fracionárias.

**Bankroll:** Capital total dedicado a apostas.

**Closing Line:** Preço final antes do evento começar.

**CLV (Closing Line Value):** Diferença entre preço obtido e linha de fecho.

**Edge:** Vantagem sobre o mercado.

**EV (Expected Value):** Lucro ou perda média esperada por aposta.

**Favourite:** Seleção com maior probabilidade implícita de ganhar.

**Handle:** Volume total de dinheiro apostado num evento.

**Hedge:** Apostar no lado oposto para garantir lucro ou minimizar perda.

**Juice/Vig:** Margem da casa de apostas.

**Line:** O preço ou spread oferecido.

**Line Shopping:** Comparar preços em várias casas.

**Lock:** Termo de marketing para aposta "certa" (não existe).

**Longshot:** Seleção com baixa probabilidade implícita.

**Margin:** Ver Juice/Vig.

**Moneyline:** Aposta no vencedor direto, sem spread.`
        },
        {
          title: 'Termos de Apostas N-Z',
          content: `**Odds:** Preço oferecido que determina pagamento e probabilidade implícita.

**Over/Under:** Aposta no total de pontos/golos ser acima ou abaixo de uma linha.

**Parlay:** Ver Accumulator.

**Pick'em:** Jogo sem favorito claro, linha de 0.

**Point Spread:** Handicap de pontos para equalizar uma aposta.

**Prop (Proposition):** Aposta em evento específico dentro de um jogo.

**Push:** Empate exato na linha, stake devolvida.

**ROI (Return on Investment):** Lucro ÷ Total apostado × 100.

**Sharp:** Apostador ou casa de apostas sofisticado e informado.

**Soft:** Casa de apostas com linhas menos eficientes.

**Square:** Apostador recreativo, oposto de sharp.

**Stake:** Montante arriscado numa aposta.

**Steam:** Movimento rápido de linha devido a ação de dinheiro sharp.

**Teaser:** Aposta combinada onde moves linhas a teu favor.

**Tout:** Pessoa que vende seleções.

**Underdog:** Seleção com menor probabilidade implícita de ganhar.

**Unit:** Medida padrão de stake (tipicamente 1-2% da banca).

**Value:** Quando odds oferecidas implicam probabilidade menor que a real.

**Yield:** Lucro ÷ Número de apostas.`
        },
        {
          title: 'Fórmulas de Referência Rápida',
          content: `**Conversão de Odds:**
- Decimal para probabilidade: 1 ÷ odds × 100
- Probabilidade para decimal: 1 ÷ (probabilidade/100)
- Decimal para fracionária: (odds - 1) / 1 → simplificar
- Americana + para decimal: (odds/100) + 1
- Americana - para decimal: (100/odds) + 1

**Cálculo de Valor:**
- EV = (P(ganhar) × Lucro) - (P(perder) × Stake)
- Valor existe se: Tuas odds justas < Odds oferecidas

**Kelly Criterion:**
- Kelly% = (b × p - q) ÷ b
- Onde: b = odds - 1, p = prob ganhar, q = prob perder
- Usa ¼ a ½ Kelly na prática

**ROI:**
- ROI = (Lucro ÷ Total Apostado) × 100

**CLV:**
- CLV% = ((Odds obtidas - Odds fecho) ÷ Odds fecho) × 100

**Margem:**
- Margem = (Soma de probabilidades implícitas) - 100%

**Break-even Strike Rate:**
- = 1 ÷ Odds decimais × 100`
        }
      ]
    }
  }
}
