import React, { createContext, useState, useEffect } from "react";

export const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Load favorites from localStorage on initial render
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    useEffect(() => {
        // Save favorites to localStorage whenever they change
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (movie) => {
        if (!favorites.find((fav) => fav.id === movie.id)) {
            setFavorites([...favorites, movie]);
        }
    };

    const removeFavorite = (movieId) => {
        setFavorites(favorites.filter((fav) => fav.id !== movieId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesProvider;
