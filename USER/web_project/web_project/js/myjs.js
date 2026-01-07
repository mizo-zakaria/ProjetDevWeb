const slider = document.querySelector(".slider");
const slider2 = document.querySelector(".slider2")
//objet contenant les info des film afin de les parcourir apres
//tableau associative des date pour le slider des seace c'est uniquement pour le prototype a developper plus tard
/*
const interval = new interval([
  ['JEUDI', '01'],
  ['VENDREDI', '02'],
  ['SAMEDI', '03'],
  ['DIMANCHE', '04'],
  ['LUNDI', '05'],
  ['MARDI', '06'],
  ['MERCREDI', '07'],
  ['JEUDI', '08'],
  ['VENDREDI', '09'],
  ['SAMEDI', '10'],
]);
*/
const filmObject = [
  {

    "img": "../afficheposters/Annaconda.jpeg",
    "titre": "Anaconda",
    "genre": "Comedy",
    "Audience": "all",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min"
  },
  {
    "img": "../afficheposters/avatar.avif",
    "titre": "Avatar",
    "genre": "Fiction",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min"
  },
  {
    "img": "../afficheposters/elsett.avif",
    "titre": "El sett",
    "genre": "Musical",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
  },
  {
    "img": "../afficheposters/femmedemenage.avif",
    "titre": "Femme de menage",
    "genre": "Drama",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
  },
  {
    "img": "../afficheposters/imposteurs.avif",
    "titre": "Les imposteurs",
    "genre": "Comedy",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/jujutsu.avif",
    "titre": "Jujutsu Kaisen",
    "genre": "Animation",
    "lien": "",
    "imgpage":"",
  },
  {
    "img": "../afficheposters/kanbghi.ma.webp",
    "titre": "kanbghik.ma",
    "genre": "Romance",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/noel.jpeg",
    "titre": "Noel",
    "genre": "Family",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/sirat.webp",
    "titre": "Sirat",
    "genre": "Aventure",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/spongebob.avif",
    "titre": "Spongebob-squarepants",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/sungblue.webp",
    "titre": "Song sung bob",
    "genre": "Musical",
    "Audience": "Adults",
    "imgpage":"",
    "lien": "songsungblue.html",
    "duree":"3h 25min",
    /*
    "description":"",
    "firsdate":"",
    "lastdate":"",
    */
    
  },
  {
    "img": "../afficheposters/zootopie.avif",
    "titre": "Zootopie",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  //change films from here 
  {
    "img": "../afficheposters/lespuritains.avif",
    "titre": "Les Purtains",
    "genre": "Drama",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/leslegendaires.webp",
    "titre": "Les Legendaires: le film",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/marsipulami.webp",
    "titre": "Marsipilami",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/hamnet.webp",
    "titre": "Hamnet",
    "genre": "Romance",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/leparc.webp",
    "titre": "Le parc",
    "genre": "Animation",
    "Audience": "Musical",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/unbalmasque.webp",
    "titre": "Un Bal Masque",
    "genre": "Animation",
    "Audience": "Aduls",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/jumpers.webp",
    "titre": "Jumpers",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/thebride.avif",
    "titre": "The bride",
    "genre": "Horror",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
  },
  {
    "img": "../afficheposters/tristan.avif",
    "titre": "Tristan et Isolde",
    "genre": "drama",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    
  },
  {
    "img": "../afficheposters/thedogstars.webp",
    "titre": "The dog stars",
    "genre": "Aventure",
    "Audience": "Family",
    "lien": "",
     "imgpage":"",
     "duree":"3h 25min",
     "version":"VF"
  },
  {
    "img": "../afficheposters/supermario.webp",
    "titre": "Super mario galaxy",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },

  {
    "img": "../afficheposters/tosca.webp",
    "titre": "Tosca",
    "genre": "Animation",
    "Audience": "Musical",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VF"
  },
  {
    "img": "../afficheposters/micheal.avif",
    "titre": "Michael",
    "genre": "Musical",
    "Audience": "All",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/frida.avif",
    "titre": "Le dernier reve de frida et diego",
    "genre": "Romace",
    "Audience": "Adults",
    "lien": "frida.html",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },

];
//fonction d'ajout des posters
window.addEventListener("load", initSlider());
function initSlider() {
  let films = "";

  for (let film = 0; film < 12; film++) {
    films += `<div class="slide"> 
    <a href="${filmObject[film].lien}" style='text-decoration:none'>
    <img src="${filmObject[film].img}" alt="image">
    <br><br>
    <div>
    <h3 style='font-family: "Pirata One", system-ui;font-size:30px;color:#ffdb12;'>${filmObject[film].titre}</h3>
    <p style='font-size:16px;color:rgba(255, 251, 251, 0.56);font-family: system-ui;'><b>Genre :</b> ${filmObject[film].genre}</p>
    </div>
    </a>
    <style>
img{ overflow: hidden;border-radius: 3px;transition: transform 0.5s ease;
transform-origin: center center; 
}
img:hover {
    transform: scale(1.1); 
}
    </style>
    </div>
    `;
  }
  let films2 = "";
  for (let film = 12; film < 26; film++) {
    films2 += `<div class="slide"> 
    <a href="${filmObject[film].lien}" style='text-decoration:none'>
    <img src="${filmObject[film].img}" alt="image">
    <br><br>
    <div>
    <h3 style='font-family: "Pirata One", system-ui;font-size:30px;color:#ffdb12;'>${filmObject[film].titre}</h3>
    <p style='font-size:16px;color:rgba(255, 251, 251, 0.56);font-family: system-ui;'><b>Genre :</b> ${filmObject[film].genre}</p>
    </div>
    </a>
    <style>
img{ overflow: hidden;border-radius: 3px;transition: transform 0.5s ease;
transform-origin: center center; 
}
img:hover {
    transform: scale(1.1); 
}
    </style>
    </div>
    `;
  }
  //using Tiny slider Js 
  slider.innerHTML = films;
  slider2.innerHTML = films2;
  const tnslider = tns({
    container: ".slider",
    autoWidth: true,
    controls: true,
    controlsText: [
      '<i class="bi bi-chevron-double-left" ></i>',
      '<i class="bi bi-chevron-double-right" ></i>'
    ],
    gutter: 15,
    slideBy: 1,
    nav: false,
    speed: 400,
    controlsContainer: false,
    autoplay: false,

  })
  //secondslider
  const tnslider2 = tns({
    container: ".slider2",
    autoWidth: true,
    controls: true,
    controlsText: [
      '<i class="bi bi-chevron-double-left" ></i>',
      '<i class="bi bi-chevron-double-right" ></i>'
    ],
    gutter: 15,
    slideBy: 1,
    nav: false,
    speed: 400,
    controlsContainer: false,
    autoplay: false,

  })
}
