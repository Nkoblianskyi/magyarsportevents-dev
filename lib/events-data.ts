// Shared events data for MagyarSportEvents
export interface Partner {
  name: string
  url: string
  slug: string
}

export interface PriceOffer {
  partner: Partner
  priceFrom: number
  priceTo: number
  available: boolean
  url: string
}

export interface SportEvent {
  slug: string
  title: string
  sport: string
  venue: string
  city: string
  date: string  // ISO date string
  dateLabel: string
  image: string
  priceFrom: number
  priceTo: number
  description: string
  offers: PriceOffer[]
  featured?: boolean
}

export const PARTNERS: Partner[] = [
  { name: 'Eventim', url: 'https://www.eventim.hu', slug: 'eventim' },
  { name: 'AXS', url: 'https://www.axs.com', slug: 'axs' },
  { name: 'StubHub', url: 'https://www.stubhub.com', slug: 'stubhub' },
  { name: 'Viagogo', url: 'https://www.viagogo.com', slug: 'viagogo' },
  { name: 'Ticketmaster', url: 'https://www.ticketmaster.com', slug: 'ticketmaster' },
  { name: 'Jegymester', url: 'https://www.jegymester.hu', slug: 'jegymester' },

]

export const EVENTS: SportEvent[] = [
  {
    slug: 'formula1-magyar-nagydij-2026',
    title: 'Formula 1 Magyar Nagydíj 2026',
    sport: 'Motorsport',
    venue: 'Hungaroring',
    city: 'Mogyoród, Budapest',
    date: '2026-07-19',
    dateLabel: '2026. július 19–21.',
    image: '/images/events/formula1-hungarian-gp.jpg',
    priceFrom: 45000,
    priceTo: 380000,
    featured: true,
    description: 'A világ legjobb Forma-1-es versenyzői ismét Magyarországon! A Hungaroringen rendezett Magyar Nagydíj az egyik legfelkapottabb esemény a naptárban. Háromnapos élmény - szabadedzés, időmérő és a főverseny.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 52000, priceTo: 320000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[1], priceFrom: 48000, priceTo: 380000, available: true, url: 'https://www.axs.com' },
      { partner: PARTNERS[2], priceFrom: 55000, priceTo: 360000, available: true, url: 'https://www.stubhub.com' },
      { partner: PARTNERS[3], priceFrom: 45000, priceTo: 340000, available: true, url: 'https://www.viagogo.com' },
      { partner: PARTNERS[4], priceFrom: 50000, priceTo: 350000, available: true, url: 'https://www.ticketmaster.com' },
    ],
  },
  {
    slug: 'ferencvaros-bajnokok-ligaja-2026',
    title: 'Ferencváros TC - Bajnokok Ligája Csoportkör',
    sport: 'Labdarúgás',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    date: '2026-09-15',
    dateLabel: '2026. szeptember 15.',
    image: '/images/events/football-fradi-ferencvaros.jpg',
    priceFrom: 8500,
    priceTo: 85000,
    featured: true,
    description: 'A Ferencváros TC hazai pályán mérkőzik a Bajnokok Ligája csoportkörében. A Groupama Aréna telt ház előtt fogadja Európa egyik legjobb csapatát. Felejthetetlen este a zöld-fehér szurkolóknak!',
    offers: [
      { partner: PARTNERS[0], priceFrom: 9000, priceTo: 75000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 8500, priceTo: 65000, available: true, url: 'https://www.jegymester.hu' },
  
      { partner: PARTNERS[2], priceFrom: 12000, priceTo: 85000, available: true, url: 'https://www.stubhub.com' },
      { partner: PARTNERS[3], priceFrom: 11000, priceTo: 80000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'atletika-diamond-league-budapest-2026',
    title: 'Atlétikai Diamond League - Budapest 2026',
    sport: 'Atlétika',
    venue: 'Nemzeti Atlétikai Központ',
    city: 'Budapest',
    date: '2026-07-05',
    dateLabel: '2026. július 5.',
    image: '/images/events/athletics-diamond-league.jpg',
    priceFrom: 5000,
    priceTo: 45000,
    featured: true,
    description: 'A világ legjobb atlétái gyűlnek össze Budapesten a Diamond League sorozat keretében. Futás, ugrás, dobás - minden eseményen a legjobbak versenyeznek a pontokért és a világrekordokért.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 5000, priceTo: 35000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 5500, priceTo: 38000, available: true, url: 'https://www.jegymester.hu' },
      
      { partner: PARTNERS[2], priceFrom: 6500, priceTo: 45000, available: true, url: 'https://www.stubhub.com' },
    ],
  },
  {
    slug: 'tenisz-budapest-grand-prix-2026',
    title: 'Budapest Grand Prix — WTA Tenisztorna',
    sport: 'Tenisz',
    venue: 'Magyar Tenisz Centrum',
    city: 'Budapest',
    date: '2026-07-12',
    dateLabel: '2026. július 12-19.',
    image: '/images/events/tennis-budapest-open.jpg',
    priceFrom: 3500,
    priceTo: 28000,
    description: 'A Budapest Grand Prix az egyik legrégebbi WTA tenisztorna Európában. A selyempályán a világ top-50-es teniszezőnői küzdenek meg a trófeáért és a ranglistapontokért.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 3500, priceTo: 22000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 4000, priceTo: 24000, available: true, url: 'https://www.jegymester.hu' },
     
      { partner: PARTNERS[2], priceFrom: 5000, priceTo: 28000, available: true, url: 'https://www.stubhub.com' },
    ],
  },
  {
    slug: 'kosarlabda-falco-kb-eurocup-2026',
    title: 'Falco KC - EuroCup Kosárlabda',
    sport: 'Kosárlabda',
    venue: 'Savaria Aréna',
    city: 'Szombathely',
    date: '2026-11-04',
    dateLabel: '2026. november 4.',
    image: '/images/events/basketball-falco-kb.jpg',
    priceFrom: 4000,
    priceTo: 22000,
    description: 'A Falco KC hazai pályán szerepel az EuroCup csoportkörében. A Savaria Aréna fergeteges hangulatot ígér, ahogy a szombathelyi csapat küzd az európai babérokért.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 4000, priceTo: 18000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 4500, priceTo: 20000, available: true, url: 'https://www.jegymester.hu' },
      
      { partner: PARTNERS[3], priceFrom: 5000, priceTo: 22000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'uszas-vilagkupa-budapest-2026',
    title: 'Úszás Világkupa — Budapest 2026',
    sport: 'Úszás',
    venue: 'Duna Aréna',
    city: 'Budapest',
    date: '2026-10-10',
    dateLabel: '2026. október 10–12.',
    image: '/images/events/swimming-worldcup.jpg',
    priceFrom: 4500,
    priceTo: 35000,
    description: 'A Budapest a világ úszósportjának egyik legfontosabb helyszíne. A Duna Aréna ad otthont a FINA World Cup sorozat egyik állomásának, ahol olimpiai bajnokok versenyeznek.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 4500, priceTo: 28000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 5000, priceTo: 30000, available: true, url: 'https://www.jegymester.hu' },
      
      { partner: PARTNERS[2], priceFrom: 6000, priceTo: 35000, available: true, url: 'https://www.stubhub.com' },
    ],
  },
  {
    slug: 'kezilabda-veszprem-champions-league-2026',
    title: 'Veszprém HC - EHF Bajnokok Ligája',
    sport: 'Kézilabda',
    venue: 'Veszprém Aréna',
    city: 'Veszprém',
    date: '2026-10-22',
    dateLabel: '2026. október 22.',
    image: '/images/events/handball-veszprem.jpg',
    priceFrom: 5500,
    priceTo: 40000,
    description: 'A Telekom Veszprém ismét a legjobb európai csapatok között szerepel az EHF Bajnokok Ligájában. A Veszprém Aréna fergeteges hangulatot teremt az egyik legizgalmasabb hazai meccsen.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 5500, priceTo: 32000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 6000, priceTo: 35000, available: true, url: 'https://www.jegymester.hu' },
    
      { partner: PARTNERS[3], priceFrom: 7000, priceTo: 40000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'jegkorong-alba-volán-liga-2026',
    title: 'Alba Volán SC — ICEHL Jégkorong',
    sport: 'Jégkorong',
    venue: 'Tüskecsarnok',
    city: 'Székesfehérvár',
    date: '2026-11-14',
    dateLabel: '2026. november 14.',
    image: '/images/events/ice-hockey-alba.jpg',
    priceFrom: 3000,
    priceTo: 18000,
    description: 'Az Alba Volán SC a Közép-Európai Jégkorong Liga (ICEHL) egyik legjobb csapata. A Tüskecsarnokban rendezett hazai mérkőzések mindig szenvedélyes csatákat tartogatnak.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 3000, priceTo: 15000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 3500, priceTo: 16000, available: true, url: 'https://www.jegymester.hu' },
      { partner: PARTNERS[3], priceFrom: 4000, priceTo: 18000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'motogp-brno-2026',
    title: 'MotoGP - Cseh Nagydíj Brno 2026',
    sport: 'Motorsport',
    venue: 'Automotodrom Brno',
    city: 'Brno, Csehország',
    date: '2026-08-02',
    dateLabel: '2026. augusztus 2–4.',
    image: '/images/events/motogp-brno.jpg',
    priceFrom: 18000,
    priceTo: 120000,
    description: 'A MotoGP visszatér Brnóba! A legendás csehországi pályán a világ legjobb motorosai csapnak össze. Három nap tele sebességgel, technikával és hatalmas rajongói izgalommal.',
    offers: [
      { partner: PARTNERS[1], priceFrom: 20000, priceTo: 95000, available: true, url: 'https://www.axs.com' },
      { partner: PARTNERS[2], priceFrom: 22000, priceTo: 110000, available: true, url: 'https://www.stubhub.com' },
      { partner: PARTNERS[3], priceFrom: 18000, priceTo: 105000, available: true, url: 'https://www.viagogo.com' },
      { partner: PARTNERS[4], priceFrom: 21000, priceTo: 120000, available: true, url: 'https://www.ticketmaster.com' },
    ],
  },
  {
    slug: 'bokszgala-budapest-2026',
    title: 'Prémium Bokszgála - Budapest 2026',
    sport: 'Boksz',
    venue: 'Budapest Sportaréna',
    city: 'Budapest',
    date: '2026-09-26',
    dateLabel: '2026. szeptember 26.',
    image: '/images/events/boxing-gala-budapest.jpg',
    priceFrom: 7500,
    priceTo: 65000,
    description: 'Budapest ad otthont az év legjobb bokszkártyájának. Több súlycsoportban magyar és külföldi bajnokok mérkőznek meg egymással a Sport Arénában. VIP és ringside helyek korlátozott számban.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 7500, priceTo: 55000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 8000, priceTo: 58000, available: true, url: 'https://www.jegymester.hu' },
      { partner: PARTNERS[2], priceFrom: 10000, priceTo: 65000, available: true, url: 'https://www.stubhub.com' },
      { partner: PARTNERS[3], priceFrom: 9500, priceTo: 60000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'roplabda-mol-papp-laszlo-liga-2026',
    title: 'MOL Papp László Budapest Sportaréna — Röplabda Gála',
    sport: 'Röplabda',
    venue: 'Papp László Sportaréna',
    city: 'Budapest',
    date: '2026-12-05',
    dateLabel: '2026. december 5.',
    image: '/images/events/volleyball-mol-papp.jpg',
    priceFrom: 3500,
    priceTo: 20000,
    description: 'A CEV Bajnokok Ligája röplabda-mérkőzés a Papp László Sportarénában. A hazai bajnok külföldi ellenfelei ellen bizonyítja, hogy a magyar röplabda ismét ott van Európa élmezőnyében.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 3500, priceTo: 16000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 4000, priceTo: 18000, available: true, url: 'https://www.jegymester.hu' },
     
      { partner: PARTNERS[3], priceFrom: 5000, priceTo: 20000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'kerekpar-tour-de-hongrie-2026',
    title: 'Tour de Hongrie 2026 - Kerékpáros Körverseny',
    sport: 'Kerékpározás',
    venue: 'Több helyszín',
    city: 'Magyarország',
    date: '2026-05-06',
    dateLabel: '2026. május 6–10.',
    image: '/images/events/cycling-tour-de-hongrie.jpg',
    priceFrom: 0,
    priceTo: 12000,
    description: 'A Tour de Hongrie az UCI ProSeries mezőnyét vonzza Magyarországra. Az ötnapos körversenyen több mint 100 profi kerékpáros küzd meg a győzelemért Magyarország festői táján keresztül.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 2000, priceTo: 10000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 2500, priceTo: 12000, available: true, url: 'https://www.jegymester.hu' },
     
    ],
  },
  {
    slug: 'vizilabda-eger-vilagliga-2026',
    title: 'Egri Vízilabda Akadémia - VL Döntő',
    sport: 'Vízilabda',
    venue: 'Kemény Ferenc Uszoda',
    city: 'Eger',
    date: '2026-06-14',
    dateLabel: '2026. június 14.',
    image: '/images/events/waterpolo-eger.jpg',
    priceFrom: 2500,
    priceTo: 15000,
    description: 'Eger a vízilabda fellegvára Magyarországon. A Kemény Ferenc Uszodában zajló döntőn a legjobb hazai csapatok csapnak össze a bajnoki trófeáért és az európai kupajogosultságért.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 2500, priceTo: 12000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 3000, priceTo: 13000, available: true, url: 'https://www.jegymester.hu' },
      
      { partner: PARTNERS[3], priceFrom: 3500, priceTo: 15000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'labdarugas-magyar-eb-selejtezo-2026',
    title: 'Magyar Labdarúgó Válogatott - EB Selejtező',
    sport: 'Labdarúgás',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    date: '2026-09-05',
    dateLabel: '2026. szeptember 5.',
    image: '/images/events/football-eb-qualif.jpg',
    priceFrom: 6000,
    priceTo: 55000,
    featured: true,
    description: 'A magyar válogatott hazai pályán mérkőzik az Európa-bajnoki selejtezőn. A Puskás Aréna 67 000 szurkoló előtt lesz a csapatkapitányok és a nemzeti büszkeség színtere.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 6000, priceTo: 45000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 6500, priceTo: 48000, available: true, url: 'https://www.jegymester.hu' },

      { partner: PARTNERS[2], priceFrom: 9000, priceTo: 55000, available: true, url: 'https://www.stubhub.com' },
      { partner: PARTNERS[3], priceFrom: 8500, priceTo: 52000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'esports-bajnoksag-budapest-2026',
    title: 'CEE Esports Championship - Budapest 2026',
    sport: 'Esport',
    venue: 'MVM Dome',
    city: 'Budapest',
    date: '2026-08-22',
    dateLabel: '2026. augusztus 22–24.',
    image: '/images/events/esports-arena.jpg',
    priceFrom: 4500,
    priceTo: 32000,
    description: 'Közép-Kelet-Európa legjobb esport csapatai mérkőznek meg Budapesten. CS2, League of Legends és Valorant versenyek nap mint nap, óriási nyerési alap és profi kommentátorok.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 4500, priceTo: 25000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[1], priceFrom: 5000, priceTo: 28000, available: true, url: 'https://www.axs.com' },
      { partner: PARTNERS[5], priceFrom: 5500, priceTo: 30000, available: true, url: 'https://www.jegymester.hu' },
      { partner: PARTNERS[2], priceFrom: 6000, priceTo: 32000, available: true, url: 'https://www.stubhub.com' },
    ],
  },
  {
    slug: 'vivás-vilagkupa-budapest-2026',
    title: 'Vívás Világkupa - Budapest 2026',
    sport: 'Vívás',
    venue: 'Vasas Sport Club',
    city: 'Budapest',
    date: '2026-05-22',
    dateLabel: '2026. május 22–24.',
    image: '/images/events/fencing-world-cup.jpg',
    priceFrom: 2000,
    priceTo: 12000,
    description: 'Budapest adott otthont a vívás Világkupa egyik legrangosabb állomásának. Magyar és külföldi sztárok csapnak össze tőrben, párban és karddal a FIE vándorkupáért.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 2000, priceTo: 9000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 2500, priceTo: 10000, available: true, url: 'https://www.jegymester.hu' },
    
      { partner: PARTNERS[3], priceFrom: 3000, priceTo: 12000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
  {
    slug: 'ragbi-europa-bajnoksag-2026',
    title: 'Rugby Europe Championship — Magyarország vs. Románia',
    sport: 'Rögbi',
    venue: 'Illovszky Rudolf Stadion',
    city: 'Budapest',
    date: '2026-03-14',
    dateLabel: '2026. március 14.',
    image: '/images/events/rugby-europe.jpg',
    priceFrom: 2500,
    priceTo: 14000,
    description: 'A Magyar Rögbi Válogatott a Rugby Europe Championship keretében fogadja az örök rivális román csapatot. Szenvedélyes találkozó várható a nyolcméteres vonalakon.',
    offers: [
      { partner: PARTNERS[0], priceFrom: 2500, priceTo: 11000, available: true, url: 'https://www.eventim.hu' },
      { partner: PARTNERS[5], priceFrom: 3000, priceTo: 12000, available: true, url: 'https://www.jegymester.hu' },
    
      { partner: PARTNERS[3], priceFrom: 3500, priceTo: 14000, available: true, url: 'https://www.viagogo.com' },
    ],
  },
]

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}

export function getFeaturedEvents(): SportEvent[] {
  return EVENTS.filter((e) => e.featured)
}

export function getEventBySlug(slug: string): SportEvent | undefined {
  return EVENTS.find((e) => e.slug === slug)
}

export function getSportIcon(sport: string): string {
  const icons: Record<string, string> = {
    Motorsport: '🏎',
    Labdarúgás: '⚽',
    Atlétika: '🏃',
    Tenisz: '🎾',
    Kosárlabda: '🏀',
    Úszás: '🏊',
    Kézilabda: '🤾',
    Jégkorong: '🏒',
    Boksz: '🥊',
    Röplabda: '🏐',
    Kerékpározás: '🚴',
    Vízilabda: '🤽',
    Esport: '🎮',
    Vívás: '🤺',
    Rögbi: '🏉',
  }
  return icons[sport] ?? '🏆'
}
