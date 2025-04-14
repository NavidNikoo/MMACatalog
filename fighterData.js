// ================================
// UFC Fighter Catalog Data
// ================================

/*
This file defines the fighter data used throughout the MMA Catalog web application.
It stores an array of fighter objects, where each object contains all relevant information
about a single UFC fighter.

Each fighter has:
- Basic identity: first name, last name, nickname, gender, country
- Competitive stats: weight class, rank (champion, top 10, etc.), wins, losses, fighting style
- Status: active (true/false)
- Media assets: full-body image and a highlight GIF

This data is used to dynamically generate fighter "cards" via JavaScript in `scripts.js`,
allowing features like filtering, sorting, searching, favoriting, and toggling GIFs.
*/

// ================================
// Fighter List
// ================================

// The main list of all fighters to be displayed
const fighters = []

// Keeps track of "favorite" fighters selected by the user
// A set is used to automatically prevent duplicates
const favorites = new Set();

/*
These are image URL constants representing high-quality full-body images
of UFC champions, all hosted by UFC's official website

Storing them in variables helps make the `fighters.push()` section more readable,
and lets us easily reuse or update image links later.
Note: All images are 460x700 px, gifs vary in size
*/

// ================================
// Push Fighters into Array
// ================================

/*
Each fighter is added to the array using `fighters.push()` with a structured object.

Fields include:
- firstName / lastName: Fighter's real name
- gender: "Male" or "Female"
- country: Country flags and labels
- nickname: Optional nickname (may be blank if fighter opts out of nickname)
- weightClass: e.g. "Featherweight"
- rank: Champion title or ranking
- wins / losses: Fight record
- style: Martial arts base(s)
- active: true/false to indicate if they're still competing
- image: PNG full-body render
 - highlightGif: short animated gif to show a little bit of the fighter's personality

These fields are dynamically injected into fighter cards in `scripts.js`
using the `editCardContent()` function.
*/


//Male Champion Images
const AlexandrePantoja_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PANTOJA_ALEXANDRE_L_BELT_12-07.png?itok=qxZeUTNB";
const MerabDvalishvili_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/DVALISHVILI_MERAB_L_BELT_01-18.png?itok=m3PprJKJ";
const IliaTopuria_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/TOPURIA_ILIA_L_BELT_10-26.png?itok=0MYLrwWF";
const IslamMakhachev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/MAKHACHEV_ISLAM_L_BELT_01-18.png?itok=lqIEHOin";
const BelalMuhammad_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/MUHAMMAD_BELAL_L_BELTMOCK.png?itok=PyjPld2r";
const DricusDuPlessis_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-02/DU_PLESSIS_DRICUS_L_BELT_02-08.png?itok=eaxE5RwG"
const MagomedAnkalaev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/ANKALAEV_MAGOMED_L_BELTMOCK.png?itok=AsIN2Sm-";
const TomAspinall_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ASPINALL_TOM_BELT_L_07-27.png?itok=GKLL6fSZ";
const JonJones_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/JONES_JON_L_BELT_11-16.png?itok=V9GBsbVF";

//All Male UFC Champions Data
fighters.push(
     {
    firstName: "Alexandre",
    lastName: "Pantoja",
    gender: "Male",
    country: "Brazil 🇧🇷",
    nickname: "The Cannibal",
    weightClass: "Flyweight",
    rank: "Flyweight Champion",
    wins: 29,
    losses: 5,
    style: "Jiu-Jitsu",
    active: true,
    image: AlexandrePantoja_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG1wZ3BuN2p5MWF6cjMxejFoZzYzYTEzbTJ0a2lnOGw0eW5lbW55MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1cL1ZMrLiUs6kTDgSn/giphy.webp"
  },
  {
    firstName: "Merab",
    lastName: "Dvalishvili",
    gender: "Male",
    country: "Georgia 🇬🇪+ USA 🇺🇸",
    nickname: "The Machine",
    weightClass: "Bantamweight",
    rank: "Bantamweight Champion",
    wins: 19,
    losses: 4,
    style: "Wrestling",
    active: true,
    image: MerabDvalishvili_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2FkbW9xZnJwYmI3aWsyNmY3aWM1cHdiY2dxbDFxbDR0aWExNXJ2dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vZeyJAU2YEZCRa96HY/200.webp"
  },
  {
    firstName: "Ilia",
    lastName: "Topuria",
    gender: "Male",
    country: "Georgia 🇬🇪+ Spain 🇪🇸",
    nickname: "El Matador",
    weightClass: "Featherweight",
    rank: "Featherweight Champion",
    wins: 16,
    losses: 0,
    style: "Jiu-Jitsu/Boxing",
    active: true,
    image: IliaTopuria_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXc1Zm8zd2F4eDYxM3RpcG02cjAxaWVrM2xkOW41aWsxY2Jva2NlMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h4rb6TXT8fvcsoBo98/200.webp"
  },
  {
    firstName: "Islam",
    lastName: "Makhachev",
    gender: "Male",
    country: "Dagestan 🇷🇺",
    nickname: "",
    weightClass: "Lightweight",
    rank: "Lightweight Champion",
    wins: 27,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: IslamMakhachev_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHh0ZGExNnFvcXlseHF1azV6bWZwNnNlZmM3YnYwbWhwbjdub2tseSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/IIhd7rSjWZY3PjcvAo/200.webp"
  },
  {
    firstName: "Belal",
    lastName: "Muhammad",
    gender: "Male",
    country: "Palestine 🇵🇸 + USA 🇺🇸",
    nickname: "Remember The Name",
    weightClass: "Welterweight",
    rank: "Welterweight Champion",
    wins: 24,
    losses: 3,
    style: "Wrestling",
    active: true,
    image: BelalMuhammad_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHkwaTZrdGQzdGVqc3o1ZnFzcTExaXpsOTNrZW5jMWc4ZDF6MWNqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9GREmZXRFGZ7J2nqVX/giphy.gif"
  },
  {
    firstName: "Dricus",
    lastName: "Du Plessis",
    gender: "Male",
    country: "South Africa 🇿🇦",
    nickname: "Stillknocks",
    weightClass: "Middleweight",
    rank: "Middleweight Champion",
    wins: 23,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: DricusDuPlessis_URL,
    highlightGif: "https://media3.giphy.com/media/JhilvnWeiDHWh8CbRW/200.webp?cid=ecf05e47snbb3xtj37d0xy2n6ifdi7xqkramnsm8q4v1v6av&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Magomed",
    lastName: "Ankalaev",
    gender: "Male",
    country: "Dagestan 🇷🇺",
    nickname: "",
    weightClass: "Light Heavyweight ",
    rank: "Light Heavyweight Champion",
    wins: 23,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: MagomedAnkalaev_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzE3YXd0c2hhbjN3d3R5Znp1bHB6cTNoNXBuNjNncWh4anNuazRyZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vorg2sOxhzDz5y87dC/200.webp"
  },
  {
    firstName: "Tom",
    lastName: "Aspinall",
    gender: "Male",
    country: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    nickname: "The Honey Badger",
    weightClass: "Heavyweight",
    rank: "#1 Heavyweight (Interim Champion)",
    wins: 15,
    losses: 3,
    style: "Jiu-Jitsu",
    active: true,
    image: TomAspinall_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNG53dHlwY2k1Z25ydnBhdmhqMXphenl0YTd6MGMxNXhrdWx6dTVqMyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9cTe4ZzfKuqPAjXxip/200.webp"
  },
  {
    firstName: "Jon",
    lastName: "Jones",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "Bones",
    rank: "Heavyweight Champion",
    weightClass: "Heavyweight",
    wins: 27,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: JonJones_URL,
    highlightGif: "https://media1.giphy.com/media/TaldkYY37wnlOczyHr/200.webp?cid=ecf05e47ili1ez10ibnioq33yacclz2zo77ucqviptcurxj3&ep=v1_gifs_search&rid=200.webp&ct=g"
  }
)

