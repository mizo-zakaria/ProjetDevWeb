  // code de nav bar responsive
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
//ajout des films
const filmObject = [
  {

    "img": "../afficheposters/Annaconda.jpeg",
    "titre": "Anaconda",
    "genre": "Comedy",
    "Audience": "all",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/avatar.avif",
    "titre": "Avatar",
    "genre": "Fiction",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
     "version":"VF"
  },
  {
    "img": "../afficheposters/elsett.avif",
    "titre": "El sett",
    "genre": "Musical",
    "Audience": "Adults",
    "lien": "",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/femmedemenage.avif",
    "titre": "Femme de menage",
    "genre": "Drama",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "version":"VF"
  },
  {
    "img": "../afficheposters/imposteurs.avif",
    "titre": "Les imposteurs",
    "genre": "Comedy",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },
  {
    "img": "../afficheposters/jujutsu.avif",
    "titre": "Jujutsu Kaisen",
    "genre": "Animation",
    "lien": "",
    "imgpage":"",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/kanbghi.ma.webp",
    "titre": "kanbghik.ma",
    "genre": "Romance",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VF"
  },
  {
    "img": "../afficheposters/noel.jpeg",
    "titre": "Noel",
    "genre": "Family",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VF"
  },
  {
    "img": "../afficheposters/sirat.webp",
    "titre": "Sirat",
    "genre": "Aventure",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },
  {
    "img": "../afficheposters/spongebob.avif",
    "titre": "Spongebob-squarepants",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/sungblue.webp",
    "titre": "Song sung bob",
    "genre": "Musical",
    "Audience": "Adults",
    "imgpage":"",
    "lien": "songsungblue.html",
    "duree":"3h 25min",
    "version":"VOSTF"
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
    "version":"VOSTF"
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
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/leslegendaires.webp",
    "titre": "Les Legendaires: le film",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },
  {
    "img": "../afficheposters/marsipulami.webp",
    "titre": "Marsipilami",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VF"
  },
  {
    "img": "../afficheposters/hamnet.webp",
    "titre": "Hamnet",
    "genre": "Romance",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },
  {
    "img": "../afficheposters/leparc.webp",
    "titre": "Le parc",
    "genre": "Animation",
    "Audience": "Musical",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/unbalmasque.webp",
    "titre": "Un Bal Masque",
    "genre": "Animation",
    "Audience": "Aduls",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
  },
  {
    "img": "../afficheposters/jumpers.webp",
    "titre": "Jumpers",
    "genre": "Animation",
    "Audience": "Kids",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VF"
  },
  {
    "img": "../afficheposters/thebride.avif",
    "titre": "The bride",
    "genre": "Horror",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VOSTF"
  },
  {
    "img": "../afficheposters/tristan.avif",
    "titre": "Tristan et Isolde",
    "genre": "drama",
    "Audience": "Adults",
    "lien": "",
    "imgpage":"",
    "duree":"3h 25min",
    "version":"VO"
    
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
const ajouter=document.getElementById('programme');
window.addEventListener("load", ajouteLesFilms());
function ajouteLesFilms() {
  let films = "";

  for (let film = 0; film < 26; film++) {
    films += `<div class="elment"> 
    <a href="${filmObject[film].lien}" style='text-decoration:none'>
    <img src="${filmObject[film].img}" alt="image">
    <br><br>
    <div>
    <h3 style='font-family: "Pirata One", system-ui;font-size:27px;color:#ffdb12;'>${filmObject[film].titre}</h3>
    <p style='font-size:16px;color:rgba(255, 251, 251, 0.56);font-family: system-ui;'><b>Genre :</b> ${filmObject[film].genre}</p>
    <p style='font-size:16px;color:rgba(255, 251, 251, 0.56);font-family: system-ui;'><b>Version :</b> ${filmObject[film].version}</p>
    </div>
    </a>
    <style>
img{ overflow:hidden;border-radius: 3px;transition: transform 0.5s ease;
transform-origin: center center;
}
img:hover {
    transform: scale(1.1); 
}

    </style>
    </div>
    `;
  }
  ajouter.innerHTML = films;
}
//session check
function updateProfileIcon() {
    const profileLink = document.getElementById('profileLink');
    
    if (!profileLink) return;
    
    if (CinemaSession && CinemaSession.isLoggedIn()) {
        const user = CinemaSession.getCurrentUser();
        
        // connecte ?
        profileLink.innerHTML = '<i class="bi bi-person-fill" style="color:#ffdb12; font-size:20px;"></i>';
        profileLink.href = '../html/user-dashboard.html';
        profileLink.title = user ? user.name : 'Mon compte';
        
        // ajout de nom d'utilisateur
        if (user) {
            profileLink.innerHTML += `<span style="margin-left:5px; color:#ffdb12; font-size:14px;">
                ${user.name.split(' ')[0]}
            </span>`;
        }
        
    } else {
        // non connecte? redirection vers la page de connexion 
        profileLink.innerHTML = '<i class="bi bi-person" style="color:#ffdb12; font-size:20px;"></i>';
        profileLink.href = '../html/connexion.html';
        profileLink.title = 'Se connecter';
        
        // supprimer le nom d'utilisateur s'il existe deja
        const userNameSpan = profileLink.querySelector('span');
        if (userNameSpan) userNameSpan.remove();
    }
}

// fonction pour ajouter l'icon de favoris au film
function addFavoriteButtons() {
    const filmElements = document.querySelectorAll('#programme .elment');
    
    filmElements.forEach((filmElement, index) => {
        // tester s'il existe deja
        if (filmElement.querySelector('.favorite-btn')) return;
        
        //  sinon creation
        const favoriteBtn = document.createElement('button');
        favoriteBtn.className = 'favorite-btn';
        favoriteBtn.dataset.filmId = index;
        favoriteBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 68px;
            background: rgba(0, 0, 0, 0.7);
            border: 2px solid rgba(255, 219, 18, 0.5);
            color: #ffdb12;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: all 0.3s;
            z-index: 10;
        `;
        
        // ajuster la position des film
        filmElement.style.position = 'relative';
        
        // ajouter le btn au film
        filmElement.appendChild(favoriteBtn);
        
        // etat initial du button
        updateFavoriteButton(favoriteBtn, index);
        
        // evenement d'ajout 
        favoriteBtn.addEventListener('click', function(e) {
            e.stopPropagation(); //pour ne pas ouvrir le lien de film en cliquant sur l'icon de fav
            handleFavoriteClick(index, favoriteBtn);
        });
    });
}

//  fav button click
function handleFavoriteClick(filmId, button) {
    if (!CinemaSession || !CinemaSession.isLoggedIn()) {
        // enrigistrer l'id de film + redirection
        localStorage.setItem('filmToFavorite', filmId);
        localStorage.setItem('redirectAfterLogin', window.location.href);
        
        if (confirm('Connectez-vous pour ajouter ce film à vos favoris. Voulez-vous vous connecter ?')) {
            window.location.href = '../html/connexion.html';
        }
        return;
    }
    
    // Toggle fav
    const isNowFavorite = CinemaSession.toggleFavorite(filmId);
    
    updateFavoriteButton(button, filmId);
    

    showFavoriteFeedback(isNowFavorite);
}

// apparence de button fav
function updateFavoriteButton(button, filmId) {
    if (!CinemaSession) return;
    
    const isLoggedIn = CinemaSession.isLoggedIn();
    const isFavorite = CinemaSession.isFavorite(filmId);
    
    //creation d'icon
    let icon = button.querySelector('i');
    if (!icon) {
        icon = document.createElement('i');
        button.appendChild(icon);
    }
    
    if (isLoggedIn) {
        button.disabled = false;
        button.style.opacity = '1';
        button.style.borderColor = isFavorite ? '#ffdb12' : 'rgba(255, 219, 18, 0.5)';
        button.style.background = isFavorite ? 'rgba(255, 219, 18, 0.3)' : 'rgba(0, 0, 0, 0.7)';
        icon.className = isFavorite ? 'fas fa-heart' : 'far fa-heart';
        button.title = isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris';
    } else {
        button.disabled = true;
        button.style.opacity = '0.6';
        button.style.borderColor = 'rgba(255, 219, 18, 0.3)';
        button.style.background = 'rgba(0, 0, 0, 0.5)';
        icon.className = 'far fa-heart';
        button.title = 'Connectez-vous pour ajouter aux favoris';
    }
}

//  message d'ajout 
function showFavoriteFeedback(isAdded) {
    // Remove existing feedback
    const existing = document.querySelector('.favorite-feedback');
    if (existing) existing.remove();
    
    // Creation de message
    const feedback = document.createElement('div');
    feedback.className = 'favorite-feedback';
    feedback.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${isAdded ? 'rgba(76, 175, 80, 0.9)' : 'rgba(244, 67, 54, 0.9)'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease-out;
    `;
    
    feedback.innerHTML = `
        <i class="fas ${isAdded ? 'fa-heart' : 'fa-heart-broken'}"></i>
        <span>${isAdded ? 'Ajouté aux favoris !' : 'Retiré des favoris'}</span>
    `;
    
    document.body.appendChild(feedback);
    
    // ajout d'animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // supprimer apres 3 secondes
    setTimeout(() => {
        feedback.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for films to load
    setTimeout(() => {
        // Check if CinemaSession is available
        if (typeof CinemaSession === 'undefined') {
            console.error('CinemaSession not loaded! Make sure session.js is included.');
            return;
        }
        
        // 1. Update profile icon
        updateProfileIcon();
        
        // 2. Add favorite buttons to films
        addFavoriteButtons();
        
        // 3. Check if user just logged in with a film to favorite
        const filmToFavorite = localStorage.getItem('filmToFavorite');
        if (filmToFavorite && CinemaSession.isLoggedIn()) {
            CinemaSession.addFavorite(parseInt(filmToFavorite));
            localStorage.removeItem('filmToFavorite');
            
            // Update buttons
            addFavoriteButtons();
            
            // Show success message
            setTimeout(() => {
                showFavoriteFeedback(true);
            }, 500);
        }
        
        // 4. Save filmObject to localStorage for dashboard access
        if (typeof filmObject !== 'undefined' && filmObject.length > 0) {
            localStorage.setItem('filmObject', JSON.stringify(filmObject));
        }
    }, 100);
});

// Listen for storage changes (login/logout from other tabs)
window.addEventListener('storage', function(e) {
    if (e.key === 'cinemaUserSession') {
        updateProfileIcon();
        addFavoriteButtons();
    }
});
