import type { Language } from './translations'

export interface TrainingModuleTranslation {
  title: string
  subtitle?: string
  duration: string
  sections: {
    title: string
    content: string
  }[]
}

export interface TrainingTranslations {
  pageTitle: string
  pageSubtitle: string
  modulesTitle: string
  backToTraining: string
  returnToModules: string
  readTime: string
  modules: Record<number, TrainingModuleTranslation>
}

// English training content (base)
const enTraining: TrainingTranslations = {
  pageTitle: 'Professional Betting Training',
  pageSubtitle: 'Master the fundamentals of disciplined, value-based betting through our comprehensive training program.',
  modulesTitle: 'Training Modules',
  backToTraining: 'Back to Training',
  returnToModules: 'Return to All Modules',
  readTime: 'min read',
  modules: {}  // English uses the main training-content.ts file
}

// Hungarian translations
const huTraining: TrainingTranslations = {
  pageTitle: 'Professzionális Fogadási Képzés',
  pageSubtitle: 'Sajátítsd el a fegyelmezett, értékalapú fogadás alapjait átfogó képzési programunkon keresztül.',
  modulesTitle: 'Képzési Modulok',
  backToTraining: 'Vissza a Képzéshez',
  returnToModules: 'Vissza az Összes Modulhoz',
  readTime: 'perc olvasás',
  modules: {
    1: {
      title: '1. Mit Csinálnak Másképp a Hatékony Fogadók',
      subtitle: 'A fegyelmezett fogadói gondolkodásmód: kutatás, valószínűség, piaci részvétel és szakmai standardok',
      duration: '15 perc olvasás',
      sections: [
        {
          title: 'A Piaci Résztvevő Gondolkodásmódja',
          content: `A fegyelmezett fogadó nem egyszerűen olyan ember, aki szereti a sportot és alkalmanként van véleménye. A fegyelmezett fogadó piaci résztvevő. Kutatja az eseményeket, becsüli a valószínűségeket, összehasonlítja ezeket a becsléseket az elérhető árakkal, kiválasztja azt a piacot, amely a legtisztábban fejezi ki az előnyt, szigorú keretek között tesz tétet, és őszintén áttekinti a döntést az esemény után. Nem egy győzelemmel, egy veszteséggel vagy egy szerencsés hétvégével határozzák meg magukat. A standardok határozzák meg őket.

Ez a megkülönböztetés azért fontos, mert a fogadási iparág tele van zajjal. Vannak, akik bizonyosságot árulnak, vannak, akik lehetetlen találati arányokat hirdetnek, vannak, akik szerencsés szelvényekkel dicsekszenek, és vannak, akik összekeverik az izgalmat az előnnyel. Ezek egyike sem professzionális viselkedés. Egy komoly fogadónak képesnek kell lennie elmagyarázni nemcsak azt, hogy mire tett, hanem azt is, hogy miért volt játszható az ár, miért volt jobb az a piac az alternatíváknál, hogyan határozták meg a tétet, és mit tanultak utána, akár nyert, akár veszített a fogadás.

A hatékony fogadás megértésének legegyszerűbb módja az, ha elemző, kereskedő és kockázatkezelő keverékeként gondolunk rá. Az elemző gyűjti és szűri az információkat. A kereskedő azt kérdezi, hogy rossz-e a piaci ár. A kockázatkezelő gondoskodik arról, hogy egyetlen rossz nap ne tudja tönkretenni hónapok jó munkáját. A kezdők általában csak az elemzésre koncentrálnak, és figyelmen kívül hagyják a másik két feladatot. A tapasztalt fogadók tudják, hogy a másik két feladat tartja életben a jó elemzést.`
        },
        {
          title: 'Szelektivitás az Akció Felett',
          content: `A hatékony fogadás szelektivitást is igényel. A rekreációs fogadók akciót akarnak. A komoly fogadók előnyt akarnak. Ez nem ugyanaz. Az amatőr azt kérdezi: "Mire fogadhatok ma?" A profi azt kérdezi: "Hol elég rossz az ár ahhoz, hogy igazolja a kockázatot ma?" Ez a kérdésváltoztatás átalakítja az egész tevékenységet. Abbahagyod, hogy a fogadást elsősorban szórakozásként kezeld, és elkezded döntéshozatali üzletként kezelni, költségekkel, bizonytalansággal, súrlódással és minőségellenőrzéssel.

Egy másik kulcsfontosságú különbség az, ahogyan a profik beszélnek magukhoz a magabiztosságról. A magabiztosság nem bizonyíték. Egy komoly fogadónak lehet erős véleménye, de a véleményt még mindig valószínűség, ár, piaci választás és tétméret révén kell kifejezni. Megértik, hogy az 58 százalékos esély még mindig gyakran veszít, hogy a jó fogadások veszíthetnek, és hogy az őszinte önvizsgálat többet ér, mint az érzelmi bizonyosság.`
        },
        {
          title: 'Az Igazi Munkaköri Leírás',
          content: `A fogadó napi munkája közelebb áll egy kis kutatási részleg működtetéséhez, mint a vélemények kiabálásához. Egy erős fogadó átvizsgálja a menetrendeket, leszűkíti a kártyát, azonosítja, hol számít leginkább az információ, beárazza a valószínű kimeneteleket, és csak ezután dönti el, hogy létezzen-e fogadás. Nyilvántartást vezetnek, mert az emlékezet elfogult. Világosan írnak, mert a fogadók büntetik a homályosságot. Gondosan felülvizsgálnak, mert az ego hazudik.

**Kulcsfontosságú elvek:**
- Szűrd az eseményeket ahelyett, hogy mindent megpróbálnál lefedni
- Hozz létre személyes fair árat, mielőtt a piaci szorzók lehorgonyoznának
- Használd azt a piacot, amely legjobban kifejezi az előnyt, ahelyett, hogy minden véleményt meccs győztes fogadásba kényszerítenél
- A bankroll arányában tegyél tétet, ne az érzelmek szerint
- Tarts fenn audit nyomvonalat: dátum, piac, vett ár, tét, eredmény és folyamat jegyzetek
- A hosszú távú minőséget a folyamat és az ár alapján ítéld meg, nem csak a rövid távú eredmények alapján`
        },
        {
          title: 'Mi Különbözteti Meg a Fegyelmezett Fogadókat',
          content: `A fegyelmezett fogadó védi saját döntéshozatalát azáltal, hogy őszinte a nyilvántartásában a vett szorzókról, osztályozási szabályokról, veszteségekről és varianciáról. Nem szerkesztik a történelmet a jegyzetfüzetükben, nem rejtik el a veszteséges időszakokat maguk elől, és nem hoznak létre szükségtelen mennyiséget csak azért, hogy aktívnak érezzék magukat. Mért nyelvet használnak a saját jegyzeteikben, mert az eltúlzott bizonyosság általában annak a jele, hogy a valószínűséget figyelmen kívül hagyják.

**A fegyelmezett fogadás jellemzői:**
- Őszinte nyilvántartás
- Világos piaci és elszámolási nyelv
- Nincs hamis "biztos tipp", "garancia" vagy felelőtlen all-in üzenet
- Következetes tétméret nyelv, mint 1 egység, 1.5 egység vagy 2 egység
- Hajlandóság kihagyni az alacsony minőségű kártyákat és csendes napokat
- Személyes stílus, amely világos, pontos és nem manipulatív önmagad felé`
        },
        {
          title: 'Miért Szándékosan Hosszú Ez a Kézikönyv',
          content: `A rövid fogadási útmutatók gyakran könnyen olvashatók és a gyakorlatban használhatatlanok. A professzionális fejlődés részleteket igényel. Meg kell értened nemcsak azt, hogy mi egy piac, hanem azt is, hogy mikor vonzó, mikor veszélyes, milyen információ mozgatja, hogyan működik az elszámolás, és hogyan illeszkedik a fogadói munkafolyamatba. Ez a kurzus ezért szándékosan hosszúra nyúlik. A cél nem az, hogy lenyűgözzünk az oldalszámmal. A cél a felszínes megértés eltávolítása.

**Professzionális standard:** A fogadó első kötelessége a folyamat minősége, nem az izgalom. A fogadó második kötelessége a kockázatkezelés, mert az előny értéktelen, ha a rossz tétméretezés kipusztít. A fogadó harmadik kötelessége az őszinte kommunikáció, mert a bizalom a pontosságtól és következetességtől függ.`
        },
        {
          title: 'A Fogadói Működési Ciklus',
          content: `| Szakasz | Kérdés | Kimenet | Gyakori Amatőr Hiba |
|-------|----------|--------|----------------------|
| Kártya szűrés | Megéri az időmet ez az esemény? | Rövidlista vagy kihagyás | Minden meccsen fogadni próbálni |
| Kutatás | Mi fogja leginkább eldönteni az eseményt? | Kontextus jegyzetek | Véletlenszerű statisztikák gyűjtése súlyozás nélkül |
| Árazás | Mi a fair valószínűségem? | Saját vonal vagy fair szorzók | A fogadóirodai árak megnézése vélemény előtt |
| Piac kiválasztás | Melyik piac fejezi ki legjobban ezt az előnyt? | Választott piac | Minden előnyt győztes piacba kényszeríteni |
| Tétméretezés | Mennyit kockáztassak? | Egység méret | Tét növelése érzelem vagy közelmúlt miatt |
| Döntési napló | El tudom magyarázni világosan és felelősségteljesen magamnak? | Fogadás jegyzet | Homályos nyelvezet és hiányzó elszámolási részletek |
| Felülvizsgálat | Jó volt a folyamat az eredménytől függetlenül? | Esemény utáni jegyzetek | Minőség megítélése csak aszerint, hogy nyert-e a fogadás |`
        }
      ]
    }
  }
}