//Top 5 Male Flyweight Fighters Images
const BrandonRoyval_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ROYVAL_BRANDON_L_10-12.png?itok=fxaENIvA";
const BrandonMoreno_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/MORENO_BRANDON_L_03-29.png?itok=CnCVq4jp";
const AmirAlbazi_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ALBAZI_AMIR_L_06-03.png?itok=SVW_IOIX";
const KaiKaraFrance_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/KARA-FRANCE_KAI_L_08-17.png?itok=kP3IPaTE";
const TatsuroTaira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/TAIRA_TATSURO_L_12-09.png?itok=7ZMye-uF";

//Top 5 Male Flyweight Fighters Data - 125 pounds (56.7 kg)
fighters.push(
  {
    firstName: "Brandon",
    lastName: "Royval",
    gender: "Male",
    country: "Mexico 🇲🇽",
    nickname: "",
    weightClass: "Flyweight",
    rank: "#1 Flyweight",
    wins: 15,
    losses: 7,
    style: "Jiu-Jitsu",
    active: true,
    image: BrandonRoyval_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzRlYnM4M21yMnJvcnl3bmhma3hidHFraWl0YzhnODBjYjR2NGIzOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/nriYU34CDfwoWdY0QG/giphy.webp"
  },
  {
    firstName: "Brandon",
    lastName: "Moreno",
    gender: "Male",
    country: "Mexico 🇲🇽",
    nickname: "The Assassin Baby",
    weightClass: "Flyweight",
    rank: "#2 Flyweight",
    wins: 23,
    losses: 8,
    style: "Boxing/Jiu-Jitsu",
    active: true,
    image: BrandonMoreno_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHpyYnRvaXZlN21yZjk3eWpmaGJvbWpqdDIzeGt5NHJyZWtyMXpvcCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kXsDy6jqEY7hWCydjl/200.webp"
  },
  {
    firstName: "Amir",
    lastName: "Albazi",
    gender: "Male",
    country: "Iraq 🇮🇶",
    nickname: "The Prince",
    weightClass: "Flyweight",
    rank: "#3 Flyweight",
    wins: 17,
    losses: 2,
    style: "Wrestling",
    active: true,
    image: AmirAlbazi_URL,
    highlightGif: "https://media4.giphy.com/media/GgEKeitK6tNQ3Bh75j/200.webp"
  },
  {
    firstName: "Kai",
    lastName: "Kara-France",
    gender: "Male",
    country: "New Zealand 🇳🇿",
    nickname: "",
    weightClass: "Flyweight",
    rank: "#4 Flyweight",
    wins: 25,
    losses: 11,
    style: "Striking",
    active: true,
    image: KaiKaraFrance_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTh0Njh3cDJ4eDVtY2lpNjF3OG1weXViN2p4cW5qbTJ4OWwxcnBlYyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/yminXruaEm0nrCRUTP/200.webp"
  },
  {
    firstName: "Tatsuro",
    lastName: "Taira",
    gender: "Male",
    country: "Japan 🇯🇵",
    nickname: "",
    weightClass: "Flyweight",
    rank: "#5 Flyweight",
    wins: 16,
    losses: 1,
    style: "Jiu-Jitsu",
    active: true,
    image: TatsuroTaira_URL,
    highlightGif: "https://media.tenor.com/egVCA3Ac3_4AAAAM/i%27m-happy-thank-you-tatsuro-taira.gif"
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
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "Sugar",
    weightClass: "Bantamweight",
    rank: "#1 Bantamweight",
    wins: 18,
    losses: 2,
    style: "Striking",
    active: true,
    image: SeanOMalley_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjk1ODZ0cm5vOWJmeGV4dm51Mm12M3ZjZG0yOHI4M2IzMXdwdXE4NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/s6rj95xY1iQGxXZ3T2/200.webp"
  },
  {
    firstName: "Petr",
    lastName: "Yan",
    gender: "Male",
    country: "Russia 🇷🇺",
    nickname: "No Mercy",
    weightClass: "Bantamweight",
    rank: "#2 Bantamweight",
    wins: 18,
    losses: 5,
    style: "Boxing/Sambo",
    active: true,
    image: PetrYan_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjgzOGh2OTg4aGt4dGZtNDdmOW1obHlncjEyOGN2bDBreG55ZXdsaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JOwH4gKcIlTwfIoAtA/200.webp"
  },
  {
    firstName: "Umar",
    lastName: "Nurmagomedov",
    gender: "Male",
    country: "Dagestan 🇷🇺",
    nickname: "",
    weightClass: "Bantamweight",
    rank: "#3 Bantamweight",
    wins: 18,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: UmarNurmagomedov_URL,
    highlightGif: "https://media1.tenor.com/m/Tf4TLzr5ApIAAAAd/stiopic-umarnurmagomedov.gif"
  },
  {
    firstName: "Cory",
    lastName: "Sandhagen",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "The Sandman",
    weightClass: "Bantamweight",
    rank: "#4 Bantamweight",
    wins: 17,
    losses: 5,
    style: "Striking",
    active: true,
    image: CorySandhagen_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnQybHBpdTFmMXA1N3g5OGw5djdvNm50YThlb3J3djFodHhzYjI3NCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VqzHAQEsUoGwGk9N0q/200.webp"
  },
  {
    firstName: "Deiveson",
    lastName: "Figueiredo",
    gender: "Male",
    country: "Brazil 🇧🇷",
    nickname: "Deus da Guerra",
    weightClass: "Bantamweight",
    rank: "#5 Bantamweight",
    wins: 24,
    losses: 4,
    style: "Jiu-Jitsu",
    active: true,
    image: DeivesonFigueiredo_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTJjcjkwMmtvdzNwbDd4dGV3ZHowc3Vvd290b3cwMDJkYXRpbGh4cSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/ARrOA2dTRdyFJ7y32t/200.webp"
  }
)

