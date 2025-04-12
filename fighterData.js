
const fighters = []

//Male Champion Images
const AlexandrePantoja_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PANTOJA_ALEXANDRE_L_BELT_12-07.png?itok=qxZeUTNB";
const MerabDvalishvili_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/DVALISHVILI_MERAB_L_BELT_01-18.png?itok=m3PprJKJ";
const IliaTopuria_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/TOPURIA_ILIA_L_BELT_10-26.png?itok=0MYLrwWF";
const IslamMakhachev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/MAKHACHEV_ISLAM_L_BELT_01-18.png?itok=lqIEHOin";
const BelalMuhammad_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/MUHAMMAD_BELAL_L_BELTMOCK.png?itok=PyjPld2r";
const DricusDuPlessis_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/DU_PLESSIS_DRICUS_L_BELT_02-08.png?itok=eaxE5RwG"
const MagomedAnkalaev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/ANKALAEV_MAGOMED_L_BELTMOCK.png?itok=AsIN2Sm-";
const TomAspinall_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ASPINALL_TOM_BELT_L_07-27.png?itok=GKLL6fSZ"; //dimension: 460 x 700
const JonJones_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/JONES_JON_L_BELT_11-16.png?itok=V9GBsbVF";

//All Male UFC Champions Data
fighters.push(
     {
    firstName: "Alexandre",
    lastName: "Pantoja",
    nickname: "The Cannibal",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "Flyweight Champion",
    wins: 29,
    losses: 5,
    style: "Jiu-Jitsu",
    active: true,
    image: AlexandrePantoja_URL
  },
  {
    firstName: "Merab",
    lastName: "Dvalishvili",
    nickname: "The Machine",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "Bantamweight Champion",
    wins: 19,
    losses: 4,
    style: "Wrestling",
    active: true,
    image: MerabDvalishvili_URL
  },
  {
    firstName: "Ilia",
    lastName: "Topuria",
    nickname: "El Matador",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "Featherweight Champion",
    wins: 16,
    losses: 0,
    style: "Jiu-Jitsu/Boxing",
    active: true,
    image: IliaTopuria_URL
  },
  {
    firstName: "Islam",
    lastName: "Makhachev",
    nickname: "",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "Lightweight Champion",
    wins: 27,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: IslamMakhachev_URL
  },
  {
    firstName: "Belal",
    lastName: "Muhammad",
    nickname: "Remember The Name",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "Welterweight Champion",
    wins: 24,
    losses: 3,
    style: "Wrestling",
    active: true,
    image: BelalMuhammad_URL
  },
  {
    firstName: "Dricus",
    lastName: "Du Plessis",
    nickname: "Stillknocks",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "Middleweight Champion",
    wins: 23,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: DricusDuPlessis_URL
  },
  {
    firstName: "Magomed",
    lastName: "Ankalaev",
    nickname: "",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "Light Heavyweight",
    wins: 23,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: MagomedAnkalaev_URL
  },
  {
    firstName: "Tom",
    lastName: "Aspinall",
    nickname: "The Honey Badger",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    rank: "#1 Heavyweight (Interim Champion)",
    wins: 15,
    losses: 3,
    style: "Jiu-Jitsu",
    active: true,
    image: TomAspinall_URL
  },
  {
    firstName: "Jon",
    lastName: "Jones",
    nickname: "Bones",
    rank: "Heavyweight Champion",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    wins: 27,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: JonJones_URL
  }
)

//Top 5 Male Flyweight Fighters Images
const BrandonRoyval_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ROYVAL_BRANDON_L_10-12.png?itok=fxaENIvA";
const BrandonMoreno_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/MORENO_BRANDON_L_03-29.png?itok=CnCVq4jp";
const AmirAlbazi_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ALBAZI_AMIR_L_06-03.png?itok=SVW_IOIX";
const KaiKaraFrance_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/KARA-FRANCE_KAI_L_08-17.png?itok=kP3IPaTE";
const TatsuroTaira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/TAIRA_TATSURO_L_12-09.png?itok=7ZMye-uF";

