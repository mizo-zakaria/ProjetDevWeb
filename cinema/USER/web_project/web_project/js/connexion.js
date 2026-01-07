const fakeUsers = {
    users: [
        {
            id: 1,
            username: "admin",
            email: "admin-mayzou@cinema.ma",
            password: "admin123",
            name: "Zakaria Mayzou"
        },
        {
            id: 2,
            username: "admin",
            email: "admin-elhimer@cinema.ma",
            password: "admin123",
            name: "Hafsa el himer"
        },
        {
            id: 3,
            username: "camerageek",
            email: "camerageek@cinema.ma",
            password: "camera123",
            name: "Karim Camerageek"
        },
        {
            id: 4,
            username: "demo",
            email: "demo@cinema.ma",
            password: "demo123",
            name: "Demo User"
        },
        {
            id: 5,
            username: "maroc",
            email: "maroc@cinema.ma",
            password: "maroc2024",
            name: "Ahmed Maroc"
        },
        {
            id: 6,
            username: "test",
            email: "test@cinema.ma",
            password: "test123",
            name: "Test User"
        },
        {
            id: 7,
            username: "user",
            email: "user@cinema.ma",
            password: "user123",
            name: "Regular User"
        },
        {
            id: 8,
            username: "visitor",
            email: "visitor@cinema.ma",
            password: "visitor123",
            name: "Visitor"
        }
    ],
    
    // Method to find user by username or email
    findUser: function(identifier) {
        return this.users.find(user => 
            user.username === identifier || user.email === identifier
        );
    },
    
    validateCredentials: function(identifier, password) {
        const user = this.findUser(identifier);
        
        if (!user) {
            return {
                success: false,
                message: "Utilisateur non trouvé. Vérifiez votre email ou pseudo."
            };
        }
        
        if (user.password !== password) {
            return {
                success: false,
                message: "Mot de passe incorrect. Réessayez."
            };
        }
        
        return {
            success: true,
            message: "Connexion réussie !",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                name: user.name
            }
        };
    }
};

// Initialize the script when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const eyeIcon = this.querySelector('i');
            eyeIcon.className = type === 'password' ? 'fas fa-eye' : 'fas fa-eye-slash';
            this.title = type === 'password' ? "Afficher le mot de passe" : "Masquer le mot de passe";
        });
    }

    const loginForm = document.getElementById('loginForm');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    const myform = document.querySelector('.myform');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;

            if (usernameError) usernameError.style.display = 'none';
            if (passwordError) passwordError.style.display = 'none';

            let isValid = true;
            if (!username) { usernameError.textContent = "Veuillez entrer votre email ou pseudo"; usernameError.style.display = 'block'; isValid = false; }
            if (!password) { passwordError.textContent = "Veuillez entrer votre mot de passe"; passwordError.style.display = 'block'; isValid = false; }
            else if (password.length < 6) { passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères"; passwordError.style.display = 'block'; isValid = false; }

            if (isValid) {
                const submitBtn = this.querySelector('.btn');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
                submitBtn.disabled = true;

                setTimeout(() => {
                    const result = fakeUsers.validateCredentials(username, password);

                    if (result.success) {

                        // 🔹 ADMIN REDIRECTION: id 1 ou 2
                        if(result.user.id === 1 || result.user.id === 2){
                            window.location.href = '/ADMINISTARION/Dashboard/'; // page admin
                            return; // ne pas continuer le reste
                        }

                        // 🔹 USER NORMAL: créer session
                        CinemaSession.createSession(result.user);

                        // Si film à favori avant login
                        const filmToFavorite = localStorage.getItem('filmToFavorite');
                        if(filmToFavorite !== null){
                            CinemaSession.addFavorite(parseInt(filmToFavorite));
                            localStorage.removeItem('filmToFavorite');
                        }

                        // Success modal
                        const successDiv = document.createElement('div');
                        myform.style.visibility = 'hidden';
                        successDiv.style.cssText = `
                            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                            background: rgba(0,0,0,0.9); color: #ffdb12; padding: 30px;
                            border-radius: 10px; border: 2px solid #ffdb12; z-index: 10000;
                            text-align: center; font-size: 18px; min-width: 300px; max-width: 400px;
                            box-shadow: 0 0 30px rgba(255,219,18,0.3);
                        `;
                        successDiv.innerHTML = `
                            <div style="font-size:50px; margin-bottom:15px;">🎬</div>
                            <h3 style="color:#ffdb12; margin:10px 0;">Connexion Réussie !</h3>
                            <p style="color:white; margin:10px 0; font-size:20px;"><b>${result.user.name}</b></p>
                            <p style="color:rgba(255,255,255,0.7); font-size:14px; margin-top:20px;">Redirection vers votre espace...</p>
                        `;
                        document.body.appendChild(successDiv);

                        setTimeout(() => {
                            window.location.href = '../html/user-dashboard.html';
                        }, 2000);

                    } else {
                        if (usernameError) { usernameError.textContent = result.message; usernameError.style.display = 'block'; }
                        loginForm.style.animation = 'shake 0.5s';
                        setTimeout(() => { loginForm.style.animation = ''; }, 500);
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    }
                }, 1500);
            }
        });
    }

    // Real-time validation
    const usernameInput = document.getElementById('username');
    if(usernameInput && usernameError){
        usernameInput.addEventListener('input',()=>usernameError.style.display='none');
    }
    if(passwordInput && passwordError){
        passwordInput.addEventListener('input',()=>passwordError.style.display='none');
    }

    // Focus animation
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.addEventListener('focus', function(){
            if(this.parentElement){ this.parentElement.style.transform='scale(1.02)'; this.parentElement.style.transition='transform 0.2s ease'; }
        });
        input.addEventListener('blur', function(){
            if(this.parentElement){ this.parentElement.style.transform='scale(1)'; }
        });
    });

    // Shake animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%,100%{transform:translateX(0);}
            10%,30%,50%,70%,90%{transform:translateX(-5px);}
            20%,40%,60%,80%{transform:translateX(5px);}
        }
    `;
    document.head.appendChild(style);
});
