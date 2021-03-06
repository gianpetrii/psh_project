const app = require('express')();      // uso la dependencia express
const PORT = 8080;
const cors = require('cors');   // para que no salte 'Access-Control-Allow-Origin'


//  Hacer que solo mi pagina pueda pedir info
app.use(
  cors({
    origin: "http://localhost:3000",
    // puedo poner 'methods:' para solo dejar algunas
    // tambien mandar coockies 'credentials: true'
  })
);


app.listen(     // se usa para despertarla y chequear que funciona
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)
//en la terminal corro "node ." para chequear si me responde con el console.log

app.get('/hacklist', (req, res) => {    // path, (request, response)
    res.status(200).send(
      hacklist
    )
  }
);

const hacklist = [{
  "id": 1,
  "title": "Latz",
  "date": "4/5/2022",
  "place": "88 Pine View Street",
  "development": [
    "Huel, Breitenberg and Denesik",
    "Simonis, Zemlak and Abshire",
    "Hilll, Pfannerstill and Leuschke",
    "Hermiston, Abshire and Jacobson",
    "Kiehn and Sons",
    "Brown-Denesik",
    "Schroeder, Huel and Kunze",
    "King-Kerluke",
    "Ortiz-Rau",
    "Glover, Huels and Dooley"
  ],
  "developers": [
    "Zak Bulfit",
    "Inna Clowley",
    "Avigdor Oloshkin",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Kesley Reisin",
    "Dionysus Mawby",
    "Valentina Forte",
    "Danika Schlagtmans",
    "Ardath Raithmill"
  ]
}, {
  "id": 2,
  "title": "Innotype",
  "date": "10/3/2021",
  "place": "44909 Union Trail",
  "development": [
    "Feeney Group",
    "Gleason, Koch and Stroman",
    "Koelpin, Hermann and Barrows",
    "Corkery, Tillman and Hahn",
    "Schneider, Jenkins and Von",
    "Welch Inc",
    "Borer-Pfeffer",
    "Koelpin, Hand and Kessler",
    "Trantow, Hansen and Gutmann",
    "Lockman-Kovacek"
  ],
  "developers": [
    "Ardath Raithmill",
    "Valentina Forte",
    "Donnell Studart",
    "Avigdor Oloshkin",
    "Danika Schlagtmans",
    "Dionysus Mawby",
    "Fionnula Beastall",
    "Cilka Cesaric",
    "Kesley Reisin",
    "Zak Bulfit"
  ]
}, {
  "id": 3,
  "title": "Aimbo",
  "date": "2/1/2022",
  "place": "4 Hagan Trail",
  "development": [
    "Wilkinson-Prohaska",
    "Legros Inc",
    "Baumbach Group",
    "Gusikowski, Dibbert and Erdman",
    "Orn and Sons",
    "Waters and Sons",
    "Simonis Inc",
    "Bayer, Fadel and Grant",
    "Yundt and Sons",
    "Herman-Stroman"
  ],
  "developers": [
    "Valentina Forte",
    "Dionysus Mawby",
    "Hubert Cornilleau",
    "Danika Schlagtmans",
    "Zak Bulfit",
    "Kesley Reisin",
    "Inna Clowley",
    "Fionnula Beastall",
    "Ardath Raithmill",
    "Avigdor Oloshkin"
  ]
}, {
  "id": 4,
  "title": "Talane",
  "date": "8/16/2021",
  "place": "1 Hermina Lane",
  "development": [
    "Bayer, Blick and Mills",
    "Little-Kunze",
    "Hettinger-Gorczany",
    "Ondricka Inc",
    "Blick-Mante",
    "Bashirian, Jenkins and Borer",
    "Koch LLC",
    "McLaughlin, Gutkowski and McCullough",
    "Schoen, Jerde and Lynch",
    "Grant-Welch"
  ],
  "developers": [
    "Cilka Cesaric",
    "Hubert Cornilleau",
    "Kesley Reisin",
    "Fionnula Beastall",
    "Avigdor Oloshkin",
    "Danika Schlagtmans",
    "Dionysus Mawby",
    "Valentina Forte",
    "Zak Bulfit",
    "Ardath Raithmill"
  ]
}, {
  "id": 5,
  "title": "Divape",
  "date": "9/22/2021",
  "place": "3855 Gina Crossing",
  "development": [
    "Schultz Group",
    "Rogahn and Sons",
    "Greenfelder-Pouros",
    "Reilly, Casper and Gaylord",
    "Little, Auer and Maggio",
    "Abernathy-Heller",
    "Bauch Inc",
    "Windler Group",
    "Feeney-Tremblay",
    "Pfannerstill-Kuhn"
  ],
  "developers": [
    "Avigdor Oloshkin",
    "Valentina Forte",
    "Zak Bulfit",
    "Cilka Cesaric",
    "Danika Schlagtmans",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Dionysus Mawby",
    "Inna Clowley",
    "Ardath Raithmill"
  ]
}, {
  "id": 6,
  "title": "Mydo",
  "date": "4/12/2022",
  "place": "81 Brentwood Junction",
  "development": [
    "Prohaska, Dickinson and Huels",
    "Cummerata-Aufderhar",
    "Franecki-Howell",
    "Hansen-Morar",
    "Botsford-Hauck",
    "Treutel, Klocko and Okuneva",
    "Nikolaus LLC",
    "Mosciski Inc",
    "Ziemann Inc",
    "Olson, Cummings and Skiles"
  ],
  "developers": [
    "Zak Bulfit",
    "Donnell Studart",
    "Ardath Raithmill",
    "Danika Schlagtmans",
    "Kesley Reisin",
    "Avigdor Oloshkin",
    "Inna Clowley",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Dionysus Mawby"
  ]
}, {
  "id": 7,
  "title": "Skipfire",
  "date": "6/14/2021",
  "place": "0 Straubel Junction",
  "development": [
    "Rowe, Kessler and Frami",
    "Hauck, Ullrich and Blick",
    "Lehner-Anderson",
    "Tromp, Barton and Marquardt",
    "Roob-Waelchi",
    "Windler-Mayer",
    "Kertzmann, McLaughlin and Trantow",
    "Schmeler LLC",
    "Gutmann LLC",
    "Reichel-Smitham"
  ],
  "developers": [
    "Danika Schlagtmans",
    "Zak Bulfit",
    "Avigdor Oloshkin",
    "Kesley Reisin",
    "Inna Clowley",
    "Dionysus Mawby",
    "Ardath Raithmill",
    "Valentina Forte",
    "Fionnula Beastall",
    "Cilka Cesaric"
  ]
}, {
  "id": 8,
  "title": "Leexo",
  "date": "6/4/2021",
  "place": "04594 Eastwood Court",
  "development": [
    "Huel-Mertz",
    "Price, Weissnat and Kutch",
    "Kling Inc",
    "Kozey-Goodwin",
    "Fisher, Olson and Jacobs",
    "Johns, Orn and Borer",
    "Skiles-Luettgen",
    "Parker, Volkman and Schultz",
    "Graham-Olson",
    "Fay, Skiles and Gibson"
  ],
  "developers": [
    "Dionysus Mawby",
    "Donnell Studart",
    "Danika Schlagtmans",
    "Avigdor Oloshkin",
    "Inna Clowley",
    "Kesley Reisin",
    "Valentina Forte",
    "Cilka Cesaric",
    "Hubert Cornilleau",
    "Ardath Raithmill"
  ]
}, {
  "id": 9,
  "title": "Topicshots",
  "date": "5/7/2021",
  "place": "8090 Vermont Place",
  "development": [
    "Heathcote, Auer and Bergnaum",
    "Blick, Koch and Lind",
    "Lang Inc",
    "Bednar-Blanda",
    "Gislason-Hauck",
    "Schneider Group",
    "Smith-Kohler",
    "Hegmann Inc",
    "Borer-Jacobs",
    "Bosco and Sons"
  ],
  "developers": [
    "Avigdor Oloshkin",
    "Dionysus Mawby",
    "Ardath Raithmill",
    "Inna Clowley",
    "Valentina Forte",
    "Cilka Cesaric",
    "Hubert Cornilleau",
    "Danika Schlagtmans",
    "Kesley Reisin",
    "Zak Bulfit"
  ]
}, {
  "id": 10,
  "title": "Zoonder",
  "date": "9/19/2021",
  "place": "68 Forest Dale Junction",
  "development": [
    "Mills-Bradtke",
    "Heathcote Inc",
    "Ankunding LLC",
    "McGlynn-Kassulke",
    "Franecki, Dicki and Mayert",
    "Trantow-Schaden",
    "Terry, Rippin and Hilpert",
    "Smitham-Haag",
    "Keeling-Mohr",
    "Mann, Stamm and Goldner"
  ],
  "developers": [
    "Hubert Cornilleau",
    "Zak Bulfit",
    "Danika Schlagtmans",
    "Kesley Reisin",
    "Ardath Raithmill",
    "Donnell Studart",
    "Dionysus Mawby",
    "Avigdor Oloshkin",
    "Cilka Cesaric",
    "Fionnula Beastall"
  ]
}, {
  "id": 11,
  "title": "Photobug",
  "date": "2/23/2022",
  "place": "72474 Norway Maple Center",
  "development": [
    "Hartmann Inc",
    "Carroll-Wyman",
    "Kerluke Inc",
    "Bernier Group",
    "Green-Schuster",
    "Murray-Schimmel",
    "Rolfson Inc",
    "Effertz, Shields and Halvorson",
    "Lehner-Becker",
    "Jakubowski-Prohaska"
  ],
  "developers": [
    "Valentina Forte",
    "Hubert Cornilleau",
    "Donnell Studart",
    "Zak Bulfit",
    "Ardath Raithmill",
    "Danika Schlagtmans",
    "Fionnula Beastall",
    "Dionysus Mawby",
    "Kesley Reisin",
    "Cilka Cesaric"
  ]
}, {
  "id": 12,
  "title": "Jaxspan",
  "date": "2/27/2022",
  "place": "939 Park Meadow Alley",
  "development": [
    "Lehner and Sons",
    "Wisozk and Sons",
    "Keebler and Sons",
    "Parisian-Stoltenberg",
    "O'Conner Group",
    "Murphy-Kihn",
    "Blick-Kerluke",
    "Hoeger LLC",
    "Schowalter, Leannon and Douglas",
    "Emard LLC"
  ],
  "developers": [
    "Hubert Cornilleau",
    "Kesley Reisin",
    "Zak Bulfit",
    "Inna Clowley",
    "Valentina Forte",
    "Danika Schlagtmans",
    "Fionnula Beastall",
    "Cilka Cesaric",
    "Ardath Raithmill",
    "Donnell Studart"
  ]
}, {
  "id": 13,
  "title": "Teklist",
  "date": "10/16/2021",
  "place": "22105 Dennis Hill",
  "development": [
    "Schumm-Fadel",
    "Kub, McCullough and Barrows",
    "Raynor, Senger and Terry",
    "Morissette-Schaefer",
    "Gusikowski, Gleichner and Jaskolski",
    "Rice Group",
    "Beatty-Borer",
    "Hermiston, Reynolds and Walter",
    "Jacobi LLC",
    "Wolff, Reynolds and Bosco"
  ],
  "developers": [
    "Dionysus Mawby",
    "Valentina Forte",
    "Danika Schlagtmans",
    "Cilka Cesaric",
    "Zak Bulfit",
    "Fionnula Beastall",
    "Kesley Reisin",
    "Hubert Cornilleau",
    "Inna Clowley",
    "Donnell Studart"
  ]
}, {
  "id": 14,
  "title": "Jayo",
  "date": "4/12/2022",
  "place": "714 Little Fleur Crossing",
  "development": [
    "Heaney LLC",
    "Waelchi, Klocko and Nitzsche",
    "Cormier-Morar",
    "Schneider-Bailey",
    "Mante-McClure",
    "Kohler Inc",
    "Bartoletti and Sons",
    "Boyer-Adams",
    "Halvorson LLC",
    "Haag, Labadie and Ankunding"
  ],
  "developers": [
    "Danika Schlagtmans",
    "Valentina Forte",
    "Kesley Reisin",
    "Ardath Raithmill",
    "Dionysus Mawby",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Avigdor Oloshkin",
    "Zak Bulfit",
    "Inna Clowley"
  ]
}, {
  "id": 15,
  "title": "Eayo",
  "date": "9/19/2021",
  "place": "80501 Sundown Center",
  "development": [
    "Reichert, Toy and Kuhlman",
    "Wiegand LLC",
    "Cruickshank Group",
    "Lockman-Cummings",
    "Kunze, Shanahan and Wisoky",
    "Erdman Inc",
    "Barrows, Johns and Hilll",
    "Romaguera and Sons",
    "Greenfelder LLC",
    "Marquardt Inc"
  ],
  "developers": [
    "Avigdor Oloshkin",
    "Donnell Studart",
    "Cilka Cesaric",
    "Valentina Forte",
    "Kesley Reisin",
    "Dionysus Mawby",
    "Danika Schlagtmans",
    "Ardath Raithmill",
    "Inna Clowley",
    "Zak Bulfit"
  ]
}, {
  "id": 16,
  "title": "Muxo",
  "date": "7/6/2021",
  "place": "5 Orin Crossing",
  "development": [
    "Barton-Schmitt",
    "Parker, Bauch and Hirthe",
    "Stroman-Romaguera",
    "Jast Inc",
    "Schuppe-Bernier",
    "Rath-Kozey",
    "Jenkins-Marquardt",
    "Osinski, Wehner and Koch",
    "Wiegand, Lesch and Wiza",
    "Bode, Nolan and Stark"
  ],
  "developers": [
    "Ardath Raithmill",
    "Donnell Studart",
    "Zak Bulfit",
    "Danika Schlagtmans",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Inna Clowley",
    "Avigdor Oloshkin",
    "Dionysus Mawby",
    "Valentina Forte"
  ]
}, {
  "id": 17,
  "title": "Meembee",
  "date": "3/14/2022",
  "place": "836 Roth Drive",
  "development": [
    "Schulist and Sons",
    "Osinski Group",
    "Corkery, Herzog and Hodkiewicz",
    "Jerde Group",
    "Koepp-Gottlieb",
    "Wuckert, Sauer and Balistreri",
    "Gottlieb, Tromp and Ruecker",
    "Braun Group",
    "Rodriguez-Hamill",
    "Baumbach, Greenfelder and Stanton"
  ],
  "developers": [
    "Avigdor Oloshkin",
    "Hubert Cornilleau",
    "Valentina Forte",
    "Zak Bulfit",
    "Danika Schlagtmans",
    "Fionnula Beastall",
    "Inna Clowley",
    "Donnell Studart",
    "Kesley Reisin",
    "Ardath Raithmill"
  ]
}, {
  "id": 18,
  "title": "Wikizz",
  "date": "11/7/2021",
  "place": "21686 Raven Crossing",
  "development": [
    "Jaskolski-Purdy",
    "Schowalter Group",
    "Schultz-Hagenes",
    "Kub Inc",
    "Hilpert, Gislason and Zieme",
    "Toy-Mills",
    "Mayer Inc",
    "Volkman, Barrows and Schmeler",
    "Lakin, Johnson and Grady",
    "Nicolas-Daniel"
  ],
  "developers": [
    "Donnell Studart",
    "Cilka Cesaric",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Ardath Raithmill",
    "Valentina Forte",
    "Kesley Reisin",
    "Inna Clowley",
    "Avigdor Oloshkin",
    "Zak Bulfit"
  ]
}, {
  "id": 19,
  "title": "Eire",
  "date": "9/12/2021",
  "place": "20512 Milwaukee Lane",
  "development": [
    "Friesen, Feil and Murazik",
    "Batz Group",
    "Emmerich, Parker and Wilderman",
    "Altenwerth, Morar and Greenfelder",
    "Herzog, Durgan and Marquardt",
    "Bruen, Koelpin and Waters",
    "Aufderhar Inc",
    "Gutkowski, Bauch and Klein",
    "Wilkinson, Cummerata and Shanahan",
    "Willms LLC"
  ],
  "developers": [
    "Donnell Studart",
    "Inna Clowley",
    "Zak Bulfit",
    "Dionysus Mawby",
    "Avigdor Oloshkin",
    "Cilka Cesaric",
    "Hubert Cornilleau",
    "Danika Schlagtmans",
    "Ardath Raithmill",
    "Kesley Reisin"
  ]
}, {
  "id": 20,
  "title": "BlogXS",
  "date": "2/27/2022",
  "place": "5 Sutherland Drive",
  "development": [
    "Schuster-Herman",
    "Bartoletti-Hessel",
    "Weimann, Yundt and Walker",
    "Moore-Towne",
    "Hettinger-Hane",
    "Swift Group",
    "Casper, Gibson and Reichel",
    "Rutherford, Dare and Konopelski",
    "Macejkovic LLC",
    "McLaughlin Group"
  ],
  "developers": [
    "Fionnula Beastall",
    "Ardath Raithmill",
    "Cilka Cesaric",
    "Zak Bulfit",
    "Inna Clowley",
    "Donnell Studart",
    "Dionysus Mawby",
    "Danika Schlagtmans",
    "Kesley Reisin",
    "Hubert Cornilleau"
  ]
}]


