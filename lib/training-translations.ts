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
  logOut: string
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
  logOut: 'Log Out',
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
  logOut: 'Kijelentkezés',
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
  logOut: 'Abmelden',
  readTime: 'Min. Lesezeit',
  modules: {
    1: { title: '1. Was effektive Wetter anders machen', subtitle: 'Die disziplinierte Wetter-Denkweise: Recherche, Wahrscheinlichkeit, Marktteilnahme und professionelle Standards', duration: '15 Min. Lesezeit' },
    2: { title: '2. Wie Buchmacher, Börsen und Wettmärkte wirklich funktionieren', subtitle: 'Verständnis von Marge, Preismechanik, scharfe vs. weiche Bücher und Börsenlogik', duration: '12 Min. Lesezeit' },
    3: { title: '3. Quoten, implizite Wahrscheinlichkeit und faire Preisgestaltung', subtitle: 'Beherrschung von Quotenformaten, Wahrscheinlichkeitsumrechnung und Erstellung eigener fairer Linien', duration: '10 Min. Lesezeit' },
    4: { title: '4. Wert, erwarteter Wert, Quotenvergleich und Schlusslinien-Wert', subtitle: 'Der intellektuelle Wechsel vom Gewinner-Picking zur Wertsuche', duration: '12 Min. Lesezeit' },
    5: { title: '5. Bankroll-Management, Einsätze und Überleben bei Varianz', subtitle: 'Das Überlebenssystem, das gute Analyse am Leben hält', duration: '12 Min. Lesezeit' },
    6: { title: '6. Der vollständige Wetter-Workflow von der Spielliste zur platzierten Wette', subtitle: 'Ein wiederholbares Betriebssystem für diszipliniertes Wetten', duration: '12 Min. Lesezeit' },
    7: { title: '7. Fußball-Klasse: Aufbau eines professionellen Spielanalyse-Prozesses', subtitle: 'Chancenqualität, xG-Kontext, Aufstellungen und Marktauswahl für Fußballwetten', duration: '15 Min. Lesezeit' },
    8: { title: '8. Pferderennen-Klasse: Rennkarten, Tempo, Klasse und Trainermuster', subtitle: 'Rennkarten in Schichten lesen: Klasse, Bedingungen, Tempo und Stallabsicht', duration: '15 Min. Lesezeit' },
    9: { title: '9. Tennis-Klasse: Beläge, Aufschlag/Rückschlag-Dynamik und Zeitplan-Vorteile', subtitle: 'Spielerspezifische Analyse, Matchup-Details und Marktauswahl im Tennis', duration: '12 Min. Lesezeit' },
    10: { title: '10. Basketball-Klasse: Tempo, Effizienz, Rotationen und Markt-Timing', subtitle: 'Verständnis von Ballbesitzen, Wurfqualität, Aufstellungseffekten und Zeitplankontext', duration: '12 Min. Lesezeit' },
    11: { title: '11. Eishockey-Klasse: Torhüter, Spezialteams und reguläre Spielzeit vs. Vollspiel', subtitle: 'Wetten auf Sport mit hoher Varianz mit Abrechnungsbewusstsein und Chancenerstellung', duration: '12 Min. Lesezeit' },
    12: { title: '12. Baseball-Klasse: Pitcher, Bullpens, Splits und First-Five-Logik', subtitle: 'Aufbau vom Hügel nach außen mit diskreter Ereignisanalyse', duration: '12 Min. Lesezeit' },
    13: { title: '13. American Football-Klasse: Verletzungskontext, Stil-Matchups und Marktauswahl', subtitle: 'Personaltiefe, Skriptdenken und wetterabhängige Marktwahl', duration: '12 Min. Lesezeit' },
    14: { title: '14. Andere Sportarten und Spezialnischen: Ein disziplinierter Rahmen für Erweiterung', subtitle: 'Prozess in neue Sportarten übertragen, ohne rücksichtslos zu werden', duration: '10 Min. Lesezeit' },
    15: { title: '15. Wettarten-Meisterklasse: Wann welchen Markt nutzen und wann nicht', subtitle: 'Strategische Marktwahl als separate professionelle Fähigkeit', duration: '12 Min. Lesezeit' },
    16: { title: '16. Aufbau eines persönlichen Wett-Notizbuchs, Entscheidungsprotokolls und Überprüfungsrekords', subtitle: 'Erstellen einer Entscheidungsspur, die Ihr zukünftiges Ich prüfen kann', duration: '10 Min. Lesezeit' },
    17: { title: '17. Leistungsüberprüfung, Aufzeichnungen führen und aus Ergebnissen lernen', subtitle: 'Aufbau eines Überprüfungssystems, das vor Narrativ-Bias schützt', duration: '10 Min. Lesezeit' },
    18: { title: '18. Psychologie, Disziplin, Tilt-Kontrolle und professionelle Routinen', subtitle: 'Emotionen managen, damit sie den Workflow nicht kapern können', duration: '12 Min. Lesezeit' },
    19: { title: '19. Standards für sicheres Spielen, Compliance-Bewusstsein und persönlicher Schutz', subtitle: 'Die Kontrolle behalten und wissen, wann man nicht wetten sollte', duration: '10 Min. Lesezeit' },
    20: { title: '20. Praktische Übungen, Arbeitsblätter und Abschlussbewertungsaufgaben', subtitle: 'Lesen in Handeln umwandeln mit strukturierter Praxis', duration: '15 Min. Lesezeit' }
  }
}

// Spanish translations
const esTraining: TrainingTranslations = {
  pageTitle: 'Entrenamiento Profesional de Apuestas',
  pageSubtitle: 'Domina los fundamentos de las apuestas disciplinadas y basadas en valor a través de nuestro programa de entrenamiento integral.',
  modulesTitle: 'Módulos de Entrenamiento',
  backToTraining: 'Volver al Entrenamiento',
  returnToModules: 'Volver a Todos los Módulos',
  logOut: 'Cerrar Sesión',
  readTime: 'min de lectura',
  modules: {
    1: { title: '1. Qué hacen diferente los apostadores efectivos', subtitle: 'La mentalidad del apostador disciplinado: investigación, probabilidad, participación en el mercado y estándares profesionales', duration: '15 min de lectura' },
    2: { title: '2. Cómo funcionan realmente las casas de apuestas, bolsas y mercados', subtitle: 'Entendiendo el margen, mecánica de precios, casas duras vs blandas y lógica de intercambio', duration: '12 min de lectura' },
    3: { title: '3. Cuotas, probabilidad implícita y precios justos', subtitle: 'Dominando formatos de cuotas, conversión de probabilidad y creación de tus propias líneas justas', duration: '10 min de lectura' },
    4: { title: '4. Valor, valor esperado, comparación de líneas y valor de línea de cierre', subtitle: 'El cambio intelectual de elegir ganadores a buscar valor', duration: '12 min de lectura' },
    5: { title: '5. Gestión de bankroll, stakes y supervivencia bajo varianza', subtitle: 'El sistema de supervivencia que mantiene vivo el buen análisis', duration: '12 min de lectura' },
    6: { title: '6. El flujo de trabajo completo del apostador desde la lista de partidos hasta la apuesta colocada', subtitle: 'Un sistema operativo repetible para apuestas disciplinadas', duration: '12 min de lectura' },
    7: { title: '7. Clase de Fútbol: Construyendo un proceso profesional de análisis de partidos', subtitle: 'Calidad de ocasiones, contexto xG, alineaciones y selección de mercado para apuestas de fútbol', duration: '15 min de lectura' },
    8: { title: '8. Clase de Carreras de Caballos: Tarjetas de carrera, ritmo, clase y patrones de entrenador', subtitle: 'Leyendo tarjetas de carrera en capas: clase, condiciones, ritmo e intención del establo', duration: '15 min de lectura' },
    9: { title: '9. Clase de Tenis: Superficies, dinámica de saque/resto y ventajas de calendario', subtitle: 'Análisis específico del jugador, detalle de enfrentamiento y selección de mercado en tenis', duration: '12 min de lectura' },
    10: { title: '10. Clase de Baloncesto: Ritmo, eficiencia, rotaciones y timing de mercado', subtitle: 'Entendiendo posesiones, calidad de tiro, efectos de alineación y contexto de calendario', duration: '12 min de lectura' },
    11: { title: '11. Clase de Hockey sobre Hielo: Porteros, equipos especiales y tiempo reglamentario vs partido completo', subtitle: 'Apuestas de deporte de alta varianza con conciencia de liquidación y creación de oportunidades', duration: '12 min de lectura' },
    12: { title: '12. Clase de Béisbol: Lanzadores, bullpens, splits y lógica de primeras cinco entradas', subtitle: 'Construyendo desde el montículo hacia afuera con análisis de eventos discretos', duration: '12 min de lectura' },
    13: { title: '13. Clase de Fútbol Americano: Contexto de lesiones, matchups de estilo y selección de mercado', subtitle: 'Profundidad de personal, pensamiento de guión y elección de mercado consciente del clima', duration: '12 min de lectura' },
    14: { title: '14. Otros deportes y nichos especializados: Un marco disciplinado para la expansión', subtitle: 'Llevando el proceso a nuevos deportes sin volverse imprudente', duration: '10 min de lectura' },
    15: { title: '15. Masterclass de tipos de apuesta: Cuándo usar cada mercado y cuándo dejarlo', subtitle: 'Elección estratégica de mercado como habilidad profesional separada', duration: '12 min de lectura' },
    16: { title: '16. Construyendo un cuaderno de apuestas personal, registro de decisiones y registro de revisión', subtitle: 'Creando un rastro de decisiones que tu yo futuro puede auditar', duration: '10 min de lectura' },
    17: { title: '17. Revisando rendimiento, manteniendo registros y aprendiendo de resultados', subtitle: 'Construyendo un sistema de revisión que protege contra el sesgo narrativo', duration: '10 min de lectura' },
    18: { title: '18. Psicología, disciplina, control del tilt y rutinas profesionales', subtitle: 'Gestionando la emoción para que no pueda secuestrar el flujo de trabajo', duration: '12 min de lectura' },
    19: { title: '19. Estándares de juego más seguro, conciencia de cumplimiento y protección personal', subtitle: 'Mantener el control y saber cuándo no apostar', duration: '10 min de lectura' },
    20: { title: '20. Ejercicios prácticos, hojas de trabajo y tareas de evaluación final', subtitle: 'Convirtiendo la lectura en acción con práctica estructurada', duration: '15 min de lectura' }
  }
}

