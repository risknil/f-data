import type { TrainingModule } from '@/lib/training-content'

export const trainingModulesAF: TrainingModule[] = [
  {
    id: 1,
    title: 'Wat Effektiewe Wedders Werklik Anders Doen',
    slug: 'wat-effektiewe-wedders-anders-doen',
    description: 'Die kernmentaliteit en gedrag wat gedissiplineerde wedders van die massa skei.',
    sections: [
      { title: 'Die Markdeelnemer-Ingesteldheid', content: 'Wedden gaan nie daaroor om te voorspel wie gaan wen nie. Dit gaan daaroor om te evalueer of die prys wat aangebied word die werklike waarskynlikheid weerspieël, en net te speel wanneer jy \'n verskil in jou guns sien. Die meeste wedders tree op asof hulle in \'n raaivertooning is, probeer om wenners te kies. Gedissiplineerde wedders tree op soos markdeelnemers op \'n beurs, kyk na pryse en vra: "Is hierdie odds te hoog of te laag vergeleke met die werklike waarskynlikheid?"' },
      { title: 'Seleksie Bo Aksie', content: 'Gedissiplineerde wed beteken om baie geleenthede te evalueer en slegs dié met \'n duidelike voordeel te kies. Die meeste aksie wat jy evalueer, moet verwerp word. Dissipline beteken om te aanvaar dat jy soms \'n hele dag of naweek niks sal hê om te wed nie. Sonder \'n werklike voordeel moet daar geen wed wees nie.' },
      { title: 'Die Werklike Posbeskrywing', content: 'Jou werk as \'n wedder is nie om wenners te kies nie. Jou werk is om prysfeilinge te vind en dit herhaaldelik te benut. Dit beteken jy sal gereeld weddenskappe op spanne weier waarvan jy glo hulle gaan wen, bloot omdat die prys korrek is of nie hoog genoeg nie.' },
      { title: 'Wat Gedissiplineerde Wedders Skei', content: 'Gedissiplineerde wedders skryf alles neer, het duidelike reëls vir seleksie en inset, en hersien hul prestasie gereeld. Hulle besluit nie ad hoc nie. Hulle volg \'n proses en pas hul strategie aan op grond van bewyse eerder as intuïsie.' },
      { title: 'Waarom Hierdie Handleiding Opsetlik Lank Is', content: 'Hierdie handleiding is opsetlik gedetailleerd omdat gedissiplineerde wed \'n soliede grondslag van kennis vereis. Kortpaaie en vinnige wenke hou die onkunde in stand wat bookmakers uitbuit. Elke afdeling spreek \'n spesifieke kwesbaarheid aan wat die mark gewoonlik teen ontspanningswedders gebruik.' },
      { title: 'Die Wedder-Bedryfsiklus', content: 'Elke gedissiplineerde wedder volg \'n siklus: Berei Voor, Evalueer, Wed, Rekordeer, Hersien. Voorbereiding beteken om jou evalueringsdag op te stel voordat jy na enige odds kyk. Evaluering beteken om wedstryde te ontleed sonder vooroordeel. Wed is bloot uitvoering. Rekordeer beteken om alles te dokumenteer. Hersien beteken om gereeld deur jou rekords te gaan.' }
    ]
  },
  {
    id: 2,
    title: 'Hoe Bookmakers, Beurse en Wedmarkte Werklik Werk',
    slug: 'hoe-bookmakers-en-wedmarkte-werk',
    description: 'Die meganika van odds-vorming, margetoepassing en markgedrag.',
    sections: [
      { title: 'Die Bookmaker-Besigheid', content: 'Die bookmaker probeer nie uitslae voorspel nie. Hulle stel pryse wat gebalanseerde aksie aan beide kante van \'n mark lok, wat wins verseker ongeag die uitslag. Hul wins kom van die marge wat hulle op odds toepas.' },
      { title: 'Hoe Odds Gevorm Word', content: 'Odds begin met waarskynlikheidsmodelle wat deur bookmaker-ontleders bedryf word. Hierdie modelle voer spandata, spelerdata, situasionele data en historiese patrone in. Sodra markte lewendig is, word odds voortdurend aangepas op grond van werklike geldvloei.' },
      { title: 'Beurse vs Bookmakers', content: 'Wedbeurse soos Betfair werk anders. In plaas daarvan om teen die bookmaker te wed, wed jy teen ander kliënte. Die beurs neem net \'n klein kommissie op winste. Dit skep dikwels strenger odds, omdat jy die bookmaker-marge verwyder het.' },
      { title: 'Markbewegings en Wat Dit Beteken', content: 'Odds beweeg om twee hoofredes: geldvloei en inligting. Geldvloei-gedrewe bewegings gebeur wanneer groot volumes geld aan een kant laai. Inligting-gedrewe bewegings gebeur wanneer nuwe inligting opduik - beseringsnuus, spanveranderinge, weer-opdaterings.' },
      { title: 'Bookmaker-Verbanne en Risikobestuur', content: 'Bookmakers bestuur hul risiko aktief deur winsgewende kliënte te beperk of te verbied. As jy konsekwent met tyd wen, sal jou limiete daal of jou rekening sal gesluit word. Suksesvolle wed by sagte bookmakers sal uiteindelik beperkings veroorsaak.' }
    ]
  },
  {
    id: 3,
    title: 'Odds, Geïmpliseerde Waarskynlikheid en Billike Pryse',
    slug: 'odds-geimpliseerde-waarskynlikheid-billike-pryse',
    description: 'Die wiskunde agter odds en hoe om waarde te bereken.',
    sections: [
      { title: 'Odds-Formate Verstaan', content: 'Desimale odds is die eenvoudigste: dit wys jou totale opbrengs per eenheid gewed. Odds van 2.50 beteken jy kry 2.50 terug vir elke 1 gewed, insluitend jou oorspronklike inset. Breuk-odds en Amerikaanse odds is net verskillende maniere om dieselfde inligting uit te druk.' },
      { title: 'Omskakeling na Geïmpliseerde Waarskynlikheid', content: 'Om desimale odds na geïmpliseerde waarskynlikheid om te skakel: 1 ÷ odds = geïmpliseerde waarskynlikheid. Odds van 2.00 impliseer 50% waarskynlikheid. Odds van 4.00 impliseer 25% waarskynlikheid. Hierdie omskakeling is fundamenteel vir waarde-evaluering.' },
      { title: 'Verstaan die Oorrondte', content: 'Die oorrondte is die totale geïmpliseerde waarskynlikheid van alle uitkomste in \'n mark. In \'n regverdige mark sou dit 100% wees. Bookmakers stel dit altyd hoër - tipies 102-110% - om hul wins te verseker. Hierdie verskil is die bookmaker-marge.' },
      { title: 'Billike Odds vs Werklike Odds', content: 'Billike odds is wat \'n uitkoms sou hê sonder enige marge. As jy glo \'n span het \'n 40% kans om te wen, is billike odds 2.50. As die bookmaker 2.30 aanbied, is daar geen waarde nie. As hulle 2.70 aanbied, is daar waarde.' },
      { title: 'Die Marge se Impak', content: 'Hoe hoër die marge, hoe meer moet die werklike waarskynlikheid in jou guns wees om waarde te vind. Teen \'n 2% marge het jy \'n klein helling om te oorkom. Teen \'n 10% marge moet jy baie sterker wees om winsgewend te wed.' }
    ]
  },
  {
    id: 4,
    title: 'Waarde, Verwagte Waarde, Lyninkopie en Sluitingslyn-Waarde',
    slug: 'waarde-verwagte-waarde-lyninkopie',
    description: 'Kernkonsepte vir die identifisering en benutting van wedgeleenthede.',
    sections: [
      { title: 'Wat Waarde Werklik Beteken', content: 'Waarde bestaan wanneer die odds wat aangebied word \'n waarskynlikheid impliseer wat laer is as die werklike waarskynlikheid. As \'n span \'n 50% kans het om te wen, is odds van 2.10 waarde (impliseer 47.6%), terwyl odds van 1.90 nie waarde is nie (impliseer 52.6%).' },
      { title: 'Verwagte Waarde Bereken', content: 'Verwagte Waarde (EV) = (Waarskynlikheid × Potensiële Wins) - (Teenoorgestelde Waarskynlikheid × Inset). Positiewe EV-weddenskappe is winsgewend oor tyd. Negatiewe EV-weddenskappe verloor geld oor tyd, ongeag individuele resultate.' },
      { title: 'Lyninkopie as Standaard Praktyk', content: 'Lyninkopie beteken om odds by verskeie bookmakers te vergelyk om die beste prys te vind. Die verskil tussen 1.90 en 2.00 op dieselfde weddenskap is \'n 5% impak op jou opbrengs. Oor duisende weddenskappe is dit die verskil tussen wins en verlies.' },
      { title: 'Sluitingslyn-Waarde as Maatstaf', content: 'Die sluitingslyn is die laaste odds voor \'n wedstryd begin. Dit word algemeen beskou as die mees akkurate weerspieëling van werklike waarskynlikhede. As jy konsekwent beter odds as die sluitingslyn kry, is dit sterk bewys van vaardigheid.' },
      { title: 'Praktiese Toepassing', content: 'Jou doel is om weddenskappe te vind waar die odds wat jy kan kry beter is as wat die sluitingslyn sal wees. Dit vereis vroeë markanalise, begrip van hoe lyne beweeg, en die vermoë om verkeerde pryse te identifiseer voordat die mark dit regstel.' }
    ]
  },
  {
    id: 5,
    title: 'Bankrolbestuur, Insette en Oorlewing Onder Variansie',
    slug: 'bankrolbestuur-insette-variansie',
    description: 'Beskerm jou kapitaal en oorleef onvermydelike verliesstrepe.',
    sections: [
      { title: 'Hoekom Bankrolbestuur Kritiek Is', content: 'Selfs met \'n bewese voordeel kan swak bankrolbestuur jou bankrot maak. Variansie is onvermydelik - verliesstrepe van 10, 20 of selfs 30 weddenskappe gebeur aan winsgewende wedders. Jou insetstelsel moet hierdie stormweer oorleef.' },
      { title: 'Bepaal Jou Bankrol', content: 'Jou bankrol is geld wat spesifiek vir weddery opsy gesit is, geskei van jou lewensuitgawes. Dit moet \'n bedrag wees wat jy werklik kan verloor sonder om jou lewenstandaard te beïnvloed. Begin nooit met geleende geld nie.' },
      { title: 'Eenheid-Insette Verduidelik', content: 'Die meeste professionele wedders wed in eenhede, gewoonlik 1-3% van hul bankrol per weddenskap. As jou bankrol R10,000 is en jou eenheidgrootte is 1%, is elke inset R100. Hierdie benadering verseker dat geen enkele weddenskap jou kan uitwis nie.' },
      { title: 'Plat vs Proporsionele Insette', content: 'Plat insette beteken dieselfde bedrag op elke weddenskap ongeag waargenome voordeel. Proporsionele insette (soos Kelly-kriterium) skaal insette op grond van voordeel-grootte. Plat is eenvoudiger en vergewe foute; proporsioneel is wiskundig optimaal maar vereis akkurate evaluerings.' },
      { title: 'Oorlewing Onder Variansie', content: 'Selfs \'n wedder met \'n 55% wen-tempo kan \'n 20-weddenskap verliesstreep ervaar. Jou insetstelsel moet hierdie scenario akkommodeer. As jy 5% per weddenskap wed, is jy bankrot na 20 verliese. As jy 1% wed, het jy nog 80% van jou bankrol oor.' },
      { title: 'Wanneer om Insette aan te Pas', content: 'Pas jou eenheidgrootte aan as jou bankrol aansienlik verander. As jou bankrol verdubbel, kan jou eenheidgrootte verdubbel. As dit halveer, moet jou eenheidgrootte ook halveer. Hierdie dinamiese aanpassing beskerm winste en beperk verliese.' }
    ]
  },
  {
    id: 6,
    title: 'Die Volledige Wedder-Werkvloei: Van Wedstrydlys tot Geplaasde Wed',
    slug: 'volledige-wedder-werkvloei',
    description: 'Die stap-vir-stap proses wat professionele wedders volg.',
    sections: [
      { title: 'Fase 1: Wedstrydseleksie', content: 'Begin deur die wedstryde te identifiseer wat jy sal evalueer. Fokus op ligas en sportsoorte waar jy kennis het. Kwaliteit bo kwantiteit - dit is beter om 5 wedstryde deeglik te evalueer as 50 oppervlakkig.' },
      { title: 'Fase 2: Onafhanklike Evaluering', content: 'Evalueer elke wedstryd voordat jy na die odds kyk. Vorm jou eie siening van waarskynlikhede. Hierdie onafhanklikheid is kritiek - as jy na odds kyk voor evaluering, word jou oordeel onbewustelik beïnvloed.' },
      { title: 'Fase 3: Oddsvergelyking', content: 'Nou vergelyk jy jou evaluering met die beskikbare odds. Identifiseer gevalle waar die mark beter odds bied as wat jou evaluering regverdig. Hierdie afwykings is potensiële waarde-weddenskappe.' },
      { title: 'Fase 4: Lyninkopie', content: 'Vir elke potensiële weddenskap, vergelyk odds by verskeie bookmakers. Neem die beste prys beskikbaar. Selfs klein verskille in odds het \'n groot impak op langtermyn winsgewendheid.' },
      { title: 'Fase 5: Insetbepaling', content: 'Bepaal jou insetgrootte gebaseer op jou standaard eenheid en die sterkte van die waargenome waarde. Volg jou voorafbepaalde insetstelsel - moenie toelaat dat emosie of opwinding jou laat afwyk nie.' },
      { title: 'Fase 6: Uitvoering en Rekordhouding', content: 'Plaas die weddenskap en rekordeer onmiddellik alle relevante besonderhede: datum, wedstryd, seleksie, odds, inset, en jou redenasie. Hierdie rekord is noodsaaklik vir latere analise en verbetering.' }
    ]
  },
  {
    id: 7,
    title: 'Sokkerklas',
    slug: 'sokkerklas',
    description: 'Gespesialiseerde benadering tot sokkermarkte.',
    sections: [
      { title: 'Sokker se Unieke Eienskappe', content: 'Sokker is \'n lae-telling sport waar klein gebeure groot impak het. \'n Enkele doel of rooi kaart kan die hele wedstryd verander. Hierdie volatiliteit skep beide uitdagings en geleenthede vir die gedissiplineerde wedder.' },
      { title: 'Sleutelfaktore vir Evaluering', content: 'Oorweeg spanvorm, kop-tot-kop-geskiedenis, tuisvoordeel, beserings en skorsings, motivering, en taktiese passing. Moenie net na onlangse resultate kyk nie - ontleed die onderliggende prestasie-metrieke soos verwagte doele (xG).' },
      { title: 'Verstaan Verskillende Markte', content: 'Sokker bied baie marktipes: 1X2, Asiatiese handicap, doeltotale, albei spanne tel, korrekte telling. Elke mark het sy eie dinamika. Asiatiese handicaps elimineer die gelykop en is dikwels meer waarde-georiënteerd.' },
      { title: 'Lewendige Wedden op Sokker', content: 'Lewendige wedden op sokker bied geleenthede, maar vereis vinnige denke en goeie begrip van momentum. Die mark reageer dikwels oor op onlangse gebeure soos doele of rooi kaarte, wat waarde kan skep.' },
      { title: 'Liga-Spesifieke Oorwegings', content: 'Verskillende ligas het verskillende eienskappe. Premier League is oop en hoë-telling. Serie A is takties en lae-telling. Verstaan hierdie neigings om jou evaluerings te verbeter.' }
    ]
  },
  {
    id: 8,
    title: 'Perdewedren Klas',
    slug: 'perdewedren-klas',
    description: 'Navigeer die kompleksiteite van perdewedren-markte.',
    sections: [
      { title: 'Die Unieke Aard van Perdewedren', content: 'Perdewedren verskil van ander sportsoorte deurdat individuele prestasie meer wisselvallig is. \'n Perd se vorm kan dramaties verander van ren tot ren as gevolg van kondisie, grond, afstand, en ander faktore.' },
      { title: 'Vorm-Analise', content: 'Ontleed onlangse renne, maar gaan dieper as net plasing. Kyk na seksioneeltye, hoe die ren verloop het, en of die perd geluk of pech gehad het. \'n Perd wat vierde eindig na \'n slegte reis kan meer indrukwekkend wees as \'n wenner.' },
      { title: 'Grond- en Afstandvoorkeure', content: 'Sommige perde presteer beter op sekere grondtipes (vas, sag, swaar) of afstande. Hierdie voorkeure is kritieke faktore. \'n Perd wat op sagte grond floreer, mag sukkel wanneer die baan vas is.' },
      { title: 'Jockey en Afrigter Statistieke', content: 'Sekere jockey-afrigter kombinasies het hoër wen-tempo\'s. Sommige jockeys presteer beter op sekere bane of met sekere tipes perde. Hierdie statistieke kan jou evaluering informeer.' },
      { title: 'Each-Way Waarde', content: 'Each-way wedden kan waarde bied wanneer die plekterme gunstig is. In groot velde met onvoorspelbare renne, kan each-way op \'n buitestaander beter verwagte waarde hê as \'n reguit wen-weddenskap.' }
    ]
  },
  {
    id: 9,
    title: 'Tennisklas',
    slug: 'tennisklas',
    description: 'Strategieë vir tennis-evaluering en wedden.',
    sections: [
      { title: 'Tennis se Unieke Strukturele Eienskappe', content: 'Tennis se puntestelsel beteken dat momentum vinnig kan verander. \'n Speler kan \'n stel verloor terwyl hy beter gespeel het. Hierdie volatiliteit skep lewendige wedgeleenthede en maak oppervlakkige evaluering gevaarlik.' },
      { title: 'Oppervlak Oorwegings', content: 'Spelers het verskillende oppervlakvoorkeure. Sommige floreer op gras (vinnig, laer stuit), ander op klei (stadig, hoër stuit), ander op hardebaan. Kontroleer altyd speler-statistieke per oppervlak, nie net oorhoofse rekords nie.' },
      { title: 'Diens-Statistieke', content: 'Tennis draai om die diens. Ontleed eerste-diens persentasie, dienspunte gewen, breekpunte gered en geforseer. \'n Sterk diensaar op \'n vinnige oppervlak het \'n groot voordeel wat nie altyd in odds weerspieël word nie.' },
      { title: 'Kop-tot-Kop en Spelstyl', content: 'Sommige spelers het gunstige spelstylpassings teen spesifieke teenstanders. \'n Aggressiewe nettospeler mag sukkel teen \'n uitstekende passeerder. Hierdie dinamika kan meer vertel as oorhoofse ranglyste.' },
      { title: 'Lewendige Tennis-Wedden', content: 'Tennis se format maak dit ideaal vir lewendige wedden. Die mark reageer dikwels oor na \'n gebreekte diens of verlore stel. As jy die wedstryd kyk en die werklike spelkwaliteit kan evalueer, kan waarde opduik.' }
    ]
  },
  {
    id: 10,
    title: 'Basketbalklas',
    slug: 'basketbalklas',
    description: 'NBA en basketbal-wedstrategieë.',
    sections: [
      { title: 'Hoë-Telling Dinamika', content: 'Basketbal se hoë telling verminder toevalsimpak per wedstryd vergeleke met lae-telling sportsoorte. Dit maak evaluering teoreties makliker, maar beteken ook dat markte meer doeltreffend is.' },
      { title: 'Die Spreiding vs Geldlyn', content: 'Puntspreidings is die dominante basketbalmark. Verstaan die verskil tussen om \'n wedstryd te wen en om die spreiding te dek. \'n Span kan wen maar nie dek nie, of verloor maar wel dek.' },
      { title: 'Totale Markte', content: 'Oor/onder totale hang af van beide spanne se tempo en verdedigingseffektiwiteit. Kyk na faktore soos rugsteun-tot-rugsteun wedstryde, reisuitputting, en motivering wat tempo kan beïnvloed.' },
      { title: 'Beserings en Rus', content: 'NBA se lang seisoen beteken rusbestuur algemeen is. Sterspelers rus dikwels, veral in die tweede van rugsteun-tot-rugsteek wedstryde. Kontroleer altyd opstellingsverslae voor evaluering.' },
      { title: 'Uitspeel vs Seisoen', content: 'Uitspeel-basketbal is \'n verskillende spel. Intensiteit verhoog, aanpassings word gemaak, en tuisvoordeel weeg swaarder. Statistieke uit die gereelde seisoen is minder voorspellend in uitspele.' }
    ]
  },
  {
    id: 11,
    title: 'Yshockeyklas',
    slug: 'yshockeyklas',
    description: 'NHL en yshockey-wedbenaderings.',
    sections: [
      { title: 'Die Doelwagter-Faktor', content: 'Yshockey is uniek in hoe baie \'n enkele speler die uitslag kan beïnvloed. \'n Warm doelwagter kan \'n swakker span dra. Kontroleer altyd bevestigde beginners en onlangse doelwagter-prestasie.' },
      { title: 'Pucklyn vs Geldlyn', content: 'Die pucklyn is gewoonlik -1.5/+1.5 doele. Dit bied \'n alternatief tot die geldlyn wanneer jy \'n sterk siening het oor die wenmarge. Evalueer watter mark beter waarde bied vir jou spesifieke siening.' },
      { title: 'Skootmetrieke en Onderliggende Prestasie', content: 'Ontleed skote op doel, hoë-gevaar kanse, en verwagte doele. \'n Span kan \'n wedstryd verloor terwyl hy beter gespeel het as gevolg van doelwagter-prestasie of geluk. Onderliggende metrieke is meer voorspellend.' },
      { title: 'Spesiale Spanne', content: 'Kragspel en korthandige prestasie kan wedstryde swaai. \'n Span met \'n elite kragspel het \'n voordeel wat nie altyd in odds weerspieël word nie, veral teen gedissiplineerde spanne.' },
      { title: 'Seisoen-Situasies', content: 'Laatseioen-wedstryde waar spanne om uitspeel-plekke meeding, of waar spanne reeds gekwalifiseer of uitgeskakel is, skep motiveringsasimmetrie wat waarde kan ontsluit.' }
    ]
  },
  {
    id: 12,
    title: 'Bofbalklas',
    slug: 'bofbalklas',
    description: 'MLB en bofbal-wedstrategieë.',
    sections: [
      { title: 'Die Beginwerper-Dominansie', content: 'Bofbal draai meer om die beginwerper as enige ander sportsoort om \'n enkele speler. Die meerderheid van jou evaluering moet op die beginwerper-pasvinding fokus.' },
      { title: 'Geldlyn vs Hardlooplyn', content: 'Die hardlooplyn is gewoonlik -1.5/+1.5 lopies. Dit bied \'n alternatief wanneer jy \'n sterk siening het oor wenmarge. Gunstelinge moet met 2+ wen om die -1.5 te dek.' },
      { title: 'Bullpen en Laatspel', content: 'Laatspel-weddenskappe hang af van bullpen-sterkte en beskikbaarheid. \'n Span met \'n uitgeputte bullpen of \'n worstelende afrondt is kwesbaar, selfs met \'n voorsprong.' },
      { title: 'Parkfaktore', content: 'Bofbalstadions verskil dramaties in dimensies. Sommige bevoordeel werpers; ander bevoordeel slaners. Pas jou evaluerings altyd vir parkfaktore aan, veral vir totale markte.' },
      { title: 'Linker/Regter Verdelings', content: 'Slaners het dikwels dramaties verskillende prestasie teen linker- vs regterhandige werpers. Kontroleer hierdie verdelings wanneer jy spelergebaseerde weddenskappe evalueer.' }
    ]
  },
  {
    id: 13,
    title: 'Amerikaanse Voetbalklas',
    slug: 'amerikaanse-voetbalklas',
    description: 'NFL en Amerikaanse voetbal-wedstrategieë.',
    sections: [
      { title: 'Die Weeklikse Format', content: 'NFL het net 17 wedstryde per seisoen. Elke wedstryd weeg swaar, en markte is hoogs doeltreffend teen aftrap. Vroeë lynbeweging en waarde-identifikasie is kritiek.' },
      { title: 'Sleutelnommers', content: 'In NFL is 3 en 7 sleutelnommers as gevolg van die telstruktuur (velddoele en bekeringspunte). Weddenskappe wat hierdie nommers kruis, het verhoogde waarde. Oorweeg alternatiewe spreidings rondom hierdie nommers.' },
      { title: 'Weer- en Spelstylimpak', content: 'Weer beïnvloed NFL meer as binneshuise sportsoorte. Wind beïnvloed die gooispel; koue, nat kondisies bevoordeel hardloopspanne. Kontroleer altyd die weersvooruitsig.' },
      { title: 'Beserings en Beurtwisseling', content: 'NFL-beserings, veral aan aanvallers en voorspelers, het groot impak. Beurtwisselingsstatistieke (onderskeppings, verlore balle) is hoogs wisselvallig maar impaktvol. Wees versigtig om te veel waarde op klein steekproefgroottes te plaas.' },
      { title: 'Uitspeel-Oorwegings', content: 'NFL-uitspele verskerp die fokus. Kleiner steekproefgroottes maar meer intense voorbereiding. Tuisvoordeel en rus-dae word meer kritiek. Die markte is dikwels nouer maar geleenthede bestaan.' }
    ]
  },
  {
    id: 14,
    title: 'Ander Sportsoorte en Spesialisnisse',
    slug: 'ander-sportsoorte-en-spesialisnisse',
    description: 'Golf, boks, MMA, esports en niche-markte.',
    sections: [
      { title: 'Golf-Wedden', content: 'Golfvelde van 150+ spelers skep groot buitestaander-markte. Baangeskiktheid, onlangse vorm, en wederstrydgeskiedenis weeg alles. Oorweeg boonste-5, boonste-10 of groepweddenskappe vir beter waarde as reguit wenner.' },
      { title: 'Boks en MMA', content: 'Gevegsport draai om spelstylpassings. Sommige vegters vaar beter teen spesifieke styles. Ontleed hoe vaardighede interakteer, nie net oorhoofse rekords nie. Rondte-groepweddenskappe kan waarde bied.' },
      { title: 'Esports', content: 'Esports het kaartgebaseerde markte, reguit wenners, en spesiale weddenskappe. Verskillende spelle het verskillende dinamika. Spesialiseer in een of twee spelle eerder as om alles te probeer dek.' },
      { title: 'Niche Ligas en Kompetisies', content: 'Minder gedekte ligas het sagter lyne maar minder beskikbare inligting. As jy werklik \'n niche-mark ken, kan jy waarde vind wat die breër mark mis.' },
      { title: 'Die Waarde van Spesialisasie', content: 'Probeer nie om \'n kenner in alle sportsoorte te wees nie. Kies \'n paar waar jy \'n voorsprong kan ontwikkel en brei slegs uit nadat jou proses bewys is.' }
    ]
  },
  {
    id: 15,
    title: 'Wedtipe-Meesterklas',
    slug: 'wedtipe-meesterklas',
    description: 'Verstaan alle tipes weddenskappe en hul toepassings.',
    sections: [
      { title: 'Reguit Weddenskappe', content: 'Reguit weddenskappe is enkeluitkoms-weddenskappe: geldlyn, spreiding, totale. Hulle is die eenvoudigste en dikwels die beste plek om te begin. Die meeste professionele wedders fokus hoofsaaklik op reguit weddenskappe.' },
      { title: 'Asiatiese Handicaps', content: 'Asiatiese handicaps elimineer die gelykop deur fraksionele handicaps toe te pas. Dit verminder variansie en bied dikwels beter waarde as tradisionele 1X2-markte. Verstaan kwart- en halflyn-handicaps.' },
      { title: 'Parlays en Accumulators', content: 'Parlays kombineer verskeie bene in een weddenskap. Alle bene moet wen. Die uitbetaling is hoër maar die waarskynlikheid is laer. Wiskundig bou die bookmaker-marge op elke been. Gebruik spaarsaam.' },
      { title: 'Props en Spesiale Weddenskappe', content: 'Prop-weddenskappe fokus op individuele of spesifieke uitkomste soos speler-punte of eerste doelskutter. Hierdie markte kan sagter lyne hê maar vereis gespesialiseerde kennis.' },
      { title: 'Futures', content: 'Futures-weddenskappe is langtermyn-weddenskappe op seisoen-uitkomste. Kapitaal is lank gebind. Waarde kan vroeg in die seisoen bestaan, maar likiditeit en geleentheidskoste is faktore.' }
    ]
  },
  {
    id: 16,
    title: 'Persoonlike Wednotaboek, Besluitlog en Hersieningsrekord',
    slug: 'wednotaboek-besluitlog-hersieningsrekord',
    description: 'Opset en handhawing van jou wedrekord-stelsel.',
    sections: [
      { title: 'Hoekom Rekords Nie-Onderhandelbaar Is', content: 'Sonder rekords vlieg jy blind. Jy kan nie prestasie evalueer, lekkasies identifiseer, of jou benadering verfyn sonder data nie. Elke weddenskap moet gerekordeer word, sonder uitsondering.' },
      { title: 'Noodsaaklike Velde om te Volg', content: 'Rekordeer: datum, sportsoort, liga, wedstryd, seleksie, wedtipe, odds geneem, inset, resultaat, wins/verlies. Bykomende velde kan jou redenasie, sluitingslyn, en aantekeninge insluit.' },
      { title: 'Stel Jou Log-Stelsel Op', content: 'Gebruik \'n sigblad of toegewyde sagteware. Die format is minder belangrik as konsekwentheid. Maak seker jy kan filter volgens sportsoort, datum, wedtipe, en uitkoms.' },
      { title: 'Die Besluitlog', content: 'Bo en behalwe resultate, skryf waarom jy elke weddenskap geplaas het. Wat was jou evaluering? Watter inligting het dit gedryf? Dit help om foute en lekkasies te identifiseer.' },
      { title: 'Gereelde Hersiening', content: 'Stel weekliks of maandeliks tyd opsy om jou rekords te hersien. Soek patrone in watter sportsoorte, wedtipes, of situasies werk en watter nie. Laat data jou besluite lei.' }
    ]
  },
  {
    id: 17,
    title: 'Prestasie-Hersiening, Rekordhouding en Leer uit Resultate',
    slug: 'prestasie-hersiening-leer-uit-resultate',
    description: 'Analiseer jou resultate om deurlopend te verbeter.',
    sections: [
      { title: 'Die Doel van Hersiening', content: 'Hersiening is nie oor selfkritiek of selfgelukwensing nie. Dit is koue analise van wat gewerk het, wat nie, en waarom. Skei emosie van evaluering.' },
      { title: 'Korttermyn Geraas vs Langtermyn Sein', content: 'Oor 50 weddenskappe kan variansie resultate domineer. Oor 500 weddenskappe begin vaardigheid deurslaan. Moenie oorhaastige gevolgtrekkings uit klein steekproefgroottes maak nie.' },
      { title: 'ROI en Opbrengs-Evaluering', content: 'Bereken opbrengs op belegging (ROI) as netto wins gedeel deur totaal gewed. \'n Volhoubare 3-5% ROI is uitstekend oor groot volumes. Wees eerlik met jouself oor die syfers.' },
      { title: 'Identifisering van Lekkasies', content: 'Soek sportsoorte, ligas, of wedtipes waar jy konsekwent verloor. Hierdie is lekkasies om aan te spreek of te elimineer. Fokus jou aandag op areas van sterkte.' },
      { title: 'Iterasie en Verfyning', content: 'Die doel is deurlopende verbetering. Elke hersieningsiklus moet tot klein verfynings in jou proses lei. Oor maande en jare, hierdie saamgestelde verbeterings.' }
    ]
  },
  {
    id: 18,
    title: 'Sielkunde, Dissipline, Tilt-Beheer en Professionele Roetines',
    slug: 'sielkunde-dissipline-tilt-beheer',
    description: 'Bemeester die sielkundige aspekte van wedden.',
    sections: [
      { title: 'Hoekom Sielkunde Saak Maak', content: 'Die meeste wedders verloor nie weens gebrek aan kennis nie, maar weens sielkundige mislukkings. Tilt, jagtery van verliese, oorversekering na oorwinnings - hierdie patrone erodeer voorspronge.' },
      { title: 'Erkenning van Tilt', content: 'Tilt is die emosionele toestand waarin jy irrasionele besluite neem. Dit gebeur dikwels na verliese maar ook na groot oorwinnings. Erken jou tilt-snellers en ontwikkel strategieë om dit te bestuur.' },
      { title: 'Verliesstrepe Bestuur', content: 'Verliesstrepe is onvermydelik. Die sleutel is om jou proses te vertrou en nie jou benadering drasties te verander op grond van korttermyn-resultate nie. Stel stop-verlies-limiete vir sessies as dit help.' },
      { title: 'Bou van Professionele Roetines', content: 'Vestig roetines: vaste wedtye, evaluering-kontrolelyste, afkoel-periodes. Hierdie struktuur help om sielkundige konsekwentheid te handhaaf en emosionele besluitneming te verminder.' },
      { title: 'Die Langtermyn Siening', content: 'Herinner jouself dat jy aan \'n lewenslange reeks weddenskappe deelneem. Geen enkele weddenskap of selfs maand is beslissend nie. Hierdie perspektief verminder emosionele reaktiwiteit.' }
    ]
  },
  {
    id: 19,
    title: 'Veiliger Dobbelstandaarde, Nakoming en Persoonlike Beskerming',
    slug: 'veiliger-dobbel-nakoming-beskerming',
    description: 'Verantwoordelike wedden en regulatoriese bewustheid.',
    sections: [
      { title: 'Wedden Is Nie Vir Almal Nie', content: 'Verantwoordelike dobbelwaarskuwings bestaan vir \'n rede. As jy verslawende neigings het of dit nie kan bekostig om te verloor nie, moenie wed nie. Geen strategie oorbrug daardie risiko nie.' },
      { title: 'Stel Perke', content: 'Stel deposit-, verlies- en wedbeperkings voordat jy begin. Baie boekmakers bied selfuitsluitingsinstrumente. Gebruik hulle as jy hulp nodig het om perke af te dwing.' },
      { title: 'Herkenning van Probleemdobbel', content: 'Tekens sluit in: jagtery van verliese, verberging van wedaktiwiteit, wedden wat jy nie kan bekostig nie, emosionele afhanklikheid van resultate. Soek hulp as hierdie van toepassing is.' },
      { title: 'Regulatoriese Landskap', content: 'Wedwette wissel per jurisdiksie. Ken jou plaaslike wette. Gebruik gelisensieerde boekmakers wat regulatoriese standaarde volg. Ongelisensieerde operateurs dra bykomende risiko\'s.' },
      { title: 'Beskerming van Jouself', content: 'Gebruik sterk wagwoorde, aktiveer twee-faktor-verifikasie, moenie wedsensitiewe inligting deel nie, en wees versigtig vir tipster-swendelary. Die bedryf het slegte akteurs.' }
    ]
  },
  {
    id: 20,
    title: 'Praktiese Oefeninge en Aanhangsel',
    slug: 'praktiese-oefeninge-aanhangsel',
    description: 'Pas jou kennis toe met praktiese oefeninge.',
    sections: [
      { title: 'Oefening: Odds na Waarskynlikheid', content: 'Skakel die volgende odds na geïmpliseerde waarskynlikheid om: 1.50, 2.00, 3.00, 5.00. Bereken dan die oorrondte vir \'n mark met odds van 1.90 / 1.90.' },
      { title: 'Oefening: Waarde-Evaluering', content: 'Jy glo \'n span het \'n 45% kans om te wen. Die beskikbare odds is 2.40. Is dit waarde? Bereken die EV per eenheid gewed.' },
      { title: 'Oefening: Insetgrootte', content: 'Jou bankrol is 5000. Jy gebruik 2% insette. \'n Geleentheid bied sterk waarde. Wat is jou eenheidgrootte en totale blootstelling?' },
      { title: 'Oefening: Rekordhouding', content: 'Stel \'n eenvoudige sigblad op met kolomme: datum, sportsoort, seleksie, odds, inset, resultaat, wins/verlies. Vul vyf denkbeeldige weddenskappe in en bereken ROI.' },
      { title: 'Volgende Stappe', content: 'Begin met een sportsoort en een marktipe. Bou \'n rekord. Hersien gereeld. Brei stadig uit soos jou vaardigheid ontwikkel. Die reis is \'n marathon, nie \'n naelloop nie.' }
    ]
  }
]
