import { TrainingModule } from '@/lib/training-content'

export const trainingModulesHU: TrainingModule[] = [
  {
    id: 1,
    title: 'Mit Csinálnak Másképp a Hatékony Fogadók',
    slug: 'mit-csinalnak-maskepp-a-hatekony-fogadok',
    description: 'A sikeres fogadókat a tömegből megkülönböztető gondolkodásmód és szokások megértése.',
    sections: [
      {
        title: 'A Piaci Résztvevő Gondolkodásmódja',
        content: `A hatékony fogadók a fogadást piaci részvételnek tekintik, nem szerencsejátéknak. A fogadási piacokat pénzügyi eszközökként kezelik, ahol az információ, az időzítés és a fegyelem fontosabb, mint a szerencse vagy a megérzés.

Ahelyett, hogy azt kérdeznék "Ki nyer?", azt kérdezik "Az ár pontosan tükrözi-e a valószínűséget?" Ez az elmozdulás átalakítja a tevékenységet előrejelzésből értékeléssé—és ez a különbség határozza meg, ki virágzik hosszú távon.`
      },
      {
        title: 'Szelektivitás a Cselekvés Felett',
        content: `A legtöbb hobbi fogadó okokat keres a fogadásra. A hatékony fogadók okokat keresnek a kihagyásra.

Megértik, hogy ritkábban, de nagyobb meggyőződéssel fogadni a jövedelmezőség útja. Tudják, hogy minden fogadásnak meg kell felelnie egy világos kritériumnak—és ha nem felel meg, nem történik semmi. A kihagyás aktív döntés, nem gyengeség.`
      },
      {
        title: 'A Valódi Munkakör Leírása',
        content: `Ha egy mondatban kellene összefoglalni a feladatot: találj hibásan árazott esélyeket, fogadj amikor az odds a te javadra áll, és ne csinálj semmi mást.

Ez egyszerűen hangzik—de érzelmi kontrollt, piacértést és következetességet igényel. A legtöbb ember nem tud nyugton ülni. Akciót, izgalmat vagy megerősítést akarnak. A fegyelmezett fogadó értéket akar—és csak értéket.`
      },
      {
        title: 'Mi Különbözteti Meg a Fegyelmezett Fogadókat',
        content: `Nem az intelligencia vagy a titkos információkhoz való hozzáférés. A mértékletesség.

A képesség, hogy:
- Ne üldözd a veszteségeket
- Ne növeld érzelmileg a téteket nyerés után
- Ne fogadj unalomból
- Ne add fel a rendszert egy rossz hét után

Ezek nem látványos képességek. De ezek azok a viselkedésformák, amelyek elválasztják a kevés kitartót a sok távozótól.`
      },
      {
        title: 'Miért Szándékosan Hosszú Ez a Kézikönyv',
        content: `Ez a csomag 20 szakaszt tartalmaz, és ennek oka van: a fogadás egy diszciplína. Mélysége van.

Az anyag nem arra készült, hogy átfussunk rajta—arra, hogy újraolvassuk. Néhány koncepció csak hónapok gyakorlása után lesz értelmes. Ez rendben van.

Lépésről lépésre haladj. Olvasd újra. Jegyzetelj. Építs egy rendszert, ami működik a te sportodhoz, az árfekvésedhez és a gondolkodási stílusodhoz.`
      },
      {
        title: 'A Fogadó Működési Ciklusa',
        content: `Mind a 20 modul e ciklus köré épül:

1. Kutatás (mérkőzések, hírek, statisztikák)
2. Értékelés (modell vagy ítélet)
3. Árösszehasonlítás (odds vs valószínűségi becslés)
4. Döntés (fogadás, kihagyás vagy várakozás)
5. Végrehajtás (elhelyezés, időzítés, tét)
6. Áttekintés (nyomon követés, rögzítés, elemzés)

Minden szakasz ennek a sorrendnek egy darabját bővíti ki. Akár bankroll kezelést, akár teniszpiacokat tanulmányozol, ennek a ciklusnak egy részét finomítod.`
      }
    ]
  },
  {
    id: 2,
    title: 'Hogyan Működnek Valójában a Fogadóirodák, Tőzsdék és Fogadási Piacok',
    slug: 'hogyan-mukodnek-fogadoirodak-tozsdek-piacok',
    description: 'Mélyebb betekintés a fogadási piacok szerkezetébe, a fogadóiroda-marzsokba és a tőzsdedinamikába.',
    sections: [
      {
        title: 'A Fogadóiroda Szerepe',
        content: `A fogadóirodák piaci közvetítők. Oddsokat publikálnak, fogadásokat fogadnak el és kockázatot kezelnek. Céljuk nem az, hogy helyesen jósoljanak meg eredményeket—hanem az, hogy profitot termeljenek függetlenül attól, ki nyer.

Ezt úgy teszik, hogy margót építenek be az oddsokba (overround vagy vig néven), korlátozzák vagy kitiltják a nyerő játékosokat, és a fogadási folyamok alapján állítják a vonalakat.`
      },
      {
        title: 'Az Overround Magyarázata',
        content: `Ha egy fogadóiroda egy kétesélyes eseményre kínál oddsokat, és az implikált valószínűségek összege meghaladja a 100%-ot, a többlet az ő margójuk.

Például:
- A csapat: 1.90 (52.6% implikált)
- B csapat: 1.90 (52.6% implikált)
- Összesen: 105.2%

Ez az extra 5.2% a fogadóiroda margója. Fogadóként beépített költséggel indulsz.`
      },
      {
        title: 'Tőzsde vs Hagyományos Fogadóirodák',
        content: `A tőzsdék (mint a Betfair, Betdaq, Smarkets) lehetővé teszik, hogy más fogadók ellen fogadj, nem egy ház ellen.

"Back"-elhetsz (valamire fogadsz) vagy "Lay"-elhetsz (valami ellen fogadsz) egy eredményre. A tőzsde jutalékot számít fel a nettó nyerésen (jellemzően 2-5%) ahelyett, hogy margót építene be az oddsokba.

Ez gyakran jobb oddsokat jelent—de kevesebb likviditást is a kisebb piacokon.`
      },
      {
        title: 'Piacképződés és Oddsmozgás',
        content: `Az oddsok nem statikusak. Mozognak az alapján:
- Fogadási volumen
- Hírek (sérülések, időjárás, kezdőcsapatok)
- Sharp aktivitás (profi fogadók)
- Fogadóiroda algoritmusok

Megérteni, hogy miért mozog egy vonal—és hogy az a mozgás valós információt vagy zajt tükröz-e—a piacolvasás része.`
      },
      {
        title: 'Miért Korlátozzák a Fogadóirodák a Nyerteseket',
        content: `A fogadóirodák nem kötelesek üzletet kötni veled. Ha konzisztensen nyersz, csökkenthetik a maximális tétjeidet, rosszabb oddsokat kínálhatnak, vagy teljesen bezárhatják a számládat.

Ez frusztráló, de logikus: üzletük azoktól a ügyfelektől függ, akik hosszú távon veszítenek. A tartós nyertesek rossz ügyfelek.

Ezért sok komoly fogadó tőzsdéket, több számlát vagy olyan szolgáltatásokat használ, mint a Pinnacle, amelyek üdvözlik a sharpokat.`
      }
    ]
  },
  {
    id: 3,
    title: 'Oddsok, Implikált Valószínűség és Tisztességes Árazás',
    slug: 'oddsok-implikalt-valoszinuseg-tisztesseges-arazas',
    description: 'Az oddsok matematikájának elsajátítása és annak megértése, mikor képvisel egy ár értéket.',
    sections: [
      {
        title: 'Odds Formátumok: Decimális, Törtszám, Amerikai',
        content: `A decimális oddsok a megtett egységenkénti teljes megtérülést mutatják. A 2.50 azt jelenti, hogy minden megtett 1000 Ft-ra 2500 Ft-ot kapsz (a tétet is beleértve).

A törtszám oddsok a téthez viszonyított nyereséget mutatják. A 6/4 azt jelenti, hogy minden megtett 4000 Ft-ra 6000 Ft nyereség jár.

Az amerikai oddsok +/- jelölést használnak 100$-hoz képest. A +150 azt jelenti, 150$ nyereség 100$ téten; a -150 azt jelenti, hogy 150$-t kell tenned, hogy 100$-t nyerj.

Használd azt, amivel a legkényelmesebb vagy—de biztosítsd, hogy tudsz konvertálni.`
      },
      {
        title: 'Implikált Valószínűség Számítása',
        content: `Decimális odds implikált valószínűséggé alakításához:

Implikált Valószínűség = 1 / Decimális Odds

Példa:
- 2.00-as odds → 1/2.00 = 50%
- 1.50-es odds → 1/1.50 = 66.7%
- 3.00-as odds → 1/3.00 = 33.3%

Ez megmondja, milyen valószínűséget áraz be a fogadóiroda. Hasonlítsd össze a saját becsléseddel az érték felméréséhez.`
      },
      {
        title: 'Tisztességes Ár vs Piaci Ár',
        content: `A tisztességes ár az az odds, ami tükrözi egy eredmény valós valószínűségét—margó nélkül.

Ha úgy gondolod, hogy egy csapatnak 50% esélye van a győzelemre, a tisztességes ár 2.00. Ha a fogadóiroda 2.10-et kínál, az érték. Ha 1.85-öt, az nem.

A te feladatod tisztességes árakat becsülni és eltéréseket találni.`
      },
      {
        title: 'Az Overround Eltávolítása',
        content: `Ahhoz, hogy megtaláld a "valós" valószínűségeket egy odds készletből, el kell távolítanod a margót.

Egyszerű módszer: oszd el minden implikált valószínűséget az összeggel.

Ha az implikált valószínűségek összege 105%, és egy eredmény 52.5%-ot mutat, a korrigált valószínűség 52.5/105 = 50%.

Ez segít összehasonlítani a nézeteidet a piac valós becslésével.`
      }
    ]
  },
  {
    id: 4,
    title: 'Érték, Várható Érték, Line Shopping és Closing Line Value',
    slug: 'ertek-varhato-ertek-line-shopping-clv',
    description: 'Az alapvető koncepciók a hosszú távon nyereséges fogadások azonosításához.',
    sections: [
      {
        title: 'Mi az Érték a Fogadásban',
        content: `Érték akkor létezik, amikor a felkínált odds magasabb, mint amekkorának lennie kellene a valós valószínűség alapján.

Ha egy tisztességes érmét feldobnak és valaki 2.20-at kínál a fejre, az érték—mert a tisztességes ár 2.00.

Értéket találni nem garantálja, hogy megnyered azt a fogadást. Azt jelenti, hogy ha ugyanazt a fogadást sokszor megteszed, előrébb kerülsz.`
      },
      {
        title: 'Várható Érték (EV) Számítása',
        content: `Az EV az átlagos nyereséget méri fogadásonként az idő múlásával.

Képlet:
EV = (Nyerési Valószínűség × Potenciális Nyereség) - (Vesztési Valószínűség × Tét)

Példa:
- 2.50-es odds, 45%-ra becsülöd a nyerési esélyt
- EV = (0.45 × 1.50) - (0.55 × 1) = 0.675 - 0.55 = +0.125

A pozitív EV hosszú távon nyereséges fogadást jelent.`
      },
      {
        title: 'Line Shopping',
        content: `A line shopping azt jelenti, hogy oddsokat hasonlítasz össze fogadóirodák között, hogy a legjobb árat kapd.

Egy 0.05-0.10-es különbség az oddsokban kicsinek tűnhet, de idővel jelentősen halmozódik.

Használj odds-összehasonlító oldalakat. Tarts számlákat több fogadóirodánál. Soha ne fogadd el az első árat, amit látsz.`
      },
      {
        title: 'Closing Line Value (CLV)',
        content: `A closing line az utolsó odds, mielőtt az esemény elkezdődik. Ezt tartják a leghatékonyabbnak, mert minden elérhető információt tartalmaz.

Ha jobb oddsokat kapsz, mint a closing line, CLV-t fogtál—és ez az egyik legjobb mutatója a fogadási képességnek.

Kövesd nyomon a nyitó vs záró oddsaidat a teljesítményed méréséhez.`
      }
    ]
  },
  {
    id: 5,
    title: 'Bankroll Kezelés, Tétek és Túlélés a Variancia Alatt',
    slug: 'bankroll-kezeles-tetek-variancia',
    description: 'Védd meg a tőkédet a megfelelő tétméretezéssel és a variancia megértésével.',
    sections: [
      {
        title: 'Mi az a Bankroll',
        content: `A bankrollod az a pénz, ami kizárólag fogadásra van szánva. Ez nem albérlet, étel vagy vészhelyzeti pénz.

Határozz meg egy összeget, amit teljesen elveszíthetsz. Ez a bankrollod. Soha ne adj hozzá extra pénzt a veszteségek "üldözésére".`
      },
      {
        title: 'Tétstratégiák',
        content: `Flat Staking: Minden fogadásra ugyanazt a százalékot (pl. 2%) teszed. Egyszerű és biztonságos.

Kelly Kritérium: Számítsd ki az optimális tétet az általad vélt előny alapján. Agresszívebb, pontos becsléseket igényel.

Töredék Kelly: Használd a teljes Kelly egy töredékét (pl. fele vagy negyede). Egyensúlyoz a növekedés és a kockázatvédelem között.`
      },
      {
        title: 'A Variancia Megértése',
        content: `A variancia az eredmények természetes ingadozása. Még pozitív előnnyel is lesznek vesztes sorozataid.

Egy 20 egymást követő vesztes fogadásból álló sorozat lehetséges még 55%-os nyerési aránnyal is. Pénzügyileg és pszichológiailag fel kell készülnöd.

Minél kisebbek a tétjeid a bankrollhoz képest, annál jobban túléled a varianciát.`
      },
      {
        title: 'Soha Ne Fogadj Mindent',
        content: `A legfontosabb szabály: soha ne tedd a bankrollod jelentős részét egyetlen fogadásra.

Még egy "biztos" fogadás is veszíthet. És ha túl sokat veszítesz, nem lesz tőkéd a felépüléshez.

Tartsd az egyes téteket a bankroll 1-5%-a között. A 2-3% ajánlott a legtöbbek számára.`
      }
    ]
  },
  {
    id: 6,
    title: 'A Fogadó Teljes Munkafolyamata: A Mérkőzéslistától a Megtett Fogadásig',
    slug: 'fogado-teljes-munkafolyamata',
    description: 'Egy lépésről lépésre folyamat a kezdeti kutatástól a végső végrehajtásig.',
    sections: [
      {
        title: '1. Fázis: Mérkőzések Átnézése',
        content: `Kezdd a mérkőzéslista átnézésével a sportodhoz/ligádhoz. Azonosítsd azokat az eseményeket, amelyeket ismersz és értesz.

Ne próbálj mindent lefedni. Koncentrálj oda, ahol szakértelmem vagy információs előnyöd van.`
      },
      {
        title: '2. Fázis: Kutatás és Elemzés',
        content: `Gyűjts releváns információkat:
- Csapathírek, sérülések, eltiltások
- Legutóbbi statisztikák és trendek
- Korábbi egymás elleni eredmények
- Szituációs tényezők (idegenben, pihenés, motiváció)

Alakítsd ki a véleményedet, mielőtt megnéznéd az oddsokat.`
      },
      {
        title: '3. Fázis: Értékelés és Árazás',
        content: `Az elemzésed alapján becsüld meg a valószínűségeket.

Nem kell tizedesre pontos legyen. Egy tartomány is jó: "Szerintem 55-60%-ban nyernek."

Aztán alakítsd át oddszá: 57.5% → kb. 1.74.`
      },
      {
        title: '4. Fázis: Összehasonlítás a Piaccal',
        content: `Most nézd meg a kínált oddsokat. Ha a fogadóiroda 1.90-et kínál és a tisztességes árad 1.74, nincs érték—passz.

Ha 1.95-öt kínálnak és a tisztességes árad 2.10, van érték—fontold meg a fogadást.`
      },
      {
        title: '5. Fázis: Döntés és Végrehajtás',
        content: `Ha van érték, döntsd el a tétet a rendszered alapján.

Tedd meg a fogadást a legjobb elérhető áron. Dokumentálj mindent: esemény, odds, tét, indoklás.`
      },
      {
        title: '6. Fázis: Utólagos Áttekintés',
        content: `Az esemény után frissítsd a nyilvántartásaidat. De ne ítéld meg a döntést az eredmény alapján.

Kérdezd meg magadtól: "Ésszerű volt az elemzésem? Találtam értéket?" Az egyedi eredmény nem számít—a folyamat igen.`
      }
    ]
  },
  {
    id: 7,
    title: 'Labdarúgás Mesterkurzus',
    slug: 'labdarugas-mesterkurzus',
    description: 'Labdarúgás fogadásokra specifikus stratégiák és megközelítések.',
    sections: [
      {
        title: 'Fő Labdarúgás Piacok',
        content: `A leggyakoribb piacok:
- 1X2 (hazai győzelem, döntetlen, vendég győzelem)
- Gólok Over/Under
- Ázsiai Handicap
- Mindkét Csapat Gól (BTTS)
- Pontos Eredmény

Minden piacnak saját dinamikája van. Nem kell mindet elsajátítanod—specializálódj oda, ahol előnyt találsz.`
      },
      {
        title: 'Elemzendő Kulcstényezők',
        content: `- Várható Gólok (xG) vs tényleges gólok
- Legutóbbi forma (de figyelj az átlaghoz való visszatérésre)
- Kulcsfontosságú sérülések és eltiltások
- Menetrend és keretrotálás
- Időjárási körülmények és pályaállapot
- A mérkőzés fontossága mindkét csapat számára`
      },
      {
        title: 'Ázsiai Handicap Magyarázat',
        content: `Az Ázsiai Handicap kiküszöböli a döntetlent azzal, hogy virtuális előnyt/hátrányt ad egy csapatnak.

- -0.5: A csapatnak nyernie kell
- -1.0: A csapatnak 2+ góllal kell nyernie
- -0.25: Fele tét 0-n, fele -0.5-ön

Bonyolultabb, de gyakran jobb értéket kínál egyértelmű favoritoknál.`
      },
      {
        title: 'Gyakori Csapdák a Labdarúgásban',
        content: `- Formában lévő csapatok túlértékelése (lehet szerencse)
- Kontextus figyelmen kívül hagyása (derbi, kiesés, keretrotálás)
- Minden meccsre fogadás a szelektivitás helyett
- Statisztikákban való vak bizalom kontextus nélkül`
      }
    ]
  },
  {
    id: 8,
    title: 'Lóverseny Mesterkurzus',
    slug: 'loverseny-mesterkurzus',
    description: 'Navigálás a lóversenypiacokon és analitikus megközelítés kialakítása.',
    sections: [
      {
        title: 'Verseny Típusok és Felületek',
        content: `- Sík: tiszta sebesség, különböző távolságok
- Akadály: gátfutás és steeplechase
- Ügetés: más diszciplína

Felületek: fű, homok (all-weather), dirt (USA)

Minden típus más értékelést igényel. Specializálódj.`
      },
      {
        title: 'Alapvető Tényezők',
        content: `- Legutóbbi forma (de vedd figyelembe a mezőny szintjét)
- A verseny osztálya
- A ló preferált távja
- Talajpreferencia (nehéz vs gyors)
- Zsoké és tréner
- Hordott súly
- Rajtpozíció a pályán`
      },
      {
        title: 'A Piac Olvasása',
        content: `A lóversenynek nagyon likvid piacai és jelentős mozgásai vannak.

Figyeld:
- Steam mozgásokat (erős odds-rövidülések)
- Driftereket (lovak, akik nyúlnak)
- Információkat a piaci aktivitásból

A lóversenypiacok gyakran hatékonyabbak, mint más sportok—előnyt találni nehéz.`
      },
      {
        title: 'Each Way és Helyezés Fogadás',
        content: `Each Way: két fogadás - egy a győzelemre, egy a helyezésre.

Értéket kínálhat, ha a helyezési oddsok nagyvonalúak a valós helyezési esélyekhez képest.

Elemezd külön a győzelmi és helyezési értéket.`
      }
    ]
  },
  {
    id: 9,
    title: 'Tenisz Mesterkurzus',
    slug: 'tenisz-mesterkurzus',
    description: 'A tenisz sajátosságainak kihasználása értéktalálásra.',
    sections: [
      {
        title: 'A Tenisz Szerkezete',
        content: `A tenisz egyéni sport—nincs csapattárs, aki kompenzáljon egy rossz napot.

Mérkőzés formátum: 3-ból 2 vagy 5-ből 3 szett (férfi Grand Slamek).

Felület: fű, salak, kemény—hatalmas hatással van a teljesítményre.`
      },
      {
        title: 'Fő Piacok',
        content: `- Meccs Győztese
- Szett Handicap
- Játék Handicap
- Játékok Over/Under
- Szett Fogadás (pontos szetteredmény)

A tenisz élő nagyon népszerű—az oddsok gyorsan változnak.`
      },
      {
        title: 'Tenisz-Specifikus Tényezők',
        content: `- Szerva statisztikák (ászok, % első szerva, pontok nyerve első/második szerván)
- Felületen mutatott teljesítmény
- Egymás elleni eredmények
- Fizikai állapot és sérülések
- Mentális tényező kulcsfontosságú pillanatokban
- Menetrend (egymást követő meccsek, utazás)`
      },
      {
        title: 'Volatilitás és Variancia',
        content: `A tenisznek magas a belső varianciája. Egy brék mindent megváltoztathat.

Még nagy favoritok is veszíthetnek szetteket vagy elszenvedhetnek váratlan vereségeket.

Ez lehetőségeket teremt a tájékozott fogadók számára—de gondos kockázatkezelést igényel.`
      }
    ]
  },
  {
    id: 10,
    title: 'Kosárlabda Mesterkurzus',
    slug: 'kosarlabda-mesterkurzus',
    description: 'A kosárlabda elemzése fogadásokhoz: NBA, Európa és azon túl.',
    sections: [
      {
        title: 'A Kosárlabda Jellemzői',
        content: `Magas pontszám, sok birtoklás. Az eredmények jobban hajlanak az átlag felé, mint más sportokban.

Ez kiszámíthatóbbá teszi a spreadeket, de csökkenti az outright értékét.`
      },
      {
        title: 'Fő Piacok',
        content: `- Spread (pont handicap)
- Összpontszám (Over/Under)
- Moneyline (győztes)
- Negyed/Félidő fogadás
- Játékos propok

Az NBA spreadek nagyon hatékonyak—előnyt találni mélyreható elemzést igényel.`
      },
      {
        title: 'Figyelembe Veendő Tényezők',
        content: `- Egymást követő mérkőzések és menetrend
- Sérülések (különösen sztárok)
- Játéktempó
- Támadó/védekező hatékonyság
- Specifikus párharcok
- Motivációs helyzetek (playoff küzdelem, tankolás)`
      },
      {
        title: 'Line Shopping a Kosárlabdában',
        content: `A kosárlabdában fél pont a spreaden nagy különbséget jelenthet.

A kulcsszámok kevésbé hangsúlyosak, mint az amerikai futballban (ahol a 3 és 7 dominál), de a line shopping továbbra is kulcsfontosságú.`
      }
    ]
  },
  {
    id: 11,
    title: 'Jégkorong Mesterkurzus',
    slug: 'jegkorong-mesterkurzus',
    description: 'A jégkorong piacainak és dinamikájának megértése.',
    sections: [
      {
        title: 'A Jégkorong Szerkezete',
        content: `3 darab 20 perces harmad. Jellemzően alacsony pontszámok (átlagosan 5-6 összgól az NHL-ben).

Túlóra és büntetőpárbaj az alapszakaszban—fontos hatással van egyes fogadásokra.`
      },
      {
        title: 'Fő Piacok',
        content: `- Puckline (1.5 gólos spread)
- Moneyline
- Gólok Over/Under
- 3-utas (győztes rendes játékidőben)
- Harmad fogadás

A standard puckline -1.5/+1.5, az alacsony pontszámok miatt.`
      },
      {
        title: 'Specifikus Tényezők',
        content: `- Kapus statisztikák
- Corsi/Fenwick/Várható Gólok
- Különleges alakulatok (létszámfölény/emberhátrány)
- Egymást követő mérkőzések
- Utazás és időzónák
- Kapushelyzetek (kezdő vs tartalék)`
      },
      {
        title: 'Variancia a Jégkorongban',
        content: `A jégkorongnak magas a varianciája az alacsony pontszámok miatt. Egy gól mindent eldönthet.

A favoritok gyakran veszítenek—ami értéket teremthet az esélyteleneken, de frusztráló is lehet.

A hosszú táv az egyetlen mód a teljesítmény értékelésére.`
      }
    ]
  },
  {
    id: 12,
    title: 'Baseball Mesterkurzus',
    slug: 'baseball-mesterkurzus',
    description: 'A baseball elemzése dobásra és értékre fókuszálva.',
    sections: [
      {
        title: 'A Baseball Egyedisége',
        content: `162 szezonmérkőzés—hatalmas mintaméret.

A kezdő dobó uralja minden mérkőzést. Dobóváltások teljesen megváltoztatják az oddsokat.`
      },
      {
        title: 'Fő Piacok',
        content: `- Moneyline
- Run Line (1.5-ös spread)
- Összpontszám (Over/Under pont)
- Első 5 Inning (F5)
- Játékos propok

Az F5 izolálja a kezdők párharcát, kiküszöbölve a bullpen variabilitását.`
      },
      {
        title: 'Kulcsfontosságú Metrikák',
        content: `- ERA, WHIP, FIP dobóknak
- wOBA, OPS, hard hit % ütőknek
- Bullpen statisztikák
- Bontások (balkezesek/jobbkezesek ellen, otthon/idegenben)
- Pályatényezők`
      },
      {
        title: 'Időjárás és Pálya',
        content: `A baseballt erősen befolyásolja:
- Szél (segíti vagy akadályozza a home runokat)
- Hőmérséklet (a labda messzebbre repül melegben)
- Páratartalom
- A pálya méretei

Ezek a tényezők jelentősen befolyásolják az összpontszámokat.`
      }
    ]
  },
  {
    id: 13,
    title: 'Amerikai Futball Mesterkurzus',
    slug: 'amerikai-futball-mesterkurzus',
    description: 'Az NFL és college football fogadások uralása.',
    sections: [
      {
        title: 'A Futball Szerkezete',
        content: `NFL: 17 szezonmérkőzés—minden mérkőzés rendkívül fontos.

College: több mérkőzés, de nagyobb variancia a tehetségkülönbségek miatt.

A korlátozott mintaméret nehezebbé teszi az elemzést.`
      },
      {
        title: 'Fő Piacok',
        content: `- Spread (pont handicap)
- Összpontszám (Over/Under)
- Moneyline
- Játékos propok
- Teaserek és parlayok`
      },
      {
        title: 'Kulcsszámok',
        content: `A futballban a 3 és 7 kulcsfontosságú (mezőnygól és touchdown).

Fél pontot venni ezeken a számokon értékes lehet. De a fogadóirodák tudják ezt—az ár igazítva van.

Más kulcsszámok: 4, 6, 10, 14.`
      },
      {
        title: 'Fontos Tényezők',
        content: `- Sérülések (különösen QB és OL)
- Időjárás
- Specifikus párharcok
- Motivációs helyzetek
- Utazás és bye hetek
- Közönség fogadási hatása a vonalakra`
      }
    ]
  },
  {
    id: 14,
    title: 'Egyéb Sportok és Specialista Niche-ek',
    slug: 'egyeb-sportok-specialista-nichek',
    description: 'Érték keresése kevésbé követett sportokban és niche piacokon.',
    sections: [
      {
        title: 'Miért Érdemes Kisebb Sportokat Fontolóra Venni',
        content: `Kevésbé hatékony piacok. Kevesebb figyelem több hibát jelent az oddsokban.

Ha specifikus tudásod van (játszottál, évek óta követed), valós előnyöd lehet.`
      },
      {
        title: 'Megfontolásra Érdemes Sportok',
        content: `- MMA/UFC
- Golf
- Krikett
- Rögbi
- Darts
- Snooker
- Esport

Mindegyiknek megvannak a sajátosságai és specifikus piacai.`
      },
      {
        title: 'Kihívások',
        content: `- Korlátozott likviditás
- Kevésbé versenyképes oddsok
- Kevesebb elérhető adat
- A fogadóirodák gyorsabban korlátozhatnak

Egyensúlyozz a lehetőségek és a praktikumok között.`
      },
      {
        title: 'Specializáció',
        content: `Jobb egy niche szakértőjének lenni, mint mindenben közepesnek.

Találd meg a sportod/ligád/piacodat. Építs mély szakértelmet. Az érték a specializációból jön.`
      }
    ]
  },
  {
    id: 15,
    title: 'Fogadástípusok Mesterkurzus',
    slug: 'fogadastipusok-mesterkurzus',
    description: 'Minden fogadástípus megértése és mikor használd őket.',
    sections: [
      {
        title: 'Szimpla Fogadások',
        content: `Egy fogadás egy eredményre. A legtisztább és ajánlott mód.

Kevesebb variancia, több kontroll. Ha előnyöd van, a szimplák maximalizálják azt az idő múlásával.`
      },
      {
        title: 'Kombinált/Parlay',
        content: `Több kiválasztás kombinálva. Mindnek nyernie kell.

Az oddsok szorozódnak—de a fogadóiroda előnye is. Minden kiválasztás margót ad hozzá.

Matematikailag hátrányos. Kerüld komoly fogadásnál.`
      },
      {
        title: 'Rendszerfogadások',
        content: `Fogadáskombinációk, ahol nem kell mindennek nyernie (pl. Trixie, Yankee, Canadian).

Csökkentik a varianciát a tiszta parlayokhoz képest, de növelik a teljes kitettséget.

Összetettek és gyakran félreértettek.`
      },
      {
        title: 'Élő Fogadás',
        content: `Fogadás az esemény közben. Az oddsok gyorsan változnak.

Lehetőség a figyelmesen figyelőknek—de csapda is impulzív döntésekhez.

Vas fegyelmet és előzetes felkészülést igényel.`
      },
      {
        title: 'Futures és Outright',
        content: `Fogadások hosszú távú eredményekre (bajnokság győztesek, gólkirályok, stb.).

A pénzed sokáig le van kötve. Fontold meg az alternatív költséget.

Értéket kínálhat, ha tudod értékelni a hosszú távú valószínűségeket.`
      }
    ]
  },
  {
    id: 16,
    title: 'Személyes Fogadási Napló, Döntési Napló és Áttekintési Jegyzék',
    slug: 'szemelyes-fogadasi-naplo-dontesi-naplo',
    description: 'Hozz létre egy nyomon követési rendszert elemzéshez és folyamatos fejlődéshez.',
    sections: [
      {
        title: 'Miért Rögzíts Mindent',
        content: `Adatok nélkül nem tudsz fejlődni. Minden fogadást dokumentálni kell.

A nyomon követés lehetővé teszi, hogy:
- Azonosítsd az erősségeket és gyengeségeket
- Mérd a valós vs érzékelt teljesítményt
- Felismerd a viselkedési mintákat
- Igazold (vagy változtasd meg) a megközelítésedet`
      },
      {
        title: 'Mit Rögzíts',
        content: `Minimum:
- Dátum és esemény
- Fogadás típusa és kiválasztás
- Kapott odds
- Tét
- Eredmény
- Nyereség/Veszteség

Ideálisan még:
- Záró vonal
- A fogadás indoklása
- Érzelmi állapot
- A fogadás forrása (saját elemzés vs tipp)`
      },
      {
        title: 'Nyomon Követési Eszközök',
        content: `- Táblázat (Excel, Google Sheets)
- Dedikált alkalmazások
- Specializált szoftver

A fontos a következetesség, nem az eszköz. Válaszd azt, amit ténylegesen használni fogsz.`
      },
      {
        title: 'Időszakos Áttekintés',
        content: `Tervezz rendszeres áttekintéseket: heti és havi.

Elemezd:
- ROI sportok/piacok/fogadástípusok szerint
- Átlagos CLV
- Hibaminták
- Betartott vs megszegett fegyelem

Igazítsd a stratégiát az adatok alapján, ne az érzések alapján.`
      }
    ]
  },
  {
    id: 17,
    title: 'Teljesítmény Áttekintése, Nyilvántartások Vezetése és Tanulás az Eredményekből',
    slug: 'teljesitmeny-attekintese-nyilvantartasok-tanulas',
    description: 'Eredmények szisztematikus elemzése a folyamatos fejlődésért.',
    sections: [
      {
        title: 'Folyamat Elválasztása az Eredménytől',
        content: `Egy fogadás lehet helyes és veszíthet. Lehet helytelen és nyerhet.

Ítéld meg a döntéseket a folyamat alapján, ne az egyedi eredmény alapján.

Hosszú távon a jó döntések jó eredményekhez vezetnek. Rövid távon bármi történhet.`
      },
      {
        title: 'Monitorozandó Metrikák',
        content: `- ROI (Befektetés Megtérülése)
- Yield (nyereség / forgalom)
- Átlagos CLV
- Nyerési arány odds tartományonként
- Teljesítmény sport/liga/piac szerint
- Maximális visszaesés`
      },
      {
        title: 'Mintaméret',
        content: `Ne vonj le elhamarkodott következtetéseket. Százas fogadásokra van szükséged jelentős adatokhoz.

A variancia elrejtheti az előnyt vagy képesség illúzióját keltheti.

Koncentrálj a folyamatra, miközben elegendő adatot gyűjtesz.`
      },
      {
        title: 'Alkalmazkodás',
        content: `A piacok változnak. Ami működött, az leállhat.

Légy hajlandó:
- Elhagyni a már nem nyereséges megközelítéseket
- Új piacokat felfedezni
- Modelleket és módszereket frissíteni

A tanulás soha nem ér véget.`
      }
    ]
  },
  {
    id: 18,
    title: 'Pszichológia, Fegyelem, Tilt Kontroll és Profi Rutinok',
    slug: 'pszichologia-fegyelem-tilt-kontroll-rutinok',
    description: 'A fogadási siker mentális komponense.',
    sections: [
      {
        title: 'A Pszichológia Szerepe',
        content: `A legtöbb fogadási kudarc pszichológiai, nem analitikai.

Az emberek tudják, mit kellene tenniük. Nem teszik meg, mert az érzelmek átveszik az irányítást.

Az elme kezelése ugyanolyan alapvető, mint a bankroll kezelése.`
      },
      {
        title: 'Tilt és Hogyan Kerüld El',
        content: `Tilt: érzelmi állapot, amikor irracionális döntéseket hozol, jellemzően veszteségek után.

Jelek:
- Tétek növelése a felépülésért
- Nem elemzett eseményekre fogadás
- Eltérés a rendszertől
- Frusztráció és düh

Megoldás: ismerd fel a kiváltókat, tarts szüneteket, tartsd tiszteletben az előre meghatározott limiteket.`
      },
      {
        title: 'Napi Fegyelem',
        content: `- Határozz meg időket a kutatásra és elhelyezésre
- Ne fogadj, ha fáradt, stresszes vagy befolyásolt állapotban vagy
- Mindig tartsd tiszteletben a téti szabályokat
- Fogadd el, hogy a kihagyás érvényes döntés
- Ne ellenőrizd folyamatosan az élő eredményeket`
      },
      {
        title: 'Rutinok Építése',
        content: `A rutinok csökkentik az érzelmi döntéseket.

Példa heti rutinra:
- Hétfő: előző hét áttekintése
- Kedd-Szombat: kutatás és fogadás
- Vasárnap: elemzés és tervezés

Találd meg, ami neked működik, és tartsd be.`
      }
    ]
  },
  {
    id: 19,
    title: 'Biztonságos Szerencsejáték Standardok, Megfelelőség és Személyes Védelem',
    slug: 'biztonsagos-szerencsejatek-standardok-megfelelosseg',
    description: 'Felelősségteljes játék és a veszélyjelek felismerése.',
    sections: [
      {
        title: 'Felelősségteljes Szerencsejáték',
        content: `A fogadás lehet szórakoztató vagy professzionális tevékenység. De problémássá válhat.

Csak annyit fogadj, amennyit megengedhetsz magadnak elveszteni. Állíts be limiteket és tartsd tiszteletben őket.

Ha a fogadás negatívan befolyásolja az életedet, kapcsolataidat vagy pénzügyeidet—állj le.`
      },
      {
        title: 'Figyelmeztető Jelek',
        content: `- Fogadás másra szükséges pénzzel
- A tevékenység elrejtése a családtagok elől
- Veszteségek üldözése
- Állandó gondolatok a fogadásról
- Ingerlékenység, ha nem tudsz fogadni
- A tétek progresszív növelése az izgalomért`
      },
      {
        title: 'Önkizárási Eszközök',
        content: `Minden szabályozott fogadóiroda kínál:
- Befizetési limiteket
- Veszteség limiteket
- Ideiglenes szüneteket
- Állandó önkizárást

Használd őket proaktívan, ha szükséges. Nincs szégyen segítséget kérni.`
      },
      {
        title: 'Támogatási Források',
        content: `Ha te vagy valaki, akit ismersz, problémákkal küzd a szerencsejátékkal:
- Országos segélyvonalak
- Gamblers Anonymous
- Szakosodott tanácsadók

Egy probléma felismerése az első lépés a megoldásához.`
      }
    ]
  },
  {
    id: 20,
    title: 'Gyakorlati Feladatok és Függelék',
    slug: 'gyakorlati-feladatok-fuggelek',
    description: 'Ültesd át a gyakorlatba, amit tanultál, feladatokkal és forrásokkal.',
    sections: [
      {
        title: '1. Feladat: Valószínűség Számítás',
        content: `Vegyél 10 jövőbeli mérkőzést. Mindegyikre:
1. Becsüld meg a hazai győzelem, döntetlen, vendég győzelem valószínűségét
2. Alakítsd át tisztességes oddsszá
3. Hasonlítsd össze a valós oddsokkal
4. Azonosítsd, hol látsz értéket (ha van)

Ne fogadj. Ez csak értékelési gyakorlat.`
      },
      {
        title: '2. Feladat: Papír Kereskedés',
        content: `Egy hónapig rögzíts "virtuális" fogadásokat:
- Kezeld úgy, mintha valódi pénz lenne
- Tartsd tiszteletben a téti szabályokat
- Dokumentálj mindent

Ez fegyelmet épít pénzügyi kockázat nélkül, és adatokat ad a megközelítésed értékeléséhez.`
      },
      {
        title: '3. Feladat: CLV Elemzés',
        content: `Minden elhelyezett fogadásra:
1. Rögzítsd az oddsot az elhelyezéskor
2. Rögzítsd a záró vonalat
3. Számold ki a különbséget

100+ fogadás után elemezd: átlagosan jobb oddsokat kapsz-e, mint a záró vonal?`
      },
      {
        title: 'Függelék: Gyakori Képletek',
        content: `Implikált Valószínűség = 1 / Decimális Odds

Decimális Odds = 1 / Valószínűség

EV = (Nyerési Valószínűség × Nyereség) - (Vesztési Valószínűség × Tét)

Kelly % = (bp - q) / b
ahol b = decimális odds - 1, p = nyerési valószínűség, q = vesztési valószínűség`
      },
      {
        title: 'Következő Lépések',
        content: `Befejezted az alapanyagot. Most:

1. Tekintsd át a számodra legfontosabb szakaszokat
2. Kezdj papír kereskedéssel vagy minimális tétekkel
3. Építsd ki a nyomon követési rendszeredet
4. Légy türelmes—a fejlődés időt igényel
5. Időszakosan térj vissza ehhez az anyaghoz

Sok sikert a fegyelmezett fogadás útján.`
      }
    ]
  }
]
