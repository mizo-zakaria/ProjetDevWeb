// session.js - Session Management
const CinemaSession = {
    // Check if user is logged in
    isLoggedIn: function() {
        const session = localStorage.getItem('cinemaUserSession');
        return session !== null;
    },

    // Get current user data
    getCurrentUser: function() {
        if (!this.isLoggedIn()) return null;
        try {
            return JSON.parse(localStorage.getItem('cinemaUserSession')).user;
        } catch (error) {
            return null;
        }
    },

    // Create new user session
    createSession: function(user) {
        const sessionData = {
            user: user,
            loginTime: new Date().toISOString(),
            sessionId: 'cinema_' + Date.now()
        };
        
        localStorage.setItem('cinemaUserSession', JSON.stringify(sessionData));
        localStorage.setItem('isLoggedIn', 'true');
        
        // Initialize user favorites with user ID
        if (!localStorage.getItem(`favorites_${user.id}`)) {
            localStorage.setItem(`favorites_${user.id}`, JSON.stringify([]));
        }
        
        return sessionData;
    },

    // Clear user session (logout)
    clearSession: function() {
        const user = this.getCurrentUser();
        localStorage.removeItem('cinemaUserSession');
        localStorage.removeItem('isLoggedIn');
    },

    // Get user's favorite films
    getUserFavorites: function() {
        const user = this.getCurrentUser();
        if (!user) return [];
        
        try {
            const favorites = localStorage.getItem(`favorites_${user.id}`);
            return favorites ? JSON.parse(favorites) : [];
        } catch (error) {
            return [];
        }
    },

    // Add film to user's favorites
    addFavorite: function(filmId) {
        const user = this.getCurrentUser();
        if (!user) return false;
        
        let favorites = this.getUserFavorites();
        if (!favorites.includes(filmId)) {
            favorites.push(filmId);
            localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
            return true;
        }
        return false;
    },

    // Remove film from user's favorites
    removeFavorite: function(filmId) {
        const user = this.getCurrentUser();
        if (!user) return false;
        
        let favorites = this.getUserFavorites();
        const index = favorites.indexOf(filmId);
        if (index > -1) {
            favorites.splice(index, 1);
            localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
            return true;
        }
        return false;
    },

    // Check if film is in user's favorites
    isFavorite: function(filmId) {
        const favorites = this.getUserFavorites();
        return favorites.includes(filmId);
    },

    // Toggle favorite status
    toggleFavorite: function(filmId) {
        if (this.isFavorite(filmId)) {
            this.removeFavorite(filmId);
            return false;
        } else {
            this.addFavorite(filmId);
            return true;
        }
    }
};

