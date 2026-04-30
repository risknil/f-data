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
  },
  {
    id: 21,
    slug: 'appendix-glossary',
    title: 'Appendice A: Glossario Esteso delle Scommesse',
    subtitle: 'Un glossario completo dei termini di scommesse scritto in linguaggio di formazione',
    duration: '15 min di lettura',
    sections: [
      {
        title: 'Glossario Esteso delle Scommesse per Scommettitori',
        content: `Questo glossario è scritto in linguaggio di formazione per scommettitori umani. È deliberatamente pratico. L'obiettivo non è sembrare enciclopedico ma rendere il termine utilizzabile nell'analisi reale, nel dimensionamento e nel lavoro di registrazione.

**A**

**Accumulator** - Scommessa a selezioni multiple dove ogni gamba deve vincere. Pagamenti attraenti nascondono margine composto ed errore composto.

**Across the card** - Frase delle corse per scommettere su ogni corsa di un meeting. Di solito ricreativo piuttosto che selettivo.

**All-weather** - Superficie artificiale da corsa usata quando le condizioni del prato sono inadatte. La preferenza di superficie conta nell'analisi dei cavalli.

**American odds** - Formato quote usando numeri positivi e negativi. Convertili rapidamente in probabilità per evitare errori di prezzo.

**Ante-post** - Scommessa piazzata molto prima di un evento, spesso con prezzi migliori ma maggior rischio di non-partente a seconda delle regole.

**Arbitrage** - Scommettere su tutti i risultati presso diversi bookmaker per bloccare un profitto. Possibile in teoria, ma le restrizioni dei conti lo rendono difficile in pratica.

**Asian handicap** - Mercato di handicap, comune nel calcio, che aggiusta il punteggio e può eliminare o dividere il rischio di pareggio.

**B**

**Back price** - Le quote a cui supporti un risultato a verificarsi, specialmente su una borsa.

**Bankroll** - Capitale allocato esclusivamente alle scommesse. Esiste per assorbire la varianza e proteggere la qualità delle decisioni.

**Best odds guaranteed** - Promozione, comune nelle corse, dove lo scommettitore riceve il migliore tra prezzo anticipato o SP se il cavallo vince.

**Bet builder** - Multi della stessa partita che combina diverse selezioni da un evento. Conveniente, ma spesso con margine alto.

**Bookmaker** - Azienda che fissa i prezzi e accetta scommesse mentre costruisce margine nelle quote.

**Both teams to score** - Mercato calcistico regolato se ogni squadra segna almeno una volta.

**Break point** - Punto del tennis dove il ricevitore può vincere il game rompendo il servizio.

**Break percentage** - Quanto spesso un tennista rompe il servizio dell'avversario. Una metrica chiave di confronto.

**Bullpen** - Unità di lanciatori di rilievo nel baseball. Critico nella determinazione del prezzo della partita completa.

**C**

**Cash out** - Funzione del bookmaker che permette la liquidazione anticipata. Generalmente comodità prima, valore dopo.

**Chance quality** - Modo pratico di descrivere se i tentativi sono pericolosi, non semplicemente numerosi.

**Chalk** - Gergo per il favorito.

**Closing line** - L'ultimo prezzo di mercato ampiamente disponibile prima che l'evento inizi.

**Closing line value** - La differenza tra il tuo prezzo preso e il prezzo di chiusura. Utile come audit del processo.

**Coin flip game** - Confronto prezzato vicino alla parità. Richiede disciplina perché molti scommettitori sovrastimano piccoli vantaggi.

**Correct score** - Mercato che richiede il risultato finale esatto. Alta varianza e molto sensibile al prezzo.

**Cover the spread** - Battere l'handicap o spread dopo che l'aggiustamento è applicato.

**Course and distance** - Nota delle corse che mostra successo precedente sulla stessa pista e distanza.

**D**

**Dead heat** - Pareggio per posizione o vittoria dove il regolamento della puntata viene aggiustato secondo le regole.

**Decimal odds** - Formato quote che esprime il ritorno totale per unità di puntata. Generalmente il formato di lavoro professionale più facile.

**Derivative** - Mercato secondario come primo tempo, prime cinque innings, totale squadra, quarto o mercato di periodo.

**Draw no bet** - Mercato dove un pareggio restituisce la puntata e solo una vittoria del lato scelto paga.

**Drift** - Quando le quote diventano più grandi. Può riflettere informazioni negative, domanda più debole o correzione di mercato.

**E**

**Each-way** - Scommessa da corsa divisa in parti vittoria e piazzamento. Preziosa solo quando i termini di piazzamento e il prezzo lo giustificano.

**Edge** - Il vantaggio pratico che la tua analisi ha sul mercato a un dato prezzo.

**Evens** - Soldi pari: decimale 2.00 o 1/1.

**Expected goals** - Metrica calcistica che stima la probabilità che i tiri diventino gol. Utile per la revisione del processo quando usato con cura.

**Expected value** - Il valore a lungo termine di una scommessa basato sulla tua stima di probabilità e il prezzo offerto.

**Exchange** - Piattaforma di scommesse peer-to-peer dove gli utenti backano e layano risultati e la piattaforma prende commissione.

**F**

**Favourite** - La selezione con il prezzo più corto in un mercato.

**Fair line** - La tua stima di quote prima del margine del bookmaker.

**First five** - Derivato del baseball che copre solo le prime cinque innings. Utile per isolare un vantaggio del lanciatore titolare.

**First goalscorer** - Mercato su quale giocatore segna il primo gol. Alta varianza e sensibile al ruolo.

**Fold** - Il numero di gambe in un accumulator o parlay.

**Form** - Registro delle prestazioni passate. Utile solo quando messo nel contesto appropriato.

**Fractional odds** - Formato tradizionale britannico e irlandese che esprime il profitto relativo alla puntata.

**Freeze the line** - Pausa del mercato o mancanza di movimento mentre i trader aspettano nuove informazioni.

**G**

**Game script** - La forma e il flusso probabili di una partita, particolarmente importante nel calcio e basket.

**Going** - Termine delle corse per la condizione del terreno, da sodo a pesante. Spesso decisivo.

**H**

**Handicap** - Mercato o struttura di corsa progettata per livellare i concorrenti aggiustando punteggio o peso portato.

**Hold percentage** - Quanto spesso un tennista tiene il suo servizio. Centrale per l'analisi di match e totali.

**I**

**Implied probability** - La probabilità rappresentata dal prezzo di mercato prima di aggiustare per la tua opinione.

**In-play** - Scommettere dopo che l'evento è iniziato. Richiede velocità, disciplina e consapevolezza di ritardo e liquidità.

**J**

**Juice** - Altra parola per margine del bookmaker o vig.

**K**

**Kelly criterion** - Formula di dimensionamento che collega vantaggio a dimensione della scommessa. Potente in teoria, pericoloso quando le stime di probabilità sono deboli.

**L**

**Lay** - Scommettere contro un risultato su una borsa.

**Limit** - Importo massimo che un bookmaker o mercato permetterà a un dato prezzo.

**Line shopping** - Controllare più bookmaker per ottenere il miglior prezzo disponibile.

**Liquidity** - Quanto denaro è disponibile in un mercato senza muovere troppo il prezzo.

**Live odds** - Prezzi disponibili mentre l'evento si sta giocando.

**M**

**Market maker** - Bookmaker sharp o attività di borsa che aiuta a definire dove i prezzi dovrebbero essere.

**Middle** - Detenere posizioni su linee diverse in modo che possa creare una sovrapposizione profittevole se il risultato cade tra di esse.

**Moneyline** - Mercato di vittoria, specialmente negli sport nordamericani, di solito senza pareggio nel tabellone.

**O**

**Overround** - L'importo per cui la probabilità implicita totale supera il 100 percento. Questo è il margine del bookmaker.

**Overtime** - Periodo extra dopo il tempo regolamentare. Se conta dipende dal mercato e dallo sport.

**P**

**Parlay** - Termine nordamericano per accumulator.

**Pace** - Velocità del gioco o numero di possessi. Importante nelle corse, calcio, basket e oltre, anche se il significato esatto varia.

**Pick'em** - Mercato spread o lato vicino alla parità dove le squadre sono considerate molto vicine.

**Place terms** - Regole che governano quanti posti delle corse pagano e a quale frazione delle quote di vittoria.

**Positive EV** - Scommessa il cui prezzo è migliore della tua linea equa stimata.

**Price sensitive** - Situazione dove la scommessa è attraente solo sopra o sotto una stretta soglia di quote.

**Prop** - Mercato di proposizione su specifici risultati di giocatore o evento piuttosto che il vincitore principale.

**Push** - Scommessa che pareggia sulla linea e viene rimborsata.

**R**

**Regulation** - Durata standard della partita prima del tempo supplementare. Formulazione di regolamento cruciale nell'hockey e alcuni mercati calcistici.

**Return on investment** - Profitto diviso per importo scommesso, di solito espresso come percentuale.

**Run line** - Versione baseball di uno spread, comunemente ±1.5 punti.

**S**

**Sample size** - Quantità di dati o numero di eventi dietro una tendenza o statistica. I piccoli campioni ingannano facilmente.

**Scratch** - Ritiro tardivo di cavallo o giocatore. Importante per la reazione del mercato e il regolamento.

**Second-serve liability** - Debolezza nel tennis dove il giocatore diventa vulnerabile quando forzato al secondo servizio.

**Sharp** - Scommettitore, prezzo o bookmaker rispettato associato a una più forte intelligenza di mercato.

**Shootout** - Procedura di spareggio nell'hockey in alcune competizioni. Se conta dipende dal mercato.

**Side** - Scommessa su una squadra o partecipante per vincere o coprire, in opposizione a totale o prop.

**Soft book** - Bookmaker ricreativo più probabile che offra prezzi più lenti o meno efficienti.

**Spread** - Linea di handicap progettata per bilanciare due squadre in un mercato.

**Stake** - L'importo rischiato su una scommessa.

**Steam** - Movimento di mercato forte e improvviso, spesso attribuito a denaro o informazione influente.

**Strike rate** - Percentuale di scommesse vinte. Utile, ma non sufficiente da sola perché il prezzo conta.

**T**

**Team total** - Mercato su quanti punti, run, gol o simili una squadra segna indipendentemente dal totale della partita completa.

**Tick** - Il più piccolo incremento di movimento del prezzo in un mercato.

**Tilt** - Comportamento di scommesse emotivamente compromesso, spesso dopo vittorie o sconfitte.

**Total** - Mercato sul punteggio o produzione combinata, come over/under gol, punti o run.

**Trap game** - Frase abusata spesso usata pigramente. Significativa solo se si riferisce a rischio situazionale o di confronto reale.

**True probability** - La tua stima onesta di quanto spesso il risultato accade, separata dalla vista del mercato.

**U**

**Unit** - Dimensione della puntata standardizzata usata per esprimere il rischio in modo coerente tra le bankroll.

**V**

**Value** - Prezzo che è migliore della probabilità che assegni al risultato.

**Vig** - Altra parola per margine, specialmente nel linguaggio delle scommesse USA.

**Void** - Scommessa annullata dove la puntata viene restituita secondo le regole.

**W**

**WHIP** - Statistica baseball che misura basi su ball e battute valide concesse per inning lanciato; utile per contesto di traffico e controllo.

**Win rate** - Stessa idea generale di strike rate; quanto spesso le scommesse pagano.

**Y**

**Yield** - Profitto come percentuale della puntata totale su un insieme di scommesse.`
      }
    ]
  }
]