// French translations
const frTraining: TrainingTranslations = {
  pageTitle: 'Formation Professionnelle aux Paris',
  pageSubtitle: 'Maîtrisez les fondamentaux des paris disciplinés et basés sur la valeur grâce à notre programme de formation complet.',
  modulesTitle: 'Modules de Formation',
  backToTraining: 'Retour à la Formation',
  returnToModules: 'Retour à Tous les Modules',
  logOut: 'Déconnexion',
  readTime: 'min de lecture',
  modules: {
    1: { title: '1. Ce que font différemment les parieurs efficaces', subtitle: 'L\'état d\'esprit du parieur discipliné: recherche, probabilité, participation au marché et normes professionnelles', duration: '15 min de lecture' },
    2: { title: '2. Comment fonctionnent vraiment les bookmakers, bourses et marchés de paris', subtitle: 'Comprendre la marge, les mécanismes de prix, les books durs vs doux et la logique des échanges', duration: '12 min de lecture' },
    3: { title: '3. Cotes, probabilité implicite et prix équitable', subtitle: 'Maîtriser les formats de cotes, la conversion de probabilité et créer vos propres lignes justes', duration: '10 min de lecture' },
    4: { title: '4. Valeur, valeur attendue, comparaison de cotes et valeur de la ligne de clôture', subtitle: 'Le changement intellectuel de la sélection de gagnants à la recherche de valeur', duration: '12 min de lecture' },
    5: { title: '5. Gestion de bankroll, mises et survie sous la variance', subtitle: 'Le système de survie qui maintient une bonne analyse en vie', duration: '12 min de lecture' },
    6: { title: '6. Le workflow complet du parieur de la liste des matchs au pari placé', subtitle: 'Un système d\'exploitation répétable pour des paris disciplinés', duration: '12 min de lecture' },
    7: { title: '7. Classe Football: Construire un processus professionnel d\'analyse de match', subtitle: 'Qualité des occasions, contexte xG, compositions et sélection de marché pour les paris football', duration: '15 min de lecture' },
    8: { title: '8. Classe Courses Hippiques: Cartes de course, rythme, classe et schémas d\'entraîneur', subtitle: 'Lire les cartes de course en couches: classe, conditions, rythme et intention de l\'écurie', duration: '15 min de lecture' },
    9: { title: '9. Classe Tennis: Surfaces, dynamique service/retour et avantages de calendrier', subtitle: 'Analyse spécifique au joueur, détails de confrontation et sélection de marché au tennis', duration: '12 min de lecture' },
    10: { title: '10. Classe Basketball: Rythme, efficacité, rotations et timing de marché', subtitle: 'Comprendre les possessions, la qualité de tir, les effets de composition et le contexte du calendrier', duration: '12 min de lecture' },
    11: { title: '11. Classe Hockey sur Glace: Gardiens, équipes spéciales et temps réglementaire vs match complet', subtitle: 'Paris sur sport à haute variance avec conscience du règlement et création d\'opportunités', duration: '12 min de lecture' },
    12: { title: '12. Classe Baseball: Lanceurs, bullpens, splits et logique des cinq premières manches', subtitle: 'Construire depuis le monticule vers l\'extérieur avec analyse d\'événements discrets', duration: '12 min de lecture' },
    13: { title: '13. Classe Football Américain: Contexte des blessures, matchups de style et sélection de marché', subtitle: 'Profondeur de l\'effectif, pensée scénaristique et choix de marché conscient de la météo', duration: '12 min de lecture' },
    14: { title: '14. Autres sports et niches spécialisées: Un cadre discipliné pour l\'expansion', subtitle: 'Porter le processus vers de nouveaux sports sans devenir imprudent', duration: '10 min de lecture' },
    15: { title: '15. Masterclass types de paris: Quand utiliser chaque marché et quand s\'abstenir', subtitle: 'Choix stratégique de marché comme compétence professionnelle distincte', duration: '12 min de lecture' },
    16: { title: '16. Construire un carnet de paris personnel, journal de décision et registre de révision', subtitle: 'Créer une trace de décision que votre futur vous peut auditer', duration: '10 min de lecture' },
    17: { title: '17. Réviser la performance, maintenir les registres et apprendre des résultats', subtitle: 'Construire un système de révision qui protège contre le biais narratif', duration: '10 min de lecture' },
    18: { title: '18. Psychologie, discipline, contrôle du tilt et routines professionnelles', subtitle: 'Gérer l\'émotion pour qu\'elle ne puisse pas détourner le workflow', duration: '12 min de lecture' },
    19: { title: '19. Standards de jeu plus sûr, conscience de la conformité et protection personnelle', subtitle: 'Garder le contrôle et savoir quand ne pas parier', duration: '10 min de lecture' },
    20: { title: '20. Exercices pratiques, feuilles de travail et tâches d\'évaluation finale', subtitle: 'Convertir la lecture en action avec une pratique structurée', duration: '15 min de lecture' }
  }
}