//Top 5 Male Featherweight Fighters
const AlexanderVolkanovski_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/VOLKANOVSKI_ALEXANDER_L_04-12.png?itok=RnrkIjba";
const MaxHollowayFeatherweight_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=uIj6eZON";
const DiegoLopes_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/LOPES_DIEGO_L_09-14.png?itok=-o2RFKjp";
const MovsarEvloev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/EVLOEV_MOVSAR_L_12-07.png?itok=geMkyFuo";
const YairRodriguez_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/RODRIGUEZ_YAIR_L_04-12.png?itok=M2SQXf7r";

//Top 5 Male Bantamweight Fighters Data - 145 pounds (65.8 kg)
fighters.push(
   {
    firstName: "Alexander",
    lastName: "Volkanovski",
    gender: "Male",
    country: "Australia 🇦🇺",
    nickname: "The Great",
    weightClass: "Featherweight",
    rank: "#1 Featherweight",
    wins: 26,
    losses: 4,
    style: "Striking/Wrestling",
    active: true,
    image: AlexanderVolkanovski_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTExNnYxNnd6bXJueDVxenpqZno5dnUxeWo2d28wd3dicHo1ZGxzYiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/czOac5ZHV6yHSisyt5/giphy.webp"
  },
  {
    firstName: "Max",
    lastName: "Holloway",
    gender: "Male",
    country: "USA - Hawaiian 🇺🇸🌺",
    nickname: "Blessed",
    weightClass: "Featherweight",
    rank: "#2 Featherweight",
    wins: 26,
    losses: 8,
    style: "Boxing",
    active: true,
    image: MaxHollowayFeatherweight_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3locHQwN2lmMTdteHh1amFlNnhneWx0bG12emE0dHQ2MGxlOXRzdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3q2SKghJrVAFxm7K/200.webp"
  },
  {
    firstName: "Diego",
    lastName: "Lopes",
    gender: "Male",
    country: "Brazil 🇧🇷 + Mexico 🇲🇽",
    nickname: "",
    weightClass: "Featherweight",
    rank: "#3 Featherweight",
    wins: 26,
    losses: 6,
    style: "Jiu-Jitsu",
    active: true,
    image: DiegoLopes_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXQxc2ptejRiNzhlMjVsMHlubGh3dGw2dWo3NHprcW42aDhuenBnOSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xKk4fu8SFS0XERXad9/giphy.webp"
  },
  {
    firstName: "Movsar",
    lastName: "Evloev",
    gender: "Male",
    country: "Russia 🇷🇺",
    nickname: "",
    weightClass: "Featherweight",
    rank: "#4 Featherweight",
    wins: 19,
    losses: 0,
    style: "Wrestling",
    active: true,
    image: MovsarEvloev_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDd6bjE5c2dzZ3ltZ2F4eWd3amw4Y2o0YnBnaWttZnFseDRtajExaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/0ht4NYwitmowBOSHWJ/200.webp"
  },
  {
    firstName: "Yair",
    lastName: "Rodriguez",
    gender: "Male",
    country: "Mexico 🇲🇽",
    nickname: "El Pantera",
    weightClass: "Featherweight",
    rank: "#5 Featherweight",
    wins: 20,
    losses: 5,
    style: "Taekwondo",
    active: true,
    image: YairRodriguez_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTQ5MnNhdnM0dGh1ZW15aTJld25jMGpndHNucXgycnQ5bzF6Y2dweSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xUPGcwBZQZj8wUKVaw/200.webp"
  }
)