//uso cron para agregar un hackathon cada 5 min
const cron = require('node-cron');

const minutero = '0,5,10,15,20,25,30,35,40,45,50,55';
const repetidor = minutero + ' 0-23 1-31 1-12 0-6';

cron.schedule(repetidor, () => {
  //  aca pondria el lugar de donde obtendria la info en la apliacion real


let cantidad = hacklist.length;
//console.log('Cantidad de elementos de hacklist: ' + cantidad);

const nuevo_hackathon = {
  "id": cantidad,
  "title": "Latz",
  "date": "4/5/2022",
  "place": "88 Pine View Street",
  "development": [
    "Huel, Breitenberg and Denesik",
    "Simonis, Zemlak and Abshire",
    "Hilll, Pfannerstill and Leuschke",
    "Hermiston, Abshire and Jacobson",
    "Kiehn and Sons",
    "Brown-Denesik",
    "Schroeder, Huel and Kunze",
    "King-Kerluke",
    "Ortiz-Rau",
    "Glover, Huels and Dooley"
  ],
  "developers": [
    "Zak Bulfit",
    "Inna Clowley",
    "Avigdor Oloshkin",
    "Hubert Cornilleau",
    "Fionnula Beastall",
    "Kesley Reisin",
    "Dionysus Mawby",
    "Valentina Forte",
    "Danika Schlagtmans",
    "Ardath Raithmill"
  ]
};

hacklist.push(nuevo_hackathon);

cantidad = hacklist.length;
//console.log('Nueva cantidad de elementos de hacklist: ' + cantidad);

console.log('corro cada 5 min');
});

/*

  */