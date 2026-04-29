import { TrainingModule } from '../training-content'

export const trainingModulesTl: TrainingModule[] = [
  {
    id: 1,
    title: "1. Pundasyon at Pilosopiya",
    slug: "foundation-and-philosophy",
    subtitle: "Mga pangunahing prinsipyo ng propesyonal na pagtaya",
    duration: "15 minutong pagbabasa",
    sections: [
      {
        title: "Ang Mindset ng Kalahok sa Merkado",
        content: `Ang isang disiplinadong maninaya ay hindi lamang isang tao na mahilig sa sports at paminsan-minsan ay may opinyon. Ang isang disiplinadong maninaya ay isang kalahok sa merkado. Sila ay nagsasaliksik ng mga kaganapan, tinatantya ang mga posibilidad, inihahambing ang mga tantiyang ito sa mga available na presyo, pumipili ng merkado na pinakamalinaw na nagpapahayag ng bentahe, tumataya sa loob ng mahigpit na mga limitasyon, at tapat na sinusuri ang desisyon pagkatapos ng kaganapan. Hindi nila binibigyang kahulugan ang kanilang sarili sa pamamagitan ng isang panalo, isang pagkatalo, o isang maswerteng katapusan ng linggo. Binibigyang kahulugan nila ang kanilang sarili sa pamamagitan ng mga pamantayan.

Iyan ang pagkakaiba na nagsisilbing pundasyon ng lahat sa training pack na ito. Ang kurso na ito ay hindi para sa mga naghahanap ng mga tip, kutob, o mabilis na pera. Ito ay para sa mga gustong tingnan ang pagtaya bilang isang kalahating propesyonal na disiplina, isang aktibidad kung saan ang proseso ay nakakaimpluwensya sa mga resulta kapag patuloy na inilalapat sa paglipas ng panahon.

**Pag-unawa sa Ginagawa ng mga Bookmaker**

Ang mga bookmaker ay hindi kumikita sa pamamagitan ng paghuhula ng mga resulta. Sila ay kumikita sa pamamagitan ng paggawa ng mga merkado. Nag-aalok sila ng mga presyo na mas mababa kaysa sa mga tunay na posibilidad at may kasamang margin na nagtitiyak na, na may balanseng aksyon sa magkabilang panig, sila ay may tubo anuman ang resulta. Ang kanilang tagumpay ay hindi nakasalalay sa kasanayan. Nakasalalay ito sa pagkakaiba sa pagitan ng presyong binabayaran mo at ng patas na presyo na dapat mong natanggap.

Kaya ang tanong ay hindi "Sino ang mananalo?". Ang tanong ay, "Ano ang patas na presyo sa magkabilang panig, at sapat ba ang nakukuha ko dito?"

**Pag-aayos ng Iyong mga Inaasahan Tungkol sa Patas na Halaga**

Karamihan sa pampublikong nilalaman sa pagtaya ay nagpapakita ng merkado na puno ng madaling mga panalo. Ang katotohanan ay iba. Sa mataas na dami ng mga mapagkumpitensyang palaro, mahusay ang pagpepresyo. Ang mga hindi kahusayan sa pagpepresyo ay maaaring maging banayad. Ang isang bentahe ay maaaring mga porsyentong puntos sa presyo, hindi mga porsyento.

Ibig sabihin nito na ang tubo ay bihirang mukhang halata. Ibig sabihin nito na madalas kang matatalo, kahit na may matibay na pangangatwiran. Ibig sabihin nito na ang maliliit na sample ay halos walang sinasabi sa iyo tungkol sa kung maganda ba o hindi ang iyong mga desisyon. Ang pagtanggap na ito ay isang paunang kinakailangan.`
      },
      {
        title: "Posibilidad, Odds, at Halaga",
        content: `**Mula Posibilidad hanggang Odds**

Ang posibilidad ay isang tantiya ng posibilidad ng isang kaganapan, na umaabot mula 0% hanggang 100%. Ang decimal odds ay isang paraan ng pagpapahayag ng patas na presyo sa isang neutral na merkado sa isang partikular na posibilidad. Ang formula ng conversion ay tuwiran:

Decimal odds = 100 / Porsyento ng Posibilidad

Kaya 50% na pagkakataon = 2.00 odds. 25% na pagkakataon = 4.00 odds. 80% na pagkakataon = 1.25 odds.

Kapag nagbabasa ka ng taya, mahalagang itinatanong mo: "Anong posibilidad ang kinakatawan ng odds na ito, at sumasang-ayon ba ako?"

**Pagbibigay Kahulugan sa Halaga**

May halaga kapag ang inaalok na odds ay mas malaki kaysa sa iyong tantiya ng posibilidad. Kung tinatantya mo na ang isang koponan ay may 50% na pagkakataong manalo (patas na odds 2.00), at ang merkado ay nag-aalok ng 2.20, mayroon kang positibong inaasahang halaga. Hindi ibig sabihin nito na mananalo ka. Ibig sabihin nito na, sa maraming taya, kung tama ang iyong tantiya, dapat kang nakatatayo para sa mga pagbabalik sa average.

Iyon lang ang lahat. Walang garantisadong mga panalo. Walang sigurado. Tanging: Ang presyo ba ay mas malaki kaysa sa posibilidad?

**Implied na mga Posibilidad at Margin**

Ang mga naka-quote na odds ay may kasamang margin ng bookmaker. Ang isang patas na 50/50 na merkado ay hindi ipepresyo sa 2.00 sa magkabilang panig. Ito ay ipepresyo sa 1.91/1.91, o katulad, kung saan pumapasok ang margin cut. Upang maunawaan kung ano talaga ang tinatantya ng bookmaker, kinakalkula mo ang implied na posibilidad:

Implied na posibilidad = 100 / Decimal odds

Sa odds na 1.91, ang implied na posibilidad ay humigit-kumulang 52.4%. Kapag ang parehong panig ay lumampas sa 52.4%, ang bookmaker ay lumikha ng overround.`
      },
      {
        title: "Pag-iisip na Nakatuon sa Proseso",
        content: `**Pag-iisip Tungkol sa Inaasahang Halaga**

Ang inaasahang halaga (EV) ay ang konsepto na nagsisilbing pundasyon sa lahat ng pagtaya sa sports. Isipin ito sa ganitong paraan:

EV = (Posibilidad na manalo × Tubo bawat taya) − (Posibilidad na matalo × Stake)

Kung tumataya ka ng €100 sa odds na 2.50, at naniniwala ka na ang tunay na pagkakataong manalo ay 45%:

EV = (0.45 × €150) − (0.55 × €100) = €67.50 − €55 = +€12.50

Ang positibong EV ay nangangahulugang ang taya na ito, kung paulit-ulit na inuulit, ay dapat magbalik ng average na €12.50 bawat pagsubok.

Siyempre, kailangan mong makayang tantiyahin ang pagkakataong ito nang maaasahan. Doon papasok ang mahirap na trabaho. Ngunit malinaw ang punto: Ang iyong layunin ay hindi manalo ng mga laban. Ang iyong layunin ay maghanap ng positibong-EV na mga taya sa paglipas ng panahon.

**Panimula sa Pagiging Agnostiko sa Resulta**

Ang pagiging agnostiko sa resulta ay nangangahulugang hinuhusgahan mo ang iyong sarili sa pamamagitan ng kalidad ng mga desisyon na humantong sa mga resulta, hindi sa mga resulta mismo. Ang magandang proseso ay maaaring matalo. Ang masamang proseso ay maaaring manalo. Sa paglipas ng panahon, ang magandang proseso ang nananalo.

Kung nagtaya ka batay sa matibay na pananaliksik, gumawa ng iyong pagpepresyo pabalik, nakakuha ng mas mataas kaysa sa patas na odds, nagtaya nang nararapat, at natalo, hindi iyon masamang taya. Iyon ay isang negatibong resulta. Ang pagkakaiba ay lahat.

**Ang Ilusyon ng Maliit na Sample**

Ang isang 20-taya na serye ay halos walang sinasabi sa iyo. Kahit 100 na taya ay labis na maingay. Ang mga propesyonal ay nag-iisip sa libu-libong taya. Bago mo mahatulan ang proseso, kailangan mo ng sapat na dami upang paghiwalayin ang mga tunay na pattern mula sa ingay.

Ito ay may praktikal na implikasyon: Huwag baguhin ang iyong pamamaraan nang maaga. Mag-record. Magsuri. Ngunit huwag ipagpalagay na ang isang maikling serye ng pagkatalo ay nagpapahiwatig ng kabiguan.`
      }
    ]
  },
  {
    id: 2,
    title: "2. Pananaliksik at Impormasyon",
    slug: "research-and-information",
    subtitle: "Pagbuo ng bentahe gamit ang maaasahang pananaliksik",
    duration: "12 minutong pagbabasa",
    sections: [
      {
        title: "Pagbibigay Priyoridad sa Impormasyon",
        content: `**Hindi Lahat ng Impormasyon ay Pantay**

Ang pananaliksik ay hindi nangangahulugang tingnan ang lahat. Ibig sabihin nito ay tukuyin ang mga salik na aktwal na nakakaimpluwensya sa mga resulta at huwag pansinin ang mga pampaganda.

Sa anumang sport, ang mga materyal na sukatan ay karaniwang makitid:
• Sa football: pangunahing availability ng manlalaro, kamakailang depensibong hugis, motibasyon, panahon.
• Sa tennis: surface, kamakailang form, serve/return stats, kasaysayan ng pagkapagod o pinsala.
• Sa basketball: bilis, araw ng pahinga, lalim ng bench, kamakailang offensive na kahusayan.

Karamihan sa trabaho ay ang pag-alam kung ano ang titingnan.

**Ang Motibasyon ay Pangunahin**

Ang motibasyon ay madalas na minamaliit. Ang isang koponan na walang natitira pang layunin para sa season ay hindi lumalaban nang pareho sa isang koponan na nahaharap sa relegation, nakikipagkumpitensya para sa pangunahing tropeyo, o hinahabol ang indibidwal na tagumpay.

Katulad nito, ang mga manlalaro na nasa kontrata, nagsisikap na manatili, o nagtatanggol ng mga trabaho ay maaaring magpakita ng iba't ibang antas ng intensity mula sa kanilang mga kasamahan.

**Timing ng Impormasyon**

Ang impormasyon ay mabilis na naluluma. Sa oras na makapagbasa ka ng isang bagay tungkol sa isang koponan, maaaring nai-presyo na ito. Ang ideal ay maging malapit sa mga pangunahing pinagmulan hangga't maaari: mga press conference, lokal na pag-uulat, opisyal na mga update sa pinsala.

Ang iyong layunin ay hindi ang malaman bago ang karamihan ng merkado. Ang iyong layunin ay magkaroon ng bentahe sa interpretasyon, kahit na ang impormasyon ay pampubliko.`
      }
    ]
  },
  {
    id: 3,
    title: "3. Pag-unawa sa Merkado",
    slug: "market-understanding",
    subtitle: "Pag-unawa sa mga mekanismo ng pagpepresyo",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Paano Nabubuo ang Odds",
        content: `**Paunang Pagpepresyo**

Ang mga bookmaker ay nagtatakda ng paunang linya batay sa kanilang panloob na mga modelo at pagsusuri. Ang linyang ito ay binubuksan para sa publiko.

Habang pumapasok ang pera, gumagalaw ang linya. Kung may sobrang aksyon sa isang panig, inaayos ng bookmaker ang odds upang balansehin ang panganib.

**Sharp vs Public na Pera**

Ang sharp na pera ay nagmumula sa mga bihasang maninaya na may track record. Iginagalang ng mga bookmaker ang perang ito at gumagalaw nang mas mabilis ayon dito.

Ang public na pera ay nagmumula sa karaniwang mga maninaya. Ito ay karaniwang mas maliit ang paggalang at hindi palaging nagdudulot ng agarang paggalaw ng linya.

**Halaga ng Closing Line**

Ang closing line - ang odds kapag nagsara ang merkado - ay karaniwang itinuturing na pinakatumpak na presyo. Kung patuloy kang makakakuha ng mas magandang odds kaysa sa closing line, ito ay isang malakas na tagapagpahiwatig ng positibong inaasahang halaga.`
      }
    ]
  },
  {
    id: 4,
    title: "4. Staking at Bankroll",
    slug: "staking-and-bankroll",
    subtitle: "Mga prinsipyo ng pamamahala ng kapital",
    duration: "12 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangunahing Kaalaman sa Bankroll",
        content: `**Ano ang Bankroll?**

Ang iyong bankroll ay ang perang partikular mong inilaan para sa pagtaya. Hindi ito dapat maging pera na kailangan para sa mga gastusin sa pamumuhay, mga bill, o emergency savings.

Ang pagkakaroon ng wastong bankroll ay pangunahin dahil:
• Pinipigilan ka nitong gumawa ng mga emosyonal na desisyon
• Pinapayagan nito ang pamamahala ng panganib
• Pinapagana nito ang pagsubaybay sa performance

**Unit-Based na Staking**

Karamihan sa mga propesyonal ay tumataya sa mga unit. Ang isang unit ay isang nakapirming porsyento ng iyong bankroll, karaniwang 1-2%.

Halimbawa: Sa bankroll na €1000 na may 1% unit = €10 bawat unit

Tinitiyak ng approach na ito:
• Hindi ka masisira ng mga losing streak
• Awtomatikong tumataas ang iyong mga taya sa mga winning streak
• Mayroon kang malinaw na mga limitasyon sa panganib`
      }
    ]
  },
  {
    id: 5,
    title: "5. Sikolohiya at Disiplina",
    slug: "psychology-and-discipline",
    subtitle: "Pagkontrol sa emosyon",
    duration: "15 minutong pagbabasa",
    sections: [
      {
        title: "Kontrol sa Emosyon",
        content: `**Pagkilala sa mga Emosyon**

Ang pagtaya ay nagti-trigger ng mga emosyonal na tugon:
• Excitement pagkatapos manalo
• Frustration pagkatapos matalo
• Anxiety bago ang malaking pagkakataon
• Pagsisisi sa napalampas na halaga

Normal ang mga emosyong ito. Ang problema ay kapag naiimpluwensyahan nila ang mga desisyon.

**Pag-iwas sa Tilt**

Ang tilt ay ang estado kung saan ang mga emosyon ay nangingibabaw sa lohika. Kasama sa mga senyales ang:
• Mas maraming taya kaysa karaniwan
• Pagtugis ng mga pagkatalo
• Pagtaya nang walang pananaliksik
• Pagtaya sa mga paboritong koponan anuman ang odds

Kapag napansin mo ang mga senyales na ito, huminto. Magpahinga.

**Pangmatagalang Pananaw**

Tandaan na ang pagtaya ay isang marathon, hindi sprint. Ang isang masamang linggo ay walang sinasabi. Kahit isang masamang buwan ay hindi maraming sinasabi. Tasahin ang performance sa libu-libong taya.`
      }
    ]
  },
  {
    id: 6,
    title: "6. Pagtatabi ng Record",
    slug: "record-keeping",
    subtitle: "Pagsubaybay at pagsusuri",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Ano ang Ita-track",
        content: `**Mga Kinakailangang Field**

Para sa bawat taya, i-record ang:
• Petsa at kaganapan
• Sport at merkado
• Seleksyon at kinuhang odds
• Closing price (kung available)
• Stake sa mga puntos
• Resulta at P/L
• Tala ng proseso: bakit ginawa ang taya
• Tala ng review: anong natutunan pagkatapos

**Pagsusuri**

Regular na suriin ang iyong mga record:
• Aling mga sport/merkado ang pinakamahusay na gumaganap?
• May mga pattern ba na lumilitaw?
• Nakakamit mo ba ang CLV (Closing Line Value)?
• May mga leak ba na kailangang ayusin?`
      }
    ]
  },
  {
    id: 7,
    title: "7. Pagsusuri ng Football",
    slug: "football-analysis",
    subtitle: "Mga framework na partikular sa football",
    duration: "20 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangunahing Salik",
        content: `**Form at Konteksto ng Koponan**

Ang form ay hindi lang tungkol sa kamakailang mga resulta. Tingnan ang:
• Kalidad ng performance (xG, shots, possession)
• Lakas ng kalaban
• Home/away split
• Density ng schedule at pagkapagod

**Mga Pangunahing Kawalan**

Hindi lahat ng kawalan ay pantay. Itanong ang:
• Kritikal ba ang papel? (goalkeeper, playmaker, striker)
• Ano ang kalidad ng kapalit?
• Kaya bang laruin ng koponan nang wala ang manlalarong ito?

**Motibasyon**

Unawain ang konteksto ng season:
• Title race
• Relegation fight
• European qualification
• Mid-table meaninglessness

**Panahon at Pitch**

Ang matinding panahon ay maaaring makaapekto sa scoring. Ang malakas na ulan, malakas na hangin, o mahinang kondisyon ng pitch ay karaniwang pabor sa mas kaunting gol.`
      }
    ]
  },
  {
    id: 8,
    title: "8. Pagsusuri ng Tennis",
    slug: "tennis-analysis",
    subtitle: "Mga framework na partikular sa tennis",
    duration: "15 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangunahing Salik",
        content: `**Surface**

Kritikal ang surface sa tennis:
• Hard court: Pinaka-neutral
• Clay: Mas mabagal, pabor sa mga rally, mas kaunting epekto ng serve
• Grass: Mas mabilis, pabor sa serve, mas kaunting rally

**Serve at Return Stats**

Pinakaprediktibo na stats:
• Serve points won %
• Return points won %
• Break points saved/converted

**Pagkapagod at Schedule**

Mahalaga ang schedule sa tennis:
• Sunud-sunod na tournament
• Recovery mula sa mahabang laban
• Paglalakbay at pagbabago ng time zone

**Motibasyon**

Nagbabago ang motibasyon batay sa oras ng season:
• Grand Slams pinakamataas na motibasyon
• Mas maliit na tournament maaaring mas kaunting effort
• Ranking point requirements`
      }
    ]
  },
  {
    id: 9,
    title: "9. Pagsusuri ng Basketball",
    slug: "basketball-analysis",
    subtitle: "Mga framework ng NBA at basketball",
    duration: "15 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangunahing Salik",
        content: `**Bilis at Estilo**

Kritikal ang bilis sa basketball:
• Ang mga mabilis na koponan ay gumagawa ng mas maraming possession at mas maraming puntos
• Ang mga mabagal na koponan ay mas gusto ng low-scoring na laro
• Kapag nagkasalubong ang magkasalungat na estilo, ang resulta ay nasa gitna

**Mga Araw ng Pahinga**

Mahalaga ang pahinga sa NBA:
• Ang back-to-back na laro ay nakakaapekto sa performance
• Mahalaga rin ang distansya ng paglalakbay
• Maaaring may bentahe laban sa pagod na mga koponan

**Mga Pinsala at Rotation**

Malaki ang epekto ng mga star player sa basketball:
• Ang kawalan ng isang star ay maaaring baguhin ang buong dynamics ng koponan
• Mahalaga ang lalim ng bench
• Pansinin ang pamamahala ng minuto`
      }
    ]
  },
  {
    id: 10,
    title: "10. Iba pang Sports",
    slug: "other-sports",
    subtitle: "Mga karagdagang framework ng sports",
    duration: "12 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangkalahatang Prinsipyo",
        content: `**Mga Prinsipyong Cross-Sport**

Habang bawat sport ay natatangi, may ilang prinsipyo na unibersal:
• Palaging mahalaga ang motibasyon
• Nakakaapekto ang mga pangunahing kawalan ng personnel
• Ang kamakailang form ay dapat maunawaan sa konteksto
• Ang panahon at kondisyon ay mas nakakaapekto sa ilang sport

**Espesyalisasyon vs Diversification**

Karamihan sa mga matagumpay na maninaya ay mga espesyalista:
• Mag-focus sa isa o dalawang sport
• Bumuo ng malalim na kaalaman
• Matutong kilalanin ang mga hindi kahusayan ng merkado
• Pagkatapos ay palawakin sa mga kaugnay na merkado`
      }
    ]
  },
  {
    id: 11,
    title: "11. Live Betting",
    slug: "live-betting",
    subtitle: "Mga estratehiya sa in-play betting",
    duration: "12 minutong pagbabasa",
    sections: [
      {
        title: "Mga Pangunahing Kaalaman sa Live Betting",
        content: `**Mga Kalamangan at Kahinaan ng Live Betting**

Mga Kalamangan:
• Makikita mo ang progreso ng laro
• Ang mga hindi kahusayan sa pagpepresyo ay nabubuo mula sa mabilis na reaksyon
• Pagkakataon na itama ang mga pre-match na pagkakamali

Mga Kahinaan:
• Kailangan ng mabilis na desisyon
• Mas mataas na panganib ng emosyonal na desisyon
• Karaniwang mas mataas ang margin

**Kailan Mag-Live Bet**

Pumasok sa live betting kapag:
• Mayroon kang malinaw na pangangatwiran
• Nag-overreact ang merkado
• Nagsaliksik ka na bago

Iwasan ang live betting kapag:
• Nababagot ka
• Tinutugis mo ang mga pagkatalo
• Walang pag-iisip ang ginagawa mo`
      }
    ]
  },
  {
    id: 12,
    title: "12. Pagpili ng Merkado",
    slug: "market-selection",
    subtitle: "Pagpili ng tamang merkado",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Mga Uri ng Merkado",
        content: `**Mga Pangunahing Merkado**

Moneyline/Match Winner:
• Pinakasimple: Sino ang mananalo?
• Kasama ang opsyon ng draw sa football
• Direkta pero hindi palaging pinakamahusay na halaga

Handicap/Spread:
• Nagbibigay ng virtual lead/deficit sa isang koponan
• Kapaki-pakinabang sa mga labang may malakas na paborito
• Madalas mas maganda ang margin

Totals (Over/Under):
• Taya sa kabuuang puntos/gol
• Walang pakialam sa panalo
• Maganda para sa pagsusuri ng estilo ng laro

**Pagpili ng Tamang Merkado**

Tumaya kung nasaan ang iyong bentahe:
• Kung sa tingin mo ay mananalo ang isang koponan pero masama ang moneyline, tingnan ang handicap
• Kung may opinyon ka sa scoring, tingnan ang totals
• Palaging hanapin ang merkado na pinakamahusay na nagpapahayag ng iyong pagsusuri`
      }
    ]
  },
  {
    id: 13,
    title: "13. Line Shopping",
    slug: "line-shopping",
    subtitle: "Pagkuha ng pinakamahusay na presyo",
    duration: "8 minutong pagbabasa",
    sections: [
      {
        title: "Kahalagahan ng Line Shopping",
        content: `**Bawat Punto ay Mahalaga**

Ang pagkakaiba sa pagitan ng 2.00 vs 1.95 ay malaki:
• €100 na taya sa 2.00 = €200 na potensyal na return
• €100 na taya sa 1.95 = €195 na potensyal na return
• Sa libu-libong taya, nagiging napakalaki ng pagkakaibang ito

**Paano Mag-Line Shop**

• Magkaroon ng maraming bookmaker account
• Gumamit ng odds comparison sites
• Palaging suriin bago tumaya
• Maghintay ng kaunti para sa pinakamahusay na presyo

**Mga Betting Exchange**

Ang mga exchange (tulad ng Betfair) ay minsan nag-aalok ng mas magandang presyo:
• Mas mababang margin
• Pero pansin sa commission
• Maaaring hindi palaging available ang liquidity`
      }
    ]
  },
  {
    id: 14,
    title: "14. Pamamahala ng Bookmaker",
    slug: "bookmaker-management",
    subtitle: "Mga estratehiya sa account",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Kalusugan ng Account",
        content: `**Pag-iwas sa Paghihigpit**

Madalas na nire-restrict ang mga matagumpay na maninaya. Upang maiwasan ito:
• Kumilos tulad ng normal na maninaya
• Paminsan-minsan na tumaya sa mga popular na taya
• Gamitin ang mga bonus
• Tumaya sa iba't ibang merkado

**Maraming Account**

Mga benepisyo ng maraming bookmaker account:
• Pinapayagan ang line shopping
• Proteksyon mula sa mga paghihigpit
• Access sa iba't ibang merkado
• Mga bonus at promosyon`
      }
    ]
  },
  {
    id: 15,
    title: "15. Mga Advanced na Konsepto",
    slug: "advanced-concepts",
    subtitle: "Mga malalim na estratehiya",
    duration: "15 minutong pagbabasa",
    sections: [
      {
        title: "Mga Advanced na Paksa",
        content: `**Kelly Criterion**

Ang Kelly Criterion ay isang mathematical formula na nagtatakda ng optimal na stake size:

Kelly % = (Odds × Posibilidad - 1) / (Odds - 1)

Halimbawa: 45% na posibilidad sa odds na 2.50
Kelly % = (2.50 × 0.45 - 1) / (2.50 - 1) = 0.125 / 1.50 = 8.3%

Sa praktikal na paggamit, karamihan ay gumagamit ng half o quarter Kelly.

**Closing Line Value (CLV)**

Ang CLV ang pinakamaasahang long-term indicator:
• Kung patuloy kang nakakakuha ng mas maganda kaysa sa closing line, malamang +EV ka
• Ang pag-track ng CLV ay maaaring mas informative kaysa sa mga resulta

**Correlation at Diversification**

• Iwasan ang mga correlated na taya (maraming taya sa parehong laro)
• Ang diversification ay nagpapababa ng variance
• Pero huwag ikompromiso ang kalidad`
      }
    ]
  },
  {
    id: 16,
    title: "16. Mga Karaniwang Pagkakamali",
    slug: "common-mistakes",
    subtitle: "Mga error na dapat iwasan",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Mga Karaniwang Error",
        content: `**Mga Pagkakamaling Pambaguhan**

1. Kakulangan ng pamamahala ng bankroll
2. Pagtugis ng mga pagkatalo
3. Biased na taya sa mga paboritong koponan
4. Pagtaya nang walang pananaliksik
5. Hindi pag-track ng iyong mga taya

**Mga Pagkakamaling Intermediate**

1. Sobrang kumpiyansa
2. Paggawa ng konklusyon mula sa maliliit na sample
3. Hindi nag-line shopping
4. Paghusga sa sarili batay lamang sa mga resulta
5. Pagbaba ng disiplina

**Paano Iwasan**

• Gumawa ng nakasulat na mga patakaran at sundin ang mga ito
• I-record ang bawat taya
• Regular na magsuri
• Huminto kapag emosyonal`
      }
    ]
  },
  {
    id: 17,
    title: "17. Pangmatagalang Pananaw",
    slug: "long-term-perspective",
    subtitle: "Pagpaplano para sa pangmatagalang tagumpay",
    duration: "10 minutong pagbabasa",
    sections: [
      {
        title: "Pangmatagalang Pag-iisip",
        content: `**Kahalagahan ng Pasensya**

Mabagal ang tagumpay sa pagtaya:
• Huwag umasa na maging kumikita sa unang taon
• Nangangailangan ng oras ang pag-aaral
• Matutunan ang paghawak ng variance

**Patuloy na Pagpapabuti**

• Suriin ang iyong mga record
• Matuto mula sa mga pagkakamali
• Bumuo ng bagong mga kasanayan
• Makibagay sa merkado

**Makatotohanang Inaasahan**

• Karamihan sa mga maninaya ay natatalo
• Mahirap ang positibong ROI
• Ang 3-5% ROI ay itinuturing na mahusay
• Hindi gumagana ang mga get-rich-quick na scheme`
      }
    ]
  },
  {
    id: 18,
    title: "18. Responsableng Pagsusugal",
    slug: "responsible-gambling",
    subtitle: "Ligtas at malusog na pagtaya",
    duration: "8 minutong pagbabasa",
    sections: [
      {
        title: "Responsableng Pagtaya",
        content: `**Pagtatakda ng mga Limitasyon**

• Magtakda ng budget at sundin ito
• Magtakda ng mga limitasyon sa oras
• Magtakda ng mga limitasyon sa pagkatalo
• Kapag naabot ang mga limitasyon, huminto

**Mga Babala**

• Pagsisikap na bawiin ang nawalang pera
• Pagsisinungaling tungkol sa pagtaya
• Paghiram ng pera para sa pagtaya
• Epekto sa mga relasyon o trabaho
• Palaging pag-iisip tungkol sa pagtaya

**Pagkuha ng Tulong**

Kung sa tingin mo ay may problema ka:
• Humanap ng propesyonal na tulong
• Gumamit ng mga self-exclusion tool
• Kausapin ang isang mapagkakatiwalaang tao`
      }
    ]
  },
  {
    id: 19,
    title: "19. Mga Tool at Resources",
    slug: "tools-and-resources",
    subtitle: "Mga kapaki-pakinabang na tool at site",
    duration: "8 minutong pagbabasa",
    sections: [
      {
        title: "Mga Mahalagang Tool",
        content: `**Mga Tracking Tool**

• Mga spreadsheet (Excel, Google Sheets)
• Mga dedikadong betting tracker
• Gumawa ng sarili mong sistema

**Mga Data Source**

• Mga opisyal na website ng liga
• Mga stats site (fbref, basketball-reference, etc.)
• Mga odds comparison site

**Komunidad**

• Mga betting forum (mag-ingat)
• Mga analyst sa Twitter/X
• Mga podcast at video
• Pero: palaging mag-isip nang nagsasarili`
      }
    ]
  },
  {
    id: 20,
    title: "20. Mga Case Study",
    slug: "case-studies",
    subtitle: "Mga praktikal na halimbawa",
    duration: "12 minutong pagbabasa",
    sections: [
      {
        title: "Halimbawang Pagsusuri",
        content: `**Case Study 1: Football Match Analysis**

Scenario: Premier League match, mid-table vs relegation-fighting team

Proseso ng Pagsusuri:
1. Suriin ang motibasyon: Isang koponan ay kailangang-kailangan, ang isa ay hindi
2. Team News: Mga pangunahing kawalan?
3. Kamakailang form: Kalidad, hindi lamang mga resulta
4. Head-to-head: Relevant kung kamakailan

Konklusyon: Nasaan ang halaga?

**Case Study 2: Pag-aaral mula sa Maling Taya**

Scenario: Isang taya na natalo pero maganda ang proseso

Review:
• Matibay ba ang pangangatwiran?
• Tama ba ang presyo?
• May napalampas ba?
• Randomness vs pagkakamali?`
      }
    ]
  },
  {
    id: 21,
    title: "21. Konklusyon at Mga Susunod na Hakbang",
    slug: "conclusion-and-next-steps",
    subtitle: "Ang landas pasulong",
    duration: "5 minutong pagbabasa",
    sections: [
      {
        title: "Buod at Mga Susunod na Hakbang",
        content: `**Buod ng mga Pangunahing Punto**

1. Gamitin ang value-based na pag-iisip
2. Gumamit ng wastong pamamahala ng bankroll
3. I-record ang bawat taya
4. Kontrolin ang mga emosyon
5. Magkaroon ng pangmatagalang pananaw
6. Patuloy na matuto at magpabuti

**Mga Susunod na Hakbang**

1. Itakda ang iyong bankroll
2. Mag-set up ng tracking system
3. Mag-focus sa isa o dalawang sport
4. Magsimula sa maliliit na taya
5. Regular na magsuri
6. Maging matiyaga

**Pangwakas na mga Kaisipan**

Ang pagtaya ay isang mahirap pero potensyal na rewarding na disiplina. Hindi agaran ang tagumpay, pero sa tamang pamamaraan, disiplina, at patuloy na pagpapabuti, ang mga pangmatagalang resulta ay posible. Good luck!`
      }
    ]
  }
]