//Top 5 Lightweight Fighter Images
const ArmanTsarukyan_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/TSARUKYAN_ARMAN_L_01-18.png?itok=Tz_2H31H";
const CharlesOliveira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/OLIVEIRA_CHARLES_L_11-16.png?itok=VutZvq6g";
const JustinGaethje_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/GAETHJE_JUSTIN_L_03-08.png?itok=kwf_QNqP";
const MaxHollowayLightweight_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2024-04/HOLLOWAY_MAX_L_04-13.png?itok=uIj6eZON";
const DustinPoirier_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/POIRIER_DUSTIN_L_06-01.png?itok=tYwkmJWo";

//Top 5 Male Lightweight Fighter Data  - 155 pounds (70.3 kg)
fighters.push(
   {
    firstName: "Arman",
    lastName: "Tsarukyan",
    gender: "Male",
    country: "Armenia 🇦🇲 + Russia 🇷🇺",
    nickname: "Ahalkalakets",
    weightClass: "Lightweight",
    rank: "#1 Lightweight",
    wins: 22,
    losses: 3,
    style: "Wrestling",
    active: true,
    image: ArmanTsarukyan_URL,
     highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzV1amJ4MnM5ZTI1OWx2MHVrdzY1bnJidWFycndydjFzaThlNmZ0MCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/vNgjzmfRLNlGAzHhUb/200.webp"
  },
  {
    firstName: "Charles",
    lastName: "Oliveira",
    gender: "Male",
    country: "Brazil 🇧🇷",
    nickname: "Do Bronx",
    weightClass: "Lightweight",
    rank: "#2 Lightweight",
    wins: 35,
    losses: 10,
    style: "Jiu-Jitsu/Muay Thai",
    active: true,
    image: CharlesOliveira_URL,
    highlightGif: "https://media1.giphy.com/media/W4XHTmaHORtuo6Mm4U/200.webp?cid=ecf05e47iywa4cznx3hdbmu5dks9ot2ilvu092ppcvsgoztq&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Justin",
    lastName: "Gaethje",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "The Highlight",
    weightClass: "Lightweight",
    rank: "#3 Lightweight",
    wins: 27,
    losses: 5,
    style: "Striking/Wrestling",
    active: true,
    image: JustinGaethje_URL,
    highlightGif: "https://media1.giphy.com/media/IbQZVsBHOw77THYH90/200.webp?cid=ecf05e47nmr3c6otyslxwhqkjvom5puwt24zbtqg13c9iqbo&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Max",
    lastName: "Holloway",
    gender: "Male",
    country: "USA - Hawaiian 🇺🇸🌺",
    nickname: "Blessed",
    weightClass: "Lightweight",
    rank: "#4 Lightweight",
    wins: 26,
    losses: 8,
    style: "Striking",
    active: true,
    image: MaxHollowayLightweight_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNid2t4c2oyaTUwbGd5MDJwdHllbG5zczF2ZmFqcGx2eWYza3RxZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7GYOy2h0itDntuM6Oj/200.webp"
  },
  {
    firstName: "Dustin",
    lastName: "Poirier",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "The Diamond",
    weightClass: "Lightweight",
    rank: "#5 Lightweight",
    wins: 30,
    losses: 9,
    style: "Boxing/Jiu-Jitsu",
    active: true,
    image: DustinPoirier_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHJ3eGs1cm9heDl6M3VzcGFtcHE3aWxibnAwanhkcjk1aGwxbTNsdyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GtAf0HwVt9mv3bmFdm/200.webp"
  }
)

//Top 5 Male Welterweight Fighter Images
const SeanBrady_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BRADY_SEAN_L_09-07.png?itok=mv2_s_xe";
const ShavkatRakhmonov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/RAKHMONOV_SHAVKAT_L_12-07.png?itok=K3ZHUxcA";
const LeonEdwards_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/EDWARDS_LEON_L_03-22.png?itok=MiJPU4eW";
const KamarUsman_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/USMAN_KAMARU_L_10-21.png?itok=wvHAAckO";
const JackDellaMaddalena_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DELLA_MADDALENA_JACK_L_09-16.png?itok=i8a0wa2Z";

//Top 5 Male Welterweight Fighter Data - 170 pounds (77.1 kg)
fighters.push(
    {
    firstName: "Sean",
    lastName: "Brady",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "",
    weightClass: "Welterweight",
    rank: "#1 Welterweight",
    wins: 18,
    losses: 1,
    style: "Grappling",
    active: true,
    image: SeanBrady_URL,
    highlightGif: "https://media1.tenor.com/m/q-1IfuFmuP4AAAAd/sean-brady-sean.gif"
  },
  {
    firstName: "Shavkat",
    lastName: "Rakhmonov",
    gender: "Male",
    country: "Kazakhstan 🇰🇿",
    nickname: "Nomad",
    weightClass: "Welterweight",
    rank: "#2 Welterweight",
    wins: 19,
    losses: 0,
    style: "Sambo/Striking",
    active: true,
    image: ShavkatRakhmonov_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhocnJmeWo1dXpybjlpdXo1cjUxeDV6OGg0b3l6a2p5c3JucmF4cyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7epqMU6ztxZaV6k95V/giphy.webp"
  },
  {
    firstName: "Leon",
    lastName: "Edwards",
    gender: "Male",
    country: "England 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    nickname: "Rocky",
    weightClass: "Welterweight",
    rank: "#3 Welterweight",
    wins: 22,
    losses: 5,
    style: "Striking",
    active: true,
    image: LeonEdwards_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDh5cGdjYXB0eHM4bXNvdnJta2llY2syc3Jhc2hxbGM5OXlkNG9wOCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/fbjHS3aqCLEa9MQW5N/giphy.webp"
  },
  {
    firstName: "Kamaru",
    lastName: "Usman",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "The Nigerian Nightmare",
    weightClass: "Welterweight",
    rank: "#4 Welterweight",
    wins: 20,
    losses: 4,
    style: "Wrestling",
    active: true,
    image: KamarUsman_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmN3MTI2YTg2OTYwd3phdG40amFtcWlkbzczbDlhbm42NDVpeXk5cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/FfOMNL4jRmIBEO8e6r/200.webp"
  },
  {
    firstName: "Jack",
    lastName: "Della Maddalena",
    gender: "Male",
    country: "Australia 🇦🇺",
    nickname: "",
    weightClass: "Welterweight",
    rank: "#5 Welterweight",
    wins: 17,
    losses: 2,
    style: "Boxing",
    active: true,
    image: JackDellaMaddalena_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanFzcjMwYjJnN2YxOW9ueGoyMjQ3ZW1tOTFobG83eGZ1eXB5eTFtdiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fZEz565zA4ARwUDawo/200.webp"
  }
)

