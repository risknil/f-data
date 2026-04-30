import { TrainingModule } from '@/lib/training-content'

export const trainingModulesDA: TrainingModule[] = [
  {
    id: 1,
    title: 'Hvad Effektive Bettere Gør Anderledes',
    slug: 'what-effective-bettors-do-differently',
    description: 'Forstå den tankegang, der adskiller professionelle fra amatører. Denne sektion handler om struktureret tænkning — ikke tips eller systemer.',
    sections: [
      { title: 'Markedsdeltagertankegangen', content: 'De mest effektive bettere ser sig selv som markedsdeltagere, ikke spillere. De forstår, at de ikke spiller på kampresultater — de handler med udfald på et marked, hvor priser afspejler kollektive overbevisninger.\n\nDenne perspektivændring er afgørende. Når du spiller, konkurrerer du mod andre bettere og mod bookmakeren, der sætter linjerne.' },
      { title: 'Selektivitet Over Aktivitet', content: 'Amatører spiller ofte, fordi spil er sjovt. Professionelle spiller selektivt, fordi de søger værdi.\n\nBedste forventede værdi kommer fra kun at spille, når du har en klar fordel.' },
      { title: 'Den Egentlige Jobbeskrivelse', content: 'Dit job som seriøs better er at identificere forkert prissatte udfald, ikke at forudsige vindere.\n\nDenne distinktion betyder noget.' },
      { title: 'Hvad Der Adskiller Disciplinerede Bettere', content: 'Disciplinerede bettere holder sig til deres proces uanset nylige resultater. De øger ikke indsatser efter gevinster eller jager tab efter tab.' },
      { title: 'Hvorfor Denne Manual Er Bevidst Lang', content: 'Denne manual er omfattende, fordi genveje ikke virker i betting. Hver sektion bygger på de foregående.' },
      { title: 'Betterens Operationelle Cyklus', content: 'Effektiv betting følger en cyklus: Research → Analyse → Værdiidentifikation → Indsatsstyring → Udførelse → Gennemgang.' }
    ]
  },
  {
    id: 2,
    title: 'Hvordan Bookmakere, Børser og Bettingmarkeder Virkelig Fungerer',
    slug: 'how-bookmakers-exchanges-and-betting-markets-really-work',
    description: 'Forstå mekanikken bag odds, marginer og hvorfor børser tilbyder et andet forslag.',
    sections: [
      { title: 'Hvordan Bookmakere Sætter Odds', content: 'Bookmakere forudsiger ikke bare udfald — de styrer risiko og sikrer profit. Deres odds afspejler en blanding af sande sandsynligheder, indbygget margin og justeringer baseret på indsatsflow.' },
      { title: 'Bookmakerens Margin', content: 'Marginen (eller overround) er bookmakerens indbyggede fordel. Hvis sand sandsynlighed er 50% for hver side, ville fair odds være 2.00/2.00. I stedet ser du måske 1.91/1.91.' },
      { title: 'Bettingbørser', content: 'Børser som Betfair lader bettere spille mod hinanden i stedet for mod bookmakeren.' },
      { title: 'Linjebevægelser og Steam', content: 'Når odds bevæger sig markant, kaldes det linjebevægelse. Steam er en skarp bevægelse forårsaget af høj volumen eller professionelle indsatser.' },
      { title: 'Skarpe vs Bløde Linjer', content: 'Skarpe linjer er odds fra bookmakere kendt for at acceptere professionelle indsatser. Bløde linjer kommer fra detailbookmakere.' }
    ]
  },
  {
    id: 3,
    title: 'Odds, Implicit Sandsynlighed og Fair Prissætning',
    slug: 'odds-implied-probability-and-fair-pricing',
    description: 'Mestre matematikken bag odds og lær at beregne, om et spil tilbyder ægte værdi.',
    sections: [
      { title: 'Oddsformater', content: 'Odds kommer i tre hovedformater: decimal, fraktionelt og amerikansk. Decimal odds er lettest at arbejde med.' },
      { title: 'Beregning af Implicit Sandsynlighed', content: 'Formel: Implicit Sandsynlighed = 1 / Decimal Odds' },
      { title: 'Fjernelse af Marginen', content: 'For at finde sande markedssandsynligheder skal du fjerne bookmakerens margin.' },
      { title: 'Fair Odds vs Markedsodds', content: 'Fair odds er dem, der præcist afspejler sand sandsynlighed uden margin.' },
      { title: 'Praktisk Øvelse: Beregning af Værdi', content: 'Øv dig i at beregne værdi for hypotetiske scenarier.' }
    ]
  },
  {
    id: 4,
    title: 'Værdi, Forventet Værdi, Line Shopping og Closing Line Value',
    slug: 'value-expected-value-line-shopping-and-closing-line-value',
    description: 'Lær de kernebegreber, der driver langsigtet rentabilitet.',
    sections: [
      { title: 'Hvad Er Værdi i Betting', content: 'Værdi eksisterer, når oddsen implicerer en sandsynlighed lavere end din estimerede chance.' },
      { title: 'Forventet Værdi (EV)', content: 'Forventet værdi kvantificerer din edge i valutaenheder.' },
      { title: 'Line Shopping', content: 'Line shopping er at sammenligne odds mellem bookmakere for at finde den bedste pris.' },
      { title: 'Closing Line Value (CLV)', content: 'CLV måler, hvordan dine odds sammenlignes med lukningsodds.' },
      { title: 'Hvornår Man Ikke Skal Tvinge Et Værdispil', content: 'Ikke hvert spil med beregnet værdi fortjener at blive placeret.' }
    ]
  },
  {
    id: 5,
    title: 'Bankroll-styring, Indsatser og Overlevelse Under Varians',
    slug: 'bankroll-management-staking-and-survival-under-variance',
    description: 'Beskyt din kapital og optimer vækst, mens du overlever uundgåelige tabsrækker.',
    sections: [
      { title: 'Definition af Din Bankroll', content: 'Din bankroll er kapital dedikeret udelukkende til betting — penge, du kan tabe uden at påvirke dit liv.' },
      { title: 'Fast vs Proportionale Indsatser', content: 'Fast indsats vs proportionel indsats har forskellige fordele og ulemper.' },
      { title: 'Kelly-kriteriet', content: 'Kelly-kriteriet foreslår optimal indsatsstørrelse for at maksimere langsigtet vækst.' },
      { title: 'Forståelse af Varians', content: 'Varians er naturlig fluktuation af resultater omkring forventede.' },
      { title: 'Bankroll og Overlevelse', content: 'Første regel for professionel betting: gå ikke fallit.' }
    ]
  },
  {
    id: 6,
    title: 'Den Fulde Better-arbejdsgang: Fra Kampliste til Placeret Spil',
    slug: 'the-full-bettor-workflow-from-fixture-list-to-placed-bet',
    description: 'En systematisk proces for research, analyse og udførelse af spil.',
    sections: [
      { title: 'Daglig Scanning', content: 'Begynd dagen med at gennemgå kommende begivenheder.' },
      { title: 'Dyb Analyse', content: 'For hver kandidat, udfør detaljeret analyse.' },
      { title: 'Sammenligning med Markedet', content: 'Sammenlign dine sandsynligheder med markedets odds.' },
      { title: 'Udførelse af Spil', content: 'Når du identificerer værdi, sammenlign odds og placer spillet.' },
      { title: 'Gennemgang og Dokumentation', content: 'Efter spillets afgørelse, registrer resultatet og analyser.' }
    ]
  },
  {
    id: 7,
    title: 'Klasse: Fodbold',
    slug: 'football-class',
    description: 'Specifikt for fodboldanalyse: nøglestatistikker, spilltyper og edge i den mest populære sport.',
    sections: [
      { title: 'Introduktion til Fodboldanalyse', content: 'Fodbold er den mest populære sport at spille på, hvilket betyder de mest effektive markeder.' },
      { title: 'Expected Goals (xG)', content: 'xG måler kvaliteten af målchancer.' },
      { title: 'Fodboldmarkeder', content: 'Hovedmarkeder: 1X2, Asian Handicap, Over/Under mål, BTTS.' },
      { title: 'Kontekstuelle Faktorer', content: 'Motivation betyder noget: nedrykning vs hold midt i tabellen.' }
    ]
  },
  {
    id: 8,
    title: 'Klasse: Hestevæddeløb',
    slug: 'horse-racing-class',
    description: 'Specifikt for hestevæddeløb: formanalyse, baneforhold og at finde værdi.',
    sections: [
      { title: 'Grundlæggende i Hestevæddeløb', content: 'Hestevæddeløb tilbyder unikke muligheder på grund af antallet af deltagere.' },
      { title: 'Formanalyse', content: 'Form er hestens resultathistorie.' },
      { title: 'Forhold og Deres Påvirkning', content: 'Banens tilstand påvirker dramatisk resultaterne.' },
      { title: 'Væddeløbsmarkeder', content: 'Win, Place, Each-Way, Forecast/Tricast.' }
    ]
  },
  {
    id: 9,
    title: 'Klasse: Tennis',
    slug: 'tennis-class',
    description: 'Tennisanalyse: servestatistik, kampdynamik og specifikke tennisspil.',
    sections: [
      { title: 'Grundlæggende i Tennisanalyse', content: 'Tennis er en individualsport med masser af data.' },
      { title: 'Servestatistik', content: 'Første serve-procent, esser, dobbeltfejl.' },
      { title: 'Kampdynamik', content: 'Tennis har unikke mønstre: momentum, reaktion på break.' },
      { title: 'Tennismarkeder', content: 'Match winner, set handicap, game handicap, totale games.' }
    ]
  },
  {
    id: 10,
    title: 'Klasse: Basketball',
    slug: 'basketball-class',
    description: 'Basketballanalyse: tempo, effektivitet, pointhandicap og totaler.',
    sections: [
      { title: 'Grundlæggende i Basketballanalyse', content: 'Basketball er en højscorende sport med mange kampe.' },
      { title: 'Tempo og Effektivitet', content: 'Tempo måler antal besiddelser per kamp.' },
      { title: 'Pointhandicap', content: 'Spread er hovedmarkedet i basketball.' },
      { title: 'Totaler', content: 'Over/Under på total point.' }
    ]
  },
  {
    id: 11,
    title: 'Klasse: Ishockey',
    slug: 'ice-hockey-class',
    description: 'Hockeyanalyse: målmandenes betydning, powerplay og høj resultatvarians.',
    sections: [
      { title: 'Grundlæggende i Hockeyanalyse', content: 'Hockey er lavscorende med høj varians.' },
      { title: 'Målmandenes Betydning', content: 'Målmanden påvirker resultatet mere end i andre holdsporter.' },
      { title: 'Specialhold', content: 'Power play og penalty kill er separate holdfærdigheder.' },
      { title: 'Hockeymarkeder', content: 'Money line, puck line, totaler.' }
    ]
  },
  {
    id: 12,
    title: 'Klasse: Baseball',
    slug: 'baseball-class',
    description: 'Baseballanalyse: pitchernes betydning, avanceret statistik og unikke markeder.',
    sections: [
      { title: 'Grundlæggende i Baseballanalyse', content: 'Baseball er et spil af pitcher vs batter-dueller.' },
      { title: 'Pitchernes Betydning', content: 'Starting pitcher er ansvarlig for 5-7 innings.' },
      { title: 'Avanceret Statistik', content: 'ERA, FIP, wOBA og andre sabermetrics.' },
      { title: 'Baseballmarkeder', content: 'Money line, run line, totaler, first 5 innings.' }
    ]
  },
  {
    id: 13,
    title: 'Klasse: Amerikansk Fodbold',
    slug: 'american-football-class',
    description: 'NFL og amerikansk fodbold: spreads, totaler og specifikt for den ugentlige liga.',
    sections: [
      { title: 'Grundlæggende i Amerikansk Fodboldanalyse', content: 'NFL er den mest spille sport i USA.' },
      { title: 'Spread (Pointhandicap)', content: 'Spread dominerer i NFL. Nøgletal: 3 og 7.' },
      { title: 'Totaler', content: 'Over/Under på total point.' },
      { title: 'NFL Kontekstuelle Faktorer', content: 'Kort uge, rejser, playoff-situation.' }
    ]
  },
  {
    id: 14,
    title: 'Andre Sporter og Specialistnicher',
    slug: 'other-sports-and-specialist-niches',
    description: 'Golf, MMA, esport og mindre markeder — hvor ineffektiviteter kan være større.',
    sections: [
      { title: 'Fordele ved Mindre Markeder', content: 'Mindre populære sporter = potentielt flere ineffektiviteter.' },
      { title: 'Golf', content: 'Turneringer med mange deltagere.' },
      { title: 'MMA/Boksning', content: 'Kampsporten er svære at kvantificere.' },
      { title: 'Esport', content: 'Voksende marked med mindre effektive linjer.' }
    ]
  },
  {
    id: 15,
    title: 'Masterclass: Spilltyper',
    slug: 'bet-types-masterclass',
    description: 'Dybdegående analyse af alle spilltyper og hvornår hver er passende.',
    sections: [
      { title: 'Enkeltspil', content: 'Et valg, én indsats. Simplest og oftest anbefalet.' },
      { title: 'Akkumulatorer', content: 'Flere valg kombineret — alle skal vinde.' },
      { title: 'Asian Handicap', content: 'Eliminerer uafgjort gennem handicap.' },
      { title: 'Over/Under', content: 'Spil på om summen bliver over eller under linjen.' },
      { title: 'Specialspil og Prop Bets', content: 'Målscorere, antal kort, spillerstatistik.' }
    ]
  },
  {
    id: 16,
    title: 'Personlig Betting-notesbog, Beslutningslog og Gennemgangsregister',
    slug: 'personal-betting-notebook-decision-log-and-review-record',
    description: 'Dokumentationssystem for spil til kontinuerlig forbedring.',
    sections: [
      { title: 'Hvorfor Dokumentation Er Nødvendig', content: 'Uden dokumentation stoler du på hukommelsen — og hukommelsen er selektiv.' },
      { title: 'Hvad Man Skal Registrere', content: 'For hvert spil: Dato, begivenhed, valg, odds, indsats, begrundelse, resultat, CLV.' },
      { title: 'Gennemgangssystem', content: 'Ugentlig, månedlig og kvartalsvis gennemgang.' },
      { title: 'Værktøjer', content: 'Regneark er minimum. Dedikerede trackere tilbyder mere analyse.' }
    ]
  },
  {
    id: 17,
    title: 'Gennemgang af Præstation, Vedligeholdelse af Optegnelser og Læring af Resultater',
    slug: 'reviewing-performance-maintaining-records-and-learning-from-results',
    description: 'Hvordan man analyserer sine resultater og kontinuerligt forbedres.',
    sections: [
      { title: 'Succesmålinger', content: 'ROI = Profit / Sum af Indsatser. CLV er bedre langsigtet måling.' },
      { title: 'Analyse Per Kategori', content: 'Nedbryd resultater på sport, liga, spilltype, oddsinterval.' },
      { title: 'Adskille Dygtighed fra Held', content: 'Kortsigtede resultater = dygtighed + held. Langsigtede = primært dygtighed.' },
      { title: 'Tilpasning af Strategi', content: 'Data skal styre ændringer, ikke følelser.' }
    ]
  },
  {
    id: 18,
    title: 'Psykologi, Disciplin, Tilt-kontrol og Professionelle Rutiner',
    slug: 'psychology-discipline-tilt-control-and-professional-routines',
    description: 'Den mentale aspekt af betting — lige så vigtig som analyse.',
    sections: [
      { title: 'Betterens Psykologi', content: 'Din hjerne er programmeret mod god betting. Bekræftelsesbias, tabsaversion.' },
      { title: 'Disciplin i Praksis', content: 'Disciplin er at holde sig til systemet, når følelserne skriger anderledes.' },
      { title: 'Tilt-kontrol', content: 'Tilt er den følelsesmæssige tilstand, hvor du træffer dårlige beslutninger af frustration.' },
      { title: 'Professionelle Rutiner', content: 'Faste analysetider. Adskil spilletid fra kampvisning.' }
    ]
  },
  {
    id: 19,
    title: 'Sikrere Spillestandarder, Compliance-bevidsthed og Personlig Beskyttelse',
    slug: 'safer-gambling-standards-compliance-awareness-and-personal-protection',
    description: 'Ansvarligt spil og beskyttelse mod spilleproblemer.',
    sections: [
      { title: 'Advarselstegn', content: 'Spil for penge til liv. Jagt af tab. Skjul af spil for nære.' },
      { title: 'Sætte Grænser', content: 'Sæt grænser FØR du begynder: max månedligt indskud, max enkelindsats.' },
      { title: 'Regler og Licenser', content: 'Spil kun hos licenserede bookmakere.' },
      { title: 'Hjælperessourcer', content: 'Hvis du har spilleproblemer: StopSpillet, Ludomani-linjen.' }
    ]
  },
  {
    id: 20,
    title: 'Praktiske Øvelser og Appendiks A',
    slug: 'practical-exercises-and-appendix-a',
    description: 'Praktiske opgaver til at anvende viden og supplerende materialer.',
    sections: [
      { title: 'Øvelse: Beregning af Værdi', content: 'Vælg 5 kommende kampe. Vurder sandsynlighed, tjek markedsodds, beregn værdi.' },
      { title: 'Øvelse: Paper Trading', content: 'I en måned: spor spil uden at satse rigtige penge.' },
      { title: 'Øvelse: CLV-analyse', content: 'For dine seneste 50 spil: registrer odds, lukningsodds, beregn CLV.' },
      { title: 'Appendiks: Formler', content: 'Implicit sandsynlighed = 1 / decimal odds\nEV = (P × profit) - ((1-P) × indsats)' }
    ]
  }
]
