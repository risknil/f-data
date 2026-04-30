import { TrainingModule } from '@/lib/training-content'

export const trainingModulesNL: TrainingModule[] = [
  {
    id: 1,
    title: 'Wat Effectieve Gokkers Anders Doen',
    slug: 'wat-effectieve-gokkers-anders-doen',
    description: 'Begrijp de mentaliteit en gewoonten die succesvolle gokkers onderscheiden van de massa.',
    sections: [
      {
        title: 'De Marktdeelnemer Mentaliteit',
        content: `Effectieve gokkers zien wedden als marktdeelname, niet als gokken. Ze behandelen wedmarkten als financiële instrumenten waar informatie, timing en discipline belangrijker zijn dan geluk of intuïtie.

In plaats van te vragen "Wie wint?", vragen ze "Weerspiegelt de prijs nauwkeurig de waarschijnlijkheid?" Deze verschuiving transformeert de activiteit van voorspelling naar waardering—en dat onderscheid bepaalt wie op lange termijn bloeit.`
      },
      {
        title: 'Selectiviteit Boven Actie',
        content: `De meeste recreatieve gokkers zoeken redenen om te wedden. Effectieve gokkers zoeken redenen om te passen.

Ze begrijpen dat minder vaak wedden maar met meer overtuiging de weg is naar winstgevendheid. Ze weten dat elke weddenschap aan duidelijke criteria moet voldoen—en als dat niet zo is, gebeurt er niets. Passen is een actieve beslissing, geen zwakte.`
      },
      {
        title: 'De Echte Functieomschrijving',
        content: `Als je de taak in één zin zou samenvatten: vind verkeerd geprijsde kansen, wed wanneer de odds in jouw voordeel zijn, en doe verder niets.

Dit klinkt eenvoudig—maar het vereist emotionele controle, marktbegrip en consistentie. De meeste mensen kunnen niet stil zitten. Ze willen actie, opwinding of bevestiging. De gedisciplineerde gokker wil waarde—en alleen waarde.`
      },
      {
        title: 'Wat Gedisciplineerde Gokkers Onderscheidt',
        content: `Het is niet intelligentie of toegang tot geheime informatie. Het is gematigdheid.

Het vermogen om:
- Verliezen niet achterna te jagen
- Inzetten niet emotioneel te verhogen na winst
- Niet uit verveling te wedden
- Een systeem niet op te geven na een slechte week

Dit zijn geen glamoureuze vaardigheden. Maar het zijn de gedragingen die de weinigen die het volhouden scheiden van de velen die vertrekken.`
      },
      {
        title: 'Waarom Deze Handleiding Opzettelijk Lang Is',
        content: `Dit pakket bevat 20 secties met een reden: wedden is een discipline. Het heeft diepgang.

Het materiaal is niet ontworpen om door te bladeren—het is ontworpen om te herlezen. Sommige concepten zullen pas na maanden oefening zinvol worden. Dat is prima.

Neem het stap voor stap. Herlees het. Maak notities. Bouw een systeem dat werkt voor jouw sport, jouw prijsklasse en jouw denkstijl.`
      },
      {
        title: 'De Operationele Cyclus van de Gokker',
        content: `Alle 20 modules draaien om deze cyclus:

1. Onderzoek (wedstrijden, nieuws, statistieken)
2. Waardering (model of oordeel)
3. Prijsvergelijking (odds vs waarschijnlijkheidsschatting)
4. Beslissing (wedden, passen of wachten)
5. Uitvoering (plaatsing, timing, inzet)
6. Review (tracking, registratie, analyse)

Elke sectie breidt een deel van deze volgorde uit. Of je nu bankrollbeheer of tennismarkten bestudeert, je verfijnt een deel van deze cyclus.`
      }
    ]
  },
  {
    id: 2,
    title: 'Hoe Bookmakers, Exchanges en Wedmarkten Echt Werken',
    slug: 'hoe-bookmakers-exchanges-wedmarkten-werken',
    description: 'Diepgaand inzicht in de structuur van wedmarkten, bookmakermarges en exchangedynamiek.',
    sections: [
      {
        title: 'De Rol van de Bookmaker',
        content: `Bookmakers zijn marktmakelaars. Ze publiceren odds, accepteren weddenschappen en beheren risico. Hun doel is niet om uitkomsten correct te voorspellen—het is om winst te maken ongeacht wie wint.

Ze doen dit door een marge in te bouwen in de odds (overround of vig genoemd), winnende spelers te beperken of te verbannen, en lijnen aan te passen op basis van wedstromen.`
      },
      {
        title: 'Overround Uitgelegd',
        content: `Als een bookmaker odds aanbiedt op een tweezijdig evenement en de som van impliciete waarschijnlijkheden meer dan 100% is, is het overschot hun marge.

Bijvoorbeeld:
- Team A: 1.90 (52.6% impliciet)
- Team B: 1.90 (52.6% impliciet)
- Totaal: 105.2%

Die extra 5.2% is de marge van de bookmaker. Als gokker begin je met ingebouwde kosten.`
      },
      {
        title: 'Exchange vs Traditionele Bookmakers',
        content: `Exchanges (zoals Betfair, Betdaq, Smarkets) laten je wedden tegen andere gokkers, niet tegen een huis.

Je kunt "Back" (wedden voor) of "Lay" (wedden tegen) een uitkomst. De exchange rekent commissie op nettowinst (meestal 2-5%) in plaats van marge in te bouwen in odds.

Dit betekent vaak betere odds—maar ook minder liquiditeit in kleinere markten.`
      },
      {
        title: 'Marktvorming en Oddsbeweging',
        content: `Odds zijn niet statisch. Ze bewegen op basis van:
- Wedvolume
- Nieuws (blessures, weer, opstellingen)
- Sharp activiteit (professionele gokkers)
- Bookmaker-algoritmes

Begrijpen waarom een lijn beweegt—en of die beweging echte informatie of ruis weerspiegelt—is onderdeel van het lezen van de markt.`
      },
      {
        title: 'Waarom Bookmakers Winnaars Beperken',
        content: `Bookmakers zijn niet verplicht zaken met je te doen. Als je consistent wint, kunnen ze je maximum inzetten verlagen, slechtere odds aanbieden, of je account volledig sluiten.

Dit is frustrerend maar logisch: hun bedrijf hangt af van klanten die op lange termijn verliezen. Persistente winnaars zijn slechte klanten.

Daarom gebruiken veel serieuze gokkers exchanges, meerdere accounts, of diensten zoals Pinnacle die sharps verwelkomen.`
      }
    ]
  },
  {
    id: 3,
    title: 'Odds, Impliciete Waarschijnlijkheid en Eerlijke Prijzen',
    slug: 'odds-impliciete-waarschijnlijkheid-eerlijke-prijzen',
    description: 'Beheers de wiskunde van odds en begrijp wanneer een prijs waarde vertegenwoordigt.',
    sections: [
      {
        title: 'Oddsformaten: Decimaal, Fractioneel, Amerikaans',
        content: `Decimale odds tonen het totale rendement per ingezette eenheid. 2.50 betekent dat je €2.50 krijgt voor elke €1 ingezet (inclusief inzet).

Fractionele odds tonen winst relatief tot inzet. 6/4 betekent €6 winst voor elke €4 ingezet.

Amerikaanse odds gebruiken +/- ten opzichte van €100. +150 betekent €150 winst op €100 ingezet; -150 betekent dat je €150 moet inzetten om €100 te winnen.

Gebruik wat voor jou het meest comfortabel is—maar zorg dat je kunt converteren.`
      },
      {
        title: 'Impliciete Waarschijnlijkheid Berekenen',
        content: `Om decimale odds naar impliciete waarschijnlijkheid te converteren:

Impliciete Waarschijnlijkheid = 1 / Decimale Odds

Voorbeeld:
- Odds 2.00 → 1/2.00 = 50%
- Odds 1.50 → 1/1.50 = 66.7%
- Odds 3.00 → 1/3.00 = 33.3%

Dit vertelt je welke waarschijnlijkheid de bookmaker prijst. Vergelijk met jouw schatting om waarde te beoordelen.`
      },
      {
        title: 'Eerlijke Prijs vs Marktprijs',
        content: `Een eerlijke prijs is de odds die de werkelijke waarschijnlijkheid van een uitkomst weerspiegelt—zonder marge.

Als je gelooft dat een team 50% kans heeft om te winnen, is de eerlijke prijs 2.00. Als de bookmaker 2.10 biedt, is het waarde. Als ze 1.85 bieden, is het dat niet.

Jouw taak is eerlijke prijzen schatten en discrepanties vinden.`
      },
      {
        title: 'De Overround Verwijderen',
        content: `Om de "echte" waarschijnlijkheden uit een set odds te vinden, moet je de marge verwijderen.

Eenvoudige methode: deel elke impliciete waarschijnlijkheid door het totaal.

Als impliciete waarschijnlijkheden optellen tot 105%, en één uitkomst 52.5% toont, is de gecorrigeerde waarschijnlijkheid 52.5/105 = 50%.

Dit helpt om jouw visie te vergelijken met de werkelijke marktschatting.`
      }
    ]
  },
  {
    id: 4,
    title: 'Waarde, Expected Value, Line Shopping en Closing Line Value',
    slug: 'waarde-expected-value-line-shopping-clv',
    description: 'De fundamentele concepten voor het identificeren van winstgevende weddenschappen op lange termijn.',
    sections: [
      {
        title: 'Wat is Waarde bij Wedden',
        content: `Waarde bestaat wanneer de aangeboden odds hoger zijn dan ze zouden moeten zijn gebaseerd op de werkelijke waarschijnlijkheid.

Als een eerlijke munt wordt geworpen en iemand biedt je 2.20 op kop, is dat waarde—omdat de eerlijke prijs 2.00 is.

Waarde vinden garandeert niet dat je die weddenschap wint. Het betekent dat als je dezelfde weddenschap vele malen plaatst, je vooruit gaat.`
      },
      {
        title: 'Expected Value (EV) Berekening',
        content: `EV meet de gemiddelde winst per weddenschap over tijd.

Formule:
EV = (Winstkans × Potentiële Winst) - (Verlieskans × Inzet)

Voorbeeld:
- Odds 2.50, je schat 45% winstkans
- EV = (0.45 × 1.50) - (0.55 × 1) = 0.675 - 0.55 = +0.125

Positieve EV betekent winstgevende weddenschap op lange termijn.`
      },
      {
        title: 'Line Shopping',
        content: `Line shopping betekent odds vergelijken tussen bookmakers om de beste prijs te krijgen.

Een verschil van 0.05-0.10 in odds lijkt klein, maar accumuleert significant over tijd.

Gebruik oddsvergelijkingssites. Houd accounts bij meerdere bookmakers. Accepteer nooit de eerste prijs die je ziet.`
      },
      {
        title: 'Closing Line Value (CLV)',
        content: `De closing line is de laatste odds voordat het evenement begint. Het wordt beschouwd als het meest efficiënt omdat het alle beschikbare informatie bevat.

Als je betere odds krijgt dan de closing line, heb je CLV gevangen—en dit is een van de beste indicatoren van vaardigheid bij wedden.

Track je openingsodds vs closing om je prestaties te meten.`
      }
    ]
  },
  {
    id: 5,
    title: 'Bankrollbeheer, Staking en Overleven bij Variantie',
    slug: 'bankrollbeheer-staking-variantie',
    description: 'Bescherm je kapitaal door juiste inzetgrootte en begrip van variantie.',
    sections: [
      {
        title: 'Wat is een Bankroll',
        content: `Je bankroll is geld uitsluitend bestemd voor wedden. Het is geen geld voor huur, eten of noodgevallen.

Bepaal een bedrag dat je volledig kunt verliezen. Dat is je bankroll. Voeg nooit extra geld toe om verliezen te "achtervolgen".`
      },
      {
        title: 'Staking Methodes',
        content: `Flat Staking: Wed hetzelfde percentage (bijv. 2%) op elke weddenschap. Simpel en veilig.

Kelly Criterion: Bereken de optimale inzet op basis van je geschatte edge. Agressiever, vereist nauwkeurige schattingen.

Fractionele Kelly: Gebruik een fractie (bijv. helft of kwart) van volledige Kelly. Balanceert groei en risicobescherming.`
      },
      {
        title: 'Variantie Begrijpen',
        content: `Variantie is de natuurlijke schommeling van resultaten. Zelfs met positieve edge heb je verliezende reeksen.

Een reeks van 20 opeenvolgende verliezende weddenschappen is mogelijk zelfs met 55% winpercentage. Je moet financieel en psychologisch voorbereid zijn.

Hoe kleiner je inzetten relatief tot de bankroll, hoe beter je variantie overleeft.`
      },
      {
        title: 'Wed Nooit Alles',
        content: `De belangrijkste regel: wed nooit een significant deel van je bankroll op een enkele weddenschap.

Zelfs een "zekere" weddenschap kan verliezen. En als je te veel verliest, heb je geen kapitaal om te herstellen.

Houd enkele inzetten tussen 1-5% van de bankroll. 2-3% wordt aanbevolen voor de meesten.`
      }
    ]
  },
  {
    id: 6,
    title: 'De Complete Workflow van de Gokker: Van Wedstrijdlijst tot Geplaatste Weddenschap',
    slug: 'complete-workflow-gokker',
    description: 'Een stapsgewijs proces van initieel onderzoek tot finale uitvoering.',
    sections: [
      {
        title: 'Fase 1: Wedstrijden Scannen',
        content: `Begin met het bekijken van de wedstrijdlijst voor je sport/competitie. Identificeer evenementen die je kent en begrijpt.

Probeer niet alles te dekken. Focus waar je expertise of informatievoorsprong hebt.`
      },
      {
        title: 'Fase 2: Onderzoek en Analyse',
        content: `Verzamel relevante informatie:
- Teamnieuws, blessures, schorsingen
- Recente statistieken en trends
- Historische onderlinge resultaten
- Situationele factoren (uitwedstrijden, rust, motivatie)

Vorm je mening voordat je naar de odds kijkt.`
      },
      {
        title: 'Fase 3: Waardering en Pricing',
        content: `Gebaseerd op je analyse, schat de waarschijnlijkheden.

Het hoeft niet decimaal precies te zijn. Een range is prima: "Ik denk dat ze 55-60% van de tijd winnen."

Converteer dan naar odds: 57.5% → ongeveer 1.74.`
      },
      {
        title: 'Fase 4: Vergelijking met de Markt',
        content: `Kijk nu naar de aangeboden odds. Als de bookmaker 1.90 biedt en jouw eerlijke prijs is 1.74, is er geen waarde—pass.

Als ze 1.95 bieden en jouw eerlijke prijs is 2.10, is er waarde—overweeg te wedden.`
      },
      {
        title: 'Fase 5: Beslissing en Uitvoering',
        content: `Als er waarde is, bepaal de inzet op basis van je systeem.

Plaats de weddenschap tegen de beste beschikbare prijs. Documenteer alles: evenement, odds, inzet, redenering.`
      },
      {
        title: 'Fase 6: Review Na Afloop',
        content: `Na het evenement, update je records. Maar beoordeel de beslissing niet op het resultaat.

Vraag jezelf: "Was mijn analyse redelijk? Vond ik waarde?" Het enkele resultaat telt niet—het proces wel.`
      }
    ]
  },
  {
    id: 7,
    title: 'Voetbal Masterclass',
    slug: 'voetbal-masterclass',
    description: 'Strategieën en benaderingen specifiek voor voetbalweddenschappen.',
    sections: [
      {
        title: 'Belangrijkste Voetbalmarkten',
        content: `De meest voorkomende markten:
- 1X2 (thuiswinst, gelijkspel, uitwinst)
- Over/Under doelpunten
- Asian Handicap
- Both Teams to Score (BTTS)
- Correcte Score

Elke markt heeft zijn eigen dynamiek. Je hoeft ze niet allemaal te beheersen—specialiseer waar je edge vindt.`
      },
      {
        title: 'Sleutelfactoren om te Analyseren',
        content: `- Expected Goals (xG) vs daadwerkelijke doelpunten
- Recente vorm (maar let op regressie naar het gemiddelde)
- Belangrijke blessures en schorsingen
- Programma en selectiebeheer
- Weersomstandigheden en veldgesteldheid
- Wedstrijdbelang voor beide teams`
      },
      {
        title: 'Asian Handicap Uitgelegd',
        content: `De Asian Handicap elimineert het gelijkspel door een virtueel voor-/nadeel te geven aan een team.

- -0.5: Het team moet winnen
- -1.0: Het team moet met 2+ doelpunten winnen
- -0.25: Helft inzet op 0, helft op -0.5

Het is complexer maar biedt vaak betere waarde voor duidelijke favorieten.`
      },
      {
        title: 'Veelvoorkomende Valkuilen bij Voetbal',
        content: `- Overschatten van teams in vorm (kan geluk zijn)
- Context negeren (derby, degradatie, selectiebeheer)
- Op alle wedstrijden wedden in plaats van selectief zijn
- Blindelings op statistieken vertrouwen zonder context`
      }
    ]
  },
  {
    id: 8,
    title: 'Paardenrennen Masterclass',
    slug: 'paardenrennen-masterclass',
    description: 'Navigeer de paardenrenmarkten en ontwikkel een analytische aanpak.',
    sections: [
      {
        title: 'Typen Races en Ondergronden',
        content: `- Vlak: pure snelheid, verschillende afstanden
- Hindernissen: horden en steeplechase
- Draf: andere discipline

Ondergronden: gras, zand (all-weather), dirt (VS)

Elk type vereist andere evaluatie. Specialiseer.`
      },
      {
        title: 'Fundamentele Factoren',
        content: `- Recente vorm (maar beschouw het competitieniveau)
- Klasse van de race
- Voorkeursafstand van het paard
- Ondergrondvoorkeur (zwaar vs snel)
- Jockey en trainer
- Gedragen gewicht
- Draw (startpositie op de baan)`
      },
      {
        title: 'De Markt Lezen',
        content: `Paardenrennen heeft zeer liquide markten en significante bewegingen.

Let op:
- Steam moves (sterke odds-verkorting)
- Drifters (paarden die verlengen)
- Informatie uit marktactiviteit

Paardenrenmarkten zijn vaak efficiënter dan andere sporten—edge vinden is moeilijk.`
      },
      {
        title: 'Each Way en Place Betting',
        content: `Each Way: twee weddenschappen - één om te winnen, één voor plaatsing.

Kan waarde bieden wanneer place-odds genereus zijn ten opzichte van werkelijke plaatsingskansen.

Analyseer win- en place-waarde apart.`
      }
    ]
  },
  {
    id: 9,
    title: 'Tennis Masterclass',
    slug: 'tennis-masterclass',
    description: 'Benut de eigenaardigheden van tennis om waarde te vinden.',
    sections: [
      {
        title: 'Structuur van Tennis',
        content: `Tennis is een individuele sport—geen teamgenoot om een slechte dag te compenseren.

Wedstrijdformaat: best of 3 of 5 sets (mannelijke Grand Slams).

Ondergrond: gras, gravel, hardcourt—enorme impact op prestaties.`
      },
      {
        title: 'Belangrijkste Markten',
        content: `- Match Winner
- Set Handicap
- Game Handicap
- Over/Under Games
- Set Betting (exacte setuitslag)

Tennis live is zeer populair—odds veranderen snel.`
      },
      {
        title: 'Tennisspecifieke Factoren',
        content: `- Servicestatistieken (aces, % eerste service, punten gewonnen op eerste/tweede)
- Prestaties op ondergrond
- Onderlinge resultaten
- Fysieke conditie en blessures
- Mentale factor in cruciale momenten
- Schema (opeenvolgende wedstrijden, reizen)`
      },
      {
        title: 'Volatiliteit en Variantie',
        content: `Tennis heeft hoge inherente variantie. Een servicebreak kan alles veranderen.

Zelfs grote favorieten kunnen sets verliezen of onverwacht verliezen.

Dit creëert kansen voor geïnformeerde gokkers—maar vereist zorgvuldig risicobeheer.`
      }
    ]
  },
  {
    id: 10,
    title: 'Basketbal Masterclass',
    slug: 'basketbal-masterclass',
    description: 'Analyseer basketbal voor weddenschappen: NBA, Europa en meer.',
    sections: [
      {
        title: 'Kenmerken van Basketbal',
        content: `Hoge score, veel balbezit. Resultaten neigen naar het gemiddelde meer dan in andere sporten.

Dit maakt spreads voorspelbaarder maar vermindert waarde op outright.`
      },
      {
        title: 'Belangrijkste Markten',
        content: `- Spread (puntenhandicap)
- Totals (Over/Under punten)
- Moneyline (winnaar)
- Quarter/Half betting
- Player props

NBA-spreads zijn zeer efficiënt—edge vinden vereist diepe analyse.`
      },
      {
        title: 'Te Overwegen Factoren',
        content: `- Back-to-backs en schema
- Blessures (vooral sterren)
- Speeltempo
- Offensieve/defensieve efficiëntie
- Specifieke match-ups
- Motivationele situaties (playoff push, tanking)`
      },
      {
        title: 'Line Shopping bij Basketbal',
        content: `Bij basketbal kan een half punt op de spread groot verschil maken.

Sleutelnummers zijn minder uitgesproken dan bij American football (waar 3 en 7 domineren), maar line shopping blijft cruciaal.`
      }
    ]
  },
  {
    id: 11,
    title: 'IJshockey Masterclass',
    slug: 'ijshockey-masterclass',
    description: 'Begrijp de markten en dynamiek van ijshockey.',
    sections: [
      {
        title: 'Structuur van Hockey',
        content: `3 periodes van 20 minuten. Typisch lage scores (5-6 totale goals gemiddeld in NHL).

Overtime en shootout in regulier seizoen—belangrijke impact op sommige weddenschappen.`
      },
      {
        title: 'Belangrijkste Markten',
        content: `- Puckline (spread van 1.5 goals)
- Moneyline
- Over/Under goals
- 3-Way (winnaar reguliere tijd)
- Period betting

De standaard puckline is -1.5/+1.5, gegeven de lage scores.`
      },
      {
        title: 'Specifieke Factoren',
        content: `- Keepersstatistieken
- Corsi/Fenwick/Expected Goals
- Special teams (powerplay/penalty kill)
- Back-to-backs
- Reizen en tijdzones
- Keeperssituaties (starter vs backup)`
      },
      {
        title: 'Variantie in Hockey',
        content: `Hockey heeft hoge variantie door lage scores. Eén goal kan alles beslissen.

Favorieten verliezen vaak—wat waarde kan creëren op underdogs maar ook frustreert.

De lange termijn is de enige manier om prestaties te evalueren.`
      }
    ]
  },
  {
    id: 12,
    title: 'Honkbal Masterclass',
    slug: 'honkbal-masterclass',
    description: 'Analyseer honkbal met focus op pitching en waarde.',
    sections: [
      {
        title: 'Uniciteit van Honkbal',
        content: `162 seizoenswedstrijden—enorme steekproefgrootte.

De starting pitcher domineert elke wedstrijd. Pitcherwissels veranderen de odds volledig.`
      },
      {
        title: 'Belangrijkste Markten',
        content: `- Moneyline
- Run Line (spread van 1.5)
- Totals (Over/Under runs)
- First 5 Innings (F5)
- Player props

F5 isoleert het duel tussen starters, elimineert bullpen-variabiliteit.`
      },
      {
        title: 'Sleutelmetrieken',
        content: `- ERA, WHIP, FIP voor pitchers
- wOBA, OPS, hard hit % voor batters
- Bullpen stats
- Splits (vs linkshandigen/rechtshandigen, thuis/uit)
- Ballpark factors`
      },
      {
        title: 'Weer en Ballpark',
        content: `Honkbal wordt sterk beïnvloed door:
- Wind (helpt of hindert homeruns)
- Temperatuur (bal reist verder in warmte)
- Vochtigheid
- Ballparkafmetingen

Deze factoren beïnvloeden totals significant.`
      }
    ]
  },
  {
    id: 13,
    title: 'American Football Masterclass',
    slug: 'american-football-masterclass',
    description: 'Domineer weddenschappen op NFL en college football.',
    sections: [
      {
        title: 'Structuur van Football',
        content: `NFL: 17 seizoenswedstrijden—elke wedstrijd telt enorm.

College: meer wedstrijden maar meer variantie door talentverschillen.

Beperkte steekproefgrootte maakt analyse uitdagender.`
      },
      {
        title: 'Belangrijkste Markten',
        content: `- Spread (puntenhandicap)
- Totals (Over/Under)
- Moneyline
- Player props
- Teasers en parlays`
      },
      {
        title: 'Sleutelnummers',
        content: `In football zijn 3 en 7 cruciaal (field goal en touchdown).

Een half punt kopen op deze nummers kan waarde hebben. Maar bookmakers weten dit—de prijs is aangepast.

Andere sleutelnummers: 4, 6, 10, 14.`
      },
      {
        title: 'Belangrijke Factoren',
        content: `- Blessures (vooral QB en OL)
- Weer
- Specifieke match-ups
- Motivationele situaties
- Reizen en bye weeks
- Public betting invloed op lijnen`
      }
    ]
  },
  {
    id: 14,
    title: 'Andere Sporten en Specialistische Niches',
    slug: 'andere-sporten-specialistische-niches',
    description: 'Vind waarde in minder gevolgde sporten en nichemarken.',
    sections: [
      {
        title: 'Waarom Kleinere Sporten Overwegen',
        content: `Minder efficiënte markten. Minder aandacht betekent meer fouten in odds.

Als je specifieke kennis hebt (hebt gespeeld, volgt al jaren), heb je mogelijk echte edge.`
      },
      {
        title: 'Sporten om te Overwegen',
        content: `- MMA/UFC
- Golf
- Cricket
- Rugby
- Darts
- Snooker
- Esports

Elk heeft zijn eigenaardigheden en specifieke markten.`
      },
      {
        title: 'Uitdagingen',
        content: `- Beperkte liquiditeit
- Minder competitieve odds
- Minder beschikbare data
- Bookmakers kunnen je sneller beperken

Balanceer kansen vs praktische zaken.`
      },
      {
        title: 'Specialisatie',
        content: `Beter expert in één niche dan middelmatig in alles.

Vind jouw sport/competitie/markt. Bouw diepe expertise. Waarde komt uit specialisatie.`
      }
    ]
  },
  {
    id: 15,
    title: 'Wedtypes Masterclass',
    slug: 'wedtypes-masterclass',
    description: 'Begrijp elk type weddenschap en wanneer het te gebruiken.',
    sections: [
      {
        title: 'Enkele Weddenschappen',
        content: `Eén weddenschap op één uitkomst. De puurste en aanbevolen manier.

Minder variantie, meer controle. Als je edge hebt, maximaliseren singles het over tijd.`
      },
      {
        title: 'Accumulator/Parlay',
        content: `Meerdere selecties gecombineerd. Allemaal moeten winnen.

Odds worden vermenigvuldigd—maar ook het voordeel van de bookmaker. Elke selectie voegt marge toe.

Wiskundig nadelig. Vermijd voor serieus wedden.`
      },
      {
        title: 'Systeemweddenschappen',
        content: `Combinaties van weddenschappen waar niet alles hoeft te winnen (bijv. Trixie, Yankee, Canadian).

Reduceren variantie vergeleken met pure parlays maar verhogen totale blootstelling.

Complex en vaak slecht begrepen.`
      },
      {
        title: 'Live Betting',
        content: `Wedden tijdens het evenement. Odds veranderen snel.

Kansen voor wie aandachtig kijkt—maar ook valkuilen voor impulsieve beslissingen.

Vereist ijzeren discipline en voorbereiding vooraf.`
      },
      {
        title: 'Futures en Outright',
        content: `Weddenschappen op langetermijnresultaten (kampioenschapswinnaars, topscorers, enz.).

Je geld is lang vastgezet. Overweeg de opportuniteitskosten.

Kan waarde bieden als je langetermijnwaarschijnlijkheden kunt evalueren.`
      }
    ]
  },
  {
    id: 16,
    title: 'Persoonlijk Wedlogboek, Beslissingslog en Review Record',
    slug: 'persoonlijk-wedlogboek-beslissingslog',
    description: 'Creëer een trackingsysteem voor analyse en continue verbetering.',
    sections: [
      {
        title: 'Waarom Alles Registreren',
        content: `Zonder data kun je niet verbeteren. Elke weddenschap moet worden gedocumenteerd.

Tracking stelt je in staat om:
- Sterke en zwakke punten te identificeren
- Werkelijke vs waargenomen prestaties te meten
- Gedragspatronen te herkennen
- Je aanpak te rechtvaardigen (of te wijzigen)`
      },
      {
        title: 'Wat te Registreren',
        content: `Minimaal:
- Datum en evenement
- Type weddenschap en selectie
- Verkregen odds
- Inzet
- Resultaat
- Winst/Verlies

Idealiter ook:
- Closing line
- Redenering van de weddenschap
- Emotionele staat
- Bron van de weddenschap (eigen analyse vs tip)`
      },
      {
        title: 'Tracking Tools',
        content: `- Spreadsheet (Excel, Google Sheets)
- Dedicated apps
- Gespecialiseerde software

Het belangrijkste is consistentie, niet de tool. Kies wat je daadwerkelijk gebruikt.`
      },
      {
        title: 'Periodieke Review',
        content: `Plan regelmatige reviews: wekelijks en maandelijks.

Analyseer:
- ROI per sport/markt/wedtype
- Gemiddelde CLV
- Foutpatronen
- Discipline gevolgd vs geschonden

Pas strategie aan op basis van data, niet op gevoel.`
      }
    ]
  },
  {
    id: 17,
    title: 'Prestaties Reviewen, Records Bijhouden en Leren van Resultaten',
    slug: 'prestaties-reviewen-records-leren',
    description: 'Systematisch resultaten analyseren voor continue verbetering.',
    sections: [
      {
        title: 'Proces Scheiden van Resultaat',
        content: `Een weddenschap kan correct zijn en verliezen. Kan verkeerd zijn en winnen.

Beoordeel beslissingen op het proces, niet op het enkele resultaat.

Op lange termijn leiden goede beslissingen tot goede resultaten. Op korte termijn kan alles gebeuren.`
      },
      {
        title: 'Te Monitoren Metrieken',
        content: `- ROI (Return on Investment)
- Yield (winst / omzet)
- Gemiddelde CLV
- Winpercentage per oddsrange
- Prestaties per sport/competitie/markt
- Maximale drawdown`
      },
      {
        title: 'Steekproefgrootte',
        content: `Trek geen overhaaste conclusies. Je hebt honderden weddenschappen nodig voor significante data.

Variantie kan edge verbergen of illusies van vaardigheid creëren.

Focus op het proces terwijl je voldoende data verzamelt.`
      },
      {
        title: 'Aanpassing',
        content: `Markten veranderen. Wat werkte kan stoppen met werken.

Wees bereid om:
- Niet meer winstgevende benaderingen op te geven
- Nieuwe markten te verkennen
- Modellen en methodes te updaten

Leren houdt nooit op.`
      }
    ]
  },
  {
    id: 18,
    title: 'Psychologie, Discipline, Tilt Control en Professionele Routines',
    slug: 'psychologie-discipline-tilt-routines',
    description: 'De mentale component van succes bij wedden.',
    sections: [
      {
        title: 'De Rol van Psychologie',
        content: `De meeste mislukkingen bij wedden zijn psychologisch, niet analytisch.

Mensen weten wat ze zouden moeten doen. Ze doen het niet omdat emoties de overhand krijgen.

De geest beheersen is net zo fundamenteel als de bankroll beheersen.`
      },
      {
        title: 'Tilt en Hoe Het te Vermijden',
        content: `Tilt: emotionele staat waarin je irrationele beslissingen neemt, typisch na verliezen.

Signalen:
- Inzetten verhogen om te herstellen
- Wedden op niet-geanalyseerde evenementen
- Afwijken van het systeem
- Frustratie en woede

Oplossing: herken triggers, neem pauzes, respecteer vooraf vastgestelde limieten.`
      },
      {
        title: 'Dagelijkse Discipline',
        content: `- Definieer tijden voor onderzoek en plaatsing
- Wed niet wanneer moe, gestrest of onder invloed
- Respecteer altijd staking regels
- Accepteer dat passen een geldige beslissing is
- Controleer niet constant live resultaten`
      },
      {
        title: 'Routines Bouwen',
        content: `Routines verminderen emotionele beslissingen.

Voorbeeld wekelijkse routine:
- Maandag: review vorige week
- Dinsdag-Zaterdag: onderzoek en wedden
- Zondag: analyse en planning

Vind wat voor jou werkt en houd het vol.`
      }
    ]
  },
  {
    id: 19,
    title: 'Veilig Gokken Standaarden, Compliance en Persoonlijke Bescherming',
    slug: 'veilig-gokken-compliance-bescherming',
    description: 'Verantwoord spelen en waarschuwingssignalen herkennen.',
    sections: [
      {
        title: 'Verantwoord Gokken',
        content: `Wedden kan een recreatieve of professionele activiteit zijn. Maar het kan problematisch worden.

Wed alleen wat je kunt verliezen. Stel limieten en respecteer ze.

Als wedden je leven, relaties of financiën negatief beïnvloedt—stop.`
      },
      {
        title: 'Waarschuwingssignalen',
        content: `- Wedden met geld dat voor iets anders nodig is
- Activiteit verbergen voor familie
- Verliezen achtervolgen
- Constant aan wedden denken
- Irritatie wanneer je niet kunt wedden
- Progressieve verhoging van inzetten voor opwinding`
      },
      {
        title: 'Zelfuitsluitingstools',
        content: `Alle gereguleerde bookmakers bieden:
- Stortingslimieten
- Verlieslimieten
- Tijdelijke time-outs
- Permanente zelfuitsluiting

Gebruik ze proactief indien nodig. Er is geen schaamte in hulp vragen.`
      },
      {
        title: 'Ondersteuningsbronnen',
        content: `Als jij of iemand die je kent problemen heeft met gokken:
- Nationale hulplijnen
- Gamblers Anonymous
- Gespecialiseerde counselors

Een probleem erkennen is de eerste stap om het op te lossen.`
      }
    ]
  },
  {
    id: 20,
    title: 'Praktische Oefeningen en Appendix',
    slug: 'praktische-oefeningen-appendix',
    description: 'Breng in praktijk wat je hebt geleerd met oefeningen en bronnen.',
    sections: [
      {
        title: 'Oefening 1: Waarschijnlijkheidsberekening',
        content: `Neem 10 toekomstige wedstrijden. Voor elke:
1. Schat waarschijnlijkheden thuiswinst, gelijkspel, uitwinst
2. Converteer naar eerlijke odds
3. Vergelijk met werkelijke odds
4. Identificeer waar je waarde ziet (indien aanwezig)

Wed niet. Dit is alleen een waarderingsoefening.`
      },
      {
        title: 'Oefening 2: Paper Trading',
        content: `Registreer een maand lang "virtuele" weddenschappen:
- Behandel alsof het echt geld is
- Respecteer staking regels
- Documenteer alles

Dit bouwt discipline zonder financieel risico en geeft je data om je aanpak te evalueren.`
      },
      {
        title: 'Oefening 3: CLV Analyse',
        content: `Voor elke geplaatste weddenschap:
1. Registreer odds op moment van plaatsing
2. Registreer de closing line
3. Bereken het verschil

Na 100+ weddenschappen, analyseer: krijg je gemiddeld betere odds dan de closing line?`
      },
      {
        title: 'Appendix: Veelgebruikte Formules',
        content: `Impliciete Waarschijnlijkheid = 1 / Decimale Odds

Decimale Odds = 1 / Waarschijnlijkheid

EV = (Winstkans × Winst) - (Verlieskans × Inzet)

Kelly % = (bp - q) / b
waar b = decimale odds - 1, p = winstkans, q = verlieskans`
      },
      {
        title: 'Volgende Stappen',
        content: `Je hebt het basismateriaal voltooid. Nu:

1. Herlees de meest relevante secties voor jou
2. Begin met paper trading of minimale inzetten
3. Bouw je trackingsysteem
4. Wees geduldig—verbetering kost tijd
5. Keer periodiek terug naar dit materiaal

Succes met je reis naar gedisciplineerd wedden.`
      }
    ]
  }
]
