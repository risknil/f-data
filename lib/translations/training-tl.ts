import type { TrainingModule } from '@/lib/training-content'

export const trainingModulesTL: TrainingModule[] = [
  {
    id: 1,
    title: 'Ano ang Talagang Ginagawa ng Epektibong Mga Mananaya',
    slug: 'ano-ang-ginagawa-ng-epektibong-mga-mananaya',
    description: 'Ang pangunahing kaisipan at pag-uugali na naghihiwalay sa mga may disiplinang mananaya mula sa karamihan.',
    duration: '45 min',
    sections: [
      { title: 'Ang Kaisipan ng Kalahok sa Merkado', content: 'Ang pagpusta ay hindi tungkol sa paghula kung sino ang mananalo. Ito ay tungkol sa pagtatasa kung ang presyo na inaalok ay sumasalamin sa tunay na posibilidad, at paglalaro lamang kapag nakakakita ka ng pagkakaiba sa iyong pabor.' },
      { title: 'Ang Pagpili Kaysa sa Aksyon', content: 'Ang pagpusta ng may disiplina ay nangangahulugang pagtatasa ng maraming oportunidad at pagpili lamang ng mga may malinaw na bentahe. Ang karamihan ng mga aksyon na iyong susuriin ay dapat na tanggihan.' },
      { title: 'Ang Tunay na Paglalarawan ng Trabaho', content: 'Ang iyong trabaho bilang isang mananaya ay hindi pumili ng mga nanalo. Ang iyong trabaho ay maghanap ng mga pagkakamali sa presyo at pagsasamantalahan ang mga ito nang paulit-ulit.' },
      { title: 'Ano ang Naghihiwalay sa mga May Disiplinang Mananaya', content: 'Ang mga may disiplinang mananaya ay nagsusulat ng lahat, may malinaw na mga panuntunan, at nagre-review ng kanilang pagganap nang regular.' },
      { title: 'Bakit Sadyang Mahaba ang Manwal na Ito', content: 'Ang manwal na ito ay sinadyang detalyado dahil ang pagpusta ng may disiplina ay nangangailangan ng matatag na pundasyon ng kaalaman.' },
      { title: 'Ang Siklo ng Operasyon ng Mananaya', content: 'Ang bawat may disiplinang mananaya ay sumusunod sa isang siklo: Maghanda, Magtasa, Pumusta, Mag-record, Mag-review.' }
    ]
  },
  {
    id: 2,
    title: 'Paano Talaga Gumagana ang mga Bookmaker, Palitan, at Merkado ng Pagpusta',
    slug: 'paano-gumagana-ang-mga-bookmaker-at-merkado',
    description: 'Ang mekanika ng odds formation, margin application, at market behavior.',
    duration: '50 min',
    sections: [
      { title: 'Ang Negosyo ng Bookmaker', content: 'Ang bookmaker ay hindi sumusubok na hulaan ang mga resulta. Sila ay nagtatakda ng mga presyo na umaakit ng balanseng aksyon sa magkabilang panig ng isang merkado.' },
      { title: 'Paano Nabuo ang mga Odds', content: 'Ang mga odds ay nagsisimula sa mga probabilistic na modelo at inaayos batay sa inaasahang pag-uugali ng customer at aktwal na daloy ng pera.' },
      { title: 'Mga Palitan kumpara sa Mga Bookmaker', content: 'Ang mga palitan ng pagpusta tulad ng Betfair ay gumagana nang iba - tumaya ka laban sa ibang mga customer at ang palitan ay kumukuha lamang ng komisyon.' },
      { title: 'Mga Galaw ng Merkado at Ang Ibig Sabihin Nito', content: 'Ang mga odds ay gumagalaw dahil sa daloy ng pera at impormasyon. Ang iyong trabaho ay masuri kung ang kasalukuyang presyo ay kumakatawan sa halaga.' },
      { title: 'Mga Pagbabawal at Pamamahala ng Panganib ng Bookmaker', content: 'Ang mga bookmaker ay aktibong namamahala ng kanilang panganib sa pamamagitan ng paglilimita sa mga napatunayang kumikitang customer.' }
    ]
  },
  {
    id: 3,
    title: 'Odds, Implied Probability, at Fair Pricing',
    slug: 'odds-implied-probability-at-fair-pricing',
    description: 'Pag-convert sa pagitan ng mga format ng odds, pag-unawa sa margin, at pagtatasa ng halaga.',
    duration: '40 min',
    sections: [
      { title: 'Mga Format ng Odds na Ipinaliwanag', content: 'Ang decimal, fractional, at American odds ay kumakatawan sa parehong impormasyon sa iba\'t ibang paraan. Matuto ng mabilis na mag-convert sa pagitan ng mga format.' },
      { title: 'Pagkalkula ng Implied Probability', content: 'Ang implied probability ay nagsasabi sa iyo kung gaano kadalas dapat mangyari ang isang kaganapan para maging patas ang odds. Formula: Implied Probability = 1 / Decimal Odds.' },
      { title: 'Margin at Overround', content: 'Ang mga bookmaker ay nagdadagdag ng margin sa tunay na odds upang matiyak ang kita. Ang kabuuang implied probability sa isang merkado ay lalampas sa 100%.' },
      { title: 'Paghahanap ng Fair Price', content: 'Ang fair price ay ang odds na walang bentahe sa alinmang panig. Kung naniniwala kang ang isang koponan ay may 40% na pagkakataon, ang fair price ay 2.50.' },
      { title: 'Praktikal na Aplikasyon', content: 'Bago maglagay ng anumang taya, matuto ng kalkulahin ang implied probability sa iyong ulo at ihambing sa iyong pagtantya ng tunay na posibilidad.' }
    ]
  },
  {
    id: 4,
    title: 'Value, Expected Value, Line Shopping, at Closing Line Value',
    slug: 'value-expected-value-line-shopping',
    description: 'Mga pangunahing konsepto para sa kumikitang pagpusta at kung paano sukatin ang mga ito.',
    duration: '55 min',
    sections: [
      { title: 'Ano Talaga ang Value', content: 'Ang value ay umiiral kapag ang inaalok na odds ay mas mataas kaysa sa dapat batay sa tunay na posibilidad. Ang pagpusta sa value ay nangangahulugang paghahanap at pagsamantala ng mga pagkakaiba na ito nang paulit-ulit.' },
      { title: 'Pag-unawa sa Expected Value', content: 'Ang Expected Value (EV) ay kinakalkula ang iyong average na kita o pagkalugi bawat taya. Ang positibong EV ay nangangahulugang ang taya ay kumikita sa mahabang panahon.' },
      { title: 'Kahalagahan ng Line Shopping', content: 'Ang iba\'t ibang bookmaker ay nag-aalok ng iba\'t ibang odds para sa parehong kaganapan. Ang line shopping ay nangangahulugang paghahambing ng mga presyo sa maraming libro upang makuha ang pinakamahusay na odds.' },
      { title: 'Closing Line Value na Ipinaliwanag', content: 'Ang closing line ay ang odds bago mismo magsimula ang isang kaganapan - itinuturing na pinaka-tumpak. Kung regular kang nakakakuha ng mas magandang odds kaysa sa closing line, ito ay magandang senyales.' },
      { title: 'Kailan Hindi Dapat Pilitin ang Value Bet', content: 'Hindi lahat ng taya na may positibong EV ay dapat laruin. Isaalang-alang ang laki ng iyong sample, kumpiyansa sa iyong pagtantya, at mga gastos sa oportunidad.' }
    ]
  },
  {
    id: 5,
    title: 'Pamamahala ng Bankroll, Staking, at Pagkakaligtas sa ilalim ng Variance',
    slug: 'pamamahala-ng-bankroll-staking-at-variance',
    description: 'Pagprotekta sa iyong kapital at pagkalkula ng optimal na laki ng taya.',
    duration: '50 min',
    sections: [
      { title: 'Pagtatatag ng Iyong Bankroll', content: 'Ang iyong bankroll ay pera na itinalaga mo partikular para sa pagpusta - pera na kayang mong mawala. Huwag ihalo sa mga pondo ng pamumuhay.' },
      { title: 'Flat vs Variable Staking Systems', content: 'Ang flat staking ay nangangahulugang pagtaya ng parehong porsyento ng iyong bankroll sa bawat pagkakataon, karaniwang 1-3%. Ang variable systems ay nag-aadjust ng laki ng taya batay sa nakikitang edge.' },
      { title: 'Kelly Criterion at Praktikal na Paggamit Nito', content: 'Kinakalkula ng Kelly Criterion ang optimal na laki ng taya batay sa iyong edge at bankroll. Karamihan sa mga mananaya ay gumagamit ng half o quarter Kelly para sa mas mababang volatility.' },
      { title: 'Pag-unawa at Pagkakaligtas sa Variance', content: 'Ang variance ay natural na variation sa mga resulta. Kahit may edge ka, makakaranas ka ng losing streaks. Ang wastong pamamahala ng bankroll ay nagtitiyak na maliligtas mo ang mga panahong ito.' },
      { title: 'Mga Warning Sign at Health Check', content: 'Regular na suriin ang iyong bankroll. Sinusunod mo ba ang iyong staking plan? Tinatraso mo ba ang mga pagkalugi? Kung nalaman mong pinapalabnaw mo ang mga panuntunan, tumigil at muling suriin.' }
    ]
  },
  {
    id: 6,
    title: 'Ang Buong Workflow ng Mananaya: Mula Fixture List hanggang Placed Bet',
    slug: 'buong-workflow-ng-mananaya',
    description: 'Step-by-step na proseso para sa paghahanap, pagtatasa, at pag-execute ng mga taya.',
    duration: '45 min',
    sections: [
      { title: 'Paghahanda at Setup', content: 'Simulan ang iyong araw ng pagpusta sa pamamagitan ng pagsusuri ng fixture list. Tukuyin ang mga laro na karapat-dapat suriin. I-set up ang iyong workspace at tipunin ang iyong mga data source.' },
      { title: 'Mga Hakbang sa Pre-Match Analysis', content: 'Suriin ang bawat laro bago tingnan ang odds. I-focus sa form, team news, training, conditions, at iba pang kaugnay na mga salik. Bumuo ng sarili mong opinyon muna.' },
      { title: 'Paghahanap ng Value', content: 'Matapos ang iyong pagsusuri, tingnan ang mga merkado para sa mga pagkakaiba sa pagitan ng iyong pagtantya at inaalok na odds. Gumamit ng maraming account para makuha ang pinakamahusay na mga presyo.' },
      { title: 'Mga Desisyon sa Execution', content: 'Magpasya kung aling mga taya ang kukunin batay sa nakikita mong value at iyong kumpiyansa. Kalkulahin ang laki ng taya gamit ang iyong staking system. Ilagay ang mga taya ng sistematiko.' },
      { title: 'Pagre-record at Pagsubaybay', content: 'Agad pagkatapos maglagay ng taya, idokumento ito sa iyong rekord. Isama ang petsa, kaganapan, pagpipilian, odds, stake, rasyunal, at mamaya ang resulta.' }
    ]
  },
  {
    id: 7,
    title: 'Klase ng Football',
    slug: 'klase-ng-football',
    description: 'Mga partikular na merkado ng football, data frameworks, at analytical approaches.',
    duration: '60 min',
    sections: [
      { title: 'Pag-unawa sa Mga Merkado ng Football', content: 'Ang football ay nag-aalok ng maraming merkado - match result, goals, corners, Asian handicaps, at higit pa. Bawat merkado ay may sariling mga katangian.' },
      { title: 'Mga Data Source at Statistics', content: 'Ang modernong football statistics ay kinabibilangan ng xG, xA, pressing models, at higit pa. Alamin kung aling mga source ang maaasahan at kung paano gamitin ang data na ito.' },
      { title: 'League at Team Analysis', content: 'Ang iba\'t ibang liga ay may iba\'t ibang mga katangian - ang ilan ay defensive, ang ilan ay open. Ang mga koponan ay may sariling mga istilo. Ang pag-unawa sa mga pattern na ito ay nakakatulong sa pagtatasa ng value.' },
      { title: 'Situational at Contextual Factors', content: 'Ang congested schedules, match importance, motivation, at travel ay nakakaapekto lahat sa mga resulta. Ang merkado ay madalas na nakakaligtaan ang mga salik na ito.' },
      { title: 'Mga Niche Market', content: 'Bukod sa match result, mayroong corners, goals, halves, at higit pa. Ang mga merkado na ito ay maaaring mag-alok ng value kung saan ang mga pangunahing merkado ay wala.' }
    ]
  },
  {
    id: 8,
    title: 'Klase ng Horse Racing',
    slug: 'klase-ng-horse-racing',
    description: 'Fundamentals ng horse racing betting, mga uri ng karera, at analytical approach.',
    duration: '55 min',
    sections: [
      { title: 'Horse Racing Fundamentals', content: 'Ang horse racing ay naiiba sa team sports. Bawat karera ay natatanging kaganapan na may maraming variable - kabayo, jockey, trainer, distance, surface, panahon.' },
      { title: 'Mga Uri ng Karera at Merkado', content: 'Flat, jumps, handicaps, graded races - bawat isa ay may sariling mga katangian. Ang mga betting market ay kinabibilangan ng win, place, each way, forecast, at higit pa.' },
      { title: 'Form Analysis', content: 'Ang form ng kabayo - ang kasaysayan ng mga kamakailang karera - ay pangunahing data. Ngunit kailangan mong bigyang-kahulugan ito nang maingat sa konteksto ng kalidad ng kompetisyon, surface, at distance.' },
      { title: 'Pagbabasa ng Merkado', content: 'Ang mga merkado ng horse racing ay nagpapakita ng maraming impormasyon sa pamamagitan ng mga pagbabago sa presyo. Matutong basahin ang mga ito - money flow, market moves, at smart money signals.' },
      { title: 'Pamamahala ng Bankroll sa Horse Racing', content: 'Ang horse racing ay may mataas na variance - ang mga paborito ay madalas na natatalo. Ang pamamahala ng bankroll ay dapat sumalamin dito - mas maliliit na stake, matibay na staking system.' }
    ]
  },
  {
    id: 9,
    title: 'Klase ng Tennis',
    slug: 'klase-ng-tennis',
    description: 'Tennis betting, match analysis, at in-play opportunities.',
    duration: '45 min',
    sections: [
      { title: 'Tennis Betting Fundamentals', content: 'Ang tennis ay individual sport - walang koponan para itago ang mga kahinaan ng manlalaro. Lumilikha ito ng mga pagkakataon para sa mga nakakasuri ng form at matchup.' },
      { title: 'Pag-unawa sa Surface at Conditions', content: 'Ang hard courts, clay, at grass ay lahat ay pabor sa iba\'t ibang istilo ng laro. Ang ilang manlalaro ay mahusay sa isang surface ngunit mahina sa iba.' },
      { title: 'Match at Set Markets', content: 'Bukod sa match winner, nag-aalok ang tennis ng set, game, at point markets. Ang mga ito ay maaaring mag-alok ng value kung saan ang main market ay maayos na na-price.' },
      { title: 'In-Play Betting', content: 'Ang tennis ay angkop para sa in-play dahil sa format nito - maraming puntos, nagbabago ang momentum, nagpapatuloy na odds changes. Kung marunong kang basahin ang mga laro, may mga karagdagang oportunidad.' },
      { title: 'Mga Player Factor', content: 'Ang mga pinsala, pagkapagod, motivasyon, at mental state ay lahat nakakaapekto sa tennis performance. Dahil individual sport ito, mas malaki ang epekto ng mga salik na ito.' }
    ]
  },
  {
    id: 10,
    title: 'Klase ng Basketball',
    slug: 'klase-ng-basketball',
    description: 'NBA at basketball betting, markets, at methodology.',
    duration: '50 min',
    sections: [
      { title: 'Basketball Betting Fundamentals', content: 'Ang basketball ay high-scoring, ginagawang mahalagang bahagi ang variance. Ang mga laronang malapit ng 1-2 puntos ay karaniwan, kaya mahalaga ang spreads at totals.' },
      { title: 'Pag-unawa sa Lines at Spreads', content: 'Ang NBA ay mabigat na binetted sa spreads kaysa money lines. Ang spread ng -5.5 ay nangangahulugang kailangang manalo ng koponan ng 6+ puntos. Alamin kung paano ito gumagana.' },
      { title: 'Totals Markets', content: 'Ang totals (over/under) sa game scoring ay isa pang mahalagang merkado. Ang pace, defense, at iba pang mga salik ay nakakaapekto sa kabuuang scoring.' },
      { title: 'Schedule at Fatigue Factors', content: 'Ang NBA ay may mahabang schedule at maraming laro. Ang back-to-backs, mahabang biyahe, at pahinga ay nakakaapekto sa performance.' },
      { title: 'Team at Player News', content: 'Ang mga pinsala sa key players ay may malaking epekto. Ang roster changes at coaching strategies ay nakakaapekto sa koponan. Subaybayan ang balita at unawain kung paano nakakaapekto ang mga pagbabago sa lines.' }
    ]
  },
  {
    id: 11,
    title: 'Klase ng Ice Hockey',
    slug: 'klase-ng-ice-hockey',
    description: 'NHL betting, markets, at analytical approaches.',
    duration: '45 min',
    sections: [
      { title: 'Ice Hockey Betting Fundamentals', content: 'Ang ice hockey ay low-scoring na may mataas na variance. Ito ay nangangahulugang ang mas mahinang koponan ay madalas na nananalo. Ang malalaking paborito ay madalas na walang value.' },
      { title: 'Puckline at Ibang Markets', content: 'Ang puckline (spread ng +/-1.5) ay popular na merkado. Dahil maraming laro ay nagtatapos sa 1-goal margin, ang puckline ay may natatanging pag-uugali.' },
      { title: 'Kahalagahan ng Goaltender', content: 'Ang goaltender ay may napakalaking epekto sa mga resulta. Ang top goalie ay maaaring gawing mahirap talunin ang isang average na koponan. Subaybayan kung sino ang nagsisimula.' },
      { title: 'Schedule Factors', content: 'Ang NHL ay may dense schedule na may maraming biyahe. Ang back-to-backs ay karaniwan. Ang mga salik na ito ay nakakaapekto sa performance.' },
      { title: 'Value sa Hockey', content: 'Dahil sa mataas na variance, ang value sa hockey ay madalas na nasa pagkuha ng underdogs. Kung matukoy mo kung kailan ang mas mahinang koponan ay may mas magandang pagkakataon kaysa ipinahihiwatig ng odds.' }
    ]
  },
  {
    id: 12,
    title: 'Klase ng Baseball',
    slug: 'klase-ng-baseball',
    description: 'MLB betting, markets, at analytical approaches.',
    duration: '50 min',
    sections: [
      { title: 'Baseball Betting Fundamentals', content: 'Ang baseball ay large sample game - 162 laro bawat season. Ito ay lumilikha ng natatanging oportunidad. Ang pinakamahusay na koponan ay madalas na natalo, ang pinakamasama ay madalas na nanalo.' },
      { title: 'Kahalagahan ng Starting Pitcher', content: 'Ang starting pitcher ay may napakalaking epekto sa mga resulta. Ang malaking bahagi ng money line ay depende sa kung sino ang nagsisimula. Matutong suriin ang mga pitcher.' },
      { title: 'Runline at Totals Markets', content: 'Ang runline (-1.5/+1.5) at totals ay mahalagang merkado. Dahil maraming laro ay malapit, ang runline ay may natatanging pag-uugali.' },
      { title: 'Mga Park Factor', content: 'Ang mga baseball park ay nag-iiba-iba ng malaki - ang ilan ay pabor sa hitters, ang ilan sa pitchers. Ang panahon, lalo na ang hangin, ay may malaking epekto.' },
      { title: 'Mahabang Season at Variance', content: 'Ang 162-game season ay nangangahulugang malaking sample ngunit mahabang losing streak din. Ang pamamahala ng bankroll at pasensya ay mahalaga.' }
    ]
  },
  {
    id: 13,
    title: 'Klase ng American Football',
    slug: 'klase-ng-american-football',
    description: 'NFL at college football betting.',
    duration: '55 min',
    sections: [
      { title: 'NFL Betting Fundamentals', content: 'Ang NFL ay highly competitive league kung saan maraming laro ay malapit. Ang spreads ay napakahalaga. Pag-unawa kung paano gumagana ang mga linya at kung saan matatagpuan ang value.' },
      { title: 'Pag-unawa sa Spreads at Totals', content: 'Ang NFL spread ay karaniwang nasa loob ng 3-7 puntos. Ang key numbers tulad ng 3 at 7 ay may espesyal na kahalagahan dahil sa scoring structure.' },
      { title: 'College Football', content: 'Ang college football ay may mas malaking variance sa talent levels. Ang spreads ay maaaring napakalaki. May mas maraming oportunidad ngunit mas maraming hamon din.' },
      { title: 'Weather at Injury Factors', content: 'Ang panahon - lalo na ang hangin at lamig - ay nakakaapekto sa passing game at kicking. Ang mga pinsala ay may malaking epekto sa small-roster sport.' },
      { title: 'Contextual Factors', content: 'Ang kahalagahan ng laro, rivalries, revenge, at iba pang contextual factors ay nakakaapekto sa performance. Isaalang-alang ang konteksto sa iyong pagsusuri.' }
    ]
  },
  {
    id: 14,
    title: 'Ibang Sports at Specialist Niches',
    slug: 'ibang-sports-at-specialist-niches',
    description: 'Pagpusta sa minor sports at specialized markets.',
    duration: '40 min',
    sections: [
      { title: 'Ang Bentahe ng Minor Sports', content: 'Ang minor sports at specialized markets ay madalas na may mas malalaking edge dahil ang mga bookmaker ay namumuhunan ng mas kaunting resources sa mga linya.' },
      { title: 'Pagpili ng Iyong Niche', content: 'Pumili ng sports o markets na gusto mo at maaari mong pag-aralan ng malalim. Mas mabuti ang malalim na kaalaman sa maliit na lugar kaysa mababaw na kaalaman sa marami.' },
      { title: 'Mga Hamon sa Liquidity', content: 'Ang minor markets ay may mas mababang liquidity - hindi ka makakapaglagay ng malalaking taya nang hindi nakakaapekto sa mga linya. Isaalang-alang ito sa iyong planning.' },
      { title: 'Mga Information Source', content: 'Ang minor sports ay may mas kaunting sources ng impormasyon - ito ay parehong bentahe at hamon. Bumuo ng network ng maaasahang sources.' },
      { title: 'Pagsisimula at Pag-unlad', content: 'Magsimula sa pamamagitan ng pag-aaral ng isang merkado nang mabuti. Magtayo ng track record at patunayan ang iyong edge bago magdagdag ng mga lugar.' }
    ]
  },
  {
    id: 15,
    title: 'Masterclass sa Mga Uri ng Bet',
    slug: 'masterclass-sa-mga-uri-ng-bet',
    description: 'Pag-unawa sa lahat ng uri ng taya at kanilang mga paggamit.',
    duration: '45 min',
    sections: [
      { title: 'Basic Bet Types', content: 'Ang moneyline, spreads, at totals (over/under) ay pangunahing mga uri. Bawat isa ay may sariling mga paggamit. Matuto kung kailan gagamitin ang bawat uri.' },
      { title: 'Asian Handicaps', content: 'Ang Asian handicaps ay inaalis ang posibilidad ng draw sa pamamagitan ng paghahati ng iyong stake. Maaaring kumplikado ngunit madalas na nag-aalok ng mas magandang odds.' },
      { title: 'Combination Bets', content: 'Ang parlays, accumulators, at iba pang combinations ay nag-uugnay ng maraming taya. Mas mataas ang payout ngunit mas mababa ang probability. Sa pangkalahatan, negative EV maliban sa espesyal na sitwasyon.' },
      { title: 'Prop at Special Bets', content: 'Ang props ay mga taya sa partikular na kaganapan sa loob ng laro - player scores, specific stats, atbp. Ang mga merkado na ito ay maaaring mag-alok ng value.' },
      { title: 'Futures Bets', content: 'Ang futures ay mga taya sa long-term outcomes - league winners, relegation, atbp. Nakatali ang pera mo ng matagal ngunit maaaring matagpuan ang value, lalo na maaga sa season.' }
    ]
  },
  {
    id: 16,
    title: 'Personal na Betting Notebook, Decision Log, at Review Record',
    slug: 'personal-na-betting-notebook',
    description: 'Pagtatatag at pagpapanatili ng iyong recording system.',
    duration: '35 min',
    sections: [
      { title: 'Bakit Mahalaga ang Pag-record', content: 'Kung walang rekord, hindi mo malalaman kung kumikita ka. Ang memorya ay biased - natatandaan mo ang mga panalo at nakakalimutan ang mga talo. Ang nakasulat na rekord ay nagbibigay ng katotohanan.' },
      { title: 'Ano ang Dapat I-record', content: 'Bawat taya ay dapat may: petsa, kaganapan, pagpipilian, odds, stake, iyong rasyunal, at resulta. Magdagdag ng anumang karagdagang impormasyon na maaaring makatulong sa hinaharap na pagsusuri.' },
      { title: 'Mga Tool sa Pag-record', content: 'Ang simpleng spreadsheet ay gumagana ng mabuti. Maaari ka ring gumamit ng specialized bet tracking software. Ang mahalaga ay ang iyong system ay madaling gamitin at masuri.' },
      { title: 'Pagsusuri ng Rekord', content: 'Regular na suriin ang iyong rekord. Tingnan ang profit/loss ayon sa sport, merkado, at odds range. Maghanap ng mga pattern - kung saan ka malakas at kung saan mahina.' },
      { title: 'Katapatan at Transparency', content: 'I-record ang lahat ng taya - panalo at talo. Huwag baguhin ang kasaysayan. Ang layunin ay matuto at umunlad, hindi magpakaligaya. Ang ganap na katapatan sa sarili ay mahalaga.' }
    ]
  },
  {
    id: 17,
    title: 'Pag-review ng Performance, Pagpapanatili ng Rekord, at Pag-aaral Mula sa Mga Resulta',
    slug: 'pag-review-ng-performance-at-pag-aaral',
    description: 'Proseso para sa pagtatasa at pagpapabuti ng iyong betting.',
    duration: '40 min',
    sections: [
      { title: 'Review Schedule', content: 'Magtakda ng regular na iskedyul para sa pag-review ng iyong performance - lingguhan, buwanan, o quarterly. Ang regular na review ay nagpapahintulot sa iyo na matukoy ang mga problema nang maaga.' },
      { title: 'Mga Metric na Susubaybayan', content: 'Ang profit/loss ay mahalaga ngunit hindi lamang. Subaybayan din ang: ROI, win percentage, CLV, performance ayon sa sport/market, at mga trend sa paglipas ng panahon.' },
      { title: 'Pagkilala sa mga Pattern', content: 'Tingnan ang iyong rekord para sa mga pattern. Malakas ka ba sa partikular na sports? Natatalo ka ba sa partikular na uri ng taya? Ang mga pattern na ito ay nagpapakita kung saan dapat pagbutihin.' },
      { title: 'Pag-aayos ng Diskarte', content: 'Batay sa iyong pagsusuri, gumawa ng maliliit na pagbabago sa iyong diskarte. Mas magpokus sa sports kung saan ka mahusay. Alisin ang mga merkado kung saan ka natatalo. Ang mga pagbabago ay dapat maging gradual.' },
      { title: 'Pag-iwas sa Overreaction', content: 'Ang mga short-term na resulta ay maaaring noise lamang. Huwag baguhin ang iyong diskarte dahil sa isang linggong pagkatalo. Tingnan ang mga long-term trend. Ang maliliit na sample ay hindi nagbibigay ng maaasahang impormasyon.' }
    ]
  },
  {
    id: 18,
    title: 'Sikolohiya, Disiplina, Tilt Control, at Professional Routines',
    slug: 'sikolohiya-disiplina-at-tilt-control',
    description: 'Pamamahala ng emosyon at pagpapanatili ng betting discipline.',
    duration: '50 min',
    sections: [
      { title: 'Pag-unawa sa Emosyon sa Pagpusta', content: 'Ang pagpusta ay nagdudulot ng malakas na emosyon - excitement ng panalo, galit sa pagkatalo. Ang mga emosyong ito ay maaaring magdulot ng masamang desisyon kung hindi napamamahalaan.' },
      { title: 'Tilt at Kung Paano Ito Iwasan', content: 'Ang tilt ay estado ng paggawa ng masamang desisyon dahil sa emosyon - karaniwang pagkatapos matalo. Ang mga senyales ay kinabibilangan ng: pagtaas ng stake, pagtaya sa mga larong hindi mo sinuri, paghahabol ng talo.' },
      { title: 'Pagtatatag ng mga Routine', content: 'Ang regular na routines ay tumutulong sa pagpapanatili ng disiplina. Magtakda ng partikular na oras para sa pagsusuri. Sundin ang parehong proseso sa bawat pagkakataon.' },
      { title: 'Pamamahala ng mga Expectation', content: 'Ang kumikitang pagpusta ay mahirap na trabaho. Ang malalaking at mabilis na panalo ay bihira. Magtakda ng realistic na expectations - maliit ngunit steady na kita sa paglipas ng panahon.' },
      { title: 'Balanse sa Buhay', content: 'Ang pagpusta ay hindi dapat ang buong buhay mo. Magtakda ng mga hangganan - oras para sa pagpusta, pera para sa pagpusta. Magpanatili ng balanseng buhay na may ibang gawain.' }
    ]
  },
  {
    id: 19,
    title: 'Safer Gambling Standards, Compliance Awareness, at Personal Protection',
    slug: 'safer-gambling-standards-at-personal-protection',
    description: 'Responsableng pagpusta at pagprotekta sa sarili mula sa pinsala.',
    duration: '35 min',
    sections: [
      { title: 'Responsableng Pagpusta', content: 'Ang pagpusta ay dapat maging kontroladong libangan, hindi pangangailangan. Ang mga senyales ng problema ay kinabibilangan ng: pagpusta ng higit sa kaya mo, paghahabol ng talo, pagsisinungaling tungkol sa pagpusta, pag-aalala tungkol sa pagpusta.' },
      { title: 'Pagtatakda ng mga Hangganan', content: 'Magtakda ng mga hangganan bago magsimula: maximum na halaga ng pagpusta, maximum na oras, at mga panuntunan para sa paghinto. Isulat ang mga hangganan na ito at sundin ang mga ito.' },
      { title: 'Mga Resource ng Suporta', content: 'Kung nag-aalala ka tungkol sa iyong betting behavior, humingi ng tulong. Maraming organisasyon ang nag-aalok ng libre at confidential na suporta. Ang paghingi ng tulong ay tanda ng lakas, hindi kahinaan.' },
      { title: 'Legal Environment', content: 'Ang pagpusta ay pinamamahalaan ng batas na nag-iiba-iba ayon sa bansa at rehiyon. Alamin ang batas ng iyong lugar. Gumamit ng licensed at regulated na mga libro.' },
      { title: 'Pagprotekta ng Iyong Impormasyon', content: 'Protektahan ang iyong personal at financial na impormasyon. Gumamit ng malakas na password, two-factor authentication, at iba pang security precautions. Huwag ibahagi ang account information sa sinuman.' }
    ]
  },
  {
    id: 20,
    title: 'Practical Exercises at Appendix',
    slug: 'practical-exercises-at-appendix',
    description: 'Mga pagsasanay para sa paggamit ng iyong mga kasanayan at karagdagang mga resource.',
    duration: '30 min',
    sections: [
      { title: 'Mga Pagsasanay sa Pagkalkula', content: 'Magsanay ng pag-convert ng odds, pagkalkula ng implied probability, at pagtatasa ng value. Magsimula sa simpleng mga halimbawa at maging mas kumplikado. Ang mga kasanayang ito ay dapat maging natural.' },
      { title: 'Practice Match Analysis', content: 'Kumuha ng nakaraang laro at gawin ang buong pagsusuri nang hindi tinitingnan ang resulta. Pagkatapos ihambing ang iyong pagsusuri sa kung ano ang nangyari. Ito ay tumutulong sa pagtatasa ng kalidad ng iyong pagsusuri.' },
      { title: 'Pagtatatag ng Practice Record', content: 'Magsimulang mag-record ng mga taya (totoo o pagsasanay) gamit ang inilarawan na sistema. Gawin ito ng hindi bababa sa isang buwan bago suriin. Inihahanda ka ng pagsasanay na ito para sa disiplina ng pag-record.' },
      { title: 'Paglikha ng Iyong Plano', content: 'Isulat ang iyong betting plan: mga sport na tatalakayin, staking system, mga routine, at mga panuntunan. Ang pagkakaroon ng malinaw na plano bago magsimula ay tumutulong sa pagpapanatili ng disiplina.' },
      { title: 'Mga Susunod na Hakbang', content: 'Pagkatapos ng manwal na ito, mayroon kang matibay na pundasyon. Ang mga susunod na hakbang ay: magsimula ng maingat, patuloy na matuto, mag-record ng tapat, at regular na mag-review. Ang paglalakbay ng may disiplinang pagpusta ay panghabangbuhay.' }
    ]
  }
]