//Top 5 Male Flyweight Fighters Data
fighters.push(
  {
    firstName: "Brandon",
    lastName: "Royval",
    nickname: "",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "#1 Flyweight",
    wins: 15,
    losses: 7,
    style: "Jiu-Jitsu",
    active: true,
    image: BrandonRoyval_URL
  },
  {
    firstName: "Brandon",
    lastName: "Moreno",
    nickname: "The Assassin Baby",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "#2 Flyweight",
    wins: 23,
    losses: 8,
    style: "Boxing/Jiu-Jitsu",
    active: true,
    image: BrandonMoreno_URL
  },
  {
    firstName: "Amir",
    lastName: "Albazi",
    nickname: "The Prince",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "#3 Flyweight",
    wins: 17,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: AmirAlbazi_URL
  },
  {
    firstName: "Kai",
    lastName: "Kara-France",
    nickname: "",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "#4 Flyweight",
    wins: 25,
    losses: 11,
    style: "Striking",
    active: true,
    image: KaiKaraFrance_URL
  },
  {
    firstName: "Tatsuro",
    lastName: "Taira",
    nickname: "",
    weightClass: "Flyweight - 125 pounds (56.7 kg)",
    rank: "#5 Flyweight",
    wins: 16,
    losses: 1,
    style: "Jiu-Jitsu",
    active: true,
    image: TatsuroTaira_URL
  }
)

//Top 5 Male Bantamweight Fighters Images
const SeanOMalley_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/OMALLEY_SEAN_L_08-19.png?itok=myv3RIr7";
const PetrYan_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/YAN_PETR_L_11-23.png?itok=8cRYCM2i";
const UmarNurmagomedov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/NURMAGOMEDOV_UMAR_L_01-18.png?itok=X97OXEvg";
const CorySandhagen_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SANDHAGEN_CORY_L_08-03.png?itok=hXNi-hXF";
const DeivesonFigueiredo_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/FIGUEIREDO_DEIVESON_L_04-13.png?itok=lhpYVc-5";

//Top 5 Male Bantamweight Fighters Data
fighters.push(
   {
    firstName: "Sean",
    lastName: "O'Malley",
    nickname: "Sugar",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "#1 Bantamweight",
    wins: 18,
    losses: 2,
    style: "Striking",
    active: true,
    image: SeanOMalley_URL
  },
  {
    firstName: "Petr",
    lastName: "Yan",
    nickname: "No Mercy",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "#2 Bantamweight",
    wins: 18,
    losses: 5,
    style: "Boxing/Sambo",
    active: true,
    image: PetrYan_URL
  },
  {
    firstName: "Umar",
    lastName: "Nurmagomedov",
    nickname: "",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "#3 Bantamweight",
    wins: 18,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: UmarNurmagomedov_URL
  },
  {
    firstName: "Cory",
    lastName: "Sandhagen",
    nickname: "The Sandman",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "#4 Bantamweight",
    wins: 17,
    losses: 5,
    style: "Striking",
    active: true,
    image: CorySandhagen_URL
  },
  {
    firstName: "Deiveson",
    lastName: "Figueiredo",
    nickname: "Deus da Guerra",
    weightClass: "Bantamweight - 135 pounds (61.2 kg)",
    rank: "#5 Bantamweight",
    wins: 24,
    losses: 4,
    style: "Jiu-Jitsu",
    active: true,
    image: DeivesonFigueiredo_URL
  }
)

//Top 5 Male Featherweight Fighters
const AlexanderVolkanovski_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/VOLKANOVSKI_ALEXANDER_L_04-12.png?itok=RnrkIjba";
const MaxHollowayFeatherweight_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=uIj6eZON";
const DiegoLopes_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/LOPES_DIEGO_L_09-14.png?itok=-o2RFKjp";
const MovsarEvloev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/EVLOEV_MOVSAR_L_12-07.png?itok=geMkyFuo";
const YairRodriguez_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/RODRIGUEZ_YAIR_L_04-12.png?itok=M2SQXf7r";

//Top 5 Male Bantamweight Fighters Data
fighters.push(
   {
    firstName: "Alexander",
    lastName: "Volkanovski",
    nickname: "The Great",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "#1 Featherweight",
    wins: 26,
    losses: 4,
    style: "Striking/Wrestling",
    active: true,
    image: AlexanderVolkanovski_URL
  },
  {
    firstName: "Max",
    lastName: "Holloway",
    nickname: "Blessed",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "#2 Featherweight",
    wins: 26,
    losses: 8,
    style: "Boxing",
    active: true,
    image: MaxHollowayFeatherweight_URL
  },
  {
    firstName: "Diego",
    lastName: "Lopes",
    nickname: "",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "#3 Featherweight",
    wins: 26,
    losses: 6,
    style: "Jiu-Jitsu",
    active: true,
    image: DiegoLopes_URL
  },
  {
    firstName: "Movsar",
    lastName: "Evloev",
    nickname: "",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "#4 Featherweight",
    wins: 19,
    losses: 0,
    style: "Wrestling",
    active: true,
    image: MovsarEvloev_URL
  },
  {
    firstName: "Yair",
    lastName: "Rodriguez",
    nickname: "El Pantera",
    weightClass: "Featherweight - 145 pounds (65.8 kg)",
    rank: "#5 Featherweight",
    wins: 20,
    losses: 5,
    style: "Taekwondo",
    active: true,
    image: YairRodriguez_URL
  }
)

