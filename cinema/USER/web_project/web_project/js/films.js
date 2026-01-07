/*  Je ne comprends pas le code de Json et Vanilla , je preferes ecrire un solution non optimale au lieu d'intergrer un code que je comprend pas , cette solution sera ameliore apres */
const frida = 
  {
    "img": "afficheposters/frida.avif",
    "titre": "Le dernier reve de frida et diego",
    "genre": "Romace",
    "Audience": "Adults",
    "lien": "frida.html",
    "duree":"2h 13min",
     "version":'VF',
    "description":"Le Jour des morts, Frida Kahlo et Diego Rivera revivent brièvement leur amour tumultueux, embrassant à la fois la passion et la douleur, avant de faire un dernier adieu à la terre des vivants.— La saison s'achève avec le premier opéra de la compositrice américaine Gabriela Lena Frank : un portrait magico-réaliste du couple de peintres Frida Kahlo et Diego Rivera, conçu comme une inversion du mythe d'Orphée et Eurydice.",
  };
  //code pour afficher/masquer nav bar des que l'utilisateur sroll down ou up
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // ONLY check scroll direction, not position
    if (scrollTop > lastScrollTop) {
        //  DOWN - masquer
        navbar.classList.add('hidden');
        navbar.classList.remove('visible');
    } else {
        // Going UP - afficher
        navbar.classList.remove('hidden');
        navbar.classList.add('visible');
    }
    
    lastScrollTop = scrollTop;
});
//film page , ce code peut etre ameliorer afin d'etre utilise pour la generation de tout les page 
const infofilm=document.getElementById('contenu');
let infos=`
 <h1 style='font-size:86px;position:relative;left:78%;font-family:"Pirata One",system-ui;text-align:center; overflow-wrap: break-word;max-width:480px;'>${frida.titre}</h1>
        <div class="desc">
                <p>${frida.description}</p>
                <p style="font-size:16px;"><b>Duree:</b>${frida.duree} &nbsp&nbsp &nbsp&nbsp &nbsp&nbsp <b>Genre:</b>${frida.genre} &nbsp&nbsp &nbsp&nbsp &nbsp <b>Audience:</b>${frida.Audience}
                    &nbsp &nbsp<b>Version:</b>${frida.version}</p>
        </div>  
        <div id="choix">
        <a href=""><i class="bi bi-heart"style="position:relative;top:1px"></i>&nbsp&nbsp Ajouter au favoris</a>
        </div>  
<style>
.desc {
  width:550px;
  background:transparent;
  backdrop-filter: blur(10px);
  box-shadow :0 0 10px rgba(0,0,0,.2);
 
  padding: 30px 40px;
  font-weight: 200;
}
.desc {
position :absolute;
left:1%;
bottom:55%;
line-height: 1.6;
font-size: 1.1rem;
 opacity: 0.9;
}

    .desc b{
        color:#ffdb12;
    }
      
</style>  `;
infofilm.innerHTML=infos;