// Top 5 Male Middleweight Fighter Images
const NassourdineImavov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/IMAVOV_NASSOURDINE_L_09-28.png?itok=FySV-4op";
const SeanStrickland_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/STRICKLAND_SEAN_L_06-01.png?itok=1H_Rlfl2";
const KhamzatChimaev_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2021-11/71660%252Fprofile-galery%252Ffullbodyleft-picture%252FCHIMAEV_KHAMZAT_L_10-30.png?itok=V3ZFO1BC";
const IsraelAdesanya_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/ADESANYA_ISRAEL_L_02-01.png?itok=uHEBSpXh";
const RobertWhittaker_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/WHITTAKER_ROBERT_L_10-26.png?itok=b1T7xhu8";

// Top 5 Male Middleweight Fighter Data - 185 pounds (83.9 kg)
fighters.push(
  {
    firstName: "Nassourdine",
    lastName: "Imavov",
    gender: "Male",
    country: "France 🇫🇷",
    nickname: "The Sniper",
    weightClass: "Middleweight",
    rank: "#1 Middleweight",
    wins: 16,
    losses: 4,
    style: "Striking/Wrestling",
    active: true,
    image: NassourdineImavov_URL,
    highlightGif: "https://media1.tenor.com/m/uSdO0tvMP1MAAAAd/nassourdine-imavov-ufc.gif"
  },
  {
    firstName: "Sean",
    lastName: "Strickland",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "",
    weightClass: "Middleweight",
    rank: "#2 Middleweight",
    wins: 29,
    losses: 7,
    style: "Striking",
    active: true,
    image: SeanStrickland_URL,
    highlightGif: "https://media0.giphy.com/media/ivwzR0bB2WbqsSVoZH/200.webp?cid=ecf05e479odjzjhntmviow2jex7rjug1qir9ub4nnl2ozba3&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Khamzat",
    lastName: "Chimaev",
    gender: "Male",
    country: "Russia 🇷🇺",
    nickname: "Borz",
    weightClass: "Middleweight",
    rank: "#3 Middleweight",
    wins: 14,
    losses: 0,
    style: "Wrestling/Striking",
    active: true,
    image: KhamzatChimaev_URL,
    highlightGif: "https://media3.giphy.com/media/8bVaVhtyTyJzjlSbNr/200.webp?cid=ecf05e47n72xnjlx9tv22mzjpjggx7cr8qdqjq4g3c0i5z29&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Israel",
    lastName: "Adesanya",
    gender: "Male",
    country: "Nigeria 🇳🇬+ New Zealand 🇳🇿",
    nickname: "The Last Stylebender",
    weightClass: "Middleweight",
    rank: "#4 Middleweight",
    wins: 24,
    losses: 5,
    style: "Kickboxing",
    active: true,
    image: IsraelAdesanya_URL,
    highlightGif: "https://media4.giphy.com/media/4XBq1yrnHn6dULosis/200.webp?cid=ecf05e47h5b14sfctmoc1u1ono7vhqeu4encg3env8b17hn8&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Robert",
    lastName: "Whittaker",
    gender: "Male",
    country: "Australia 🇦🇺 + New Zealand 🇳🇿",
    nickname: "The Reaper",
    weightClass: "Middleweight",
    rank: "#5 Middleweight",
    wins: 27,
    losses: 8,
    style: "Karate/Boxing",
    active: true,
    image: RobertWhittaker_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM25ieHB0amV2bmJ0M215YTU5eTh5aW4wb2Nva3pnN3E2c2U2Yzl6bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kC4wYxf8QIS3kQ8vEF/200.webp"
  }
);

// Top 5 Male Light Heavyweight Fighter Images
const AlexPereira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/PEREIRA_ALEX_L.png?itok=VcPMooxt";
const JiriProchazka_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/7/PROCHAZKA_JIRI_L_01-18.png?itok=LhCgFVUQ";
const CarlosUlberg_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ULBERG_CARLOS_L_05-11.png?itok=Ya9m_BwW";
const JamahalHill_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/HILL_JAMAHAL_L_01-18.png?itok=s5fMCvfw";
const JanBlachowicz_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/BLACHOWICZ_JAN_L_03-22.png?itok=TDS_PpCh";