//Top 5 Lightweight Fighter Images
const ArmanTsarukyan_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/TSARUKYAN_ARMAN_L_01-18.png?itok=Tz_2H31H";
const CharlesOliveira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=VutZvq6g";
const JustinGaethje_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/GAETHJE_JUSTIN_L_03-08.png?itok=kwf_QNqP";
const MaxHollowayLightweight_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=uIj6eZON";
const DustinPoirier_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/POIRIER_DUSTIN_L_06-01.png?itok=tYwkmJWo";

//Top 5 Male Lightweight Fighter Data
fighters.push(
   {
    firstName: "Arman",
    lastName: "Tsarukyan",
    nickname: "Ahalkalakets",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "#1 Lightweight",
    wins: 22,
    losses: 3,
    style: "Wrestling",
    active: true,
    image: ArmanTsarukyan_URL
  },
  {
    firstName: "Charles",
    lastName: "Oliveira",
    nickname: "Do Bronx",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "#2 Lightweight",
    wins: 35,
    losses: 10,
    style: "Jiu-Jitsu/Muay Thai",
    active: true,
    image: CharlesOliveira_URL
  },
  {
    firstName: "Justin",
    lastName: "Gaethje",
    nickname: "The Highlight",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "#3 Lightweight",
    wins: 27,
    losses: 5,
    style: "Striking/Wrestling",
    active: true,
    image: JustinGaethje_URL
  },
  {
    firstName: "Max",
    lastName: "Holloway",
    nickname: "Blessed",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "#4 Lightweight",
    wins: 26,
    losses: 8,
    style: "Striking",
    active: true,
    image: MaxHollowayLightweight_URL
  },
  {
    firstName: "Dustin",
    lastName: "Poirier",
    nickname: "The Diamond",
    weightClass: "Lightweight - 155 pounds (70.3 kg)",
    rank: "#5 Lightweight",
    wins: 30,
    losses: 9,
    style: "Boxing/Jiu-Jitsu",
    active: true,
    image: DustinPoirier_URL
  }
)

//Top 5 Male Welterweight Fighter Images
const SeanBrady_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BRADY_SEAN_L_09-07.png?itok=mv2_s_xe";
const ShavkatRakhmonov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/RAKHMONOV_SHAVKAT_L_12-07.png?itok=K3ZHUxcA";
const LeonEdwards_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/EDWARDS_LEON_L_03-22.png?itok=MiJPU4eW";
const KamarUsman_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/USMAN_KAMARU_L_10-21.png?itok=wvHAAckO";
const JackDellaMaddalena_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=i8a0wa2Z";

//Top 5 Male Welterweight Fighter Data
fighters.push(
    {
    firstName: "Sean",
    lastName: "Brady",
    nickname: "",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "#1 Welterweight",
    wins: 18,
    losses: 1,
    style: "Grappling",
    active: true,
    image: SeanBrady_URL
  },
  {
    firstName: "Shavkat",
    lastName: "Rakhmonov",
    nickname: "Nomad",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "#2 Welterweight",
    wins: 19,
    losses: 0,
    style: "Sambo/Striking",
    active: true,
    image: ShavkatRakhmonov_URL
  },
  {
    firstName: "Leon",
    lastName: "Edwards",
    nickname: "Rocky",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "#3 Welterweight",
    wins: 22,
    losses: 5,
    style: "Striking",
    active: true,
    image: LeonEdwards_URL
  },
  {
    firstName: "Kamaru",
    lastName: "Usman",
    nickname: "The Nigerian Nightmare",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "#4 Welterweight",
    wins: 20,
    losses: 4,
    style: "Wrestling",
    active: true,
    image: KamarUsman_URL
  },
  {
    firstName: "Jack",
    lastName: "Della Maddalena",
    nickname: "",
    weightClass: "Welterweight - 170 pounds (77.1 kg)",
    rank: "#5 Welterweight",
    wins: 17,
    losses: 2,
    style: "Boxing",
    active: true,
    image: JackDellaMaddalena_URL
  }
)