// Portuguese translations
const ptTraining: TrainingTranslations = {
  pageTitle: 'Treinamento Profissional de Apostas',
  pageSubtitle: 'Domine os fundamentos das apostas disciplinadas e baseadas em valor através do nosso programa de treinamento abrangente.',
  modulesTitle: 'Módulos de Treinamento',
  backToTraining: 'Voltar ao Treinamento',
  returnToModules: 'Voltar a Todos os Módulos',
  logOut: 'Sair',
  readTime: 'min de leitura',
  modules: {
    1: { title: '1. O que apostadores eficazes fazem de diferente', subtitle: 'A mentalidade do apostador disciplinado: pesquisa, probabilidade, participação no mercado e padrões profissionais', duration: '15 min de leitura' },
    2: { title: '2. Como casas de apostas, bolsas e mercados realmente funcionam', subtitle: 'Entendendo margem, mecânica de preços, casas duras vs suaves e lógica de exchange', duration: '12 min de leitura' },
    3: { title: '3. Odds, probabilidade implícita e precificação justa', subtitle: 'Dominando formatos de odds, conversão de probabilidade e criando suas próprias linhas justas', duration: '10 min de leitura' },
    4: { title: '4. Valor, valor esperado, comparação de linhas e valor da linha de fechamento', subtitle: 'A mudança intelectual de escolher vencedores para buscar valor', duration: '12 min de leitura' },
    5: { title: '5. Gestão de banca, stakes e sobrevivência sob variância', subtitle: 'O sistema de sobrevivência que mantém uma boa análise viva', duration: '12 min de leitura' },
    6: { title: '6. O workflow completo do apostador da lista de jogos à aposta colocada', subtitle: 'Um sistema operacional repetível para apostas disciplinadas', duration: '12 min de leitura' },
    7: { title: '7. Classe de Futebol: Construindo um processo profissional de análise de partidas', subtitle: 'Qualidade de chances, contexto xG, escalações e seleção de mercado para apostas de futebol', duration: '15 min de leitura' },
    8: { title: '8. Classe de Corridas de Cavalos: Cartões de corrida, ritmo, classe e padrões de treinador', subtitle: 'Lendo cartões de corrida em camadas: classe, condições, ritmo e intenção do estábulo', duration: '15 min de leitura' },
    9: { title: '9. Classe de Tênis: Superfícies, dinâmica de saque/devolução e vantagens de calendário', subtitle: 'Análise específica do jogador, detalhes de confronto e seleção de mercado no tênis', duration: '12 min de leitura' },
    10: { title: '10. Classe de Basquete: Ritmo, eficiência, rotações e timing de mercado', subtitle: 'Entendendo posses, qualidade de arremesso, efeitos de escalação e contexto de calendário', duration: '12 min de leitura' },
    11: { title: '11. Classe de Hóquei no Gelo: Goleiros, times especiais e tempo regulamentar vs jogo completo', subtitle: 'Apostas em esporte de alta variância com consciência de liquidação e criação de chances', duration: '12 min de leitura' },
    12: { title: '12. Classe de Beisebol: Arremessadores, bullpens, splits e lógica das primeiras cinco entradas', subtitle: 'Construindo do monte para fora com análise de eventos discretos', duration: '12 min de leitura' },
    13: { title: '13. Classe de Futebol Americano: Contexto de lesões, matchups de estilo e seleção de mercado', subtitle: 'Profundidade de elenco, pensamento de script e escolha de mercado consciente do clima', duration: '12 min de leitura' },
    14: { title: '14. Outros esportes e nichos especializados: Uma estrutura disciplinada para expansão', subtitle: 'Levando o processo para novos esportes sem se tornar imprudente', duration: '10 min de leitura' },
    15: { title: '15. Masterclass de tipos de aposta: Quando usar cada mercado e quando deixar', subtitle: 'Escolha estratégica de mercado como habilidade profissional separada', duration: '12 min de leitura' },
    16: { title: '16. Construindo um caderno de apostas pessoal, registro de decisões e registro de revisão', subtitle: 'Criando uma trilha de decisão que seu eu futuro pode auditar', duration: '10 min de leitura' },
    17: { title: '17. Revisando desempenho, mantendo registros e aprendendo com resultados', subtitle: 'Construindo um sistema de revisão que protege contra viés narrativo', duration: '10 min de leitura' },
    18: { title: '18. Psicologia, disciplina, controle de tilt e rotinas profissionais', subtitle: 'Gerenciando emoção para que não possa sequestrar o workflow', duration: '12 min de leitura' },
    19: { title: '19. Padrões de jogo mais seguro, consciência de conformidade e proteção pessoal', subtitle: 'Manter o controle e saber quando não apostar', duration: '10 min de leitura' },
    20: { title: '20. Exercícios práticos, planilhas e tarefas de avaliação final', subtitle: 'Convertendo leitura em ação com prática estruturada', duration: '15 min de leitura' }
  }
}

// Italian translations
const itTraining: TrainingTranslations = {
  pageTitle: 'Formazione Professionale sulle Scommesse',
  pageSubtitle: 'Padroneggia i fondamenti delle scommesse disciplinate e basate sul valore attraverso il nostro programma di formazione completo.',
  modulesTitle: 'Moduli di Formazione',
  backToTraining: 'Torna alla Formazione',
  returnToModules: 'Torna a Tutti i Moduli',
  logOut: 'Esci',
  readTime: 'min di lettura',
  modules: {
    1: { title: '1. Cosa fanno di diverso gli scommettitori efficaci', subtitle: 'La mentalità dello scommettitore disciplinato: ricerca, probabilità, partecipazione al mercato e standard professionali', duration: '15 min di lettura' },
    2: { title: '2. Come funzionano davvero bookmaker, exchange e mercati delle scommesse', subtitle: 'Capire il margine, la meccanica dei prezzi, book duri vs morbidi e la logica degli exchange', duration: '12 min di lettura' },
    3: { title: '3. Quote, probabilità implicita e prezzi equi', subtitle: 'Padroneggiare i formati delle quote, la conversione delle probabilità e creare le proprie linee eque', duration: '10 min di lettura' },
    4: { title: '4. Valore, valore atteso, confronto delle linee e valore della linea di chiusura', subtitle: 'Il cambio intellettuale dalla selezione dei vincitori alla ricerca del valore', duration: '12 min di lettura' },
    5: { title: '5. Gestione del bankroll, puntate e sopravvivenza sotto varianza', subtitle: 'Il sistema di sopravvivenza che mantiene viva una buona analisi', duration: '12 min di lettura' },
    6: { title: '6. Il workflow completo dello scommettitore dalla lista delle partite alla scommessa piazzata', subtitle: 'Un sistema operativo ripetibile per scommesse disciplinate', duration: '12 min di lettura' },
    7: { title: '7. Classe Calcio: Costruire un processo professionale di analisi delle partite', subtitle: 'Qualità delle occasioni, contesto xG, formazioni e selezione del mercato per le scommesse sul calcio', duration: '15 min di lettura' },
    8: { title: '8. Classe Ippica: Carte delle corse, ritmo, classe e schemi degli allenatori', subtitle: 'Leggere le carte delle corse a livelli: classe, condizioni, ritmo e intento della scuderia', duration: '15 min di lettura' },
    9: { title: '9. Classe Tennis: Superfici, dinamiche servizio/risposta e vantaggi di calendario', subtitle: 'Analisi specifica del giocatore, dettagli del confronto e selezione del mercato nel tennis', duration: '12 min di lettura' },
    10: { title: '10. Classe Basket: Ritmo, efficienza, rotazioni e timing di mercato', subtitle: 'Capire i possessi, la qualità del tiro, gli effetti delle formazioni e il contesto del calendario', duration: '12 min di lettura' },
    11: { title: '11. Classe Hockey su Ghiaccio: Portieri, squadre speciali e tempo regolamentare vs partita completa', subtitle: 'Scommesse su sport ad alta varianza con consapevolezza del regolamento e creazione di occasioni', duration: '12 min di lettura' },
    12: { title: '12. Classe Baseball: Lanciatori, bullpen, split e logica delle prime cinque riprese', subtitle: 'Costruire dal monte verso l\'esterno con analisi di eventi discreti', duration: '12 min di lettura' },
    13: { title: '13. Classe Football Americano: Contesto infortuni, matchup di stile e selezione del mercato', subtitle: 'Profondità del roster, pensiero a script e scelta del mercato consapevole del meteo', duration: '12 min di lettura' },
    14: { title: '14. Altri sport e nicchie specializzate: Un framework disciplinato per l\'espansione', subtitle: 'Portare il processo in nuovi sport senza diventare imprudenti', duration: '10 min di lettura' },
    15: { title: '15. Masterclass tipi di scommessa: Quando usare ogni mercato e quando lasciarlo', subtitle: 'Scelta strategica del mercato come competenza professionale separata', duration: '12 min di lettura' },
    16: { title: '16. Costruire un taccuino personale delle scommesse, registro delle decisioni e registro delle revisioni', subtitle: 'Creare una traccia delle decisioni che il tuo io futuro può verificare', duration: '10 min di lettura' },
    17: { title: '17. Rivedere le prestazioni, mantenere i registri e imparare dai risultati', subtitle: 'Costruire un sistema di revisione che protegge dal bias narrativo', duration: '10 min di lettura' },
    18: { title: '18. Psicologia, disciplina, controllo del tilt e routine professionali', subtitle: 'Gestire l\'emozione in modo che non possa dirottare il workflow', duration: '12 min di lettura' },
    19: { title: '19. Standard di gioco più sicuro, consapevolezza della conformità e protezione personale', subtitle: 'Mantenere il controllo e sapere quando non scommettere', duration: '10 min di lettura' },
    20: { title: '20. Esercizi pratici, fogli di lavoro e compiti di valutazione finale', subtitle: 'Convertire la lettura in azione con pratica strutturata', duration: '15 min di lettura' }
  }
}