// German translations
const deTraining: TrainingTranslations = {
  pageTitle: 'Professionelles Wett-Training',
  pageSubtitle: 'Meistern Sie die Grundlagen des disziplinierten, wertbasierten Wettens durch unser umfassendes Trainingsprogramm.',
  modulesTitle: 'Trainingsmodule',
  backToTraining: 'Zurück zum Training',
  returnToModules: 'Zurück zu allen Modulen',
  readTime: 'Min. Lesezeit',
  modules: {}
}

// Spanish translations
const esTraining: TrainingTranslations = {
  pageTitle: 'Entrenamiento Profesional de Apuestas',
  pageSubtitle: 'Domina los fundamentos de las apuestas disciplinadas y basadas en valor a través de nuestro programa de entrenamiento integral.',
  modulesTitle: 'Módulos de Entrenamiento',
  backToTraining: 'Volver al Entrenamiento',
  returnToModules: 'Volver a Todos los Módulos',
  readTime: 'min de lectura',
  modules: {}
}

// French translations
const frTraining: TrainingTranslations = {
  pageTitle: 'Formation Professionnelle aux Paris',
  pageSubtitle: 'Maîtrisez les fondamentaux des paris disciplinés et basés sur la valeur grâce à notre programme de formation complet.',
  modulesTitle: 'Modules de Formation',
  backToTraining: 'Retour à la Formation',
  returnToModules: 'Retour à Tous les Modules',
  readTime: 'min de lecture',
  modules: {}
}