// Top 5 Male Light Heavyweight Fighter Data - 205 pounds (93.0 kg)
fighters.push(
  {
    firstName: "Alex",
    lastName: "Pereira",
    gender: "Male",
    country: "Brazil 🇧🇷",
    nickname: "Poatan",
    weightClass: "Light Heavyweight ",
    rank: "#1 Light Heavyweight",
    wins: 12,
    losses: 3,
    style: "Kickboxing",
    active: true,
    image: AlexPereira_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWdnMjFsZXM2ZGxjanMyYjI5ZmJ1N3VqbGkwNXE0MWxxcnl6Y3E1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/F1fURjOUPANcWO77Vz/giphy.gif"
  },
  {
    firstName: "Jiri",
    lastName: "Prochazka",
    gender: "Male",
    country: "Czech Republic 🇨🇿",
    nickname: "Denisa",
    weightClass: "Light Heavyweight ",
    rank: "#2 Light Heavyweight",
    wins: 31,
    losses: 5,
    style: "Unorthodox/Striking",
    active: true,
    image: JiriProchazka_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzJqcm94azVrczc2dGJzNml3emR2b29mM3RnaWQyOHdnb3c1d3cwcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/k75JxnNcRQOceParYA/200.webp"
  },
  {
    firstName: "Carlos",
    lastName: "Ulberg",
    gender: "Male",
    country: "New Zealand 🇳🇿",
    nickname: "Black Jag",
    weightClass: "Light Heavyweight ",
    rank: "#3 Light Heavyweight",
    wins: 13,
    losses: 1,
    style: "Striking",
    active: true,
    image: CarlosUlberg_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2VnM2Z4anl4cjN2YzcyY3YwY3YzN3NubHNsdjlkNW4zbmEycTJldSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/vTkbrAdwTgt38YG9GW/giphy.webp"
  },
  {
    firstName: "Jamahal",
    lastName: "Hill",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "Sweet Dreams",
    weightClass: "Light Heavyweight ",
    rank: "#4 Light Heavyweight",
    wins: 12,
    losses: 3,
    style: "Boxing",
    active: true,
    image: JamahalHill_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTRqd3VtaHZ5NWh6dHdmY2l2cnp3MWRlbjYycTdvcXBpcXo2bm9tdyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/vCtkB52LUThsuDs4r6/200.webp"
  },
  {
    firstName: "Jan",
    lastName: "Błachowicz",
    gender: "Male",
    country: "Poland 🇵🇱",
    nickname: "",
    weightClass: "Light Heavyweight ",
    rank: "#5 Light Heavyweight",
    wins: 29,
    losses: 11,
    style: "Muay Thai",
    active: true,
    image: JanBlachowicz_URL,
    highlightGif: "https://media3.giphy.com/media/tnklJ9y9q947ljnLBI/200.webp?cid=ecf05e47gwo3h379s8m26k9sj91y8d0yzag6iq5z73xlc25m&ep=v1_gifs_search&rid=200.webp&ct=g"
  }
);

// Top 5 Male Heavyweight Fighter Images
const CirylGane_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/GANE_CIRYL_L_12-07.png?itok=xHAw_MFv";
const AlexanderVolkov_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/VOLKOV_ALEXANDER_L_06-22.png?itok=vFYLFYZ2";
const SergeiPavlovich_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/PAVLOVICH_SERGEI_L_02-01.png?itok=7fYf_bcq";
const CurtisBlaydes_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/BLAYDES_CURTIS_L_03-08.png?itok=u46HNVJN";

//Top 5 Male Heavyweight Fighter Data (not including Interim Champion who is technically rank 1 but is listed with Champions) - 265 pounds (120.2 kg)
fighters.push(
  {
    firstName: "Ciryl",
    lastName: "Gane",
    gender: "Male",
    country: "France 🇫🇷",
    nickname: "Bon Gamin",
    weightClass: "Heavyweight",
    rank: "#2 Heavyweight",
    wins: 13,
    losses: 2,
    style: "Muay Thai",
    active: true,
    image: CirylGane_URL,
    highlightGif: "https://media4.giphy.com/media/emJqMQ5Ajnkra6hT6u/200.webp?cid=ecf05e47p75nxy3fzw7q1aaczujdbin5m12tp7zi3xd5hwko&ep=v1_gifs_search&rid=200.webp&ct=g"
  },
  {
    firstName: "Alexander",
    lastName: "Volkov",
    gender: "Male",
    country: "Russia 🇷🇺",
    nickname: "Drago",
    weightClass: "Heavyweight",
    rank: "#3 Heavyweight",
    wins: 38,
    losses: 11,
    style: "Kickboxing",
    active: true,
    image: AlexanderVolkov_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGFsanRnNWo1bDN1Z3lnNTNxcTY5bXF3YW12aWk5bWw2N3dtOTE2MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/YVN3Mzmb3TKcJexcVK/200.webp"
  },
  {
    firstName: "Sergei",
    lastName: "Pavlovich",
    gender: "Male",
    country: "Russia 🇷🇺",
    nickname: "",
    weightClass: "Heavyweight",
    rank: "#4 Heavyweight",
    wins: 19,
    losses: 3,
    style: "Boxing/Wrestling",
    active: true,
    image: SergeiPavlovich_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmhmZGhnYXI0cTRkd2dpaGhyOGg2c3NwMWxlZDd3bXowbDgxNXRiMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/LtjAaZyK9UwneT4k2R/200.webp"
  },
  {
    firstName: "Curtis",
    lastName: "Blaydes",
    gender: "Male",
    country: "USA 🇺🇸",
    nickname: "Razor",
    weightClass: "Heavyweight",
    rank: "#5 Heavyweight",
    wins: 18,
    losses: 5,
    style: "Wrestling",
    active: true,
    image: CurtisBlaydes_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW5sYXV3czBzNzBpZGdpb3B6ZmJwMWdpcnF1NWZiOWd0MGlzeGpxOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/rtOin8XhEnWDnfNSv2/200.webp"
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
    gender: "Female",
    country: "China 🇨🇳",
    nickname: "Magnum",
    weightClass: "Women's Strawweight",
    rank: "Strawweight Champion",
    wins: 26,
    losses: 3,
    style: "Sanda/Striking",
    active: true,
    image: ZhangWeili_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDBkbXp4aXF4ZXZ3ZDE5cGo3MmZvMWhuMWJzMWx5dXdmMHQ5a2I0bCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/6fwGR03EVy7LvWJ7KW/giphy.webp"
  },
  {
    firstName: "Valentina",
    lastName: "Shevchenko",
    gender: "Female",
    country: "Russia 🇷🇺",
    nickname: "Bullet",
    weightClass: "Women's Flyweight",
    rank: "Flyweight Champion",
    wins: 24,
    losses: 4,
    style: "Muay Thai",
    active: true,
    image: ValentinaShevchenko_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZ3dnpjeG1nNTZwZzZ0N3VqdmttZWJ0cDN0eXcwemR0MXR3bnEwbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wifpN2jvIq2dW1BkLR/200.webp"
  },
  {
    firstName: "Julianna",
    lastName: "Pena",
    gender: "Female",
    country: "USA 🇺🇸 + Venezuela 🇻🇪",
    nickname: "The Venezuelan Vixen",
    weightClass: "Women's Bantamweight",
    rank: "Bantamweight Champion",
    wins: 13,
    losses: 5,
    style: "Jiu-Jitsu/Wrestling",
    active: true,
    image: JuliannaPena_URL,
    highlightGif: "https://media1.giphy.com/media/sK5lJn7YNyeepTbXwW/200.webp?cid=ecf05e47h62j0s3r7d9v2ke9wiup4y0t2mf0wfimtzdxuhx3&ep=v1_gifs_search&rid=200.webp&ct=g"
  }
);