// Dutch translations
const nlTraining: TrainingTranslations = {
  pageTitle: 'Professionele Wedden Training',
  pageSubtitle: 'Beheers de grondbeginselen van gedisciplineerd, op waarde gebaseerd wedden via ons uitgebreide trainingsprogramma.',
  modulesTitle: 'Trainingsmodules',
  backToTraining: 'Terug naar Training',
  returnToModules: 'Terug naar Alle Modules',
  logOut: 'Uitloggen',
  readTime: 'min leestijd',
  modules: {
    1: { title: '1. Wat effectieve wedders anders doen', subtitle: 'De gedisciplineerde wedder-mentaliteit: onderzoek, waarschijnlijkheid, marktdeelname en professionele standaarden', duration: '15 min leestijd' },
    2: { title: '2. Hoe bookmakers, beurzen en wedmarkten echt werken', subtitle: 'Begrip van marge, prijsmechanismen, scherpe vs zachte boeken en beurslogica', duration: '12 min leestijd' },
    3: { title: '3. Odds, impliciete waarschijnlijkheid en eerlijke prijsstelling', subtitle: 'Beheersing van odds-formaten, waarschijnlijkheidsconversie en het maken van eigen eerlijke lijnen', duration: '10 min leestijd' },
    4: { title: '4. Waarde, verwachte waarde, lijnen vergelijken en sluitingswaarde', subtitle: 'De intellectuele verschuiving van winnaar-selectie naar waarde-zoeken', duration: '12 min leestijd' },
    5: { title: '5. Bankroll-beheer, inzetten en overleven onder variantie', subtitle: 'Het overlevingssysteem dat goede analyse levend houdt', duration: '12 min leestijd' },
    6: { title: '6. De volledige wedder-workflow van wedstrijdlijst naar geplaatste weddenschap', subtitle: 'Een herhaalbaar besturingssysteem voor gedisciplineerd wedden', duration: '12 min leestijd' },
    7: { title: '7. Voetbal Klas: Een professioneel wedstrijdanalyseproces bouwen', subtitle: 'Kansenkwaliteit, xG-context, opstellingen en marktselectie voor voetbalweddenschappen', duration: '15 min leestijd' },
    8: { title: '8. Paardenrennen Klas: Racekaarten, tempo, klasse en trainerspatronen', subtitle: 'Racekaarten in lagen lezen: klasse, condities, tempo en stalintentie', duration: '15 min leestijd' },
    9: { title: '9. Tennis Klas: Ondergronden, serve/return-dynamiek en schemavoordelen', subtitle: 'Spelersspecifieke analyse, matchup-details en marktselectie in tennis', duration: '12 min leestijd' },
    10: { title: '10. Basketbal Klas: Tempo, efficiëntie, rotaties en markttiming', subtitle: 'Begrip van balbezit, schotkwaliteit, opstellingseffecten en schemacontext', duration: '12 min leestijd' },
    11: { title: '11. IJshockey Klas: Keepers, speciale teams en reguliere tijd vs volledige wedstrijd', subtitle: 'Wedden op sport met hoge variantie met afwikkelingsbewustzijn en kansencreatie', duration: '12 min leestijd' },
    12: { title: '12. Honkbal Klas: Werpers, bullpens, splits en eerste-vijf-logica', subtitle: 'Bouwen vanaf de heuvel naar buiten met discrete event-analyse', duration: '12 min leestijd' },
    13: { title: '13. American Football Klas: Blessurecontext, stijl-matchups en marktselectie', subtitle: 'Personeelsdiepte, scriptdenken en weersbewuste marktkeuze', duration: '12 min leestijd' },
    14: { title: '14. Andere sporten en specialistische niches: Een gedisciplineerd kader voor uitbreiding', subtitle: 'Het proces naar nieuwe sporten brengen zonder roekeloos te worden', duration: '10 min leestijd' },
    15: { title: '15. Wedtypes Masterclass: Wanneer elke markt gebruiken en wanneer niet', subtitle: 'Strategische marktkeuze als aparte professionele vaardigheid', duration: '12 min leestijd' },
    16: { title: '16. Een persoonlijk wednotitieboek, beslissingslog en beoordelingsrecord bouwen', subtitle: 'Een beslissingsspoor creëren dat je toekomstige zelf kan controleren', duration: '10 min leestijd' },
    17: { title: '17. Prestaties beoordelen, records bijhouden en leren van resultaten', subtitle: 'Een beoordelingssysteem bouwen dat beschermt tegen narratieve bias', duration: '10 min leestijd' },
    18: { title: '18. Psychologie, discipline, tiltcontrole en professionele routines', subtitle: 'Emotie beheren zodat het de workflow niet kan kapen', duration: '12 min leestijd' },
    19: { title: '19. Veiliger gokken standaarden, compliance-bewustzijn en persoonlijke bescherming', subtitle: 'Controle behouden en weten wanneer niet te wedden', duration: '10 min leestijd' },
    20: { title: '20. Praktische oefeningen, werkbladen en afsluitende beoordelingstaken', subtitle: 'Lezen omzetten in doen met gestructureerde praktijk', duration: '15 min leestijd' }
  }
}