// Portuguese translations
const ptTraining: TrainingTranslations = {
  pageTitle: 'Treinamento Profissional de Apostas',
  pageSubtitle: 'Domine os fundamentos das apostas disciplinadas e baseadas em valor através do nosso programa de treinamento abrangente.',
  modulesTitle: 'Módulos de Treinamento',
  backToTraining: 'Voltar ao Treinamento',
  returnToModules: 'Voltar a Todos os Módulos',
  readTime: 'min de leitura',
  modules: {}
}

// Italian translations
const itTraining: TrainingTranslations = {
  pageTitle: 'Formazione Professionale sulle Scommesse',
  pageSubtitle: 'Padroneggia i fondamenti delle scommesse disciplinate e basate sul valore attraverso il nostro programma di formazione completo.',
  modulesTitle: 'Moduli di Formazione',
  backToTraining: 'Torna alla Formazione',
  returnToModules: 'Torna a Tutti i Moduli',
  readTime: 'min di lettura',
  modules: {}
}

// Dutch translations
const nlTraining: TrainingTranslations = {
  pageTitle: 'Professionele Wedden Training',
  pageSubtitle: 'Beheers de grondbeginselen van gedisciplineerd, op waarde gebaseerd wedden via ons uitgebreide trainingsprogramma.',
  modulesTitle: 'Trainingsmodules',
  backToTraining: 'Terug naar Training',
  returnToModules: 'Terug naar Alle Modules',
  readTime: 'min leestijd',
  modules: {}
}