// Top 5 Male Middleweight Fighter Images
const NassourdineImavov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/IMAVOV_NASSOURDINE_L_09-28.png?itok=FySV-4op";
const SeanStrickland_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/STRICKLAND_SEAN_L_06-01.png?itok=1H_Rlfl2";
const KhamzatChimaev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2021-11/71660%252Fprofile-galery%252Ffullbodyleft-picture%252FCHIMAEV_KHAMZAT_L_10-30.png?itok=V3ZFO1BC";
const IsraelAdesanya_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=uHEBSpXh";
const RobertWhittaker_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/WHITTAKER_ROBERT_L_10-26.png?itok=b1T7xhu8";

// Top 5 Male Middleweight Fighter Data
fighters.push(
  {
    firstName: "Nassourdine",
    lastName: "Imavov",
    nickname: "The Sniper",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "#1 Middleweight",
    wins: 16,
    losses: 4,
    style: "Striking/Wrestling",
    active: true,
    image: NassourdineImavov_URL
  },
  {
    firstName: "Sean",
    lastName: "Strickland",
    nickname: "",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "#2 Middleweight",
    wins: 29,
    losses: 7,
    style: "Striking",
    active: true,
    image: SeanStrickland_URL
  },
  {
    firstName: "Khamzat",
    lastName: "Chimaev",
    nickname: "Borz",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "#3 Middleweight",
    wins: 14,
    losses: 0,
    style: "Wrestling/Striking",
    active: true,
    image: KhamzatChimaev_URL
  },
  {
    firstName: "Israel",
    lastName: "Adesanya",
    nickname: "The Last Stylebender",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "#4 Middleweight",
    wins: 24,
    losses: 5,
    style: "Kickboxing",
    active: true,
    image: IsraelAdesanya_URL
  },
  {
    firstName: "Robert",
    lastName: "Whittaker",
    nickname: "The Reaper",
    weightClass: "Middleweight - 185 pounds (83.9 kg)",
    rank: "#5 Middleweight",
    wins: 27,
    losses: 8,
    style: "Karate/Boxing",
    active: true,
    image: RobertWhittaker_URL
  }
);

// Top 5 Male Light Heavyweight Fighter Images
const AlexPereira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/PEREIRA_ALEX_L.png?itok=VcPMooxt";
const JiriProchazka_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/PROCHAZKA_JIRI_L_01-18.png?itok=LhCgFVUQ";
const CarlosUlberg_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ULBERG_CARLOS_L_05-11.png?itok=Ya9m_BwW";
const JamahalHill_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/HILL_JAMAHAL_L_01-18.png?itok=s5fMCvfw";
const JanBlachowicz_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/BLACHOWICZ_JAN_L_03-22.png?itok=TDS_PpCh";

// Top 5 Male Light Heavyweight Fighter Data
fighters.push(
  {
    firstName: "Alex",
    lastName: "Pereira",
    nickname: "Poatan",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "#1 Light Heavyweight",
    wins: 12,
    losses: 3,
    style: "Kickboxing",
    active: true,
    image: AlexPereira_URL
  },
  {
    firstName: "Jiri",
    lastName: "Prochazka",
    nickname: "Denisa",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "#2 Light Heavyweight",
    wins: 31,
    losses: 5,
    style: "Unorthodox/Striking",
    active: true,
    image: JiriProchazka_URL
  },
  {
    firstName: "Carlos",
    lastName: "Ulberg",
    nickname: "Black Jag",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "#3 Light Heavyweight",
    wins: 13,
    losses: 1,
    style: "Striking",
    active: true,
    image: CarlosUlberg_URL
  },
  {
    firstName: "Jamahal",
    lastName: "Hill",
    nickname: "Sweet Dreams",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "#4 Light Heavyweight",
    wins: 12,
    losses: 3,
    style: "Boxing",
    active: true,
    image: JamahalHill_URL
  },
  {
    firstName: "Jan",
    lastName: "Błachowicz",
    nickname: "",
    weightClass: "Light Heavyweight - 205 pounds (93.0 kg)",
    rank: "#5 Light Heavyweight",
    wins: 29,
    losses: 11,
    style: "Muay Thai",
    active: true,
    image: JanBlachowicz_URL
  }
);

