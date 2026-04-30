import { TrainingModule } from '../training-content'

export const trainingModulesCS: TrainingModule[] = [
  {
    id: 1,
    title: 'Co dělají efektivní sázkaři jinak',
    slug: 'what-effective-bettors-do-differently',
    description: 'Naučte se myšlení a chování, které odlišuje disciplinované sázkaře od náhodných hráčů.',
    sections: [
      { title: 'Myšlení účastníka trhu', content: 'Většina sázkařů přistupuje k trhům jako návštěvníci kasina - hledají zábavu, vzrušení a šanci vyhrát peníze. Disciplinovaní sázkaři vidí trhy úplně jinak. Chápou, že se účastní konkurenčního trhu, kde úspěch závisí na tom, dělat trvale lepší odhady než ostatní účastníci.' },
      { title: 'Selektivita místo akce', content: 'Jeden z nejjasnějších rozdílů mezi efektivními sázkaři a průměrnými hráči je počet sázek. Běžní sázkaři často cítí potřebu sázet na každý zápas, který sledují. Disciplinovaní sázkaři chápou, že každá sázka vyžaduje výhodu, a výhody se neobjevují podle rozvrhu.' },
      { title: 'Skutečná náplň práce', content: 'Pokud byste se zeptali náhodných sázkařů, co dělají, řekli by "sázím na sport" nebo "snažím se vydělat peníze sázením". Zeptejte se disciplinovaného sázkaře a dostanete jinou odpověď: "Hodnotím pravděpodobnosti a hledám nesrovnalosti v tržních cenách."' },
      { title: 'Co odděluje disciplinované sázkaře', content: 'Disciplinovaní sázkaři sdílejí několik charakteristik: vedou podrobné záznamy, rozumí varianci, stanovují jasná pravidla a dodržují je.' },
      { title: 'Proč je tento manuál záměrně dlouhý', content: 'Tento manuál je komplexní, protože skutečné porozumění sázení vyžaduje hloubku. Rychlé tipy a "jisté výhry" dlouhodobě nefungují.' },
      { title: 'Operační cyklus sázkaře', content: 'Efektivní sázení sleduje jasný cyklus: výzkum, porovnání trhu, identifikace hodnoty, určení sázky, provedení, záznam, přezkoumání.' }
    ]
  },
  {
    id: 2,
    title: 'Jak skutečně fungují sázkové kanceláře, burzy a sázkové trhy',
    slug: 'how-bookmakers-exchanges-and-betting-markets-really-work',
    description: 'Pochopte strukturu sázkových trhů, jak se stanovují kurzy a odkud skutečně pocházejí vaše peníze.',
    sections: [
      { title: 'Obchodní model sázkové kanceláře', content: 'Sázkové kanceláře nejsou protivníci - jsou to podniky snažící se vyvážit své knihy a vybírat marži.' },
      { title: 'Sázkové burzy vs tradiční bookmakeři', content: 'Sázkové burzy jako Betfair fungují jinak. Místo sázení proti bookmakerovi sázíte proti ostatním hráčům.' },
      { title: 'Jak se kurzy pohybují', content: 'Kurzy nejsou statické. Neustále se pohybují podle toku peněz, zpráv a tržních sil.' },
      { title: 'Porozumění marži', content: 'Každý bookmaker zahrnuje marži do svých kurzů. To znamená, že pokud převedete všechny kurzy na pravděpodobnosti, součet přesáhne 100%.' }
    ]
  },
  {
    id: 3,
    title: 'Kurzy, implikovaná pravděpodobnost a férové ocenění',
    slug: 'odds-implied-probability-and-fair-pricing',
    description: 'Ovládněte matematické základy převodu kurzů na pravděpodobnosti a identifikace hodnoty.',
    sections: [
      { title: 'Porozumění formátům kurzů', content: 'Kurzy se prezentují ve třech hlavních formátech: desetinné, zlomkové a americké.' },
      { title: 'Převod na implikovanou pravděpodobnost', content: 'Každý kurz implikuje pravděpodobnost. Vzorec: Implikovaná pravděpodobnost = 1 / desetinný kurz × 100%' },
      { title: 'Odstranění marže pro nalezení férových kurzů', content: 'Kurzy bookmakerů zahrnují marži. Pro nalezení "férových" kurzů musíte tuto marži odstranit.' }
    ]
  },
  {
    id: 4,
    title: 'Hodnota, očekávaná hodnota, porovnávání kurzů a hodnota uzavíracího kurzu',
    slug: 'value-expected-value-line-shopping-and-closing-line-value',
    description: 'Pochopte koncept hodnoty, očekávané hodnoty a proč je překonávání uzavíracích kurzů nejdůležitější metrikou.',
    sections: [
      { title: 'Co hodnota skutečně znamená', content: 'Hodnota v sázení znamená jednoduše to, že dostáváte lepší kurzy, než by ospravedlňovala skutečná pravděpodobnost výsledku.' },
      { title: 'Očekávaná hodnota (EV)', content: 'Očekávaná hodnota je matematická míra toho, kolik můžete očekávat, že vyhrajete (nebo prohrajete) v průměru na sázku.' },
      { title: 'Porovnávání kurzů (Line Shopping)', content: 'Různí bookmakeři nabízejí různé kurzy na stejné události. Porovnávání kurzů znamená hledání nejlepšího kurzu.' },
      { title: 'Hodnota uzavíracího kurzu (CLV)', content: 'Uzavírací kurz je kurz těsně před začátkem události. CLV měří, jak často jste získali lepší kurzy než uzavírací kurz.' }
    ]
  },
  {
    id: 5,
    title: 'Správa bankrollu, sázení a přežití ve varianci',
    slug: 'bankroll-management-staking-and-survival-under-variance',
    description: 'Naučte se chránit svůj kapitál a optimalizovat své sázky pro dlouhodobý úspěch.',
    sections: [
      { title: 'Proč je správa bankrollu kritická', content: 'Můžete být zruční v hledání hodnoty, ale bez správné správy bankrollu stejně o všechno přijdete.' },
      { title: 'Metody sázení', content: 'Fixní sázka, procentuální sázka, Kellyho kritérium - každá má své výhody.' },
      { title: 'Porozumění varianci', content: 'Variance znamená, že v krátkodobém horizontu se může stát cokoliv.' }
    ]
  },
  {
    id: 6,
    title: 'Kompletní pracovní postup sázkaře',
    slug: 'the-full-bettor-workflow-from-fixture-list-to-placed-bet',
    description: 'Naučte se systematický proces pro identifikaci příležitostí a umísťování sázek.',
    sections: [
      { title: 'Krok 1: Skenování trhu', content: 'Začněte denním skenováním trhu.' },
      { title: 'Krok 2: Předběžná analýza', content: 'Identifikujte zápasy, kde vidíte potenciální hodnotu.' },
      { title: 'Krok 3: Hloubkový výzkum', content: 'Pro slibné cíle jděte hlouběji.' },
      { title: 'Krok 4: Potvrzení hodnoty', content: 'Porovnejte svůj konečný odhad pravděpodobnosti s dostupnými kurzy.' },
      { title: 'Krok 5: Provedení a záznam', content: 'Umístěte sázku za nejlepší dostupný kurz a okamžitě ji zaznamenejte.' }
    ]
  },
  { id: 7, title: 'Fotbalová třída', slug: 'football-class', description: 'Ponořte se do fotbalového sázení.', sections: [{ title: 'Přehled fotbalových trhů', content: 'Fotbal je největší sázkový trh na světě.' }, { title: 'Klíčové faktory analýzy', content: 'Expected Goals, změny sestavy, motivace, podmínky.' }, { title: 'Populární trhy', content: '1X2, Asian Handicap, Over/Under góly, BTTS.' }] },
  { id: 8, title: 'Třída koňských dostihů', slug: 'horse-racing-class', description: 'Naučte se specifika sázení na dostihy.', sections: [{ title: 'Specifika trhu dostihů', content: 'Dostihy jsou tradiční sázkový sport vyžadující specializaci.' }, { title: 'Základy analýzy', content: 'Forma, podmínky, vzdálenost, třída.' }] },
  { id: 9, title: 'Tenisová třída', slug: 'tennis-class', description: 'Strategie sázení na tenis.', sections: [{ title: 'Specifika tenisu', content: 'Tenis je individuální sport, což činí analýzu odlišnou.' }, { title: 'Klíčové faktory', content: 'Povrch, přímé souboje, fáze turnaje, zranění.' }] },
  { id: 10, title: 'Basketbalová třída', slug: 'basketball-class', description: 'Sázení na NBA a evropský basketbal.', sections: [{ title: 'Basketbalové trhy', content: 'Basketbal je sport s vysokým skóre.' }, { title: 'Klíčové faktory analýzy', content: 'Model čtyř faktorů, tempo, absence.' }] },
  { id: 11, title: 'Hokejová třída', slug: 'ice-hockey-class', description: 'Sázení na NHL a evropský hokej.', sections: [{ title: 'Specifika hokejového trhu', content: 'Hokej je sport s nízkým skóre a vysokou variancí.' }, { title: 'Klíčové faktory analýzy', content: 'Corsi/Fenwick, speciální týmy, back-to-back.' }] },
  { id: 12, title: 'Baseballová třída', slug: 'baseball-class', description: 'Základy sázení na MLB.', sections: [{ title: 'Specifika baseballu', content: 'Baseball je statisticky nejorientovanější sport.' }, { title: 'Analytické nástroje', content: 'Sabermetrics: WAR, FIP, wOBA.' }] },
  { id: 13, title: 'Třída amerického fotbalu', slug: 'american-football-class', description: 'Sázení na NFL a college football.', sections: [{ title: 'NFL trhy', content: 'NFL je nejpopulárnější sázkový sport v Americe.' }, { title: 'Klíčové faktory analýzy', content: 'DVOA, zranění, počasí.' }] },
  { id: 14, title: 'Ostatní sporty a specializované niky', slug: 'other-sports-and-specialist-niches', description: 'Příležitosti v méně známých sportech.', sections: [{ title: 'Výhody nikových trhů', content: 'Méně známé sporty a ligy často nabízejí nejlepší příležitosti.' }, { title: 'Příklady', content: 'Esport, stolní tenis, šipky, snooker.' }] },
  { id: 15, title: 'Masterclass typů sázek', slug: 'bet-types-masterclass', description: 'Hloubkový pohled na různé typy sázek.', sections: [{ title: 'Jednotlivé sázky vs kombinace', content: 'Jednotlivé sázky jsou téměř vždy lepší volbou.' }, { title: 'Asian Handicap podrobněji', content: 'Asian Handicap nabízí více možností.' }, { title: 'Speciální sázky', content: 'Props, live sázení, futures.' }] },
  { id: 16, title: 'Osobní sázkařský deník', slug: 'personal-betting-notebook-decision-log-and-review-record', description: 'Jak vést záznamy o sázkách.', sections: [{ title: 'Proč je evidence nezbytná', content: 'Bez přesné evidence nemůžete vědět, zda jste skutečně ziskoví.' }, { title: 'Co zaznamenávat', content: 'Datum, čas, zápas, výběr, kurzy, sázka, výsledek.' }, { title: 'Analýza', content: 'Pravidelně revidujte data a hledejte trendy.' }] },
  { id: 17, title: 'Hodnocení výkonu a analýza výsledků', slug: 'reviewing-performance-maintaining-records-and-learning-from-results', description: 'Jak hodnotit kvalitu sázení.', sections: [{ title: 'Správné metriky', content: 'ROI a CLV jsou lepší metriky než procento výher.' }, { title: 'Velikost vzorku a významnost', content: 'Krátkodobé výsledky jsou z velké části variance.' }] },
  { id: 18, title: 'Psychologie, disciplína a profesionální rutina', slug: 'psychology-discipline-tilt-control-and-professional-routines', description: 'Důležitost mentální kontroly.', sections: [{ title: 'Tilt a jeho vyhýbání', content: 'Tilt znamená emocionální stav, kdy děláte špatná rozhodnutí.' }, { title: 'Rutiny', content: 'Profesionální sázkaři dodržují rutiny.' }, { title: 'Realistická očekávání', content: 'Většina sázkařů prohrává. To je fakt.' }] },
  { id: 19, title: 'Bezpečnější hazard a sebeoochrana', slug: 'safer-gambling-standards-compliance-awareness-and-personal-protection', description: 'Jak hrát zodpovědně.', sections: [{ title: 'Varovné signály', content: 'Problémy s hazardem se často vyvíjejí postupně.' }, { title: 'Nástroje a limity', content: 'Používejte nástroje nabízené bookery.' }, { title: 'Kde získat pomoc', content: 'Pokud máte podezření na problém s hazardem, pomoc je k dispozici.' }] },
  { id: 20, title: 'Praktická cvičení', slug: 'practical-exercises-and-appendix', description: 'Cvičení pro podporu učení.', sections: [{ title: 'Cvičení 1: Odhad pravděpodobností', content: 'Vyberte 10 nadcházejících zápasů a zapište vlastní odhady.' }, { title: 'Cvičení 2: Porovnání kurzů', content: 'Vyberte 5 zápasů a porovnejte kurzy.' }, { title: 'Cvičení 3: Paper trading', content: 'Začněte s paper tradingem před sázením skutečných peněz.' }, { title: 'Cvičení 4: Analýza deníku', content: 'Projděte posledních 100 sázek.' }] },
  {
    id: 21,
    slug: 'appendix-glossary',
    title: 'Příloha A: Rozšířený Sázkařský Slovník',
    subtitle: 'Komplexní slovník sázkařských termínů psaný tréninkovým jazykem',
    duration: '15 min čtení',
    sections: [
      {
        title: 'Rozšířený Sázkařský Slovník pro Hráče',
        content: `Tento slovník je psán tréninkovým jazykem pro lidské sázkaře. Je záměrně praktický. Cílem není znít encyklopedicky, ale učinit termín použitelným v reálné analýze, dimenzování sázek a vedení záznamů.

**A**

**Accumulator (Akumulátor)** - Sázka s více výběry, kde každá část musí vyhrát. Atraktivní výplaty skrývají kombinovanou marži a kombinovanou chybu.

**Across the card** - Dostihový výraz pro sázení na každý dostih na události. Obvykle rekreační spíše než selektivní.

**All-weather** - Syntetický závodní povrch používaný když travnaté podmínky nejsou vhodné. Preference povrchu má význam v analýze koní.

**American odds (Americké kurzy)** - Formát kurzů s plus a mínus čísly. Rychle je převeďte na pravděpodobnost, abyste se vyhnuli cenovým chybám.

**Ante-post** - Sázky uzavřené dlouho před událostí, často s lepšími cenami ale vyšším rizikem neúčasti podle pravidel.

**Arbitrage (Arbitráž)** - Sázení na všechny výsledky u různých bookmakerů pro zajištění zisku. Teoreticky možné, ale omezení účtů to činí obtížným v praxi.

**Asian handicap (Asijský hendikep)** - Hendikepový trh, běžný ve fotbale, který upravuje výsledek a může eliminovat nebo rozdělit riziko remízy.

**B**

**Back price** - Kurz, za který podporujete výsledek, zejména na burze.

**Bankroll** - Kapitál alokovaný výhradně na sázení. Existuje k absorbování variance a ochraně kvality rozhodování.

**Best odds guaranteed** - Nabídka, běžná v dostizích, kde hráč dostane lepší z raného kurzu nebo SP, pokud kůň vyhraje.

**Bet builder** - Multi ze stejného zápasu kombinující více výběrů z jedné události. Pohodlné, ale často s vysokou marží.

**Bookmaker (Sázková kancelář)** - Společnost, která stanovuje ceny a přijímá sázky a zabudovává marži do kurzů.

**Both teams to score (BTTS)** - Fotbalový trh, který se vyhodnotí pokud oba týmy skórují alespoň jednou.

**Break point** - Tenisový bod, kde hráč na returnu může vyhrát gem prolomením podání.

**Break percentage** - Jak často tenista prolamuje soupeřovo podání. Klíčová metrika konfrontace.

**Bullpen** - Jednotka náhradních nadhazovačů v baseballu. Kritická v oceňování celého zápasu.

**C**

**Cash out** - Funkce bookmakera pro předčasnou výplatu. Obecně pohodlí na prvním místě, hodnota na druhém.

**Chance quality** - Praktický způsob popisu, zda jsou pokusy nebezpečné, ne jen početné.

**Chalk** - Slang pro favorita.

**Closing line (Uzavírací kurz)** - Poslední široce dostupná tržní cena před začátkem události.

**Closing line value (CLV)** - Rozdíl mezi vaší přijatou cenou a uzavírací cenou. Užitečný jako audit procesu.

**Coin flip game** - Zápas oceněný blízko parity. Vyžaduje disciplínu, protože mnoho hráčů přeceňuje malé výhody.

**Correct score (Správný výsledek)** - Trh vyžadující přesný konečný výsledek. Vysoká variance a velmi citlivý na cenu.

**Cover the spread** - Překonat hendikep nebo spread po aplikaci úpravy.

**Course and distance** - Dostihová poznámka ukazující předchozí úspěch na stejné dráze a vzdálenosti.

**D**

**Dead heat** - Sdílené umístění nebo vítězství, kde se výplata sázky upravuje podle pravidel.

**Decimal odds (Desetinné kurzy)** - Formát kurzů vyjadřující celkový výnos na vsazenou jednotku. Obecně nejsnazší profesionální pracovní formát.

**Derivative (Derivát)** - Sekundární trh jako první poločas, prvních pět směn, týmový součet, čtvrtina nebo třetina.

**Draw no bet (Remíza = vrácení)** - Trh, kde remíza vrací sázku a platí pouze výhra vybrané strany.

**Drift** - Když kurz roste. Může odrážet negativní informace, slabší poptávku nebo tržní korekci.

**E**

**Each-way** - Dostihovská sázka rozdělená na výherní a umístěnou část. Hodnotná pouze když podmínky umístění a cena to ospravedlňují.

**Edge (Výhoda)** - Praktická výhoda vaší analýzy nad trhem při dané ceně.

**Evens** - Vyrovnané peníze: desetinný 2.00 nebo 1/1.

**Expected goals (xG)** - Fotbalová metrika odhadující pravděpodobnost, že střely přinesou góly. Užitečná pro revizi procesu při opatrném použití.

**Expected value (Očekávaná hodnota, EV)** - Dlouhodobá hodnota sázky založená na vašem odhadu pravděpodobnosti a nabízené ceně.

**Exchange (Burza)** - Peer-to-peer sázková platforma, kde uživatelé podporují a oponují výsledkům a platforma bere provizi.

**F**

**Favourite (Favorit)** - Výběr s nejkratší cenou na trhu.

**Fair line (Férová linie)** - Váš vlastní odhad kurzů před marží bookmakera.

**First five** - Baseballový derivát pokrývající pouze prvních pět směn. Užitečný pro izolaci výhody startujícího nadhazovače.

**First goalscorer (První střelec)** - Trh o tom, který hráč skóruje první gól. Vysoká variance a závislý na roli.

**Fold** - Počet částí v akumulátoru nebo parlay.

**Form (Forma)** - Záznam předchozích výkonů. Užitečná pouze když je zasazena do správného kontextu.

**Fractional odds (Zlomkové kurzy)** - Tradiční britský a irský formát vyjadřující zisk relativně k sázce.

**Freeze the line** - Pozastavení trhu nebo absence pohybu, zatímco obchodníci čekají na čerstvé informace.

**G**

**Game script** - Pravděpodobná forma a průběh zápasu, zvláště důležitý ve fotbale a basketbalu.

**Going** - Dostihový termín pro podmínky dráhy, od tvrdé po těžkou. Často rozhodující.

**H**

**Handicap (Hendikep)** - Trh nebo závodní struktura navržená k vyrovnání účastníků úpravou výsledku nebo nesené váhy.

**Hold percentage** - Jak často tenista drží své podání. Centrální v analýze zápasu a součtů.

**I**

**Implied probability (Implikovaná pravděpodobnost)** - Pravděpodobnost reprezentovaná tržní cenou před úpravou na váš vlastní názor.

**In-play (Živé sázení)** - Sázení po začátku události. Vyžaduje rychlost, disciplínu a povědomí o zpoždění a likviditě.

**J**

**Juice** - Jiné slovo pro marži bookmakera nebo vig.

**K**

**Kelly criterion (Kellyho kritérium)** - Vzorec pro dimenzování spojující výhodu s velikostí sázky. Mocný v teorii, nebezpečný když jsou odhady pravděpodobnosti slabé.

**L**

**Lay** - Sázení proti výsledku na burze.

**Limit** - Maximální částka, kterou bookmaker nebo trh povolí při dané ceně.

**Line shopping (Porovnávání kurzů)** - Kontrola více bookmakerů pro získání nejlepší dostupné ceny.

**Liquidity (Likvidita)** - Kolik peněz je dostupných na trhu bez příliš velkého pohybu ceny.

**Live odds (Živé kurzy)** - Ceny dostupné během průběhu události.

**M**

**Market maker** - Sharp bookmaker nebo burzovní aktivita, která pomáhá definovat, kde by ceny měly být.

**Middle** - Držení pozic na různých liniích tak, aby mohlo vzniknout ziskové překrytí, pokud výsledek padne mezi ně.

**Moneyline** - Výherní trh, zejména v severoamerických sportech, obvykle bez remízy.

**O**

**Overround** - Částka, o kterou celková implikovaná pravděpodobnost přesahuje 100 procent. Toto je marže bookmakera.

**Overtime (Prodloužení)** - Dodatečná perioda po regulérním čase. Zda se počítá, závisí na trhu a sportu.

**P**

**Parlay** - Severoamerický termín pro akumulátor.

**Pace (Tempo)** - Rychlost hry nebo počet držení míče. Důležité v dostizích, fotbale, basketbalu a dalších, ačkoli přesný význam se liší.

**Pick'em** - Spreadový nebo stranový trh blízko parity, kde jsou týmy považovány za velmi vyrovnané.

**Place terms (Podmínky umístění)** - Pravidla určující, kolik dostihových umístění platí a za jaký zlomek výherního kurzu.

**Positive EV (Pozitivní EV)** - Sázka, jejíž cena je lepší než váš odhadovaný férový kurz.

**Price sensitive (Cenově citlivý)** - Situace, kde je sázka atraktivní pouze nad nebo pod úzkým kurzovým prahem.

**Prop** - Propoziční trh o specifických výsledcích hráče nebo události spíše než hlavní vítěz.

**Push (Vrácení)** - Sázka, která končí na lince nerozhodně a je vrácena.

**R**

**Regulation (Regulérní čas)** - Standardní délka zápasu před prodloužením. Klíčová formulace vyrovnání v hokeji a některých fotbalových trzích.

**Return on investment (ROI)** - Zisk dělený vsazenou částkou, obvykle vyjádřený v procentech.

**Run line** - Baseballová verze spreadu, obvykle ±1.5 runů.

**S**

**Sample size (Velikost vzorku)** - Množství dat nebo počet událostí za trendem nebo statistikou. Malé vzorky snadno klamou.

**Scratch (Stažení)** - Pozdní stažení koně nebo hráče. Důležité pro tržní reakci a vyrovnání.

**Second-serve liability** - Tenisová slabina, kde se hráč stává zranitelným při nucení k druhému podání.

**Sharp** - Respektovaný hráč, cena nebo bookmaker spojený se silnější tržní inteligencí.

**Shootout** - Tiebreaker procedura v hokeji v některých soutěžích. Zda se počítá, závisí na trhu.

**Side (Strana)** - Sázka na tým nebo účastníka k výhře nebo pokrytí, na rozdíl od součtu nebo propu.

**Soft book (Měkký bookmaker)** - Rekreační bookmaker více náchylný nabízet pomalejší nebo méně efektivní ceny.

**Spread** - Hendikepová linie navržená k vyvážení dvou týmů na trhu.

**Stake (Sázka)** - Částka riskovaná na sázku.

**Steam** - Silný, náhlý tržní pohyb, často přisuzovaný vlivným penězům nebo informacím.

**Strike rate (Úspěšnost)** - Procento vyhrátých sázek. Užitečná, ale ne dostačující sama o sobě, protože cena má význam.

**T**

**Team total (Týmový součet)** - Trh o tom, kolik bodů, runů, gólů nebo podobného tým vstřelí nezávisle na součtu celého zápasu.

**Tick** - Nejmenší přírůstek pohybu ceny na trhu.

**Tilt** - Emocionálně kompromitované sázecí chování, často po výhrách nebo prohrách.

**Total (Součet)** - Trh o kombinovaném skóre nebo produkci, jako je nad/pod gólů, bodů nebo runů.

**Trap game** - Nadužívaný výraz často používaný líně. Smysluplný pouze pokud odkazuje na skutečné situační nebo konfrontační riziko.

**True probability (Skutečná pravděpodobnost)** - Váš upřímný odhad, jak často se výsledek stane, oddělený od pohledu trhu.

**U**

**Unit (Jednotka)** - Standardizovaná velikost sázky používaná k konzistentnímu vyjádření rizika napříč bankrolly.

**V**

**Value (Hodnota)** - Cena, která je lepší než pravděpodobnost, kterou přiřazujete výsledku.

**Vig** - Jiné slovo pro marži, zejména v americkém sázkovém jazyce.

**Void (Anulováno)** - Zrušená sázka, kde je vklad vrácen podle pravidel.

**W**

**WHIP** - Baseballová statistika měřící walks a hity povolené na nadhozený inning; užitečná pro kontext provozu a kontroly.

**Win rate (Míra výher)** - Stejná obecná myšlenka jako úspěšnost; jak často sázky platí.

**Y**

**Yield (Výnos)** - Zisk jako procento celkové sázky přes sadu sázek.`
      }
    ]
  }
]