// Polish translations
const plTraining: TrainingTranslations = {
  pageTitle: 'Profesjonalne Szkolenie Zakładów',
  pageSubtitle: 'Opanuj podstawy zdyscyplinowanych zakładów opartych na wartości dzięki naszemu kompleksowemu programowi szkoleniowemu.',
  modulesTitle: 'Moduły Szkoleniowe',
  backToTraining: 'Powrót do Szkolenia',
  returnToModules: 'Powrót do Wszystkich Modułów',
  readTime: 'min czytania',
  modules: {}
}

// Swedish translations
const svTraining: TrainingTranslations = {
  pageTitle: 'Professionell Bettingutbildning',
  pageSubtitle: 'Bemästra grunderna i disciplinerad, värdebaserad betting genom vårt omfattande utbildningsprogram.',
  modulesTitle: 'Utbildningsmoduler',
  backToTraining: 'Tillbaka till Utbildning',
  returnToModules: 'Tillbaka till Alla Moduler',
  readTime: 'min läsning',
  modules: {}
}

// Romanian translations
const roTraining: TrainingTranslations = {
  pageTitle: 'Formare Profesională în Pariuri',
  pageSubtitle: 'Stăpânește fundamentele pariurilor disciplinate, bazate pe valoare, prin programul nostru cuprinzător de formare.',
  modulesTitle: 'Module de Formare',
  backToTraining: 'Înapoi la Formare',
  returnToModules: 'Înapoi la Toate Modulele',
  readTime: 'min de citit',
  modules: {}
}

// Chinese Simplified translations
const zhCNTraining: TrainingTranslations = {
  pageTitle: '专业投注培训',
  pageSubtitle: '通过我们全面的培训计划,掌握纪律严明、基于价值的投注基础。',
  modulesTitle: '培训模块',
  backToTraining: '返回培训',
  returnToModules: '返回所有模块',
  readTime: '分钟阅读',
  modules: {}
}

// Japanese translations
const jaTraining: TrainingTranslations = {
  pageTitle: 'プロフェッショナルベッティングトレーニング',
  pageSubtitle: '当社の包括的なトレーニングプログラムを通じて、規律あるバリューベースのベッティングの基礎をマスターしてください。',
  modulesTitle: 'トレーニングモジュール',
  backToTraining: 'トレーニングに戻る',
  returnToModules: 'すべてのモジュールに戻る',
  readTime: '分で読める',
  modules: {}
}

// Korean translations
const koTraining: TrainingTranslations = {
  pageTitle: '전문 베팅 교육',
  pageSubtitle: '포괄적인 교육 프로그램을 통해 규율 있고 가치 기반의 베팅 기본을 마스터하세요.',
  modulesTitle: '교육 모듈',
  backToTraining: '교육으로 돌아가기',
  returnToModules: '모든 모듈로 돌아가기',
  readTime: '분 읽기',
  modules: {}
}

// Arabic translations
const arTraining: TrainingTranslations = {
  pageTitle: 'تدريب الرهان المحترف',
  pageSubtitle: 'أتقن أساسيات الرهان المنضبط والقائم على القيمة من خلال برنامجنا التدريبي الشامل.',
  modulesTitle: 'وحدات التدريب',
  backToTraining: 'العودة إلى التدريب',
  returnToModules: 'العودة إلى جميع الوحدات',
  readTime: 'دقيقة قراءة',
  modules: {}
}

// All training translations
export const trainingTranslations: Record<Language, TrainingTranslations> = {
  en: enTraining,
  hu: huTraining,
  de: deTraining,
  es: esTraining,
  fr: frTraining,
  pt: ptTraining,
  it: itTraining,
  nl: nlTraining,
  pl: plTraining,
  sv: svTraining,
  ro: roTraining,
  'zh-CN': zhCNTraining,
  'zh-TW': zhCNTraining, // Use simplified for traditional as fallback
  ja: jaTraining,
  ko: koTraining,
  ar: arTraining,
  // Fallback to English for other languages
  da: enTraining,
  el: enTraining,
  no: enTraining,
  fi: enTraining,
  cs: enTraining,
  sw: enTraining,
  af: enTraining,
  zu: enTraining,
  xh: enTraining,
  hi: enTraining,
  tl: enTraining,
}

export function getTrainingTranslation(language: Language): TrainingTranslations {
  return trainingTranslations[language] || trainingTranslations.en
}