// Polish translations
const plTraining: TrainingTranslations = {
  pageTitle: 'Profesjonalne Szkolenie Zakładów',
  pageSubtitle: 'Opanuj podstawy zdyscyplinowanych zakładów opartych na wartości dzięki naszemu kompleksowemu programowi szkoleniowemu.',
  modulesTitle: 'Moduły Szkoleniowe',
  backToTraining: 'Powrót do Szkolenia',
  returnToModules: 'Powrót do Wszystkich Modułów',
  logOut: 'Wyloguj',
  readTime: 'min czytania',
  modules: {
    1: { title: '1. Co skuteczni typerzy robią inaczej', subtitle: 'Mentalność zdyscyplinowanego typera: badania, prawdopodobieństwo, uczestnictwo w rynku i standardy profesjonalne', duration: '15 min czytania' },
    2: { title: '2. Jak naprawdę działają bukmacherzy, giełdy i rynki zakładów', subtitle: 'Zrozumienie marży, mechaniki cen, ostrych vs miękkich buków i logiki giełd', duration: '12 min czytania' },
    3: { title: '3. Kursy, implikowane prawdopodobieństwo i uczciwa wycena', subtitle: 'Opanowanie formatów kursów, konwersji prawdopodobieństwa i tworzenia własnych uczciwych linii', duration: '10 min czytania' },
    4: { title: '4. Wartość, wartość oczekiwana, porównywanie linii i wartość linii zamknięcia', subtitle: 'Intelektualna zmiana od wybierania zwycięzców do szukania wartości', duration: '12 min czytania' },
    5: { title: '5. Zarządzanie bankrollem, stawki i przetrwanie przy wariancji', subtitle: 'System przetrwania, który utrzymuje dobrą analizę przy życiu', duration: '12 min czytania' },
    6: { title: '6. Pełny workflow typera od listy meczów do postawionego zakładu', subtitle: 'Powtarzalny system operacyjny dla zdyscyplinowanego typowania', duration: '12 min czytania' },
    7: { title: '7. Klasa Piłki Nożnej: Budowanie profesjonalnego procesu analizy meczów', subtitle: 'Jakość szans, kontekst xG, składy i wybór rynku dla zakładów piłkarskich', duration: '15 min czytania' },
    8: { title: '8. Klasa Wyścigów Konnych: Karty wyścigów, tempo, klasa i wzorce trenerów', subtitle: 'Czytanie kart wyścigów warstwowo: klasa, warunki, tempo i intencja stajni', duration: '15 min czytania' },
    9: { title: '9. Klasa Tenisa: Nawierzchnie, dynamika serwis/return i przewagi kalendarzowe', subtitle: 'Analiza specyficzna dla gracza, szczegóły konfrontacji i wybór rynku w tenisie', duration: '12 min czytania' },
    10: { title: '10. Klasa Koszykówki: Tempo, efektywność, rotacje i timing rynkowy', subtitle: 'Zrozumienie posiadań, jakości rzutów, efektów składów i kontekstu kalendarza', duration: '12 min czytania' },
    11: { title: '11. Klasa Hokeja na Lodzie: Bramkarze, zespoły specjalne i czas regulaminowy vs pełny mecz', subtitle: 'Zakłady na sport o wysokiej wariancji z świadomością rozliczenia i tworzeniem szans', duration: '12 min czytania' },
    12: { title: '12. Klasa Baseballu: Miotacze, bullpeny, splity i logika pierwszych pięciu', subtitle: 'Budowanie od kopca na zewnątrz z analizą dyskretnych zdarzeń', duration: '12 min czytania' },
    13: { title: '13. Klasa Futbolu Amerykańskiego: Kontekst kontuzji, matchupy stylów i wybór rynku', subtitle: 'Głębokość kadry, myślenie skryptowe i wybór rynku świadomy pogody', duration: '12 min czytania' },
    14: { title: '14. Inne sporty i specjalistyczne nisze: Zdyscyplinowane ramy dla ekspansji', subtitle: 'Przenoszenie procesu do nowych sportów bez stawania się lekkomyślnym', duration: '10 min czytania' },
    15: { title: '15. Masterclass typów zakładów: Kiedy używać którego rynku i kiedy odpuścić', subtitle: 'Strategiczny wybór rynku jako oddzielna umiejętność profesjonalna', duration: '12 min czytania' },
    16: { title: '16. Budowanie osobistego notesu zakładowego, dziennika decyzji i rejestru przeglądów', subtitle: 'Tworzenie śladu decyzji, który przyszły ty może audytować', duration: '10 min czytania' },
    17: { title: '17. Przegląd wyników, prowadzenie rejestrów i nauka z rezultatów', subtitle: 'Budowanie systemu przeglądu chroniącego przed stronniczością narracyjną', duration: '10 min czytania' },
    18: { title: '18. Psychologia, dyscyplina, kontrola tiltu i profesjonalne rutyny', subtitle: 'Zarządzanie emocjami, aby nie mogły przejąć workflow', duration: '12 min czytania' },
    19: { title: '19. Standardy bezpieczniejszego hazardu, świadomość zgodności i ochrona osobista', subtitle: 'Utrzymanie kontroli i wiedza, kiedy nie stawiać', duration: '10 min czytania' },
    20: { title: '20. Ćwiczenia praktyczne, arkusze robocze i zadania oceny końcowej', subtitle: 'Przekształcanie czytania w działanie ze strukturyzowaną praktyką', duration: '15 min czytania' }
  }
}

// Swedish translations
const svTraining: TrainingTranslations = {
  pageTitle: 'Professionell Bettingutbildning',
  pageSubtitle: 'Bemästra grunderna i disciplinerad, värdebaserad betting genom vårt omfattande utbildningsprogram.',
  modulesTitle: 'Utbildningsmoduler',
  backToTraining: 'Tillbaka till Utbildning',
  returnToModules: 'Tillbaka till Alla Moduler',
  logOut: 'Logga ut',
  readTime: 'min läsning',
  modules: {
    1: { title: '1. Vad effektiva bettare gör annorlunda', subtitle: 'Den disciplinerade bettarens tankesätt: research, sannolikhet, marknadsdeltagande och professionella standarder', duration: '15 min läsning' },
    2: { title: '2. Hur spelbolag, börser och bettingmarknader verkligen fungerar', subtitle: 'Förståelse av marginal, prismekanik, skarpa vs mjuka bolag och börslogik', duration: '12 min läsning' },
    3: { title: '3. Odds, implicit sannolikhet och rättvis prissättning', subtitle: 'Behärska oddsformat, sannolikhetskonvertering och skapa egna rättvisa linjer', duration: '10 min läsning' },
    4: { title: '4. Värde, förväntat värde, linjejämförelse och stängningslinjens värde', subtitle: 'Den intellektuella förändringen från att välja vinnare till att söka värde', duration: '12 min läsning' },
    5: { title: '5. Bankroll-hantering, insatser och överlevnad under varians', subtitle: 'Överlevnadssystemet som håller bra analys vid liv', duration: '12 min läsning' },
    6: { title: '6. Det fullständiga bettararbetsflödet från matchlista till placerat spel', subtitle: 'Ett repeterbart operativsystem för disciplinerad betting', duration: '12 min läsning' },
    7: { title: '7. Fotbollsklass: Bygga en professionell matchanalysprocess', subtitle: 'Chansens kvalitet, xG-kontext, laguppställningar och marknadsval för fotbollsspel', duration: '15 min läsning' },
    8: { title: '8. Hästkapplöpningsklass: Loppkort, tempo, klass och tränarmönster', subtitle: 'Läsa loppkort i lager: klass, förhållanden, tempo och stallavsikt', duration: '15 min läsning' },
    9: { title: '9. Tennisklass: Underlag, serve/return-dynamik och schemafördelar', subtitle: 'Spelarspecifik analys, matchup-detaljer och marknadsval i tennis', duration: '12 min läsning' },
    10: { title: '10. Basketklass: Tempo, effektivitet, rotationer och marknadstiming', subtitle: 'Förståelse av bollinnehav, skottkvalitet, laguppställningseffekter och schemakontext', duration: '12 min läsning' },
    11: { title: '11. Ishockeyklass: Målvakter, specialteam och ordinarie tid vs full match', subtitle: 'Betting på sport med hög varians med avräkningsmedvetenhet och chansskapande', duration: '12 min läsning' },
    12: { title: '12. Baseballklass: Pitchers, bullpens, splits och första-fem-logik', subtitle: 'Bygga från kulle utåt med diskret händelseanalys', duration: '12 min läsning' },
    13: { title: '13. Amerikansk fotbollsklass: Skadekontext, stilmatchuper och marknadsval', subtitle: 'Trupp djup, skripttänkande och vädermedvetet marknadsval', duration: '12 min läsning' },
    14: { title: '14. Andra sporter och specialistnischer: Ett disciplinerat ramverk för expansion', subtitle: 'Föra processen till nya sporter utan att bli vårdslös', duration: '10 min läsning' },
    15: { title: '15. Speltyper Masterclass: När man använder varje marknad och när man avstår', subtitle: 'Strategiskt marknadsval som separat professionell färdighet', duration: '12 min läsning' },
    16: { title: '16. Bygga en personlig bettinganteckningsbok, beslutslogg och granskningsregister', subtitle: 'Skapa ett beslutsspår som ditt framtida jag kan granska', duration: '10 min läsning' },
    17: { title: '17. Granska prestanda, underhålla register och lära av resultat', subtitle: 'Bygga ett granskningssystem som skyddar mot narrativ bias', duration: '10 min läsning' },
    18: { title: '18. Psykologi, disciplin, tilt-kontroll och professionella rutiner', subtitle: 'Hantera känslor så de inte kan kapa arbetsflödet', duration: '12 min läsning' },
    19: { title: '19. Säkrare spelstandarder, regelefterlevnadsmedvetenhet och personligt skydd', subtitle: 'Behålla kontrollen och veta när man inte ska spela', duration: '10 min läsning' },
    20: { title: '20. Praktiska övningar, arbetsblad och avslutande bedömningsuppgifter', subtitle: 'Omvandla läsning till handling med strukturerad övning', duration: '15 min läsning' }
  }
}

