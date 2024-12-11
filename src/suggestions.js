export const generateSuggestions = (favorites, allMovies) => {
    if (!favorites || favorites.length === 0) {
        // Fallback: return the most popular movies
        return allMovies.slice(0, 10);
    }

    // Extract genres from favorite movies
    const favoriteGenres = new Set();
    favorites.forEach((movie) => {
        movie.genre_ids.forEach((genre) => favoriteGenres.add(genre));
    });

    // Filter all movies by matching genres
    const filteredMovies = allMovies.filter((movie) =>
        movie.genre_ids.some((genre) => favoriteGenres.has(genre))
    );

    // Sort by highest vote average
    return filteredMovies.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10);
};
