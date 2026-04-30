import { TrainingModule } from '@/lib/training-content'

export const trainingModulesIT: TrainingModule[] = [
  {
    id: 1,
    title: 'Cosa Fanno Diversamente gli Scommettitori Efficaci',
    slug: 'cosa-fanno-diversamente-gli-scommettitori-efficaci',
    description: 'Comprendere la mentalità e le abitudini che distinguono gli scommettitori di successo dalla massa.',
    sections: [
      {
        title: 'La Mentalità del Partecipante al Mercato',
        content: `Gli scommettitori efficaci vedono le scommesse come partecipazione al mercato, non come gioco d'azzardo. Trattano i mercati delle scommesse come strumenti finanziari dove l'informazione, i tempi e la disciplina contano più della fortuna o dell'intuizione.

Invece di chiedere "Chi vincerà?", chiedono "Il prezzo riflette accuratamente la probabilità?" Questo spostamento trasforma l'attività dalla previsione alla valutazione—e quella distinzione definisce chi prospera a lungo termine.`
      },
      {
        title: 'Selettività Rispetto all\'Azione',
        content: `La maggior parte degli scommettitori ricreativi cerca ragioni per scommettere. Gli scommettitori efficaci cercano ragioni per passare.

Comprendono che scommettere meno spesso ma con maggiore convinzione è la strada verso la redditività. Sanno che ogni scommessa dovrebbe soddisfare un criterio chiaro—e se non lo fa, non succede nulla. Passare è una decisione attiva, non una debolezza.`
      },
      {
        title: 'La Vera Descrizione del Lavoro',
        content: `Se dovessi riassumere il lavoro in una frase: trovare prezzi errati, scommettere quando le probabilità favoriscono te, e non fare nient'altro.

Questo sembra semplice—ma richiede controllo emotivo, comprensione del mercato e coerenza. La maggior parte delle persone non riesce a sedersi ferma. Vogliono azione, eccitazione o conferma. Lo scommettitore disciplinato vuole valore—e solo valore.`
      },
      {
        title: 'Cosa Separa gli Scommettitori Disciplinati',
        content: `Non è l'intelligenza o l'accesso a informazioni segrete. È la temperanza.

La capacità di:
- Non inseguire le perdite
- Non aumentare le puntate dopo le vittorie per emozione
- Non scommettere per noia
- Non abbandonare un sistema dopo una settimana negativa

Queste non sono abilità glamour. Ma sono i comportamenti che separano i pochi che durano dai molti che se ne vanno.`
      },
      {
        title: 'Perché Questo Manuale è Deliberatamente Lungo',
        content: `Questo pack copre 20 sezioni per una ragione: le scommesse sono una disciplina. Ha profondità.

Il materiale non è progettato per essere scorso—è progettato per essere rivisitato. Alcuni concetti avranno senso solo dopo mesi di pratica. Va bene così.

Prendilo passo per passo. Rileggilo. Prendi appunti. Costruisci un sistema che funzioni per il tuo sport, la tua fascia di prezzo e il tuo stile di pensiero.`
      },
      {
        title: 'Il Ciclo Operativo dello Scommettitore',
        content: `Tutti i 20 moduli ruotano attorno a questo ciclo:

1. Ricerca (fixture, notizie, statistiche)
2. Valutazione (modello o giudizio)
3. Confronto dei Prezzi (quota vs stima di probabilità)
4. Decisione (scommettere, passare o aspettare)
5. Esecuzione (piazzamento, tempistica, puntata)
6. Revisione (tracking, registrazione, analisi)

Ogni sezione espande un pezzo di questa sequenza. Che tu stia studiando gestione del bankroll o mercati del tennis, stai raffinando parte di questo ciclo.`
      }
    ]
  },
  {
    id: 2,
    title: 'Come Funzionano Davvero Bookmaker, Exchange e Mercati delle Scommesse',
    slug: 'come-funzionano-bookmaker-exchange-mercati',
    description: 'Approfondimento sulla struttura dei mercati delle scommesse, i margini dei bookmaker e le dinamiche degli exchange.',
    sections: [
      {
        title: 'Il Ruolo del Bookmaker',
        content: `I bookmaker sono intermediari di mercato. Pubblicano quote, accettano scommesse e gestiscono il rischio. Il loro obiettivo non è prevedere correttamente i risultati—è fare profitto indipendentemente da chi vince.

Lo fanno incorporando un margine nelle quote (chiamato overround o vig), limitando o bandendo i giocatori vincenti, e regolando le linee in base ai flussi di scommesse.`
      },
      {
        title: 'Overround Spiegato',
        content: `Se un bookmaker offre quote su un evento a due esiti e la somma delle probabilità implicite supera il 100%, il surplus è il suo margine.

Per esempio:
- Squadra A: 1.90 (52.6% implicito)
- Squadra B: 1.90 (52.6% implicito)
- Totale: 105.2%

Quel 5.2% extra è il margine del bookmaker. Come scommettitore, stai partendo con un costo incorporato.`
      },
      {
        title: 'Exchange vs Bookmaker Tradizionali',
        content: `Gli exchange (come Betfair, Betdaq, Smarkets) ti permettono di scommettere contro altri scommettitori, non contro una casa.

Puoi "Back" (scommettere a favore) o "Lay" (scommettere contro) un risultato. L'exchange addebita una commissione sulle vincite nette (tipicamente 2-5%) invece di incorporare un margine nelle quote.

Questo significa spesso quote migliori—ma anche meno liquidità su mercati minori.`
      },
      {
        title: 'Formazione del Mercato e Movimento delle Quote',
        content: `Le quote non sono statiche. Si muovono in base a:
- Volume delle scommesse
- Notizie (infortuni, meteo, formazioni)
- Attività degli sharp (scommettitori professionisti)
- Algoritmi dei bookmaker

Comprendere perché una linea si muove—e se quel movimento riflette informazioni reali o rumore—è parte della lettura del mercato.`
      },
      {
        title: 'Perché i Bookmaker Limitano i Vincitori',
        content: `I bookmaker non sono obbligati a fare affari con te. Se vinci costantemente, possono ridurre le tue puntate massime, offriti quote peggiori, o chiudere il tuo conto completamente.

Questo è frustrante ma logico: la loro attività dipende da clienti che perdono a lungo termine. I vincitori persistenti sono cattivi clienti.

Ecco perché molti scommettitori seri usano exchange, conti multipli o servizi come Pinnacle che accolgono gli sharp.`
      }
    ]
  },
  {
    id: 3,
    title: 'Quote, Probabilità Implicita e Prezzo Equo',
    slug: 'quote-probabilita-implicita-prezzo-equo',
    description: 'Padroneggiare la matematica delle quote e capire quando un prezzo rappresenta valore.',
    sections: [
      {
        title: 'Formati delle Quote: Decimale, Frazionario, Americano',
        content: `Le quote decimali mostrano il ritorno totale per unità puntata. 2.50 significa che ricevi €2.50 per ogni €1 puntato (inclusa la puntata).

Le quote frazionarie mostrano il profitto relativo alla puntata. 6/4 significa €6 di profitto per ogni €4 puntati.

Le quote americane usano +/- rispetto a €100. +150 significa €150 di profitto su €100 puntati; -150 significa che devi scommettere €150 per vincere €100.

Usa quello con cui ti trovi più comodo—ma assicurati di sapere convertire.`
      },
      {
        title: 'Calcolare la Probabilità Implicita',
        content: `Per convertire quote decimali in probabilità implicita:

Probabilità Implicita = 1 / Quota Decimale

Esempio:
- Quota 2.00 → 1/2.00 = 50%
- Quota 1.50 → 1/1.50 = 66.7%
- Quota 3.00 → 1/3.00 = 33.3%

Questo ti dice quale probabilità il bookmaker sta prezzando. Confrontalo con la tua stima per valutare il valore.`
      },
      {
        title: 'Prezzo Equo vs Prezzo di Mercato',
        content: `Un prezzo equo è la quota che riflette la vera probabilità di un risultato—senza margine.

Se credi che una squadra abbia il 50% di probabilità di vincere, il prezzo equo è 2.00. Se il bookmaker offre 2.10, è valore. Se offre 1.85, non lo è.

Il tuo lavoro è stimare i prezzi equi e trovare discrepanze.`
      },
      {
        title: 'Rimuovere l\'Overround',
        content: `Per trovare le probabilità "reali" da un set di quote, devi rimuovere il margine.

Metodo semplice: dividi ogni probabilità implicita per la somma totale.

Se le probabilità implicite sommano a 105%, e una risultato mostra 52.5%, la probabilità corretta è 52.5/105 = 50%.

Questo aiuta a confrontare la tua visione con la vera stima del mercato.`
      }
    ]
  },
  {
    id: 4,
    title: 'Valore, Expected Value, Line Shopping e Closing Line Value',
    slug: 'valore-expected-value-line-shopping-clv',
    description: 'I concetti fondamentali per identificare scommesse redditizie a lungo termine.',
    sections: [
      {
        title: 'Cos\'è il Valore nelle Scommesse',
        content: `Il valore esiste quando la quota offerta è superiore a quanto dovrebbe essere basata sulla vera probabilità.

Se una moneta equa viene lanciata e qualcuno ti offre 2.20 su testa, quello è valore—perché il prezzo equo è 2.00.

Trovare valore non garantisce di vincere quella scommessa. Significa che se fai la stessa scommessa molte volte, andrai avanti.`
      },
      {
        title: 'Calcolo dell\'Expected Value (EV)',
        content: `EV misura il profitto medio per scommessa nel tempo.

Formula:
EV = (Probabilità di Vincita × Profitto Potenziale) - (Probabilità di Perdita × Puntata)

Esempio:
- Quota 2.50, stimi 45% di vincita
- EV = (0.45 × 1.50) - (0.55 × 1) = 0.675 - 0.55 = +0.125

EV positivo significa scommessa redditizia a lungo termine.`
      },
      {
        title: 'Line Shopping',
        content: `Line shopping significa confrontare quote tra bookmaker per ottenere il miglior prezzo.

Una differenza di 0.05-0.10 nelle quote può sembrare piccola, ma nel tempo si accumula significativamente.

Usa siti di comparazione quote. Mantieni conti su più bookmaker. Non accettare mai il primo prezzo che vedi.`
      },
      {
        title: 'Closing Line Value (CLV)',
        content: `La closing line è la quota finale prima che l'evento inizi. È considerata la più efficiente perché incorpora tutte le informazioni disponibili.

Se ottieni quote migliori della closing line, hai catturato CLV—e questo è uno dei migliori indicatori di abilità nelle scommesse.

Traccia le tue quote di apertura vs closing per misurare le tue prestazioni.`
      }
    ]
  },
  {
    id: 5,
    title: 'Gestione del Bankroll, Staking e Sopravvivenza alla Varianza',
    slug: 'gestione-bankroll-staking-varianza',
    description: 'Proteggere il tuo capitale attraverso dimensionamento appropriato delle puntate e comprensione della varianza.',
    sections: [
      {
        title: 'Cos\'è un Bankroll',
        content: `Il tuo bankroll è il denaro dedicato esclusivamente alle scommesse. Non sono soldi per l'affitto, cibo o emergenze.

Definisci un importo che puoi permetterti di perdere completamente. Quello è il tuo bankroll. Non aggiungere mai fondi extra per "inseguire" le perdite.`
      },
      {
        title: 'Metodi di Staking',
        content: `Flat Staking: Scommetti la stessa percentuale (es. 2%) su ogni scommessa. Semplice e sicuro.

Kelly Criterion: Calcola la puntata ottimale basata sul tuo edge percepito. Più aggressivo, richiede stime accurate.

Kelly Frazionato: Usa una frazione (es. metà o quarto) del Kelly completo. Bilancia crescita e protezione dal rischio.`
      },
      {
        title: 'Comprendere la Varianza',
        content: `La varianza è l'oscillazione naturale dei risultati. Anche con edge positivo, avrai sequenze perdenti.

Una sequenza di 20 scommesse perdenti consecutive è possibile anche con 55% di win rate. Devi essere finanziariamente e psicologicamente preparato.

Più piccole sono le tue puntate rispetto al bankroll, meglio sopravvivi alla varianza.`
      },
      {
        title: 'Mai Scommettere Tutto',
        content: `La regola più importante: non scommettere mai una porzione significativa del tuo bankroll su una singola scommessa.

Anche una scommessa "sicura" può perdere. E se perdi troppo, non avrai capitale per recuperare.

Mantieni le singole puntate tra 1-5% del bankroll. 2-3% è raccomandato per la maggior parte.`
      }
    ]
  },
  {
    id: 6,
    title: 'Il Flusso di Lavoro Completo dello Scommettitore: Dalla Lista Partite alla Scommessa Piazzata',
    slug: 'flusso-lavoro-completo-scommettitore',
    description: 'Un processo passo-passo dalla ricerca iniziale all\'esecuzione finale.',
    sections: [
      {
        title: 'Fase 1: Scansione delle Partite',
        content: `Inizia guardando la lista delle partite per il tuo sport/lega. Identifica eventi che conosci e comprendi.

Non cercare di coprire tutto. Concentrati dove hai competenza o edge informativo.`
      },
      {
        title: 'Fase 2: Ricerca e Analisi',
        content: `Raccogli informazioni rilevanti:
- Notizie squadre, infortuni, squalifiche
- Statistiche recenti e trend
- Head-to-head storici
- Fattori situazionali (trasferte, riposo, motivazione)

Forma la tua opinione prima di guardare le quote.`
      },
      {
        title: 'Fase 3: Valutazione e Pricing',
        content: `Basandoti sulla tua analisi, stima le probabilità.

Non deve essere preciso al decimale. Un range va bene: "Penso che vincano tra il 55-60% delle volte."

Poi converti in quota: 57.5% → circa 1.74.`
      },
      {
        title: 'Fase 4: Confronto con il Mercato',
        content: `Ora guarda le quote offerte. Se il bookmaker offre 1.90 e il tuo prezzo equo è 1.74, non c'è valore—passa.

Se offre 1.95 e il tuo prezzo equo è 2.10, c'è valore—considera di scommettere.`
      },
      {
        title: 'Fase 5: Decisione ed Esecuzione',
        content: `Se c'è valore, decidi la puntata basandoti sul tuo sistema.

Piazza la scommessa al miglior prezzo disponibile. Documenta tutto: evento, quota, puntata, ragionamento.`
      },
      {
        title: 'Fase 6: Revisione Post-Evento',
        content: `Dopo l'evento, aggiorna i tuoi record. Ma non giudicare la decisione dal risultato.

Chiediti: "La mia analisi era ragionevole? Ho trovato valore?" Il risultato singolo non conta—il processo sì.`
      }
    ]
  },
  {
    id: 7,
    title: 'Masterclass Calcio',
    slug: 'masterclass-calcio',
    description: 'Strategie e approcci specifici per le scommesse sul calcio.',
    sections: [
      {
        title: 'Mercati Principali del Calcio',
        content: `I mercati più comuni:
- 1X2 (vittoria casa, pareggio, vittoria trasferta)
- Over/Under goal
- Asian Handicap
- Both Teams to Score (BTTS)
- Risultato Esatto

Ogni mercato ha le sue dinamiche. Non devi padroneggiarli tutti—specializzati dove trovi edge.`
      },
      {
        title: 'Fattori Chiave da Analizzare',
        content: `- Expected Goals (xG) vs goal effettivi
- Forma recente (ma attenzione alla regressione verso la media)
- Infortuni chiave e squalifiche
- Calendario e gestione delle rose
- Condizioni meteo e stato del campo
- Importanza della partita per entrambe le squadre`
      },
      {
        title: 'Asian Handicap Spiegato',
        content: `L'Asian Handicap elimina il pareggio dando un vantaggio/svantaggio virtuale a una squadra.

- -0.5: La squadra deve vincere
- -1.0: La squadra deve vincere con 2+ gol
- -0.25: Metà puntata su 0, metà su -0.5

È più complesso ma spesso offre valore migliore per favoriti chiari.`
      },
      {
        title: 'Trappole Comuni nel Calcio',
        content: `- Sovrastimare squadre in forma (potrebbe essere fortuna)
- Ignorare il contesto (derby, retrocessione, gestione rosa)
- Scommettere su tutte le partite invece di essere selettivi
- Fidarsi ciecamente delle statistiche senza contesto`
      }
    ]
  },
  {
    id: 8,
    title: 'Masterclass Ippica',
    slug: 'masterclass-ippica',
    description: 'Navigare i mercati delle corse ippiche e sviluppare un approccio analitico.',
    sections: [
      {
        title: 'Tipi di Corse e Superfici',
        content: `- Piano: velocità pura, vari distanze
- Ostacoli: siepi e steeple
- Trotto: diversa disciplina

Superfici: erba, sabbia (all-weather), dirt (USA)

Ogni tipo richiede valutazione diversa. Specializzati.`
      },
      {
        title: 'Fattori Fondamentali',
        content: `- Forma recente (ma considera il livello di competizione)
- Classe della corsa
- Distanza preferita del cavallo
- Preferenza di terreno (pesante vs veloce)
- Fantino e allenatore
- Peso trasportato
- Draw (posizione di partenza in pista)`
      },
      {
        title: 'Leggere il Mercato',
        content: `L'ippica ha mercati molto liquidi e movimenti significativi.

Osserva:
- Steam moves (forti accorciamenti di quota)
- Drifters (cavalli che si allungano)
- Informazioni dall'attività di mercato

I mercati dell'ippica sono spesso più efficienti di altri sport—trovare edge è difficile.`
      },
      {
        title: 'Each Way e Place Betting',
        content: `Each Way: due scommesse - una per vincere, una per piazzamento.

Può offrire valore quando le quote place sono generose rispetto alle probabilità reali di piazzamento.

Analizza separatamente il valore win e place.`
      }
    ]
  },
  {
    id: 9,
    title: 'Masterclass Tennis',
    slug: 'masterclass-tennis',
    description: 'Sfruttare le peculiarità del tennis per trovare valore.',
    sections: [
      {
        title: 'Struttura del Tennis',
        content: `Il tennis è sport individuale—nessun compagno di squadra a compensare una giornata storta.

Formato partite: al meglio di 3 o 5 set (Slam maschili).

Superficie: erba, terra battuta, cemento—impatto enorme sulle prestazioni.`
      },
      {
        title: 'Mercati Principali',
        content: `- Match Winner
- Set Handicap
- Game Handicap
- Over/Under Games
- Set Betting (risultato esatto in set)

Il tennis live è molto popolare—le quote cambiano rapidamente.`
      },
      {
        title: 'Fattori Specifici del Tennis',
        content: `- Statistiche di servizio (aces, % prima, punti vinti su prima/seconda)
- Performance su superficie
- Head-to-head
- Forma fisica e infortuni
- Fattore mentale in momenti cruciali
- Scheduling (partite consecutive, viaggi)`
      },
      {
        title: 'Volatilità e Varianza',
        content: `Il tennis ha alta varianza intrinseca. Un break di servizio può cambiare tutto.

Anche grandi favoriti possono perdere set o subire sconfitte inaspettate.

Questo crea opportunità per scommettitori informati—ma richiede gestione del rischio attenta.`
      }
    ]
  },
  {
    id: 10,
    title: 'Masterclass Basket',
    slug: 'masterclass-basket',
    description: 'Analizzare il basket per le scommesse: NBA, Europa e oltre.',
    sections: [
      {
        title: 'Caratteristiche del Basket',
        content: `Alto punteggio, molti possessi. I risultati tendono verso la media più che in altri sport.

Questo rende gli spread più prevedibili ma riduce il valore su outright.`
      },
      {
        title: 'Mercati Principali',
        content: `- Spread (handicap punti)
- Totals (Over/Under punti)
- Moneyline (vincitore)
- Quarter/Half betting
- Player props

Gli spread NBA sono molto efficienti—trovare edge richiede analisi profonda.`
      },
      {
        title: 'Fattori da Considerare',
        content: `- Back-to-backs e scheduling
- Infortuni (specialmente stelle)
- Pace del gioco
- Efficienza offensiva/difensiva
- Match-ups specifici
- Situazioni motivazionali (playoff push, tanking)`
      },
      {
        title: 'Line Shopping nel Basket',
        content: `Nel basket, mezzo punto sullo spread può fare grande differenza.

I numeri chiave sono meno pronunciati che nel football (dove 3 e 7 dominano), ma la linea shopping rimane cruciale.`
      }
    ]
  },
  {
    id: 11,
    title: 'Masterclass Hockey su Ghiaccio',
    slug: 'masterclass-hockey-ghiaccio',
    description: 'Comprendere i mercati e le dinamiche dell\'hockey su ghiaccio.',
    sections: [
      {
        title: 'Struttura dell\'Hockey',
        content: `3 periodi da 20 minuti. Punteggi tipicamente bassi (5-6 goal totali in media NHL).

Overtime e shootout in regular season—impatto importante su alcune scommesse.`
      },
      {
        title: 'Mercati Principali',
        content: `- Puckline (spread di 1.5 goal)
- Moneyline
- Over/Under goal
- 3-Way (vincitore tempo regolamentare)
- Period betting

Il puckline standard è -1.5/+1.5, dato i bassi punteggi.`
      },
      {
        title: 'Fattori Specifici',
        content: `- Statistiche del portiere
- Corsi/Fenwick/Expected Goals
- Special teams (powerplay/penalty kill)
- Back-to-backs
- Viaggi e fusi orari
- Situazioni di portiere (starter vs backup)`
      },
      {
        title: 'Varianza nell\'Hockey',
        content: `L'hockey ha alta varianza per i bassi punteggi. Un goal può decidere tutto.

I favoriti perdono spesso—il che può creare valore su underdog ma anche frustrare.

Il lungo termine è l'unico modo per valutare performance.`
      }
    ]
  },
  {
    id: 12,
    title: 'Masterclass Baseball',
    slug: 'masterclass-baseball',
    description: 'Analizzare il baseball con focus su pitching e valore.',
    sections: [
      {
        title: 'Unicità del Baseball',
        content: `162 partite stagionali—enorme sample size.

Il lanciatore partente domina ogni partita. Cambi di lanciatore cambiano completamente le quote.`
      },
      {
        title: 'Mercati Principali',
        content: `- Moneyline
- Run Line (spread di 1.5)
- Totals (Over/Under runs)
- First 5 Innings (F5)
- Player props

F5 isola il duello tra partenti, eliminando variabilità del bullpen.`
      },
      {
        title: 'Metriche Chiave',
        content: `- ERA, WHIP, FIP per lanciatori
- wOBA, OPS, hard hit % per battitori
- Bullpen stats
- Splits (vs mancini/destri, casa/trasferta)
- Ballpark factors`
      },
      {
        title: 'Weather e Ballpark',
        content: `Il baseball è molto influenzato da:
- Vento (aiuta o ostacola home run)
- Temperatura (palla viaggia più lontano al caldo)
- Umidità
- Dimensioni del ballpark

Questi fattori impattano totals significativamente.`
      }
    ]
  },
  {
    id: 13,
    title: 'Masterclass Football Americano',
    slug: 'masterclass-football-americano',
    description: 'Dominare le scommesse su NFL e college football.',
    sections: [
      {
        title: 'Struttura del Football',
        content: `NFL: 17 partite stagionali—ogni partita conta enormemente.

College: più partite ma più varianza per differenze di talento.

Sample size limitato rende analisi più impegnativa.`
      },
      {
        title: 'Mercati Principali',
        content: `- Spread (handicap punti)
- Totals (Over/Under)
- Moneyline
- Player props
- Teasers e parlays`
      },
      {
        title: 'Numeri Chiave',
        content: `Nel football, 3 e 7 sono cruciali (field goal e touchdown).

Comprare mezzo punto su questi numeri può avere valore. Ma i bookmaker lo sanno—il prezzo è aggiustato.

Altri numeri chiave: 4, 6, 10, 14.`
      },
      {
        title: 'Fattori Importanti',
        content: `- Infortuni (specialmente QB e OL)
- Weather
- Matchups specifici
- Situazioni motivazionali
- Traveling e bye weeks
- Public betting influence sulle linee`
      }
    ]
  },
  {
    id: 14,
    title: 'Altri Sport e Nicchie Specialistiche',
    slug: 'altri-sport-nicchie-specialistiche',
    description: 'Trovare valore in sport meno seguiti e mercati di nicchia.',
    sections: [
      {
        title: 'Perché Considerare Sport Minori',
        content: `Mercati meno efficienti. Meno attenzione significa più errori nelle quote.

Se hai conoscenza specifica (hai giocato, segui da anni), potresti avere edge reale.`
      },
      {
        title: 'Sport da Considerare',
        content: `- MMA/UFC
- Golf
- Cricket
- Rugby
- Darts
- Snooker
- Esports

Ognuno ha le sue peculiarità e mercati specifici.`
      },
      {
        title: 'Sfide',
        content: `- Liquidità limitata
- Quote meno competitive
- Meno dati disponibili
- Bookmaker potrebbero limitarti più velocemente

Bilancia opportunità vs praticità.`
      },
      {
        title: 'Specializzazione',
        content: `Meglio essere esperti in una nicchia che mediocri in tutto.

Trova il tuo sport/lega/mercato. Costruisci competenza profonda. Il valore viene dalla specializzazione.`
      }
    ]
  },
  {
    id: 15,
    title: 'Masterclass Tipi di Scommessa',
    slug: 'masterclass-tipi-scommessa',
    description: 'Comprendere ogni tipo di scommessa e quando usarla.',
    sections: [
      {
        title: 'Scommesse Singole',
        content: `Una scommessa su un risultato. Il modo più puro e raccomandato.

Meno varianza, più controllo. Se hai edge, le singole lo massimizzano nel tempo.`
      },
      {
        title: 'Accumulator/Parlay',
        content: `Multiple selezioni combinate. Tutte devono vincere.

Le quote si moltiplicano—ma anche il vantaggio del bookmaker. Ogni selezione aggiunge margine.

Matematicamente svantaggiosi. Evita per scommesse serie.`
      },
      {
        title: 'System Bets',
        content: `Combinazioni di scommesse dove non tutte devono vincere (es. Trixie, Yankee, Canadian).

Riducono varianza rispetto ai parlay puri ma aumentano l'esposizione totale.

Complessi e spesso mal compresi.`
      },
      {
        title: 'Live Betting',
        content: `Scommettere durante l'evento. Le quote cambiano rapidamente.

Opportunità per chi guarda attentamente—ma anche trappole per decisioni impulsive.

Richiede disciplina ferrea e preparazione pre-partita.`
      },
      {
        title: 'Futures e Outright',
        content: `Scommesse su risultati a lungo termine (vincitori campionati, capocannonieri, ecc.).

Il tuo denaro è bloccato a lungo. Considera il costo opportunità.

Può offrire valore se sai valutare probabilità a lungo termine.`
      }
    ]
  },
  {
    id: 16,
    title: 'Quaderno Personale delle Scommesse, Registro Decisioni e Revisione',
    slug: 'quaderno-personale-scommesse-registro',
    description: 'Creare un sistema di tracking per analisi e miglioramento continuo.',
    sections: [
      {
        title: 'Perché Registrare Tutto',
        content: `Senza dati, non puoi migliorare. Ogni scommessa deve essere documentata.

Il tracking ti permette di:
- Identificare punti di forza e debolezza
- Misurare performance reale vs percepita
- Riconoscere pattern comportamentali
- Giustificare (o cambiare) il tuo approccio`
      },
      {
        title: 'Cosa Registrare',
        content: `Minimo:
- Data e evento
- Tipo di scommessa e selezione
- Quota ottenuta
- Puntata
- Risultato
- Profitto/Perdita

Idealmente anche:
- Closing line
- Ragionamento della scommessa
- Stato emotivo
- Fonte della scommessa (tua analisi vs tip)`
      },
      {
        title: 'Strumenti di Tracking',
        content: `- Spreadsheet (Excel, Google Sheets)
- App dedicate
- Software specializzato

La cosa importante è la consistenza, non lo strumento. Scegli cosa userai effettivamente.`
      },
      {
        title: 'Revisione Periodica',
        content: `Pianifica revisioni regolari: settimanali e mensili.

Analizza:
- ROI per sport/mercato/tipo di scommessa
- CLV medio
- Pattern di errori
- Discipline rispettata vs violata

Adatta la strategia basandoti sui dati, non sulle sensazioni.`
      }
    ]
  },
  {
    id: 17,
    title: 'Revisione Performance, Mantenimento Record e Apprendimento dai Risultati',
    slug: 'revisione-performance-record-apprendimento',
    description: 'Analizzare sistematicamente i risultati per miglioramento continuo.',
    sections: [
      {
        title: 'Separare Processo da Risultato',
        content: `Una scommessa può essere corretta e perdere. Può essere sbagliata e vincere.

Giudica le decisioni basandoti sul processo, non sul risultato singolo.

Nel lungo termine, buone decisioni portano a buoni risultati. Nel breve termine, tutto può succedere.`
      },
      {
        title: 'Metriche da Monitorare',
        content: `- ROI (Return on Investment)
- Yield (profitto / turnover)
- CLV medio
- Win rate per range di quote
- Performance per sport/lega/mercato
- Drawdown massimo`
      },
      {
        title: 'Sample Size',
        content: `Non trarre conclusioni affrettate. Hai bisogno di centinaia di scommesse per dati significativi.

Varianza può nascondere edge o creare illusioni di abilità.

Concentrati sul processo mentre accumuli dati sufficienti.`
      },
      {
        title: 'Adattamento',
        content: `I mercati cambiano. Ciò che funzionava può smettere di funzionare.

Sii disposto a:
- Abbandonare approcci non più profittevoli
- Esplorare nuovi mercati
- Aggiornare modelli e metodi

L'apprendimento non finisce mai.`
      }
    ]
  },
  {
    id: 18,
    title: 'Psicologia, Disciplina, Controllo del Tilt e Routine Professionali',
    slug: 'psicologia-disciplina-tilt-routine',
    description: 'La componente mentale del successo nelle scommesse.',
    sections: [
      {
        title: 'Il Ruolo della Psicologia',
        content: `La maggior parte dei fallimenti nelle scommesse sono psicologici, non analitici.

Le persone sanno cosa dovrebbero fare. Non lo fanno perché le emozioni prendono il sopravvento.

Gestire la mente è fondamentale quanto gestire il bankroll.`
      },
      {
        title: 'Tilt e Come Evitarlo',
        content: `Tilt: stato emotivo dove prendi decisioni irrazionali, tipicamente dopo perdite.

Segnali:
- Aumentare puntate per recuperare
- Scommettere su eventi non analizzati
- Deviare dal sistema
- Frustrazione e rabbia

Soluzione: riconosci i trigger, prendi pause, rispetta limiti prestabiliti.`
      },
      {
        title: 'Disciplina Quotidiana',
        content: `- Definisci orari per ricerca e piazzamento
- Non scommettere quando stanco, stressato o sotto influenza
- Rispetta sempre le regole di staking
- Accetta che passare è una decisione valida
- Non controllare costantemente i risultati in-play`
      },
      {
        title: 'Costruire Routine',
        content: `Routine riducono le decisioni emotive.

Esempio di routine settimanale:
- Lunedì: revisione settimana precedente
- Martedì-Sabato: ricerca e scommesse
- Domenica: analisi e pianificazione

Trova ciò che funziona per te e mantienilo.`
      }
    ]
  },
  {
    id: 19,
    title: 'Standard di Gioco Sicuro, Conformità e Protezione Personale',
    slug: 'gioco-sicuro-conformita-protezione',
    description: 'Giocare responsabilmente e riconoscere i segnali di pericolo.',
    sections: [
      {
        title: 'Gioco Responsabile',
        content: `Le scommesse possono essere un\'attività ricreativa o professionale. Ma possono diventare problematiche.

Scommetti solo ciò che puoi permetterti di perdere. Stabilisci limiti e rispettali.

Se le scommesse influenzano negativamente vita, relazioni o finanze—fermati.`
      },
      {
        title: 'Segnali di Allarme',
        content: `- Scommettere con denaro necessario per altro
- Nascondere l\'attività a familiari
- Inseguire perdite
- Pensare costantemente alle scommesse
- Irritabilità quando non puoi scommettere
- Aumento progressivo delle puntate per eccitazione`
      },
      {
        title: 'Strumenti di Auto-Esclusione',
        content: `Tutti i bookmaker regolamentati offrono:
- Limiti di deposito
- Limiti di perdita
- Time-out temporanei
- Auto-esclusione permanente

Usali proattivamente se necessario. Non c\'è vergogna nel chiedere aiuto.`
      },
      {
        title: 'Risorse di Supporto',
        content: `Se tu o qualcuno che conosci ha problemi con il gioco:
- Linee di aiuto nazionali
- Gamblers Anonymous
- Consulenti specializzati

Riconoscere un problema è il primo passo per risolverlo.`
      }
    ]
  },
  {
    id: 20,
    title: 'Esercizi Pratici e Appendice',
    slug: 'esercizi-pratici-appendice',
    description: 'Metti in pratica ciò che hai imparato con esercizi e risorse.',
    sections: [
      {
        title: 'Esercizio 1: Calcolo Probabilità',
        content: `Prendi 10 partite future. Per ognuna:
1. Stima le probabilità di vittoria casa, pareggio, vittoria trasferta
2. Converti in quote eque
3. Confronta con quote reali
4. Identifica dove vedi valore (se presente)

Non scommettere. Questo è solo esercizio di valutazione.`
      },
      {
        title: 'Esercizio 2: Paper Trading',
        content: `Per un mese, registra scommesse "virtuali":
- Tratta come se fossero soldi veri
- Rispetta regole di staking
- Documenta tutto

Questo costruisce disciplina senza rischio finanziario e ti dà dati per valutare il tuo approccio.`
      },
      {
        title: 'Esercizio 3: Analisi CLV',
        content: `Per ogni scommessa piazzata:
1. Registra la quota al momento del piazzamento
2. Registra la closing line
3. Calcola la differenza

Dopo 100+ scommesse, analizza: stai ottenendo quote migliori della closing line in media?`
      },
      {
        title: 'Appendice: Formula Comuni',
        content: `Probabilità Implicita = 1 / Quota Decimale

Quota Decimale = 1 / Probabilità

EV = (Prob Vincita × Profitto) - (Prob Perdita × Puntata)

Kelly % = (bp - q) / b
dove b = quota decimale - 1, p = prob vincita, q = prob perdita`
      },
      {
        title: 'Prossimi Passi',
        content: `Hai completato il materiale fondamentale. Ora:

1. Rivedi le sezioni più rilevanti per te
2. Inizia con paper trading o puntate minime
3. Costruisci il tuo sistema di tracking
4. Sii paziente—il miglioramento richiede tempo
5. Ritorna a questo materiale periodicamente

In bocca al lupo nel tuo percorso di scommesse disciplinate.`
      }
    ]
  }
]