// Romanian translations
const roTraining: TrainingTranslations = {
  pageTitle: 'Formare Profesională în Pariuri',
  pageSubtitle: 'Stăpânește fundamentele pariurilor disciplinate, bazate pe valoare, prin programul nostru cuprinzător de formare.',
  modulesTitle: 'Module de Formare',
  backToTraining: 'Înapoi la Formare',
  returnToModules: 'Înapoi la Toate Modulele',
  logOut: 'Deconectare',
  readTime: 'min de citit',
  modules: {
    1: { title: '1. Ce fac diferit pariorii eficienți', subtitle: 'Mentalitatea pariorului disciplinat: cercetare, probabilitate, participare pe piață și standarde profesionale', duration: '15 min de citit' },
    2: { title: '2. Cum funcționează cu adevărat casele de pariuri, bursele și piețele', subtitle: 'Înțelegerea marjei, mecanicii prețurilor, case dure vs moi și logicii burselor', duration: '12 min de citit' },
    3: { title: '3. Cote, probabilitate implicită și prețuri corecte', subtitle: 'Stăpânirea formatelor de cote, conversia probabilității și crearea propriilor linii corecte', duration: '10 min de citit' },
    4: { title: '4. Valoare, valoare așteptată, compararea liniilor și valoarea liniei de închidere', subtitle: 'Schimbarea intelectuală de la alegerea câștigătorilor la căutarea valorii', duration: '12 min de citit' },
    5: { title: '5. Gestionarea bankroll-ului, mizele și supraviețuirea sub varianță', subtitle: 'Sistemul de supraviețuire care menține analiza bună în viață', duration: '12 min de citit' },
    6: { title: '6. Fluxul de lucru complet al pariorului de la lista de meciuri la pariul plasat', subtitle: 'Un sistem de operare repetabil pentru pariuri disciplinate', duration: '12 min de citit' },
    7: { title: '7. Clasa Fotbal: Construirea unui proces profesional de analiză a meciurilor', subtitle: 'Calitatea șanselor, contextul xG, formații și selecția pieței pentru pariuri pe fotbal', duration: '15 min de citit' },
    8: { title: '8. Clasa Curse de Cai: Carduri de cursă, ritm, clasă și tipare ale antrenorilor', subtitle: 'Citirea cardurilor de cursă în straturi: clasă, condiții, ritm și intenția grajdului', duration: '15 min de citit' },
    9: { title: '9. Clasa Tenis: Suprafețe, dinamica serviciu/retur și avantaje de calendar', subtitle: 'Analiza specifică jucătorului, detalii de confruntare și selecția pieței în tenis', duration: '12 min de citit' },
    10: { title: '10. Clasa Baschet: Ritm, eficiență, rotații și timing de piață', subtitle: 'Înțelegerea posesiilor, calității șuturilor, efectelor formațiilor și contextului calendarului', duration: '12 min de citit' },
    11: { title: '11. Clasa Hochei pe Gheață: Portari, echipe speciale și timp regulamentar vs meci complet', subtitle: 'Pariuri pe sport cu varianță mare cu conștientizarea decontării și crearea șanselor', duration: '12 min de citit' },
    12: { title: '12. Clasa Baseball: Aruncători, bullpen-uri, split-uri și logica primelor cinci reprize', subtitle: 'Construirea de la deal în afară cu analiza evenimentelor discrete', duration: '12 min de citit' },
    13: { title: '13. Clasa Fotbal American: Context accidentări, confruntări de stil și selecția pieței', subtitle: 'Adâncimea lotului, gândirea de scenariu și alegerea pieței conștientă de vreme', duration: '12 min de citit' },
    14: { title: '14. Alte sporturi și nișe de specialitate: Un cadru disciplinat pentru expansiune', subtitle: 'Aducerea procesului în sporturi noi fără a deveni imprudent', duration: '10 min de citit' },
    15: { title: '15. Masterclass tipuri de pariuri: Când să folosești fiecare piață și când să renunți', subtitle: 'Alegerea strategică a pieței ca abilitate profesională separată', duration: '12 min de citit' },
    16: { title: '16. Construirea unui carnețel personal de pariuri, jurnal de decizii și registru de revizuire', subtitle: 'Crearea unei urme de decizii pe care viitorul tău poate să o auditeze', duration: '10 min de citit' },
    17: { title: '17. Revizuirea performanței, menținerea înregistrărilor și învățarea din rezultate', subtitle: 'Construirea unui sistem de revizuire care protejează împotriva prejudecăților narative', duration: '10 min de citit' },
    18: { title: '18. Psihologie, disciplină, controlul tilt-ului și rutine profesionale', subtitle: 'Gestionarea emoției astfel încât să nu poată deturna fluxul de lucru', duration: '12 min de citit' },
    19: { title: '19. Standarde de joc mai sigur, conștientizare a conformității și protecție personală', subtitle: 'Menținerea controlului și știind când să nu pariezi', duration: '10 min de citit' },
    20: { title: '20. Exerciții practice, foi de lucru și sarcini de evaluare finală', subtitle: 'Convertirea cititului în acțiune cu practică structurată', duration: '15 min de citit' }
  }
}

// Chinese Simplified translations
const zhCNTraining: TrainingTranslations = {
  pageTitle: '专业投注培训',
  pageSubtitle: '通过我们全面的培训计划,掌握纪律严明、基于价值的投注基础。',
  modulesTitle: '培训模块',
  backToTraining: '返回培训',
  returnToModules: '返回所有模块',
  logOut: '退出',
  readTime: '分钟阅读',
  modules: {
    1: { title: '1. 有效投注者的不同之处', subtitle: '纪律投注者的心态：研究、概率、市场参与和专业标准', duration: '15分钟阅读' },
    2: { title: '2. 博彩公司、交易所和投注市场如何真正运作', subtitle: '理解利润、定价机制、硬盘vs软盘和交易所逻辑', duration: '12分钟阅读' },
    3: { title: '3. 赔率、隐含概率和公平定价', subtitle: '掌握赔率格式、概率转换和创建自己的公平线', duration: '10分钟阅读' },
    4: { title: '4. 价值、期望值、线路比较和收盘线价值', subtitle: '从挑选赢家到寻找价值的思维转变', duration: '12分钟阅读' },
    5: { title: '5. 资金管理、下注和在方差下生存', subtitle: '保持良好分析活力的生存系统', duration: '12分钟阅读' },
    6: { title: '6. 从赛事列表到下注的完整投注者工作流程', subtitle: '可重复的纪律投注操作系统', duration: '12分钟阅读' },
    7: { title: '7. 足球课：建立专业的比赛分析流程', subtitle: '机会质量、xG上下文、阵容和足球投注的市场选择', duration: '15分钟阅读' },
    8: { title: '8. 赛马课：赛卡、节奏、等级和练马师模式', subtitle: '分层阅读赛卡：等级、条件、节奏和马房意图', duration: '15分钟阅读' },
    9: { title: '9. 网球课：场地、发球/接发球动态和赛程优势', subtitle: '球员特定分析、对阵细节和网球市场选择', duration: '12分钟阅读' },
    10: { title: '10. 篮球课：节奏、效率、轮换和市场时机', subtitle: '理解回合、投篮质量、阵容效果和赛程背景', duration: '12分钟阅读' },
    11: { title: '11. 冰球课：守门员、特殊球队和常规时间vs全场', subtitle: '高方差运动投注的结算意识和机会创造', duration: '12分钟阅读' },
    12: { title: '12. 棒球课：投手、牛棚、分割和前五局逻辑', subtitle: '从投手丘向外构建的离散事件分析', duration: '12分钟阅读' },
    13: { title: '13. 美式足球课：伤病背景、风格对决和市场选择', subtitle: '阵容深度、剧本思维和天气感知的市场选择', duration: '12分钟阅读' },
    14: { title: '14. 其他运动和专业细分：扩展的纪律框架', subtitle: '将流程带入新运动而不变得鲁莽', duration: '10分钟阅读' },
    15: { title: '15. 投注类型大师课：何时使用每个市场，何时放弃', subtitle: '作为独立专业技能的战略市场选择', duration: '12分钟阅读' },
    16: { title: '16. 建立个人投注笔记本、决策日志和审查记录', subtitle: '创建未来的你可以审计的决策轨迹', duration: '10分钟阅读' },
    17: { title: '17. 审查表现、维护记录和从结果中学习', subtitle: '建立防止叙事偏见的审查系统', duration: '10分钟阅读' },
    18: { title: '18. 心理学、纪律、情绪控制和专业例程', subtitle: '管理情绪使其无法劫持工作流程', duration: '12分钟阅读' },
    19: { title: '19. 更安全赌博标准、合规意识和个人保护', subtitle: '保持控制并知道何时不投注', duration: '10分钟阅读' },
    20: { title: '20. 实践练习、工作表和最终评估任务', subtitle: '通过结构化练习将阅读转化为行动', duration: '15分钟阅读' }
  }
}

