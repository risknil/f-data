import { TrainingModule } from '@/lib/training-content'

export const trainingModulesSV: TrainingModule[] = [
  {
    id: 1,
    title: 'Vad Effektiva Spelare Gör Annorlunda',
    slug: 'what-effective-bettors-do-differently',
    description: 'Förstå tankesättet som skiljer proffs från amatörer. Det här avsnittet handlar om strukturerat tänkande — inte tips eller system.',
    sections: [
      {
        title: 'Marknadsdeltagarens Tankesätt',
        content: `De mest effektiva spelarna ser sig själva som marknadsdeltagare, inte spelare. De förstår att de inte satsar på matchresultat — de handlar med utfall på en marknad där priser speglar kollektiva övertygelser.\n\nDenna perspektivförändring är avgörande. När du satsar tävlar du mot andra spelare och mot bookmakern som sätter linjerna. Det räcker inte att ha rätt mer än 50% av tiden — du måste ha rätt oftare än oddsen antyder.\n\nMarknadsdeltagare fokuserar på värde, inte vinnare. De letar efter avvikelser mellan sin uppskattning av sannolikhet och bookmakerens odds.`
      },
      {
        title: 'Selektivitet Framför Aktivitet',
        content: `Amatörer satsar ofta för att spel är roligt. Proffs satsar selektivt för att de söker värde.\n\nBästa förväntade värde kommer från att endast satsa när du har en tydlig fördel. Det kan betyda dagar eller veckor utan placerade spel. Amatören som placerar 50 spel i veckan med 2% edge kommer att prestera sämre än proffset som placerar 5 spel i veckan med 7% edge.\n\nSelektivitet kräver tålamod och förmågan att acceptera att man inte behöver delta i varje match.`
      },
      {
        title: 'Den Verkliga Arbetsbeskrivningen',
        content: `Ditt jobb som seriös spelare är att identifiera felprissatta utfall, inte att förutsäga vinnare.\n\nDenna distinktion betyder något. En väderanalytiker som korrekt förutspår regn 80% av tiden är värdefull. Men om marknaden redan prisar in 85% chans för regn har analytikern ingen edge.\n\nDitt jobb är att hitta situationer där din sannolikhetsbedömning skiljer sig tillräckligt från marknadens för att motivera ett spel efter att ha räknat med bookmakerens marginal.`
      },
      {
        title: 'Vad Som Skiljer Disciplinerade Spelare',
        content: `Disciplinerade spelare håller fast vid sin process oavsett senaste resultat. De ökar inte insatserna efter vinster eller jagar förluster efter förluster.\n\nDe förstår varians — att även spel med positivt förväntat värde förlorar regelbundet och att förlustssviter är oundvikliga. De för noggranna register, granskar sina beslut regelbundet och justerar sitt tillvägagångssätt baserat på bevis, inte känslor.\n\nDisciplin innebär också att känna sina gränser — både finansiella och psykologiska.`
      },
      {
        title: 'Varför Denna Manual Är Medvetet Lång',
        content: `Denna manual är omfattande eftersom genvägar inte fungerar i betting. Varje avsnitt bygger på tidigare och skapar en heltäckande förståelse.\n\nAtt hoppa över avsnitt är som att hoppa över kapitel i en mattebok — du kan förstå enskilda koncept, men den bredare bilden och sambanden går förlorade.\n\nTa dig tid för varje avsnitt. Gör anteckningar. Återvänd till tidigare material. Förståelsen du bygger här är grunden för allt som följer.`
      },
      {
        title: 'Spelarens Operativa Cykel',
        content: `Effektivt spelande följer en cykel: Research → Analys → Värdeidentifiering → Insatshantering → Genomförande → Granskning.\n\nResearch innebär att samla information om event, lag, spelare och förhållanden. Analys omvandlar denna information till sannolikhetsbedömningar. Värdeidentifiering jämför dina sannolikheter med marknadens odds.\n\nInsatshantering bestämmer hur mycket att satsa baserat på värde och bankroll. Genomförande är att placera spelet hos rätt bookmaker. Granskning stänger loopen — du lär dig av både vinster och förluster för att förfina din process.`
      }
    ]
  },
  {
    id: 2,
    title: 'Hur Bookmakers, Börser och Spelmarknader Verkligen Fungerar',
    slug: 'how-bookmakers-exchanges-and-betting-markets-really-work',
    description: 'Förstå mekaniken bakom odds, marginaler och varför börser erbjuder ett annat förslag.',
    sections: [
      {
        title: 'Hur Bookmakers Sätter Odds',
        content: `Bookmakers förutspår inte bara utfall — de hanterar risk och säkerställer vinst. Deras odds speglar en blandning av verkliga sannolikheter, inbyggd marginal och justeringar baserat på insatsflöde.\n\nProcessen börjar med sannolikhetsmodeller byggda av traders och algoritmer. Dessa råa sannolikheter justeras sedan för att inkludera bookmakerens marginal. Slutligen rör sig oddsen som svar på insatsvolymen på varje sida.`
      },
      {
        title: 'Bookmakerens Marginal',
        content: `Marginalen (eller overround) är bookmakerens inbyggda fördel. Om verklig sannolikhet är 50% för varje sida skulle rättvisa odds vara 2.00/2.00. Istället ser du kanske 1.91/1.91 — den skillnaden är marginalen.\n\nMarginaler varierar avsevärt beroende på sport, liga och speltyp. Huvudlinjer på populära event kan ha 2-4% marginaler, medan exotiska spel på mindre event kan överstiga 10%.`
      },
      {
        title: 'Spelbörser',
        content: `Börser som Betfair låter spelare satsa mot varandra istället för mot bookmaker. Börsen tar en provision på vinnande spel men har ingen marginal inbyggd i oddsen.\n\nDetta skapar en annan dynamik. Odds speglar spelarnas kollektiva visdom, inte bookmakerens modell. Du kan både backa (satsa för) och lay (satsa mot) utfall.`
      },
      {
        title: 'Linjerörelser och Steam',
        content: `När odds rör sig avsevärt kallas det linjerörelse. Steam är en skarp rörelse orsakad av hög volym eller professionella insatser.\n\nAtt spåra linjerörelser hjälper dig förstå marknadssentiment. Men var försiktig — att jaga steam utan egen analys är ett recept för katastrof.`
      },
      {
        title: 'Skarpa vs Mjuka Linjer',
        content: `Skarpa linjer är odds från bookmakers kända för att acceptera professionella insatser (som Pinnacle). Dessa linjer anses vara mer exakta eftersom de formas av smarta spelare.\n\nMjuka linjer kommer från detaljhandels-bookmakers som begränsar vinnare och kan vara långsammare att reagera på information.`
      }
    ]
  },
  {
    id: 3,
    title: 'Odds, Implicit Sannolikhet och Rättvis Prissättning',
    slug: 'odds-implied-probability-and-fair-pricing',
    description: 'Bemästra matematiken bakom odds och lär dig beräkna om ett spel erbjuder verkligt värde.',
    sections: [
      {
        title: 'Oddsformat',
        content: `Odds kommer i tre huvudformat: decimal, fraktionell och amerikansk. Decimal odds (2.50) visar total avkastning per insatsenhet. Fraktionell (3/2) visar vinst relativt insats. Amerikansk (+150 eller -200) visar vinst på 100 enheter eller krävd insats för att vinna 100.\n\nDecimal odds är lättast att arbeta med för beräkningar. För att konvertera implicit sannolikhet: Sannolikhet = 1 / Decimal Odds.`
      },
      {
        title: 'Beräkna Implicit Sannolikhet',
        content: `Implicit sannolikhet berättar hur ofta du måste vinna för att gå jämnt vid givna odds.\n\nFormel: Implicit Sannolikhet = 1 / Decimal Odds\n\nExempel:\n- Odds 1.50 → 66.7% implicit sannolikhet\n- Odds 2.00 → 50.0% implicit sannolikhet\n- Odds 3.00 → 33.3% implicit sannolikhet`
      },
      {
        title: 'Ta Bort Marginalen',
        content: `För att hitta verkliga marknadssannolikheter måste du ta bort bookmakerens marginal. Beräkna först summan av alla implicita sannolikheter — den överstiger 100%.\n\nFör att ta bort marginalen, dela varje implicit sannolikhet med summan.`
      },
      {
        title: 'Rättvisa Odds vs Marknadsodds',
        content: `Rättvisa odds är de som exakt speglar verklig sannolikhet utan marginal. Marknadsodds inkluderar bookmakerens marginal.\n\nOm du bedömer sannolikheten till 50% är rättvisa odds 2.00. Men bookmaker erbjuder 1.91. Den skillnaden är deras edge.`
      },
      {
        title: 'Praktisk Övning: Beräkna Värde',
        content: `Öva på att beräkna värde för hypotetiska scenarier:\n\nScenario: Fotbollsmatch, hemmavinst vid odds 2.20\n1. Implicit sannolikhet: 1/2.20 = 45.5%\n2. Din bedömning: 52%\n3. Värde: 52% - 45.5% = 6.5% edge\n\nDetta är ett spel med positivt förväntat värde.`
      }
    ]
  },
  {
    id: 4,
    title: 'Värde, Förväntat Värde, Line Shopping och Closing Line Value',
    slug: 'value-expected-value-line-shopping-and-closing-line-value',
    description: 'Lär dig kärnkoncepten som driver långsiktig lönsamhet.',
    sections: [
      {
        title: 'Vad Är Värde i Betting',
        content: `Värde existerar när oddsen implicerar en sannolikhet lägre än din uppskattade chans. Du satsar på värde när marknaden ger dig bättre odds än den borde.\n\nVärde är den enda faktorn för långsiktig lönsamhet i betting. Utan värde spelar matematiken emot dig.`
      },
      {
        title: 'Förväntat Värde (EV)',
        content: `Förväntat värde kvantifierar din edge i valutaenheter.\n\nFormel: EV = (Sannolikhet × Potentiell Vinst) - (Förlust-sannolikhet × Insats)\n\nPositivt EV betyder att i genomsnitt kommer detta spel att tjäna pengar.`
      },
      {
        title: 'Line Shopping',
        content: `Line shopping är att jämföra odds mellan bookmakers för att hitta bästa pris.\n\nSkillnader kan vara betydande — odds 2.05 vs 2.15 på samma event är 5% skillnad i potentiell avkastning.`
      },
      {
        title: 'Closing Line Value (CLV)',
        content: `CLV mäter hur dina odds jämförs med stängningsodds. Om du satsade vid 2.20 och linjen stängde på 2.00 slog du closing line.\n\nAtt konsekvent slå closing line är den starkaste indikatorn på långsiktig framgång.`
      },
      {
        title: 'När Man Inte Ska Tvinga Ett Värdespel',
        content: `Inte varje spel med beräknat värde förtjänar att placeras. Överväg:\n\n- Uppskattningsosäkerhet\n- Liten stickprovsstorlek\n- Information kan redan vara inprisad\n- Likviditetsproblem`
      }
    ]
  },
  {
    id: 5,
    title: 'Bankrollhantering, Insatser och Överlevnad Under Varians',
    slug: 'bankroll-management-staking-and-survival-under-variance',
    description: 'Skydda ditt kapital och optimera tillväxt samtidigt som du överlever oundvikliga förlustssviter.',
    sections: [
      {
        title: 'Definiera Din Bankroll',
        content: `Din bankroll är kapital dedikerat enbart till betting — pengar du kan förlora utan att påverka ditt liv. Satsa aldrig pengar för hyra, mat eller räkningar.\n\nBankroll bör vara tillräckligt stor för att överleva varians, men tillräckligt liten för att du emotionellt accepterar potentiell förlust.`
      },
      {
        title: 'Fast vs Proportionella Insatser',
        content: `Fast insats: Varje spel är samma belopp. Enkelt men optimerar inte tillväxt.\n\nProportionell insats: Varje spel är en procent av nuvarande bankroll. Justeras automatiskt — du satsar mer när du ligger före, mindre när du ligger efter.`
      },
      {
        title: 'Kelly-kriteriet',
        content: `Kelly-kriteriet föreslår optimal insatsstorlek för att maximera långsiktig tillväxt:\n\nKelly % = (Sannolikhet × Odds - 1) / (Odds - 1)\n\nDe flesta spelare använder fraktionell Kelly (1/4 eller 1/2) eftersom full Kelly är för aggressiv.`
      },
      {
        title: 'Förstå Varians',
        content: `Varians är naturlig fluktuation av resultat runt förväntade. Även med 55% träffsäkerhet kan du förlora 10 i rad — det är statistiskt möjligt och kommer att hända.\n\nLängre förlustssviter än du förväntar är normala.`
      },
      {
        title: 'Bankroll och Överlevnad',
        content: `Första regeln för professionell betting: gå inte i konkurs. Utan bankroll kan du inte spela.\n\nSätt strikta gränser: aldrig mer än 5% av bankroll på ett enskilt spel, 1-2% vid standardvärde.`
      }
    ]
  },
  {
    id: 6,
    title: 'Spelarens Kompletta Arbetsflöde: Från Matchlista till Placerat Spel',
    slug: 'the-full-bettor-workflow-from-fixture-list-to-placed-bet',
    description: 'En systematisk process för research, analys och genomförande av spel.',
    sections: [
      {
        title: 'Daglig Skanning',
        content: `Börja dagen med att granska kommande event. Fokusera på ligor och sporter du känner bäst.\n\nIdentifiera matcher med värdepotential. Daglig skanning skapar en lista med kandidater för djupare analys.`
      },
      {
        title: 'Djup Analys',
        content: `För varje kandidat, genomför detaljerad analys:\n\n- Lagform: senaste resultat, prestandatrend\n- Head-to-head: historiska möten, mönster\n- Situationskontext: motivation, trötthet, press\n- Trupp: skador, avstängningar, rotationer`
      },
      {
        title: 'Jämförelse Med Marknaden',
        content: `Jämför dina sannolikheter med marknadens odds. Beräkna värde för varje potentiellt spel.\n\nOm din bedömning betydligt överstiger marknadens implicita sannolikhet har du en spelkandidat.`
      },
      {
        title: 'Genomförande av Spel',
        content: `När du identifierar värde:\n\n1. Jämför odds mellan bookmakers\n2. Beräkna insatsstorlek enligt ditt system\n3. Placera spelet och dokumentera`
      },
      {
        title: 'Granskning och Dokumentation',
        content: `Efter spelets avgörande:\n\n- Registrera resultatet\n- Jämför closing line med dina spelodds (CLV)\n- Analysera om analysen var korrekt oavsett resultat`
      }
    ]
  },
  {
    id: 7,
    title: 'Klass: Fotboll',
    slug: 'football-class',
    description: 'Specifikt för fotbollsanalys: nyckelstatistik, speltyper och edge i den populäraste sporten.',
    sections: [
      { title: 'Introduktion till Fotbollsanalys', content: 'Fotboll är den mest populära sporten att satsa på, vilket betyder de mest effektiva marknaderna. Att hitta en edge kräver djupare analys.' },
      { title: 'Expected Goals (xG)', content: 'xG mäter kvaliteten på målchanser. Ett skott från 5 meter har högre xG än ett från 25 meter.' },
      { title: 'Fotbollsmarknader', content: 'Huvudmarknader: 1X2 (matchresultat), Asian Handicap, Over/Under mål, BTTS (båda lagen gör mål).' },
      { title: 'Kontextuella Faktorer', content: 'Motivation betyder något: nedflyttningsstrid vs lag mitt i tabellen utan mål.' }
    ]
  },
  {
    id: 8,
    title: 'Klass: Hästkapplöpning',
    slug: 'horse-racing-class',
    description: 'Specifikt för hästkapplöpning: formanalys, banförhållanden och att hitta värde.',
    sections: [
      { title: 'Grunderna i Hästkapplöpning', content: 'Hästkapplöpning erbjuder unika möjligheter på grund av antalet deltagare och varierande förhållanden.' },
      { title: 'Formanalys', content: 'Form är hästens resultathistorik. Men råa resultat räcker inte.' },
      { title: 'Förhållanden och Deras Påverkan', content: 'Banans tillstånd påverkar drastiskt resultaten. Vissa hästar älskar mjuk mark, andra kräver hård.' },
      { title: 'Kapplöpningsmarknader', content: 'Win (vinnare), Place (placering), Each-Way (kombination), Forecast/Tricast (ordning).' }
    ]
  },
  {
    id: 9,
    title: 'Klass: Tennis',
    slug: 'tennis-class',
    description: 'Tennisanalys: servestatistik, matchdynamik och specifika tennisspel.',
    sections: [
      { title: 'Grunderna i Tennisanalys', content: 'Tennis är en individualsport med massor av data. Servefördel, retureffektivitet, breakpoint-prestanda.' },
      { title: 'Servestatistik', content: 'Första serve-procent, ess, dubbelfål, poäng vunna efter f��rsta/andra serve.' },
      { title: 'Matchdynamik', content: 'Tennis har unika mönster: momentum, reaktion på break, tiebreak-prestanda.' },
      { title: 'Tennismarknader', content: 'Match winner, set handicap, game handicap, totala games.' }
    ]
  },
  {
    id: 10,
    title: 'Klass: Basket',
    slug: 'basketball-class',
    description: 'Basketanalys: speltempo, effektivitet, poänghandicap och totaler.',
    sections: [
      { title: 'Grunderna i Basketanalys', content: 'Basket är en högpoängsport med många matcher — mer data men också mer effektiva marknader.' },
      { title: 'Tempo och Effektivitet', content: 'Tempo mäter antal possessioner per match. Effektivitet = poäng per 100 possessioner.' },
      { title: 'Poänghandicap', content: 'Spread (handicap) är huvudmarknaden i basket. Linjen -5.5 betyder att favoriten måste vinna med 6+ poäng.' },
      { title: 'Totaler', content: 'Over/Under på total poäng. Analys av båda lagens tempo och defensiv effektivitet.' }
    ]
  },
  {
    id: 11,
    title: 'Klass: Ishockey',
    slug: 'ice-hockey-class',
    description: 'Hockeyanalys: målvakternas betydelse, powerplay och hög resultatvarians.',
    sections: [
      { title: 'Grunderna i Hockeyanalys', content: 'Hockey är lågpoängsport med hög varians. Ett mål förändrar allt.' },
      { title: 'Målvakternas Betydelse', content: 'Målvakten påverkar resultatet mer än i andra lagsporter. Save percentage är nyckelmått.' },
      { title: 'Specialteam', content: 'Power play och penalty kill är separata lagfärdigheter.' },
      { title: 'Hockeymarknader', content: 'Money line (ordinarie tid), puck line (handicap -1.5/+1.5), totaler.' }
    ]
  },
  {
    id: 12,
    title: 'Klass: Baseball',
    slug: 'baseball-class',
    description: 'Baseballanalys: pitchers betydelse, avancerad statistik och unika marknader.',
    sections: [
      { title: 'Grunderna i Baseballanalys', content: 'Baseball är ett spel av pitcher vs batter-dueller. Starting pitcher har enorm påverkan.' },
      { title: 'Pitchers Betydelse', content: 'Starting pitcher ansvarar för 5-7 innings — det är huvudfaktorn.' },
      { title: 'Avancerad Statistik', content: 'ERA mäter genomsnittliga förlorade runs. FIP isolerar pitchers bidrag.' },
      { title: 'Baseballmarknader', content: 'Money line, run line (-1.5/+1.5), totaler, first 5 innings.' }
    ]
  },
  {
    id: 13,
    title: 'Klass: Amerikansk Fotboll',
    slug: 'american-football-class',
    description: 'NFL och amerikansk fotboll: spreads, totaler och specifikt för veckans liga.',
    sections: [
      { title: 'Grunderna i Amerikansk Fotbollsanalys', content: 'NFL är den mest satsade sporten i USA — marknaderna är mycket effektiva.' },
      { title: 'Spread (Poänghandicap)', content: 'Spread dominerar i NFL. Nyckeltalen: 3 och 7 (field goal och touchdown).' },
      { title: 'Totaler', content: 'Over/Under på total poäng. Analysera: väder, speltempo, red zone-effektivitet.' },
      { title: 'NFL Kontextuella Faktorer', content: 'Kort vecka (Thursday Night Football), resor över landet, playoff-situation.' }
    ]
  },
  {
    id: 14,
    title: 'Andra Sporter och Specialistnischer',
    slug: 'other-sports-and-specialist-niches',
    description: 'Golf, MMA, esport och mindre marknader — där ineffektiviteter kan vara större.',
    sections: [
      { title: 'Fördelar Med Mindre Marknader', content: 'Mindre populära sporter = mindre uppmärksamhet från bookmakers = potentiellt fler ineffektiviteter.' },
      { title: 'Golf', content: 'Golf är turneringar med många deltagare. Outright winner, top 5/10/20, head-to-head matchups.' },
      { title: 'MMA/Boxning', content: 'Kampsporten är svåra att kvantifiera. Kampstil, matchups, räckvidd, skadehistorik.' },
      { title: 'Esport', content: 'Växande marknad med unga, mindre effektiva linjer. CS2, League of Legends, Dota 2.' }
    ]
  },
  {
    id: 15,
    title: 'Masterclass: Speltyper',
    slug: 'bet-types-masterclass',
    description: 'Djupgående analys av alla speltyper och när var och en är lämplig.',
    sections: [
      { title: 'Enkelspel', content: 'Ett val, en insats. Enklast och oftast rekommenderad speltyp.' },
      { title: 'Ackumulatorer (Kombispel)', content: 'Flera val kombinerade — alla måste vinna. Odds multipliceras men sannolikheten sjunker dramatiskt.' },
      { title: 'Asian Handicap', content: 'Eliminerar oavgjort genom handicap. Lägre marginaler, bättre odds vid jämna matcher.' },
      { title: 'Over/Under (Totaler)', content: 'Satsning på om summan (mål, poäng) blir över eller under linjen.' },
      { title: 'Specialspel och Prop Bets', content: 'Målskyttar, antal kort, spelarstatistik. Ofta högre marginaler men också mindre effektiva linjer.' }
    ]
  },
  {
    id: 16,
    title: 'Personlig Spelanteckningsbok, Beslutslogg och Granskningsregister',
    slug: 'personal-betting-notebook-decision-log-and-review-record',
    description: 'Dokumentationssystem för spel för kontinuerlig förbättring.',
    sections: [
      { title: 'Varför Dokumentation Är Nödvändig', content: 'Utan dokumentation förlitar du dig på minnet — och minnet är selektivt.' },
      { title: 'Vad Man Ska Registrera', content: 'För varje spel: Datum, event, val, odds, insats, motivering, resultat, CLV, efteranteckningar.' },
      { title: 'Granskningssystem', content: 'Veckovis granskning: resultat, ROI, största misstag. Månadsvis granskning: mönster, effektivitet per sport.' },
      { title: 'Verktyg', content: 'Kalkylark är minimum. Dedikerade trackers erbjuder mer analys.' }
    ]
  },
  {
    id: 17,
    title: 'Granska Prestanda, Upprätthålla Register och Lära Från Resultat',
    slug: 'reviewing-performance-maintaining-records-and-learning-from-results',
    description: 'Hur man analyserar sina resultat och kontinuerligt förbättras.',
    sections: [
      { title: 'Framgångsmått', content: 'ROI = Vinst / Summa Insatser. CLV är bättre långsiktigt mått än ROI.' },
      { title: 'Analys Per Kategori', content: 'Bryt ned resultat på: sport, liga, speltyp, oddsintervall.' },
      { title: 'Separera Skicklighet Från Tur', content: 'Kortsiktiga resultat = skicklighet + tur. Långsiktiga resultat = främst skicklighet.' },
      { title: 'Anpassa Strategin', content: 'Data ska styra förändringar. Ändra inte strategi efter några förluster.' }
    ]
  },
  {
    id: 18,
    title: 'Psykologi, Disciplin, Tilt-kontroll och Professionella Rutiner',
    slug: 'psychology-discipline-tilt-control-and-professional-routines',
    description: 'Den mentala aspekten av betting — lika viktig som analys.',
    sections: [
      { title: 'Spelarens Psykologi', content: 'Din hjärna är programmerad mot bra betting. Bekräftelsebias, förlustaversion, övermod.' },
      { title: 'Disciplin i Praktiken', content: 'Disciplin är att hålla fast vid systemet när känslorna skriker annorlunda.' },
      { title: 'Tilt-kontroll', content: 'Tilt är det emotionella tillståndet när du fattar dåliga beslut av frustration.' },
      { title: 'Professionella Rutiner', content: 'Fasta analystider. Separera speltid från matchvisning. Regelbundna granskningar.' }
    ]
  },
  {
    id: 19,
    title: 'Säkrare Spelstandarder, Regelefterlevnad och Personligt Skydd',
    slug: 'safer-gambling-standards-compliance-awareness-and-personal-protection',
    description: 'Ansvarsfullt spelande och skydd mot spelproblem.',
    sections: [
      { title: 'Varningssignaler', content: 'Satsa pengar avsedda för liv. Jaga förluster. Dölja spel för nära och kära.' },
      { title: 'Sätta Gränser', content: 'Sätt gränser INNAN du börjar: max månadsinsättning, max enkelinsats, tid spenderad på spel.' },
      { title: 'Regler och Licenser', content: 'Satsa endast hos licensierade bookmakers. Licens innebär tillsyn och fondskydd.' },
      { title: 'Hjälpresurser', content: 'Om du har spelproblem: Stödlinjen, Spelberoendes Riksförbund, lokala hjälplinjer.' }
    ]
  },
  {
    id: 20,
    title: 'Praktiska Övningar och Appendix A',
    slug: 'practical-exercises-and-appendix-a',
    description: 'Praktiska uppgifter för att tillämpa kunskap och tilläggsmaterial.',
    sections: [
      { title: 'Övning: Beräkna Värde', content: 'Välj 5 kommande matcher. Bedöm sannolikhet, kontrollera marknadsodds, beräkna om värde finns.' },
      { title: 'Övning: Paper Trading', content: 'Under en månad: spåra spel utan att satsa riktiga pengar.' },
      { title: 'Övning: CLV-analys', content: 'För dina senaste 50 spel: registrera odds vid spel, stängningsodds, beräkna genomsnittligt CLV.' },
      { title: 'Appendix: Formler och Förkortningar', content: 'Implicit sannolikhet = 1 / decimal odds\nEV = (P × vinst) - ((1-P) × insats)\nKelly % = (P × odds - 1) / (odds - 1)' }
    ]
  },
  {
    id: 21,
    slug: 'appendix-glossary',
    title: 'Bilaga A: Utökad Spelordlista',
    subtitle: 'En omfattande ordlista över speltermer skriven på träningsspråk',
    duration: '15 min läsning',
    sections: [
      {
        title: 'Utökad Spelordlista för Spelare',
        content: `Denna ordlista är skriven på träningsspråk för mänskliga spelare. Den är medvetet praktisk. Målet är inte att låta encyklopedisk utan att göra termen användbar i verklig analys, insatsdimensionering och registreringsarbete.

**A**

**Accumulator** - Spel med flera val där varje ben måste vinna. Attraktiva utbetalningar döljer sammansatt marginal och sammansatt fel.

**Across the card** - Kapplöpningsuttryck för att spela på varje lopp vid ett möte. Vanligtvis rekreationellt snarare än selektivt.

**All-weather** - Konstgjord tävlingsyta som används när gräsförhållandena är olämpliga. Ytpreferens spelar roll i hästanalys.

**American odds** - Oddsformat med plus- och minustal. Konvertera dem snabbt till sannolikhet för att undvika prissättningsfel.

**Ante-post** - Spel lagt långt före ett evenemang, ofta med bättre priser men större icke-startande risk beroende på regler.

**Arbitrage** - Spela på alla utfall hos olika spelbolag för att låsa in vinst. Möjligt i teorin, men kontorestriktioner gör det svårt i praktiken.

**Asian handicap** - Handikappmarknad, vanlig i fotboll, som justerar resultatet och kan eliminera eller dela oavgjort-risk.

**B**

**Back price** - Oddsen vid vilka du stödjer ett utfall, särskilt på en börs.

**Bankroll** - Kapital tilldelat uteslutande för spel. Existerar för att absorbera varians och skydda beslutskvalitet.

**Best odds guaranteed** - Erbjudande, vanligt vid kapplöpningar, där spelaren får det bättre av tidigt pris eller SP om hästen vinner.

**Bet builder** - Multi från samma match som kombinerar flera val från ett evenemang. Bekvämt, men ofta med hög marginal.

**Bookmaker** - Företag som sätter priser och tar emot spel medan de bygger in marginal i oddsen.

**Both teams to score** - Fotbollsmarknad som avgörs om varje lag gör minst ett mål.

**Break point** - Tennispoäng där returneraren kan vinna gamet genom att bryta serven.

**Break percentage** - Hur ofta en tennisspelare bryter motståndarens serve. En nyckelkonfrontationsmetrik.

**Bullpen** - Reservkastarenhet i baseboll. Kritisk i prissättning av hela matchen.

**C**

**Cash out** - Spelbolagsfunktion för tidig utbetalning. Generellt bekvämlighet först, värde sedan.

**Chance quality** - Praktiskt sätt att beskriva om försök är farliga, inte bara talrika.

**Chalk** - Slang för favoriten.

**Closing line** - Det sista brett tillgängliga marknadspriset innan evenemanget börjar.

**Closing line value** - Skillnaden mellan ditt tagna pris och stängningspriset. Användbart som processrevision.

**Coin flip game** - Möte prissatt nära paritet. Kräver disciplin eftersom många spelare överskattar små fördelar.

**Correct score** - Marknad som kräver exakt slutresultat. Hög varians och mycket priskänslig.

**Cover the spread** - Slå handikappet eller spreaden efter att justeringen tillämpats.

**Course and distance** - Kapplöpningsnotering som visar tidigare framgång på samma bana och distans.

**D**

**Dead heat** - Delad placering eller seger där insatsavräkning justeras enligt regler.

**Decimal odds** - Oddsformat som uttrycker total avkastning per insatsenhet. Generellt det enklaste professionella arbetsformatet.

**Derivative** - Sekundär marknad som första halvlek, första fem innings, lagotal, kvartal eller periodmarknad.

**Draw no bet** - Marknad där oavgjort återbetalar insatsen och endast vinst för vald sida betalar.

**Drift** - När odds blir större. Kan spegla negativ information, svagare efterfrågan eller marknadskorrigering.

**E**

**Each-way** - Kapplöpningsspel uppdelat i vinst- och placeringsdelar. Värdefullt endast när placeringsvillkor och pris motiverar det.

**Edge** - Den praktiska fördel din analys har över marknaden vid ett givet pris.

**Evens** - Jämna pengar: decimal 2.00 eller 1/1.

**Expected goals** - Fotbollsmetrik som uppskattar sannolikheten att skott blir mål. Användbar för processöversyn vid försiktig användning.

**Expected value** - Det långsiktiga värdet av ett spel baserat på din sannolikhetsbedömning och det erbjudna priset.

**Exchange** - Peer-to-peer-spelplattform där användare backar och layar utfall och plattformen tar provision.

**F**

**Favourite** - Valet med kortast pris på en marknad.

**Fair line** - Din egen oddsbedömning före spelbolagets marginal.

**First five** - Baseballderivat som endast täcker de första fem innings. Användbart för att isolera startande kastares fördel.

**First goalscorer** - Marknad om vilken spelare som gör första målet. Hög varians och rollkänslig.

**Fold** - Antalet ben i en accumulator eller parlay.

**Form** - Register över tidigare prestationer. Användbart endast när det placeras i lämpligt sammanhang.

**Fractional odds** - Traditionellt brittiskt och irländskt format som uttrycker vinst relativt insatsen.

**Freeze the line** - Marknadspaus eller brist på rörelse medan traders väntar på färsk information.

**G**

**Game script** - Den troliga formen och flödet av en match, särskilt viktigt i fotboll och basket.

**Going** - Kapplöpningsterm för markförhållande, från fast till tungt. Ofta avgörande.

**H**

**Handicap** - Marknad eller tävlingsstruktur utformad för att utjämna deltagare genom att justera resultat eller buren vikt.

**Hold percentage** - Hur ofta en tennisspelare håller sin serve. Centralt för match- och totalanalys.

**I**

**Implied probability** - Sannolikheten representerad av marknadspriset före justering för din egen åsikt.

**In-play** - Spela efter att evenemanget har börjat. Kräver snabbhet, disciplin och medvetenhet om fördröjning och likviditet.

**J**

**Juice** - Annat ord för spelbolagsmarginal eller vig.

**K**

**Kelly criterion** - Dimensioneringsformel som kopplar fördel till spelstorlek. Kraftfull i teorin, farlig när sannolikhetsbedömningar är svaga.

**L**

**Lay** - Spela mot ett utfall på en börs.

**Limit** - Maxbelopp ett spelbolag eller marknad tillåter vid ett givet pris.

**Line shopping** - Kontrollera flera spelbolag för att få bästa tillgängliga pris.

**Liquidity** - Hur mycket pengar som finns tillgängligt på en marknad utan att flytta priset för mycket.

**Live odds** - Tillgängliga priser medan evenemanget spelas.

**M**

**Market maker** - Sharp spelbolag eller börsaktivitet som hjälper till att definiera var priser bör vara.

**Middle** - Hålla positioner på olika linjer så att det kan skapa lönsam överlappning om utfallet hamnar mellan dem.

**Moneyline** - Vinstmarknad, särskilt i nordamerikanska sporter, vanligtvis utan oavgjort.

**O**

**Overround** - Beloppet med vilket den totala implicita sannolikheten överstiger 100 procent. Detta är spelbolagets marginal.

**Overtime** - Extra period efter ordinarie tid. Om det räknas beror på marknad och sport.

**P**

**Parlay** - Nordamerikansk term för accumulator.

**Pace** - Spelhastighet eller antal bollinnehav. Viktigt i kapplöpningar, fotboll, basket och mer, även om den exakta betydelsen varierar.

**Pick'em** - Spread- eller sidomarknad nära paritet där lagen anses mycket nära.

**Place terms** - Regler som styr hur många kapplöpningsplaceringar som betalar och vid vilken bråkdel av vinstodds.

**Positive EV** - Spel vars pris är bättre än din uppskattade rättvisa linje.

**Price sensitive** - Situation där spelet endast är attraktivt över eller under en smal oddströskel.

**Prop** - Propositionsmarknad om specifika spelar- eller evenemangsutfall snarare än huvudvinnaren.

**Push** - Spel som slutar oavgjort på linjen och återbetalas.

**R**

**Regulation** - Standardmatchlängd före övertid. Avgörande avräkningsformulering i hockey och vissa fotbollsmarknader.

**Return on investment** - Vinst delat med spelat belopp, vanligtvis uttryckt som procent.

**Run line** - Basebollversion av en spread, vanligtvis ±1.5 runs.

**S**

**Sample size** - Mängd data eller antal händelser bakom en trend eller statistik. Små urval vilseleder lätt.

**Scratch** - Sent tillbakadragande av häst eller spelare. Viktigt för marknadsreaktion och avräkning.

**Second-serve liability** - Tennissvaghet där spelaren blir sårbar när tvingad till andraserve.

**Sharp** - Respekterad spelare, pris eller spelbolag förknippat med starkare marknadsintelligens.

**Shootout** - Tiebreakerprocedur i hockey vid vissa tävlingar. Om det räknas beror på marknaden.

**Side** - Spel på ett lag eller deltagare att vinna eller täcka, i motsats till total eller prop.

**Soft book** - Rekreationellt spelbolag mer benäget att erbjuda långsammare eller mindre effektiva priser.

**Spread** - Handikappslinje utformad för att balansera två lag på en marknad.

**Stake** - Beloppet riskerat på ett spel.

**Steam** - Stark, plötslig marknadsrörelse, ofta tillskriven inflytelserika pengar eller information.

**Strike rate** - Procent av vunna spel. Användbart, men inte tillräckligt ensamt eftersom pris spelar roll.

**T**

**Team total** - Marknad om hur många poäng, runs, mål eller liknande ett lag gör oberoende av helmatchtotalen.

**Tick** - Minsta inkrement av prisrörelse på en marknad.

**Tilt** - Emotionellt komprometterat spelbeteende, ofta efter vinster eller förluster.

**Total** - Marknad om kombinerad poäng eller produktion, som över/under mål, poäng eller runs.

**Trap game** - Överanvänt uttryck ofta använt slarvigt. Meningsfullt endast om det hänvisar till verklig situations- eller konfrontationsrisk.

**True probability** - Din ärliga bedömning av hur ofta utfallet inträffar, separerat från marknadens syn.

**U**

**Unit** - Standardiserad insatsstorlek använd för att uttrycka risk konsekvent över bankrolls.

**V**

**Value** - Pris som är bättre än sannolikheten du tilldelar utfallet.

**Vig** - Annat ord för marginal, särskilt i amerikanskt spelspråk.

**Void** - Annullerat spel där insatsen återbetalas enligt regler.

**W**

**WHIP** - Basebollstatistik som mäter walks och hits tillåtna per kastad inning; användbar för trafik- och kontrollkontext.

**Win rate** - Samma allmänna idé som strike rate; hur ofta spel betalar ut.

**Y**

**Yield** - Vinst som procent av total insats över en uppsättning spel.`
      }
    ]
  }
]