// Top 5 Strawweight Fighter Images
const YanXiaonan_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-04/XIAONAN_YAN_L_04-12.png?itok=uhRpBJX_";
const TatianaSuarez_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SAUREZ_TATIANA_L_02-25.png?itok=L0iXEpis";
const VirnaJandiroba_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/JANDIROBA_VIRNA_L_03-30.png?itok=tfd0qVyi";
const JessicaAndrade_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/ANDRADE_JESSICA_L_09-07.png?itok=s3kneqVx";
const AmandaLemos_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-03/LEMOS_AMANDA_L_03-08.png?itok=Tt2Q5FUi";

// Top 5 Strawweights Data - 115 pounds (52.2 kg)
fighters.push(
  {
    firstName: "Yan",
    lastName: "Xiaonan",
    gender: "Female",
    country: "China 🇨🇳",
    nickname: "",
    weightClass: "Women's Strawweight",
    rank: "#1 Strawweight",
    wins: 19,
    losses: 4,
    style: "Sanda",
    active: true,
    image: YanXiaonan_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJrZXdsM3Vhb3NsaTVoYW5kb2RncWl3Y2I2OGlsc3E5N3N0bmpyMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/R1ATi3dFaz7G1kSbem/200.webp"
  },
  {
    firstName: "Tatiana",
    lastName: "Suarez",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "",
    weightClass: "Women's Strawweight",
    rank: "#2 Strawweight",
    wins: 11,
    losses: 1,
    style: "Wrestling",
    active: true,
    image: TatianaSuarez_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmI4ODB2cGV2bTBnYzYzc3d3cW01bTV0cnc4Z3RiZW85azFiNGs4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/emMDxr9SIuPg5nHCKZ/giphy.gif"
  },
  {
    firstName: "Virna",
    lastName: "Jandiroba",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "Carcara",
    weightClass: "Women's Strawweight",
    rank: "#3 Strawweight",
    wins: 21,
    losses: 3,
    style: "Jiu-Jitsu",
    active: true,
    image: VirnaJandiroba_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGN1eXhxbGg1ZTRsYjBlODNsc2lmcm93Z3A1emljNTFjYW11Y2RmNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NigErDLSf41UiiiweU/200.webp"
  },
  {
    firstName: "Jessica",
    lastName: "Andrade",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "Bate Estaca",
    weightClass: "Women's Strawweight",
    rank: "#4 Strawweight",
    wins: 26,
    losses: 13,
    style: "Striking",
    active: true,
    image: JessicaAndrade_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzZsbGtkOGk2N2J3dTl6OXRlaHY2dXpiOWV3OG5sZWRpenM1dGc3NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cUck3pLTbElKDl6hc2/200.webp"
  },
  {
    firstName: "Amanda",
    lastName: "Lemos",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "",
    weightClass: "Women's Strawweight",
    rank: "#5 Strawweight",
    wins: 14,
    losses: 3,
    style: "Muay Thai",
    active: true,
    image: AmandaLemos_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDN6b2Nuc250NDZoaXN3bzBidmJhZXRjYmxobHMzbzhzOWJvOHJjMSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/iSseq4AGksLcGntEHR/200.webp"
  }
);

// Top 5 Female Flyweight Fighter Images
const AlexaGrasso_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/GRASSO_ALEXA_L_03-05.png?itok=lHeIi8-1";
const ManonFiorot_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/FIOROT_MANON_L_3-30.png?itok=PkLyYAqB";
const ErinBlanchfield_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BLANCHFIELD_ERIN_L_11-02.png?itok=ZdlC4gmO";
const MayceeBarber_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/BARBER_MAYCEE_L_03-09.png?itok=HdPeS6T0";
const NataliaSilva_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/SILVA_NATALIA_L_09-07.png?itok=UNHb_nHm";