// Top 5 Male Heavyweight Fighter Images
const CirylGane_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/GANE_CIRYL_L_12-07.png?itok=xHAw_MFv";
const AlexanderVolkov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/VOLKOV_ALEXANDER_L_06-22.png?itok=vFYLFYZ2";
const SergeiPavlovich_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/PAVLOVICH_SERGEI_L_02-01.png?itok=7fYf_bcq";
const CurtisBlaydes_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/BLAYDES_CURTIS_L_03-08.png?itok=u46HNVJN";

//Top 5 Male Heavyweight Fighter Data (not including Interim Champion who is technically rank 1 but is listed with Champions)
fighters.push(
  {
    firstName: "Ciryl",
    lastName: "Gane",
    nickname: "Bon Gamin",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    rank: "#2 Heavyweight",
    wins: 13,
    losses: 2,
    style: "Muay Thai",
    active: true,
    image: CirylGane_URL
  },
  {
    firstName: "Alexander",
    lastName: "Volkov",
    nickname: "Drago",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    rank: "#3 Heavyweight",
    wins: 38,
    losses: 11,
    style: "Kickboxing",
    active: true,
    image: AlexanderVolkov_URL
  },
  {
    firstName: "Sergei",
    lastName: "Pavlovich",
    nickname: "",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    rank: "#4 Heavyweight",
    wins: 19,
    losses: 3,
    style: "Boxing/Wrestling",
    active: true,
    image: SergeiPavlovich_URL
  },
  {
    firstName: "Curtis",
    lastName: "Blaydes",
    nickname: "Razor",
    weightClass: "Heavyweight - 265 pounds (120.2 kg)",
    rank: "#5 Heavyweight",
    wins: 18,
    losses: 5,
    style: "Wrestling",
    active: true,
    image: CurtisBlaydes_URL
  }
);

//Female Champion Images
const ZhangWeili_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/ZHANG_WEILI_L_BELT_02-08.png?itok=x9AgF4K5";
const ValentinaShevchenko_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SHEVCHENKO_VALENTINA_L_BELT_03-05.png?itok=d0m_cQ9p";
const JuliannaPena_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PENA_JULIANNA_L_BELT_07-30.png?itok=pQOjRpY-";


//Female Champion Data
fighters.push(
  {
    firstName: "Zhang",
    lastName: "Weili",
    nickname: "Magnum",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "Strawweight Champion",
    wins: 26,
    losses: 3,
    style: "Sanda/Striking",
    active: true,
    image: ZhangWeili_URL
  },
  {
    firstName: "Valentina",
    lastName: "Shevchenko",
    nickname: "Bullet",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "Flyweight Champion",
    wins: 24,
    losses: 4,
    style: "Muay Thai",
    active: true,
    image: ValentinaShevchenko_URL
  },
  {
    firstName: "Julianna",
    lastName: "Pena",
    nickname: "The Venezuelan Vixen",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "Bantamweight Champion",
    wins: 13,
    losses: 5,
    style: "Jiu-Jitsu/Wrestling",
    active: true,
    image: JuliannaPena_URL
  }
);

// Top 5 Strawweight Fighter Images
const YanXiaonan_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/XIAONAN_YAN_L_04-12.png?itok=uhRpBJX_";
const TatianaSuarez_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SAUREZ_TATIANA_L_02-25.png?itok=L0iXEpis";
const VirnaJandiroba_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/JANDIROBA_VIRNA_L_03-30.png?itok=tfd0qVyi";
const JessicaAndrade_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ANDRADE_JESSICA_L_09-07.png?itok=s3kneqVx";
const AmandaLemos_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/LEMOS_AMANDA_L_03-08.png?itok=Tt2Q5FUi";

// Top 5 Strawweights Data
fighters.push(
  {
    firstName: "Yan",
    lastName: "Xiaonan",
    nickname: "",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "#1 Strawweight",
    wins: 19,
    losses: 4,
    style: "Sanda",
    active: true,
    image: YanXiaonan_URL
  },
  {
    firstName: "Tatiana",
    lastName: "Suarez",
    nickname: "",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "#2 Strawweight",
    wins: 11,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: TatianaSuarez_URL
  },
  {
    firstName: "Virna",
    lastName: "Jandiroba",
    nickname: "Carcara",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "#3 Strawweight",
    wins: 21,
    losses: 3,
    style: "Jiu-Jitsu",
    active: true,
    image: VirnaJandiroba_URL
  },
  {
    firstName: "Jessica",
    lastName: "Andrade",
    nickname: "Bate Estaca",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "#4 Strawweight",
    wins: 26,
    losses: 13,
    style: "Striking",
    active: true,
    image: JessicaAndrade_URL
  },
  {
    firstName: "Amanda",
    lastName: "Lemos",
    nickname: "",
    weightClass: "Women's Strawweight - 115 pounds (52.2 kg)",
    rank: "#5 Strawweight",
    wins: 14,
    losses: 3,
    style: "Muay Thai",
    active: true,
    image: AmandaLemos_URL
  }
);

