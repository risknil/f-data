import { TrainingModule } from '@/lib/training-content'

export const trainingModulesNO: TrainingModule[] = [
  {
    id: 1,
    title: 'Hva Effektive Spillere Gjør Annerledes',
    slug: 'what-effective-bettors-do-differently',
    description: 'Forstå tankegangen som skiller profesjonelle fra amatører. Denne seksjonen handler om strukturert tenkning — ikke tips eller systemer.',
    sections: [
      { title: 'Markedsdeltakerens Tankegang', content: 'De mest effektive spillerne ser seg selv som markedsdeltakere, ikke gamblere. De forstår at de ikke spiller på kampresultater — de handler med utfall på et marked hvor priser reflekterer kollektive overbevisninger.' },
      { title: 'Selektivitet Over Aktivitet', content: 'Amatører spiller ofte fordi spill er gøy. Profesjonelle spiller selektivt fordi de søker verdi.' },
      { title: 'Den Egentlige Jobbeskrivelsen', content: 'Jobben din som seriøs spiller er å identifisere feilprisede utfall, ikke å forutsi vinnere.' },
      { title: 'Hva Som Skiller Disiplinerte Spillere', content: 'Disiplinerte spillere holder seg til prosessen sin uansett nylige resultater.' },
      { title: 'Hvorfor Denne Manualen Er Bevisst Lang', content: 'Denne manualen er omfattende fordi snarveier ikke fungerer i betting.' },
      { title: 'Spillerens Operative Syklus', content: 'Effektiv spilling følger en syklus: Research → Analyse → Verdiidentifikasjon → Innsatsstyring → Gjennomføring → Gjennomgang.' }
    ]
  },
  {
    id: 2,
    title: 'Hvordan Bookmakere, Børser og Spillmarkeder Virkelig Fungerer',
    slug: 'how-bookmakers-exchanges-and-betting-markets-really-work',
    description: 'Forstå mekanikken bak odds, marginer og hvorfor børser tilbyr et annet forslag.',
    sections: [
      { title: 'Hvordan Bookmakere Setter Odds', content: 'Bookmakere forutsier ikke bare utfall — de styrer risiko og sikrer profitt.' },
      { title: 'Bookmakerens Margin', content: 'Marginen er bookmakerens innebygde fordel.' },
      { title: 'Spillbørser', content: 'Børser lar spillere spille mot hverandre i stedet for mot bookmakeren.' },
      { title: 'Linjebevegelser og Steam', content: 'Når odds beveger seg markant, kalles det linjebevegelse.' },
      { title: 'Skarpe vs Myke Linjer', content: 'Skarpe linjer er odds fra bookmakere kjent for å akseptere profesjonelle innsatser.' }
    ]
  },
  {
    id: 3,
    title: 'Odds, Implisitt Sannsynlighet og Rettferdig Prising',
    slug: 'odds-implied-probability-and-fair-pricing',
    description: 'Mestre matematikken bak odds og lær å beregne om et spill tilbyr ekte verdi.',
    sections: [
      { title: 'Oddsformater', content: 'Odds kommer i tre hovedformater: desimal, brøk og amerikansk.' },
      { title: 'Beregning av Implisitt Sannsynlighet', content: 'Formel: Implisitt Sannsynlighet = 1 / Desimal Odds' },
      { title: 'Fjerne Marginen', content: 'For å finne sanne markedssannsynligheter må du fjerne bookmakerens margin.' },
      { title: 'Rettferdige Odds vs Markedsodds', content: 'Rettferdige odds reflekterer nøyaktig sann sannsynlighet uten margin.' },
      { title: 'Praktisk Øvelse: Beregne Verdi', content: 'Øv på å beregne verdi for hypotetiske scenarier.' }
    ]
  },
  {
    id: 4,
    title: 'Verdi, Forventet Verdi, Line Shopping og Closing Line Value',
    slug: 'value-expected-value-line-shopping-and-closing-line-value',
    description: 'Lær kjernekonseptene som driver langsiktig lønnsomhet.',
    sections: [
      { title: 'Hva Er Verdi i Betting', content: 'Verdi eksisterer når oddsen impliserer en sannsynlighet lavere enn din estimerte sjanse.' },
      { title: 'Forventet Verdi (EV)', content: 'Forventet verdi kvantifiserer din edge i valutaenheter.' },
      { title: 'Line Shopping', content: 'Line shopping er å sammenligne odds mellom bookmakere for å finne beste pris.' },
      { title: 'Closing Line Value (CLV)', content: 'CLV måler hvordan dine odds sammenligner med lukningsodds.' },
      { title: 'Når Man Ikke Skal Tvinge Et Verdispill', content: 'Ikke hvert spill med beregnet verdi fortjener å bli plassert.' }
    ]
  },
  {
    id: 5,
    title: 'Bankrollstyring, Innsatser og Overlevelse Under Varians',
    slug: 'bankroll-management-staking-and-survival-under-variance',
    description: 'Beskytt kapitalen din og optimer vekst mens du overlever uunngåelige tapsrekker.',
    sections: [
      { title: 'Definere Din Bankroll', content: 'Din bankroll er kapital dedikert utelukkende til spilling — penger du kan tape uten å påvirke livet ditt.' },
      { title: 'Fast vs Proporsjonale Innsatser', content: 'Fast innsats vs proporsjonal innsats har ulike fordeler og ulemper.' },
      { title: 'Kelly-kriteriet', content: 'Kelly-kriteriet foreslår optimal innsatsstørrelse for å maksimere langsiktig vekst.' },
      { title: 'Forstå Varians', content: 'Varians er naturlig fluktuasjon av resultater rundt forventede.' },
      { title: 'Bankroll og Overlevelse', content: 'Første regel for profesjonell betting: ikke gå konkurs.' }
    ]
  },
  {
    id: 6,
    title: 'Den Komplette Spiller-arbeidsflyten: Fra Kampliste til Plassert Spill',
    slug: 'the-full-bettor-workflow-from-fixture-list-to-placed-bet',
    description: 'En systematisk prosess for research, analyse og gjennomføring av spill.',
    sections: [
      { title: 'Daglig Skanning', content: 'Start dagen med å gjennomgå kommende begivenheter.' },
      { title: 'Dyp Analyse', content: 'For hver kandidat, gjennomfør detaljert analyse.' },
      { title: 'Sammenligning med Markedet', content: 'Sammenlign dine sannsynligheter med markedets odds.' },
      { title: 'Gjennomføring av Spill', content: 'Når du identifiserer verdi, sammenlign odds og plasser spillet.' },
      { title: 'Gjennomgang og Dokumentasjon', content: 'Etter spillets avgjørelse, registrer resultatet og analyser.' }
    ]
  },
  {
    id: 7,
    title: 'Klasse: Fotball',
    slug: 'football-class',
    description: 'Spesifikt for fotballanalyse: nøkkelstatistikk, spilltyper og edge i den mest populære sporten.',
    sections: [
      { title: 'Introduksjon til Fotballanalyse', content: 'Fotball er den mest populære sporten å spille på.' },
      { title: 'Expected Goals (xG)', content: 'xG måler kvaliteten på målsjanser.' },
      { title: 'Fotballmarkeder', content: 'Hovedmarkeder: 1X2, Asian Handicap, Over/Under mål, BTTS.' },
      { title: 'Kontekstuelle Faktorer', content: 'Motivasjon betyr noe: nedrykningskamp vs lag midt på tabellen.' }
    ]
  },
  {
    id: 8,
    title: 'Klasse: Hesteveddeløp',
    slug: 'horse-racing-class',
    description: 'Spesifikt for hesteveddeløp: formanalyse, baneforhold og å finne verdi.',
    sections: [
      { title: 'Grunnleggende i Hesteveddeløp', content: 'Hesteveddeløp tilbyr unike muligheter på grunn av antall deltakere.' },
      { title: 'Formanalyse', content: 'Form er hestens resultathistorie.' },
      { title: 'Forhold og Deres Påvirkning', content: 'Banens tilstand påvirker dramatisk resultatene.' },
      { title: 'Veddeløpsmarkeder', content: 'Win, Place, Each-Way, Forecast/Tricast.' }
    ]
  },
  {
    id: 9,
    title: 'Klasse: Tennis',
    slug: 'tennis-class',
    description: 'Tennisanalyse: servestatistikk, kampdynamikk og spesifikke tennisspill.',
    sections: [
      { title: 'Grunnleggende i Tennisanalyse', content: 'Tennis er en individualsport med masse data.' },
      { title: 'Servestatistikk', content: 'Første serve-prosent, ess, dobbeltfeil.' },
      { title: 'Kampdynamikk', content: 'Tennis har unike mønstre: momentum, reaksjon på break.' },
      { title: 'Tennismarkeder', content: 'Match winner, set handicap, game handicap, totale games.' }
    ]
  },
  {
    id: 10,
    title: 'Klasse: Basketball',
    slug: 'basketball-class',
    description: 'Basketballanalyse: tempo, effektivitet, poenghandicap og totaler.',
    sections: [
      { title: 'Grunnleggende i Basketballanalyse', content: 'Basketball er en høyscorende sport med mange kamper.' },
      { title: 'Tempo og Effektivitet', content: 'Tempo måler antall besittelser per kamp.' },
      { title: 'Poenghandicap', content: 'Spread er hovedmarkedet i basketball.' },
      { title: 'Totaler', content: 'Over/Under på total poeng.' }
    ]
  },
  {
    id: 11,
    title: 'Klasse: Ishockey',
    slug: 'ice-hockey-class',
    description: 'Hockeyanalyse: keepernes betydning, powerplay og høy resultatvarians.',
    sections: [
      { title: 'Grunnleggende i Hockeyanalyse', content: 'Hockey er lavscorende med høy varians.' },
      { title: 'Keepernes Betydning', content: 'Keeperen påvirker resultatet mer enn i andre lagidretter.' },
      { title: 'Spesiallag', content: 'Power play og penalty kill er separate lagferdigheter.' },
      { title: 'Hockeymarkeder', content: 'Money line, puck line, totaler.' }
    ]
  },
  {
    id: 12,
    title: 'Klasse: Baseball',
    slug: 'baseball-class',
    description: 'Baseballanalyse: pitchernes betydning, avansert statistikk og unike markeder.',
    sections: [
      { title: 'Grunnleggende i Baseballanalyse', content: 'Baseball er et spill av pitcher vs batter-dueller.' },
      { title: 'Pitchernes Betydning', content: 'Starting pitcher er ansvarlig for 5-7 innings.' },
      { title: 'Avansert Statistikk', content: 'ERA, FIP, wOBA og andre sabermetrics.' },
      { title: 'Baseballmarkeder', content: 'Money line, run line, totaler, first 5 innings.' }
    ]
  },
  {
    id: 13,
    title: 'Klasse: Amerikansk Fotball',
    slug: 'american-football-class',
    description: 'NFL og amerikansk fotball: spreads, totaler og spesifikt for den ukentlige ligaen.',
    sections: [
      { title: 'Grunnleggende i Amerikansk Fotballanalyse', content: 'NFL er den mest spilte sporten i USA.' },
      { title: 'Spread (Poenghandicap)', content: 'Spread dominerer i NFL. Nøkkeltall: 3 og 7.' },
      { title: 'Totaler', content: 'Over/Under på total poeng.' },
      { title: 'NFL Kontekstuelle Faktorer', content: 'Kort uke, reiser, playoff-situasjon.' }
    ]
  },
  {
    id: 14,
    title: 'Andre Idretter og Spesialistnisjer',
    slug: 'other-sports-and-specialist-niches',
    description: 'Golf, MMA, esport og mindre markeder — hvor ineffektiviteter kan være større.',
    sections: [
      { title: 'Fordeler Med Mindre Markeder', content: 'Mindre populære idretter = potensielt flere ineffektiviteter.' },
      { title: 'Golf', content: 'Turneringer med mange deltakere.' },
      { title: 'MMA/Boksing', content: 'Kampsport er vanskelig å kvantifisere.' },
      { title: 'Esport', content: 'Voksende marked med mindre effektive linjer.' }
    ]
  },
  {
    id: 15,
    title: 'Masterclass: Spilltyper',
    slug: 'bet-types-masterclass',
    description: 'Dyptgående analyse av alle spilltyper og når hver er passende.',
    sections: [
      { title: 'Enkelspill', content: 'Ett valg, én innsats. Enklest og oftest anbefalt.' },
      { title: 'Akkumulatorer', content: 'Flere valg kombinert — alle må vinne.' },
      { title: 'Asian Handicap', content: 'Eliminerer uavgjort gjennom handicap.' },
      { title: 'Over/Under', content: 'Spill på om summen blir over eller under linjen.' },
      { title: 'Spesialspill og Prop Bets', content: 'Målscorere, antall kort, spillerstatistikk.' }
    ]
  },
  {
    id: 16,
    title: 'Personlig Spillnotatbok, Beslutningslogg og Gjennomgangsregister',
    slug: 'personal-betting-notebook-decision-log-and-review-record',
    description: 'Dokumentasjonssystem for spill for kontinuerlig forbedring.',
    sections: [
      { title: 'Hvorfor Dokumentasjon Er Nødvendig', content: 'Uten dokumentasjon stoler du på hukommelsen — og hukommelsen er selektiv.' },
      { title: 'Hva Man Skal Registrere', content: 'For hvert spill: Dato, begivenhet, valg, odds, innsats, begrunnelse, resultat, CLV.' },
      { title: 'Gjennomgangssystem', content: 'Ukentlig, månedlig og kvartalsvis gjennomgang.' },
      { title: 'Verktøy', content: 'Regneark er minimum. Dedikerte trackere tilbyr mer analyse.' }
    ]
  },
  {
    id: 17,
    title: 'Gjennomgang av Prestasjon, Vedlikehold av Registre og Læring av Resultater',
    slug: 'reviewing-performance-maintaining-records-and-learning-from-results',
    description: 'Hvordan man analyserer sine resultater og kontinuerlig forbedres.',
    sections: [
      { title: 'Suksessmålinger', content: 'ROI = Profitt / Sum av Innsatser. CLV er bedre langsiktig måling.' },
      { title: 'Analyse Per Kategori', content: 'Bryt ned resultater på sport, liga, spilltype, oddsintervall.' },
      { title: 'Skille Dyktighet fra Flaks', content: 'Kortsiktige resultater = dyktighet + flaks. Langsiktige = primært dyktighet.' },
      { title: 'Tilpasning av Strategi', content: 'Data skal styre endringer, ikke følelser.' }
    ]
  },
  {
    id: 18,
    title: 'Psykologi, Disiplin, Tilt-kontroll og Profesjonelle Rutiner',
    slug: 'psychology-discipline-tilt-control-and-professional-routines',
    description: 'Den mentale aspekten av betting — like viktig som analyse.',
    sections: [
      { title: 'Spillerens Psykologi', content: 'Hjernen din er programmert mot god betting. Bekreftelsesbias, tapsaversjon.' },
      { title: 'Disiplin i Praksis', content: 'Disiplin er å holde seg til systemet når følelsene skriker annerledes.' },
      { title: 'Tilt-kontroll', content: 'Tilt er den følelsesmessige tilstanden der du tar dårlige beslutninger av frustrasjon.' },
      { title: 'Profesjonelle Rutiner', content: 'Faste analysetider. Skill spilletid fra kampvisning.' }
    ]
  },
  {
    id: 19,
    title: 'Tryggere Spillstandarder, Compliance-bevissthet og Personlig Beskyttelse',
    slug: 'safer-gambling-standards-compliance-awareness-and-personal-protection',
    description: 'Ansvarlig spilling og beskyttelse mot spilleproblemer.',
    sections: [
      { title: 'Advarselstegn', content: 'Spill for penger til livnødvendigheter. Jaging av tap. Skjuling av spill for nære.' },
      { title: 'Sette Grenser', content: 'Sett grenser FØR du begynner: maks månedlig innskudd, maks enkelinnsats.' },
      { title: 'Regler og Lisenser', content: 'Spill kun hos lisensierte bookmakere.' },
      { title: 'Hjelperessurser', content: 'Hvis du har spilleproblemer: Hjelpelinjen, lokale ressurser.' }
    ]
  },
  {
    id: 20,
    title: 'Praktiske Øvelser og Appendiks A',
    slug: 'practical-exercises-and-appendix-a',
    description: 'Praktiske oppgaver for å anvende kunnskap og tilleggsmaterialer.',
    sections: [
      { title: 'Øvelse: Beregne Verdi', content: 'Velg 5 kommende kamper. Vurder sannsynlighet, sjekk markedsodds, beregn verdi.' },
      { title: 'Øvelse: Paper Trading', content: 'I en måned: spor spill uten å satse ekte penger.' },
      { title: 'Øvelse: CLV-analyse', content: 'For dine siste 50 spill: registrer odds, lukningsodds, beregn CLV.' },
      { title: 'Appendiks: Formler', content: 'Implisitt sannsynlighet = 1 / desimal odds\nEV = (P × profitt) - ((1-P) × innsats)' }
    ]
  }
]