// Top 5 Female Flyweights - 125 pounds (56.7 kg)
fighters.push(
  {
    firstName: "Alexa",
    lastName: "Grasso",
    gender: "Female",
    country: "Mexico 🇲🇽",
    nickname: "",
    weightClass: "Women's Flyweight",
    rank: "#1 Flyweight",
    wins: 16,
    losses: 4,
    style: "Boxing",
    active: true,
    image: AlexaGrasso_URL,
    highlightGif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXdjb3UwNnh2bGg4aGZkdDE5NmNqczNsYzN5djhidGx4b2g2cW0wZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fdYNNKc9U9xQDvi7ra/200.webp"
  },
  {
    firstName: "Manon",
    lastName: "Fiorot",
    gender: "Female",
    country: "France 🇫🇷",
    nickname: "The Beast",
    weightClass: "Women's Flyweight",
    rank: "#2 Flyweight",
    wins: 12,
    losses: 1,
    style: "Kickboxing",
    active: true,
    image: ManonFiorot_URL,
    highlightGif: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTVzcTdwNmdqMTNibWZlaTgxM251dGUycXAxcWtqNmI3ajdyeGNuYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/aazU3NxvBhC8uxDrtD/200.webp"
  },
  {
    firstName: "Erin",
    lastName: "Blanchfield",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "Cold Blooded",
    weightClass: "Women's Flyweight",
    rank: "#3 Flyweight",
    wins: 13,
    losses: 2,
    style: "Jiu-Jitsu",
    active: true,
    image: ErinBlanchfield_URL,
    highlightGif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmdxM3lqdnU3cjkwaTJsanRlNG93ZDhpYWZrbDdqMm5ydnlnaGlodiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Pmpphk2RoQmyF114B9/200.webp"
  },
  {
    firstName: "Maycee",
    lastName: "Barber",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "The Future",
    weightClass: "Women's Flyweight",
    rank: "#4 Flyweight",
    wins: 14,
    losses: 2,
    style: "Striking",
    active: true,
    image: MayceeBarber_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHExczRiMWdjcnMxOGY3bGtxdHp0OGh4ZDM0b3B0MHJnYmxvZHY1bSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7FfqtZvuGWNr2Bu60t/200.webp"
  },
  {
    firstName: "Natalia",
    lastName: "Silva",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "",
    weightClass: "Women's Flyweight",
    rank: "#5 Flyweight",
    wins: 18,
    losses: 5,
    style: "Striking",
    active: true,
    image: NataliaSilva_URL,
    highlightGif: "https://media1.tenor.com/m/8x0OyW9mic4AAAAd/natalia-silva-natalia-silva-ufc.gif"
  }
);

// Women's Top 5 Bantamweight Fighter Images - (135 pounds)
const RaquelPennington_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/PENNINGTON_RAQUEL_L_01-20.png?itok=ytnr_wIr";
const KaylaHarrison_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/HARRISON_KAYLA_L_04-13.png?itok=uUIw_s8S";
const KetlenVieira_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/VIEIRA_KETLEN_L_10-05.png?itok=mwPYFOWh";
const NormaDumont_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/DUMONT_NORMA_L_04-06.png?itok=9oZOI0iW";
const MacyChiasson_URL = "https://ufc.com/images/styles/athlete_bio_full_body/s3/2025-01/5/CHIASSON_MACY_L_06-29.png?itok=Aaoj_Pcc";

// Women's Top 5 Bantamweight Fighter Data - (135 pounds)
fighters.push(

  // Top 5
  {
    firstName: "Raquel",
    lastName: "Pennington",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "Rocky",
    weightClass: "Women's Bantamweight",
    rank: "#1 Bantamweight",
    wins: 16,
    losses: 10,
    style: "Boxing",
    active: true,
    image: RaquelPennington_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXRhaG93eGh6eHM2cHBqamNpc3p5NGMyZzczZmhxZ2R5YWRzMHZ3cCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0Hlvi4CswF0pr7c4/200.webp"
  },
  {
    firstName: "Kayla",
    lastName: "Harrison",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "",
    weightClass: "Women's Bantamweight",
    rank: "#2 Bantamweight",
    wins: 18,
    losses: 1,
    style: "Judo/Wrestling",
    active: true,
    image: KaylaHarrison_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2cxdGlpYjA3NG04am92cGQ5bXk3N3ljcTRtcnV2bzRkNzJwM3BtaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tpQNYGKWZDGtEsHjwd/200.webp"
  },
  {
    firstName: "Ketlen",
    lastName: "Vieira",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "Fenomeno",
    weightClass: "Women's Bantamweight",
    rank: "#3 Bantamweight",
    wins: 14,
    losses: 4,
    style: "Jiu-Jitsu",
    active: true,
    image: KetlenVieira_URL,
    highlightGif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dtbHNiYzJpcnN0bWN6NHExN2k5cGh5aHg2and3YjltOXQycXZsaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tO09olALqxd5qaddox/200.webp"
  },
  {
    firstName: "Norma",
    lastName: "Dumont",
    gender: "Female",
    country: "Brazil 🇧🇷",
    nickname: "The Immortal",
    weightClass: "Women's Bantamweight",
    rank: "#4 Bantamweight",
    wins: 12,
    losses: 2,
    style: "Striking",
    active: true,
    image: NormaDumont_URL,
    highlightGif: "https://media1.tenor.com/m/jkEMsi70cMMAAAAd/norma-dumont-ufc.gif"
  },
  {
    firstName: "Macy",
    lastName: "Chiasson",
    gender: "Female",
    country: "USA 🇺🇸",
    nickname: "",
    weightClass: "Women's Bantamweight",
    rank: "#5 Bantamweight",
    wins: 11,
    losses: 3,
    style: "Striking/Grappling",
    active: true,
    image: MacyChiasson_URL,
    highlightGif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDJkbnZxamRlZGVpdzlkOW1nanp3eWhxNjd5dDM5MHhsZ3FlN2swbSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/HcEJUOeLEfsgHbCQ6n/giphy.webp"
  }
);