// Japanese translations
const jaTraining: TrainingTranslations = {
  pageTitle: 'プロフェッショナルベッティングトレーニング',
  pageSubtitle: '当社の包括的なトレーニングプログラムを通じて、規律あるバリューベースのベッティングの基礎をマスターしてください。',
  modulesTitle: 'トレーニングモジュール',
  backToTraining: 'トレーニングに戻る',
  returnToModules: 'すべてのモジュールに戻る',
  logOut: 'ログアウト',
  readTime: '分で読める',
  modules: {
    1: { title: '1. 効果的なベッターの違い', subtitle: '規律あるベッターのマインドセット：リサーチ、確率、市場参加、プロフェッショナルスタンダード', duration: '15分で読める' },
    2: { title: '2. ブックメーカー、取引所、ベッティング市場の仕組み', subtitle: 'マージン、価格メカニズム、シャープvsソフトブック、取引所ロジックの理解', duration: '12分で読める' },
    3: { title: '3. オッズ、暗示確率、公正価格設定', subtitle: 'オッズフォーマット、確率変換、独自の公正ラインの作成をマスター', duration: '10分で読める' },
    4: { title: '4. バリュー、期待値、ライン比較、クロージングラインバリュー', subtitle: '勝者選びからバリュー探しへの知的シフト', duration: '12分で読める' },
    5: { title: '5. バンクロール管理、ステーキング、バリアンス下での生存', subtitle: '良い分析を生かし続けるサバイバルシステム', duration: '12分で読める' },
    6: { title: '6. 試合リストからベットまでの完全なベッターワークフロー', subtitle: '規律あるベッティングのための再現可能なオペレーティングシステム', duration: '12分で読める' },
    7: { title: '7. サッカークラス：プロの試合分析プロセスの構築', subtitle: 'チャンスの質、xGコンテキスト、ラインアップ、サッカーベッティングの市場選択', duration: '15分で読める' },
    8: { title: '8. 競馬クラス：レースカード、ペース、クラス、調教師パターン', subtitle: 'レースカードをレイヤーで読む：クラス、コンディション、ペース、厩舎の意図', duration: '15分で読める' },
    9: { title: '9. テニスクラス：サーフェス、サーブ/リターンダイナミクス、スケジュールエッジ', subtitle: 'プレーヤー固有の分析、マッチアップの詳細、テニスの市場選択', duration: '12分で読める' },
    10: { title: '10. バスケットボールクラス：ペース、効率、ローテーション、マーケットタイミング', subtitle: 'ポゼッション、シュート品質、ラインアップ効果、スケジュールコンテキストの理解', duration: '12分で読める' },
    11: { title: '11. アイスホッケークラス：ゴーリー、スペシャルチーム、レギュレーションvsフルゲーム', subtitle: '決済意識とチャンス創出による高バリアンススポーツベッティング', duration: '12分で読める' },
    12: { title: '12. 野球クラス：ピッチャー、ブルペン、スプリット、ファーストファイブロジック', subtitle: 'マウンドから外に向けた離散イベント分析', duration: '12分で読める' },
    13: { title: '13. アメリカンフットボールクラス：怪我のコンテキスト、スタイルマッチアップ、市場選択', subtitle: 'ロスターの深さ、スクリプト思考、天候を意識した市場選択', duration: '12分で読める' },
    14: { title: '14. 他のスポーツと専門ニッチ：拡張のための規律あるフレームワーク', subtitle: '無謀にならずにプロセスを新しいスポーツに持ち込む', duration: '10分で読める' },
    15: { title: '15. ベットタイプマスタークラス：各市場をいつ使い、いつ避けるか', subtitle: '別個のプロフェッショナルスキルとしての戦略的市場選択', duration: '12分で読める' },
    16: { title: '16. 個人のベッティングノート、決定ログ、レビュー記録の構築', subtitle: '将来の自分が監査できる決定の軌跡を作成', duration: '10分で読める' },
    17: { title: '17. パフォーマンスのレビュー、記録の維持、結果からの学習', subtitle: 'ナラティブバイアスから保護するレビューシステムの構築', duration: '10分で読める' },
    18: { title: '18. 心理学、規律、ティルトコントロール、プロフェッショナルルーティン', subtitle: '感情がワークフローを乗っ取れないように管理', duration: '12分で読める' },
    19: { title: '19. より安全なギャンブル基準、コンプライアンス意識、個人保護', subtitle: 'コントロールを維持し、ベットすべきでない時を知る', duration: '10分で読める' },
    20: { title: '20. 実践演習、ワークシート、最終評価タスク', subtitle: '構造化された練習で読書を行動に変換', duration: '15分で読める' }
  }
}