// Top 5 Female Flyweight Fighter Images
const AlexaGrasso_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/GRASSO_ALEXA_L_03-05.png?itok=lHeIi8-1";
const ManonFiorot_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/FIOROT_MANON_L_3-30.png?itok=PkLyYAqB";
const ErinBlanchfield_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BLANCHFIELD_ERIN_L_11-02.png?itok=ZdlC4gmO";
const MayceeBarber_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BARBER_MAYCEE_L_03-09.png?itok=HdPeS6T0";
const NataliaSilva_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SILVA_NATALIA_L_09-07.png?itok=UNHb_nHm";


// Top 5 Female Flyweights
fighters.push(
  {
    firstName: "Alexa",
    lastName: "Grasso",
    nickname: "",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "#1 Flyweight",
    wins: 16,
    losses: 4,
    style: "Boxing",
    active: true,
    image: AlexaGrasso_URL
  },
  {
    firstName: "Manon",
    lastName: "Fiorot",
    nickname: "The Beast",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "#2 Flyweight",
    wins: 12,
    losses: 1,
    style: "Kickboxing",
    active: true,
    image: ManonFiorot_URL
  },
  {
    firstName: "Erin",
    lastName: "Blanchfield",
    nickname: "Cold Blooded",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "#3 Flyweight",
    wins: 13,
    losses: 2,
    style: "Jiu-Jitsu",
    active: true,
    image: ErinBlanchfield_URL
  },
  {
    firstName: "Maycee",
    lastName: "Barber",
    nickname: "The Future",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "#4 Flyweight",
    wins: 14,
    losses: 2,
    style: "Striking",
    active: true,
    image: MayceeBarber_URL
  },
  {
    firstName: "Natalia",
    lastName: "Silva",
    nickname: "",
    weightClass: "Women's Flyweight - 125 pounds (56.7 kg)",
    rank: "#5 Flyweight",
    wins: 18,
    losses: 5,
    style: "Striking",
    active: true,
    image: NataliaSilva_URL
  }
);

// Women's Top 5 Bantamweight Fighter Images
const RaquelPennington_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PENNINGTON_RAQUEL_L_01-20.png?itok=ytnr_wIr";
const KaylaHarrison_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/HARRISON_KAYLA_L_04-13.png?itok=uUIw_s8S";
const KetlenVieira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/VIEIRA_KETLEN_L_10-05.png?itok=mwPYFOWh";
const NormaDumont_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DUMONT_NORMA_L_04-06.png?itok=9oZOI0iW";
const MacyChiasson_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/CHIASSON_MACY_L_06-29.png?itok=Aaoj_Pcc";

fighters.push(

  // Top 5
  {
    firstName: "Raquel",
    lastName: "Pennington",
    nickname: "Rocky",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "#1 Bantamweight",
    wins: 16,
    losses: 10,
    style: "Boxing",
    active: true,
    image: RaquelPennington_URL
  },
  {
    firstName: "Kayla",
    lastName: "Harrison",
    nickname: "",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "#2 Bantamweight",
    wins: 18,
    losses: 1,
    style: "Judo/Wrestling",
    active: true,
    image: KaylaHarrison_URL
  },
  {
    firstName: "Ketlen",
    lastName: "Vieira",
    nickname: "Fenomeno",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "#3 Bantamweight",
    wins: 14,
    losses: 4,
    style: "Jiu-Jitsu",
    active: true,
    image: KetlenVieira_URL
  },
  {
    firstName: "Norma",
    lastName: "Dumont",
    nickname: "The Immortal",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "#4 Bantamweight",
    wins: 12,
    losses: 2,
    style: "Striking",
    active: true,
    image: NormaDumont_URL
  },
  {
    firstName: "Macy",
    lastName: "Chiasson",
    nickname: "",
    weightClass: "Women's Bantamweight - 135 pounds (61.2 kg)",
    rank: "#5 Bantamweight",
    wins: 11,
    losses: 3,
    style: "Striking/Grappling",
    active: true,
    image: MacyChiasson_URL
  }
);