// Korean translations
const koTraining: TrainingTranslations = {
  pageTitle: '전문 베팅 교육',
  pageSubtitle: '포괄적인 교육 프로그램을 통해 규율 있고 가치 기반의 베팅 기본을 마스터하세요.',
  modulesTitle: '교육 모듈',
  backToTraining: '교육으로 돌아가기',
  returnToModules: '모든 모듈로 돌아가기',
  logOut: '로그아웃',
  readTime: '분 읽기',
  modules: {
    1: { title: '1. 효과적인 베터들의 차별점', subtitle: '규율 있는 베터의 마인드셋: 리서치, 확률, 시장 참여 및 전문 표준', duration: '15분 읽기' },
    2: { title: '2. 북메이커, 거래소 및 베팅 시장의 실제 작동 방식', subtitle: '마진, 가격 메커니즘, 샤프 vs 소프트 북 및 거래소 논리 이해', duration: '12분 읽기' },
    3: { title: '3. 배당률, 내재 확률 및 공정 가격 책정', subtitle: '배당률 형식, 확률 변환 및 자신만의 공정 라인 만들기 마스터', duration: '10분 읽기' },
    4: { title: '4. 가치, 기대값, 라인 비교 및 클로징 라인 가치', subtitle: '승자 선택에서 가치 찾기로의 지적 전환', duration: '12분 읽기' },
    5: { title: '5. 뱅크롤 관리, 스테이킹 및 분산 하에서의 생존', subtitle: '좋은 분석을 살아있게 유지하는 생존 시스템', duration: '12분 읽기' },
    6: { title: '6. 경기 목록에서 베팅까지의 전체 베터 워크플로우', subtitle: '규율 있는 베팅을 위한 반복 가능한 운영 시스템', duration: '12분 읽기' },
    7: { title: '7. 축구 클래스: 전문적인 경기 분석 프로세스 구축', subtitle: '기회 품질, xG 컨텍스트, 라인업 및 축구 베팅을 위한 시장 선택', duration: '15분 읽기' },
    8: { title: '8. 경마 클래스: 레이스 카드, 페이스, 클래스 및 조련사 패턴', subtitle: '레이스 카드를 레이어로 읽기: 클래스, 조건, 페이스 및 마사의 의도', duration: '15분 읽기' },
    9: { title: '9. 테니스 클래스: 코트, 서브/리턴 역학 및 일정 이점', subtitle: '선수 특정 분석, 매치업 세부사항 및 테니스 시장 선택', duration: '12분 읽기' },
    10: { title: '10. 농구 클래스: 페이스, 효율성, 로테이션 및 시장 타이밍', subtitle: '포제션, 슛 품질, 라인업 효과 및 일정 컨텍스트 이해', duration: '12분 읽기' },
    11: { title: '11. 아이스하키 클래스: 골리, 스페셜 팀 및 정규 시간 vs 풀 게임', subtitle: '정산 인식과 기회 창출이 있는 고분산 스포츠 베팅', duration: '12분 읽기' },
    12: { title: '12. 야구 클래스: 투수, 불펜, 스플릿 및 선발 5이닝 로직', subtitle: '마운드에서 바깥으로의 이산 이벤트 분석 구축', duration: '12분 읽기' },
    13: { title: '13. 미식축구 클래스: 부상 컨텍스트, 스타일 매치업 및 시장 선택', subtitle: '로스터 깊이, 스크립트 사고 및 날씨 인식 시장 선택', duration: '12분 읽기' },
    14: { title: '14. 다른 스포츠 및 전문 틈새: 확장을 위한 규율 있는 프레임워크', subtitle: '무모해지지 않고 새로운 스포츠에 프로세스 도입', duration: '10분 읽기' },
    15: { title: '15. 베팅 유형 마스터클래스: 각 시장을 언제 사용하고 언제 피해야 하는지', subtitle: '별도의 전문 기술로서의 전략적 시장 선택', duration: '12분 읽기' },
    16: { title: '16. 개인 베팅 노트북, 결정 로그 및 검토 기록 구축', subtitle: '미래의 자신이 감사할 수 있는 결정 흔적 만들기', duration: '10분 읽기' },
    17: { title: '17. 성과 검토, 기록 유지 및 결과에서 배우기', subtitle: '내러티브 편향으로부터 보호하는 검토 시스템 구축', duration: '10분 읽기' },
    18: { title: '18. 심리학, 규율, 틸트 컨트롤 및 전문 루틴', subtitle: '감정이 워크플로우를 납치하지 못하도록 관리', duration: '12분 읽기' },
    19: { title: '19. 더 안전한 도박 표준, 규정 준수 인식 및 개인 보호', subtitle: '통제력 유지 및 베팅하지 말아야 할 때 알기', duration: '10분 읽기' },
    20: { title: '20. 실습 연습, 워크시트 및 최종 평가 과제', subtitle: '구조화된 연습으로 읽기를 행동으로 전환', duration: '15분 읽기' }
  }
}

// Arabic translations
const arTraining: TrainingTranslations = {
  pageTitle: 'تدريب الرهان المحترف',
  pageSubtitle: 'أتقن أساسيات الرهان المنضبط والقائم على القيمة من خلال برنامجنا التدريبي الشامل.',
  modulesTitle: 'وحدات التدريب',
  backToTraining: 'العودة إلى التدريب',
  returnToModules: 'العودة إلى جميع الوحدات',
  logOut: 'تسجيل الخروج',
  readTime: 'دقيقة قراءة',
  modules: {
    1: { title: '1. ما يفعله المراهنون الفعالون بشكل مختلف', subtitle: 'عقلية المراهن المنضبط: البحث والاحتمالية والمشاركة في السوق والمعايير المهنية', duration: '15 دقيقة قراءة' },
    2: { title: '2. كيف تعمل شركات المراهنات والبورصات والأسواق حقاً', subtitle: 'فهم الهامش وآليات التسعير والكتب الحادة مقابل اللينة ومنطق البورصة', duration: '12 دقيقة قراءة' },
    3: { title: '3. الاحتمالات والاحتمالية الضمنية والتسعير العادل', subtitle: 'إتقان تنسيقات الاحتمالات وتحويل الاحتمالية وإنشاء خطوطك العادلة الخاصة', duration: '10 دقيقة قراءة' },
    4: { title: '4. القيمة والقيمة المتوقعة ومقارنة الخطوط وقيمة خط الإغلاق', subtitle: 'التحول الفكري من اختيار الفائزين إلى البحث عن القيمة', duration: '12 دقيقة قراءة' },
    5: { title: '5. إدارة رأس المال والرهانات والبقاء تحت التباين', subtitle: 'نظام البقاء الذي يبقي التحليل الجيد حياً', duration: '12 دقيقة قراءة' },
    6: { title: '6. سير عمل المراهن الكامل من قائمة المباريات إلى الرهان الموضوع', subtitle: 'نظام تشغيل قابل للتكرار للمراهنات المنضبطة', duration: '12 دقيقة قراءة' },
    7: { title: '7. فصل كرة القدم: بناء عملية تحليل مباريات احترافية', subtitle: 'جودة الفرص وسياق xG والتشكيلات واختيار السوق لمراهنات كرة القدم', duration: '15 دقيقة قراءة' },
    8: { title: '8. فصل سباق الخيل: بطاقات السباق والإيقاع والفئة وأنماط المدرب', subtitle: 'قراءة بطاقات السباق في طبقات: الفئة والظروف والإيقاع ونية الإسطبل', duration: '15 دقيقة قراءة' },
    9: { title: '9. فصل التنس: الأسطح وديناميكيات الإرسال/الاستقبال ومزايا الجدول', subtitle: 'تحليل خاص باللاعب وتفاصيل المواجهة واختيار السوق في التنس', duration: '12 دقيقة قراءة' },
    10: { title: '10. فصل كرة السلة: الإيقاع والكفاءة والتناوب وتوقيت السوق', subtitle: 'فهم الاستحواذات وجودة التسديد وتأثيرات التشكيلة وسياق الجدول', duration: '12 دقيقة قراءة' },
    11: { title: '11. فصل هوكي الجليد: الحراس والفرق الخاصة والوقت الأصلي مقابل المباراة الكاملة', subtitle: 'المراهنة على رياضة عالية التباين مع الوعي بالتسوية وخلق الفرص', duration: '12 دقيقة قراءة' },
    12: { title: '12. فصل البيسبول: الرماة وبولبن والانقسامات ومنطق الخمس الأولى', subtitle: 'البناء من التل للخارج مع تحليل الأحداث المنفصلة', duration: '12 دقيقة قراءة' },
    13: { title: '13. فصل كرة القدم الأمريكية: سياق الإصابات ومواجهات الأسلوب واختيار السوق', subtitle: 'عمق القائمة والتفكير في السيناريو واختيار السوق الواعي بالطقس', duration: '12 دقيقة قراءة' },
    14: { title: '14. رياضات أخرى ومجالات متخصصة: إطار منضبط للتوسع', subtitle: 'نقل العملية إلى رياضات جديدة دون أن تصبح متهوراً', duration: '10 دقيقة قراءة' },
    15: { title: '15. ماستركلاس أنواع الرهان: متى تستخدم كل سوق ومتى تتركه', subtitle: 'اختيار السوق الاستراتيجي كمهارة مهنية منفصلة', duration: '12 دقيقة قراءة' },
    16: { title: '16. بناء دفتر مراهنات شخصي وسجل قرارات وسجل مراجعة', subtitle: 'إنشاء مسار قرار يمكن لنفسك المستقبلية تدقيقه', duration: '10 دقيقة قراءة' },
    17: { title: '17. مراجعة الأداء والحفاظ على السجلات والتعلم من النتائج', subtitle: 'بناء نظام مراجعة يحمي من التحيز السردي', duration: '10 دقيقة قراءة' },
    18: { title: '18. علم النفس والانضباط والتحكم في الميل والروتين المهني', subtitle: 'إدارة المشاعر حتى لا تتمكن من اختطاف سير العمل', duration: '12 دقيقة قراءة' },
    19: { title: '19. معايير القمار الآمن والوعي بالامتثال والحماية الشخصية', subtitle: 'الحفاظ على السيطرة ومعرفة متى لا تراهن', duration: '10 دقيقة قراءة' },
    20: { title: '20. تمارين عملية وأوراق عمل ومهام التقييم النهائي', subtitle: 'تحويل القراءة إلى فعل مع ممارسة منظمة', duration: '15 دقيقة قراءة' }
  }
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
